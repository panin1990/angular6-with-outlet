import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SiteComponent} from './site/site.component';
import {AdminPanelHomeComponent} from './adminPanel/adminPanelHome.component';
import {HomePageComponent} from './site/pages/homePage/homePage.component';
import {TestPageComponent} from './site/pages/testPate/testPage.component';
import {NotFoundRouteComponent} from './site/pages/notFoundRoute.component';

export let routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '', component: SiteComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'test', component: TestPageComponent }
    ]},
  { path: 'adminPanel', component: AdminPanelHomeComponent },
  { path: '**', component: NotFoundRouteComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }

