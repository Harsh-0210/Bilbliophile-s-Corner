import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

// const PORT = process.env.PORT || 3000;
const URI = process.env.MongoDBURI;

// connect to mongoDB
mongoose
  .connect(URI)
  .then(() => console.log("Connected to mongoDB"))
  .catch((err) => console.error("Could not connect to mongoDB", err));

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Code for deployment
if(process.env.NODE_ENV === "production"){
  const dirPath = path.resolve();
  app.use(express.static("./Frontend/dist"));
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(dirPath,"./Frontend/dist","index.html"));
  })
}
app.listen(PORT, () => {
  console.log(`Server is listening on port ${3000}`);
});
