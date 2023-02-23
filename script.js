const PouchDB = require('pouchdb');
const adNodeSql = require('pouchdb-adapter-node-sql');
const adIndexedDb = require('pouchdb-adapter-indexeddb');

let G;
try {
  G = window;
} catch (err1) {
  try {
    G = global;
  } catch (err2) {
    G = {};
  }
}

(function () {

'use strict';

var $ = document.querySelector.bind(document);

PouchDB.plugin(adNodeSql);
PouchDB.plugin(adIndexedDb);

// IndexedDB (IDB)

var db = new PouchDB('mydb-idb');

db.info().then(function (info) {
  console.log(`IDB (old):\n`, info);
  $('#idb').innerHTML = '&#10004; We can use PouchDB with IndexedDB (old adapter)!';
}).catch(function (err) {
  console.error(`IDB (old) error:\n`, err);
  $('#idb').innerHTML = 'Error for IndexedDB (old)';
});

// IndexedDB (IndexedDB)

var db2 = new PouchDB('mydb-indexedd', {adapter: 'indexeddb'});

db2.info().then(function (info) {
  console.log(`IDB (new):\n`, info);
  $('#indexeddb').innerHTML = '&#10004; We can use PouchDB with IndexedDB (new adapter)!';
}).catch(function (err) {
  console.error(`IDB (new) error:\n`, err);
  $('#indexeddb').innerHTML = 'Error for IndexedDB (new)';
});

// WebSQL

var websqlDB = new PouchDB('mydb-websql', {adapter: 'websql'});

websqlDB.info().then(function (info) {
  console.log(`WebSql:\n`, info);
  $('#websql').innerHTML = '&#10004; We can use PouchDB with WebSQL!';
}).catch(function (err) {
  console.error(`WebSql error:\n`, err);
  $('#websql').innerHTML = 'Error for WebSQL';
});

// LevelDB

var NodePouchDB = require('pouchdb');

var leveldbDB = new NodePouchDB('mydb-leveldb');

leveldbDB.info().then(function (info) {
  console.log(`LevelDB:\n`, info);
  $('#leveldb').innerHTML = '&#10004; We can use PouchDB with LevelDB!';
}).catch(function (err) {
  console.error(`LevelDB error:\n`, err);
  $('#leveldb').innerHTML = 'Error for LevelDB';
});

// node-websql

NodePouchDB.plugin(require('pouchdb-adapter-node-websql'));
var sqliteDB = new NodePouchDB('mydb-sqlite', {adapter: 'websql'});

sqliteDB.info().then(function (info) {
  console.log(`NodeSqlite:\n`, info);
  $('#sqlitedb').innerHTML = '&#10004; We can use PouchDB with node-websql (SQLite)!';
}).catch(function (err) {
  console.error(`NodeSqlite error:\n`, err);
  $('#sqlitedb').innerHTML = 'Error for node-websql (SQLite)';
});

if(db != null) {
  G['db'] = db;
}
if(db2 != null) {
  G['db2'] = db2;
}
if(websqlDB != null) {
  G['websqlDB'] = websqlDB;
}
if(leveldbDB != null) {
  G['leveldbDB'] = leveldbDB;
}
if(sqliteDB != null) {
  G['sqliteDB'] = sqliteDB;
}

})();
