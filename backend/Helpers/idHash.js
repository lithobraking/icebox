const Hashids = require('hashids');
let hashids = new Hashids('funkymischevioustuna', 6, 'abcdefghijklmnopqrstuvwxyz1234567890');

module.exports = hashids;