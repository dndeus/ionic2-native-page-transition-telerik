import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from './../pages/home-page/home-page';
import { SlidePage } from './../pages/slide-page/slide-page';
import { FadePage } from './../pages/fade-page/fade-page';
import { FlipPage } from './../pages/flip-page/flip-page';
import { DrawerPage } from './../pages/drawer-page/drawer-page';
import { CurlPage } from './../pages/curl-page/curl-page';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SlidePage,
    FadePage,
    FlipPage,
    DrawerPage,
    CurlPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SlidePage,
    FadePage,
    FlipPage,
    DrawerPage,
    CurlPage
  ],
  providers: []
})
export class AppModule {}
