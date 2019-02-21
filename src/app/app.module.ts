import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { Brightness } from '@ionic-native/brightness/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    Flashlight,
    Brightness,
    FileChooser,
    Contacts, 
    Contact,
     ContactField, 
     ContactName,

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
