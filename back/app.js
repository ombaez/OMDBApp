const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const morgan = require("morgan");
const db = require("./config/db");
const userRouter = require("./routes/userRouter");
const favRouter = require("./routes/favRouter");
const passport = require("./config/passport");
const staticPath = path.join(__dirname, "public");
const app = express();

app.use(express.static(staticPath));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({ secret: "passport" }));
app.use(morgan("dev"));
app.use(passport.initialize());
app.use(passport.session());
app.use("/usuarios", userRouter);
app.use("/favoritos", favRouter);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public", "index.html"));
});

const port = 3000;

db.sync({ force: true }).then(con => {
  console.log(
    `${con.options.dialect} database ${con.config.database} connected at ${
      con.config.host
    }:${con.config.port}`
  );
  app.listen(port, () => console.log("SERVER LISTENING AT PORT", port));
});

module.exports = { passport };
