import { Component } from '@angular/core';

import { UmdAccessibilityContentComponent } from './umd-accessibility-content/umd-accessibility-content.component';

@Component({
  selector: 'ds-umd-accessibility',
  templateUrl: './umd-accessibility.component.html',
  styleUrls: ['./umd-accessibility.component.scss'],
  standalone: true,
  imports: [UmdAccessibilityContentComponent],
})
/**
 * Component displaying the UMD Accessibility information
 */
export class UmdAccessibilityComponent {
}
