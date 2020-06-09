module.exports = function(url,method,data) {
  let header;
  if (method.toUpperCase()=="GET"){
    header= {'Content-Type': 'application/json'}
  } else if (method.toUpperCase() == "POST") {
    header = { "Content-Type": "application/x-www-form-urlencoded" }
  }
  return new Promise((resolve,reject) => {
    wx.request({
      url,
      method,
      header,
      data,
      success: (res) => {
        if (res.statusCode == 200) {
          resolve(res.data)
        }
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}