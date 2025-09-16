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
  // Swap these with your final brand images later
  const images = React.useMemo(
    () => [
      "https://images.unsplash.com/photo-1521336575822-6da63fb45455?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514511542287-5fd3fec8c3df?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528605105345-5344ea20e269?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528697203043-733bfdca10a0?q=80&w=2000&auto=format&fit=crop"
    ],
    []
  );

  const [idx, setIdx] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % images.length), 8000);
    return () => clearInterval(t);
  }, [images.length]);

  // Single layered background (image + raspberry gradient) avoids the gray banding
  const bgStyle = {
    backgroundImage: `
      linear-gradient(
        to bottom,
        rgba(136,19,55,0.85) 0%,
        rgba(136,19,55,0.45) 22%,
        rgba(0,0,0,0.25) 55%,
        rgba(136,19,55,0.18) 100%
      ),
      url("${images[idx]}")
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section className="relative h-[640px] overflow-hidden">
      <div className="absolute inset-0" style={bgStyle} />

      {/* (Optional) remove this next line entirely if you want ZERO bottom tint */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-rose-800/15 via-rose-700/8 to-transparent" />

      <Nav />

      {/* Lower the text + keep left-aligned */}
      <div className="relative container pt-[18rem] sm:pt-[20rem] pb-16">
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
 
