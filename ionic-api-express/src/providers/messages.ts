import { Injectable } from '@angular/core';
import { LoadingController, Loading } from 'ionic-angular';

@Injectable()
export class Messages{

    private loading : Loading = null;

    constructor(private loadingController : LoadingController){

    }

    private presentLoading(messsage : string){
        let options = {
            content : messsage,
            duration : 2000
        }
        this.loading = this.loadingController.create(options);

        this.loading.dismissAll();
        this.loading.present();

        return this.loading;
    }

    public loadingShow(messsage : string = "Processando"){
        this.presentLoading(messsage);
    }

    public loadingHide(){
        if (this.loading === null || this.loading === undefined){
            return;
        }
        this.loading.dismiss();
    }
}