import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { environment } from 'src/environments/environment.prod'
import { Observable } from 'rxjs';

@Injectable()
export class ThreadService{

  constructor(private http: HttpClient) {}

  getThreads(): Observable<[]>{
    return this.http.get<[]>(environment.online_api + '/boards')
  }

  createThread(title): Observable<[]>{
    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        })
    };
    
    return this.http.post<[]>(
      environment.online_api + '/boards', 
      JSON.stringify(title),
      options
    )
  }
}