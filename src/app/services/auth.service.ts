import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( public httpClient: HttpClient ) { }

  getDataLoginUser(){
    return this.httpClient.get('https://randomuser.me/api').pipe(
      map( (data)=> data['results'])
    );
  }
}
