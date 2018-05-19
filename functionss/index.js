const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:8080", //"This should be replaced with your client URL",
  optionsSuccessStatus: 200
};
const helmet = require("helmet");
const app = express();
app.use(
  helmet.hsts({
    maxAge: 7776000000,
    includeSubdomains: true
  })
);
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'none'"],
      frameAncestors: ["'none'"]
    }
  })
);
app.use(cors(corsOptions));

app.get("/*", (req, res) => {
  res.json({ message: "Hello World!" });
});

exports.api = functions.https.onRequest(app);
