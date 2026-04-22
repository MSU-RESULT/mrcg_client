import nodemailer from "nodemailer";
export async function handleSubmit(formdata:Formdata){

    "use server"
    const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const message = formData.get("message");

//   Send Email

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS,
    }

})

  await transporter.sendMail({
    from: `"MRGC Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO, // your email
    subject: "New Contact Form Submission",
    html: `
      <h2>New Inquiry</h2>
      <p><b>Name:</b> ${firstName} ${lastName}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b> ${message}</p>
    `,
  });
}