import { Component, OnInit, Input, HostListener, Output, EventEmitter, OnDestroy, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';


import { IPlayerEvent } from './playerEvents';

@Component({
  selector: 'sb-video-viewer',
  templateUrl: './video-viewer.component.html',
  styleUrls: ['./video-viewer.component.css']
})

export class VideoViewerComponent implements OnInit, OnDestroy {
  @HostBinding('class')
  isStandalone = '';

  subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute
    ) {

  }

  ngOnInit() {
      this.subscriptions.push(
          this.route.queryParams
              .subscribe((params: any) => {
                  if (params.standalone === 'true') {
                      this.isStandalone = 'is-standalone';
                  }
              })
      );
  }

  ngOnDestroy() {
      this.subscriptions.forEach(s => s.unsubscribe());
  }
}
