import { Component, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/services/transactions.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  latestBlock: number;

  constructor(private transactionService : TransactionsService, 
              private toastr: ToastrService ) {}

   ngOnInit(): void {
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
