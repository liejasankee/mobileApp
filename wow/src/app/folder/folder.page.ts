import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { MailformComponent } from '../component/mailform/mailform.component';
import { GlobalServiceService } from '../service/global-service.service';
import { RestApiService } from '../rest-api.service';
import { Location } from "@angular/common";

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  route: string;


  category: any = {
    path: 'assets/lottie/categories.json',
    renderer: 'svg',
    autoplay: true,
    loop: true
  };
  sms: any = {
    path: 'assets/lottie/sms.json',
    renderer: 'svg',
    autoplay: true,
    loop: true
  };
  call: any = {
    path: 'assets/lottie/call.json',
    renderer: 'svg',
    autoplay: true,
    loop: true
  };
  mail: any = {
    path: 'assets/lottie/mail.json',
    renderer: 'svg',
    autoplay: true,
    loop: true
  };
  sale: any = {
    path: 'assets/lottie/sales.json',
    renderer: 'svg',
    autoplay: true,
    loop: true
  };
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };

  all = '';
  myInput: any;
  All_Spices_Masala_Curry = 'All_Spices_Masala_Curry';
  All_Instant_Mix_Unique = 'All_Instant_Mix_Unique';
  Superfoods = 'Superfoods';
  Millets = 'Millets';
  Cold_Pressed_Oils = 'Cold_Pressed_Oils';
  Beauty_and_Health = 'Beauty_and_Health';
  list: any = [];
  listt: boolean = true;
  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };
  public backbtn: boolean = true;
  constructor(private gs: GlobalServiceService, private activatedRoute: ActivatedRoute, public modalController: ModalController, private ras: RestApiService, private router: Router) {

  }
  categories: any = [];
  openCategory(category) {
    console.log(category);
    if (category.sub_categories === 1) {
      this.router.navigateByUrl('folder/' + category.route);
      return;

    }
    this.router.navigateByUrl('folder/' + category.route);
  }
  openCategorypage() {
    this.router.navigateByUrl('folder/ShopAll/categories');
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: MailformComponent

    });
    return await modal.present();

  }
  ngOnInit() {

    if (this.router.url === "/folder/ShopAll") {
      this.gs.backbtn = true;
      console.log("route -> ", this.router.url);
      console.log("route bool ->", this.gs.backbtn);
      this.backbtn = this.gs.backbtn;
    }
    else {
      this.gs.backbtn = false;
      console.log(this.router.url);
      console.log(this.gs.backbtn);
      this.backbtn = this.gs.backbtn;
    }

    console.log("inside ngOnInit");
    console.log(this.backbtn);
    console.log(this.gs.backbtn);

    console.log(this.backbtn);
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.ras.getCategories().subscribe((data) => {

      var list;
      list = data;
      this.categories = list.response;



    },
      response => {
        console.log("POST call in error", response);
      },
      () => {
        console.log("The POST observable is now completed.");
      }

    );
  }
  onInput(event) {

    console.log(event);
    console.log(event.srcElement.value);
    console.log(event, event.keyCode, event.keyIdentifier);
    const searchTerm = event.srcElement.value;

    if (!searchTerm) {
      this.listt = true;
      console.log(this.list);

      return;
    }
    else {
      this.ras.getSearch(searchTerm).subscribe((data) => {
        console.log(data);
        var datum;
        datum = data;
        if (datum.response.length > 0) {
          this.listt = false;
          this.list = datum.response;
          console.log(this.list);
        }
        else {
          this.list = [{ product_name: "Sorry no such product" }]
        }



      })

    }

  }

}
