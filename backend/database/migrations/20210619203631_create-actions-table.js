
exports.up = (knex) => {
    knex.schema.createTable('actionItems', (table) => {
        table.increments('actionID');
        table.timestamps(true, true).defaultTo(knex.fn.now());
        table.string('title');
        table.text('details');

        // connects actions to orgs
        table.string('orgID')
            .references('orgID')
            .inTable('orgs');

        // connects actions to posts
        table.string('postID')
            .references('postID')
            .inTable('posts')
    })
};

exports.down = (knex) => {
    knex.schema.dropTableIfExists('actionItems');
};
