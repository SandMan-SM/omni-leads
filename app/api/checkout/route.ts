import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

interface CheckoutItem {
  title: string;
  price: number;
  unit: string;
}

interface CheckoutBody {
  services: CheckoutItem[];
}

export async function POST(req: NextRequest) {
  let body: CheckoutBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { services } = body;

  if (!services?.length) {
    return NextResponse.json({ error: "No services selected" }, { status: 400 });
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    console.error("STRIPE_SECRET_KEY is not set");
    return NextResponse.json({ error: "Payment service not configured" }, { status: 503 });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const origin = req.headers.get("origin") ?? "https://omnileads.shop";

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: services.map((svc) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: svc.title,
            description: svc.unit !== "one-time" ? `Billed ${svc.unit}` : "One-time payment",
          },
          unit_amount: Math.round(svc.price * 100),
        },
        quantity: 1,
      })),
      mode: "payment",
      success_url: `${origin}/?payment=success`,
      cancel_url: `${origin}/?payment=cancelled`,
      billing_address_collection: "required",
      phone_number_collection: { enabled: true },
      custom_text: {
        submit: { message: "We'll reach out within 24 hours to kick off your services." },
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe error:", err);
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
