import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import validate from 'bitcoin-address-validation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  address:string;
  constructor(private route: Router) { }

  ngOnInit(): void {
}

getBtcAddress(){
  //let isValidate = validate(this.address);
    this.route.navigate(['btc',this.address]);
}

}
