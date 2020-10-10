export interface TripDetails {
  id          : number
  destination : string
  start       : string
  duration    : number
  comment     : string
  color       : string
}

export interface AddTripParams {
  destination : string
  start       : string
  duration    : number
  comment     : string
  color       : string
}

export namespace DeleteTrip {

  export type params = {
    tripId : number
  }
}
