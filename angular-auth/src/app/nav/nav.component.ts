import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Auth } from '../classes/auth';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  authenticated!: boolean;
  

  constructor(private http: HttpClient) { 
    this.authenticated = false;
  }

  ngOnInit(): void {
    this.authenticated = false;
    Auth.authEmitter.subscribe(
      (authenticated: boolean) =>{
        this.authenticated = authenticated;
      }
    )
  }

  logout(): void{
    this.http.post('http://localhost:8000/api/logout',{})
    .subscribe(() => {

    });
  }

}
