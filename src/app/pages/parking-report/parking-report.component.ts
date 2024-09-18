import { Component } from '@angular/core';

@Component({
  selector: 'app-parking-report',
  templateUrl: './parking-report.component.html',
  styleUrls: ['./parking-report.component.css']
})
export class ParkingReportComponent {

  bookings=[
    {
      customerName:'vickey',
      stationName:'parkour',
      bookingStatus:'cancelled',
      duration:'24:00:00',
      parkingType:'bike',
      amount:'6000'
    },
    {
      customerName:'arivu',
      stationName:'Dk parking',
      bookingStatus:'booked',
      duration:'01:59:22',
      parkingType:'bike',
      amount:'59.68'
    },
    {
      customerName:'arivu',
      stationName:'parkour',
      bookingStatus:'cancelled',
      duration:'24:00:00',
      parkingType:'bike',
      amount:'2400'
    },
    {
      customerName:'arivu',
      stationName:'Dk parking',
      bookingStatus:'cancelled',
      duration:'24:00:00',
      parkingType:'bike',
      amount:'1200'
    },
    {
      customerName:'arivu',
      stationName:'Dk parking',
      bookingStatus:'cancelled',
      duration:'24:00:00',
      parkingType:'bike',
      amount:'720'
    },
    {
      customerName:'arivu',
      stationName:'parkour',
      bookingStatus:'cancelled',
      duration:'24:00:00',
      parkingType:'bike',
      amount:'2400'
    },
    {
      customerName:'moharaj',
      stationName:'Dk parking',
      bookingStatus:'cancelled',
      duration:'24:00:00',
      parkingType:'bike',
      amount:'720'
    },
    {
      customerName:'dravid',
      stationName:'parkour',
      bookingStatus:'cancelled',
      duration:'24:00:00',
      parkingType:'bike',
      amount:'2400'
    },
    {
      customerName:'arive',
      stationName:'parkour',
      bookingStatus:'cancelled',
      duration:'24:00:00',
      parkingType:'car',
      amount:'2400'
    },
    {
      customerName:'moharaj',
      stationName:'parkour',
      bookingStatus:'cancelled',
      duration:'24:00:00',
      parkingType:'bike',
      amount:'2400'
    }
  ]

}
