import { RouterTestingModule } from '@angular/router/testing';
import { TransactionsService } from './../../services/transactions.service';
import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { TransactionsComponent } from './transactions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('TransactionsComponent', () => {
  let component: TransactionsComponent;
  let fixture: ComponentFixture<TransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionsComponent],
      imports: [
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        RouterTestingModule,
      ],
      providers: [
        {
          provide: TransactionsService,
          useClass: TransactionsServiceStub,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should contain a h2 tag', () => {
    const h2Ele = fixture.debugElement.query(By.css('h2'));
    component.address = '123';
    fixture.detectChanges();
    expect(h2Ele.nativeElement.textContent).toBe(
      'Transactions for BTC Address: ',
    );
  });
});

export class TransactionsServiceStub {
  getTransactions(offset: number, limit: number, address: string) {
    return of([]);
  }
}
