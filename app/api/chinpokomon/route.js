import connectMongoDB from "@/libs/mongodb";
import Chinpokomon from "@/models/chinpokomon";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, power } = await request.json();
  await connectMongoDB();
  await Chinpokomon.create({ name, power });
  return NextResponse.json({ message: "Chinpokomon Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const topics = await Chinpokomon.find();
  return NextResponse.json({ topics });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Chinpokomon.findByIdAndDelete(id);
  return NextResponse.json({ message: "Chinpokomon deleted" }, { status: 200 });
}