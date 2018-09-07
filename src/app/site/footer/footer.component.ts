import { Component } from '@angular/core';
import {ToolsProvider} from '../../providers/tools.provider';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(
    public tools: ToolsProvider
  ){}

}
