require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./utils/db");
const authRoutes = require("./routes/auth-route");
const contactRoute = require("./routes/contact-route");
const errorMiddleware = require("./middlewares/error-middleware");

const PORT = process.env.PORT || 5000;
connectDB();

const app = express();

const corsOptions = {
  origin: process.env.CORS_ORIGIN || "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Define routes
app.use("/api/auth", authRoutes);
app.use("/api", contactRoute);
// Uncomment and use if you have serviceRoute
// app.use("/api/service", serviceRoute);

// Error handling middleware
// app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
