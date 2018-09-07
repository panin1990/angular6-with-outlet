import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {SharedDataProvider} from '../../providers/shared-data.provider';

@Component({
  template: ''
})
export class NotFoundRouteComponent {
  constructor(
    public router: Router,
    public sharedDataProvider: SharedDataProvider

  ) {}
  ngOnInit () {
    window.location.href = this.sharedDataProvider.prodSiteUrl + this.router.url;
  }
}
