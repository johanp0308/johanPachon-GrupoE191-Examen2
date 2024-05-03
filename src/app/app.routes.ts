import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { InicioPage } from './paginas/inicio/inicio.page';


export const routes: Routes = [
  {
    path: 'inicio',
    component: InicioPage
  },
  {
    path:'',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadComponent: () => import('./paginas/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'pokemon-info',
    loadComponent: () => import('./paginas/pokemon-info/pokemon-info.page').then( m => m.PokemonInfoPage)
  }
];

