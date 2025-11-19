import express from "express";
import cors from "cors";
import "dotenv/config";
import {
  getAllCourses,
  getCourseById,
} from "./controllers/courseController.js";
import { checkToken, login, logout } from "./controllers/authController.js";

// Initialize Express
const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://tkminilms.vercel.app",
  "https://www.youtube.com",
];

// Middlewares
app.use(express.json());
app.use(cors({ origin: allowedOrigins }));

// Routes
app.get("/", (req, res) => res.send("API Working"));
app.post("/api/auth/login", login);
app.post("/api/auth/check", checkToken);
app.post("/api/auth/logout", logout);
app.get("/api/courses/all", getAllCourses);
app.get("/api/courses/:id", getCourseById);

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
// app.listen(PORT, "0.0.0.0", () => {
//   console.log(`Server running at http://0.0.0.0:${PORT}`);
// });
