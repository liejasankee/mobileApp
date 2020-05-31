import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { GlobalServiceService } from './service/global-service.service'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'ShopAll',
      url: '/folder/ShopAll',
      icon: 'add'
    },
    {
      title: 'Spices-Masala-Curry',
      url: '/folder/All_Spices_Masala_Curry',
      icon: 'add'
    },
    {
      title: 'Instant Mix - Unique',
      url: '/folder/All_Instant_Mix_Unique',
      icon: 'add'
    },
    {
      title: 'Superfoods',
      url: '/folder/Superfoods',
      icon: 'add'
    },
    {
      title: 'Millets',
      url: '/folder/Millets',
      icon: 'add'
    },
    {
      title: 'cold_compressedoil',
      url: '/folder/cold_compressedoil',
      icon: 'add'
    },
    {
      title: 'Beauty and Health',
      url: '/folder/Beauty',
      icon: 'add'
    }
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private gs: GlobalServiceService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      //this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this.gs.backbtn = false;
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
