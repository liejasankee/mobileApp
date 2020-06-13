import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SMS ,SmsOptions} from '@ionic-native/sms/ngx';

import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

import { CallLog, CallLogObject } from '@ionic-native/call-log/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  message: string;

  constructor( private callLog: CallLog, 
    private callNumber: CallNumber,
    private platform: Platform,
    private androidPermissions: AndroidPermissions,
    private sms1:SMS) { }

  ngOnInit() {}
  call(){
    this.callNumber.callNumber('9629701011', true)
    .then(res => alert('Launched dialer!'+ res))
    .catch(err => alert('Error launching dialer'+ err));
  }
  sendTxt() {

    var options:SmsOptions={
      replaceLineBreaks:false,
      android:{
        intent:'INTENT'
      }
    }
    this.message="Enter name:"+ "Enter your store name:" + "Enter product name:";
    this.sms1.send('+919789956672',this.message,options).then((data)=>{
      alert(data+"data");  
    })

    this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.SEND_SMS).then(() => {
      alert(this.androidPermissions+"android permisn");
      alert(JSON.stringify(this.androidPermissions)+"android permisn");

      this.sms1.send('9789956672', "Enter name:"+ "Enter your store name:" + "Enter product name:");
  }).catch((err) => {
      alert(JSON.stringify(err)+"error");
  });

  
};
}
