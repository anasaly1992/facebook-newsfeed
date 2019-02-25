import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { CreateComponent } from './components/create/create.component';
import { RightsideComponent } from './components/rightside/rightside.component';
import { NewsfeedComponent } from './components/newsfeed/newsfeed.component';
import { PhotoPostComponent } from './components/main-content/photo-post/photo-post.component';
import { TextPostComponent } from './components/main-content/text-post/text-post.component';
import { VideoPostComponent } from './components/main-content/video-post/video-post.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    MainContentComponent,
    CreateComponent,
    RightsideComponent,
    NewsfeedComponent,
    PhotoPostComponent,
    TextPostComponent,
    VideoPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
