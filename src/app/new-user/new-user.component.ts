import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { MatDialog, MatBottomSheet } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { FileFinderComponent } from '../file-finder/file-finder.component';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef, public dialog: MatDialog, private bottomSheet: MatBottomSheet) { }


  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'rgba(0,0,0,.87)';
 }

 openDialog(): void {
    this.dialog.open(DialogComponent)
  };

openFileFinder():void{
  this.bottomSheet.open(FileFinderComponent)
}

}
