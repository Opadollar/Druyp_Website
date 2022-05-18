import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-request-detail',
  templateUrl: './booking-request-detail.component.html',
  styleUrls: ['./booking-request-detail.component.scss']
})
export class BookingRequestDetailComponent implements OnInit {

  selectedDate: any;

  constructor() { }

  ngOnInit(): void {
  }

}
