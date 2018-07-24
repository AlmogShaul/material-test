import {AfterViewInit, Directive, ElementRef} from '@angular/core';
import {GoogleMapsAPIWrapper} from '@agm/core';

declare var google: any;

@Directive({
  selector: '[appStreetview]'
})
export class StreetviewDirective implements AfterViewInit {

  constructor(private gmapsApi: GoogleMapsAPIWrapper, private el: ElementRef) {
  }

  ngAfterViewInit() {
    this.updateMap2();
  }

  private updateMap2() {
    this.gmapsApi.getNativeMap().then((map: any) => {

      const panorama = new google.maps.StreetViewPanorama(
        document.getElementById('pano'), {
          position: {lat: 48.857947, lng: 2.294449},
          motionTracking: false,
          motionTrackingControl: false

        });
      panorama.setVisible(true);
      map.setStreetView(panorama);
    });
  }


}
