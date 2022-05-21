import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  handleForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,private router:Router,private route: ActivatedRoute, private http:HttpClient,
    private activityService: ActivityService) { }

  ngOnInit(): void {
  }

}
