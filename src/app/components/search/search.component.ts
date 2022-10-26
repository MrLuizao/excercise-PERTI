import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieDataService } from 'src/app/services/movie-data.service';
import { RjxsService } from 'src/app/services/rjxs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  filterList: any;
  textToFind: string = '';
  showList: boolean = false;

  constructor(  public router: Router, 
                private rxjsService: RjxsService,
                private movieService: MovieDataService ) { }

  ngOnInit() {
    this.movieService.getMovieByFilterData().subscribe( (resp)=>{
      this.filterList = resp;
      this.filterList = this.filterList.map( (item)=>{
        return{ ...item.show, score: item.score }
      })      
    });
  }

  findElementInBar(evt: Event){
  
    this.textToFind = evt['detail'].value;
    
    if(this.textToFind.length >= 1){
      this.showList = true;
    }else{
      this.showList = false;
    }
  }

  viewDetails(movie){
    this.rxjsService.setDetailMovieItem(movie);
    this.router.navigateByUrl('detail');
  }
}
