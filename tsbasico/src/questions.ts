import {prompt} from 'inquirer';
import { VpHttp } from './http/vphttp';

export class Perguntas {
    private dadosDoPedido : any;
    private dadosDaEntrega : any;
    private dataSabores : any[] = [];
    private dataTamanho : any[] = [];
    private dataCidade : any[] = [];
    private dataBairros : any[] = [];
    
    public question(){
        this.getSabores();
        //this.pizzaDelivery();
        
    }

    public pizzaDelivery(){
        prompt(
            [
            {
                name: 'name',
                type: 'input',
                message: 'Qual o seu nome?\n',
            },
            {
                name: 'phone',
                type: 'input',
                message: 'Informe o seu telefone:\n'
            },
            {
                name: 'size',
                type: 'list',
                message: 'Escolha um tamanho:',
                choices: this.dataTamanho
            },
            {
                name: 'flavor',
                type: 'list',
                message: 'Escolha um sabor:',
                choices: this.dataSabores
            },
            {
                name: 'qt',
                type: 'input',
                message: 'Quantas pizzas você deseja?:\n'
            },
            {
                name: 'delivery',
                type: 'list',
                message: 'Entrega?',
                choices: ['Entrega','Retirada no Balcão']
            },
        ]
        ).then(
            (answer : any) =>{
                this.dadosDoPedido = answer;
                if(answer.delivery == 'Entrega'){
                    this.makeEntrega();
                } else if(answer.delivery == 'Retirada no Balcão'){   
                    this.makeReport();
                }
            }
        );
    }
    public makeEntrega(){
        prompt(
            [
                {
                    name: 'city',
                    type: 'list',
                    message: 'Escolha a sua cidade:',
                    choices: this.dataCidade
                },
                {
                    name: 'neighborhood',
                    type: 'list',
                    message: 'Escolha o seu Bairro:',
                    choices: this.dataBairros
                },
                {
                    name: 'street',
                    type: 'input',
                    message: 'Qual a sua rua?\n'
                },
                {
                    name: 'number',
                    type: 'input',
                    message: 'Qual o numero da sua casa?\n'
                },
                {
                    name: 'complement',
                    type: 'input',
                    message: 'Algum complemento ou ponto de referencia?\n'
                },
            ]
        ).then(
            (answer : any) => {
                this.dadosDaEntrega = answer;
                this.makeReport();
            }

        );
    }
    public makeReport(){
        console.log(this.dadosDoPedido.name +' '+ 'seu pedido de:'+'\n'+ this.dadosDoPedido.qt+' '+ this.dadosDoPedido.size +' '+'sabor: '+ this.dadosDoPedido.flavor+
        '\nPara: '+this.dadosDoPedido.delivery)
        if(this.dadosDoPedido.delivery === 'Entrega'){
            console.log('Pedido será entregue em: '+this.dadosDaEntrega.city+'\n'+this.dadosDaEntrega.neighborhood+'\n'+this.dadosDaEntrega.street+'\n'+this.dadosDaEntrega.number+
            '\n'+this.dadosDaEntrega.complement)
        }
    }
    private getSabores(){
        let http = new VpHttp('http://5c64a0dfc969210014a32ee0.mockapi.io/sabor');

        http.get().subscribe(
            (data : any) => {
                data.forEach((element:any) => {
                    if(element.Disponivel == true){
                        this.dataSabores.push(element.Sabor);
                    }
                });
                this.getTamanho();
                
            },
            (error : any) => {
                console.log(error); 
            }
        );

    } 
    private getTamanho(){
        let http = new VpHttp('http://5c64a0dfc969210014a32ee0.mockapi.io/tamanho');

        http.get().subscribe(
            (data : any) => {
                data.forEach((element:any) => {
                    this.dataTamanho.push(element.Tamanho);
                });
                this.getCidade();
            },
            (error : any) =>{
                console.log(error);
            }
        );
    }  
    private getCidade(){
        let http = new VpHttp('http://5c64a0dfc969210014a32ee0.mockapi.io/cidade');

        http.get().subscribe(
            (data : any) => {
                data.forEach((element:any) => {
                    this.dataCidade.push(element.Cidade);
                });
                this.getBairros();
                
            },
            (error : any) =>{
                console.log(error);
            }
        );
    } 
    private getBairros(){
        let http = new VpHttp('http://5c64a0dfc969210014a32ee0.mockapi.io/bairros');

        http.get().subscribe(
            (data : any) => {
                data.forEach((element:any) => {
                    this.dataBairros.push(element.Bairro);
                });
                this.pizzaDelivery();
            },
            (error : any) =>{
                console.log(error);
            }
        );
    } 
    
}   

