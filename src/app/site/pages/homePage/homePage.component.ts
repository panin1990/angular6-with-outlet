import { Component } from '@angular/core';
import {ToolsProvider} from '../../../providers/tools.provider';

@Component({
  selector: 'homePage-root',
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.scss']
})
export class HomePageComponent {
  constructor(
    public toolsProvider: ToolsProvider
  ) {}
}
