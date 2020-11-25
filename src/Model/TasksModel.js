const bookshelf = require('./index');

const Tasks = bookshelf.model('Tasks', {
    tableName: 'tasks',
    hasTimestamps: ['created_at', 'updated_at']
});

module.exports = Tasks;