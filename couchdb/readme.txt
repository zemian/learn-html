CouchDB is a database that completely embraces the web. Store your data with
JSON documents. Access your documents with your web browser, via HTTP. Query,
combine, and transform your documents with JavaScript.

http://couchdb.apache.org/

== Install and Setup

Install DB and run Admin Console:

  http://127.0.0.1:5984/

You can use Admin Console to create any documents and explore around.

Create a database "hello" and then you can access it here:

  http://127.0.0.1:5984/hello -> view db information
  http://127.0.0.1:5984/hello/_all_docs -> list of all documents
  http://127.0.0.1:5984/hello/{_id} -> get single document

== How to create data using command-line

https://docs.couchdb.org/en/stable/intro/curl.html

Generate UUIDs:
    curl 'http://localhost:5984/_uuids?count=5'

Get DB info:
    curl http://localhost:5984
    curl http://localhost:5984/hello

List all DBs:
    curl http://localhost:5984/_all_dbs

List all docs
    curl http://localhost:5984/hello/_all_docs

    # NOTE: You need to quote query parameters!
    curl 'http://127.0.0.1:5984/hello/_all_docs?limit=5&skip=0'
    curl 'http://127.0.0.1:5984/hello/_all_docs?limit=5&skip=20'

Create a documents
    curl -X PUT 'http://localhost:5984/hello/doc101' -d '{"motto": "I love gnomes"}'
    curl -X PUT 'http://localhost:5984/hello/doc102' -d '{"motto": "I love gnomes2"}'
    curl -X PUT 'http://localhost:5984/hello/doc103' -d '{"motto": "I love gnomes3"}'

    curl -X POST 'http://localhost:5984/hello' -H 'Content-Type: application/json' -d '{"motto": "Hello World"}'

Update document
    curl http://localhost:5984/hello/doc101
    # Note the "_rev" from above and add below for update
    curl -X PUT 'http://127.0.0.1:5984/hello/doc101' -d '{"motto": "I really love gnomes", "_rev": "1-5601db1093f2f7ab935599be11c9ec25"}'
    curl http://localhost:5984/hello/doc101

Delete document
    curl -X DELETE 'http://localhost:5984/hello/doc102?rev=1-ab65b70c932432cfd68d7928448b98cb'


== How to setup a sample database

Use 'couchdb-learn/create-doc-batch.js' to generate dummy data.

Any real world database?
