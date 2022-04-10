const Definer = require("../lib/mistake");
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

  async loginData(input) {
    try {
      const member = await this.MemberService.findOne(
        {
          mb_nick: input.mb_nick,
        },
        { mb_nick: 1, mb_password: 1 }
      ).exec();
      if (!member) throw new Error(Definer.err1);

      const isMatch = input.mb_password === member.mb_password;
      if (isMatch) {
        return await this.MemberService.findOne({
          mb_nick: input.mb_nick,
        }).exec();
      } else throw new Error(Definer.err2);
    } catch (err) {
      throw err;
    }
  }
}

module.exports = Member;
