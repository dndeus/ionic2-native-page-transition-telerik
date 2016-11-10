import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
  import { NativePageTransitions, TransitionOptions } from 'ionic-native';

/*
  Generated class for the SlidePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-slide-page',
  templateUrl: 'slide-page.html'
})
export class SlidePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    let options: TransitionOptions = {
        "direction"        : "left", // 'left|right|up|down', default 'left' (which is like 'next')
        "duration"         :  1500, // in milliseconds (ms), default 400
        "slowdownfactor"   :    -1, // overlap views (higher number is more) or no overlap (1). -1 doesn't slide at all. Default 4
        "slidePixels"      :   -1, // optional, works nice with slowdownfactor -1 to create a 'material design'-like effect. Default not set so it slides the entire page.
        "iosdelay"         :  100, // ms to wait for the iOS webview to update before animation kicks in, default 60
        "androiddelay"     :  150, // same as above but for Android, default 70
        "winphonedelay"    :  250, // same as above but for Windows Phone, default 200,
        "fixedPixelsTop"   :    0, // the number of pixels of your fixed header, default 0 (iOS and Android)
        "fixedPixelsBottom":   0  // the number of pixels of your fixed footer (f.i. a tab bar), default 0 (iOS and Android)
      };

    NativePageTransitions.slide(options)
        .then( (msg) => console.log(msg) )
        .catch( (err) => console.log(err));
  }

  ionViewWillLeave() {
    let options: TransitionOptions = {
        "direction"        : "right", // 'left|right|up|down', default 'left' (which is like 'next')
        "duration"         :  1500, // in milliseconds (ms), default 400
        "slowdownfactor"   :    -1, // overlap views (higher number is more) or no overlap (1). -1 doesn't slide at all. Default 4
        "slidePixels"      :   -1, // optional, works nice with slowdownfactor -1 to create a 'material design'-like effect. Default not set so it slides the entire page.
        "iosdelay"         :  100, // ms to wait for the iOS webview to update before animation kicks in, default 60
        "androiddelay"     :  150, // same as above but for Android, default 70
        "winphonedelay"    :  250, // same as above but for Windows Phone, default 200,
        "fixedPixelsTop"   :    0, // the number of pixels of your fixed header, default 0 (iOS and Android)
        "fixedPixelsBottom":   0  // the number of pixels of your fixed footer (f.i. a tab bar), default 0 (iOS and Android)
      };

    NativePageTransitions.slide(options)
        .then( (msg) => console.log(msg) )
        .catch( (err) => console.log(err));
  }

}
