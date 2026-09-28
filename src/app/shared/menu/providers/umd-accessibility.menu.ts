import { Injectable } from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';
import { getUmdAccessibilityPath } from 'src/app/info/info-routing-paths';

import { MenuItemType } from '../menu-item-type.model';
import {
  AbstractMenuProvider,
  PartialMenuSection,
} from '../menu-provider.model';

/**
 * Menu provider to create the "Accessibility" menu section in the public navbar
 */
@Injectable()
export class UmdAccessibilityMenuProvider extends AbstractMenuProvider {
  public getSections(): Observable<PartialMenuSection[]> {
    return of([
      {
        visible: true,
        model: {
          type: MenuItemType.LINK,
          text: `menu.section.umd-accessibility`,
          link: getUmdAccessibilityPath(),
        },
      },
    ] as PartialMenuSection[]);
  }
}
