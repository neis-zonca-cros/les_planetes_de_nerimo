import express from "express";
import cors from "cors";
import personnages from "./routes/personnage.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/personnage", personnages);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});