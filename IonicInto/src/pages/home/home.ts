import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Toast } from '../../providers/toast'
import { MainPage } from '../main/main';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username:string;
  password:string;
  constructor(public navCtrl: NavController, private toast: Toast) {
  }

  public showToast(){
    this.toast.show("Erro de Login", 10000);
  }

  login() {
    if (this.username === "stephen.sdt" && this.password === "sdt1234"){
      this.navCtrl.setRoot(MainPage);
    }
    else{
      this.toast.show("Erro de Login")
    }
  }
}