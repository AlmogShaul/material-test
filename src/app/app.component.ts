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
