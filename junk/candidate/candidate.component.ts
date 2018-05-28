import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm){
    const email= form.value.email;
    const password= form.value.password;
    this.authService.signupUser(email, password);
  }

  onSignin(form: NgForm){
    const email= form.value.email;
    const password= form.value.password;
    this.authService.signinUser(email, password);

  }
}
