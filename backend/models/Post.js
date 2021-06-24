const {Model} = require('objection');

class Post extends Model {
    static get tableName() {
        return 'posts';
    };

    static get relationMappings() {
        const User = require('./User');
        const Org = require('./Organization');
        const Action = require('./Action');

    }
};

module.exports = Post;

