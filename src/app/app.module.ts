import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './router.module';
import {SharedDataProvider} from './providers/shared-data.provider';
import {FooterComponent} from './site/footer/footer.component';
import {HomePageComponent} from './site/pages/homePage/homePage.component';
import {SiteComponent} from './site/site.component';
import {TestPageComponent} from './site/pages/testPate/testPage.component';
import {AdminPanelHomeComponent} from './adminPanel/adminPanelHome.component';
import {HeaderComponent} from './site/header/header.component';
import {ToolsProvider} from './providers/tools.provider';
import {NotFoundRouteComponent} from './site/pages/notFoundRoute.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SiteComponent,
    HomePageComponent,
    TestPageComponent,
    AdminPanelHomeComponent,
    NotFoundRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SharedDataProvider, ToolsProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
