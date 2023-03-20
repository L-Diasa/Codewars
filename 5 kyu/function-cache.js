// DESCRIPTION:
// If you are calculating complex things or execute time-consuming API calls, you sometimes want to cache the results. In this case we want you to create a function wrapper, which takes a function and caches its results depending on the arguments, that were applied to the function.

// Usage example:

// var complexFunction = function(arg1, arg2) { /* complex calculation in here */ };
// var cachedFunction = cache(complexFunction);

// cachedFunction('foo', 'bar'); // complex function should be executed
// cachedFunction('foo', 'bar'); // complex function should not be invoked again, instead the cached result should be returned
// cachedFunction('foo', 'baz'); // should be executed, because the method wasn't invoked before with these arguments

function cache(func) {
    const cached = {}
    return function(...args) {
      const str = JSON.stringify(...args);
      if(!cached[str]) cached[str] = [func(...args)]
      return cached[str][0]
    }
  }
   
  // describe("Solution", function() {
  //   it("should test for something", function() {
  //     var complexFunction = function(arg1, arg2) {return arg1+arg2};
  //     var cachedFunction = cache(complexFunction);
  //     Test.assertEquals(cachedFunction('foo', 'bar'), 'foobar');
  //     Test.assertEquals(cachedFunction('foo', 'bar'), 'foobar');
  //     Test.assertEquals(cachedFunction('foo', 'baz'), 'foobaz');
  //   });
  // });