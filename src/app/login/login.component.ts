import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements AfterViewInit {

  showing:boolean = false

  constructor(private elementRef: ElementRef) {

  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.background = "url('../../assets/login.jpg')"
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundSize = "cover"
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundRepeat = "no-repeat"

  }

}
