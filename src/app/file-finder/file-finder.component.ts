import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-file-finder',
  templateUrl: './file-finder.component.html',
  styleUrls: ['./file-finder.component.css']
})
export class FileFinderComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<FileFinderComponent>) { }

  ngOnInit() {
  }

  openLink(event: MouseEvent): void{
    this.bottomSheetRef.dismiss
    event.preventDefault()
  }

}
