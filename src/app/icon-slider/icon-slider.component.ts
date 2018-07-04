import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Icon} from './icon';

@Component({
  selector: 'app-icon-slider',
  templateUrl: './icon-slider.component.html',
  styleUrls: ['./icon-slider.component.less']
})
export class IconSliderComponent implements OnInit, OnChanges {

  @Input() total = 5;
  @Input() color = 'red';

  icons: any[] = [];

  changeValue(index: number) {
    this.icons.forEach((e, i) => {
      if (i <= index) {
        e.selected = true;
      } else {
        e.selected = false;
      }
    });
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {

    for (let i = 0; i < this.total; i++) {
      this.icons.push(new Icon());
    }
  }

}
