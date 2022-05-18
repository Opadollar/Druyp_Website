import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  otpVarification = new FormGroup({
    
  })

  constructor() { }

  ngOnInit(): void {
  }

  // ----- Get Profile Pic

  triggerFileInput(event){
      var ele = event.target || event.srcElement || event.currentTarget;
      var target_ele = ele as HTMLElement;
      var input_ele = target_ele.dataset.file;
      console.log(input_ele);
      var fileinput = document.getElementById(input_ele);
      fileinput.click();
  }

  getProfilePic(event){
    var ele = event.target || event.srcElement || event.currentTarget as HTMLElement;
    console.log(ele.value);
  }

  // toggleOpen{
  //  $('first button').click(funtion(){
  //    $(this).hide();
  //    $('next button').show();
  //  });
  //  $('Second button').click(funtion(){
  //   $(this).hide();
  //   $('first button').show();
  // })
  // }
  

}
