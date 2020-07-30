import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http: HttpClient) { }

  getTransactions(offset :number, limit: number) {
    return this.http.get('https://blockchain.proxy.pankaj.pyfox.dev/address/16DjTmFX52LqTMRkozuPrsubhFjkV5VEye/?offset='+offset+'&limit='+limit);
  }

  getLatestBlock(){
    return this.http.get('https://blockchain.proxy.pankaj.pyfox.dev/latest-block/');
  }

  getTransactionDetails(hash: string){
    return this.http.get('https://blockchain.proxy.pankaj.pyfox.dev/rawtx/'+hash);
  }
}
