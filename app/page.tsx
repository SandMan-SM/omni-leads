"use client";

import { useState } from "react";
import {
  MapPin, Search, FileText, Link2, Building2, Newspaper,
  Phone, Mail, CheckCircle2, ShoppingCart, X, ArrowRight,
  Star, Shield, Clock, Zap,
} from "lucide-react";

/* ─────────────────── DATA ─────────────────── */

const PHONE = "(801) 898-7022";
const PHONE_HREF = "tel:8018987022";
const EMAIL = "info@omnileads.shop";

interface Service {
  id: string;
  icon: typeof MapPin;
  title: string;
  description: string;
  price: number;
  unit: string;
  features: string[];
  popular?: boolean;
}

const services: Service[] = [
  {
    id: "gmb",
    icon: MapPin,
    title: "Google My Business Optimization",
    description: "Full GMB profile setup, optimization, and ongoing management to dominate local search results.",
    price: 299,
    unit: "/mo",
    features: [
      "Complete profile optimization",
      "Weekly posts & updates",
      "Review response management",
      "Photo & media optimization",
      "Category & attribute tuning",
    ],
    popular: true,
  },
  {
    id: "content",
    icon: FileText,
    title: "Content Writing",
    description: "SEO-optimized blog posts, landing pages, and website copy that ranks and converts.",
    price: 150,
    unit: "/article",
    features: [
      "1,500+ word SEO articles",
      "Keyword research included",
      "Internal linking strategy",
      "Meta title & description",
      "1 round of revisions",
    ],
  },
  {
    id: "on-page",
    icon: Search,
    title: "On-Page SEO",
    description: "Technical on-page optimization — titles, headers, schema, speed, and content structure.",
    price: 499,
    unit: "/mo",
    features: [
      "Full site audit & fixes",
      "Title & meta optimization",
      "Schema markup (JSON-LD)",
      "Image alt text & compression",
      "Core Web Vitals optimization",
    ],
  },
  {
    id: "off-page",
    icon: Link2,
    title: "Off-Page SEO & Link Building",
    description: "High-quality backlink acquisition, outreach campaigns, and domain authority growth.",
    price: 599,
    unit: "/mo",
    features: [
      "Manual outreach campaigns",
      "Guest post placements",
      "Niche-relevant backlinks",
      "Competitor link gap analysis",
      "Monthly progress reports",
    ],
  },
  {
    id: "citations",
    icon: Building2,
    title: "Directory Citations",
    description: "Accurate business listings across 50+ directories to boost local SEO and NAP consistency.",
    price: 199,
    unit: "one-time",
    features: [
      "50+ directory submissions",
      "NAP consistency audit",
      "Duplicate listing cleanup",
      "Industry-specific directories",
      "Verification & monitoring",
    ],
  },
  {
    id: "press",
    icon: Newspaper,
    title: "Press Releases",
    description: "Professionally written and distributed press releases to build authority and earn media coverage.",
    price: 349,
    unit: "/release",
    features: [
      "Professional copywriting",
      "Distribution to 400+ outlets",
      "Google News inclusion",
      "Brand mention backlinks",
      "Performance reporting",
    ],
  },
];

const trustPoints = [
  { icon: Star, text: "5-Star Rated" },
  { icon: Shield, text: "No Contracts" },
  { icon: Clock, text: "Results in 30 Days" },
  { icon: Zap, text: "Pay Only What You Need" },
];

/* ─────────────────── COMPONENT ─────────────────── */

