import { NgModule } from '@angular/core';
import { VideoPlayerV2Component } from './video-player-v2.component';
import { VideoViewerComponent } from './video-viewer/video-viewer.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './routes/routes';
import { SimplePlayerModule } from './simple-player/simple-player.module';
import { SinglePlayerModule } from './single-player/single-player.module';
import { AudioPlayerModule } from './audio-player/audio-player.module';
import { BoundPlayerModule } from './bound-player/bound-player.module';
import { CuePointsPlayerModule } from './cue-points-player/cue-points-player.module';
import { GoogleImaPlayerModule } from './google-ima-player/google-ima-player.module';
import { StreamingPlayerModule } from './streaming-player/streaming-player.module';
import { MultiplePlayersModule } from './multiple-players/multiple-players.module';
import { CustomMediaModule } from './custom-media/custom-media.module';
import { SmartPlaylistModule } from './smart-playlist/smart-playlist.module';

@NgModule({
  declarations: [VideoPlayerV2Component, VideoViewerComponent],
  imports: [
    RouterModule.forRoot(ROUTES, { useHash: true }),
    SimplePlayerModule,
    SinglePlayerModule,
    AudioPlayerModule,
    BoundPlayerModule,
    MultiplePlayersModule,
    CuePointsPlayerModule,
    GoogleImaPlayerModule,
    StreamingPlayerModule,
    CustomMediaModule,
    SmartPlaylistModule
  ],
  exports: [VideoPlayerV2Component, VideoViewerComponent]
})
export class VideoPlayerV2Module { }
