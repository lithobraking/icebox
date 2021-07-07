const {Model} = require('objection');

class Action extends Model {
    static get tableName() {
        return 'actionItems';
    };

    static get relationMappings() {
        const User = require('./User');
        const Org = require('./Organization');
        const Post = require('./Post');
    }
};

module.exports = Action;
