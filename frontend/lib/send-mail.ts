"use server";

import nodemailer from "nodemailer";

const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SMTP_PORT = parseInt(process.env.SMTP_PORT || "587");
const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER;

const transporter = nodemailer.createTransport({
  host: SMTP_SERVER_HOST,
  port: SMTP_PORT,
  secure: false,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
});

export async function sendMail({
  sendTo,
  subject,
  title,
  html,
}: {
  sendTo?: string | string[];
  subject: string;
  title: string;
  html?: string;
}) {
  try {
    await transporter.verify();
  } catch (error) {
    console.error(
      "Something Went Wrong",
      SMTP_SERVER_USERNAME,
      SMTP_SERVER_PASSWORD,
      error
    );
    return;
  }
  const sendFrom = process.env.SMTP_SERVER_USERNAME || "";
  const info = await transporter.sendMail({
    from: `${title} <${sendFrom}>`,
    to: sendTo || SITE_MAIL_RECIEVER?.split(","),
    subject: subject,
    html: html ? html : "",
  });
  //   console.log("Message Sent", info.messageId);
  //   console.log("Mail sent to", SITE_MAIL_RECIEVER);
  return info;
}
