import { Component, inject } from '@angular/core';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { Carros } from '../../../models/Carros';
import { CarrosService } from '../../../services/carros.service';
import { Router } from '@angular/router';
import { Nav2Component } from "../../nav2/nav2.component";





@Component({
  selector: 'app-centro',
  standalone: true,
  imports: [MdbCollapseModule, Nav2Component,],
  templateUrl: './centro.component.html',
  styleUrl: './centro.component.scss'
})
export class CentroComponent {


 




  carros: Carros[]=[];
  carrosEdit: Carros = new Carros(0,"","","","","","");

  constructor(private carrosService: CarrosService, private router: Router) {
    this.listAll();
  
    const carroNovo = history.state?.carroNovo;
    const carroEditado = history.state?.carroEditado;
  
    if (carroNovo) {
      carroNovo.id = 555;
      this.carros.push(carroNovo);
    }
    if (carroEditado) {
      let indice = this.carros.findIndex(x => x.id == carroEditado.id);
      this.carros[indice] = carroEditado;
    }
  }



   listAll(){          //ESTRUTURA PARA METODOD GET RETORNAR
     this.carrosService.listAll().subscribe({
       next:lista => { //QUANDO DER CERTO
         this.carros = lista;

       },
       error: err => { //QUANDO OCORRER ERRO


       }
     });
  };

  mensagem: string = '';

  listMarca(marca: string) {
    this.carrosService.listMarca(marca).subscribe({
      next: lista => { // QUANDO DER CERTO
        this.carros = lista;
        console.log(lista);
        
        // Verifica se a lista está vazia e define a mensagem
        if (this.carros.length === 0) {
          this.mensagem = "Nenhum veículo encontrado";
        } else {
          this.mensagem = ""; // Limpa a mensagem se houver veículos
        }
      },
      error: err => { // QUANDO OCORRER ERRO
        console.log("Erro de depuração");
        this.mensagem = "Ocorreu um erro ao buscar os veículos"; // Opcional: mensagem de erro
      }
    });
  }

  

  salvarLivro() {
    if (this.carrosEdit.nome && this.carrosEdit.image) {
      this.carrosService.save(this.carrosEdit).subscribe({
        next: mensagem => {
          alert("Salvo com sucesso");
  
          this.listAll();
        },
        error: erro => {
          alert("Ocorreu algum erro");
        }
      });
    } else {
      alert("Por favor, preencha todos os campos");
    }
  }



  verDetalhes(carro: Carros) {
    this.router.navigate(['/detalhes', carro.id]);
    window.scrollTo(0, 0); // Rola para o topo após a navegação
    console.log('ID do carro:', carro.id); // Adicione esta linha

  }

}
