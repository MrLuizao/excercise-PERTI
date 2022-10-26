import { Component, OnInit } from '@angular/core';
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

  constructor( public modalController: ModalController ) { }

  ngOnInit() {
    this.userInput = localStorage.getItem('userInput')
    this.passInput = localStorage.getItem('passInput')
    console.log(this.userInput);
    console.log(this.passInput);
  }

  cancel() {
    this.modalController.dismiss();
  }

}
