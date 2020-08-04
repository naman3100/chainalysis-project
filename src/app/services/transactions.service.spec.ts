import { TestBed } from '@angular/core/testing';
// Http testing module and mocking controller
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { HttpClient } from '@angular/common/http';

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

  it('should get correct information about the BTC address', () => {
    const info: object = {};
    const transactionService = TestBed.get(TransactionsService);
    const http = TestBed.get(HttpTestingController);
    let response: object;

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

  it('should get correct information details about each transaction', () => {
    const info: object = {};
    const transactionService = TestBed.get(TransactionsService);
    const http = TestBed.get(HttpTestingController);
    let response: object;

    transactionService
      .getTransactionDetails(
        '1d5464a92c7d4a0b136b41d88e1e3c105e346ea60f8430642083fca675ba5046',
      )
      .subscribe((res) => {
        response = res;
      });
    http
      .expectOne(
        'https://blockchain.proxy.pankaj.pyfox.dev/rawtx/1d5464a92c7d4a0b136b41d88e1e3c105e346ea60f8430642083fca675ba5046',
      )
      .flush(info);
    expect(response).toEqual(info);
  });

  it('should get correct latest block', () => {
    const info: object = {};
    const transactionService = TestBed.get(TransactionsService);
    const http = TestBed.get(HttpTestingController);
    let response: object;

    transactionService.getLatestBlock().subscribe((res) => {
      response = res;
    });
    http
      .expectOne(
        'https://blockchain.proxy.pankaj.pyfox.dev/latest-block/',
      )
      .flush(info);
    expect(response).toEqual(info);
  });
});
