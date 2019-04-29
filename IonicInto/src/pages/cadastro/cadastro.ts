import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Toast } from '../../providers/toast';
import { UsuarioProvider } from '../../providers/usuario/usuario';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  username:string;
  password:string;
  constructor(public navCtrl: NavController, private toast: Toast, private usuario : UsuarioProvider) {
  }

  public showToast(){
    this.toast.show("Erro de Cadastro", 10000);
  }

  cadastrar() {
    console.log(this.username);
    console.log(this.password);

    this.usuario.usuario(this.username, this.password).subscribe(
      (data : any) => {
        this.toast.show("Login Efetuado com Susexo")
      },
      (error : any) => {
      this.toast.show("Erro de Cadastro")
     }
    )
  }

}
