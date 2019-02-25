import { Component, OnInit } from '@angular/core';
import {NewsfeedServiceService} from '../newsfeed-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private newsfeedservice: NewsfeedServiceService) { }
  public newsfeed = {
    profileinfo :{
      "img":""
    },

  };


  ngOnInit() {
    this.newsfeedservice.getNewsFeed()
    .subscribe(data => this.newsfeed = data);
   }

}
