const UserModel = require('../Model/UserModel')
const {UserSerializer} = require('../Types/UserSerializer')

//Function to GET all Users
exports.listAll = async () => {
    const response = await UserModel.fetchAll();
    return response;
}

//Function to GET one User
exports.list = async (reqId) => {
  const model = new UserModel();
  const response = await model.query({ where: { id: reqId } }).fetch();
  return response
}

//Function to POST
exports.save = async (data) => {
    const build = UserSerializer(data);
    const model = new UserModel();
    const response = await model.save(build);
    return response;
}

//Function to UPDATE information of user
/* exports.update = async (reqId) => {
    const response = await
} */

//function to DELETE
exports.remove = async (reqId) => {
    const model = new UserModel();
    let qb = model.query();
    const response = await qb.where({ id: reqId }).del();
    return response;
}