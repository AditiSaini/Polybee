import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      console.log('Yes');
      document.getElementById('jumbo').classList.remove('jumbotron');
      document.getElementById('jumbo').classList.add('jumbotron-shrink');
    } else {
      document.getElementById('jumbo').classList.add('jumbotron');
      document.getElementById('jumbo').classList.remove('jumbotron-shrink');
    }
  }

  ngOnInit(): void {}
}
