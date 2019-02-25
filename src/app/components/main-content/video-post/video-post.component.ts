import { Component, OnInit } from '@angular/core';
import {NewsfeedServiceService} from '../../newsfeed-service.service';
@Component({
  selector: 'app-video-post',
  templateUrl: './video-post.component.html',
  styleUrls: ['./video-post.component.css']
})
export class VideoPostComponent implements OnInit {
  public newsfeed = {
    videopost: {
      "profilename": "",
      "profileimg": "",
      "duration": "",
      "icon": "",
      "dotimg": "",
      "text": "",
      "likes": "/",
      "comments": "",
      "postvid": "",
      "sharing": [{
          "text": "",
          "img": ""
        },
        {
          "text": "",
          "img": ""
        },
        {
          "text": "",
          "img": ""
        }
      ]
    }
  };

  constructor(private newsfeedservice: NewsfeedServiceService) { }

  ngOnInit() {
    this.newsfeedservice.getNewsFeed()
    .subscribe(data => this.newsfeed = data);
   }
}
