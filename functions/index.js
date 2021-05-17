const functions = require("firebase-functions");
const admin = require("firebase-admin");
var randomPictionaryWords = require("word-pictionary-list");
admin.initializeApp();
const db = admin.firestore();



exports.updateCycle = functions.pubsub
  .schedule("0 0 * * *")
  .timeZone("Africa/Abidjan")
  .onRun((context) => {

  });
