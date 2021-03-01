exports.up = (knex) => (
    knex.schema.createTable('user', (table) => {
        table.increments('id').primary();
        table.string('email', 255).primary();
        table.string('password', 255).notNullable();
    })
);

exports.down = (knex) => (knex.schema.dropTable('user'));
