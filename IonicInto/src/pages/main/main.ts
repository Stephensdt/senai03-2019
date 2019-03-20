import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TamanhoProvider } from '../../providers/tamanho/tamanho';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, private tamanho : TamanhoProvider) {
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

}
