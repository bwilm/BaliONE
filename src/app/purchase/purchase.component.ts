import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PaymentDialogComponent } from '../payment-dialog/payment-dialog.component';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef, public dialog: MatDialog) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor='rgba(0,0,0,.87)'
  }

  openDialog(): void{
    this.dialog.open(PaymentDialogComponent)
  }

}
