import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-received-order-detail',
  templateUrl: './received-order-detail.component.html',
  styleUrls: ['./received-order-detail.component.scss']
})
export class ReceivedOrderDetailComponent implements OnInit {

  ordercancelReason = new FormGroup({
    
  })

  constructor() { }

  ngOnInit(): void {
  }

}
