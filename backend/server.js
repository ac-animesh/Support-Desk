const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 8000;

const connectDB = require("./config/db");
connectDB();

app.use(express.json({ extended: false }));

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/tickets", require("./routes/ticketRoutes"));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
