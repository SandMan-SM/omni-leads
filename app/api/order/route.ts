import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "info@omnileads.shop";
const FROM_EMAIL = "orders@omnileads.shop";

interface OrderItem {
  title: string;
  price: number;
  unit: string;
}

interface OrderBody {
  name: string;
  email: string;
  phone: string;
  services: OrderItem[];
  total: number;
}

export async function POST(req: NextRequest) {
  let body: OrderBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, phone, services, total } = body;

  if (!name || !email || !services?.length) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const serviceList = services
    .map((s) => `  • ${s.title} — $${s.price} ${s.unit}`)
    .join("\n");

  const html = `
    <h2>New Order from Omni Leads</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
    <h3>Services Ordered:</h3>
    <ul>
      ${services.map((s) => `<li>${s.title} — <strong>$${s.price} ${s.unit}</strong></li>`).join("")}
    </ul>
    <p><strong>Total: $${total}</strong></p>
    <hr/>
    <p style="color:#64748b;font-size:12px;">This order was submitted via omnileads.shop</p>
  `;

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Email service not configured" }, { status: 503 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New Order: ${name} — $${total}`,
      html,
      text: `New Order\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\n\nServices:\n${serviceList}\n\nTotal: $${total}`,
    });

    // Send confirmation to customer
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "We received your Omni Leads order!",
      html: `
        <h2>Thanks, ${name}!</h2>
        <p>We received your order and will reach out within 24 hours to get started.</p>
        <h3>Your Order:</h3>
        <ul>
          ${services.map((s) => `<li>${s.title} — <strong>$${s.price} ${s.unit}</strong></li>`).join("")}
        </ul>
        <p><strong>Total: $${total}</strong></p>
        <p>Questions? Call us at <a href="tel:8018987022">(801) 898-7022</a> or reply to this email.</p>
        <p>— The Omni Leads Team</p>
      `,
      text: `Thanks, ${name}!\n\nWe received your order and will reach out within 24 hours.\n\nServices:\n${serviceList}\n\nTotal: $${total}\n\nQuestions? Call (801) 898-7022.`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
