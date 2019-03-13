import { ToastController } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class Toast {

  constructor(public toastCtrl: ToastController) { 

  }

    public show(message : string, duration : number = 5000){ 
      this.toastCtrl.create({
        message: message,
        duration: duration
    }).present();
  }
}