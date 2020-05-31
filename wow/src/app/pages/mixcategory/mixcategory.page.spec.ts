import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MixcategoryPage } from './mixcategory.page';

describe('MixcategoryPage', () => {
  let component: MixcategoryPage;
  let fixture: ComponentFixture<MixcategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixcategoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MixcategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
