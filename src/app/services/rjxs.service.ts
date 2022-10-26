import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RjxsService {

  detailMovieItem = new BehaviorSubject<any>({});
  public $getdetailMovieItem = this.detailMovieItem.asObservable();

  constructor() { }

  setDetailMovieItem(param: any){
    this.detailMovieItem.next(param);
  }
}
