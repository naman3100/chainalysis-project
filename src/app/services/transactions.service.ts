import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  constructor(private http: HttpClient) {}

  getTransactions(offset: number, limit: number, address: string) {
    return this.http.get(
      'https://blockchain.proxy.pankaj.pyfox.dev/rawaddr/' +
        address +
        '/?offset=' +
        offset +
        '&limit=' +
        limit,
    );
  }

  getLatestBlock() {
    return this.http.get(
      'https://blockchain.proxy.pankaj.pyfox.dev/latest-block/',
    );
  }

  getTransactionDetails(hash: string) {
    return this.http.get(
      'https://blockchain.proxy.pankaj.pyfox.dev/rawtx/' + hash,
    );
  }
}
