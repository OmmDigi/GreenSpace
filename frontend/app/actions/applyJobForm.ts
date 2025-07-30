"use server";
import { ApiResponse } from "@/lib/ApiResponse";
import { sendMail } from "@/lib/send-mail";

export async function applyJobForm(formData: FormData) {
  const sendTo = process.env.CAREER_MAIL_RECIEVER?.split(",");
  try {
    await sendMail({
      sendTo,
      title: `Job Application ${formData.get("name")}`,
      subject: "Job Application Enquiry",
      html: `
        <h3>Candidate Name : ${formData.get("name")}</h3>
        <h3>Candidate Email : ${formData.get("email")}</h3>
        <h3>Candidate Phone Number : ${formData.get("phone")}</h3>
        <h3>Position Apply For : ${formData.get("position")}</h3>
        <h3>Candidate Experience : ${formData.get("experience")}</h3>
        <h3>More Message : ${formData.get("message")}</h3>
      `,
    });
    return ApiResponse(200, "Application Successfully Submited");
  } catch {
    return ApiResponse(500, "Something Went Wrong While Sending Email");
  }
}
