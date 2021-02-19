import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// Configurations
dotenv.config(); 

// Initializations 
const app: express.Application = express();
const port = process.env.PORT;

app.get('/', (req: express.Request, res: express.Response) => {
    res.send("Hello World");
})

// // Components
// import UserRoutes from "./Routes/UserRoutes";

// // Middlewares
// app.use(cors());
// app.use('api/users', UserRoutes);
// app.use('');

// Listening to Server
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));