import { Component, OnInit } from '@angular/core';
import {NewsfeedServiceService} from '../newsfeed-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public newsfeed = {
    profileinfo :{
      "img":"",
      "name":""
    },
    sidebar:{},
    sidebar2:{}
  };

  constructor(private newsfeedservice: NewsfeedServiceService) { }

  ngOnInit() {
   this.newsfeedservice.getNewsFeed()
   .subscribe(data => this.newsfeed = data);
  }

}
