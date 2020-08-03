import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPlayerV2Component } from './video-player-v2.component';

describe('VideoPlayerV2Component', () => {
  let component: VideoPlayerV2Component;
  let fixture: ComponentFixture<VideoPlayerV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoPlayerV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPlayerV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
