import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Users,
  Trophy,
  Building2,
  ChevronDown,
  Send,
  Sparkles,
  Clock,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import { Card, CardContent } from "@/shared/components/ui/card";
import { SportivaLogo } from "@/shared/components/common/SportivaLogo";
import { toast } from "sonner";

interface FAQItem {
  id: string;
  category: "booking" | "players" | "payments" | "owners";
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "1",
    category: "booking",
    question: "How do I book a court on Sportiva?",
    answer:
      "Simply navigate to the Courts or Clubs page, select your preferred facility, choose an available date and time slot, and confirm your booking. You will receive an instant confirmation notification.",
  },
  {
    id: "2",
    category: "booking",
    question: "Can I cancel or reschedule my court reservation?",
    answer:
      "Yes! You can cancel or reschedule your reservation up to 6 hours before the booked start time via your 'My Bookings' page for a full refund or credit.",
  },
  {
    id: "3",
    category: "players",
    question: "How does the Player Matchmaking feature work?",
    answer:
      "If you are short on players for a game or looking to join a match, browse the 'Matches' section or create an open game slot. Other Sportiva players in your area can join your squad instantly.",
  },
  {
    id: "4",
    category: "players",
    question: "Is Sportiva free for players?",
    answer:
      "Yes! Creating an account, discovering courts, connecting with players, and joining friendly matches on Sportiva is 100% free.",
  },
  {
    id: "5",
    category: "payments",
    question: "What payment methods are supported?",
    answer:
      "We support all major credit/debit cards (Visa, Mastercard), mobile wallets (Vodafone Cash, InstaPay), and cash payment at selected partner club receptions.",
  },
  {
    id: "6",
    category: "owners",
    question: "How can I list my sports club or facility on Sportiva?",
    answer:
      "Club owners can request an Owner account through our registration page or contact our partnerships team. We provide a complete management dashboard to handle schedules, courts, and online bookings.",
  },
];

const HelpPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [openFaqId, setOpenFaqId] = useState<string | null>("1");

  // Contact Form State
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(
        "Thank you! Your message has been sent. Our support team will reply within 2 hours."
      );
      setContactName("");
      setContactEmail("");
      setContactMessage("");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070A10] text-slate-900 dark:text-white transition-colors duration-300">
      {/* ── 1. Hero Search Header ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0F172A] via-[#0B1120] to-[#070A10] text-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#20A854_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#20A854] text-xs font-semibold">
            <Sparkles className="h-3.5 w-3.5" />
            <span>24/7 Help Center & About Sportiva</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            How can we <span className="text-[#20A854]">help you</span> today?
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Everything you need to know about Sportiva court bookings, player matching, memberships,
            and club management.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative pt-2">
            <div className="relative flex items-center">
              <Search className="absolute left-4 h-5 w-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Search FAQs, bookings, clubs, payments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12 rounded-2xl bg-white/10 border-white/20 pl-11 pr-4 text-sm text-white placeholder:text-slate-400 focus:bg-white/15 focus:border-[#20A854] focus:ring-1 focus:ring-[#20A854] backdrop-blur-md transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. About Us Section (عن سبورتيفا) ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <div className="flex justify-center">
            <SportivaLogo showText={true} size="lg" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            About <span className="text-[#20A854]">Sportiva</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Sportiva is Egypt's premier all-in-one sports booking & social network platform designed
            to connect players, streamline court reservations, and empower sports club owners.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#0E1521] shadow-lg rounded-2xl hover:border-[#20A854]/50 transition-all">
            <CardContent className="p-6 space-y-3">
              <div className="h-12 w-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-[#20A854]">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold">Instant Bookings</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Discover and reserve top football, padel, tennis, and basketball courts with
                real-time schedule availability.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#0E1521] shadow-lg rounded-2xl hover:border-[#20A854]/50 transition-all">
            <CardContent className="p-6 space-y-3">
              <div className="h-12 w-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-[#20A854]">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold">Player Community</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Connect with passionate athletes in your neighborhood, build friendly squads, and
                find players for open game slots.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#0E1521] shadow-lg rounded-2xl hover:border-[#20A854]/50 transition-all">
            <CardContent className="p-6 space-y-3">
              <div className="h-12 w-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-[#20A854]">
                <Trophy className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold">Matches & Tournaments</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Organize or join competitive friendly matches, track match statistics, and rise up
                the community leaderboards.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#0E1521] shadow-lg rounded-2xl hover:border-[#20A854]/50 transition-all">
            <CardContent className="p-6 space-y-3">
              <div className="h-12 w-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-[#20A854]">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold">Club Management</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Empower venue managers with smart automation, online reservation tracking, revenue
                reports, and court management.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Live Metrics Counter */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-gradient-to-r from-emerald-950/20 via-slate-900 to-emerald-950/20 border border-emerald-500/20 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-black text-[#20A854]">50+</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Top Verified Clubs</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-[#20A854]">1,200+</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Courts & Fields</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-[#20A854]">15,000+</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Active Players</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-[#20A854]">24/7</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Customer Support</div>
          </div>
        </div>
      </section>

      {/* ── 3. FAQ Accordion Section ── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Frequently Asked <span className="text-[#20A854]">Questions</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Quick answers to the most common questions about Sportiva.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: "all", label: "All Questions" },
            { id: "booking", label: "Court Bookings" },
            { id: "players", label: "Players & Social" },
            { id: "payments", label: "Payments" },
            { id: "owners", label: "Club Owners" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? "bg-[#20A854] text-white shadow-md shadow-emerald-500/20"
                  : "bg-white dark:bg-[#0E1521] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:border-[#20A854]/40"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#0E1521] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 text-[#20A854] transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-white/5 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 text-slate-400 text-sm">
              No matching questions found. Try a different search term or contact support below.
            </div>
          )}
        </div>
      </section>

      {/* ── 4. Contact & Inquiry Section ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-200/80 dark:border-white/10 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Support Channels Info */}
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-[#20A854] text-xs font-semibold mb-2">
                <Clock className="h-3.5 w-3.5" />
                <span>We're Here For You</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Get in Touch with <span className="text-[#20A854]">Sportiva Team</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                Have a question, feedback, or need assistance with your booking? Reach out through
                any of our support channels.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#0E1521] border border-slate-200/80 dark:border-white/10 shadow-sm">
                <div className="h-10 w-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-[#20A854] shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Email Support
                  </h4>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    support@sportiva.app
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#0E1521] border border-slate-200/80 dark:border-white/10 shadow-sm">
                <div className="h-10 w-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-[#20A854] shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Hotline / WhatsApp
                  </h4>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    +20 100 000 0000
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#0E1521] border border-slate-200/80 dark:border-white/10 shadow-sm">
                <div className="h-10 w-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-[#20A854] shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Headquarters Location
                  </h4>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    New Cairo, Fifth Settlement, Cairo, Egypt
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Link to Chat */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-emerald-950/40 border border-emerald-500/30 text-white flex items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-[#20A854]" />
                  Need Live Chat Assistance?
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  Chat directly with our support specialists in real-time.
                </p>
              </div>
              <Link to="/chat">
                <Button
                  size="sm"
                  className="bg-[#20A854] hover:bg-[#1b9148] text-white rounded-xl font-bold text-xs shrink-0"
                >
                  Start Chat <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Interactive Inquiry Form */}
          <Card className="border border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#0E1521] shadow-xl rounded-3xl p-6 sm:p-8">
            <CardContent className="p-0 space-y-4">
              <div className="space-y-1">
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  Send us a Message
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Fill in your details below and we will get back to you shortly.
                </p>
              </div>

              <form onSubmit={handleContactSubmit} className="space-y-4 pt-2">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Your Full Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="h-10 rounded-xl bg-slate-50 dark:bg-[#151D2A] border-slate-200 dark:border-white/10 text-xs focus:border-[#20A854]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="h-10 rounded-xl bg-slate-50 dark:bg-[#151D2A] border-slate-200 dark:border-white/10 text-xs focus:border-[#20A854]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Message / Inquiry
                  </label>
                  <Textarea
                    placeholder="Describe how we can help you..."
                    rows={4}
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    className="rounded-xl bg-slate-50 dark:bg-[#151D2A] border-slate-200 dark:border-white/10 text-xs focus:border-[#20A854] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#20A854] hover:bg-[#1b9148] text-white font-bold h-11 rounded-xl text-xs shadow-md shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  {isSubmitting ? "Sending Message..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default HelpPage;
