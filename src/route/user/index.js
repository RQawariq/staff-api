import express from "express";

const userRouter = express.Router();

userRouter.get("/user/login", async (req, res) => {
  const { user, password } = req.query;
  if (!user || !password) {
    return res.send(`please enter both username and password`);
  }
  if (user === "test") {
    return res.send(`hello ${user} & ${password}`);
  } else {
    return res.send("bad username");
  }
});

export { userRouter };
