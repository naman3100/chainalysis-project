import { Component, OnInit, OnDestroy } from '@angular/core';
import { TransactionsService } from 'src/app/services/transactions.service';
import { ToastrService } from 'ngx-toastr';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit, OnDestroy {
  latestBlock: number;
  apiCall: Subscription;

  constructor(
    private transactionService: TransactionsService,
    private toastr: ToastrService,
  ) {
    this.getBlock();
  }

  ngOnInit(): void {
    //Making call to api every 3 mins to get the latest block
    this.apiCall = interval(180000).subscribe(() => {
      this.getBlock();
    });
  }

  //Function to get the latest block from the service
  getBlock() {
    this.transactionService.getLatestBlock().subscribe(
      (response) => {
        this.latestBlock = response['height'];
      },
      (error: Response) => {
        this.toastr.error(
          'An unexpected error occured while getting the latest block details',
        );
        console.log(
          'An unexpeced error occured while getting the latest block details',
        );
      },
    );
  }

  ngOnDestroy() {
    this.apiCall.unsubscribe();
  }
}
