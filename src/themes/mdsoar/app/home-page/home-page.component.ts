import {
  AsyncPipe,
  NgIf,
} from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ThemedHomeNewsComponent } from 'src/app/home-page/home-news/themed-home-news.component';
import { RecentItemListComponent } from 'src/app/home-page/recent-item-list/recent-item-list.component';
import { ThemedSearchFormComponent } from 'src/app/shared/search-form/themed-search-form.component';
import { ViewTrackerComponent } from 'src/app/statistics/angulartics/dspace/view-tracker.component';

import { HomePageComponent as BaseComponent } from '../../../../app/home-page/home-page.component';

@Component({
  selector: 'ds-themed-home-page',
  styleUrls: ['./home-page.component.scss'],
  templateUrl: './home-page.component.html',
  imports: [
    AsyncPipe, RecentItemListComponent, NgIf, ViewTrackerComponent, ThemedHomeNewsComponent,
    ThemedSearchFormComponent, TranslateModule,
  ],
  standalone: true,
})
export class HomePageComponent extends BaseComponent {}
