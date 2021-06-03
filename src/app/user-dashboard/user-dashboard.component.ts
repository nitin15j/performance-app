import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import {User,UserDetails} from '../shared/user'

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  data:User[];
  details:UserDetails;
  superDataSet:any[];

  constructor(private userService:UserService) { 
  }

  ngOnInit(): void {
    this.loadUserList();
  }

  loadUserList(){
    this.userService.getUserList().subscribe((data:User[])=>{
      this.data = data;
      this.superDataSet = [...data];
    })
  }

  searchUserByName(name:string){
    this.data = this.superDataSet.filter(item => {
      return item.firstName.toLocaleLowerCase().includes(name);})
      
    console.log(name + " : Search Component")
  }
  
  loadUserById(id:string){
    this.userService.getUserById(id).subscribe((data)=>{
      this.details = data;
    })
  }

}
