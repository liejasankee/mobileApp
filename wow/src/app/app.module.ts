import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthGuardService } from './service/services/auth-guard.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LottieAnimationViewModule } from 'ng-lottie';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule, HttpClientModule, LottieAnimationViewModule.forRoot()
  ],
  providers: [
    StatusBar,
    AuthGuardService,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
