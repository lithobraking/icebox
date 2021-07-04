
exports.up = (knex, Promise) => {
    return knex.schema.createTable('posts', (table) => {
        table.increments('id');
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
    })
};

exports.down = (knex, Promise) => {
    knex.schema.dropTableIfExists('posts');
};