import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 3000;
app.use(express.json());
mongoose
  .connect(
    "mongodb+srv://express-mongoose:z5zfBWhSZ5hIatMw@cluster0.jato0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("MongoDB connected successfully"))
  .catch((error) => console.log("MongoDB connection error ", error));
const People = mongoose.model("People", {
  name: String,
  age: Number,
  place: String,
});

app
  .post("/", (req, res) => {
    const { name, age, place } = req.body;
    const person = new People({ name, age, place });
    person.save();

    res.send("Success");
  })

  .listen(port, () => console.log("Server running on port ", port));
