import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users!: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(){
    this.userService.getAllUser().subscribe(data=>{
      this.users=data;
    });
  }

}
