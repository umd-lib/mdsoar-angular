import {
  AsyncPipe,
  NgFor,
  NgIf,
  NgTemplateOutlet,
} from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { BreadcrumbsService } from 'src/app/breadcrumbs/breadcrumbs.service';
import { VarDirective } from 'src/app/shared/utils/var.directive';

import { BreadcrumbsComponent as BaseComponent } from '../../../../app/breadcrumbs/breadcrumbs.component';

/**
 * Component representing the breadcrumbs of a page
 */
@Component({
  selector: 'ds-themed-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['../../../../app/breadcrumbs/breadcrumbs.component.scss', 'breadcrumbs.component.scss'],
  imports: [
    AsyncPipe,
    NgbTooltipModule,
    NgFor,
    NgIf,
    NgTemplateOutlet,
    VarDirective,
    RouterLink,
    TranslateModule,
  ],
  standalone: true,
})
export class BreadcrumbsComponent extends BaseComponent {
  communityLogoPath: string = null;

  constructor(
    breadcrumbsService: BreadcrumbsService,
  ) {
    super(breadcrumbsService);
  }
}
