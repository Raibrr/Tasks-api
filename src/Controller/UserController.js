const UserModel = require('../Model/UserModel')


exports.list = async () => {
  const response = await UserModel.fetchAll();
  return response;
}

exports.save = () => {
  console.log('save de usercont')
}
