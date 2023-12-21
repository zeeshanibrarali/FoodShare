import express from "express";
import cors from "cors";
import { fileURLToPath } from 'url';
import path from "path";
import "./loadEnvironment.mjs";
// import records from "./routes/record.mjs";
import homeRoute from "./routes/homeRoute.mjs";
import dashboardRoute from "./routes/dashboardRoute.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 5050;
const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../client")));

app.use(cors());
app.use(express.json());

// app.use("/record", records);

// Use the home route for the root path ("/")
app.use("/", homeRoute);
app.use("/dashboard", dashboardRoute);

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
