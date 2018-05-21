import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { FormsModule } from '@angular/forms'; //for ngModel
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { GuidePageComponent } from './guide-page/guide-page.component';
import { NamePageComponent } from './name-page/name-page.component';
import { SummaryPageComponent } from './summary-page/summary-page.component';
import { OtherLinkComponent } from './other-link/other-link.component';
import { TodayPageComponent } from './today-page/today-page.component';
import { HappenPageComponent } from './happen-page/happen-page.component';
import { MeanPageComponent } from './mean-page/mean-page.component';
import { ChangePageComponent } from './change-page/change-page.component';
import { TomorrowPageComponent } from './tomorrow-page/tomorrow-page.component';


@NgModule({
  declarations: [
    AppComponent,
    GuidePageComponent,
    NamePageComponent,
    SummaryPageComponent,
    OtherLinkComponent,
    TodayPageComponent,
    HappenPageComponent,
    MeanPageComponent,
    ChangePageComponent,
    TomorrowPageComponent,
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/pages/guide',
        pathMatch: 'full'
      },
      {
        path: 'pages/guide',
        component: GuidePageComponent,
      },
      {
        path: 'pages/name',
        component: NamePageComponent,
      },
      {
        path: 'pages/today',
        component: TodayPageComponent,
      },
      {
        path: 'pages/happen',
        component: HappenPageComponent,
      },
      {
        path: 'pages/mean',
        component: MeanPageComponent,
      },
      {
        path: 'pages/change',
        component: ChangePageComponent,
      },
      {
        path: 'pages/tomorrow',
        component: TomorrowPageComponent,
      },
      {
        path: 'pages/summary',
        component: SummaryPageComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
