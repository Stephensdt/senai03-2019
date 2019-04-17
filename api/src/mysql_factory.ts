import {MySQL} from './mysql';

export class MySQLFactory {
    constructor(){

    }

    public getConnection() : any{
      return new MySQL('localhost', 'root', '1234', 'rest_api');
    }
}