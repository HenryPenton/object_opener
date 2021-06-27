import { open } from "../opener";

const testData = {
  test: {
    testing: {
      what: "yes",
      2: "some number key",
      deeperObject: {
        omgsodeep: {
          yep: "heheheh",
          someArray: [{}, { someThing: "s" }, ["thing", ["subthing"]]],
        },
      },
    },
  },
  florp: "works",
  blorp: {},
};
describe("open", () => {
  test("Ensure sub-objects are correctly brought out of object", () => {
    expect(open(testData, "test")).toEqual(testData.test);
    expect(open(testData, "test.testing")).toEqual(testData.test.testing);
    expect(open(testData, "test.testing.what")).toEqual(
      testData.test.testing.what
    );
    expect(open(testData, "test.a.a.a.f.g.h.ja.a.a.a")).toEqual(undefined);
    expect(open(testData, "florp")).toEqual(testData.florp);
    expect(open(testData, "test.testing.2")).toEqual("some number key");
  });

  test("Arrays work", () => {
    expect(
      open(testData, "test.testing.deeperObject.omgsodeep.someArray")
    ).toEqual(testData.test.testing.deeperObject.omgsodeep.someArray);

    expect(
      open(testData, "test.testing.deeperObject.omgsodeep.someArray[1]")
    ).toEqual(testData.test.testing.deeperObject.omgsodeep.someArray[1]);

    expect(
      open(testData, "test.testing.deeperObject.omgsodeep.someArray[2][1][0]")
    ).toEqual("subthing");
  });
});
