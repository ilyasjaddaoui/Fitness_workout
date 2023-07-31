import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router'
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData={
    username:'',
    password:''
  }

  constructor(private login : LoginService, private route : Router) { }

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.loginData.username.trim()=='' || this.loginData.username == null){
      alert("Please enter username");
      return;
    }

    if(this.loginData.password.trim()=='' || this.loginData.password == null){
      alert("Please enter password");
      return;
    }

    // request to server to generate token

    this.login.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log("success");
        console.log(data);   
        
        // login
        this.login.loginUser(data.token);

        this.login.getCurrentUser().subscribe((user:any)=>{
          this.login.setUser(user);
          console.log(user);
          // redirect ...ADMIN OR USER
          if(this.login.getUserRole() == "ADMIN"){
            // admin page
            this.route.navigate(['/admin']);
          }else if(this.login.getUserRole() == "USER"){
            // user page
            this.route.navigate(['/home']);
          }else{
            this.login.logout();
            alert("Invalid username or password");
          }
        });
      },
      (error:any)=>{
        console.log("Error !");
        console.log(error);
      }
    );
  }
  
    
  
}
