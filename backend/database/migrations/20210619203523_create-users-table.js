
exports.up = (knex) => {
    knex.schema.createTable('users', (table) => {
        table.uuid('userID');
        table.timestamp('dateJoined').defaultTo(knex.fn.now());
        table.string('permissionLevel');
        table.string('username')
            .unique();
        table.string('firstName');
        table.string('lastName');
        table.string('rank');
        table.string('organization');
        table.string('emailAddress')
            .unique();
        table.string('password')
        table.string('phoneNumber');

        // connects user to post
        table.string('postID')
            .references('postID')
            .inTable('posts')
        
        // connects user to organisation
        table.string('org')
            .references('name')
            .inTable('orgs');
      })
};

exports.down = (knex) => {
    knex.schema.dropTableIfExists('users');
};
