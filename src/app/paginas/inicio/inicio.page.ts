import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { PokemonApiService } from 'src/app/servicios/pokemon-api.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class InicioPage implements OnInit {

  pokemonList: any[] = [];


  constructor(private pokemonService: PokemonApiService) { }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons(){
    this.pokemonService.getPokemons(this.pokemonService.API_URL).subscribe({
      next: (result: any) => {
        this.pokemonList = this.pokemonService.getObjectsPokemons(result);
        console.log(this.pokemonList);
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }

}
