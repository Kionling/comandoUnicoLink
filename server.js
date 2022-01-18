const express = require("express");
const app = express();
const PORT = process.env.PORT || 4444;
const routes = require("./routes/html-routes");
const sequelize = require("sequelize");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

db.sequelize.sync({ logging: false }).then(() => {
  console.log("Sequelize Database Logging has been turned off.");
});

// Start our Node APP
app.listen(PORT, () => {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});
