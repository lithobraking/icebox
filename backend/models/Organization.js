const {Model} = require('objection');

class Organization extends Model {
    static get tableName() {
        return 'orgs';
    };

    static get relationMappings() {
        const User = require('./User');
        const Action = require('./Action');
        const Post = require('./Post');
    }
};

module.exports = Organization;
