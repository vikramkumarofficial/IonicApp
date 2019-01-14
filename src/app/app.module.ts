import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { TempPage } from '../pages/temp/temp';
import { AdminPage } from '../pages/admin/admin';



export const firebaseConfig = {
    apiKey: "AIzaSyCQJTOPnLYzrmraFdwnF5PR8r947Qbpohw",
    authDomain: "deepblue-3f2a6.firebaseapp.com",
    databaseURL: "https://deepblue-3f2a6.firebaseio.com",
    projectId: "deepblue-3f2a6",
    storageBucket: "deepblue-3f2a6.appspot.com",
    messagingSenderId: "179083034108"
  };


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    TempPage,
    AdminPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    TempPage,
    AdminPage
  ],
  providers: [
    StatusBar,
    AngularFireDatabase,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
