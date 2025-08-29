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
      <Hero title="Praise" ctas={false}/>
      <section className="container mt-12 grid gap-6 sm:grid-cols-3">
        {quotes.map((x,i)=>(
          <blockquote key={i} className="card p-6">
            <div className="text-lg font-serif mb-3" style={{color:"var(--delura-ink)"}}>“{x.q}”</div>
            <div className="text-sm" style={{color:"var(--delura-muted)"}}>{x.n} • {x.t}</div>
          </blockquote>
        ))}
      </section>
      <Footer/>
    </>
  );
}

/**
 * DELURA – Multi‑page site
 * - Home (parent) + Table / Events / Studios + Experiences, Gallery, Praise, Contact
 * - Dramatic hero with raspberry fades, cursive-feel serif italic
 * - Nav links are TEXT ONLY (no boxes)
 */

function Nav() {
  return (
    <div className="absolute left-0 right-0 top-0 z-20">
      <div className="container flex items-center justify-between py-5">
        <Link to="/" className="wordmark text-white text-3xl sm:text-4xl">DELURA</Link>
        <nav className="hidden sm:flex items-center text-sm">
          <NavLink to="/table" className={({isActive})=>`navlink ${isActive?'active':''}`}>Delura Table</NavLink>
          <NavLink to="/events" className={({isActive})=>`navlink ${isActive?'active':''}`}>Delura Events</NavLink>
          <NavLink to="/studios" className={({isActive})=>`navlink ${isActive?'active':''}`}>Delura Studios</NavLink>
          <NavLink to="/experiences" className={({isActive})=>`navlink ${isActive?'active':''}`}>Experiences</NavLink>
          <NavLink to="/gallery" className={({isActive})=>`navlink ${isActive?'active':''}`}>Gallery</NavLink>
          <NavLink to="/praise" className={({isActive})=>`navlink ${isActive?'active':''}`}>Praise</NavLink>
          <NavLink to="/contact" className={({isActive})=>`navlink ${isActive?'active':''}`}>Get a Quote</NavLink>
        </nav>
      </div>
    </div>
  );
}

