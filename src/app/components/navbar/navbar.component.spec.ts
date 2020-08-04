import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { By } from '@angular/platform-browser';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have only one image', () => {
    const images = fixture.debugElement.queryAll(By.css('img'));
    expect(images.length == 1).toBeTruthy();
  });

  it('Should have only one ul', () => {
    const uls = fixture.debugElement.queryAll(By.css('ul'));
    expect(uls.length == 1).toBeTruthy();
  });

  it('Should have two li', () => {
    const lis = fixture.debugElement.queryAll(By.css('li'));
    expect(lis.length == 2).toBeTruthy();
    expect(lis[0].nativeElement.textContent).toBe('Settings');
    expect(lis[1].nativeElement.textContent).toBe('Logout');
  });
});
