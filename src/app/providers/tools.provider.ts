import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {SharedDataProvider} from './shared-data.provider';


@Injectable()
export class ToolsProvider {
  constructor(
    public router: Router,
    public sharedDataProvider: SharedDataProvider
  ){}

  public goTo(url: string) {
    if ((url.indexOf('http://') !== -1) || (url.indexOf('https://') !== -1)) {
      window.location.href = url;
    } else {
      this.router.navigateByUrl(url);
    }
  }
}