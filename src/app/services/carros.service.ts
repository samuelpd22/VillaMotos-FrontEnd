import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carros } from '../models/Carros';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {

   //@Autowired
   http = inject(HttpClient); //FAZ REQUISIÇÕES

   API = "http://localhost:8080/carros";



   constructor() { }

   listAll(): Observable<Carros[]>{ //Metodo @GETMapping
     return this.http.get<Carros[]>(this.API);
   }
   listMarca(marca:string): Observable<Carros[]>{ //Metodo @GETMapping
    return this.http.get<Carros[]>(this.API +"/marca/" + marca);
  }

  getById(id:number): Observable<Carros>{
    return this.http.get<Carros>(this.API + "/pegar/"+ id );
  }


   save(carro:Carros): Observable<string>{ //Metodo @PostMapping
     return this.http.post<string>(this.API+"/enviar", carro  ,{ responseType: 'text' as 'json'})//Retorno string? Sempre usar responseType

   }
}
