import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TableInfo, TableDTO } from  './interface';
import { map, tap } from 'rxjs/operators';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  Url = 'http://13.233.242.0';  // URL to web api
  userID : String
  user: string;
  sessionKey:string;

 // private handleError: HandleError;
 constructor(private http: HttpClient) {
  }

  httpOptions = {
   headers: new HttpHeaders({
     'Content-Type': 'application/json'
   })
 }

  getTableInfo(path : string): Observable<TableInfo> {
    return this.http.get<TableInfo>(this.Url+path ,  {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'session-key': this.sessionKey
      })
    })
  }

}