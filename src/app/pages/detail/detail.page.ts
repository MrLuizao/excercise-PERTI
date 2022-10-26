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
  backGround: string;
  gendre: string;
  summary: string;
  schedule: any;

  constructor( private rxjsService: RjxsService, public navCtrl: NavController ) { }

  ngOnInit() {
    this.rxjsService.$getdetailMovieItem.subscribe( (element)=>{
      console.log('$getdetailMovieItem', element);
      this.movieName = element['_embedded'].show.name;
      this.backGround = element['_embedded'].show.image.original;
      this.gendre = element['_embedded'].show.type;
      this.summary = element['_embedded'].show.summary;
      this.summary  = this.summary.substring(3);
      this.summary = this.summary.slice(0,-4);
      console.log('summary', this.summary);
      
      this.schedule =  element['_embedded'].show.schedule;
      console.log( 'schedule',  this.schedule );
      
    });
  }

  backNavigate(){
    this.navCtrl.pop();
  }

}
