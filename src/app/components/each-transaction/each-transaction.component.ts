import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-each-transaction',
  templateUrl: './each-transaction.component.html',
  styleUrls: ['./each-transaction.component.scss']
})
export class EachTransactionComponent implements OnInit {
  @Input('transaction') transaction;
  @Input('address') address : string;
  @Input('value') value;
  satoshiValue:number;
  time:any;
  constructor() { }

  ngOnInit(): void {
    this.satoshiValue = this.transaction?.result / 100000000;
    this.time = this.transaction?.time*1000;
  }
}
