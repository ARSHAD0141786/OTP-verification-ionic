import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import * as firebase from 'firebase';
firebase.initializeApp({
  apiKey: "AIzaSyC2vSK4K5838guDKlsGAv1vJ33_nwX7Pd0",
  authDomain: "otp-verification-5ca0b.firebaseapp.com",
  databaseURL: "https://otp-verification-5ca0b.firebaseio.com",
  projectId: "otp-verification-5ca0b",
  storageBucket: "otp-verification-5ca0b.appspot.com",
  messagingSenderId: "728637465213"
});
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
