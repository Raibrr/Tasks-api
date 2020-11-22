const tableName = 'users'

exports.up = (knex) => knex.schema.createTable(tableName, (table) => {
    table.increments('id').unsigned();
    table.string('user_name')
        .unique()
        .notNull();
    table.string('email')
        .unique()
        .notNull();
    table.string('password').notNull();
    table.timestamps();
});

exports.down = (knex) => knex.schema.dropTable(tableName);
