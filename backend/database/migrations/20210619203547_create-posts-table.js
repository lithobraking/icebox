
exports.up = (knex) => {
  knex.schema.createTable('posts', (table) => {
    table.increments('id');
    table.string('postID').primary();
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.boolean('isAnon');
    table.boolean('wantsContact');
    table.text('postContent');
    table.string('postStatus');

    // connects posts to users
    table.string('userID')
      .references('userID')
      .inTable('users')

    // connects posts to orgs
    table.string('orgID')
      .references('orgID')
      .inTable('orgs');

    // connects posts to actions
    table.string('actions')
      .unsigned()
      .references('actionID')
      .inTable('actionItems')
  })
};

exports.down = (knex) => {
  knex.schema.dropTableIfExists('posts');
};
