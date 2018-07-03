import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.less']
})
export class MenuButtonComponent implements OnInit {
  private closed = false;

  constructor() { }

  ngOnInit() {
  }

  toggleButton() {
    this.closed = !this.closed;
  }
}
