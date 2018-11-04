import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  verificationID:any;
  phoneNumber:string = "";
  otpCode:string = "";
  constructor(public navCtrl: NavController) {

  }

  send(){
    console.log('Sending OTP......');
    console.log(this.phoneNumber);
    (<any>window).FirebasePlugin.verifyPhoneNumber(this.phoneNumber, 60,(credential)=>{
      alert('OTP Sent successfully.');
      console.log(credential);
      this.verificationID = credential.verificationId;
      console.log("Verificaion ID : "+this.verificationID);
    }, (error)=>{
      console.log(error);
    });
  }

  verifyOTP(){
    console.log("Verifying OTP.....");
    console.log("OTP : "+this.otpCode);
    console.log("Verificaiton ID : "+this.verificationID);
    let signInCredential = firebase.auth.PhoneAuthProvider.credential(this.verificationID,this.otpCode);
    firebase.auth().signInWithCredential(signInCredential).then((info) => {
      console.log(info);
    }, (error) => {
      console.log(error);
    });
  }
}
