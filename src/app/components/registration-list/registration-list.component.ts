import { Component, OnInit } from '@angular/core';
import {RegistrationService} from "../../services/registration.service";
import {Registration} from "../../models/registration";
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css']
})
export class RegistrationListComponent implements OnInit {

  public registrations:Registration[]=[];
  public isLoggedin=false;
  public user:User|null=null;

  private loadData(){
    this.registrationService.getRegistrations().subscribe((result)=>{
      this.registrations=result;
    });
  }

  constructor(
    private registrationService:RegistrationService,
    private authService:AuthService
    
    ) {
    this.loadData();
    this.isLoggedin=authService.isLoggedIn();
    this.user=authService.user;
  }

  ngOnInit(): void {
  }

  public onDeleteClick(id:string|null){
    if (id!=null){
      this.registrationService.deleteRegistration(id).subscribe(()=>{
        this.loadData();
      });
    }
  }

}
