import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Activity } from '../models/activity';
const urlPath = environment.apiUrl;
const activityUrl = urlPath + `activities/`;
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }
  getActivity(): Observable<Array<Activity>> {
    return this.http.get<Array<Activity>>(activityUrl);
  }

  createActivity(data:any) {
    return this.http.post(activityUrl,data);
  }
}
