"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = verifyToken;

var _jsonWebToken = _interopRequireDefault(require("json-web-token"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function verifyToken(req, res, next) {
  var token = req.header('auth-token');
  if (!token) return res.status(400).send("Invalid Access Token.");

  try {
    var verified = _jsonWebToken["default"].verify(token, process.env.SECRET_TOKEN);

    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid Token:", err);
  }
}