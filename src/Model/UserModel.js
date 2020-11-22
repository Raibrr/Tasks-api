const bookshelf = require('./index');

const Users = bookshelf.model('Users', {
    tableName: 'users',
    hasTimestamps: ['created_at', 'update_at']
});

module.exports = Users;