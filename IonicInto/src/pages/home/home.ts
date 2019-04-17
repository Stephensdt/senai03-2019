import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Toast } from '../../providers/toast'
import { MainPage } from '../main/main';
import { LogonProvider } from '../../providers/logon/logon';
import { CadastroPage } from '../cadastro/cadastro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username:string;
  password:string;
  constructor(public navCtrl: NavController, private toast: Toast, private logon : LogonProvider) {
  }

  public showToast(){
    this.toast.show("Erro de Login", 10000);
  }

    cadastro(){
      this.navCtrl.push(CadastroPage);
    }

  login() {
    this.logon.login(this.username, this.password).subscribe(
      (data : any) => {
        this.navCtrl.push(MainPage)
      },
      (error : any) => {
      this.toast.show("Erro de Login")
     }
    )
  }
}
