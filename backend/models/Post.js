const {Model} = require('objection');
const db = require('../database/knex');

class Post extends Model {
    static get tableName() {
        return 'posts';
    };

    // static get relationMappings() {
    //     const User = require('./User');
    //     const Org = require('./Organization');
    //     const Action = require('./Action');

    //     return {
    //         user: {
    //             relation: 
    //         }
    //     }
    // }
};

module.exports = Post;

