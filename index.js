import { ChemicalServer } from "chemicaljs";
import express from "express";

const chemical = new ChemicalServer();
const port = process.env.PORT || 8080;

chemical.use(express.static("public", {
    index: "index.html",
    extensions: ["html"]
}));

chemical.error((req, res) => {
    res.status(404);
    res.send("404 Error");
});

chemical.listen(port, () => {
    console.log(`Oxide listening on port ${port}`);
});
