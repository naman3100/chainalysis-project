import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EachTransactionComponent } from './each-transaction.component';

describe('EachTransactionComponent', () => {
  let component: EachTransactionComponent;
  let fixture: ComponentFixture<EachTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EachTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EachTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
