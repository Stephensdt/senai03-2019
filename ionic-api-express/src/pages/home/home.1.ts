import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Messages } from '../../providers/messages'
import { Toast } from '../../providers/toast'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public listaAlunos = [];
  public exibirConteudo : boolean = true;

  constructor(public navCtrl: NavController, private  messages : Messages, private toast : Toast) {

  }

  public limparAlunos(){
    this.listaAlunos = [];
  }

  public showmessage(){
    this.messages.loadingShow();
  }

  public showToast(){
    this.toast.show("Entrou no app", 10000);
  }

  public adicionarAlunos(){
    this.listaAlunos.push({nome : "Aluno A"});
    this.listaAlunos.push({nome : "Aluno B"});
    this.listaAlunos.push({nome : "Aluno C"});
    this.listaAlunos.push({nome : "Aluno D"});
  }
buttonClick(){
  this.exibirConteudo = !this.exibirConteudo;

 }

}
