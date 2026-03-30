import { MediaPlayer } from "./MediaPlayer";
import { OldAudioLib } from "./OldAudioLib";

export class AudioAdapter implements MediaPlayer {
  private lib = new OldAudioLib();
  play(file: string): string {
    return this.lib.playMp3(file);
  }
}
