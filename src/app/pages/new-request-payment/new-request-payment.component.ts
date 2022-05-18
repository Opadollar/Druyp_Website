import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-new-request-payment',
  templateUrl: './new-request-payment.component.html',
  styleUrls: ['./new-request-payment.component.scss']
})
export class NewRequestPaymentComponent implements OnInit {

  cardDetail = new FormGroup({})

  constructor() { }

  ngOnInit(): void {
  }

}
