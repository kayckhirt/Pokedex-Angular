import { Component } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent {

  private filteredPokemons: Array<string> = [];
  public allPokemons: Array<any> = []
  public apiError: boolean = false;


  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit() {
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.filteredPokemons = res.results;
        this.allPokemons = this.filteredPokemons;
      },
      error=>{
        this.apiError = true;
      }
    );
  }

  public getSearch(value:string) { 
    const filter = this.filteredPokemons.filter((pokemon:any) => {
      return !pokemon.name.indexOf(value.toLocaleLowerCase()); 
    });
    this.allPokemons = filter
  }
}
