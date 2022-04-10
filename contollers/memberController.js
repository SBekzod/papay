const Member = require("../models/Member");

let memberController = module.exports;

memberController.home = (req, res) => {
  console.log("GET cont.home");
  res.send("home sahifadasiz");
};

memberController.signup = async (req, res) => {
  try {
    console.log("POST cont.signup");
    const member = new Member();
    console.log(req.body);
    const result = await member.signupData(req.body);
    res.json({ state: "success", data: result });
  } catch (err) {
    console.log(err.message);
    res.json({ state: "fail", error: err.message });
  }
};

memberController.login = async (req, res) => {
  try {
    console.log("POST cont.login");
    const member = new Member();
    const result = await member.loginData(req.body);
    res.json({ state: "success", data: result });
  } catch (err) {
    console.log(err.message);
    res.json({ state: "fail", error: err.message });
  }
};

memberController.logout = (req, res) => {
  console.log("GET cont.logout");
  res.send("logout sahifadasiz");
};
