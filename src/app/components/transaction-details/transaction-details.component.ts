import { TransactionsService } from 'src/app/services/transactions.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { faAngleDoubleRight, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss']
})
export class TransactionDetailsComponent implements OnInit {
  faAngleDoubleRight=faAngleDoubleRight;
  faArrowRight=faArrowRight;
  faArrowLeft=faArrowLeft;
  hash:string;
  tranDetails:any = null;
  constructor(private activatedRoute: ActivatedRoute,
              private transactionsService: TransactionsService,
              private toastr: ToastrService) {}

   ngOnInit() {
   this.activatedRoute.paramMap
    .subscribe(params => {
      this.hash=(params.get('hash')); 
      this.transactionsService.getTransactionDetails(this.hash)
      .subscribe(response => {
        this.tranDetails = response;
        console.log(this.tranDetails);
      })
  }, (error)=>{
     this.toastr.error("An unexpected error occured while getting transaction details");
      console.log("An unexpeced error occured while getting transaction details");
  });
  }



}
