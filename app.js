import express from "express";
import cors from "cors";

import tasks from "./routes/tasks.js";
import User from "./routes/login.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/tasks", tasks);
app.use("/user", User);
app.listen(3000, () => {
  console.log("Te escucho");
});
