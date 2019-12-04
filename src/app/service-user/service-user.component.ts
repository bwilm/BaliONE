import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component'

@Component({
  selector: 'app-service-user',
  templateUrl: './service-user.component.html',
  styleUrls: ['./service-user.component.css']
})
export class ServiceUserComponent implements AfterViewInit {



  constructor(private elementRef: ElementRef, private dialog: MatDialog ) {}



  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'rgba(0,0,0,.87)';
 }

 openDialog(): void {
  this.dialog.open(DialogComponent)
};

}
