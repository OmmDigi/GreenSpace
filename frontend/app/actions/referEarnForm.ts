"use server";
import { ApiResponse } from "@/lib/ApiResponse";
import { sendMail } from "@/lib/send-mail";

export async function referEarnForm(formData: FormData) {
  const yourName = formData.get("yourName");
  const friendName = formData.get("friendName");
  try {
    await sendMail({
      title: "Refer And Earn Form From Green Space Interior",
      subject: `${yourName} Want To Refer ${friendName}`,
      html: `
        <h3>Refer From : ${yourName}</h3>
        <h3>Refer From Contact : ${formData.get("yourPhone")}</h3>
        <h3>Refer To : ${friendName}</h3>
        <h3>Refer Tp Contact : ${formData.get("friendPhone")}</h3>
      `,
    });
    return ApiResponse(200, "Referral Successfully Sent");
  } catch {
    return ApiResponse(500, "Something Went Wrong While Sending Email");
  }
}
