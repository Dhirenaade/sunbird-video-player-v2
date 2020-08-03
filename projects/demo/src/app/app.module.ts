import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { VideoPlayerV2Module } from './../../../video-player-v2/src/lib/video-player-v2.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VideoPlayerV2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
