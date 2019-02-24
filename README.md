# Mock Mongo ObjectId

Showcase of 3 approaches to mocking Mongo ObjectId

## Identity mocking

`const identityObjectId = data => data;` (see [./src/identity-object-id.test.js](./src/identity-object-id.test.js))

Conclusions:
- super simple
- passes `toString` test, returns right values since `'abc'.toString() === 'abc'`
- fails the `ObjectId('a')` is an `object` test (it's a `string`)
- passes `ObjectId('a') === ObjectId('a')` test, `'a' === 'a'`

## Naive mocking

See [./src/naive-object-id.test.js](./src/naive-object-id.test.js)

```js
const naiveObjectId = data => {
  return {
    name: data,
    toString: () => data
  };
};
```

Conclusions:
- More involved
- passes `toString` test, returns right values since `.toString()` returns whatever was passed into constructor
- fails the `ObjectId('a') === ObjectId('a')` test, since toString is a new function
- passes the `ObjectId('a')` is an `object` test

## Working mock

See [./src/object-id-mock.test.js](./src/object-id-mock.test.js)

```js
const mockObjectId = data => {
  const oid = {
    name: data
  };
  Object.defineProperty(oid, "toString", {
    value: () => data
  });
  return oid;
};
```

Conclusions:
- Object.defineProperty() hackery...
- passes `toString` test, returns right values since `.toString()` returns whatever was passed into constructor
- passes the `ObjectId('a') === ObjectId('a')` test, since toString is not an enumerable property
- passes the `ObjectId('a')` is an `object` test
