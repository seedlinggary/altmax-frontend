import { Resend } from 'resend'

const ALLOWED_BUILDING_TYPES = [
  'Condominium',
  'Cooperative (Co-op)',
  'New Development',
  'Office Condo',
  'HOA',
  'Other',
]

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const {
    name,
    email,
    phone,
    buildingType,
    buildingAddress,
    units,
    challenges,
    website, // honeypot field
  } = req.body || {}

  // Honeypot: bots fill hidden fields, real users never see it
  if (website) {
    return res.status(200).json({ ok: true })
  }

  if (!name || !email || !phone || !buildingAddress) {
    return res.status(400).json({ error: 'Please fill in all required fields.' })
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' })
  }

  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL
  const fromEmail = process.env.CONTACT_FROM_EMAIL

  if (!apiKey || !toEmail || !fromEmail) {
    console.error('Missing Resend environment configuration')
    return res.status(500).json({ error: 'Server is not configured to send email yet.' })
  }

  const resend = new Resend(apiKey)

  const safe = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    phone: escapeHtml(phone),
    buildingType: escapeHtml(buildingType || 'Not specified'),
    buildingAddress: escapeHtml(buildingAddress),
    units: escapeHtml(units || 'Not specified'),
    challenges: escapeHtml(challenges || 'None provided'),
  }

  const html = `
    <div style="font-family: Arial, sans-serif; color: #262827; max-width: 560px;">
      <h2 style="color: #063779; margin-bottom: 4px;">New Proposal Request</h2>
      <p style="color: #555; margin-top: 0;">Submitted via altmaxny.com</p>
      <table style="width: 100%; border-collapse: collapse;">
        <tbody>
          <tr><td style="padding: 8px 0; font-weight: bold; width: 160px;">Name</td><td style="padding: 8px 0;">${safe.name}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Email</td><td style="padding: 8px 0;">${safe.email}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Phone</td><td style="padding: 8px 0;">${safe.phone}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Building Type</td><td style="padding: 8px 0;">${safe.buildingType}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Building Address</td><td style="padding: 8px 0;">${safe.buildingAddress}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Number of Units</td><td style="padding: 8px 0;">${safe.units}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Current Challenges</td><td style="padding: 8px 0; white-space: pre-wrap;">${safe.challenges}</td></tr>
        </tbody>
      </table>
    </div>
  `

  try {
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New Proposal Request — ${name} (${safe.buildingAddress})`,
      html,
    })

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Resend send failed:', err)
    return res.status(502).json({ error: 'We could not send your request. Please call us instead.' })
  }
}

export { ALLOWED_BUILDING_TYPES }
