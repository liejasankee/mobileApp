import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { RestApiService } from '../../rest-api.service'
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { GlobalServiceService } from '../../service/global-service.service';
import 'gl-ionic-background-video';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private ServiceService: RestApiService, public menu: MenuController, private router: Router, private gs: GlobalServiceService, private nc: NavController) { }
  public errorMsglogin = false;
  public customloaderpartner;

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menu.enable(false);
  }
  login(login: NgForm) {
    console.log(login);
    if (login.form.valid) {
      this.customloaderpartner = true;
      console.log(login.form.value);
      let loginformget = {
        "email": login.form.value.email,
        "password": login.form.value.password
      }
      console.log(loginformget);
      this.ServiceService.loginpartner(loginformget).subscribe((data) => {
        console.log(data);
        var fordataget;
        fordataget = data;
        this.customloaderpartner = false
        console.log(typeof (fordataget));
        if (fordataget.response.token !== null) {
          console.log("done");
          localStorage.setItem("partnerLogindetails", JSON.stringify(data));
          this.gs.errorMsglogin = false;
          this.router.navigate(['/folder/ShopAll']);
          this.menu.enable(true);
        }
        else {
          this.errorMsglogin = true;
          this.gs.errorMsglogin = true;

        }

      },
        response => {
          console.log("POST call in error", response);
          this.customloaderpartner = false;
        },
        () => {
          console.log("The POST observable is now completed.");
          // this.loadercustom=false;
        }

      );
    }
  }
  Register() {

    this.nc.navigateForward('pages/register')
  }
  onClickForgotPassword() {

  }


}
