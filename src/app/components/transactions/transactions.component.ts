import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TransactionsService } from 'src/app/services/transactions.service';
import { ToastrService } from 'ngx-toastr';
import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionsComponent {

  satoshiValue: number = 0;
  transactions : any[];
  res:any;
  address:string = "16DjTmFX52LqTMRkozuPrsubhFjkV5VEye";
  ds:MyDataSource;
  


  constructor(private transactionService : TransactionsService,
              private toastr: ToastrService){
                this.ds = new MyDataSource(transactionService);
              }
  
  }

  export class MyDataSource extends DataSource<Object | undefined> {

  
    private _offset = 0;
    private _pageSize = 1;
    private lastPage = 0;
    private _cachedData = Array.from<Object>({length: 0});
    private _dataStream = new BehaviorSubject<(Object | undefined)[]>(this._cachedData);
    private _subscription = new Subscription();
  
    constructor(private transactionService: TransactionsService){
      super();
      this._fetchPage();
    }
  
    connect(collectionViewer: CollectionViewer): Observable<(Object | undefined)[]> {
      this._subscription.add(collectionViewer.viewChange.subscribe(range => {
        const currentPage = this._getPageForIndex(range.end);
      if (currentPage > this.lastPage) {
        this.lastPage = currentPage;
        this._fetchPage();
      }
      }));
      return this._dataStream;
    }
  
    disconnect(): void {
      this._subscription.unsubscribe();
    }
  
    private _getPageForIndex(index: number): number {
      return Math.floor(index / this._pageSize);
    }
  
    private _fetchPage() {
        this.transactionService.getTransactions((this._offset*20),20).subscribe(res => {
          this._cachedData = this._cachedData.concat(res['txs']);
          this._dataStream.next(this._cachedData);
        });
        this._offset+=1;
    }
  
  }
  




//    ngOnInit(): void {
//     this.transactionService.getTransactions(0,20).subscribe( 
//       response => {
//       this.res=response;
//       this.transactions = this.res['txs'];
//       this.address = this.res['address'];
//     }, 
//       (error: Response) => {
//       this.toastr.error('An unexpected error occured');
//       console.log("An unexpeced error occured");
//     });
//   }

// }
