import { Component } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { Brightness } from '@ionic-native/brightness/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private flashlight: Flashlight,private brightness: Brightness,private fileChooser: FileChooser,private contacts: Contacts) { }
  flash1() {
    this.flashlight.switchOn();
    alert("Hello");
}

flash2() {
  this.flashlight.switchOff();
}
bright(){
  let brightnessValue = 0.8;
this.brightness.setBrightness(brightnessValue);
}
file(){
  this.fileChooser.open()
  .then(uri => console.log(uri))
  .catch(e => console.log(e));
}

}
