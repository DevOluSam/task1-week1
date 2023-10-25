

const chai = require("chai");

const assert = chai.assert;

chai.config.truncateThreshold = 0;

describe("Basic tests", () => {

  it("should handle basic tests", () => {

    assert.deepEqual(isDivisbleByN([1, 3, 5, 6, 3, 6, 7, 4], 2), [6,4]);

  });

  it("should handle this test", () => {

    assert.deepEqual(isDivisbleByN([21, 3, 5, 6, 3, 6, 7, 4], 7), [21, 7]);

  });

  it("should handle this test", () =>{

    assert.deepEqual(isDivisbleByN([4, 6, 2, 6, 7, 7],7),[7]);

  });

  it("should handle this exception", () =>{

    assert.deepEqual(isDivisbleByN([1,5,1,7], 4), 0);

  });

  it("should handle this test", () =>{

    assert.deepEqual(isDivisbleByN([8, 6, 2, 9],3),[6,9]);

  })

});