import { Component } from '@angular/core';

import { FooterComponent as BaseComponent } from '../../../mdsoar/app/footer/footer.component';
import { UmdFooterAccessibilityComponent } from '../../../mdsoar/app/umd-footer-accessibility/umd-footer-accessibility.component';

@Component({
  selector: 'ds-themed-footer',
  styleUrls: ['../../../mdsoar/app/footer/footer.component.scss'],
  templateUrl: 'footer.component.html',
  imports: [UmdFooterAccessibilityComponent],
  standalone: true,
})
export class FooterComponent extends BaseComponent {
}
