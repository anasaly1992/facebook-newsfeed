import { Component, OnInit } from '@angular/core';
import {NewsfeedServiceService} from '../newsfeed-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public newsfeed = {
    creatpost: {
      "header":"",
      "placeholder":"",
      "footer":[{
        "text":"",
        "img":""
      }]

  },
    profileinfo: {
      "name": "",
    "fullname": "",
    "shortname": "",
    "img": ""
    },

  };
  constructor(private newsfeedservice: NewsfeedServiceService) { }

  ngOnInit() {
    this.newsfeedservice.getNewsFeed()
    .subscribe(data => this.newsfeed = data);
   }

}
