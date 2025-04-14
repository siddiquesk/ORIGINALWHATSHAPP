import express from "express";
import dotenv from "dotenv";
import Connection from "./database/db.js";
import apiRoutes from "./routes/apiRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import cors from "cors"
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors({
  origin: ['http://localhost:5173'], // Allow specific frontends
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/",apiRoutes);
app.use("/",messageRoutes);
// ✅ First connect to DB, then start server
const startServer = async () => {
  await Connection(); // waits for successful DB connection
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
  });
};

startServer();








/*

*/
