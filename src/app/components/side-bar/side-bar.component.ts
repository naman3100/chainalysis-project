import { Component, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/services/transactions.service';
import { ToastrService } from 'ngx-toastr';
import {  interval  } from 'rxjs';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  latestBlock: number;

  constructor(private transactionService : TransactionsService, 
              private toastr: ToastrService ) {
                this.getBlock();}


   ngOnInit(): void {
     //Making call to api every 5 mins to get the latest block
    interval(3000).subscribe(()=>{
     this.getBlock();
    })
  }

  //Function to get the latest block from the service
  getBlock(){
    this.transactionService.getLatestBlock().subscribe(
      response => {
      this.latestBlock = response['height'];
    },
      (error: Response) => {
        this.toastr.error('An unexpected error occured');
        console.log("An unexpeced error occured");
    });
  }

}
