import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Toast } from '../../providers/toast';
import { CadsaborProvider } from '../../providers/cadsabor/cadsabor';

/**
 * Generated class for the SaboresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sabores',
  templateUrl: 'sabores.html',
})
export class SaboresPage {
  sabor:string;
  preco:string;
  constructor(public navCtrl: NavController, private toast: Toast, private sabores : CadsaborProvider) {
  }

  public showToast(){
    this.toast.show("Erro de Cadastro", 10000);
  }

  cadastrar() {
    console.log(this.sabor);
    console.log(this.preco);

    this.sabores.cadSabor(this.sabor, this.preco).subscribe(
      (data : any) => {
        this.toast.show("Login Efetuado com Susexo")
      },
      (error : any) => {
      this.toast.show("Erro de Cadastro")
     }
    )
  }

}
