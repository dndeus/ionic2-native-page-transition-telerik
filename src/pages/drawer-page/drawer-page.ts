import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativePageTransitions, TransitionOptions } from 'ionic-native';

/*
  Generated class for the DrawerPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-drawer-page',
  templateUrl: 'drawer-page.html'
})
export class DrawerPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    let options: TransitionOptions = {
        "origin"         : "left", // 'left|right', open the drawer from this side of the view, default 'left'
        "action"         : "open", // 'open|close', default 'open', note that close is not behaving nicely on Crosswalk
        "duration"       :    1500, // in milliseconds (ms), default 400
        "iosdelay"       :     50 // ms to wait for the iOS webview to update before animation kicks in, default 60
      };

    NativePageTransitions.drawer(options)
        .then( (msg) => console.log(msg) )
        .catch( (err) => console.log(err));
  }

  ionViewWillLeave() {
    let options: TransitionOptions = {
        "origin"         : "left", // 'left|right', open the drawer from this side of the view, default 'left'
        "action"         : "close", // 'open|close', default 'open', note that close is not behaving nicely on Crosswalk
        "duration"       :    1500, // in milliseconds (ms), default 400
        "iosdelay"       :     50 // ms to wait for the iOS webview to update before animation kicks in, default 60
      };

    NativePageTransitions.drawer(options)
        .then( (msg) => console.log(msg) )
        .catch( (err) => console.log(err));
  }

}
