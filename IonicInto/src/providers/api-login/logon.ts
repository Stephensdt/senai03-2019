import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpProvider} from './http';

/*
  Generated class for the ApiLoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiLoginProvider {

  constructor(private http : HttpProvider) {
    console.log('Hello ApiLoginProvider Provider');
  }

  private login (username : string, password : string){
    let obj = {
      userName : username,
      password : password
    }

    this.http.post(obj);
  }

}
