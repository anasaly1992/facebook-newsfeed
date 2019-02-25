import { Component, OnInit } from '@angular/core';
import {NewsfeedServiceService} from '../../newsfeed-service.service';
@Component({
  selector: 'app-text-post',
  templateUrl: './text-post.component.html',
  styleUrls: ['./text-post.component.css']
})
export class TextPostComponent implements OnInit {
  public newsfeed = {
    textpost: {
      "profilename": "",
      "profileimg": "",
      "duration": "",
      "icon": "",
      "dotimg": "",
      "text": "",
      "likes": "",
      "comments": "",
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
    },
  };
  constructor(private newsfeedservice: NewsfeedServiceService) { }

  ngOnInit() {
    this.newsfeedservice.getNewsFeed()
    .subscribe(data => this.newsfeed = data);
   }


}
