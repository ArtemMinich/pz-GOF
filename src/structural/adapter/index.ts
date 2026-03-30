import { AudioAdapter } from "./AudioAdapter";
import { VideoAdapter } from "./VideoAdapter";

export { MediaPlayer } from "./MediaPlayer";
export { OldAudioLib } from "./OldAudioLib";
export { OldVideoLib } from "./OldVideoLib";
export { AudioAdapter } from "./AudioAdapter";
export { VideoAdapter } from "./VideoAdapter";

console.log("\n=== Adapter ===\n");

const audio = new AudioAdapter();
const video = new VideoAdapter();

console.log(`  ${audio.play("song.mp3")}`);
console.log(`  ${video.play("movie.mkv")}`);
