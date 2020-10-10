import { Component, 
         OnInit 
       }                      from '@angular/core'
import { TripDetails, 
         AddTripParams 
       }                      from '../trip-interface'
import { TripManagerService } from '../trip-manager.service'
import { CalendarEvent }      from 'angular-calendar'
import { addDays }            from 'date-fns'

@Component({
  selector    : 'app-trip-list',
  templateUrl : './trip-list.component.html',
  styleUrls   : ['./trip-list.component.scss']
})

export class TripListComponent implements OnInit {

  tripDetails     : TripDetails[]     = [] 
  calendarParams  : CalendarEvent []  = []
  addTrip         : boolean           = true
  isApiFinshed    : boolean           = false

  constructor(private tripServ : TripManagerService) { }

  ngOnInit() {
    this.tripServ.tripDetails.subscribe(updatedTrips => { 
      this.tripDetails    = updatedTrips 
      this.calendarParams = []
      this.tripDetails.forEach((trip) => {
        this.calendarParams.push({
          start  : new Date(trip.start),
          end    : addDays(new Date(trip.start), trip.duration),
          title  : trip.destination,
          color  : {primary : trip.color, secondary : trip.color},
          allDay : true,
        })
      })

      if (updatedTrips.length) {
        this.isApiFinshed = true
      }
    })

    this.tripServ.getTripDetails()
  }

  /*============================================================================
                            HTML
  ============================================================================*/

  onTripEdit(event : TripDetails) {
    this.tripServ.editTrip(event)
  }

  onTripDelete(event : number) {
    this.tripServ.deleteTrip({tripId : event})
    this.isApiFinshed = false
  }

  onCreateTrip() {
    this.tripDetails.unshift({} as TripDetails)
    this.addTrip = false
  }

  onSubmit(trip : AddTripParams) {
    this.addTrip = true
    this.tripServ.createTrip(trip)
    this.isApiFinshed = false
  }
}
