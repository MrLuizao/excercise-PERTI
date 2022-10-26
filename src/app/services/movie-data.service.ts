import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

  constructor( public httpClient: HttpClient ) { }

  getDataMoviesAll(){
    return this.httpClient.get('http://api.tvmaze.com/schedule/full');
  }

  getMovieByFilterData(){
    return this.httpClient.get('http://api.tvmaze.com/search/shows?q=dram');
  }

}
