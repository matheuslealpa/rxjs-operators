import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {concat, forkJoin, interval, merge, Observable, zip} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {
  }

  getUsersForkJoin(): Observable<any> {
    const http$ = forkJoin({
      apiLocal: this.httpClient.get('http://localhost:3000/users'),
      apiExterna: this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1')
    })
    return http$;
  }

  getUserZip():Observable<any>{
    const apiLocal$ = this.httpClient.get('http://localhost:3000/users');
    const apiExterna$ =  this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1');

    const result = zip(apiLocal$, apiExterna$)

    return result;
  }

  getUsersMerger(): Observable<any> {
    const it$ = interval(1000);
    const apiLocal$ = this.httpClient.get('http://localhost:3000/users');
    const apiExterna$ =  this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1');

    return merge(it$, apiExterna$, apiLocal$);
  }

  getUsersConcat(): Observable<any> {
    const it$ = interval(1000);
    const apiLocal$ = this.httpClient.get('http://localhost:3000/users');
    const apiExterna$ =  this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1');

    return concat(it$, apiExterna$, apiLocal$);
  }
}
