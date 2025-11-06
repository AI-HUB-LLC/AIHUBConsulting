import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import validator from "validator";
import rateLimit from "express-rate-limit";

dotenv.config();
const app = express();

app.use(express.json());

app.use(cors({
  origin: ["http://localhost:3000", "https://aihubconsulting.ai"], // ✅ only allow your domain
  methods: ["GET", "POST", "OPTIONS"],   // ✅ typical frontend requests
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 204, // ✅ ensures legacy browser compatibility
}));

// 🚫 Rate limiting — prevent spam
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // limit to 5 emails per minute per IP
});
app.use("/send-email", limiter);

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // 🧩 Input validation
  if (
    !validator.isEmail(email) ||
    validator.isEmpty(name) ||
    validator.isEmpty(message)
  ) {
    return res.status(400).json({ error: "Invalid input." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `${name} <${email}>`,
      to: process.env.TO_EMAIL,
      subject: `New Contact Message from ${name}`,
      text: `
      You received a new message from your website contact form:
      -----------------------------------
      Name: ${name}
      Email: ${email}
      Message:
      ${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send message. Please try again." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
