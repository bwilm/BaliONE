import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { MultiDayDialogComponent } from '../multi-day-dialog/multi-day-dialog.component';
import { MatDialog } from '@angular/material'

@Component({
  selector: 'app-transportation',
  templateUrl: './transportation.component.html',
  styleUrls: ['./transportation.component.css']
})
export class TransportationComponent implements AfterViewInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
  }

  openDialog(){
    this.dialog.open(MultiDayDialogComponent)
  }

}
