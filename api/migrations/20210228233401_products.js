
exports.up = (knex) => (
    knex.schema.createTable("product", (table) => {
        table.foreign("owner").references("id").inTable("user");
        table.string("title", 255).notNullable();
        table.string("description", 255);
        table.integer("price").notNullable();
        table.string("icon_url", 255);
    })
)

exports.down = (knex) => (knex.schema.dropTable("product"));
