🎬 YouTube Clone (MERN Stack)

A full-stack YouTube Clone application built with the MERN stack (MongoDB, Express.js, React.js, Node.js).
Users can register/login, create channels, upload and manage videos, like/dislike, comment, and explore videos by category or search.

GITHUB PROJECT LINK - https://github.com/SoumyaTiwari13/YouTube-Backend
                      https://github.com/SoumyaTiwari13/YouTube-Frontend

🚀 Tech Stack

Frontend: React (Vite), React Router, Axios

Backend: Node.js, Express.js, ES Modules

Database: MongoDB (Mongoose)

Auth: JWT + bcrypt

Deployment: Render (or any Node hosting + Vercel/Netlify)


🔑 Features

User Authentication (Signup/Login with JWT)

Create & Manage Channels

Upload & Manage Videos (CRUD)

Categories → filter by Music, Games, Education, etc.

Search videos by title/description

Likes / Dislikes on videos

Comments on videos

Auto-increment Views when a video is watched

Responsive React UI





📡 API Endpoints

Auth

POST /register → Register user

POST /login → Login and get JWT

GET /auth/me → Get current user (protected)


Channels

POST /channel → Create channel (protected)

GET /channel/:id → Get channel by ID

GET /channel/:id/videos → Get all videos in a channel


Videos

GET /videos → List videos (supports ?q= search & ?category=)

GET /videos/:id → Get video by ID (increments views)

POST /videos → Create video (protected)

PUT /videos/:id → Update video (protected, uploader only)

DELETE /videos/:id → Delete video (protected, uploader only)

POST /videos//like/increment?action=like|dislike → Like/Dislike video (protected)

GET /category -> GET video based on category

GET /search -> Search video



Comments

GET /comments/:videoId → List comments for a video

POST /comments/:videoId → Add comment (protected)

DELETE /:commentId → Delete comment (protected, owner only)


🚀 Deployment
Backend (Render)

Push backend folder to GitHub

Create new Web Service

Set environment variables (MONGO_URI, JWT_SECRET, CLIENT_URL)

Start command: npm start


Frontend (Netlify / Vercel)

Push frontend folder to GitHub

Create new site in Netlify/Vercel

Build command: npm run build

