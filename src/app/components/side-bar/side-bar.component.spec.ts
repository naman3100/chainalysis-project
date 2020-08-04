import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { SideBarComponent } from './side-bar.component';
import { TransactionsService } from 'src/app/services/transactions.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('SideBarComponent', () => {
  let component: SideBarComponent;
  let fixture: ComponentFixture<SideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SideBarComponent],
      imports: [BrowserAnimationsModule, ToastrModule.forRoot()],
      providers: [
        {
          provide: TransactionsService,
          useClass: TransactionsServiceStub,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have only one dl', () => {
    const dls = fixture.debugElement.queryAll(By.css('dl'));
    expect(dls.length == 1).toBeTruthy();
  });

  it('Should have four dt', () => {
    const dts = fixture.debugElement.queryAll(By.css('dt'));
    expect(dts.length == 4).toBeTruthy();
    expect(dts[0].nativeElement.textContent).toBe('Dashboard');
    expect(dts[1].nativeElement.textContent).toBe('Graphs');
    expect(dts[2].nativeElement.textContent).toBe('Exchanges');
    component.latestBlock = 123;
    fixture.detectChanges();
    expect(dts[3].nativeElement.textContent).toBe('Latest Block 123');
  });
});

export class TransactionsServiceStub {
  getLatestBlock() {
    return of(123);
  }
}
