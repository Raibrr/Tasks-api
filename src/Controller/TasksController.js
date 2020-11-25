const TasksModel = require('../Model/TasksModel');

exports.listAllTasks = async () => {
    const response = await TasksModel.fetchAll();
    return response;
};