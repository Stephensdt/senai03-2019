import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiLoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiLoginProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ApiLoginProvider Provider');
  }

  private login (userName : string, password : string){

  }

}
