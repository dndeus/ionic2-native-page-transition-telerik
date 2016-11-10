import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativePageTransitions, TransitionOptions } from 'ionic-native';

/*
  Generated class for the FadePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-fade-page',
  templateUrl: 'fade-page.html'
})
export class FadePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    let options: TransitionOptions = {
        "duration"       :  1500, // in milliseconds (ms), default 400
        "iosdelay"       :   50, // ms to wait for the iOS webview to update before animation kicks in, default 60
        "androiddelay"   :  100
      };

      NativePageTransitions.fade(options)
        .then( (msg) => console.log(msg) )
        .catch( (err) => console.log(err));
  }

  ionViewWillLeave() {   
    let options: TransitionOptions = {
        "duration"       :  1500, // in milliseconds (ms), default 400
        "iosdelay"       :   50, // ms to wait for the iOS webview to update before animation kicks in, default 60
        "androiddelay"   :  100
      };

      NativePageTransitions.fade(options)
        .then( (msg) => console.log(msg) )
        .catch( (err) => console.log(err));
  }

}
