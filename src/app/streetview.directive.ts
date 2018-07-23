import {AfterViewInit, Directive} from '@angular/core';
import {GoogleMapsAPIWrapper} from '@agm/core';

declare var google: any;

@Directive({
  selector: '[appStreetview]'
})
export class StreetviewDirective implements AfterViewInit {

  constructor(private gmapsApi: GoogleMapsAPIWrapper) {
  }

  ngAfterViewInit() {
    this.updateMap();
  }

  private updateMap() {
    this.gmapsApi.getNativeMap().then((map: any) => {
      const panorama = map.getStreetView();
      panorama.setPosition({lat: 40.729884, lng: -73.990988});
      panorama.setPov(({
        heading: 265,
        pitch: 0
      }));

      panorama.setVisible(true);
    });
  }

}
