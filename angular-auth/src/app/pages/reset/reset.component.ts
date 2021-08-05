import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      password: '',
      password_confirm: '',
    });
  }

  submit(): void {
    const formData = this.form.getRawValue();

    const data = {
      token: this.route.snapshot.params.token,
      password: formData.password,
      password_confirm: formData.password_confirm
    };

    this.http.post('http://localhost:8000/api/reset/reset', data)
      .subscribe(() => this.router.navigate(['/login']));
  }
}