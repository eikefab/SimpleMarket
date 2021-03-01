
exports.up = (knex) => (
    knex.schema.createTable("profile", (table) => {
        table.foreign("uid").references("id").inTable("users");
        table.string("name", 255).notNullable();
        table.date("birthday").notNullable();
    })
)

exports.down = (knex) => (knex.schema.dropTable("profile"));
