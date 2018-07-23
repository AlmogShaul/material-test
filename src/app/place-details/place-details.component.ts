import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.less']
})
export class PlaceDetailsComponent implements OnInit {

  constructor() {
  }

  @Input()name;
  @Input()rating;
  @Input()description;
  @Input()maxHeight;
  showDesc = false;
  raised = false;
  productDetailsHeight ;
  imageHeight ;
  imageWidth ;
  panelFlexDirection ;
  descriptionSelected = true;
  ngOnInit() {
    this.collapse();
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
    this.productDetailsHeight = this.maxHeight;
    this.imageHeight = '200px';
    this.imageWidth = '100%';
    this.panelFlexDirection = 'column';
    this.showDesc = true;
  }
}
