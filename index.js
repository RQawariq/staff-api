import express from "express";

const app = express();
app.use(express.json());

app.listen(3001, () => {
  console.log(`listening on 3001...`);
});
