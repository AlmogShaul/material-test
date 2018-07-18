import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'app';
  dogs: any[];
  showPageA: boolean;
  state = 'inactive';
  productDetailsHeight = '100px';
  imageHeight = '100%';
  imageWidth = '100px';
  private raised = false;
  panelFlexDirection = 'row';
  showDesc = false;
  toggleState() {
    this.raised = !this.raised;
    if (this.raised) {
      this.raiseUp();
    } else {
      this.collapse();
    }
  }

  private collapse() {
    this.productDetailsHeight = '100px';
    this.imageHeight = '100%';
    this.imageWidth = '100px';
    this.panelFlexDirection  = 'row';
    this.showDesc = false;
  }

  private raiseUp() {
    this.productDetailsHeight = 'calc(100% - 50px)';
    this.imageHeight = '200px';
    this.imageWidth = '100%';
    this.panelFlexDirection  = 'column';
    this.showDesc = true;
  }

  setShowPageA() {
    this.showPageA = true;
  }

  setShowPageB() {
    this.showPageA = false;
  }

  ngOnInit() {
    this.dogs = [
      {
        image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu est id purus commodo condimen'
      }, {
        image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu est id purus commodo condimen'
      },
      {
        image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu est id purus commodo condimen'
      }, {
        image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu est id purus commodo condimen'
      }
    ];
  }


}
