import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  constructor(private registerService: RegisterService, private router: Router) { }

  public newUser={
    firstName:'',
    lastName:'',
    username:'',
    email:'',
    password:''
  };

  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.newUser);

    if(this.newUser.firstName.trim()=='' || this.newUser.firstName == null){
      alert("Please enter firstName");
      return;
    }

    if(this.newUser.lastName.trim()=='' || this.newUser.lastName == null){
      alert("Please enter lastName");
      return;
    }

    if(this.newUser.username.trim()=='' || this.newUser.username == null){
      alert("Please enter username");
      return;
    }

    if(this.newUser.email.trim()=='' || this.newUser.email == null){
      alert("Please enter email");
      return;
    }

    if(this.newUser.password.trim()=='' || this.newUser.password == null){
      alert("Please enter password");
      return;
    }

    // RegisterService
    this.registerService.register(this.newUser).subscribe(
      (data: any) => {
        this.router.navigate(['']);
      },
      (error: any) => {
        console.log(error);
      }
    );
    



  }

}
