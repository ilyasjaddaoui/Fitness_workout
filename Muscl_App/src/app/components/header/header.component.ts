import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private login: LoginService, private route: Router) { }

  ngOnInit(): void {
  }

  public isLoggin(){
    return this.login.isLoggin();
  }
  public logout(){
    this.login.logout();
    this.route.navigate(['']);
  }

}
