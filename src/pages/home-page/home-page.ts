import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FadePage } from './../fade-page/fade-page';
import { SlidePage } from './../slide-page/slide-page';
import { FlipPage } from './../flip-page/flip-page';
import { DrawerPage } from './../drawer-page/drawer-page';
import { CurlPage } from './../curl-page/curl-page';

/*
  Generated class for the HomePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home-page',
  templateUrl: 'home-page.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  fade() {
    this.navCtrl.push(FadePage, {}, {animate: false});
  }

  slide() {
    this.navCtrl.push(SlidePage, {}, {animate: false});
  }

  flip(){
    this.navCtrl.push(FlipPage, {}, {animate: false});
  }

  drawer() {
    this.navCtrl.push(DrawerPage, {}, {animate: false});
  }
  
  curl() {
    this.navCtrl.push(CurlPage, {}, {animate: false});
  }

  ionViewDidLoad() {
    console.log('Hello HomePagePage Page');
  }

}
