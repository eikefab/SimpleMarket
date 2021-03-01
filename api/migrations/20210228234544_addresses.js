
exports.up = (knex) => (
    knex.schema.createTable("profile_address", (table) => {
        table.foreign("id").references("uid").inTable("profile");
        table.string("country", 255).notNullable();
        table.string("state", 255).notNullable();
        table.string("city", 255).notNullable();
    })
);

exports.down = (knex) => (knex.schema.dropTable("profile_address"));
