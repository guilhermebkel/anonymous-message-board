import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs';

@Injectable()
export class ThreadService{

  constructor(private http: HttpClient) {}

  getThreads(board_id): Observable<[]>{
    return this.http.get<[]>(environment.api + `/threads/${board_id}`)
  }

  createThread(data): Observable<[]>{
    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        })
    };
    
    return this.http.post<[]>(
      environment.api + '/threads', 
      JSON.stringify(data),
      options
    )
  }

  deleteThread(data): Observable<{response: String, status: Number}>{
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: data
    };
    
    return this.http.delete<{response: String, status: Number}>(
      environment.api + '/threads', 
      options
    )
  }

  reportThread(thread_id): Observable<[]>{
    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    return this.http.put<[]>(
      environment.api + '/threads', 
      JSON.stringify(thread_id),
      options
    )
  }
}
