export interface MediaPlayer {
  play(file: string): string;
}

class OldAudioLib {
  playMp3(path: string): string {
    return `[OldAudioLib] MP3: ${path}`;
  }
}

class OldVideoLib {
  renderVideo(path: string): string {
    return `[OldVideoLib] Video: ${path}`;
  }
}

export class AudioAdapter implements MediaPlayer {
  private lib = new OldAudioLib();
  play(file: string): string {
    return this.lib.playMp3(file);
  }
}

export class VideoAdapter implements MediaPlayer {
  private lib = new OldVideoLib();
  play(file: string): string {
    return this.lib.renderVideo(file);
  }
}
