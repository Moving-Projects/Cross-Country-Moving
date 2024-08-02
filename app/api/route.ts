import { render } from '@react-email/components';
import nodemailer from 'nodemailer'
import Email from './Email'

const mailConfig = {
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "studiomodvis@gmail.com",
        pass: process.env.EMAIL_PASSWORD
    }
};

export async function POST(req: Request) {
    const formData = await req.formData();
    const emailHtml = render(Email({props: formData}))

    const data = {
        to: 'contact@trekmovers.com', 
        subject: 'Quote Request | Cross Country Moving',
        html: emailHtml
    }

    const transporter = nodemailer.createTransport(mailConfig);
    transporter.sendMail(data, (err, info) => {
        if (err) { 
            return Response.json({msg:'Technical Issue!, Please click on resend for verify your Email.'}, {status: 500});
        }
    });
    return Response.json({msg: "Email send succesfully!"}, {status: 201});
  }