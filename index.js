import { ChemicalServer } from "chemicaljs";
import express from "express";

const chemical = new ChemicalServer({
  uv: true,
  scramjet: false,
  rammerhead: false,
});
const port = process.env.PORT || 8080;

chemical.app.use(
  express.static("public", {
    index: "index.html",
    extensions: ["html"],
  })
);

chemical.app.use((req, res) => {
  res.status(404);
  res.sendFile("public/404.html", { root: "." });
});

chemical.server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});