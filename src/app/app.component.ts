import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  ngOnInit(): void {}

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    // this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
    //   '#D2B4DE';
  }

  title = 'Polybee Demo';
}
