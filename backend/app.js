    import express from "express";
    import cors from "cors";
    import cookieParser from "cookie-parser";
    import fileUpload from "express-fileupload";
    import { errorMiddleware } from "./middlewares/error.js";
    import reservationRouter from "./routes/reservationRoute.js"; 

    const app = express();

    app.use(cors({
      origin: process.env.FRONTEND_URL, 
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      credentials: true,
      allowedHeaders: ["Content-Type", "Authorization"],
    }));

    app.use(cookieParser());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(fileUpload({
      useTempFiles: true,
      tempFileDir: "/tmp/",
    }));

    app.use("/api/v1/reservation", reservationRouter);

    app.use(errorMiddleware);

    export default app;
