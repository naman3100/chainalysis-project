import { TestBed } from '@angular/core/testing';
// Http testing module and mocking controller
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

// Other imports
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { TransactionsService } from './transactions.service';

describe('TransactionsService', () => {
  let service: TransactionsService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TransactionsService],
    });
    service = TestBed.inject(TransactionsService);
    // Inject the http service and test controller for each test
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get bitcoin address with 1 transaction', () => {
    const info = {};
    const transactionService = TestBed.get(TransactionsService);
    const http = TestBed.get(HttpTestingController);
    let response;

    transactionService
      .getTransactions(0, 1, '1HB5XMLmzFVj8ALj6mfBsbifRoD4miY36v')
      .subscribe((res) => {
        response = res;
      });
    http
      .expectOne(
        'https://blockchain.proxy.pankaj.pyfox.dev/rawaddr/1HB5XMLmzFVj8ALj6mfBsbifRoD4miY36v/?offset=0&limit=1',
      )
      .flush(info);
    expect(response).toEqual(info);
  });
});
