import { TestBed } from '@angular/core/testing';

import { VideoPlayerV2Service } from './video-player-v2.service';

describe('VideoPlayerV2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideoPlayerV2Service = TestBed.get(VideoPlayerV2Service);
    expect(service).toBeTruthy();
  });
});
