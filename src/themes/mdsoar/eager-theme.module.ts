import { NgModule } from '@angular/core';

import { RootModule } from '../../app/root.module';
import { FooterComponent } from './app/footer/footer.component';
import { HeaderComponent } from './app/header/header.component';
import { HomeNewsComponent } from './app/home-page/home-news/home-news.component';
import { HomePageComponent } from './app/home-page/home-page.component';
import { UntypedItemComponent } from './app/item-page/simple/item-types/untyped-item/untyped-item.component';
import { NavbarComponent } from './app/navbar/navbar.component';
import { UmdEnvironmentBannerComponent } from './app/umd-environment-banner/umd-environment-banner.component';


/**
 * Add components that use a custom decorator to ENTRY_COMPONENTS as well as DECLARATIONS.
 * This will ensure that decorator gets picked up when the app loads
 */
const ENTRY_COMPONENTS = [
  UntypedItemComponent,
];

const DECLARATIONS = [
  ...ENTRY_COMPONENTS,
  HomeNewsComponent,
  HomePageComponent,
  HeaderComponent,
  NavbarComponent,
  FooterComponent,
  UmdEnvironmentBannerComponent,
];

@NgModule({
  imports: [
    RootModule,
    ...DECLARATIONS,
  ],
  providers: [
    ...ENTRY_COMPONENTS.map((component) => ({ provide: component })),
  ],
})
/**
 * This module is included in the main bundle that gets downloaded at first page load. So it should
 * contain only the themed components that have to be available immediately for the first page load,
 * and the minimal set of imports required to make them work. Anything you can cut from it will make
 * the initial page load faster, but may cause the page to flicker as components that were already
 * rendered server side need to be lazy-loaded again client side
 *
 * Themed EntryComponents should also be added here
 */
export class EagerThemeModule {
}
