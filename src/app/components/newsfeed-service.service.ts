import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {INewsFeed} from '../newsfeed';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsfeedServiceService {

  private url = '../../assets/data/newsfeed.json';
  constructor(private http: HttpClient) { }
  getNewsFeed(): Observable<INewsFeed> {
return this.http.get<INewsFeed>(this.url);
  }
}
