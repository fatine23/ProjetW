import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_PASSWORD,
  },
});

const corsMiddleware = cors({
  origin: process.env.FRONTEND_URL,
});

export default function handler(req, res) {
  return new Promise((resolve, reject) => {
    corsMiddleware(req, res, () => {
      const { name, email, message } = req.body;

      if (!name || !email || !message) {
        return reject(new Error("Tous les champs doivent être remplis."));
      }

      const mailOptions = {
        from: email,
        to: process.env.GMAIL_EMAIL,
        subject: `Nouveau message de ${name}`,
        text: message,
      };

      return transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
          return reject(new Error("Une erreur est survenue. Veuillez réessayer plus tard."));
        }

        console.log(info);
        return resolve(res.status(200).json({ message: "Message envoyé avec succès !" }));
      });
    });
  });
}
