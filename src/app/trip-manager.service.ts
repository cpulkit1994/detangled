import { Injectable }         from '@angular/core'
import { DeleteTrip, 
         TripDetails,
         AddTripParams
       }                      from './trip-interface'
import { HttpClient }         from '@angular/common/http'
import { BehaviorSubject }    from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class TripManagerService {

  private _tripDetails    = new BehaviorSubject<TripDetails[]>([])
  private baseUrl         = 'https://detangled.in/develop/c76c43c4-ce55-49fe-a529-ed8ca2d6e27f/events'
  private dataStore       : { tripDetails: TripDetails[] } = { tripDetails: [] } // store our data in memory

  constructor(private httpClient : HttpClient) { }

  get tripDetails() {
    return this._tripDetails.asObservable()
  }

  getTripDetails() {
    this.httpClient.get(`${this.baseUrl}`).subscribe(
      data => {
        this.dataStore.tripDetails = data as TripDetails[]
        this._tripDetails.next(Object.assign({}, this.dataStore).tripDetails)
      },
      error => console.log('Could not load tripDetails.')
    )
  }

  async deleteTrip(params : DeleteTrip.params) {
    this.httpClient.delete(`${this.baseUrl}/${params.tripId}`).subscribe(
      data => {
        const detail = this.dataStore.tripDetails.filter((trip) => {
          return trip.id !== params.tripId
        })

        this.dataStore.tripDetails = detail
        this._tripDetails.next(Object.assign({}, this.dataStore).tripDetails)
      },
      error => console.log('Could not delete tripDetails.')
    )
  }

  async editTrip(params : TripDetails) {

    this.httpClient.put(`${this.baseUrl}/${params.id}`, params).subscribe (
      data => {
        this.dataStore.tripDetails.map((detail) => {
          if (detail.id === params.id as number) {
            return data
          } else return detail
        })
      },
      error => console.log('Could not edit tripDetails.')
    )
  }

  async createTrip(params : AddTripParams) {

    this.httpClient.post(`${this.baseUrl}`, params).subscribe (
      data => {
        this.dataStore.tripDetails.shift()
        this.dataStore.tripDetails.push(data as TripDetails)
        this._tripDetails.next(Object.assign({}, this.dataStore).tripDetails)
      },
      error => console.log('Could not edit tripDetails.')
    )
  }

}