import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Listen } from 'ionicons/dist/types/stencil-public-runtime';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {

  API_URL: string = "https://pokeapi.co/api/v2/pokemon"
  offset: number = 20;
  limit: number = 20;
  lista: any[] = [];


  constructor(private httpCliente: HttpClient) { }

  getPokemons(url: string): Observable<any>{
    return this.httpCliente.get(url).pipe(res => res);
  }


  getObjectsPokemons(pokemons: any): any{
    this.lista = pokemons.results;
    this.lista.map(ele =>{
      const resutl: Observable<any> = this.getPokemons(ele.url).pipe(res => res);
      


      console.log();
    });

  }
}
