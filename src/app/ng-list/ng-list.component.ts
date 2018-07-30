import {Component, ContentChild, ContentChildren, Input, OnChanges, OnInit, SimpleChanges, TemplateRef} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-ng-list',
  templateUrl: './ng-list.component.html',
  styleUrls: ['./ng-list.component.less'],
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
export class NgListComponent implements OnInit, OnChanges {

  constructor() {
  }

  @ContentChild(TemplateRef) template: TemplateRef<any>;


  @Input() inputItems: any[];
  items: any[] = [];

  ngOnInit() {
  }

  select(item) {
    if (item.selected) {
      this.items.forEach(_item => {
        _item.selected = null;
      });
    } else {
      this.items.forEach(_item => {
        _item.selected = false;
      });
      item.selected = true;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.inputItems.forEach((v, i) => setTimeout(() => {
      this.items.push(v);
    }, i * 300));
  }

}