function Hero({ title="Where Taste Meets Timeless", ctas=true }){
  const images = React.useMemo(()=>[
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511910849309-0dffb09f74e3?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521336575822-6da63fb45455?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1528605105345-5344ea20e269?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2000&auto=format&fit=crop",
  ],[]);
  const [idx,setIdx] = React.useState(0);
  React.useEffect(()=>{ const t=setInterval(()=>setIdx(i=>(i+1)%images.length),8000); return ()=>clearInterval(t);},[images.length]);
  return (
    <section className="relative h-[560px] overflow-hidden">
      <img src={images[idx]} alt="celebration" className="absolute inset-0 w-full h-full object-cover"/>
      {/* readability veil */}
      <div className="absolute inset-0 bg-black/40"/>
      {/* strong raspberry top banner */}
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-rose-900/90 via-rose-800/60 to-transparent"/>
      {/* bottom raspberry field */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-rose-800/55 via-rose-700/35 to-transparent"/>
      <Nav/>
      <div className="relative container mt-36">
        <h1 className="tagline text-white/95 text-5xl sm:text-7xl leading-tight drop-shadow-[0_6px_18px_rgba(0,0,0,.45)]">
          {title}
        </h1>
        <div className="mt-4 flex items-center gap-6">
          {ctas && (<>
            <a href="#brands" className="btn btn-outline">Explore Our Brands</a>
            <Link to="/contact" className="btn btn-primary">Get a Quote</Link>
          </>)}
        </div>
      </div>
    </section>
  );
}

function BrandsPanel(){
  return (
    <section id="brands" className="relative -mt-16 px-4">
      {/* raspberry field behind card */}
      <div aria-hidden className="absolute inset-x-0 -top-24 h-56 bg-gradient-to-b from-rose-800/35 via-rose-700/20 to-transparent"/>
      <div className="container card p-8 sm:p-12">
        <h2 className="text-center text-3xl sm:text-4xl font-serif mb-8" style={{color:"var(--delura-ink)"}}>Our Brands</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x" style={{borderColor:"var(--rose-100)", color:"var(--delura-muted)"}}>
          {[
            {title:"Delura Table", blurb:"Seasonal menus, tasting dinners, premium beverage service.", to:"/table", icon:"🍽️"},
            {title:"Delura Events", blurb:"Weddings, social & corporate—planning with heart & precision.", to:"/events", icon:"♥️"},
            {title:"Delura Studios", blurb:"Creative/design/decor—immersive environments & florals.", to:"/studios", icon:"✨"},
          ].map((b)=> (
            <div key={b.title} className="flex flex-col items-center gap-3 py-6 px-6">
              <div className="text-2xl">{b.icon}</div>
              <div className="text-xl font-semibold" style={{color:"var(--delura-ink)"}}>{b.title}</div>
              <p className="text-center max-w-[22ch]">{b.blurb}</p>
              <Link className="btn btn-primary" to={b.to}>Learn More</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer(){
  return (
    <footer className="container py-12 text-sm text-[color:var(--delura-muted)]">
      <div className="h-px w-full my-6" style={{background:"#ead1d6"}}/>
      <div>© {new Date().getFullYear()} Delura — Details • Connection • Celebration</div>
    </footer>
  );
}

// --- Pages ---
function Home(){
  return (<>
    <Hero/>
    <BrandsPanel/>
    <section className="container mt-16">
      <h3 className="text-2xl font-serif" style={{color:"var(--delura-ink)"}}>Featured Experiences</h3>
      <p className="mt-2" style={{color:"var(--delura-muted)"}}>Ticketed dinners & public events hosted by Delura.</p>
    </section>
    <Footer/>
  </>);
}

function MenuGrid(){
  const cols = [
    {title:"Signature Bites", items:["Lemon‑Herb Salmon • caper aioli","Jerk Chicken • pineapple chimichurri","Burrata Toast • roasted tomatoes"]},
    {title:"Desserts", items:["Basque Cheesecake • honey & sea salt","Chocolate Pot de Crème • espresso whip","Seasonal Fruit Tart • almond crust"]},
    {title:"Beverage", items:["Welcome Spritz • citrus/herbs","Zero‑Proof Cooler • ginger/mint/lime","Coffee & Fine Tea • Ethiopian"]},
  ];
  return (
    <div className="grid gap-6 sm:grid-cols-3 mt-6">
      {cols.map(col=> (
        <div key={col.title} className="card p-6">
          <div className="font-semibold mb-3" style={{color:"var(--delura-ink)"}}>{col.title}</div>
          <ul className="space-y-2 text-sm" style={{color:"var(--delura-muted)"}}>
            {col.items.map(it=> <li key={it}>• {it}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}

function TablePage(){
  return (<>
    <Hero title="Cuisine, Craft, and Candlelight"/>
    <section className="container mt-12">
      <h2 className="text-3xl font-serif" style={{color:"var(--delura-ink)"}}>Delura Table</h2>
      <p className="mt-3 max-w-2xl" style={{color:"var(--delura-muted)"}}>Seasonal menus, tasting dinners, and a refined beverage program that honors detail at every course.</p>
      <MenuGrid/>
      <div className="mt-10">
        <Link className="btn btn-primary" to="/contact">Request Menu & Quote</Link>
      </div>
    </section>
    <Footer/>
  </>);
}

function ProcessSteps(){
  const steps=[
    {k:"Discovery", d:"Vision, constraints, priorities; we listen and align."},
    {k:"Design", d:"Mood, materials, palette, and guest experience planning."},
    {k:"Logistics", d:"Vendors, timelines, layouts, and contingencies."},
    {k:"Day‑Of", d:"Run of show, vendor lead, and on‑site orchestration."},
  ];
  return (
    <div className="grid gap-6 sm:grid-cols-4 mt-6">
      {steps.map(s=> (
        <div key={s.k} className="card p-6">
          <div className="font-semibold" style={{color:"var(--delura-ink)"}}>{s.k}</div>
          <p className="mt-2 text-sm" style={{color:"var(--delura-muted)"}}>{s.d}</p>
        </div>
      ))}
    </div>
  );
}

function EventsPage(){
  return (<>
    <Hero title="Planning With Heart & Precision"/>
    <section className="container mt-12">
      <h2 className="text-3xl font-serif" style={{color:"var(--delura-ink)"}}>Delura Events</h2>
      <p className="mt-3 max-w-2xl" style={{color:"var(--delura-muted)"}}>From intimate gatherings to large weddings and corporate galas—we orchestrate connection and joy, end‑to‑end.</p>
      <ProcessSteps/>
      <div className="mt-10">
        <Link className="btn btn-primary" to="/contact">Plan With Us</Link>
      </div>
    </section>
    <Footer/>
  </>);
}

function StudiosPage(){
  return (<>
    <Hero title="Design, Florals, and Atmospheres"/>
    <section className="container mt-12">
      <h2 className="text-3xl font-serif" style={{color:"var(--delura-ink)"}}>Delura Studios</h2>
      <p className="mt-3 max-w-2xl" style={{color:"var(--delura-muted)"}}>Creative direction, decor, signage, and immersive environments that make every space feel personal.</p>
      <div className="grid gap-6 sm:grid-cols-3 mt-6">
        {["Tablescapes","Florals","Signage"].map(k=> (
          <div key={k} className="card p-6">
            <div className="font-semibold" style={{color:"var(--delura-ink)"}}>{k}</div>
            <p className="mt-2 text-sm" style={{color:"var(--delura-muted)"}}>Thoughtful details and cohesive design from concept to install.</p>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <Link className="btn btn-primary" to="/contact">Start a Design Brief</Link>
      </div>
    </section>
    <Footer/>
  </>);
}

function Experiences(){
  const items=[
    {t:"Candlelight Tasting – Spring", d:"Seasonal multi‑course with wine pairings", when:"Apr 27", where:"Inman Park"},
    {t:"Summer Garden Dinner", d:"Al fresco long‑table with spritz bar", when:"Jun 15", where:"Private Garden"},
    {t:"Holiday Feast", d:"Festive menu & zero‑proof pairings", when:"Dec 7", where:"Midtown Loft"},
  ];
  return (<>
    <Hero title="Experiences by Delura" ctas={false}/>
    <section className="container mt-12">
      <div className="grid gap-6 sm:grid-cols-3">
        {items.map(it=> (
          <div key={it.t} className="card p-6">
            <div className="font-semibold" style={{color:"var(--delura-ink)"}}>{it.t}</div>
            <p className="text-sm mt-1" style={{color:"var(--delura-muted)"}}>{it.d}</p>
            <div className="mt-3 text-sm">{it.when} • {it.where}</div>
            <button className="btn btn-primary mt-4">Get Tickets</button>
          </div>
        ))}
      </div>
    </section>
    <Footer/>
  </>);
}

function GalleryPage(){
  const all = [
    {src:"https://images.unsplash.com/photo-1514511542287-5fd3fec8c3df?q=80&w=1600&auto=format&fit=crop", tag:"Table", cap:"Tablescape — candlelight"},
    {src:"https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?q=80&w=1600&auto=format&fit=crop", tag:"Events", cap:"Guests — toast"},
    {src:"https://images.unsplash.com/photo-1528697203043-733bfdca10a0?q=80&w=1600&auto=format&fit=crop", tag:"Studios", cap:"Floral detail"},
    {src:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop", tag:"Table", cap:"Plating — entrée"},
    {src:"https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1600&auto=format&fit=crop", tag:"Events", cap:"Dance floor — blur"},
    {src:"https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop", tag:"Studios", cap:"Signage & decor"}
  ];
  const [filter,setFilter]=React.useState("All");
  const items = filter==="All"? all : all.filter(i=>i.tag===filter);
  const Chip = ({label}) => (
    <button onClick={()=>setFilter(label)} className={`px-4 py-2 rounded-full text-sm mr-2 mb-2 ${filter===label? 'btn btn-primary' : 'card'}`}>{label}</button>
  );
  return (<>
    <Hero title="Gallery" ctas={false}/>
    <section className="container mt-10">
      <div className="mb-4">
        {["All","Table","Events","Studios"].map(l=> <Chip key={l} label={l}/>) }
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it,idx)=> (
          <figure key={idx} className="card overflow-hidden">
            <img src={it.src} alt={it.cap} className="w-full h-64 object-cover"/>
            <figcaption className="p-4 text-sm" style={{color:"var(--delura-muted)"}}>{it.cap} • <b>{it.tag}</b></figcaption>
          </figure>
        ))}
      </div>
    </section>
    <Footer/>
  </>);
}

function MultiStepForm(){
  const [step, setStep] = React.useState(1);
  const [status, setStatus] = React.useState('idle');
  const [error, setError] = React.useState('');
  const [data, setData] = React.useState({ arm:"Delura Table", name:"", email:"", date:"", guests:"", budget:"", notes:"", website:"" });
  const next=()=>setStep(s=>Math.min(3,s+1)); const back=()=>setStep(s=>Math.max(1,s-1));
  const upd = (k)=>(e)=>setData({...data, [k]: e.target.value});

  async function submit(){
    if(status==='loading') return;
    setError(''); setStatus('loading');
    try{
      const res = await fetch('/api/quote', {
        method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(data)
      });
      if(!res.ok){ const t = await res.text(); throw new Error(t||'Request failed'); }
      setStatus('success');
    }catch(e){ setError(e.message||'Something went wrong'); setStatus('error'); }
  }

  if(status==='success'){
    return (
      <div className="card p-8">
        <h4 className="text-xl font-serif mb-2" style={{color:'var(--delura-ink)'}}>Thank you! 🎉</h4>
        <p className="text-sm" style={{color:'var(--delura-muted)'}}>Your inquiry has been received. We’ll reply within 1–2 business days.</p>
      </div>
    );
  }

  return (
    <div className="card p-6 sm:p-8">
      <div className="mb-6 text-sm" style={{color:"var(--delura-muted)"}}>Step {step} of 3</div>
      <input type="text" value={data.website} onChange={upd('website')} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      {step===1 && (<div className="grid gap-4">
        <select className="p-3 rounded-xl border" value={data.arm} onChange={upd('arm')}>
          <option>Delura Table</option><option>Delura Events</option><option>Delura Studios</option>
        </select>
        <div className="grid sm:grid-cols-2 gap-4">
          <input className="p-3 rounded-xl border" placeholder="Your Name" value={data.name} onChange={upd('name')} required/>
          <input className="p-3 rounded-xl border" placeholder="Email" value={data.email} onChange={upd('email')} required/>
        </div>
        <button type="button" onClick={next} className="btn btn-primary self-start">Next</button>
      </div>)}
      {step===2 && (<div className="grid gap-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <input className="p-3 rounded-xl border" placeholder="Date (or timeframe)" value={data.date} onChange={upd('date')}/>
          <input className="p-3 rounded-xl border" placeholder="Guest count" value={data.guests} onChange={upd('guests')}/>
        </div>
        <select className="p-3 rounded-xl border" value={data.budget} onChange={upd('budget')}>
          <option value="">Budget range</option>
          <option>$5k–$10k</option><option>$10k–$25k</option><option>$25k–$50k</option><option>$50k+</option>
        </select>
        <div className="flex gap-3">
          <button type="button" onClick={()=>setStep(1)} className="btn btn-outline">Back</button>
          <button type="button" onClick={next} className="btn btn-primary">Next</button>
        </div>
      </div>)}
      {step===3 && (<div className="grid gap-4">
        <textarea rows={5} className="p-3 rounded-xl border" placeholder="Vision, notes, dietary needs, venue…" value={data.notes} onChange={upd('notes')}/>
        {status==='error' && <div className="text-sm" style={{color:'#b91c1c'}}>Error: {error}</div>}
        <div className="text-sm" style={{color:"var(--delura-muted)"}}>
          By submitting, you agree we may contact you about your event. We’ll route to <b>{data.arm}</b>.
        </div>
        <div className="flex gap-3">
          <button type="button" onClick={()=>setStep(2)} className="btn btn-outline">Back</button>
          <button type="button" onClick={submit} disabled={status==='loading'} className="btn btn-primary">{status==='loading'?'Sending…':'Request a Quote'}</button>
        </div>
      </div>)}
    </div>
  );
}

function Contact(){
  return (<>
    <Hero title="Start Your Proposal" ctas={false}/>
    <section className="container mt-12 grid gap-10 sm:grid-cols-2">
      <div>
        <h3 className="text-2xl font-serif" style={{color:"var(--delura-ink)"}}>Tell us about your event</h3>
        <p className="mt-2" style={{color:"var(--delura-muted)"}}>Choose your Delura arm, then share details. We’ll reply within 1–2 business days.</p>
        <div className="mt-6"><MultiStepForm/></div>
      </div>
      <aside className="text-sm" style={{color:"var(--delura-muted)"}}>
        <div className="card p-6">
          <h4 className="text-lg font-semibold mb-2" style={{color:"var(--delura-ink)"}}>What to expect</h4>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Discovery call to clarify vision & constraints.</li>
            <li>Initial proposal with mood, menus, & budget ranges.</li>
            <li>Refinements, tastings (Table), design board (Studios), timeline (Events).</li>
          </ol>
        </div>
      </aside>
    </section>
    <Footer/>
  </>);
}

export default function DeluraSite(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/table" element={<TablePage/>} />
        <Route path="/events" element={<EventsPage/>} />
        <Route path="/studios" element={<StudiosPage/>} />
        <Route path="/experiences" element={<Experiences/>} />
        <Route path="/gallery" element={<GalleryPage/>} />
        <Route path="/praise" element={<PraisePage/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}
