
exports.up = (knex) => {
    knex.schema.createTable('orgs', (table) => {
        table.increments('orgID');
        table.timestamp('dateCreated').defaultTo(knex.fn.now());
        table.string('name');

        // connects orgs to posts
        table.string('postID')
            .references('postID')
            .inTable('posts')

        // connects orgs to users
        table.string('userID')
            .references('userID')
            .inTable('users')

        // connects orgs to actions
        table.string('actions')
        .unsigned()
        .references('actionID')
        .inTable('actionItems')
      })
};

exports.down = (knex) => {
    knex.schema.dropTableIfExists('orgs');
};
