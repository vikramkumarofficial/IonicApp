import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
//import { Observable } from 'rxjs/Observable';
//import { RegisterSuccess } from '../temp/temp';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

export class SignupPage {

  //getting input from user
  @ViewChild('email') email;
  @ViewChild('password') password;
  @ViewChild('uname') username;
  @ViewChild('mobno') mobileno;

  utype:any;

  constructor(private fire:AngularFireAuth,private alertCtrl: AlertController,public afdB:AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {
  
  }

  optionsFn(){ 
    console.log(this.utype);

  //this.item.value = this.utype;

  }


  RegisterSuccess(){
  let successAlert = this.alertCtrl.create({
    title: "Registeration Success",
    message: "Congratulations you are successfully registered\nKindly go Back and Login to your Account.",
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


  //User Authentication
  RegisterUser(){

    let userdata={
      "username":this.username.value,
      "email":this.email.value,
      "status":"1",
      "mobileno":this.mobileno.value,
      "usertype":this.utype
    }

    console.log(userdata);

  	this.fire.auth.createUserWithEmailAndPassword(this.email.value,this.password.value)
    .then(data =>{
      console.log(data);
          const autogkey=this.afdB.list('/userdetails').push(userdata).key;
          console.log(autogkey);
          this.RegisterSuccess();

    });
    //console.log(this.user.value,this.password.value)

    // const autogkey=this.afdB.list('/userdetails').push(userdata).key;

    // console.log(autogkey);

    // this.RegisterSuccess();

    //this.navCtrl.push(RegisterSuccess);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
