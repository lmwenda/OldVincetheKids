"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _UserRoutes = _interopRequireDefault(require("./Routes/UserRoutes.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Initializations
_dotenv["default"].config();

var app = (0, _express["default"])();
var port = 5000; // Database Connection 

_mongoose["default"].connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, function () {
  return console.log("Connected to Database.");
}); // Middlewares


app.use((0, _cors["default"])());
app.use((0, _bodyParser["default"])());
app.use(_express["default"].json()); // Route Middlewares

app.use("/api/users", _UserRoutes["default"]); // Listening

app.listen(port, function () {
  return console.log("Server running on http://localhost:".concat(port, "/"));
});