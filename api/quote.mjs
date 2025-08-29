// /api/quote.mjs  (ESM for Vercel)
import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
  try {
    const body = req.body || {};
    // honeypot
    if (body.website) return res.status(200).json({ ok: true, skipped: 'honeypot' });

    const resend = new Resend(process.env.RESEND_API_KEY);
    const to = process.env.TO_EMAIL;
    const from = process.env.FROM_EMAIL || 'delura@onresend.com';
    if (!to) return res.status(400).send('Missing TO_EMAIL env var');

    const fields = [
      ['Arm', body.arm], ['Name', body.name], ['Email', body.email],
      ['Date/Timeframe', body.date], ['Guests', body.guests],
      ['Budget', body.budget], ['Notes', body.notes]
    ];
    const esc = s => (s || '').toString().replace(/[<>&]/g, m => ({ '<':'&lt;','>':'&gt;','&':'&amp;' }[m]));
    const html = `<div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto">
      <h2>New Delura Inquiry</h2>
      <table style="border-collapse:collapse">
        ${fields.map(([k,v])=>`<tr><td style="padding:6px 12px;font-weight:600">${k}</td><td style="padding:6px 12px">${esc(v)}</td></tr>`).join('')}
      </table>
    </div>`;

    await resend.emails.send({
      from, to,
      subject: `New ${body.arm || 'Inquiry'} — ${body.name || 'No Name'}`,
      html
    });

    // Optional webhook to Sheets/Zapier
    const webhook = process.env.SHEETS_WEBHOOK_URL;
    if (webhook && globalThis.fetch) {
      try {
        await fetch(webhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ createdAt: new Date().toISOString(), ...body })
        });
      } catch {}
    }

    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).send('Email failed');
  }
}
