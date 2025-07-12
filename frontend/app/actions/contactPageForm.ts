"use server";
import { ApiResponse } from "@/lib/ApiResponse";
import { sendMail } from "@/lib/send-mail";

export async function contactPageForm(formData: FormData) {
  try {
    await sendMail({
      title: `Contact Us Page Form Enquiry`,
      subject: "Enquiry From Contact Us Page Green Space Interior",
      html: `
        <h3>Name : ${formData.get("name")}</h3>
        <h3>Email : ${formData.get("email")}</h3>
        <h3>Phone Number : ${formData.get("phone")}</h3>
        <h3>Service Required : ${formData.get("service")}</h3>
        <h3>Message : ${formData.get("message")}</h3>
      `,
    });
    return ApiResponse(200, "Successfull");
  } catch {
    return ApiResponse(500, "Something Went Wrong While Sending Email");
  }
}
