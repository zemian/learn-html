// https://www.npmjs.com/package/couchdb
// NODE: This couchdb is outdated?

//var promise = require('promised-io/promise');

var couchdb = require('couchdb');
var client  = couchdb.createClient(5984, 'localhost');
var db      = client.db('hello');

var doc = { _id: 'hello101', text: 'Hello CouchDB!' };

db.saveDoc(doc).then(function() {
    console.log('document saved!');

    db.openDoc('hello101').then(function(doc) {
        console.log('retrieved document!');
        console.log(JSON.stringify(doc));
    });
});
