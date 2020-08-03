import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  address: string;
  constructor(private route: Router) {}

  ngOnInit(): void {}

  getBtcAddress() {
    this.route.navigate(['btc', this.address]);
  }
}
