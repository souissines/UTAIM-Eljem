import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Box } from 'src/app/models/box';
import { BoxService } from 'src/app/services/box.service';

import { BoxComponent } from '../box/box.component';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  boxForm!: FormGroup;
  boxes! : Box[];
  
  constructor(private formBuilder: FormBuilder,private boxService:BoxService,
    private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.boxForm= this.formBuilder.group({
      fname: ['', [Validators.required,Validators.minLength(2)]],
      phone: ['',[Validators.required,Validators.minLength(5)]],
      email: ['',[Validators.required,Validators.email]],
      msg: ['',[Validators.required,Validators.minLength(100)]]
          });
  }
  /*send = ()=> {
    //alert("signup btn clicked!");
    console.log('Here my user',  this.boxForm.value);
   
      this.boxService.sendMessage(this.boxForm.value).subscribe(
        data => {
          this.boxes.push(data);
          
        },
        error => {
          console.log(error);
        }
      );
    }*/
  }


  

