import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpProvider } from '../api-login/http';

/*
  Generated class for the TamanhoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TamanhoProvider {

  constructor(private http : HttpProvider) {
    console.log('Hello TamanhoProvider Provider');
  }

  public listarTamanhos(){
    this.http.url = 'http://localhost:3000/tamanhos'
    return this.http.get();
  }

}
