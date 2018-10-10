import { Haiku } from "../src/haiku";

describe("Haiku test", function() {
  let haikuInstance = new Haiku("Some poem");
  it("should insert a dash betweeen prefix and the remaining of the word.", function() {
    expect(haikuInstance.separatePrefix("circumstance")).toEqual("circum-stance");
  });
});