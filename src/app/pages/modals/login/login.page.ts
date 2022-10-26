import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginData: any;

  userInput: string;
  passInput: string;

  constructor(  public modalController: ModalController,
                private toastController: ToastController,
                public router: Router ) { }

  ngOnInit() {
    this.userInput = localStorage.getItem('userInput')
    this.passInput = localStorage.getItem('passInput')
  }

  cancel() {
    this.modalController.dismiss();
  }

  loginUser(){
    this.modalController.dismiss();
    this.router.navigateByUrl('dashboard');
    this.presentToast('Inicio de sesion correcto');

  }

  async presentToast(messagge: string) {
    const toast = await this.toastController.create({
      message: messagge,
      duration: 1500,
      position: 'bottom'
    });

    await toast.present();
  }

}
