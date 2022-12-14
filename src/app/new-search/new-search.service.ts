import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class NewSearchService {

  serverData: any;
  employeeData: any;

  constructor(private http: HttpClient) { }
  // sayHi() {
  //   this.http.get('http://127.0.0.1:5002/').subscribe(data => {
  //     this.serverData = data as JSON;
  //     console.log(this.serverData);
  //   })
  // }

  sendQuery(query: string): Observable<any> {
    let queryString = new HttpParams().set('searchString', query);
    // console.log('this.http.get'6
    return this.http.get('http://192.168.0.12:5021/query', { params: queryString });
    // return this.http.get("./assets/keyPhrase.json");

  }

  // fetchSearchResults(): Observable<any> {
  //   // this.http.get('http://127.0.0.1:5000').subscribe(data => {
  //   //   this.employeeData = data as JSON;
  //   //   console.log(this.employeeData);
  //   // })
  //   // return this.employeeData
  //   return this.http.get("./assets/keyPhrase.json");

  // }

  sendFeedback(feedbackList: any): Observable<any> {
    let feedbacksList = new HttpParams().set('feedbackList', feedbackList);
    console.log('feedbackList', feedbackList)
    return this.http.post('http://192.168.0.12:5021/feedback', JSON.stringify(feedbacksList), httpOptions )
    // return this.http.request(
    //   'POST',
    //   'http://127.0.0.1:5000/feedback',
    //   {
    //     headers: new HttpHeaders({
    //       'Content-Type': 'application/json'
    //     }),
    //     body: JSON.stringify(feedbacksList)
    //   });

  }
  handleError(arg0: string, hero: any): (err: any, caught: Observable<Observable<any>>) => import("rxjs").ObservableInput<any> {
    throw new Error('Method not implemented.');
  }
}
