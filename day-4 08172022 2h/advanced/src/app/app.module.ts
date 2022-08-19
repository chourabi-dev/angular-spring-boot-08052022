import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './comps/navbar/navbar.component';
import { SideMenuComponent } from './comps/side-menu/side-menu.component';
import { MenuItemComponent } from './comps/menu-item/menu-item.component';
import { FeedsComponent } from './comps/feeds/feeds.component';
import { FeedComponent } from './comps/feed/feed.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TeamComponent } from './pages/team/team.component';
import { HistoricComponent } from './pages/historic/historic.component';
import { AuthComponent } from './pages/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideMenuComponent,
    MenuItemComponent,
    FeedsComponent,
    FeedComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactUsComponent,
    NotFoundComponent,
    TeamComponent,
    HistoricComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
