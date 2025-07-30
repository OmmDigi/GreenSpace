"use server";
import { ApiResponse } from "@/lib/ApiResponse";
import { sendMail } from "@/lib/send-mail";

export async function handleGetQuoteDialogContactForm(formData: FormData) {
  try {
    await sendMail({
      title: "Enquiry Form Greenspace Website",
      subject: "Enquiry Popup Form Enquiry",
      html: `
        <h3>User Name : ${formData.get("name")}</h3>
        <h3>User Contact Number : ${formData.get("phone")}</h3>
        <h3>Requrest Service : ${formData.get("service")}</h3>
        <h3>Location : ${formData.get("location")}</h3>
        <h3>User Message : ${formData.get("message")}</h3>
      `,
    });
    return ApiResponse(200, "Contact Info Sended");
  } catch {
    return ApiResponse(500, "Something Went Wrong While Sending Email");
  }
}
