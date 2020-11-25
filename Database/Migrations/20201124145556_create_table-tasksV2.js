
const tableName = 'tasks'

exports.up = (knex) => knex.schema.createTable(tableName, (table) => {
    table.increments('id').unsigned();
    table.enu('status', ['Pending', 'Finished'])
        .defaultTo('Pending');
    table.string('title', [100])
        .unique();
    table.text('description');
    table.integer('perfil_id').unsigned();
    table.foreign('perfil_id')
        .references('id')
        .inTable('users')
        .onDelete('cascade');
    table.timestamps();
});

exports.down = (knex) => knex.schema.dropTable(tableName);