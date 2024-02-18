import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import productRoutes from "../routes/product.js";

class Server {
  constructor() {
    this.app = express();
    dotenv.config();
    this.port = process.env.PORT;
    this.productsPath = "/api/product";

    // Middlewares
    this.middlewares();

    // Rutas de mi aplicación
    this.routes();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Lectura y parseo del body
    this.app.use(express.json());

    // Directorio público
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.productsPath, productRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

export default Server;
