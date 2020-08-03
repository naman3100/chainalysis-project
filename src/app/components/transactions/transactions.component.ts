import {
  Component,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { TransactionsService } from 'src/app/services/transactions.service';
import { ToastrService } from 'ngx-toastr';
import {
  CollectionViewer,
  DataSource,
} from '@angular/cdk/collections';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsComponent {
  @Input() address: string;
  satoshiValue: number = -1;
  transactions: any[];
  res: any;
  isValidAddress: any;
  ds: MyDataSource;

  constructor(
    private transactionService: TransactionsService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.address = params.get('btcAddress');
    });
    this.ds = new MyDataSource(
      transactionService,
      toastr,
      this.address,
    );
  }
}

export class MyDataSource extends DataSource<Object | undefined> {
  private btcAddress;
  private _offset = 0;
  private _pageSize = 1;
  private lastPage = 0;
  private _cachedData = Array.from<Object>({ length: 0 });
  private _dataStream = new BehaviorSubject<(Object | undefined)[]>(
    this._cachedData,
  );
  private _subscription = new Subscription();

  constructor(
    private transactionService: TransactionsService,
    private toastr: ToastrService,
    private address,
  ) {
    super();
    this.btcAddress = address;
    this._fetchPage();
  }

  connect(
    collectionViewer: CollectionViewer,
  ): Observable<(Object | undefined)[]> {
    this._subscription.add(
      collectionViewer.viewChange.subscribe((range) => {
        const currentPage = this._getPageForIndex(range.end);
        if (currentPage > this.lastPage) {
          this.lastPage = currentPage;
          this._fetchPage();
        }
      }),
    );
    return this._dataStream;
  }

  disconnect(): void {
    this._subscription.unsubscribe();
  }

  private _getPageForIndex(index: number): number {
    return Math.floor(index / this._pageSize);
  }

  private _fetchPage() {
    this.transactionService
      .getTransactions(this._offset * 20, 20, this.btcAddress)
      .subscribe(
        (res) => {
          this._cachedData = this._cachedData.concat(res['txs']);
          this._dataStream.next(this._cachedData);
        },
        (error: Response) => {
          this.toastr.error(
            'An unexpected error occured while getting lists of transactions ' +
              error.status,
          );
          console.log(
            'An unexpeced error occured occured while getting lists of transactions',
          );
        },
      );
    this._offset += 1;
  }
}
