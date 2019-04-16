import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpProvider } from '../api-login/http';

/*
  Generated class for the BairrosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BairrosProvider {

  constructor(public http: HttpProvider) {
    console.log('Hello BairrosProvider Provider');
  }

  public listarBairros(idcidade : string){
    this.http.url = 'http://localhost:3000/bairros/' + idcidade
    return this.http.get();
  }
}
