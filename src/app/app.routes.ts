import { Routes } from '@angular/router';
import { CentroComponent } from './components/conteudo/centro/centro.component';
import { DetalhesComponent } from './components/detalhes/detalhes.component';
import { Component } from '@angular/core';
import { ThevideoComponent } from './components/thevideo/thevideo.component';

export const routes: Routes = [

    {path:"", redirectTo:"principal", pathMatch:"full",},
    {path:"principal", component:CentroComponent},
    {path:"detalhes/:id", component:DetalhesComponent},
    {path:"sobre", component:ThevideoComponent}
    
];
