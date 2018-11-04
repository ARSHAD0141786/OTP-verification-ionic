import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  verificationID:any;
  otpCode:String = '';
  constructor(public navCtrl: NavController) {

  }

  send(){
    console.log('Sending OTP......');
    (<any>window).FirebasePlugin.verifyPhoneNumber('+918441975563', 120,(credential)=>{
      console.log('Credentials : '+credential);
    }, (error)=>{
      console.log(error);
    });
  }

  verifyOTP(){

  }
}
