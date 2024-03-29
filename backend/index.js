const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth");
const app = express();
const session = require("express-session")

//Setup the session middleware
app.use(session({
  secret:process.env.SESSION_SECRET,
  resave:true,
  saveUninitialized:true,
  cookie:{maxAge:1000*60*60} //1 hour
}));
  
  app.use(passport.initialize());
  app.use(passport.session());
  
  app.use(
    cors({
      origin: "http://localhost:3000",
      methods: "GET,POST,PUT,DELETE",
      credentials: true,
    })
  );
  
  app.use("/auth", authRoute);
  
  app.listen("5000", () => {
    console.log("Server is running!");
  });