import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Playlist } from "@/models/Playlist";

export async function GET() {
  try {
    await connectToDatabase();
    const playlists = await Playlist.find({}).sort({ plays: -1 }).limit(6).lean();
    return NextResponse.json(playlists);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch playlists" }, { status: 500 });
  }
}
