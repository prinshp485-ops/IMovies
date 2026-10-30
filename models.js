import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], default: "user" }
}, { timestamps: true });

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, default: "Drama" },
  duration: { type: String, default: "2h 10m" },
  rating: { type: Number, default: 8.0 },
  year: { type: Number, default: 2025 },
  language: { type: String, default: "Hindi" },
  description: { type: String, default: "An exciting cinematic experience." },
  poster: { type: String, default: "" },
  price: { type: Number, default: 180 },
  showtimes: { type: [String], default: ["10:30 AM", "2:00 PM", "6:30 PM", "9:45 PM"] }
}, { timestamps: true });

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  movie: { type: mongoose.Schema.Types.ObjectId, ref: "Movie", required: true },
  movieTitle: String,
  date: String,
  showtime: String,
  seats: [String],
  total: Number,
  status: { type: String, default: "Confirmed" }
}, { timestamps: true });

export const User = mongoose.model("User", userSchema);
export const Movie = mongoose.model("Movie", movieSchema);
export const Booking = mongoose.model("Booking", bookingSchema);
