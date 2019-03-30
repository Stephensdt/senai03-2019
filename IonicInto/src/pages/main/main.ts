import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TamanhoProvider } from '../../providers/tamanho/tamanho';
import { SaboresProvider } from '../../providers/sabores/sabores';
import { DadosPage } from '../dados/dados';


/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  public listaTamanhos = [];
  public listaSabores = [];
  public idTamanho : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private tamanho : TamanhoProvider, private sabor : SaboresProvider) {
  }

  onChange(){
    console.log(this.idTamanho);
    this.sabor.listarSabores(this.idTamanho).subscribe(
      (data : any) => {
        console.log(data)
        this.listaSabores = data
      },
      (error : any) => {
     }
    )
  }

  ionViewDidLoad() {
    this.tamanho.listarTamanhos().subscribe(
      (data : any) => {
        this.listaTamanhos = data
      },
      (error : any) => {
     }
    )
  }

  pageDados(){
    this.navCtrl.push(DadosPage);
  }
}
