import { Component } from '@angular/core';
import {ToolsProvider} from '../providers/tools.provider';

@Component({
  selector: 'site-root',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent {
  constructor(
    public tools: ToolsProvider
  ) {}

}
