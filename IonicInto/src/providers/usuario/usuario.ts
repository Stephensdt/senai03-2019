import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpProvider } from '../api-login/http';

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {

  constructor(public http: HttpProvider) {
    console.log('Hello UsuarioProvider Provider');
  }
  
  public usuario (username : string, password : string){
    let obj = {
      userName : username,
      password : password
    }
      this.http.url = 'http://localhost:3000/usuario'
    return this.http.post(obj);

  }

}
