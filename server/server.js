// server/server.js
import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ SMS পাঠানোর API (GreenWeb)
app.post("/send-sms", async (req, res) => {
  const { phone, name, productID } = req.body;

  // 🟣 নিজের GreenWeb Token বসাও এখানে 👇
  const token = "a1b2c3d4e5f6";

  const message = `Hello ${name}, your order for Product ID: ${productID} has been received successfully. Thank you for shopping with Furniture Collection!`;

  const smsUrl = `https://api.greenweb.com.bd/api2.php?token=${token}&to=${phone}&message=${encodeURIComponent(
    message
  )}`;

  try {
    const response = await fetch(smsUrl);
    const result = await response.text();
    console.log("✅ SMS Sent:", result);
    res.json({ success: true, message: "SMS Sent Successfully" });
  } catch (error) {
    console.error("❌ SMS Send Error:", error);
    res.status(500).json({ success: false, message: "SMS Failed" });
  }
});

// ✅ Server Run
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
