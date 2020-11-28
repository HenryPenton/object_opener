import { open } from "../opener";

const testData = {
  test: {
    testing: {
      what: "yes",
      deeperObject: {
        omgsodeep: {
          yep: "heheheh",
        },
      },
    },
  },
  florp: "works",
  blorp: {},
};

test("Ensure sub-objects are correctly brought out of object", () => {
  expect(open(testData, "test")).toEqual(testData.test);
  expect(open(testData, "test.testing")).toEqual(testData.test.testing);
  expect(open(testData, "test.testing.what")).toEqual(
    testData.test.testing.what
  );
  expect(open(testData, "test.a.a.a.f.g.h.ja.a.a.a")).toEqual(undefined);
  expect(open(testData, "florp")).toEqual(testData.florp);
});
