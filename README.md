# Assignment Submission Portal

## Setup

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file in the root with MongoDB URI, JWT secret, and port.
4. Start the server using `npm start`.

## API Endpoints

- `POST /api/auth/register` - Register a new user/admin.
- `POST /api/auth/login` - User/admin login.
- `POST /api/assignments/upload` - Upload assignment (User).
- `GET /api/assignments` - Get assignments tagged to admin (Admin).
- `POST /api/assignments/:id/accept` - Accept assignment (Admin).
- `POST /api/assignments/:id/reject` - Reject assignment (Admin).
