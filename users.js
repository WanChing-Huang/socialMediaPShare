
const mongoose = require('mongoose');


// 定义用户 Schema


const WeChatSchema = new mongoose.Schema({
    WeChatID: String,
    QRcode: { type: mongoose.Schema.Types.ObjectId, ref: 'uploads.files' } 
    // profileImage 是一个存储文件的 ObjectId 引用，指向 GridFS 中 uploads.files 集合中的文件文档。
})

const userSchema = new mongoose.Schema({
 // _id: new mongoose.Types.ObjectId(), 
  //not sure would automatic generate or not so I just out it in 
  username: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: Number, 
  facebook: String,
  Instagram: String,
  twitter: String,
  WeChat: [WeChatSchema] ,
  snapChat: String, 
  line: String,
  tikTok: String,
});



function isValidUsername(username) {
    let isValid = true;
    isValid = isValid && username.trim();
    isValid = isValid && username.match(/^[A-Za-z0-9_]+$/);
    return isValid;
}

function isValidPassword(password) {
    let isValid = true;
    isValid = isValid && password.trim();
    isValid = isValid && password.match(/^[A-Za-z0-9_]+$/);
    return isValid;
}


// 创建并导出用户模型
const User = mongoose.model('User', userSchema);

module.exports = {
    User,
    isValidUsername,
    isValidPassword,
  };