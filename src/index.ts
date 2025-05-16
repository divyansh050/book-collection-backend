import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.routes';
import { errorHandler, routeMiddleware } from './middleware';
// import { clientUse } from 'valid-ip-scope';

// "valid-ip-scope": "^3.4.4" not using this package as this is not geetng installed via npm i
// ->  No matching version found for valid-ip-scope@^3.4.4.

dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin: "https://book-collection-backend-ppju.onrender.com", // Allow only your frontend
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);
app.use(express.json());

// Route Middleware
// app.use(clientUse());s
app.use(routeMiddleware);

// Test Route
app.use("/hello", (_req, res) => {
  res.send("Hello World");
});

// Routes
app.use('/api/auth', authRoutes);


// Error handling
app.use(errorHandler);
console.log("process.env", process.env.MONGODB_URI)
// Database connection
mongoose
  .connect(process.env.MONGODB_URI!)
  .then(() => {
    console.log('Connected to MongoDB');
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  }); 
