import { createClient, SupabaseClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());

app.use(cookieParser());

// Enable CORS for all HTTP methods - FrontEnd Origin
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);


// await SupabaseClient({ url: process.env.SUPABASE_URL });


// simples routes
app.get("/", (req, res) => {
  res.json("Welcome to CORS server 😁");
});
app.get("/cors", (req, res) => {
  res.json({ message: "This has CORS enabled 🎈" });
});

// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
