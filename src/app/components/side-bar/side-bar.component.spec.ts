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
});

export class TransactionsServiceStub {
  getLatestBlock() {
    return of([]);
  }
}
