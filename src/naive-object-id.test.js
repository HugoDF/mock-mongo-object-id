const test = require("ava");

const naiveObjectId = data => {
  return {
    name: data,
    toString: () => data
  };
};

test("toString() returns right value", t => {
  t.is(naiveObjectId("foo").toString(), "foo");
});

test("it's an object", t => {
  const actual = naiveObjectId("foo");
  t.is(typeof actual, "object");
});

test.failing("two objectIds with same value are equal", t => {
  const first = naiveObjectId("foo");
  const second = naiveObjectId("foo");
  t.deepEqual(first, second);
});
