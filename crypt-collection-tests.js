// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by crypt-collection.js.
import { name as packageName } from "meteor/hanskohls:crypt-collection";

// Write your tests here!
// Here is an example.
Tinytest.add('crypt-collection - example', function (test) {
  test.equal(packageName, "crypt-collection");
});
