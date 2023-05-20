import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private api: string = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"

  constructor(
    private http: HttpClient
  ) { }


  get apiListAllPokemons():Observable<any>{
    return this.http.get<any>(this.api).pipe(
      tap( res => res ),
      tap( res => {
        res.results.map( (resPokemons: any) => {
          this.apiGetPokemon(resPokemons.url).subscribe(
            res => resPokemons.status = res
          );
        })
      })
    )
  }

  public apiGetPokemon( api: string ):Observable<any>{
    return this.http.get<any>( api ).pipe(
      map(
        res => res
      )
    )
  }
}