export default function Home() {
  const [cart, setCart] = useState<string[]>([]);
  const [showCart, setShowCart] = useState(false);

  const toggleService = (id: string) => {
    setCart((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const cartServices = services.filter((s) => cart.includes(s.id));
  const total = cartServices.reduce((sum, s) => sum + s.price, 0);

  return (
    <>
      {/* ──── NAV ──── */}
      <nav className="sticky top-0 z-50 bg-[var(--ol-navy)]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[var(--ol-emerald)] flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-white leading-tight">Omni Leads</div>
                <div className="text-xs text-white/50 leading-tight">À La Carte Marketing</div>
              </div>
            </a>

            <div className="flex items-center gap-4">
              <a href={PHONE_HREF} className="hidden md:flex items-center gap-2 text-sm font-semibold text-[var(--ol-emerald)] hover:text-[var(--ol-emerald-hover)] transition-colors">
                <Phone className="w-4 h-4" /> {PHONE}
              </a>
              <button
                onClick={() => setShowCart(!showCart)}
                className="relative flex items-center gap-2 px-4 py-2 bg-[var(--ol-emerald)] hover:bg-[var(--ol-emerald-hover)] text-white text-sm font-semibold rounded-lg transition-colors"
              >
                <ShoppingCart className="w-4 h-4" />
                <span className="hidden sm:inline">Cart</span>
                {cart.length > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-white text-[var(--ol-navy)] text-xs font-bold rounded-full flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main id="main">
        {/* ──── HERO ──── */}
        <section className="relative bg-[var(--ol-navy)] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[var(--ol-emerald)] blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-emerald-700 blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--ol-emerald)]/10 border border-[var(--ol-emerald)]/30 rounded-full text-[var(--ol-emerald)] text-sm font-semibold mb-6">
                <Zap className="w-4 h-4" />
                À La Carte Marketing — No Bundles, No Contracts
              </div>
              <h1 className="display-heading text-white mb-6">
                Pick the Marketing Services You Need. Pay Only for What You Use.
              </h1>
              <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
                SEO, Google My Business, content writing, press releases, citations & more.
                Add services to your cart, check out, and we get to work — it&apos;s that simple.
              </p>
              <a href="#services" className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--ol-emerald)] hover:bg-[var(--ol-emerald-hover)] text-white font-bold rounded-xl transition-colors text-lg">
                Browse Services <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* ──── TRUST BAR ──── */}
        <section className="bg-[var(--ol-navy-light)] border-b border-white/5 py-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
              {trustPoints.map((t) => {
                const Icon = t.icon;
                return (
                  <div key={t.text} className="flex items-center gap-2 text-sm text-white/60">
                    <Icon className="w-4 h-4 text-[var(--ol-emerald)]" /> {t.text}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ──── SERVICES GRID ──── */}
        <section id="services" className="py-20 md:py-28 bg-[var(--ol-gray-50)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-[var(--ol-emerald)] font-semibold text-sm uppercase tracking-wider mb-3">Our Services</p>
              <h2 className="section-heading text-[var(--ol-gray-900)]">À La Carte Marketing Menu</h2>
              <p className="mt-4 text-[var(--ol-gray-500)] max-w-2xl mx-auto text-lg">
                Select the services you need. No bundles, no upsells — just results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((svc) => {
                const Icon = svc.icon;
                const inCart = cart.includes(svc.id);
                return (
                  <div
                    key={svc.id}
                    className={`relative p-8 bg-white rounded-2xl border-2 transition-all duration-300 ${
                      inCart
                        ? "border-[var(--ol-emerald)] shadow-lg shadow-emerald-100"
                        : "border-[var(--ol-gray-200)] hover:border-[var(--ol-emerald)]/30 hover:shadow-md"
                    }`}
                  >
                    {svc.popular && (
                      <div className="absolute -top-3 left-6 px-3 py-1 bg-[var(--ol-emerald)] text-white text-xs font-bold rounded-full uppercase tracking-wider">
                        Most Popular
                      </div>
                    )}

                    <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center mb-5">
                      <Icon className="w-7 h-7 text-[var(--ol-emerald)]" />
                    </div>

                    <h3 className="text-lg font-bold text-[var(--ol-gray-900)] mb-2">{svc.title}</h3>
                    <p className="text-[var(--ol-gray-500)] text-sm leading-relaxed mb-4">{svc.description}</p>

                    <div className="mb-5">
                      <span className="text-3xl font-extrabold text-[var(--ol-gray-900)]">${svc.price}</span>
                      <span className="text-[var(--ol-gray-500)] text-sm ml-1">{svc.unit}</span>
                    </div>

                    <ul className="space-y-2.5 mb-6">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-[var(--ol-gray-600)]">
                          <CheckCircle2 className="w-4 h-4 text-[var(--ol-emerald)] shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => toggleService(svc.id)}
                      className={`w-full py-3 rounded-xl font-semibold text-sm transition-colors ${
                        inCart
                          ? "bg-[var(--ol-gray-100)] text-[var(--ol-gray-600)] hover:bg-[var(--ol-gray-200)]"
                          : "bg-[var(--ol-emerald)] hover:bg-[var(--ol-emerald-hover)] text-white"
                      }`}
                    >
                      {inCart ? "✓ Added — Remove" : "Add to Cart"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ──── HOW IT WORKS ──── */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-[var(--ol-emerald)] font-semibold text-sm uppercase tracking-wider mb-3">Simple Process</p>
              <h2 className="section-heading text-[var(--ol-gray-900)]">How It Works</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Pick Your Services", desc: "Browse our menu and add the marketing services you need to your cart." },
                { step: "02", title: "Check Out", desc: "Submit your order. No contracts, no commitments — pay only for what you select." },
                { step: "03", title: "We Get to Work", desc: "Our team starts immediately. You'll see real results within 30 days." },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center mx-auto mb-5">
                    <span className="text-2xl font-extrabold text-[var(--ol-emerald)]">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--ol-gray-900)] mb-2">{item.title}</h3>
                  <p className="text-[var(--ol-gray-500)] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ──── CTA ──── */}
        <section className="py-20 md:py-28 bg-[var(--ol-navy)] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="section-heading text-white mb-4">Ready to Grow Your Business?</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Pick your services, check out, and let us handle the rest. No long-term contracts — cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#services" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--ol-emerald)] hover:bg-[var(--ol-emerald-hover)] text-white font-bold rounded-xl transition-colors text-lg">
                Browse Services <ArrowRight className="w-5 h-5" />
              </a>
              <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-colors text-lg border border-white/20">
                <Phone className="w-5 h-5" /> {PHONE}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ──── FOOTER ──── */}
      <footer className="bg-[var(--ol-gray-900)] text-white/60 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[var(--ol-emerald)] flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-bold text-white">Omni Leads LLC</span>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <a href={PHONE_HREF} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" /> {PHONE}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" /> {EMAIL}
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Salt Lake City, UT
              </span>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-xs text-white/40">
            © {new Date().getFullYear()} Omni Leads LLC. All rights reserved. | 307 W 200 S #5002-118, Salt Lake City, UT 84101
          </div>
        </div>
      </footer>

      {/* ──── CART SIDEBAR ──── */}
      {showCart && (
        <div className="fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowCart(false)} />
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-[var(--ol-gray-200)]">
              <h3 className="text-lg font-bold text-[var(--ol-gray-900)]">
                Your Cart ({cart.length})
              </h3>
              <button onClick={() => setShowCart(false)} className="p-2 rounded-lg hover:bg-[var(--ol-gray-100)] transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cartServices.length === 0 ? (
                <div className="text-center py-16">
                  <ShoppingCart className="w-12 h-12 text-[var(--ol-gray-300)] mx-auto mb-4" />
                  <p className="text-[var(--ol-gray-500)]">Your cart is empty</p>
                  <p className="text-sm text-[var(--ol-gray-400)] mt-1">Add services from the menu above</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartServices.map((svc) => {
                    const Icon = svc.icon;
                    return (
                      <div key={svc.id} className="flex items-start gap-4 p-4 bg-[var(--ol-gray-50)] rounded-xl">
                        <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-[var(--ol-emerald)]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-[var(--ol-gray-900)] truncate">{svc.title}</h4>
                          <p className="text-sm text-[var(--ol-gray-500)]">${svc.price} {svc.unit}</p>
                        </div>
                        <button onClick={() => toggleService(svc.id)} className="p-1.5 rounded-lg hover:bg-[var(--ol-gray-200)] transition-colors">
                          <X className="w-4 h-4 text-[var(--ol-gray-400)]" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {cartServices.length > 0 && (
              <div className="p-6 border-t border-[var(--ol-gray-200)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-[var(--ol-gray-500)]">Total</span>
                  <span className="text-2xl font-extrabold text-[var(--ol-gray-900)]">${total}</span>
                </div>
                <a
                  href={`mailto:info@omnileads.shop?subject=Service%20Order&body=I'd%20like%20to%20order%20the%20following%20services:%0A${cartServices.map((s) => `- ${s.title} ($${s.price} ${s.unit})`).join("%0A")}%0A%0ATotal: $${total}`}
                  className="block w-full py-4 bg-[var(--ol-emerald)] hover:bg-[var(--ol-emerald-hover)] text-white font-bold rounded-xl transition-colors text-center text-lg"
                >
                  Submit Order
                </a>
                <p className="text-xs text-[var(--ol-gray-400)] text-center mt-3">
                  We&apos;ll contact you within 24 hours to confirm and get started.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
