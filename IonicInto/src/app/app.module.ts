import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MainPage } from '../pages/main/main';
import { CadastroPage } from '../pages/cadastro/cadastro';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Messages } from '../providers/messages';
import { Toast } from '../providers/toast';
import { LogonProvider } from '../providers/logon/logon';
import { HttpModule} from '@angular/http';
import { HttpProvider } from '../providers/api-login/http';
import { TamanhoProvider } from '../providers/tamanho/tamanho';
import { SaboresProvider } from '../providers/sabores/sabores';
import { DadosPage } from '../pages/dados/dados';
import { CidadesProvider } from '../providers/cidades/cidades';
import { BairrosProvider } from '../providers/bairros/bairros';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MainPage,
    DadosPage,
    CadastroPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MainPage,
    DadosPage,
    CadastroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Messages,
    Toast,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LogonProvider,
    HttpProvider,
    TamanhoProvider,
    SaboresProvider,
    CidadesProvider,
    BairrosProvider
  ]
})
export class AppModule {}
