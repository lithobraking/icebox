
exports.up = (knex) => {
  knex.schema.createTable('posts', (table) => {
    table.increments('id');
    table.string('postID');
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.string('feedbackType');
    table.boolean('isAnon');
    table.boolean('wantsContact');

    // manually entered contact info
    table.string('rank');
    table.string('firstName');
    table.string('lastName');
    table.string('emailAddress');
    table.string('phoneNumber');
    
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
