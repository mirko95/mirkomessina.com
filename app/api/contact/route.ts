import nodemailer from "nodemailer"
import { NextResponse } from "next/server"
import { z } from "zod"
import { siteConfig } from "@/lib/site"

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(10),
  type: z.enum(["project", "reservation"]).default("project"),
  date: z.string().optional().or(z.literal("")),
  guests: z.union([z.string(), z.number()]).optional(),
  honeypot: z.string().optional().or(z.literal("")),
})

function getMailer() {
  const user = process.env.GMAIL_USER
  const appPassword = process.env.GMAIL_APP_PASSWORD

  if (!user || !appPassword) {
    throw new Error("Missing Gmail SMTP credentials")
  }

  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user,
      pass: appPassword,
    },
  })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = contactSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Please fill out the required fields correctly." },
        { status: 400 },
      )
    }

    const data = parsed.data

    if (data.honeypot) {
      return NextResponse.json({ ok: true })
    }

    const transporter = getMailer()
    const to = process.env.CONTACT_TO_EMAIL || siteConfig.email
    const subjectPrefix = data.type === "reservation" ? "Reservation request" : "Website inquiry"
    const subject = `${subjectPrefix}: ${data.subject}`

    const lines = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Subject: ${data.subject}`,
      `Type: ${data.type}`,
    ]

    if (data.date) {
      lines.push(`Date: ${data.date}`)
    }

    if (data.guests !== undefined && data.guests !== "") {
      lines.push(`Guests: ${data.guests}`)
    }

    lines.push("", data.message)

    await transporter.sendMail({
      from: `"${siteConfig.name}" <${process.env.GMAIL_USER}>`,
      to,
      replyTo: data.email,
      subject,
      text: lines.join("\n"),
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Contact form error:", error)

    const smtpError = error as {
      code?: string
      responseCode?: number
      message?: string
    }

    if (smtpError.code === "EAUTH" || smtpError.responseCode === 534) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Gmail authentication failed. Use a 16-character Gmail App Password with 2-Step Verification enabled, then restart the dev server.",
        },
        { status: 401 },
      )
    }

    return NextResponse.json(
      { ok: false, error: "The message could not be sent. Please try again later." },
      { status: 500 },
    )
  }
}
