// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  return await db.collection('book').where({
    price: event.price// 填入身份证号码
  }).get()
}
