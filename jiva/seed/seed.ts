import mongoose from "mongoose";
import { Artist } from "../models/Artist";
import { Album } from "../models/Album";
import { Playlist } from "../models/Playlist";

const MONGODB_URI = process.env.MONGODB_URI || "MONGODB_URI=mongodb+srv://flownetic_db_user:jivamusic@jiva.qkxtrxl.mongodb.net/jiva?appName=jiva";

const artists = [
  { name: "Tyla", genre: "Afropop", imageUrl: "https://picsum.photos/seed/tyla/300/300", monthlyListeners: 12400000, verified: true },
  { name: "Kendrick Lamar", genre: "Hip-Hop", imageUrl: "https://picsum.photos/seed/kendrick/300/300", monthlyListeners: 54000000, verified: true },
  { name: "Sabrina Carpenter", genre: "Pop", imageUrl: "https://picsum.photos/seed/sabrina/300/300", monthlyListeners: 38000000, verified: true },
  { name: "Amaarae", genre: "Afrobeats", imageUrl: "https://picsum.photos/seed/amaarae/300/300", monthlyListeners: 4200000, verified: true },
  { name: "Fred Again", genre: "Electronic", imageUrl: "https://picsum.photos/seed/fredagain/300/300", monthlyListeners: 9100000, verified: true },
  { name: "Rema", genre: "Afrobeats", imageUrl: "https://picsum.photos/seed/rema/300/300", monthlyListeners: 21000000, verified: true },
];

const albums = [
  { title: "TYLA", artist: "Tyla", imageUrl: "https://picsum.photos/seed/tyla-album/400/400", releaseDate: new Date("2024-03-22"), genre: "Afropop", tracks: 13 },
  { title: "GNX", artist: "Kendrick Lamar", imageUrl: "https://picsum.photos/seed/gnx/400/400", releaseDate: new Date("2024-11-22"), genre: "Hip-Hop", tracks: 12 },
  { title: "Short n' Sweet", artist: "Sabrina Carpenter", imageUrl: "https://picsum.photos/seed/sns/400/400", releaseDate: new Date("2024-08-23"), genre: "Pop", tracks: 12 },
  { title: "Fountain Baby", artist: "Amaarae", imageUrl: "https://picsum.photos/seed/fountain/400/400", releaseDate: new Date("2023-06-09"), genre: "Afrobeats", tracks: 14 },
  { title: "Ten Days", artist: "Fred Again", imageUrl: "https://picsum.photos/seed/tendays/400/400", releaseDate: new Date("2024-10-04"), genre: "Electronic", tracks: 10 },
  { title: "Heis", artist: "Rema", imageUrl: "https://picsum.photos/seed/heis/400/400", releaseDate: new Date("2024-08-02"), genre: "Afrobeats", tracks: 8 },
];

const playlists = [
  { title: "Afrobeats Hits", description: "The hottest Afrobeats tracks right now", imageUrl: "https://picsum.photos/seed/afrobeats/400/400", curator: "Jiva Editorial", trackCount: 50, plays: 2400000 },
  { title: "Rap Caviar", description: "Hip-Hop's most essential playlist", imageUrl: "https://picsum.photos/seed/rapcaviar/400/400", curator: "Jiva Editorial", trackCount: 45, plays: 8100000 },
  { title: "Today's Pop", description: "The biggest pop songs of the moment", imageUrl: "https://picsum.photos/seed/todayspop/400/400", curator: "Jiva Editorial", trackCount: 40, plays: 5300000 },
  { title: "Electronic Essentials", description: "Dance, house and electronic bangers", imageUrl: "https://picsum.photos/seed/electronic/400/400", curator: "Jiva Editorial", trackCount: 60, plays: 1900000 },
  { title: "Chill Vibes", description: "Laid-back music to unwind to", imageUrl: "https://picsum.photos/seed/chillvibes/400/400", curator: "Jiva Editorial", trackCount: 35, plays: 3700000 },
  { title: "New Music Friday", description: "Fresh drops every Friday", imageUrl: "https://picsum.photos/seed/newmusic/400/400", curator: "Jiva Editorial", trackCount: 30, plays: 4100000 },
];

async function seed() {
  await mongoose.connect(MONGODB_URI);
  console.log("✅ Connected to MongoDB");

  await Artist.deleteMany({});
  await Album.deleteMany({});
  await Playlist.deleteMany({});
  console.log("🗑️  Cleared existing data");

  await Artist.insertMany(artists);
  await Album.insertMany(albums);
  await Playlist.insertMany(playlists);
  console.log("🌱 Seed complete — artists, albums and playlists inserted");

  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
