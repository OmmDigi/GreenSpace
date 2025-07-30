"use server";

import { ApiResponse } from "@/lib/ApiResponse";
import { sendMail } from "@/lib/send-mail";

export async function handleHomeContactForm(formData: FormData) {
  try {
    await sendMail({
      title: "Enquiry Form Greenspace Website",
      subject: "Home Page Contact Form",
      html: `
      <h3>User Name : ${formData.get("name")}</h3>
      <h3>User Contact Number : ${formData.get("phone")}</h3>
      <h3>User Email : ${formData.get("email")}</h3>
      <h3>User Message : ${formData.get("message")}</h3>
    `,
    });
    return ApiResponse(200, "Contact Info Sended");
  } catch {
    return ApiResponse(500, "Something Went Wrong While Sending Email");
  }
}
