import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  loginData: any;

  nameInput: string;
  userInput: string;
  passInput: string;
  dateInput: string;

  constructor(  public modalController: ModalController,
                private authService: AuthService,
                public router: Router) { }

  ngOnInit() {
    this.authService.getDataLoginUser().subscribe( (resp)=>{
      this.loginData = resp[0];
      this.nameInput = `${this.loginData.name['first']} ${this.loginData.name['title']} ${this.loginData.name['last']}`;
      this.userInput = this.loginData.login['username'];
      this.passInput = this.loginData.login['password'];
      this.dateInput = this.loginData.dob['date'];
    });
  }

  cancel() {
    this.modalController.dismiss();
  }

  registryUser(){
    localStorage.setItem('userInput', this.userInput);
    localStorage.setItem('passInput', this.passInput);
    console.log(localStorage.getItem('userInput'));
    console.log(localStorage.getItem('passInput'));
    this.modalController.dismiss();
    this.router.navigateByUrl('dashboard');
  }

}
