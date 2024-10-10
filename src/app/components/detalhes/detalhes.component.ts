import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Carros } from '../../models/Carros';
import { CarrosService } from '../../services/carros.service';
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';


@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [CommonModule, MdbFormsModule, ],
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss'] // Corrigido para styleUrls
})
export class DetalhesComponent implements OnInit, OnDestroy {
  carro!: Carros;
  mensagem: string = '';
  currentImageIndex: number = 0;
  imageChangeSubscription!: Subscription;

  constructor(private router: Router, private carrosService: CarrosService, private route: ActivatedRoute) {}

  ngOnInit() {
    const carroId = this.route.snapshot.paramMap.get('id');

    if (carroId) {
      this.carrosService.getById(+carroId).subscribe(
        data => {
          this.carro = data;
          console.log('Detalhes do carro:', data);
          this.startImageChange();
        },
        error => {
          this.mensagem = 'Erro ao buscar detalhes do carro.';
          console.error('Erro ao buscar detalhes:', error);
        }
      );
    } else {
      this.mensagem = 'ID do carro não fornecido.';
    }
  }

  startImageChange() {
    this.imageChangeSubscription = interval(3000).subscribe(() => {
      if (this.carro && this.carro.image.length > 0) {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.carro.image.length;
      }
    });
  }

  ngOnDestroy() {
    if (this.imageChangeSubscription) {
      this.imageChangeSubscription.unsubscribe();
    }
  }
}
