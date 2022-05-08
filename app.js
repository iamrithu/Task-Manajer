require("dotenv").config();

const express = require("express");
const app = express();
const port = 3000;
const tasks = require("./routes/task");
const connectDB = require("./db/connect");

//middleware...

app.use(express.json());

//routing...

app.use("/api/v1/tasks", tasks);

//listening...

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is  listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

startServer();
