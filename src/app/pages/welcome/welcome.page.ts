import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSegment, ModalController } from '@ionic/angular';
import { LoginPage } from '../modals/login/login.page';
import { RegisterPage } from '../modals/register/register.page';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  welcomeView: boolean = true;

  constructor( public modalController: ModalController, public router: Router) { }

  ngOnInit( ) {
  }

  segmentChanged(evt){    
    if( evt.detail.value === 'welcome' ){
      this.welcomeView = true
    }else{
      this.presentModal(evt.detail.value);
    }
  }

  async presentModal(modalType: string){

    if(modalType === 'login'){
      const modal = await this.modalController.create({
        component: LoginPage,
      });
      return await modal.present();

    }else{
      const modal = await this.modalController.create({
        component: RegisterPage,
      });
      return await modal.present();
    }

  }

}
