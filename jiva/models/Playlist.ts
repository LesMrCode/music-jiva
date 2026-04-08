import { Schema, model, models } from "mongoose";

export interface IPlaylist {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  curator: string;
  trackCount: number;
  plays: number;
}

const PlaylistSchema = new Schema<IPlaylist>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  curator: { type: String, required: true },
  trackCount: { type: Number, required: true },
  plays: { type: Number, required: true },
});

export const Playlist = models.Playlist || model<IPlaylist>("Playlist", PlaylistSchema);
