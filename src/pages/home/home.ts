import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
 import { AngularFireDatabase } from '@angular/fire/database';
// import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 // items: Observable<any[]>;

  constructor(public navCtrl: NavController,public afDB:AngularFireDatabase) {
    //afDB: AngularFireDatabase
    //this.items = afDB.list('/champ').valueChanges();
    // const k2=afDB.list('/champ').push({
    //   name:"Hello",
    //   quantity:30
    // }).key;
    // console.log(k2);

    // afDB.list('/champ').update({
    //   quantity:5
    // });

    //const userId = this.authCtrl.showUser().uid;

    //afDB.database.ref

    //Get auto generated key
     //const userId=afDB.database.ref().child('champ').push().key;
     // const userId="-LN3TRzbDej1f0mjShJI";
     // console.log(userId);

    //Updating database

    // afDB.database.ref(`champ/${userId}/`).update({
    //     quantity:200}).then(res => {
    //     console.log(res)
    // });
    // afDB.list('/champ').update(userId,{
    //   quantity:300
    // })
    // afDB.database.ref(`champ/${userId}/`)
    // .update(
    // "1234567890" : {
    //   quantity:200
    // })
    // .then(res => {
    //     console.log(res)
    // })
    // .catch((error) => {
    //   console.log(error);
    // })

    
    console.log(afDB.database.ref());
    /* Output
    Reference {repo: Repo, path: Path, queryParams_: QueryParams, orderByCalled_: false}
    */
    var ref = afDB.database.ref();
    ref.on("value",function (value) {
      console.log(value.val());
      /*
        Output
        {userdetails: {…}}userdetails: {-LNGh09JjQxfszmuicTb: {…}, -LNGl0SRsTeOfe5nCuDX: {…}}__proto__: Object

      */
      var val = value.val();
      var userDetails = val['userdetails'];
      console.log(userDetails);
      /*
      Output {-LNGh09JjQxfszmuicTb: {…}, -LNGl0SRsTeOfe5nCuDX: {…}}

      {-LNGh09JjQxfszmuicTb: {…}, -LNGl0SRsTeOfe5nCuDX: {…}}
-LNGh09JjQxfszmuicTb: {email: "chikram914@gmail.com", mobileno: "9876540123", status: "2", username: "Vikram", usertype: "user"}
-LNGl0SRsTeOfe5nCuDX: {email: "hello@bbye.com", mobileno: "123456789", status: "1", username: "Hello", usertype: "user"}
__proto__: Object
      */

      var keys = Object.keys(userDetails);
console.log('obj contains ' + keys.length + ' keys: '+  keys);
//obj contains 2 keys: -LNGh09JjQxfszmuicTb,-LNGl0SRsTeOfe5nCuDX
console.log(keys[0]+" ###"+keys[1]);

    })
  }

  openLoginPage(){
  	this.navCtrl.push(LoginPage);
  }

  openSignupPage(){
  	this.navCtrl.push(SignupPage);

  }

}
