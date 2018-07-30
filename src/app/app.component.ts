import {AfterViewInit, Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [
    trigger('itemState', [
      transition(':enter', [
        style({transform: 'translateY(100px)', opacity: 0}),
        animate('300ms ease-out')
      ]),
      transition('* => void', [
        animate('500ms ease-in', style({transform: 'translateY(100%)', opacity: 1}))
      ])
    ])
  ]
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
  showDesc = true;
  carouselOne: any;

  constructor() {
    this.collapse();
  }


  ngOnInit() {

    this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: false
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    };
    this.dogs = [{
      image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      description: '1 orem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu est id purus commodo condimen'
    }, {
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      description: '2 orem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu est id purus commodo condimen'
    },
      {
        image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        description: '3 orem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu est id purus commodo condimen'
      }, {
        image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        description: '4 orem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu est id purus commodo condimen'
      }];

  }

  toggleState() {
    this.raised = !this.raised;
    if (this.raised) {
      this.raiseUp();
    } else {
      this.collapse();
    }
  }

  private collapse() {
    console.log('collapse');
    this.productDetailsHeight = '100px';
    this.imageHeight = '100%';
    this.imageWidth = '100px';
    this.panelFlexDirection = 'row';
    this.showDesc = false;
  }

  private raiseUp() {
    console.log('raised');
    this.productDetailsHeight = 'calc(100% - 50px)';
    this.imageHeight = '200px';
    this.imageWidth = '100%';
    this.panelFlexDirection = 'column';
    this.showDesc = true;
  }

  setShowPageA() {
    this.showPageA = true;
  }

  setShowPageB() {
    this.showPageA = false;
  }


  carouselClicked(event) {
    event.stopPropagation();
  }
}
