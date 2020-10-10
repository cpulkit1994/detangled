import { Component,
         ChangeDetectionStrategy,
         ViewChild,
         TemplateRef,
         Input
       }                                      from '@angular/core'
import { Subject }                            from 'rxjs'
import { CalendarEvent,
         CalendarView
       }                                      from 'angular-calendar'

@Component({
  selector        : 'app-calendar',
  changeDetection : ChangeDetectionStrategy.OnPush,
  templateUrl     : './calendar.component.html',
  styleUrls       : ['./calendar.component.scss']
})

export class CalendarComponent {

  @ViewChild('modalContent', { static: true }) modalContent : TemplateRef<any>
  @Input() calendarEvents : CalendarEvent[]

  view      : CalendarView  = CalendarView.Month;
  viewDate  : Date          = new Date()

  CalendarView = CalendarView

  modalData : {
    action  : string;
    event   : CalendarEvent;
  }

  refresh         : Subject<any>  = new Subject()
  activeDayIsOpen : boolean       = false;

  constructor() { }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

}
