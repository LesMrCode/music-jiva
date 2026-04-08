import { Schema, model, models } from "mongoose";

export interface IArtist {
  _id: string;
  name: string;
  genre: string;
  imageUrl: string;
  monthlyListeners: number;
  verified: boolean;
}

const ArtistSchema = new Schema<IArtist>({
  name: { type: String, required: true },
  genre: { type: String, required: true },
  imageUrl: { type: String, required: true },
  monthlyListeners: { type: Number, required: true },
  verified: { type: Boolean, default: false },
});

export const Artist = models.Artist || model<IArtist>("Artist", ArtistSchema);
