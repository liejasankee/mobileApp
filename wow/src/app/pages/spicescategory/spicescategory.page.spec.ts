import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpicescategoryPage } from './spicescategory.page';

describe('SpicescategoryPage', () => {
  let component: SpicescategoryPage;
  let fixture: ComponentFixture<SpicescategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpicescategoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpicescategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
