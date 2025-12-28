built with Node.js, Express, MongoDB, and Next.js.

## Architecture

- **Backend:** Express.js + MongoDB (Mongoose) + Sessions
- **Frontend:** Next.js 15 (App Router) + TypeScript + Tailwind CSS
- **Authentication:** Session-based with bcrypt password hashing

## Project Structure

```
connect-fork/
├── index.js              # Express server
├── routes/
│   ├── auth.js          # EJS-based auth routes
│   └── api.js           # JSON API routes for Next.js
├── models/
│   └── User.js          # User model
├── config/
│   └── db.js            # MongoDB connection
├── views/               # EJS templates (legacy)
└── client/              # Next.js frontend
    ├── app/             # Pages (App Router)
    ├── components/      # React components
    ├── contexts/        # Auth context
    └── lib/             # API utilities
```

**Terminal 2 - Frontend (Next.js):**
```powershell
cd client
npm run dev
```
Runs on: http://localhost:3000

## API Endpoints

### Backend API (http://localhost:5000/api)

- `POST /api/register` - Register new user
- `POST /api/login` - Login user
- `POST /api/logout` - Logout user
- `GET /api/me` - Get current user (protected)

### Legacy EJS Routes (http://localhost:5000)

- `GET /` - Home page
- `GET /register` - Register page
- `GET /login` - Login page
- `GET /dashboard` - Dashboard (protected)


## Tech Stack

**Backend:**
- Express 5.x
- Mongoose (MongoDB ODM)
- express-session + connect-mongo
- bcryptjs
- cors

**Frontend:**
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- React Context API for state management

## Development Notes

- Backend and frontend run on separate ports (5000 & 3000)
- Sessions are stored in MongoDB
- CORS is configured to allow credentials (cookies)
- Frontend uses `fetch` with `credentials: 'include'` for session cookies

## Production Deployment

2. **Frontend:** Deploy to Vercel
3. Update CORS origin in `index.js` to your production frontend URL
4. Set environment variables for MongoDB URI and session secret
5. Configure session cookies with `secure: true` and proper `sameSite` settings

