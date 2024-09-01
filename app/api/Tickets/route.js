import Tickets from "../../(models)/TicketsSchema.js";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
      const body = await req.json();
      const ticketData = body.formData;
      await Tickets.create(ticketData);
  
      const response = NextResponse.json({ message: "Ticket Created" }, { status: 201 });
      response.headers.set("Cache-Control", "no-store, max-age=0");
      return response;
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
  }
  