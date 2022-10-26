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
      this.movieName = element.name;
      this.backGround = element.image.original;
      this.gendre = element.type;
      this.summary = element.summary;
      this.summary  = this.summary.substring(3);
      this.summary = this.summary.slice(0,-4);
      this.schedule =  element.schedule;
    });
  }

  backNavigate(){
    this.navCtrl.pop();
  }

}
