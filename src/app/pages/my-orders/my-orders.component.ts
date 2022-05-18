import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // ----- Get Profile Pic

  triggerFileInput(event) {
    var ele = event.target || event.srcElement || event.currentTarget;
    var target_ele = ele as HTMLElement;
    var input_ele = target_ele.dataset.file;
    console.log(input_ele);
    var fileinput = document.getElementById(input_ele);
    fileinput.click();
  }

  getProfilePic(event) {
    var ele = event.target || event.srcElement || event.currentTarget as HTMLElement;
    console.log(ele.value);
  }


}
