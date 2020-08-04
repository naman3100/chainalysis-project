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
    const info = {
      address: '1HB5XMLmzFVj8ALj6mfBsbifRoD4miY36v',
      final_balance: 0,
      hash160: 'b169f2b0b866db05900b93a5d76345f18d3afb24',
      n_tx: 26632,
      total_received: 404349207757,
      total_sent: 404349207757,
      txs: [
        {
          block_height: 638139,
          block_index: 0,
          hash:
            'ed0a9b313673147e54e60f586e954866698d7d57172900e147c71dd6430d7a99',
          inputs: [
            {
              prev_out: {
                addr: '1HB5XMLmzFVj8ALj6mfBsbifRoD4miY36v',
                n: 0,
                script:
                  '76a914b169f2b0b866db05900b93a5d76345f18d3afb2488ac',
                spending_outpoints: [
                  {
                    n: 0,
                    tx_index: 0,
                  },
                ],
                spent: true,
                tx_index: 0,
                type: 0,
                value: 359357,
              },
              script:
                '473044022063ec6fa2ff4f4b147203315b800572e636607e630e90fb76281e27980d33c1290220645610bf458b6e68a9b93318128567c14fcd217c1f9ab611578af161278c6a7b014104778f93e3cf4db394e21947771e0bceb5950440432bff63b50b35dd0f7303b243cade6bea4b92972018140786c4585d8b345361b90b4c1db01d2e9cef01048fda',
              sequence: 4294967294,
              witness: '',
            },
          ],
          lock_time: 638138,
          out: [
            {
              addr: '33wvNiUkXJAJ85e4yXJxJVWtsKqWDsDFK4',
              n: 0,
              script:
                'a91418c1dbefbe93f8807bae2b66ed1ed3092eb608e387',
              spent: false,
              tx_index: 0,
              type: 0,
              value: 354694,
            },
          ],
          relayed_by: '0.0.0.0',
          result: -359357,
          size: 221,
          time: 1594122550,
          tx_index: 0,
          ver: 2,
          vin_sz: 1,
          vout_sz: 1,
          weight: 884,
        },
      ],
    };
    const transactionService = TestBed.get(TransactionsService);
    const http = TestBed.get(HttpTestingController);
    let response;

    transactionService
      .getTransactions(0, 1, '1HB5XMLmzFVj8ALj6mfBsbifRoD4miY36v')
      .subscribe((res) => {
        response = res;
      });
  });
});
