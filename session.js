
const mongoose = require('mongoose');

//  Schema
const sessionSchema = new mongoose.Schema({
  sessionId: { type: String, required: true, unique: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now, expires: '7d' } // session expire after 7 day
});



// 创建并导出会话模型
const Session = mongoose.model('Session', sessionSchema);

function getSessionUser(sid, Session) {
    const user =  Session.findOne({sessionId: sid}).populate('userId');
    // query 对象调用 populate 方法， 就能返回装载对应 _id 的 document 数组。
    //or return Session.userId.username
    return user;
}


module.exports = {
    Session,
    getSessionUser,
  };

