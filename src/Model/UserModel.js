const bookshelf = require('./index');

const Users = bookshelf.model('Users', {
    tableName: 'users',
    hasTimestamps: ['created_at', 'updated_at']
});

module.exports = Users;