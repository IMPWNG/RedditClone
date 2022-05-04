const express = require("express");
const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");

const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;
// parse requests of content-type - application/json

app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json('Welcome to CORS server 😁')
})


// simple route
app.get("/cors", (req, res) => {
  res.json({ message: "This has CORS enabled 🎈" });
});



// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
