import { Component, OnInit } from '@angular/core';
import {NewsfeedServiceService} from '../../newsfeed-service.service';

@Component({
  selector: 'app-photo-post',
  templateUrl: './photo-post.component.html',
  styleUrls: ['./photo-post.component.css']
})
export class PhotoPostComponent implements OnInit {
  public newsfeed = {
    photopost: {
      "profilename": "",
      "profileimg": "",
      "duration": "",
      "icon": "",
      "dotimg": "",
      "text": "",
      "likes":"",
      "comments":"",
      "postimg":"",
      "sharing": [{
          "text":"",
          "img":""
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
