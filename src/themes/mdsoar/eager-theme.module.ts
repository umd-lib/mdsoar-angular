import { NgModule } from '@angular/core';
import { SharedModule } from '../../app/shared/shared.module';
import { NavbarComponent } from './app/navbar/navbar.component';
import { HeaderComponent } from './app/header/header.component';
import { RootModule } from '../../app/root.module';
import { NavbarModule } from '../../app/navbar/navbar.module';
import { HomePageModule } from 'src/app/home-page/home-page.module';
import { StatisticsModule } from 'src/app/statistics/statistics.module';
import { UmdEnvironmentBannerComponent } from './app/umd-environment-banner/umd-environment-banner.component';
import { BreadcrumbsComponent } from './app/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './app/footer/footer.component';
import { HomePageComponent } from './app/home-page/home-page.component';
import { HomeNewsComponent } from './app/home-page/home-news/home-news.component';

/**
 * Add components that use a custom decorator to ENTRY_COMPONENTS as well as DECLARATIONS.
 * This will ensure that decorator gets picked up when the app loads
 */
const ENTRY_COMPONENTS = [];

const DECLARATIONS = [
  ...ENTRY_COMPONENTS,
  BreadcrumbsComponent,
  FooterComponent,
  HeaderComponent,
  HomeNewsComponent,
  HomePageComponent,
  NavbarComponent,
  UmdEnvironmentBannerComponent,
];

@NgModule({
  imports: [
    SharedModule,
    RootModule,
    NavbarModule,
    HomePageModule,
    StatisticsModule.forRoot(),
  ],
  declarations: DECLARATIONS,
  providers: [
    ...ENTRY_COMPONENTS.map((component) => ({provide: component}))
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
