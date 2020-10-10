import { BrowserModule }          from '@angular/platform-browser'
import {BrowserAnimationsModule}  from '@angular/platform-browser/animations'
import { NgModule }               from '@angular/core'
import { AppRoutingModule }       from './app-routing.module'
import { AppComponent }           from './app.component'
import { TripCardComponent }      from './trip-card/trip-card.component'
import { CalendarComponent }      from './calendar/calendar.component'
import { TripListComponent }      from './trip-list/trip-list.component'
import { MaterialModule }         from './material.module'
import { FlexLayoutModule }       from '@angular/flex-layout'
import { HttpClientModule }       from '@angular/common/http'
import { FormsModule, 
         ReactiveFormsModule 
       }                          from '@angular/forms'
import { FlatpickrModule }        from 'angularx-flatpickr'
import { CalendarModule, 
         DateAdapter 
       }                          from 'angular-calendar'
import { adapterFactory }         from 'angular-calendar/date-adapters/date-fns'

@NgModule({
  declarations: [
    AppComponent,
    TripCardComponent,
    CalendarComponent,
    TripListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide     : DateAdapter,
      useFactory  : adapterFactory,
    }),
  ],
  exports: [
    TripCardComponent,
    CalendarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
