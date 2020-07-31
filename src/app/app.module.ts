import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule, CdkScrollableModule } from '@angular/cdk/scrolling';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { EachTransactionComponent } from './components/each-transaction/each-transaction.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './components/home/home.component';
import { TransactionDetailsComponent } from './components/transaction-details/transaction-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TransactionsComponent,
    EachTransactionComponent,
    SideBarComponent,
    HomeComponent,
    TransactionDetailsComponent
  ],
  imports: [
    CdkScrollableModule,
    FormsModule,
    ScrollingModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
