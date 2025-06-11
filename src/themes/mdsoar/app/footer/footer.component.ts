import { Component } from '@angular/core';

import { FooterComponent as BaseComponent } from '../../../../app/footer/footer.component';

@Component({
  selector: 'ds-themed-footer',
  styleUrls: ['footer.component.scss'],
  templateUrl: 'footer.component.html',
  imports: [],
  standalone: true,
})
export class FooterComponent extends BaseComponent {
}
