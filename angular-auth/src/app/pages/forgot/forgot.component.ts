import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  form!: FormGroup;
  cls = '';
  message = '';

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
    })
  }

  submit(): void{
    console.log(this.form.getRawValue())
    this.http.post('http://localhost:8000/api/reset/forgot', this.form.getRawValue())
    .subscribe(() => {
      this.cls = 'success';
      this.message = 'Email was send!'
    },
    ()=>{
      this.cls = 'danger';
      this.message = 'Email does not exit';
    });
  }
}
