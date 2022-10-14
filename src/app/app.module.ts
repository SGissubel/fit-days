import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { DayComponent } from './pages/day/day.component';
import { FooterComponent } from './wrapper/footer/footer.component';
import { HeaderComponent } from './wrapper/header/header.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LandingPageVideoComponent } from './pages/landing-page/landing-page-video/landing-page-video.component';
import { LoginComponent } from './pages/login/login.component';
import { MaterialModule } from './material.module';
import { NavigationComponent } from './wrapper/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LandingPageVideoComponent,
    CalendarComponent,
    DayComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
