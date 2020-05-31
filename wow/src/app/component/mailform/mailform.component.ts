import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-mailform',
  templateUrl: './mailform.component.html',
  styleUrls: ['./mailform.component.scss'],
})
export class MailformComponent implements OnInit {


  constructor(public modalCtrl: ModalController) { }

  ngOnInit() { }
  dismissModal() {
    this.modalCtrl.dismiss();

  }
}
