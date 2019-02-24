const test = require("ava");

const mockObjectId = data => {
  const oid = {
    name: data
  };
  Object.defineProperty(oid, "toString", {
    value: () => data
  });
  return oid;
};

test("toString() returns right value", t => {
  t.is(mockObjectId("foo").toString(), "foo");
});

test("it's an object", t => {
  const actual = mockObjectId("foo");
  t.is(typeof actual, "object");
});

test("two objectIds with same value are equal", t => {
  const first = mockObjectId("foo");
  const second = mockObjectId("foo");
  t.deepEqual(first, second);
});
