import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-booked-property',
  templateUrl: './booked-property.component.html',
  styleUrls: ['./booked-property.component.scss']
})
export class BookedPropertyComponent implements OnInit {

  selectedDate: any;
  
  ordercancelReason = new FormGroup({

  })
  
  constructor() { }

  ngOnInit(): void {
  }

}
