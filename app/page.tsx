"use client";

import { useState } from "react";
import {
  MapPin, Search, FileText, Link2, Building2, Newspaper,
  Phone, Mail, CheckCircle2, ShoppingCart, X, ArrowRight,
  Star, Shield, Clock, Zap, BarChart2, Globe, Megaphone,
  ChevronRight,
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
  {
    id: "social",
    icon: Megaphone,
    title: "Social Media Management",
    description: "Done-for-you social media content, scheduling, and engagement across your key platforms.",
    price: 449,
    unit: "/mo",
    features: [
      "12 posts/mo (FB, IG, LinkedIn)",
      "Custom branded graphics",
      "Caption & hashtag strategy",
      "Community engagement",
      "Monthly analytics report",
    ],
  },
  {
    id: "google-ads",
    icon: BarChart2,
    title: "Google Ads Management",
    description: "ROI-focused paid search campaigns with ongoing optimization to lower cost-per-lead.",
    price: 599,
    unit: "/mo",
    features: [
      "Campaign setup & structure",
      "Keyword & audience targeting",
      "Ad copy A/B testing",
      "Bid & budget management",
      "Weekly performance reporting",
    ],
  },
  {
    id: "audit",
    icon: Globe,
    title: "Website Audit",
    description: "Comprehensive technical and SEO audit with a prioritized action plan to fix what's hurting your rankings.",
    price: 249,
    unit: "one-time",
    features: [
      "Technical SEO audit",
      "Speed & Core Web Vitals",
      "On-page content analysis",
      "Backlink profile review",
      "Prioritized fix checklist",
    ],
  },
];

const trustPoints = [
  { icon: Star, text: "5-Star Rated" },
  { icon: Shield, text: "No Contracts" },
  { icon: Clock, text: "Results in 30 Days" },
  { icon: Zap, text: "Pay Only What You Need" },
];

const testimonials = [
  {
    name: "Marcus T.",
    role: "Owner, Peak Plumbing Utah",
    body: "Within 60 days of signing up for GMB Optimization and Directory Citations our call volume doubled. We're now ranking in the local 3-pack for every major keyword. Absolutely worth every penny.",
    stars: 5,
  },
  {
    name: "Jennifer R.",
    role: "Marketing Director, Brighter Dental",
    body: "The content writing service is phenomenal. Our blog traffic is up 340% in 4 months and we're getting leads we never had before. The articles are well-researched and actually rank.",
    stars: 5,
  },
  {
    name: "Derek S.",
    role: "CEO, Summit Roofing Co.",
    body: "We tried a big agency and wasted $3,000/mo on a bundle we didn't need. Omni Leads let us pick exactly what we wanted — GMB + On-Page SEO — and the results have been incredible.",
    stars: 5,
  },
  {
    name: "Amanda L.",
    role: "Founder, Mesa Verde Landscaping",
    body: "The press release distribution got us featured in 3 local news outlets overnight. We saw a spike in branded searches and several new clients mentioned seeing us in the news.",
    stars: 5,
  },
];

/* ─────────────────── COMPONENT ─────────────────── */

