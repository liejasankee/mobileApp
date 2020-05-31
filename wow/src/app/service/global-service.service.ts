import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {
  public errorMsglogin;
  public backbtn;
  public count;
  change: boolean = false;
  constructor() { }

}
