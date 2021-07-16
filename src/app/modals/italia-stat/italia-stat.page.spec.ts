import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItaliaStatPage } from './italia-stat.page';

describe('ItaliaStatPage', () => {
  let component: ItaliaStatPage;
  let fixture: ComponentFixture<ItaliaStatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItaliaStatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItaliaStatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
