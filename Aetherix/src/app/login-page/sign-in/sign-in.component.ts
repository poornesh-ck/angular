import { Component,ElementRef, EventEmitter, Output, Renderer2 } from '@angular/core';
// import { NgxOtpInputConfig } from 'ngx-otp-input';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
   // PhoneNumber validation (FormControl)
   phnNo : FormControl;
  constructor(private el: ElementRef, private renderer: Renderer2) {this.phnNo=new  FormControl('',[Validators.required, Validators.maxLength(10),Validators.pattern('^[6-9][0-9]*$'),Validators.minLength(10)]);}
  
  ngAfterViewInit() {
    const sign_in_btn = this.el.nativeElement.querySelector('#sign-in-btn');
    const sign_up_btn = this.el.nativeElement.querySelector('#sign-up-btn');
    const container = this.el.nativeElement.querySelector('.container');

    sign_up_btn.addEventListener('click', () => {
      this.renderer.addClass(container, 'sign-up-mode');
    });

    sign_in_btn.addEventListener('click', () => {
      this.renderer.removeClass(container, 'sign-up-mode');
    });
  }


  



  // otp------>
  title = 'otp-app';

  otp!: string;
  inputDigitLeft: string = "Verify code";
  btnStatus: string = "btn-light";

  public configOptions = {
    length: 6,
    inputClass: 'digit-otp',
    containerClass: 'd-flex justify-content-between'
  }
  onOtpChange(event: any) {
    this.otp = event;
    if(this.otp.length < this.configOptions.length) {
      this.inputDigitLeft = this.configOptions.length - this.otp.length + " digits Left";
      this.btnStatus = 'btn-light';
    }

    if(this.otp.length == this.configOptions.length) {
      this.inputDigitLeft = "Let's go!";
      this.btnStatus = 'btn-primary';
    }
  }
  Otp=false
  optPage(){
    this.Otp=true;

  }
  signUp=true
  
  signUpPage(){
    this.signUp=false
   

  }
  signInPage(){
    this.signUp=true
  }

  // otpconfig(){
  //   this.route.navigate(['/homepage'])
  // }

  @Output() userPage=new EventEmitter<boolean>()

  RedirectUserPage(){
    this.userPage.emit(true)

  }
 
  

 






}
