import dotenv from 'dotenv';
dotenv.config();

import app from "./app.js";
import { dbConnection } from './database/dbConnection.js'; // Correct import name

// Call the database connection function with the correct name
dbConnection();

app.listen(process.env.PORT, () => {
    console.log(`SERVER HAS STARTED AT PORT ${process.env.PORT}`);
});