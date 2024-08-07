import express from "express";
import dotenv from "dotenv";
import process from "process";
import connectDB from "./src/config/db.js";
import authRoutes from './src/routes/authRoutes.js';
import swaggerUi from "swagger-ui-express";
import { swaggerDocs } from "./src/config/swagger.js";

dotenv.config();
const app = express();

connectDB().then(() => {
  app.use(express.json());
  app.use(`/docs`, swaggerUi.serve, swaggerUi.setup(swaggerDocs));

  app.use('/api/auth', authRoutes);

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
