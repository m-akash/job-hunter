const jwt = require("jsonwebtoken");

const AuthController = {
  async login(req, res) {
    const user = req.body;
    const token = jwt.sign(user, process.env.SECRET_KEY, {
      expiresIn: "23h",
    });
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      })
      .send({ success: true });
  },
  async logout(req, res) {
    res
      .clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      })
      .send({ success: true });
  },
};

module.exports = AuthController;
