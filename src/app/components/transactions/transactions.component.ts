import { Component, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/services/transactions.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  satoshiValue: number;
  transactions : any[];
  res:any;
  address:string;


  constructor(private transactionService : TransactionsService,
              private toastr: ToastrService){}

   ngOnInit(): void {
    this.transactionService.getTransactions(0,20).subscribe( 
      response => {
      this.res=response;
      this.transactions = this.res['txs'];
      this.address = this.res['address'];
    }, 
      (error: Response) => {
      this.toastr.error('An unexpected error occured');
      console.log("An unexpeced error occured");
    });
  }

}
