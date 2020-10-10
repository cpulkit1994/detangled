import { Component, 
         OnInit, 
         Input,
         Output,
         EventEmitter
       }                  from '@angular/core'
import { TripDetails, 
         AddTripParams 
       }                  from '../trip-interface'
import lo                 from 'lodash'
import { FormGroup, 
         FormBuilder, 
         Validators 
       }                  from '@angular/forms'

@Component({
  selector    : 'app-trip-card',
  templateUrl : './trip-card.component.html',
  styleUrls   : ['./trip-card.component.scss']
})

export class TripCardComponent implements OnInit {

  trip          : TripDetails
  isBeingEdited : boolean     = false
  tripStartTs   : number
  isAddingTrip  : boolean     = false
  tripForm      : FormGroup    

  @Input()  tripDetail    : TripDetails
  @Output() editParams    : EventEmitter<TripDetails>   = new EventEmitter<TripDetails>()
  @Output() deleteParams  : EventEmitter<number>        = new EventEmitter<number>()
  @Output() addParams     : EventEmitter<AddTripParams> = new EventEmitter<AddTripParams>()

  constructor(private formBuilder : FormBuilder) { 
    this.tripForm = this.formBuilder.group({
      destination : [null, Validators.required],
      comment     : [null, Validators.required],
      start       : [null, Validators.required],
      duration    : [null, Validators.required]
    })
  }

  ngOnInit() {
    if (Object.keys(this.tripDetail).length) {
      this.trip         = {...this.tripDetail}
      this.tripStartTs  = new Date(this.tripDetail.start).getTime()
    } else {
      this.isAddingTrip = true
      this.tripDetail   = {
        id          : null,
        comment     : '',
        color       : '',
        destination : '',
        start       : '',
        duration    : null
      }
    }
  }

  /*============================================================================
                            HTML
  ============================================================================*/

  deleteTrip() {
    this.deleteParams.emit(this.tripDetail.id)
  }

  onEditClick() {
    this.isBeingEdited = true
  }

  editTrip() {
    const isNotEdited : boolean = lo.isEqual(this.trip, this.tripDetail)

    if (!isNotEdited) this.editParams.emit(this.tripDetail)

    this.isBeingEdited = false
  }

  onCommentChange(event : any) {
    this.tripDetail.comment = event.target.value
  }

  onDestinationChange(event : any) {
    this.tripDetail.destination = event.target.value
  }

  onCancel() {
    this.tripDetail     = {...this.trip}
    this.isBeingEdited  = false
  }

  onCreateTrip() {
    this.tripForm.markAllAsTouched()
    if (this.tripForm.invalid) return

    const dateArr : string[] = this.tripForm.controls['start'].value.split('/')

    this.addParams.emit({
      color       : '#000',
      comment     : this.tripForm.controls['comment'].value,
      duration    : this.tripForm.controls['duration'].value,
      destination : this.tripForm.controls['destination'].value,
      start       : (new Date(`${dateArr[2]}-${dateArr[1]}-${dateArr[0]}`)).toString()
    })

    this.isAddingTrip = false
  }
}
