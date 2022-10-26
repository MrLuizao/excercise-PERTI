import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

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
  }

}
