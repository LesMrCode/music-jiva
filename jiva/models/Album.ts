import { Schema, model, models } from "mongoose";

export interface IAlbum {
  _id: string;
  title: string;
  artist: string;
  imageUrl: string;
  releaseDate: Date;
  genre: string;
  tracks: number;
}

const AlbumSchema = new Schema<IAlbum>({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  imageUrl: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  genre: { type: String, required: true },
  tracks: { type: Number, required: true },
});

export const Album = models.Album || model<IAlbum>("Album", AlbumSchema);
