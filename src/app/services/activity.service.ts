import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../models/activity';
import { environment} from 'src/environments/environment';

const urlPath = environment.apiUrl;
const activityUrl = urlPath + `activity/`;
@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http:HttpClient) { }

 getActivity(): Observable<Array<Activity>> {
   return this.http.get<Array<Activity>>(activityUrl);
 }

 createActivity(data:any) {
   return this.http.post(activityUrl,data);
 }
}