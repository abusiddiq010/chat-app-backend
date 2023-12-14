// module.exports.register = async (req, res, next) => {
//   const response = await req.body;
//   console.log(response, "This is the body");
//   res.json("see hereee response");
// };

const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const usernameCheck = await User.findOne({ username });
    const emailCheck = await User.findOne({ email });
    if (usernameCheck) {
      return res.json({ msg: "username already exists", status: false });
    }
    if (emailCheck) {
      return res.json({ msg: "Email already exists", status: false });
    }
    const hashedpassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      username,
      password: hashedpassword,
    });

    delete user.password;

    return res.json({ status: true, user });

    //   console.log(response, "This is the body");
    //   res.json("see hereee response");
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    console.log(username, password, "this is the entered credentials");
    const userCheck = await User.findOne({ username });
    console.log(userCheck);
    if (!userCheck) {
      return res.json({ msg: "Incorrect username or password", status: false });
    }
    const isPassword = await bcrypt.compare(password, userCheck.password);
    console.log(isPassword, "checking");
    if (!isPassword) {
      return res.json({ msg: "Incorrect username or password", status: false });
    }
    console.log(userCheck);
    delete userCheck.password;

    console.log(userCheck);

    return res.json({ status: true, userCheck });
  } catch (error) {}
};
module.exports = { register, login };
