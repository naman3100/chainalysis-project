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
});

export class TransactionsServiceStub {
  getTransactions(offset: number, limit: number, address: string) {
    return of([]);
  }
}
