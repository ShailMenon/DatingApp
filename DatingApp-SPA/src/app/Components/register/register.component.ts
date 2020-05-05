import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { AlertifyService } from 'src/app/Services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
model: any = {};

@Output() cancelRegister = new  EventEmitter();

constructor(private authService: AuthService, private alertify : AlertifyService) { }

  ngOnInit() {
  }

  register(){
    this.authService.register(this.model).subscribe(()=>
    {
        this.alertify.success('Registeration Successful!!!');
    }, error =>
    {
      this.alertify.error(error);
    });
  }

  cancel(){
    this.cancelRegister.emit(false);
  }

}
