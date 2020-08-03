import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-transaction-overview',
  templateUrl: './transaction-overview.component.html',
  styleUrls: ['./transaction-overview.component.scss'],
})
export class TransactionOverviewComponent implements OnInit {
  @Input() transaction;
  @Input() address: string;
  @Input() value;
  satoshiValue: number;
  time: any;
  constructor() {}

  ngOnInit(): void {
    this.satoshiValue = this.transaction?.result / 100000000;
    this.time = this.transaction?.time * 1000;
  }
}
