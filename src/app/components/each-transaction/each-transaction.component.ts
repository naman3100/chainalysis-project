import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-each-transaction',
  templateUrl: './each-transaction.component.html',
  styleUrls: ['./each-transaction.component.scss']
})
export class EachTransactionComponent implements OnInit {
  @Input('transaction') transaction;
  @Input('address') address : string;
  value: number;
  constructor() { }

  ngOnInit(): void {
    this.getValue();
  }

  getValue(){
    let value = -1;
    let inputs = this.transaction['inputs'];
   console.log(inputs);
  }


}
