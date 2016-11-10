import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativePageTransitions, TransitionOptions } from 'ionic-native';

/*
  Generated class for the FlipPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-flip-page',
  templateUrl: 'flip-page.html'
})
export class FlipPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    let options: TransitionOptions = {
        "direction"      : "up", // 'left|right|up|down', default 'right' (Android currently only supports left and right)
        "duration"       :  1500, // in milliseconds (ms), default 400
        "iosdelay"       :   50, // ms to wait for the iOS webview to update before animation kicks in, default 60
        "androiddelay"   :  100,  // same as above but for Android, default 70
        "winphonedelay"  :  150 // same as above but for Windows Phone, default 200
      };

    NativePageTransitions.flip(options)
        .then( (msg) => console.log(msg) )
        .catch( (err) => console.log(err));
  }

  ionViewWillLeave() {
    let options: TransitionOptions = {
        "direction"      : "down", // 'left|right|up|down', default 'right' (Android currently only supports left and right)
        "duration"       :  1500, // in milliseconds (ms), default 400
        "iosdelay"       :   50, // ms to wait for the iOS webview to update before animation kicks in, default 60
        "androiddelay"   :  100,  // same as above but for Android, default 70
        "winphonedelay"  :  150 // same as above but for Windows Phone, default 200
      };

    NativePageTransitions.flip(options)
        .then( (msg) => console.log(msg) )
        .catch( (err) => console.log(err));
  }

}
