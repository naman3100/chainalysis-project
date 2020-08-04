import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import {
  async,
  ComponentFixture,
  TestBed,
  tick,
} from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, DummyComponent],
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', component: HomeComponent },
          { path: 'btc/:btcAddress', component: DummyComponent },
        ]),
      ],
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

  it('Should navigate to / before Submit button is clicked', () => {
    const location: Location = TestBed.get(Location);
    expect(location.path()).toBe('');
  });

  it('Should navigate to btc/:btcAddress on clicking the Submit button', async () => {
    const location: Location = TestBed.get(Location);
    const button: HTMLButtonElement = fixture.debugElement.query(
      By.css('button'),
    ).nativeElement;
    component.address = '1';
    button.click();
    fixture.detectChanges();
    await fixture.whenStable();
    expect(location.path()).toBe('/btc/1');
  });
});

@Component({ template: '' })
class DummyComponent {}
