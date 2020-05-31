import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { RestApiService } from '../../rest-api.service'
import { Router } from '@angular/router';
import { EventEmitter, Output, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public errormsgfromSingupshow = false;
  public errormsgfromSingup
  public successMsgpopup;
  public singupsuccess = false;
  public customloaderpartner;
  signupForm: FormGroup;

  constructor(private fb: FormBuilder,
    private ServiceService: RestApiService,
    private router: Router
  ) { }

  address: string;
  getAddress: any = {};
  public location;
  public searchElementRef: ElementRef;
  @Input() adressType: string;
  @Output() setAddress: EventEmitter<any> = new EventEmitter();

  autocompleteInput: string;
  queryWait: boolean;



  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.signupForm = this.fb.group({
      'FirstName': [null, Validators.required],
      'LastName': [null, Validators.required],
      'StoreName': [null, Validators.required],
      'email': [null, [Validators.required, Validators.email]],
      'password': [null, Validators.required],
      'confirmpassword': [null, Validators.required],
      'address': [null, Validators.required],

    });

  }
  singuppartnerclick(formvaluesingup) {
    console.log(formvaluesingup.value)
    if (formvaluesingup.form.valid) {
      this.errormsgfromSingupshow = false;
      this.customloaderpartner = true
      var usernamepartner = formvaluesingup.value.firstName + " " + formvaluesingup.value.lastName

      const formData: FormData = new FormData();

      formData.append("username", usernamepartner);
      formData.append("pass_word", formvaluesingup.value.password);
      formData.append("email", formvaluesingup.value.email);
      formData.append("store_contact", formvaluesingup.value.store_contact);
      formData.append("store_name", formvaluesingup.value.storeName);
      formData.append("Address", formvaluesingup.value.address);
      formData.append("zipcode", formvaluesingup.value.zipcode);

      this.ServiceService.partnersingup(formData).subscribe((data) => {
        console.log(data);
        this.customloaderpartner = false;
        var getresp
        getresp = data;

        if (getresp.response.id != null) {
          this.successMsgpopup = true;
          this.singupsuccess = true;
        }
        else (getresp.response.duplicate_entry_for_column === "email")
        {
          this.errormsgfromSingupshow = true;
          this.errormsgfromSingup = "Already there User name please change"
        }
      });
    }

  }

}
