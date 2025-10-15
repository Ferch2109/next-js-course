import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // console.log({ method: request.method });

  return NextResponse.json({
    count: 5,
  });
}

export async function POST(request: Request) {
  // console.log({ method: request.method });

  return NextResponse.json({
    count: 5,
  });
}