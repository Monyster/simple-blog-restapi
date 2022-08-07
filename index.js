const express = require("express");
const userRouter = require("./Routes/UserRouter");
const postRouter = require("./Routes/PostRouter");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use("/api", userRouter);
app.use("/api", postRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
