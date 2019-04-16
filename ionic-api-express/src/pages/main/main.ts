import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TamanhoProvider } from '../../providers/tamanho/tamanho';
import { SaboresProvider } from '../../providers/sabores/sabores';

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
  public listaCidades = [];
  public listaSabores = [];
  public listaBairro = [];
  public idTamanho : any;
  public idCidade : any;

  public idBairro:string;
  public rua:string;
  public numero:string;
  public complemento:string;
  public referencia:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private tamanho : TamanhoProvider, private sabor : SaboresProvider, private cidade : TamanhoProvider, private bairro : SaboresProvider) {
  }

  onChange(){
    this.bairro.listaBairro(this.idCidade).subscribe (
      (data : any) => {
        this.listaBairro = data
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
    ),
    console.log(this.idCidade);
    this.cidade.listarCidades().subscribe(
      (data : any) => {
        console.log(data)
        this.listaCidades = data
      },
      (error : any) => {
     }
    )
  }

  limpaCampos(){
    this.listaBairro = [];

    this.idCidade = null;
    this.idBairro = '';

    this.rua = '';
    this.numero = '';
    this.complemento = '';
    this.referencia = '';
  }

}
