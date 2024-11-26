import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";
import createUserTable from "./data/createUserTable.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", userRoutes);

// Error handling middleware
app.use(errorHandler);

// Create table before starting the server
createUserTable();

// Test PostgreSQL connection
app.get("/", async (req, res) => {
  const result = await pool.query("SELECT current_database()");
  console.log(result.rows);
  res.send(`The database name is : ${result.rows[0].current_database}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
