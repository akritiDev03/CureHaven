# CureHaven

CureHaven is a full-stack hospital management platform for seamless doctor-patient appointments and admin operations.

It is built with the **MERN stack (MongoDB, Express, React, Node.js)**.  
It provides separate interfaces for **users**, **doctors**, and **admins** to manage appointments, availability, and hospital operations efficiently.


---


## Live Demo

- **User Frontend:** [https://curehaven-frontend.onrender.com](https://curehaven-frontend.onrender.com)

- **Admin Dashboard:** [https://curehaven-admin.onrender.com](https://curehaven-admin.onrender.com)


- **Backend API:** [https://curehaven-backend.onrender.com](https://curehaven-backend.onrender.com)


---


## Features

### 👥 Users
- Register, log in, and manage profiles
- Search doctors and view their availability
- Book and cancel appointments
- View appointment history
- Real-time notifications using **react-toastify**
- Layout adapts beautifully on mobile, tablet, and desktop screens.

### 👨‍⚕️ Doctors
- Register and log in
- Manage profile details and availability
- View booked appointments

### 🛠️ Admin
- Secure dashboard to manage doctors and appointments
- Approve/reject doctor registrations
- Cancel any appointment
- Monitor platform analytics


---


## Folder Structure

```
CureHaven/
│
├── backend/      # Node.js/Express API,MongoDB models, controllers, routes
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── server.js
│
├── frontend/     # User-facing React app
│   ├── public/
│   ├── src/
│   ├── .env
│   └── package.json
│
├── admin/        # Admin & doctor React dashboard
│   ├── public/
│   ├── src/
│   ├── .env
│   └── package.json
│
└── README.md
```


---


## Tech Stack

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Authentication:** JWT
- **File Uploads:** Cloudinary
- **Notifications:** react-toastify


---


## Getting Started (Local Development)

### 1. Clone the repository

```bash
git clone https://github.com/akritiDev03/CureHaven.git
cd CureHaven
```

### 2. Install dependencies

```bash
cd backend
npm install

cd ../frontend
npm install

cd ../admin
npm install
```

### 3. Set up environment variables

- **backend/.env**
  ```
  MONGODB_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret
  CLOUDINARY_CLOUD_NAME=your_cloudinary_name
  CLOUDINARY_API_KEY=your_cloudinary_api_key
  CLOUDINARY_API_SECRET=your_cloudinary_api_secret
  ```
- **frontend/.env**
  ```
  VITE_BACKEND_URI=http://localhost:4000
  ```
- **admin/.env**
  ```
  VITE_BACKEND_URI=http://localhost:4000
  ```

### 4. Run the backend

```bash
cd backend
npm start
```

### 5. Run the frontend

```bash
cd frontend
npm run dev
```

### 6. Run the admin dashboard

```bash
cd admin
npm run dev
```


---


## Deployment

- The project uses [Render](https://render.com/) for deployment.
- Update `.env` files in `frontend` and `admin` to use the deployed backend URL:
  ```
  VITE_BACKEND_URI=https://curehaven-backend.onrender.com
  ```


---


## Usage

- **User:** Register, login, book appointments, view doctors, manage profile.
- **Doctor:** Login, manage profile, view appointments, update availability.
- **Admin:** Login, add/manage doctors, view/cancel appointments, dashboard analytics.


---


## License

MIT


---

**For any issues or contributions, please open an issue or pull request.**

---

## Contact
📧 Email: [akritisingh0309@gmail.com](mailto:akritisingh0309@gmail.com)  
🐱 GitHub: [github.com/akritiDev03](https://github.com/akritiDev03) 