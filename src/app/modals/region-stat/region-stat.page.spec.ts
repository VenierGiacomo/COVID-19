import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegionStatPage } from './region-stat.page';

describe('RegionStatPage', () => {
  let component: RegionStatPage;
  let fixture: ComponentFixture<RegionStatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionStatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegionStatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
