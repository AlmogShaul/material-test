import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-deeplinks',
  template: '<div></div>'
})
export class DeepLinksComponent {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.queryParams.subscribe(params => {
      // const param = params['deeplink'];
      const link = window.location.href.split('deeplink=')[1];
      window.location.href = link;
    });


  }
}
