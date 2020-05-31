import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { GlobalServiceService } from '../global-service.service';
@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private gs: GlobalServiceService) { }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    console.log("error mesg login ->", this.gs.errorMsglogin);
    if (this.gs.errorMsglogin === true ||
      this.gs.errorMsglogin === undefined) {
      console.log("true");
      this.router.navigate(["pages/login"]);
      return false;
    }

    return true;
  }
}