import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-furniture',
  templateUrl: './add-furniture.component.html',
  styleUrls: ['./add-furniture.component.scss']
})
export class AddFurnitureComponent implements OnInit {

  addFurnitures = new FormGroup({
    
  })


  constructor() { }

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


}
