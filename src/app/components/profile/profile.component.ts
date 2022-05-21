import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  title!:string;
  activity_photo! : File;


  constructor(private http : HttpClient,private router :Router,private profileService:ProfileService) { }

  ngOnInit(): void {
  }
  onTitleChanged(event:any){
    this.title = event.target.value;

  }
  onImageChanged(event:any){
    this.activity_photo = event.target.files[0];

  }
  newActivity() {
    const uploadData = new FormData();
    uploadData.append('title',this.title);
    uploadData.append('activity_photo',this.activity_photo,this.activity_photo.name);
this.profileService.createActivity(uploadData).subscribe(
  
  data =>this.router.navigate(['/activity']),
  error => console.log(error)
)


  }

}
