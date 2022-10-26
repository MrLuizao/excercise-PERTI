import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RjxsService } from 'src/app/services/rjxs.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  movieName: string;
  constructor( private rxjsService: RjxsService, public navCtrl: NavController ) { }

  ngOnInit() {
    this.rxjsService.$getdetailMovieItem.subscribe( (element)=>{
      console.log('$getdetailMovieItem', element);
      this.movieName = element['_embedded'].show.name;
    });
  }

  backNavigate(){
    this.navCtrl.pop();
  }

}
