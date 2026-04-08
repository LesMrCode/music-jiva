import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Artist } from "@/models/Artist";

export async function GET() {
  try {
    await connectToDatabase();
    const artists = await Artist.find({}).sort({ monthlyListeners: -1 }).limit(6).lean();
    return NextResponse.json(artists);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch artists" }, { status: 500 });
  }
}