export default function Home() {
  const [cart, setCart] = useState<string[]>([]);
  const [showCart, setShowCart] = useState(false);

  // Checkout form state
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [payingWithCard, setPayingWithCard] = useState(false);

  const toggleService = (id: string) => {
    setCart((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
    setSubmitted(false);
    setSubmitError("");
  };

  const cartServices = services.filter((s) => cart.includes(s.id));
  const total = cartServices.reduce((sum, s) => sum + s.price, 0);

  async function handleSubmitOrder(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formName,
          email: formEmail,
          phone: formPhone,
          services: cartServices.map((s) => ({ title: s.title, price: s.price, unit: s.unit })),
          total,
        }),
      });
      if (!res.ok) throw new Error("Order failed");
      setSubmitted(true);
      setCart([]);
    } catch {
      setSubmitError("Something went wrong. Please call us or email directly.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handlePayWithCard() {
    setPayingWithCard(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          services: cartServices.map((s) => ({ title: s.title, price: s.price, unit: s.unit })),
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("No checkout URL");
      }
    } catch {
      setSubmitError("Payment setup failed. Please try the free order form instead.");
    } finally {
      setPayingWithCard(false);
    }
  }

  return (
    <>
      {/* ──── NAV ──── */}
      <nav className="sticky top-0 z-50 bg-[var(--ol-navy)]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="/" className="flex items-center gap-4">
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
                aria-label={`Open cart${cart.length > 0 ? `, ${cart.length} item${cart.length > 1 ? "s" : ""}` : ""}`}
                className="relative flex items-center gap-2 px-5 py-3 min-h-11 bg-[var(--ol-emerald)] hover:bg-[var(--ol-emerald-hover)] text-white text-sm font-semibold rounded-full transition-colors"
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
            <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[var(--ol-emerald)]/60 blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-24 md:py-32">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 bg-[var(--ol-emerald)]/10 border border-[var(--ol-emerald)]/30 rounded-full text-[var(--ol-emerald)] text-sm font-semibold mb-6 text-center">
                <Zap className="w-4 h-4" />
                À La Carte Marketing — No Bundles, No Contracts
              </div>
              <h1 className="display-heading text-white mb-6">
                Pick the Marketing Services You Need. Pay Only for What You Use.
              </h1>
              <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
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
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-14">
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
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="text-center mb-16">
              <p className="text-[var(--ol-emerald)] font-semibold text-sm uppercase tracking-wider mb-6">Our Services</p>
              <h2 className="section-heading text-[var(--ol-gray-900)] mb-6">À La Carte Marketing Menu</h2>
              <p className="text-[var(--ol-gray-500)] max-w-2xl mx-auto text-lg leading-relaxed">
                Select the services you need. No bundles, no upsells — just results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((svc) => {
                const Icon = svc.icon;
                const inCart = cart.includes(svc.id);
                return (
                  <div
                    key={svc.id}
                    className={`relative flex flex-col p-8 md:p-10 bg-white rounded-2xl border-2 transition-all duration-300 ${
                      svc.popular ? "pt-14" : ""
                    } ${
                      inCart
                        ? "border-[var(--ol-emerald)] shadow-lg shadow-[var(--ol-emerald)]/10"
                        : "border-[var(--ol-gray-200)] hover:border-[var(--ol-emerald)]/30 hover:shadow-md"
                    }`}
                  >
                    {svc.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-[var(--ol-emerald)] text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-md z-10">
                        Most Popular
                      </div>
                    )}

                    <div className="w-14 h-14 rounded-xl bg-[var(--ol-emerald)]/10 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-[var(--ol-emerald)]" />
                    </div>

                    <h3 className="text-xl font-bold text-[var(--ol-gray-900)] mb-4">{svc.title}</h3>
                    <p className="text-[var(--ol-gray-500)] leading-relaxed mb-6">{svc.description}</p>

                    <div className="mb-6">
                      <span className="text-4xl font-extrabold text-[var(--ol-gray-900)]">${svc.price}</span>
                      <span className="text-base text-[var(--ol-gray-500)] ml-1">{svc.unit}</span>
                    </div>

                    <ul className="space-y-2 mb-8">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-[var(--ol-gray-600)]">
                          <CheckCircle2 className="w-4 h-4 text-[var(--ol-emerald)] shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => toggleService(svc.id)}
                      aria-label={inCart ? `Remove ${svc.title} from cart` : `Add ${svc.title} to cart`}
                      className={`mt-auto w-full py-4 rounded-xl font-bold text-base transition-colors ${
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
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="text-center mb-16">
              <p className="text-[var(--ol-emerald)] font-semibold text-sm uppercase tracking-wider mb-6">Simple Process</p>
              <h2 className="section-heading text-[var(--ol-gray-900)] mb-6">How It Works</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { step: "01", title: "Pick Your Services", desc: "Browse our menu and add the marketing services you need to your cart." },
                { step: "02", title: "Check Out", desc: "Submit your order. No contracts, no commitments — pay only for what you select." },
                { step: "03", title: "We Get to Work", desc: "Our team starts immediately. You'll see real results within 30 days." },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[var(--ol-emerald)]/10 flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-extrabold text-[var(--ol-emerald)]">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--ol-gray-900)] mb-4">{item.title}</h3>
                  <p className="text-[var(--ol-gray-500)] leading-relaxed max-w-xs mx-auto">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ──── TESTIMONIALS ──── */}
        <section className="py-20 md:py-28 bg-[var(--ol-gray-50)]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="text-center mb-16">
              <p className="text-[var(--ol-emerald)] font-semibold text-sm uppercase tracking-wider mb-6">Client Results</p>
              <h2 className="section-heading text-[var(--ol-gray-900)] mb-6">What Our Clients Say</h2>
              <p className="text-[var(--ol-gray-500)] max-w-xl mx-auto text-lg leading-relaxed">
                Real businesses. Real results. No long-term contracts required.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-white rounded-2xl border border-[var(--ol-gray-200)] p-8 md:p-10 flex flex-col gap-6">
                  <div className="flex gap-1">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[var(--ol-emerald)] text-[var(--ol-emerald)]" />
                    ))}
                  </div>
                  <p className="text-[var(--ol-gray-600)] leading-relaxed text-base">&ldquo;{t.body}&rdquo;</p>
                  <div className="mt-auto">
                    <div className="font-bold text-[var(--ol-gray-900)] text-sm">{t.name}</div>
                    <div className="text-[var(--ol-gray-400)] text-xs mt-0.5">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ──── BLOG PREVIEW ──── */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
              <div>
                <p className="text-[var(--ol-emerald)] font-semibold text-sm uppercase tracking-wider mb-4">Resources</p>
                <h2 className="section-heading text-[var(--ol-gray-900)]">SEO Tips & Insights</h2>
              </div>
              <a href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--ol-emerald)] hover:text-[var(--ol-emerald-hover)] transition-colors shrink-0">
                View all posts <ChevronRight className="w-4 h-4" />
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "How to Rank in Google's Local 3-Pack in 2024", category: "Local SEO", date: "Mar 12, 2024" },
                { title: "The Beginner's Guide to On-Page SEO Optimization", category: "On-Page SEO", date: "Feb 28, 2024" },
                { title: "Why NAP Consistency Can Make or Break Your Local Rankings", category: "Citations", date: "Feb 14, 2024" },
              ].map((post) => (
                <a key={post.title} href="/blog" className="group flex flex-col gap-4 p-6 rounded-2xl border border-[var(--ol-gray-200)] hover:border-[var(--ol-emerald)]/40 hover:shadow-md transition-all">
                  <div className="h-2 w-12 rounded-full bg-[var(--ol-emerald)]" />
                  <span className="text-xs font-semibold text-[var(--ol-emerald)] uppercase tracking-wider">{post.category}</span>
                  <h3 className="font-bold text-[var(--ol-gray-900)] leading-snug group-hover:text-[var(--ol-emerald)] transition-colors">{post.title}</h3>
                  <span className="text-xs text-[var(--ol-gray-400)] mt-auto">{post.date}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ──── CTA ──── */}
        <section className="py-24 md:py-32 bg-[var(--ol-navy)] text-white">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
            <h2 className="section-heading text-white mb-6">Ready to Grow Your Business?</h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Pick your services, check out, and let us handle the rest. No long-term contracts — cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
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
      <footer className="bg-[var(--ol-gray-900)] text-white/60 py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg bg-[var(--ol-emerald)] flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-bold text-white">Omni Leads LLC</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <a href={PHONE_HREF} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" /> {PHONE}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" /> {EMAIL}
              </a>
              <a href="/blog" className="hover:text-white transition-colors">Blog</a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Salt Lake City, UT
              </span>
            </div>
          </div>
          <div className="border-t border-white/10 mt-10 pt-10 text-center text-xs text-white/40">
            © {new Date().getFullYear()} Omni Leads LLC. All rights reserved. | 307 W 200 S #5002-118, Salt Lake City, UT 84101
          </div>
        </div>
      </footer>

      {/* ──── CART SIDEBAR ──── */}
      {showCart && (
        <div className="fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowCart(false)} />
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[var(--ol-gray-200)] shrink-0">
              <h3 className="text-lg font-bold text-[var(--ol-gray-900)]">
                Your Cart ({cart.length})
              </h3>
              <button onClick={() => setShowCart(false)} aria-label="Close cart" className="p-4 min-w-11 min-h-11 rounded-xl hover:bg-[var(--ol-gray-100)] transition-colors flex items-center justify-center">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cartServices.length === 0 && !submitted ? (
                <div className="text-center py-16">
                  <ShoppingCart className="w-12 h-12 text-[var(--ol-gray-300)] mx-auto mb-4" />
                  <p className="text-[var(--ol-gray-500)]">Your cart is empty</p>
                  <p className="text-sm text-[var(--ol-gray-400)] mt-1">Add services from the menu above</p>
                </div>
              ) : submitted ? (
                <div className="text-center py-16 px-4">
                  <CheckCircle2 className="w-16 h-16 text-[var(--ol-emerald)] mx-auto mb-6" />
                  <h4 className="text-xl font-bold text-[var(--ol-gray-900)] mb-4">Order Received!</h4>
                  <p className="text-[var(--ol-gray-500)] leading-relaxed">
                    Thanks! We&apos;ll reach out within 24 hours to confirm and get started.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartServices.map((svc) => {
                    const Icon = svc.icon;
                    return (
                      <div key={svc.id} className="flex items-start gap-4 p-4 bg-[var(--ol-gray-50)] rounded-xl">
                        <div className="w-10 h-10 rounded-lg bg-[var(--ol-emerald)]/10 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-[var(--ol-emerald)]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-[var(--ol-gray-900)] truncate">{svc.title}</h4>
                          <p className="text-sm text-[var(--ol-gray-500)]">${svc.price} {svc.unit}</p>
                        </div>
                        <button onClick={() => toggleService(svc.id)} aria-label={`Remove ${svc.title} from cart`} className="p-2.5 min-w-11 min-h-11 rounded-xl hover:bg-[var(--ol-gray-200)] transition-colors flex items-center justify-center">
                          <X className="w-4 h-4 text-[var(--ol-gray-400)]" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Checkout form + actions */}
            {cartServices.length > 0 && !submitted && (
              <div className="shrink-0 border-t border-[var(--ol-gray-200)] p-6 space-y-4 overflow-y-auto max-h-[55vh]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-[var(--ol-gray-500)]">Total</span>
                  <span className="text-2xl font-extrabold text-[var(--ol-gray-900)]">${total}</span>
                </div>

                <form onSubmit={handleSubmitOrder} className="space-y-3">
                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    aria-label="Your name"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--ol-gray-200)] text-sm text-[var(--ol-gray-900)] placeholder-[var(--ol-gray-400)] focus:outline-none focus:border-[var(--ol-emerald)] focus:ring-1 focus:ring-[var(--ol-emerald)]"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email address"
                    aria-label="Email address"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--ol-gray-200)] text-sm text-[var(--ol-gray-900)] placeholder-[var(--ol-gray-400)] focus:outline-none focus:border-[var(--ol-emerald)] focus:ring-1 focus:ring-[var(--ol-emerald)]"
                  />
                  <input
                    type="tel"
                    placeholder="Phone (optional)"
                    aria-label="Phone number (optional)"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--ol-gray-200)] text-sm text-[var(--ol-gray-900)] placeholder-[var(--ol-gray-400)] focus:outline-none focus:border-[var(--ol-emerald)] focus:ring-1 focus:ring-[var(--ol-emerald)]"
                  />
                  {submitError && (
                    <p className="text-xs text-red-500">{submitError}</p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 bg-[var(--ol-emerald)] hover:bg-[var(--ol-emerald-hover)] disabled:opacity-60 text-white font-bold rounded-xl transition-colors text-base"
                  >
                    {submitting ? "Submitting…" : "Submit Order — We'll Invoice You"}
                  </button>
                </form>

                <div className="relative flex items-center gap-4">
                  <div className="flex-1 h-px bg-[var(--ol-gray-200)]" />
                  <span className="text-xs text-[var(--ol-gray-400)]">or</span>
                  <div className="flex-1 h-px bg-[var(--ol-gray-200)]" />
                </div>

                <button
                  onClick={handlePayWithCard}
                  disabled={payingWithCard}
                  className="w-full py-4 bg-[var(--ol-navy)] hover:bg-[var(--ol-navy-light)] disabled:opacity-60 text-white font-bold rounded-xl transition-colors text-base border border-[var(--ol-navy-light)]"
                >
                  {payingWithCard ? "Redirecting…" : "Pay Now with Card"}
                </button>

                <p className="text-xs text-[var(--ol-gray-400)] text-center">
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
