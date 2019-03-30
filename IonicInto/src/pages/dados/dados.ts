import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CidadesProvider } from '../../providers/cidades/cidades';
import { BairrosProvider } from '../../providers/bairros/bairros';

/**
 * Generated class for the DadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dados',
  templateUrl: 'dados.html',
})
export class DadosPage {
  public listaCidades = [];
  public listaBairros = [];
  public idCidade : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private cidade : CidadesProvider, private bairro : BairrosProvider) {
  }


  onChange(){
    console.log(this.idCidade);
    this.bairro.listarBairros(this.idCidade).subscribe(
      (data : any) => {
        console.log(data)
        this.listaBairros = data
      },
      (error : any) => {
     }
    )
  }

  ionViewDidLoad() {
     this.cidade.listarCidades().subscribe(
      (data : any) => {
        this.listaCidades = data
      },
      (error : any) => {
     }
    )
  }

}
