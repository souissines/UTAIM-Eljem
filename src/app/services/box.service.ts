import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoxService {
  /*
  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http:HttpClient) { }

  getAllBoxes(): Observable<any> {
    return this.http.get(this.baseurl + '/box/',
    {headers: this.httpHeaders});
  }
  /*getOneMovie(id): Observable<any> {
    return this.http.get(this.baseurl + '/boxes/' + id + '/',
    {headers: this.httpHeaders});
  }
  updateMovie(box): Observable<any> {
    const body = {name: box.name , email: box.email, phone: box.phone,  message: box.message };
    return this.http.put(this.baseurl + '/boxes/' + box.id + '/', body,
    {headers: this.httpHeaders});
  }
  sendMessage(box: any): Observable<any> {
    const body = {name: box.name , email: box.email, phone: box.phone,  message: box.message };
    return this.http.post(this.baseurl + '/boxes/', body,
    {headers: this.httpHeaders});
  }
  /*
  deleteMovie(id): Observable<any> {
    return this.http.delete(this.baseurl + '/boxes/' + id + '/',
    {headers: this.httpHeaders});
  }*/
}
