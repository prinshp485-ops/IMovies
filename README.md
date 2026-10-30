# IMovies — Movie ticket booking made simple

A full-stack MERN-style movie ticket booking project with a React + Vite frontend and Express backend. MongoDB is used when available; if local MongoDB is not running, the API automatically starts in demo/in-memory mode so you can still present the project.

## Requirements
- Node.js 18+ (recommended 20+)
- npm
- Optional: MongoDB Community Server running locally

## Run in VS Code
1. Extract this ZIP.
2. Open the `IMovies-MERN` folder in VS Code.
3. Open Terminal in that folder and run:
   ```bash
   npm run install:all
   npm run dev
   ```
4. Open the URL shown by Vite (usually `http://localhost:5173`).

The backend runs on `http://localhost:5000`. You can check `http://localhost:5000/api/health`.

## Demo admin account
- Email: `admin@imovies.com`
- Password: `Admin@123`

Demo user can register from the app. If MongoDB is available, the seeded admin account is saved in MongoDB. In demo mode, it is recreated at server startup.

## MongoDB (optional but recommended)
The server uses `mongodb://127.0.0.1:27017/imovies` by default. You can change it in `server/.env`. If MongoDB isn't available, it will log that it is running in demo mode instead.

## Features
- Responsive movie browsing, search, and genre filters
- Movie detail, showtime selection, seat selection
- Register/login with JWT authentication
- Ticket booking and booking history
- Prevents duplicate seat booking for the same show in active runtime / MongoDB
- Admin dashboard to add/delete movies and view bookings
- Sample movies seeded automatically
- Friendly empty/error/loading states

## Notes
- Payments are simulated for college-project demonstration; no real payment is taken.
- Demo/in-memory mode resets data when the backend restarts. Use MongoDB for persistent data.
- This is a college demo starter, not a production ticketing/payment system. Before public deployment, add rate limiting, email verification, production secrets, payment provider integration, and stronger concurrency handling.
