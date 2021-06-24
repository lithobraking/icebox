const {Model} = require('objection');

class User extends Model {
    static get tableName() {
        return 'users';
    };

    static get relationMappings() {
        const Org = require('./Organization');
        const Action = require('./Action');
        const Post = require('./Post');
    }
};

module.exports = User;
