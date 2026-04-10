import type { Metadata } from "next";
import { ArrowLeft, ChevronRight, Clock, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "SEO Blog & Resources | Omni Leads LLC",
  description: "Practical SEO tips, local marketing strategies, and digital marketing insights from the Omni Leads team.",
  alternates: { canonical: "https://omnileads.shop/blog" },
};

const posts = [
  {
    slug: "rank-in-google-local-3-pack",
    category: "Local SEO",
    title: "How to Rank in Google's Local 3-Pack in 2024",
    excerpt:
      "The Local 3-Pack shows up in nearly every local search — and the businesses in it get the lion's share of clicks. Here's exactly what it takes to claim one of those spots.",
    readTime: "7 min read",
    date: "March 12, 2024",
    body: [
      "Google's Local 3-Pack (the map box with three business listings) appears in roughly 93% of local searches. If your business isn't in it, you're invisible to most potential customers.",
      "The three biggest ranking factors are: relevance (does your GMB profile match the search?), distance (how close are you to the searcher?), and prominence (how well-known is your business online?).",
      "To improve relevance, make sure your Google Business Profile is fully filled out — choose the most specific primary category, add services, and keep your description keyword-rich. To build prominence, earn reviews consistently and build local citations across directories like Yelp, YellowPages, and industry-specific sites.",
      "Consistency is key. Your business name, address, and phone number (NAP) must be identical across every directory listing. Even small differences — like 'St.' vs 'Street' — can hurt your rankings.",
      "Finally, post to your GMB profile at least weekly. Google rewards active, engaged profiles. The businesses in the 3-Pack aren't there by accident — they're treating GMB like a social media channel.",
    ],
  },
  {
    slug: "beginners-guide-on-page-seo",
    category: "On-Page SEO",
    title: "The Beginner's Guide to On-Page SEO Optimization",
    excerpt:
      "On-page SEO is the foundation of every successful ranking strategy. Master these fundamentals and you'll have a significant edge over most of your competitors.",
    readTime: "9 min read",
    date: "February 28, 2024",
    body: [
      "On-page SEO refers to everything you can control directly on your website — from your title tags to your content structure to your page speed. It's the foundation before any off-page work makes sense.",
      "Start with your title tags. Every page should have a unique title under 60 characters that includes your target keyword near the beginning. Your meta description (under 155 characters) won't directly affect rankings but it does influence click-through rate.",
      "Use one H1 tag per page — it should clearly state what the page is about and contain your primary keyword. Use H2s and H3s to break up content logically, and naturally work in secondary keywords.",
      "Image optimization is often overlooked. Compress images before uploading (tools like Squoosh are free), use descriptive file names (not 'IMG_1234.jpg'), and always write alt text that describes the image content.",
      "Page speed is a direct ranking factor. Run your pages through Google's PageSpeed Insights and fix the top issues. The biggest wins are usually compressing images, reducing unused JavaScript, and enabling browser caching.",
      "Finally, internal linking matters more than most people realize. When you create new content, find 2-3 existing pages on your site that are relevant and link to the new page from them. This helps Google discover and index your content faster.",
    ],
  },
  {
    slug: "nap-consistency-local-rankings",
    category: "Citations",
    title: "Why NAP Consistency Can Make or Break Your Local Rankings",
    excerpt:
      "Your business Name, Address, and Phone number need to be identical everywhere online. Here's why inconsistency hurts your rankings — and how to fix it fast.",
    readTime: "5 min read",
    date: "February 14, 2024",
    body: [
      "NAP stands for Name, Address, and Phone number. It's one of the most underestimated local SEO factors, and inconsistency across the web is one of the most common reasons local businesses struggle to rank.",
      "Google cross-references your business information across hundreds of websites — Yelp, Facebook, YellowPages, Angi, and dozens of niche directories. When it finds conflicting information, it loses confidence in your business and pushes you down in local results.",
      "Common NAP mistakes include using 'LLC' on some listings but not others, listing a local number on your website but an 800 number on Yelp, or using a P.O. Box on some directories and your physical address on others.",
      "The fix starts with a citation audit. List every directory where your business appears and compare it against your 'canonical' NAP — the exact version you use on your website. Then go through each listing and correct any discrepancies.",
      "Going forward, create a simple document with your exact NAP details (copy-paste ready) and use it every single time you create or update a business listing. This small discipline makes a measurable difference in local rankings over time.",
    ],
  },
];

