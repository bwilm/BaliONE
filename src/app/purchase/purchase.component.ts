import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PaymentDialogComponent } from '../payment-dialog/payment-dialog.component';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements AfterViewInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  ngAfterViewInit(){

  }

  openDialog(): void{
    this.dialog.open(PaymentDialogComponent)
  }

}
