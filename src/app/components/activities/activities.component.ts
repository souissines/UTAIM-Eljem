import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from 'src/app/models/activity';
import { ProfileService } from 'src/app/services/profile.service';
import { ProfileComponent } from '../profile/profile.component';
@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  activities: Array<Activity> = [];
  activity!: Activity;
  constructor(private profileService : ProfileService, public router:Router) { }

  ngOnInit(): void {
    this.profileService.getActivity().subscribe(data =>
    { this.activities=data;

    
      console.log(this.activities);
      
    })
  }
}  
    