export default function BlogPage() {
  return (
    <>
      {/* ──── NAV ──── */}
      <nav className="sticky top-0 z-50 bg-[var(--ol-navy)]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
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
            <a
              href="/#services"
              className="inline-flex items-center gap-2 px-5 py-3 min-h-11 bg-[var(--ol-emerald)] hover:bg-[var(--ol-emerald-hover)] text-white text-sm font-semibold rounded-full transition-colors"
            >
              Browse Services <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* ──── HERO ──── */}
        <section className="bg-[var(--ol-navy)] text-white py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <a href="/" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </a>
            <p className="text-[var(--ol-emerald)] font-semibold text-sm uppercase tracking-wider mb-4">Resources</p>
            <h1 className="display-heading text-white mb-5 max-w-2xl">SEO Tips & Marketing Insights</h1>
            <p className="text-white/70 text-lg max-w-xl leading-relaxed">
              Practical guides from the Omni Leads team to help you rank higher, generate more leads, and grow your business online.
            </p>
          </div>
        </section>

        {/* ──── POSTS ──── */}
        <section className="py-20 md:py-28 bg-[var(--ol-gray-50)]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
              {posts.map((post) => (
                <article key={post.slug} className="bg-white rounded-2xl border border-[var(--ol-gray-200)] overflow-hidden flex flex-col hover:shadow-md hover:border-[var(--ol-emerald)]/30 transition-all group">
                  <div className="h-2 bg-[var(--ol-emerald)]" />
                  <div className="p-8 flex flex-col flex-1 gap-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-[var(--ol-emerald)] uppercase tracking-wider">{post.category}</span>
                      <span className="text-xs text-[var(--ol-gray-400)] flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold text-[var(--ol-gray-900)] leading-snug group-hover:text-[var(--ol-emerald)] transition-colors">{post.title}</h2>
                    <p className="text-[var(--ol-gray-500)] leading-relaxed text-sm flex-1">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-[var(--ol-gray-400)]">{post.date}</span>
                      <span className="text-xs font-semibold text-[var(--ol-emerald)] flex items-center gap-1">Read more <ChevronRight className="w-3 h-3" /></span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Expanded first post as sample long-form content */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl border border-[var(--ol-gray-200)] p-8 md:p-12">
                <span className="text-xs font-semibold text-[var(--ol-emerald)] uppercase tracking-wider">{posts[0].category}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--ol-gray-900)] mt-3 mb-2 leading-snug">{posts[0].title}</h2>
                <div className="flex items-center gap-4 text-xs text-[var(--ol-gray-400)] mb-8">
                  <span>{posts[0].date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {posts[0].readTime}</span>
                </div>
                <div className="space-y-5">
                  {posts[0].body.map((para, i) => (
                    <p key={i} className="text-[var(--ol-gray-600)] leading-relaxed">{para}</p>
                  ))}
                </div>
                <div className="mt-10 pt-8 border-t border-[var(--ol-gray-200)]">
                  <p className="text-sm font-semibold text-[var(--ol-gray-700)] mb-4">Want us to handle your GMB for you?</p>
                  <a
                    href="/#services"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--ol-emerald)] hover:bg-[var(--ol-emerald-hover)] text-white font-bold rounded-xl transition-colors text-sm"
                  >
                    View GMB Optimization Service <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ──── FOOTER ──── */}
      <footer className="bg-[var(--ol-gray-900)] text-white/60 py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Omni Leads LLC. All rights reserved.
        </div>
      </footer>
    </>
  );
}
