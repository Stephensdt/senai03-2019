import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpProvider } from '../api-login/http';

/*
  Generated class for the CadsaborProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CadsaborProvider {

  constructor(public http: HttpProvider) {
    console.log('Hello UsuarioProvider Provider');
  }
  
  public cadSabor (sabor : string, preco : string){
    let obj = {
      sabor : sabor,
      preco : preco
    }
      this.http.url = 'http://localhost:3000/cadsabor'
    return this.http.post(obj);

  }

}