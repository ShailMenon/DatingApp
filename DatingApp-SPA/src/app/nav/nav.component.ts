import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { AlertifyService } from '../Services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  constructor(public authservice: AuthService, private alertify : AlertifyService) { }

  ngOnInit() {
  }

  login(){
    this.authservice.login(this.model).subscribe(next => {
      this.alertify.success('login successfully');
    }, error => {
      this.alertify.error(error);
    });
  }

  loggedIn(){
    return this.authservice.loggedIn();
  }

  logout(){
    localStorage.removeItem('token');
    this.alertify.message('logged out')
  }

}
