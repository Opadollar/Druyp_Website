import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isSubmitted = false;
  public isSignuped = false;

  userLogin = new FormGroup({
    userId: new FormControl('', Validators.compose([
      Validators.required,
      Validators.email
    ])),
    userPassword: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15)
    ]))
  });

  userSignup = new FormGroup({
    userName: new FormControl('', Validators.compose([
      Validators.required
    ])),
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.email
    ])),
    phoneNumber: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(13)
    ])),
    password: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15)
    ]))
  });

  forgotPassword = new FormGroup({
    emailId: new FormControl('', Validators.compose([
      Validators.required,
      Validators.email
    ]))
  })

  constructor(private router: Router) { }

  ngOnInit(): any {
    window.addEventListener('scroll', this.scroll, true); //third parameter
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (event): any => {
    var header = document.querySelector('.navigation-header') as HTMLElement;
    if(window.pageYOffset > 150){
      header.classList.add('fixedHeader');
    }
    else{
      header.classList.remove('fixedHeader');
    }
  };

  // convenience getter for easy access to form fields
  get f_login() { return this.userLogin.controls; }
  get f_register() { return this.userSignup.controls; }
  get f_forget() { return this.forgotPassword.controls; }

  removeClass(event) {
    var element = event.target || event.srcElement || event.currentTarget;
    console.log(event);
    var tr_ele = event.target as HTMLElement;
    setTimeout(() => {
      tr_ele.classList.remove('active');
      console.log('done');
    }, 500)
  }

  //---------- Login ---------
  onLogin() {
    let logindetail = this.userLogin;
    this.isSubmitted = true;
    if (logindetail.valid) {
      console.log(logindetail.value);
      var ele = document.querySelector('.triggerclosemodal') as HTMLElement;
      ele.click();
      this.router.navigateByUrl('/profile');
    } else {
      console.log('Something went wrong');
      document.getElementById('') as HTMLElement;
    }
  }

  // ------ Register -------

  onRegister() {
    let registerDetail = this.userSignup;
    this.isSignuped = true;
    if (registerDetail.valid) {
      console.log('Rgistered Successfully', registerDetail.value);
      var ele = document.querySelector('.triggerclosemodal') as HTMLElement;
      ele.click();
    }
    else {
      return;
    }
  }


}
