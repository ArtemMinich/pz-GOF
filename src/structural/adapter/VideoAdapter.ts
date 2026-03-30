import { MediaPlayer } from "./MediaPlayer";
import { OldVideoLib } from "./OldVideoLib";

export class VideoAdapter implements MediaPlayer {
  private lib = new OldVideoLib();
  play(file: string): string {
    return this.lib.renderVideo(file);
  }
}
