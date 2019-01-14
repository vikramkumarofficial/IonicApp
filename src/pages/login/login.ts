import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { ViewChild } from '@angular/core';
import { AdminPage } from '../admin/admin';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	@ViewChild('email') email;
    @ViewChild('password') password;
    // @ViewChild('uname') username;
    // @ViewChild('mobno') mobileno;


  constructor(private fire:AngularFireAuth,private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
  
  }



  LoginPopup(){
  let successAlert = this.alertCtrl.create({
    title: "Login Failed",
    message: "Login Failed!!!.Kindly Wait For Admin to activate your account.",
      buttons: [
        {
          text: "Go Home",
          handler: () => {
          console.log('Home clicked');
          this.navCtrl.popToRoot({ animate: true, direction: 'back' });
        }
        }
      ]
  });
  
   successAlert.present();
}


  LoginUser(){

  	this.fire.auth.signInWithEmailAndPassword(this.email.value,this.password.value)
    .then(data =>{
      console.log(data);
      if(this.email.value=="vikramkumar.official@gmail.com"){
      	this.navCtrl.push(AdminPage);

      }
      else this.LoginPopup();

    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
