import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivityService } from 'src/app/services/activity.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-handle-activity',
  templateUrl: './handle-activity.component.html',
  styleUrls: ['./handle-activity.component.css']
})
export class HandleActivityComponent implements OnInit {
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder,private router:Router,private cd: ChangeDetectorRef,private activityService:ActivityService,
    private http:HttpClient) { 
    this.form=this.formBuilder.group({
      'title':['',Validators.required],
      'photo_activity': ['']

    })
  }

  addActivity (){
    console.log(this.form.value)
    this.activityService.createActivity(this.form.value)
    this.router.navigate(['/activity']);
    
  }
  ngOnInit(): void {
  }

  /**fileChange(event:any){
    let reader = new FileReader();
    
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () =>  {
        this.form.patchValue({
          photo_activity: reader.result
        });

        this.cd.markForCheck();
      }
    }
  }
**/
  fileChange(event :any) {
    if(event.target.files.length > 0) 
     {
       this.form.patchValue({
          fileName: event.target.files[0],
       })
     }
  }

submit(){
    const formData = new FormData();
    formData.append('file', this.form.get('title')?.value);
   
    this.http.post('http://127.0.0.1:8000/admin/activity/', formData)
      .subscribe((res:any) => {
        console.log(res);
        alert('Uploaded Successfully');
      })
  }

}
