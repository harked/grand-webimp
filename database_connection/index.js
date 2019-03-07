const neo4j = require('neo4j-driver').v1;

let driver = neo4j.driver("bolt://localhost:7687", neo4j.auth.basic("neo4j", "testing"));

module.exports = driver