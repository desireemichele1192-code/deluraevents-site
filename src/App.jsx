import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
function PraisePage(){
  const quotes = [
    { q: "They anticipated every detail—our guests are still talking about the tasting dinner.", n: "A. Morgan", t: "Delura Table" },
    { q: "Calm, precise, joyful. Our wedding day felt effortless.", n: "R. Patel", t: "Delura Events" },
    { q: "The room transformation was beyond what we imagined—warm, modern, timeless.", n: "J. & L. Ortiz", t: "Delura Studios" },
  ];
  return (
    <>
      function Hero({ title = "Where Taste Meets Timeless", ctas = true }) {
  // Swap these links later with your brand images (see step 2)
  const images = React.useMemo(() => [
    "https://images.unsplash.com/photo-1521336575822-6da63fb45455?q=80&w=2000&auto=format&fit=crop", // hands pouring drink
    "https://images.unsplash.com/photo-1514511542287-5fd3fec8c3df?q=80&w=2000&auto=format&fit=crop", // tablescape candlelight
    "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?q=80&w=2000&auto=format&fit=crop", // toast / guests
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop", // plating close-up
    "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=2000&auto=format&fit=crop", // dance floor blur
    "https://images.unsplash.com/photo-1528605105345-5344ea20e269?q=80&w=2000&auto=format&fit=crop", // reception vibe
    "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2000&auto=format&fit=crop", // bouquet/florals
    "https://images.unsplash.com/photo-1528697203043-733bfdca10a0?q=80&w=2000&auto=format&fit=crop"  // detail/greenery
  ], []);
  const [idx, setIdx] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % images.length), 8000);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <section className="relative h-[620px] overflow-hidden">
      <img src={images[idx]} alt="celebration" className="absolute inset-0 w-full h-full object-cover" />
      {/* subtle dark veil for readability */}
      <div className="absolute inset-0 bg-black/35" />
      {/* keep the top raspberry fade, slightly softer */}
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-rose-900/80 via-rose-800/40 to-transparent" />
      {/* BOTTOM FADE: made half height + much softer. 
          If you want it GONE, just delete this div entirely. */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-rose-800/25 via-rose-700/10 to-transparent" />

      <Nav />

      {/* Lower the headline & buttons (kept left-aligned) */}
      <div className="relative container pt-48 sm:pt-64">
        <h1 className="tagline text-white/95 text-5xl sm:text-7xl leading-tight drop-shadow-[0_6px_18px_rgba(0,0,0,.45)]">
          {title}
        </h1>
        {ctas && (
          <div className="mt-8 flex items-center gap-6">
            <a href="#brands" className="btn btn-outline">Explore Our Brands</a>
            <Link to="/contact" className="btn btn-primary">Get a Quote</Link>
          </div>
        )}
      </div>
    </section>
  );
}
