import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})

export class AdminPage {
	//items: Observable<any[]>;
  // userKeyList: Observable<any[]>;
  // userTable:Observable<any[]>;
  items:Observable<any[]>;

  constructor(public afDB: AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {
  	    
    this.items = afDB.list('/userdetails').valueChanges();
    
  }

  updateStatus(index,status){
    var userKeyList;
      var ref=this.afDB.database.ref();
    ref.on("value",function(value){
      var alltable=value.val();
      console.log('###');
      console.log(alltable['userdetails']);
      var table=alltable['userdetails'];
      //this.userTable=table;
      userKeyList=Object.keys(table);
    })

    let key=userKeyList[index];
    console.log(key);

    if(status==2){
    this.afDB.list('/userdetails').update(key,{
      status:2
    })
  }
  else if(status==-1){
        this.afDB.list('/userdetails').update(key,{
      status:-1
    })
      }

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }

}
