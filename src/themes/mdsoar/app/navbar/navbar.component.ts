import {
  AsyncPipe,
  NgClass,
  NgComponentOutlet,
  NgFor,
  NgIf,
} from '@angular/common';
import { Component } from '@angular/core';
import { ThemedUserMenuComponent } from 'src/app/shared/auth-nav-menu/user-menu/themed-user-menu.component';

import { NavbarComponent as BaseComponent } from '../../../../app/navbar/navbar.component';
import { slideMobileNav } from '../../../../app/shared/animations/slide';

/**
 * Component representing the public navbar
 */
@Component({
  selector: 'ds-themed-navbar',
  styleUrls: ['./navbar.component.scss'],
  templateUrl: './navbar.component.html',
  animations: [slideMobileNav],
  imports: [
    AsyncPipe, NgClass, NgComponentOutlet, NgFor, NgIf, ThemedUserMenuComponent,
  ],
  standalone: true,
})
export class NavbarComponent extends BaseComponent {
}
