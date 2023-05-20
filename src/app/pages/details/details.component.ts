import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})


export class DetailsComponent {

  private urlPokemonId:string = "https://pokeapi.co/api/v2/pokemon";
  private urlPokemonName:string = "https://pokeapi.co/api/v2/pokemon-species";

  public pokemon:Array<any> = [];
  public isLoading: boolean = false;
  public apiError: boolean = false;
  public loading: boolean = false;

  constructor(
    private activatedRoute:ActivatedRoute,
    private pokeApiService: PokeApiService
    ){}
  
  ngOnInit(): void{
    this.loading = true
    setTimeout(() => {
      this.getPokemon();
    }, 800);
      
  }

  public getPokemon() {
    const id = this.activatedRoute.snapshot.params['id'];
    const pokemon = this.pokeApiService.apiGetPokemon(`${this.urlPokemonId}/${id}`)
    const name = this.pokeApiService.apiGetPokemon(`${this.urlPokemonName}/${id}`)

    return forkJoin([pokemon, name]).subscribe(
      res => {
        this.pokemon = res;
        this.isLoading = true;
        this.loading = false;
      },
      error => {
        this.apiError = true;
        this.loading = false;
      }
      );
  }

  getTypeClass(typeName: string) {
    switch (typeName) {
      case 'grass':
        return 'grass-type';
      case 'fire':
        return 'fire-type';
      case 'poison':
        return 'poison-type';
      case 'water':
        return 'water-type';
      case 'electric':
        return 'electric-type';
      case 'fighting':
        return 'fighting-type';
      case 'psychic':
        return 'psychic-type';
      case 'rock':
        return 'rock-type';
      case 'bug':
        return 'bug-type';
      case 'ground':
          return 'ground-type';
      case 'fairy':
          return 'fairy-type';
      case 'ghost':
          return 'ghost-type';
      case 'dragon':
          return 'dragon-type'
      default:
        return 'normal-type';
    }
  }
}
