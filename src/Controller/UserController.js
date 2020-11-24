const UserModel = require('../Model/UserModel')
const {UserSerializer} = require('../Types/UserSerializer')


exports.listAll = async () => {
    const response = await UserModel.fetchAll();
    return response;
}

exports.list = async () => {
  const model = new UserModel();
  const response = await model.query({ where: { id: 1 } })
                              .fetch();
  return response
}

exports.save = async (data) => {
    const build = UserSerializer(data);
    const model = new UserModel();
    const response = await model.save(build);
    return response;
}
