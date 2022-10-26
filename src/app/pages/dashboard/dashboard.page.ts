import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MovieDataService } from 'src/app/services/movie-data.service';
import { RjxsService } from 'src/app/services/rjxs.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  arrayMovies: any;
  filterList: any;

  textToFind: string = '';
  showList: boolean = false;

  constructor(  public router: Router,
                private rxjsService: RjxsService,
                private alertController: AlertController,
                private movieService: MovieDataService) { }

  ngOnInit() {
    this.movieService.getDataMoviesAll().subscribe( (data)=>{
      this.arrayMovies = data;
      console.log('arrayMovies', this.arrayMovies);
    });

    this.movieService.getMovieByFilterData().subscribe( (resp)=>{
      this.filterList = resp;
      this.filterList = this.filterList.map( (item)=>{
        return{ ...item.show, score: item.score }
      })      
    });
    
  }

  viewDetails(movie, from:string){
    this.rxjsService.setDetailMovieItem(movie['_embedded'].show);
    this.router.navigateByUrl('detail');
    // if(from === 'card'){
    // }else{
    //   this.rxjsService.setDetailMovieItem(movie);
    //   this.router.navigateByUrl('detail');
    // }
  }


  findElementInBar(evt: Event){
  
    this.textToFind = evt['detail'].value;
    
    if(this.textToFind.length >= 1){
      this.showList = true;
    }else{
      this.showList = false;
    }
    
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '¿Quieres cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Confirmar',
          role: 'confirm',
          handler: () => this.logoutAndClear(),
        },
      ],
    });

    await alert.present();
  }

  logoutAndClear(){
    localStorage.clear();
    this.router.navigateByUrl('welcome');
  }

}
