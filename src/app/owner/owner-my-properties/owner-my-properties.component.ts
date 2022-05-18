import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../services/global.service';


@Component({
  selector: 'app-owner-my-properties',
  templateUrl: './owner-my-properties.component.html',
  styleUrls: ['./owner-my-properties.component.scss']
})
export class OwnerMyPropertiesComponent implements OnInit {

  constructor(private globalservice: GlobalService) { }

  ngOnInit(): void {
   
  }

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

  // ----- Get Profile Pic

}
