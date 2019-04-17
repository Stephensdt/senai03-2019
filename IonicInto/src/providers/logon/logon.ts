import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpProvider } from '../api-login/http';

/*
  Generated class for the ApiLoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LogonProvider {

  constructor(private http : HttpProvider) {
    console.log('Hello ApiLoginProvider Provider');
  }

  public login (username : string, password : string){
    let obj = {
      userName : username,
      password : password
    }
      this.http.url = 'http://localhost:3000/logon'
    return this.http.post(obj);

  }

}
