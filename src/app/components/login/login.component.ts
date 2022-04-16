import { Component, OnInit } from '@angular/core';
import { PublicService } from 'src/app/services/public.service';
import { FormGroup,FormControl} from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { first } from 'rxjs/operators';
import { finalize, tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
msg: any;
myform!: FormGroup;
  constructor(private pService: PublicService, private authenticationService: AuthenticationService,private router: Router) { }

  ngOnInit(): void {
this.showMessage();
this.myform = new FormGroup ({
  username: new FormControl(''),
  password: new FormControl('')
});
  }
showMessage(){
  this.pService.getMessage().subscribe(
    (data: any) => {
      this.msg =data;
    
  console.log(this.msg);
    });
  }

  get f(){
    return this.myform.controls;
  }
  onSubmit(){
    this.authenticationService.login(this.f.username.value,this.f.password.value)
    .pipe(first())
    .subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/activity']);
      }
    )
  }
}
