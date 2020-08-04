import { RouterTestingModule } from '@angular/router/testing';
import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Home componenet is created ', () => {
    expect(component).toBeTruthy();
  });

  it('Should contain a label tag', () => {
    const labelEle = fixture.debugElement.query(By.css('label'));
    expect(labelEle.nativeElement.textContent).toBe(
      'Please enter a valid BTC address',
    );
  });

  it('Should contain a small tag', () => {
    const smallEle = fixture.debugElement.query(By.css('small'));
    expect(smallEle.nativeElement.textContent).toBe(
      ' You must enter a valid Bitcoin Address. ',
    );
  });

  it('Should have only one Submit button on the page', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    const nativeButton: HTMLButtonElement = buttons[0].nativeElement;
    expect(buttons.length == 1).toBeTruthy();
    expect(nativeButton.textContent).toBe(' Submit ');
  });
});
