import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ThemeModule } from '../../@theme/theme.module';
import { ECommerceComponent } from './e-commerce.component';
import { ProfitCardComponent } from './profit-card/profit-card.component';
import { ChartModule } from 'angular2-chartjs';
import { StatsCardBackComponent } from './profit-card/back-side/stats-card-back.component';
import { StatsAreaChartComponent } from './profit-card/back-side/stats-area-chart.component';
import { StatsBarAnimationChartComponent } from './profit-card/front-side/stats-bar-animation-chart.component';
import { StatsCardFrontComponent } from './profit-card/front-side/stats-card-front.component';


import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { InvestDashboardComponent } from './invest-dashboard/invest-dashboard.component';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    ChartModule,
    NbProgressBarModule,
    NgxEchartsModule,
    NgxChartsModule,
    LeafletModule,
  ],
  declarations: [
    ECommerceComponent,
    StatsCardFrontComponent,
    StatsAreaChartComponent,
    StatsBarAnimationChartComponent,
    ProfitCardComponent,
    StatsCardBackComponent,
    InvestDashboardComponent,
  ],
})
export class ECommerceModule { }
