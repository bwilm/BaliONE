import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-multi-day',
  templateUrl: './multi-day.component.html',
  styleUrls: ['./multi-day.component.css']
})
export class MultiDayComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor='rgba(0,0,0,.87)'
  }

}
