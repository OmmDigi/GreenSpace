"use server";

import { ApiResponse } from "@/lib/ApiResponse";
import { sendMail } from "@/lib/send-mail";
import { IMultipForm } from "@/types";

export async function multiStepForm(formData: IMultipForm) {
  try {
    await sendMail({
      title: "Multiple Step Form Service Enquery Form Greenspace Website",
      subject: "Page Contact Form",
      html: `
      <h3>Floor Plan : ${formData.floorPlan}</h3>
      <h3>Budget : ${formData.budget}</h3>
      <h3>Requirements : ${formData.requirements.join(", ")}</h3>
      <h3>Contact Details ::</h3>
      <p>Name : ${formData.name}</p>
      <p>Phone Number : ${formData.phone}</p>
      <p>Email Address : ${formData.email}</p>
      <p>Location : ${formData.location}</p>
    `,
    });
    return ApiResponse(200, "Contact Info Sended");
  } catch {
    return ApiResponse(500, "Something Went Wrong While Sending Email");
  }
}
