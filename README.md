# Tours API

A RESTful API for managing tour packages, built with **Express**, **MongoDB**, and **Mongoose**. Supports admin authentication, tour management, contact form submissions, and more.

---

## Features

-  Admin login with JWT authentication
-  Public access for viewing tours
-  Admin-only access for creating, updating, and deleting tours
-  Image upload support for tours and tour guides
-  Contact form submission handling
-  Tour metadata: services, tags, pricing, availability, guides
-  Search, pagination, filtering for tours

---

## Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB (Atlas)
- **ORM**: Mongoose
- **Auth**: JWT
- **File Upload**: Multer
- **Environment**: dotenv
- **Deployment**: Render (backend), Netlify (frontend)

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/shinartyom/tours_api.git
cd tours-api
2. Install dependencies
bash
Copy
Edit
npm install
3. Environment variables
Create a .env file:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
4. Run locally
bash
Copy
Edit
npm run dev
Project Structure
bash
Copy
Edit
tours-api/
├── config/           # Database config
├── controllers/      # Route logic
├── middleware/       # Auth, error handling, file upload
├── models/           # Mongoose models
├── routes/           # Express routes
├── scripts/          # Seeder scripts
├── uploads/          # Uploaded images
├── server.js         # Main entry point
└── .env              # Environment variables
Authentication
Only admins can create/update/delete tours

Guests can read tours

Login with email/password → get JWT → use Authorization: Bearer <token> header

 Contact Form
Send contact submissions to:

bash
Copy
Edit
POST /api/contact
Fields: name, email, phoneNumber, subject, message

 Seed Data
Run this to populate tour guides and sample tours:

bash
Copy
Edit
node scripts/seedTourGuides.js
node scripts/seedTours.js

Deployment
Backend
Deployed using Render
Set your environment variables on Render dashboard.

Frontend
Deployed using Netlify
Make sure to use the backend URL in frontend config (CONFIG.serverUrl)

Contributing
Fork the repo

Create your feature branch (git checkout -b feat/feature-name)

Commit your changes (git commit -m 'feat: add feature')

Push to the branch (git push origin feat/feature-name)

Create a Pull Request
