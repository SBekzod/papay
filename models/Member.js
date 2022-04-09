const MemberService = require("../schema/member.model");

class Member {
  constructor() {
    this.MemberService = MemberService;
  }

  async signupData(input) {
    try {
      const new_member = new this.MemberService(input);
      const result = await new_member.save();
      result.password = "";
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = Member;
