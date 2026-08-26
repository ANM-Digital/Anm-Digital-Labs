import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const port = Number(process.env.PORT) || 8080;

const currentFile = fileURLToPath(import.meta.url);
const currentDirectory = path.dirname(currentFile);
const distributionDirectory = path.join(currentDirectory, "dist");

app.disable("x-powered-by");

app.use(
  express.static(distributionDirectory, {
    index: false,
    maxAge: "1h"
  })
);

app.get("*", (_request, response) => {
  response.sendFile(path.join(distributionDirectory, "index.html"));
});

app.listen(port, "0.0.0.0", () => {
  console.log(`ANM Digital listening on port ${port}`);
});
