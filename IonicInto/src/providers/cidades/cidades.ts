import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpProvider } from '../api-login/http';

/*
  Generated class for the CidadesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CidadesProvider {

  constructor(public http: HttpProvider) {
    console.log('Hello CidadesProvider Provider');
  }

  public listarCidades(){
    this.http.url = 'http://104.196.102.231/cidades'
    return this.http.get();
  }

}
