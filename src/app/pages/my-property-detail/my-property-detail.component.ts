import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-property-detail',
  templateUrl: './my-property-detail.component.html',
  styleUrls: ['./my-property-detail.component.scss']
})
export class MyPropertyDetailComponent implements OnInit {
  selectedDate: any;
  constructor() { }

  ngOnInit(): void {
  }

}
