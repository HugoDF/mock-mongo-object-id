const test = require("ava");

const identityObjectId = data => data;

test("toString() returns right value", t => {
  t.is(identityObjectId("foo").toString(), "foo");
});

test.failing("it's an object", t => {
  const actual = identityObjectId("foo");
  t.is(typeof actual, "object");
});

test("two objectIds with same value are equal", t => {
  const first = identityObjectId("foo");
  const second = identityObjectId("foo");
  t.deepEqual(first, second);
});
