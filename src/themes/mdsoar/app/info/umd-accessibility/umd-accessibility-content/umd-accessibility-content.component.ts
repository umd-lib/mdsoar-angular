import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'ds-umd-accessibility-content',
  templateUrl: './umd-accessibility-content.component.html',
  styleUrls: ['./umd-accessibility-content.component.scss'],
  standalone: true,
  imports: [RouterLink, TranslateModule],
})
/**
 * Component displaying the contents of the UMD Accessibility information
 */
export class UmdAccessibilityContentComponent {
}
