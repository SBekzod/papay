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
    res.json({state: "success", data: result});
  } catch (err) {
    console.log(err.message);
    res.json({ state: "fail", data: null });
  }
};

memberController.login = (req, res) => {
  console.log("POST cont.login");
  res.send("login sahifadasiz");
};

memberController.logout = (req, res) => {
  console.log("GET cont.logout");
  res.send("logout sahifadasiz");
};
