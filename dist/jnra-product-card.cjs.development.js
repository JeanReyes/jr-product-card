'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactRouterDom = require('react-router-dom');
var axios = _interopDefault(require('axios'));

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var runtime_1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports 
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}
});

var useGet = function useGet(url) {
  var _useState = React.useState([]),
      data = _useState[0],
      seData = _useState[1];

  var _useState2 = React.useState(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = React.useState(),
      error = _useState3[0],
      setError = _useState3[1];

  var getAll = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(reload) {
      var response;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              reload && setLoading(true);
              _context.next = 4;
              return axios.get(url);

            case 4:
              response = _context.sent;
              setLoading(false);
              seData(response.data.data);
              return _context.abrupt("return", response.data.data);

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              setError(_context.t0);

            case 13:
              _context.prev = 13;
              return _context.finish(13);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10, 13, 15]]);
    }));

    return function getAll(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  React.useEffect(function () {
    getAll(true);
  }, [url]);
  return {
    data: data,
    loading: loading,
    error: error,
    getAll: getAll
  };
};

var chatContext = /*#__PURE__*/React.createContext({});
var formContext = /*#__PURE__*/React.createContext({});

var ChatAsync = function ChatAsync(_ref) {
  var children = _ref.children,
      caseNumber = _ref.caseNumber,
      role = _ref.role;

  var _useParams = reactRouterDom.useParams(),
      number_case = _useParams.number_case;

  caseNumber = caseNumber ? caseNumber : number_case;
  var URL = "http://localhost:8000/v1/facl/chats/" + caseNumber + "/messages";

  var _useState = React.useState({}),
      msg = _useState[0],
      setMsg = _useState[1];

  var _useGet = useGet(URL),
      data = _useGet.data,
      loading = _useGet.loading,
      error = _useGet.error,
      getAll = _useGet.getAll;

  var getAllData = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return getAll(false);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getAllData() {
      return _ref2.apply(this, arguments);
    };
  }();

  React.useEffect(function () {
    setInterval(function () {
      getAllData();
    }, 10000);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  var handleMessage = function handleMessage(message) {
    var reload = false;

    if (message) {
      getAll(reload).then(function () {
        setMsg(message);
      });
    }
  };

  if (loading) {
    return React__default.createElement("p", null, "...Loading");
  }

  if (error) {
    React__default.createElement("p", null, error);
  }

  if (!data) {
    return null;
  }
  return React__default.createElement(chatContext.Provider, {
    value: {
      data: data,
      URL: URL,
      msg: msg,
      role: role,
      handleMessage: handleMessage
    }
  }, children);
};

var usePost = function usePost(url) {
  var _useState = React.useState(null),
      data = _useState[0],
      seData = _useState[1];

  var _useState2 = React.useState(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = React.useState(null),
      error = _useState3[0],
      setError = _useState3[1];

  var post = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(body) {
      var response;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setLoading(true);
              _context.next = 4;
              return axios.post(url, body);

            case 4:
              response = _context.sent;
              seData(response.data);
              return _context.abrupt("return", response.data);

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              setError(_context.t0);

            case 12:
              _context.prev = 12;
              return _context.finish(12);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9, 12, 14]]);
    }));

    return function post(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var postFile = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(body) {
      var formData, i, attach, response;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              formData = new FormData();

              for (i in body) {
                if (i === 'attachments') {
                  for (attach in body[i]) {
                    formData.append(i, body[i][attach]);
                  }
                } else {
                  formData.append(i, body[i]);
                }
              }
              _context2.prev = 3;
              _context2.next = 6;
              return axios.post(url, formData, {
                headers: {
                  'content-Type': 'multipart/form-data'
                }
              });

            case 6:
              response = _context2.sent;
              seData(response.data);
              return _context2.abrupt("return", response.data);

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](3);
              setError(_context2.t0);

            case 14:
              _context2.prev = 14;
              setLoading(false);
              return _context2.finish(14);

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[3, 11, 14, 17]]);
    }));

    return function postFile(_x2) {
      return _ref2.apply(this, arguments);
    };
  }(); // const toBase64 = (file: Blob) => new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => {
  //         let encoded = reader.result !== null ? reader.result.toString().replace(/^data:(.*,)?/, '') : null
  //         if (encoded && (encoded.length % 4) > 0) {
  //           encoded += '='.repeat(4 - (encoded.length % 4));
  //         }
  //         resolve(encoded);
  //     }
  //     reader.onerror = (error) => {
  //         reject(error);
  //     }
  // });


  return {
    post: post,
    postFile: postFile,
    data: data,
    loading: loading,
    error: error
  };
};

var ChatFormFile = function ChatFormFile(_ref) {
  var handleFile = _ref.handleFile;
  var file = React.useRef({});

  var viewFiles = function viewFiles() {
    if (file.current !== null && handleFile) {
      handleFile(file.current.files);
    }
  };

  return React__default.createElement("div", {
    className: "container_form_file",
    onChange: viewFiles
  }, React__default.createElement("label", {
    htmlFor: "file-input",
    style: {
      cursor: 'pointer'
    }
  }, React__default.createElement("i", {
    className: "fa-solid fa-paperclip"
  })), React__default.createElement("input", {
    id: "file-input",
    multiple: true,
    type: "file",
    ref: file,
    style: {
      display: 'none'
    }
  }));
};

var ChatUploadFile = function ChatUploadFile() {
  var _useContext = React.useContext(formContext),
      message = _useContext.message,
      setMessage = _useContext.setMessage;

  console.log(" message.attachments", message.attachments);

  var removeFile = function removeFile(index) {
    var array = message.attachments;
    array.splice(index, 1);
    setMessage(_extends({}, message, {
      attachments: array
    }));
  };

  return React__default.createElement(React__default.Fragment, null, message.attachments.map(function (file, index) {
    return React__default.createElement("div", {
      key: index,
      className: "attachment_container"
    }, React__default.createElement("p", {
      className: 'remove_text_file',
      key: index
    }, file.name), React__default.createElement("img", {
      src: "https://customer.falabella.com/prd/cust/ctcm/ftc/corp/virtual-assistant/front/assets/images/close-icon.svg",
      className: 'remove_file',
      onClick: function onClick() {
        return removeFile(index);
      },
      alt: ""
    }));
  }));
};

var ChatForm = function ChatForm() {
  var _useContext = React.useContext(chatContext),
      URL = _useContext.URL,
      handleMessage = _useContext.handleMessage,
      role = _useContext.role;

  var _usePost = usePost(URL),
      post = _usePost.post,
      postFile = _usePost.postFile; // colocar URL


  var initialMessage = {
    message: '',
    attachments: [],
    user: 'hosting',
    role: role,
    sentiment: {}
  };

  var _useState = React.useState(initialMessage),
      message = _useState[0],
      setMessage = _useState[1];

  var _useState2 = React.useState(36),
      heightTextArea = _useState2[0],
      setheightTextArea = _useState2[1];

  var refTextArea = React.useRef(null);

  var handleInput = function handleInput(_ref) {
    var target = _ref.target;
    setheightTextArea(target.scrollHeight);
    setMessage(_extends({}, message, {
      message: target.value
    }));
  };

  var handleFile = function handleFile(file) {
  };

  var handleSubmit = function handleSubmit(e) {
    if (e) e.preventDefault();

    if (message.message.length > 0 && message.attachments !== undefined && message.attachments.length > 0) {
      postFile(message).then(function (data) {
        handleMessage(data);
        setMessage(initialMessage);
      });
    } else if (message.message.length > 0) {
      post(message).then(function (data) {
        handleMessage(data);
        setMessage(initialMessage);
      });
    } else {
      postFile(message).then(function (data) {
        handleMessage(data);
        setMessage(initialMessage);
      });
    }

    setheightTextArea(36);
  };

  var enterSubmit = function enterSubmit(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
      return false;
    }
  };

  return (// ordenar el formulario File con composicion de componentes
    React__default.createElement(formContext.Provider, {
      value: {
        message: message,
        setMessage: setMessage
      }
    }, React__default.createElement("form", {
      onSubmit: handleSubmit
    }, React__default.createElement("div", {
      className: "container_form"
    }, React__default.createElement(ChatFormFile, {
      handleFile: handleFile
    }), React__default.createElement("div", {
      className: "input-group"
    }, React__default.createElement("textarea", {
      ref: refTextArea,
      className: "form-control",
      value: message.message,
      placeholder: "Escribe un mensaje...",
      onChange: handleInput,
      onKeyPress: enterSubmit,
      style: {
        height: heightTextArea,
        maxHeight: '132px'
      }
    }), React__default.createElement("button", {
      className: "btn btn-outline-secondary"
    }, React__default.createElement("i", {
      className: "fa-solid fa-paper-plane"
    })))), React__default.createElement(ChatUploadFile, null)))
  );
};

var DateChat = /*#__PURE__*/function () {
  function DateChat(date, previusDate) {
    this.date = date;
    this.previusDate = previusDate;
    this.now = new Date();
    this.days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    this.months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agasto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    this.date = date ? new Date(date) : undefined;
    this.previusDate = previusDate ? new Date(previusDate) : undefined;
  }

  var _proto = DateChat.prototype;

  _proto.formateDate = function formateDate(format) {
    if (this.date) {
      switch (format) {
        case 'hh:mm':
          return this.date.getHours() + ":" + this.addMinutes(this.date.getMinutes());

        case 'day':
          return this.date.getDate();
        // case 'time' :
        //     return this.isTime()

        case 'time_message':
          return this.messageTime();

        default:
          return this.date;
      }
    }
  };

  _proto.messageTime = function messageTime() {
    var _this$date, _this$previusDate;

    var dateDay = (_this$date = this.date) == null ? void 0 : _this$date.getDate();
    var previusDay = (_this$previusDate = this.previusDate) == null ? void 0 : _this$previusDate.getDate();
    var dateNow = this.now.getDate(); // validacion para ver si los datos existen y son diferentes para hacer diferenciador de dias

    if (previusDay === undefined) {
      var _this$date5;

      if (dateNow === dateDay) {
        return 'Hoy';
      } else if (dateDay && dateNow - dateDay === 1) {
        return 'Ayer';
      }

      if (dateDay && dateNow - dateDay >= 7) {
        var _this$date2, _this$date3, _this$date4;

        return ((_this$date2 = this.date) == null ? void 0 : _this$date2.getDate()) + " de " + this.months[(_this$date3 = this.date) == null ? void 0 : _this$date3.getMonth()] + " de " + ((_this$date4 = this.date) == null ? void 0 : _this$date4.getFullYear());
      }

      return this.days[(_this$date5 = this.date) == null ? void 0 : _this$date5.getDay()];
    }

    if (dateDay && dateDay !== previusDay) {
      var _this$date9;

      if (dateNow === dateDay) {
        return 'Hoy';
      } else if (dateNow - dateDay === 1) {
        return 'Ayer';
      } else if (dateNow - dateDay >= 7) {
        var _this$date6, _this$date7, _this$date8;

        return ((_this$date6 = this.date) == null ? void 0 : _this$date6.getDate()) + " de " + this.months[(_this$date7 = this.date) == null ? void 0 : _this$date7.getMonth()] + " de " + ((_this$date8 = this.date) == null ? void 0 : _this$date8.getFullYear());
      }

      return this.days[(_this$date9 = this.date) == null ? void 0 : _this$date9.getDay()];
    }
  } // private isTime(): any {
  //     if (this.date) {
  //         if (this.now.getDate() === this.date.getDate()) {
  //             return `Hoy`
  //         } else {
  //             // if (this.)
  //             if ((this.now.getDate() - this.date.getDate()) === 1) {
  //                 return `AYER`               
  //             } else if (this.now.getDate() - this.date.getDate() === 2){
  //                 // hacer validaciones para 1 semana las anteriores enviar la fecha
  //                 return `${this.days[this.date.getDay()]}`            
  //             } else if (this.now.getDate() - this.date.getDate() === 3){
  //                 return `${this.days[this.date.getDay()]}`
  //             } else if (this.now.getDate() - this.date.getDate() === 4){
  //                 return `${this.days[this.date.getDay()]}`
  //             } else if (this.now.getDate() - this.date.getDate() === 5){
  //                 return `${this.days[this.date.getDay()]}`
  //             } else if (this.now.getDate() - this.date.getDate() === 6){
  //                 return `${this.days[this.date.getDay()]}`
  //             } else {
  //                 return `LA FECHA`
  //             }
  //         }      
  //     }
  // }
  ;

  _proto.addMinutes = function addMinutes(minutes) {
    if (minutes >= 0 && minutes < 9) {
      return "0" + minutes;
    } else {
      return minutes;
    }
  };

  _proto.format = function format(_format) {
    return this.formateDate(_format);
  };

  return DateChat;
}();

var Message = function Message(_ref) {
  var msg = _ref.msg;

  var _useContext = React.useContext(chatContext),
      roleContext = _useContext.role;

  var message = msg.message,
      timestamp = msg.timestamp,
      attachments = msg.attachments,
      role = msg.role,
      sentiment = msg.sentiment;

  var emojiMessage = function emojiMessage(sentiment) {
    if (sentiment === 'neutral') {
      return '😐';
    } else if (sentiment === 'positive') {
      return '😀';
    } else if (sentiment === 'negative') {
      return '😡';
    }
  };

  var ComponentFile = function ComponentFile(_ref2) {
    var files = _ref2.files;

    var download = function download(file) {
    };

    var nameFile = function nameFile(name) {
      if (name.length > 20) {
        return name.slice(0, name.length - (name.length - 20)) + '...';
      } else {
        return name;
      }
    };

    return React__default.createElement(React__default.Fragment, null, files.map(function (file, index) {
      return React__default.createElement("div", {
        className: "container_file",
        key: index
      }, React__default.createElement("div", {
        className: "container_download"
      }, React__default.createElement("i", {
        className: "fa-solid fa-file"
      }), React__default.createElement("span", null, nameFile(file.name)), React__default.createElement("i", {
        className: "fa-solid fa-download",
        style: {
          "float": 'right',
          cursor: 'pointer'
        },
        onClick: function onClick() {
          return download();
        }
      })));
    }));
  };

  return React__default.createElement("div", null, " ", roleContext === role ? React__default.createElement("div", {
    className: 'message_user'
  }, React__default.createElement("div", {
    className: 'message_user_text'
  }, React__default.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, emojiMessage(sentiment)), message, attachments && attachments.length > 0 && React__default.createElement(ComponentFile, {
    files: attachments
  }), React__default.createElement("div", {
    className: "container_hora_message"
  }, React__default.createElement("span", {
    style: {
      "float": 'right'
    }
  }, new DateChat(timestamp).format('hh:mm'), " hrs. ")))) : React__default.createElement("div", {
    className: 'message_agente'
  }, React__default.createElement("div", {
    className: 'message_agente_text'
  }, React__default.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-start'
    }
  }, emojiMessage(sentiment)), message, attachments && attachments.length > 0 && React__default.createElement(ComponentFile, {
    files: attachments
  }), React__default.createElement("div", {
    className: "container_hora_message"
  }, React__default.createElement("span", {
    style: {
      "float": 'right'
    }
  }, new DateChat(timestamp).format('hh:mm'), " hrs. ")))));
};

var ChatMessages = function ChatMessages() {
  var scrollContainer = React.useRef(null);
  var messageScroll = React.useRef([]);

  var _useContext = React.useContext(chatContext),
      data = _useContext.data,
      msg = _useContext.msg;

  var _useState = React.useState(0),
      qtyMsgs = _useState[0],
      setQtyMsgs = _useState[1];

  React.useEffect(function () {
    if (data && data.length > 0) {
      console.log("N\xFAmero de mensajes -> " + qtyMsgs);

      if (scrollContainer.current !== null) {
        scrollContainer.current.scrollTop = scrollContainer.current.scrollHeight;
      }
    }
  }, [qtyMsgs, data]);
  React.useEffect(function () {
    if (qtyMsgs !== data.length) {
      setQtyMsgs(data.length);
    }
  }, [data, msg, qtyMsgs]); // revisar esto con la paginación

  var TimeMessage = function TimeMessage(_ref) {
    var msg = _ref.msg,
        index = _ref.index,
        array = _ref.array;
    var refElement = msg.timestamp;
    var previusElement = array[index - 1] ? array[index - 1].timestamp : undefined;
    return React__default.createElement("div", {
      className: "container_message_time"
    }, React__default.createElement("div", {
      className: "container_message_text"
    }, new DateChat(refElement, previusElement).format('time_message')));
  };

  return React__default.createElement("div", {
    className: "container_message mb-4",
    ref: scrollContainer
  }, data.map(function (msg, i, array) {
    return React__default.createElement("div", {
      ref: function ref(element) {
        element == null ? void 0 : element.setAttribute('timestamp', msg.timestamp);
        return messageScroll.current[i] = element;
      },
      key: String(msg._id)
    }, React__default.createElement(TimeMessage, {
      msg: msg,
      index: i,
      array: array
    }), React__default.createElement(Message, {
      msg: msg
    }));
  }));
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".container_header {\n  padding: 10px;\n  border-bottom: 4px solid #ff6200; }\n\n.container_title_video_call {\n  display: flex;\n  justify-content: space-between; }\n\n.container_title_video_call p {\n  text-align: left;\n  font-size: 25px;\n  padding: 6px;\n  margin: 0; }\n\n.container_message {\n  display: block;\n  width: 100%;\n  padding: 0px 10px 0px 10px;\n  max-height: 500px;\n  min-height: 500px;\n  overflow-y: auto;\n  font-size: 12px; }\n\n.container_message_time {\n  display: flex;\n  justify-content: center;\n  width: 100%; }\n\n.container_message_text {\n  max-width: 50%;\n  min-width: 20%;\n  text-align: center;\n  opacity: .5; }\n\n.line_message_time {\n  border-bottom: 1px solid gray;\n  text-align: center;\n  width: 50%;\n  position: relative;\n  top: -7px;\n  opacity: .3; }\n\n.container_is_now {\n  width: 100%;\n  font-size: 20px;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  z-index: 1; }\n  .container_is_now div {\n    width: 20%;\n    text-align: center;\n    font-family: Tahoma; }\n\n.message_user {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  overflow: hidden;\n  margin-bottom: 10px; }\n\n.message_agente {\n  display: flex;\n  justify-content: flex-start;\n  width: 100%;\n  overflow: hidden;\n  margin-bottom: 10px; }\n\n.message_user_text {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  background-color: #e4ebf7;\n  padding: 10px;\n  border-radius: 15px 15px 0px 15px;\n  max-width: 400px; }\n\n.message_agente_text {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  background-color: #f5f5f5;\n  padding: 10px;\n  border-radius: 15px 15px 15px 0px;\n  max-width: 400px; }\n\n.message_date {\n  text-align: center;\n  padding: 16px 0;\n  font-size: 12px;\n  color: #999; }\n\n.container_hora_message {\n  font-size: 10px;\n  float: right;\n  font-style: oblique;\n  margin-top: 4px; }\n\n.container_form {\n  display: flex;\n  margin: 20px; }\n\n.text_area_input {\n  max-height: 200px;\n  height: 20px; }\n\n.container_form_file {\n  font-size: x-large;\n  margin-right: 10px;\n  cursor: pointer; }\n\n.container_file {\n  display: flex;\n  min-width: 380px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-left: 10px;\n  padding-right: 10px;\n  margin-top: 10px;\n  background-color: #d0d0d0;\n  border-radius: 3px; }\n\n.container_download {\n  display: block;\n  width: 100%; }\n\n.container_download span {\n  font-size: 12px;\n  margin-left: 10px; }\n\n.container_download i {\n  font-size: 20px; }\n\n/*VIDEO CALL*/\n.container_video_call {\n  display: flex;\n  justify-content: space-evenly;\n  padding: 10px; }\n\n@media (max-width: 600px) {\n  .message_user_text {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    background-color: #e4ebf7;\n    padding: 10px;\n    border-radius: 15px 15px 0px 15px;\n    max-width: 200px; }\n  .message_agente_text {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    background-color: #f5f5f5;\n    padding: 10px;\n    border-radius: 15px 15px 15px 0px;\n    max-width: 200px; }\n  .container_file {\n    display: flex;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    padding-left: 10px;\n    padding-right: 10px;\n    margin-top: 10px;\n    background-color: #d0d0d0;\n    border-radius: 3px; } }\n\n.attachment_container {\n  background: #DDDDDD;\n  width: 60%;\n  min-width: 60%;\n  height: auto;\n  margin: 10px 20px;\n  padding: 5px;\n  border-radius: 4px;\n  display: flex;\n  justify-content: space-between; }\n\n.remove_text_file {\n  color: #333;\n  font-weight: 500;\n  display: table-cell;\n  margin: 0; }\n\n.remove_file {\n  cursor: pointer;\n  float: right;\n  margin: 5px; }\n\n.body {\n  font-family: Lato, sans-serif; }\n\n.pannel {\n  background-color: #fff;\n  border-radius: 5px;\n  margin-bottom: 15px !important;\n  padding: 20px 40px; }\n  .pannel--shadow {\n    box-shadow: #4a4a4a 0px 0px 5px 0px; }\n\n.button {\n  background-color: #495867;\n  font-size: 19px;\n  font-weight: 400;\n  position: relative;\n  width: 220px;\n  text-align: center;\n  height: auto;\n  line-height: 22.8px;\n  min-height: 35px;\n  border-radius: 24px;\n  border: 0;\n  color: white;\n  align-self: center; }\n  .button:hover {\n    background-color: #4a4a4a; }\n\na {\n  color: #fff; }\n\np {\n  margin: 0; }\n";
styleInject(css_248z);

var Chat = function Chat(_ref) {
  var caseNumber = _ref.caseNumber,
      role = _ref.role;

  var _useParams = reactRouterDom.useParams();

  return React__default.createElement(ChatAsync, {
    caseNumber: caseNumber,
    role: role
  }, React__default.createElement("div", {
    className: "card"
  }, React__default.createElement("div", {
    className: "container_header"
  }, React__default.createElement("div", {
    className: "container_title_video_call"
  }, React__default.createElement("p", {
    style: {
      textAlign: 'left'
    }
  }, " Chat As\xEDncrono :).. "))), React__default.createElement("div", null, React__default.createElement(ChatMessages, null), React__default.createElement(ChatForm, null))));
};

var css_248z$1 = ".Portal-header {\n  background: linear-gradient(17.56deg, #ff9401 63.22%, #ff7b01 105.58%, #ff6c01 144.92%);\n  height: 70px;\n  background-position: left;\n  background-repeat: no-repeat;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: #333; }\n\n.logo_background {\n  background: linear-gradient(272deg, #ff6200 0%, #ff861b 95.09%);\n  border-radius: 1653px 0px 0px 1653px;\n  width: 190px;\n  height: 70px;\n  text-align: left;\n  transform: rotate(180deg);\n  margin-left: 0;\n  margin-right: auto;\n  cursor: pointer; }\n\n.fala_logo {\n  transform: rotate(180deg);\n  height: 100%;\n  width: 85%;\n  padding-right: 10px;\n  padding-left: 10px; }\n";
styleInject(css_248z$1);

var goToPortal = function goToPortal() {
  window.location.href = '/portal';
};

var Header = function Header() {
  return React__default.createElement("header", {
    className: "Portal-header"
  }, React__default.createElement("div", {
    onClick: goToPortal,
    className: 'logo_background'
  }, React__default.createElement("img", {
    className: "fala_logo",
    src: "https://images.falabella.com/v3/assets/blt7c5c2f2f888a7cc3/blt9f6f7671ced09c38/6126b34e8e16ab655b346002/hr-1-logo-desktop.svg"
  })));
};

var css_248z$2 = "body {\n  height: 100%;\n  background-color: #f5f5f5;\n}\n\n.Orders {\n  margin: 0px;\n}\n\n.title {\n  font-size: 22px;\n  line-height: 27px;\n  font-weight: 700;\n  color: rgb(51, 51, 51);\n}\n\n.subtitle {\n  font-size: 1em;\n  color: rgb(51, 51, 51);\n  margin: 0;\n  margin-right: 10px;\n}\n\n.input-container {\n  display: flex;\n  margin-bottom: 15px;\n}\n\ninput {\n  height: 20px;\n  width: 220px;\n  border: 1px solid #888;\n  font-family: inherit;\n  line-height: inherit;\n  font-size: 1.6rem;\n  background: #fff;\n  outline: none;\n  border-radius: 4px;\n  box-sizing: content-box;\n  padding: 0 10px;\n  font-size: 16px;\n  color: #333;\n  /* text-align: center; */\n}\n\n.orders-pagination{\n  display: flex;\n  justify-content: center;\n  margin-bottom: 15px;\n}\n\n.orders-pagination p{\n  margin: 0px 5px;\n}\n\n.arrow {\n  cursor: pointer;\n}";
styleInject(css_248z$2);

var URL = 'http://localhost:8000/v1/facl';
var getOrders = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(email, page) {
    var ordersResponse;
    return runtime_1.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (page === void 0) {
              page = 1;
            }

            _context.prev = 1;
            _context.next = 4;
            return axios.get(URL + "/orders/?email=" + email + "&page=" + page);

          case 4:
            ordersResponse = _context.sent;
            return _context.abrupt("return", ordersResponse.data.data);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            return _context.abrupt("return", null);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));

  return function getOrders(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var DELIVERY_METHODS = {
  HOME_DELIVERY: "Entregado el",
  PICKUP_FROM_STORE: "Retiro en tienda"
};
var DELIVERY_STATUS = {
  DELIVERED: "Compra entregada",
  IN_PROCESS: "Solicitud recibida",
  WITH_INVOICE: "Compra confirmada",
  SHIPMENT_IN_PROCESS: "Compra en camino",
  CANCELED: "Compra cancelada"
};
var getDeliveryMethod = function getDeliveryMethod(method) {
  return DELIVERY_METHODS[method] || method;
};
var getDeliveryStatus = function getDeliveryStatus(status) {
  return DELIVERY_STATUS[status] || status;
};

var css_248z$3 = ".card-title-container {\n  display: flex;\n  justify-content: space-between; }\n\n.card-title {\n  font-size: 1.2rem;\n  font-weight: 700;\n  padding-left: 0px;\n  margin: 0;\n  padding: 0;\n  border: 0; }\n\n.order-date {\n  font-size: 0.8rem; }\n\n.product-img {\n  height: 75px; }\n\n.order-card__info {\n  margin: 0; }\n\n.card-content {\n  display: flex;\n  justify-content: space-between; }\n\n.order-card-number {\n  font-size: 14px;\n  font-weight: 400;\n  color: #4a4a4a;\n  text-align: left;\n  margin: 0; }\n\n.order-card-deliveryMethod {\n  font-size: 16px;\n  font-weight: 700;\n  color: #4a4a4a;\n  text-align: left;\n  padding-bottom: 10px;\n  margin: 0; }\n\n.order-card-deliveryStatus {\n  font-size: 14px;\n  font-weight: 400;\n  color: #4a4a4a;\n  text-align: left;\n  padding-bottom: 10px;\n  padding-left: 10px;\n  margin: 0; }\n\n.order-card-status {\n  display: flex; }\n\n.order-card--actions {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n";
styleInject(css_248z$3);

var OrdersCard = function OrdersCard(customerOrder) {
  var order = customerOrder.order;

  var viewCase = function viewCase(sellerOrder) {
    window.location.href = "/cases-chat/user?orderNumber=" + sellerOrder;
  };

  var formattedDate = order.createdAt.split(" ")[0];
  return React__default.createElement(React__default.Fragment, null, React__default.createElement("div", {
    className: "order-card"
  }, React__default.createElement("div", {
    className: "card-title-container"
  }, React__default.createElement("p", {
    className: "card-title"
  }, "Compra online"), React__default.createElement("label", {
    className: "order-date"
  }, "Fecha de la compra: ", formattedDate)), React__default.createElement("div", {
    className: "order-card__detail"
  }, order.deliveryOrders.map(function (orderDelivery, index) {
    var _orderDelivery$delive, _orderDelivery$delive2;

    return React__default.createElement("div", {
      key: index
    }, React__default.createElement("hr", null), React__default.createElement("div", {
      className: "card-content"
    }, React__default.createElement("div", {
      className: "order-card--product"
    }, React__default.createElement("p", {
      className: "order-card-number"
    }, "Pedido N\xBA: ", orderDelivery.reservationNumber), React__default.createElement("label", {
      className: "order-card-deliveryMethod"
    }, getDeliveryMethod(orderDelivery.deliveryMethod), " ", orderDelivery == null ? void 0 : (_orderDelivery$delive = orderDelivery.deliveryInfo) == null ? void 0 : (_orderDelivery$delive2 = _orderDelivery$delive.deliveredDate) == null ? void 0 : _orderDelivery$delive2.split(" ")[0]), React__default.createElement("div", {
      className: "order-card-status"
    }, React__default.createElement("div", {
      className: "product_container__img"
    }, React__default.createElement("img", {
      className: "product-img",
      alt: "",
      src: orderDelivery.shipments[0].orderLines[0].item.imageUrl
    })), React__default.createElement("p", {
      className: "order-card-deliveryStatus"
    }, "Estado: ", getDeliveryStatus(orderDelivery.shipments[0].currentStatus)))), React__default.createElement("div", {
      className: "order-card--actions"
    }, React__default.createElement("button", {
      className: "button",
      onClick: function onClick(e) {
        return viewCase(orderDelivery.reservationNumber);
      }
    }, "Abrir conversaci\xF3n"))));
  }))));
};

var getStatusMessage = function getStatusMessage(originalStatus) {
  var description = '';

  switch (originalStatus) {
    case 'PAYMENT_PENDING':
      description = 'Pendiente de pago';
      break;

    case 'IN_PROCESS':
      description = 'Reservado';
      break;

    case 'WITH_INVOICE':
    case 'PAYMENT_CONFIRMED':
    case 'SHIPMENT_IN_PROCESS':
    case 'BROKEN':
      description = 'Pedido en curso';
      break;

    case 'DELAYED':
      description = 'Pedido en curso';
      break;

    case 'DELIVERED':
      description = 'Pedido finalizado';
      break;

    case 'READY_TO_PICKUP':
      description = 'Listo para retiro';
      break;

    case 'CANCELED':
      description = 'Pedido cancelado';
      break;

    case 'EXPIRED':
      description = 'Pedido expirado';
      break;

    default:
      description = originalStatus;
      break;
  }

  return description;
};

var getDeliveryStatus$1 = function getDeliveryStatus(originalStatus) {
  switch (originalStatus) {
    case 'PICKUP_FROM_STORE':
      originalStatus = 'Retiro en tienda';
      break;

    case 'HOME_DELIVERY':
      originalStatus = 'Despacho a domicilio';
      break;

    case 'DELIVERED':
      originalStatus = 'Despacho a domicilio';
      break;

    default:
      originalStatus = 'Sin información';
      break;
  }

  return originalStatus;
};

var formatSellerOrder = function formatSellerOrder(sellerOrder) {
  sellerOrder.shipments[0].currentStatus = getStatusMessage(sellerOrder.shipments[0].currentStatus);
  sellerOrder.deliveryMethod = getDeliveryStatus$1(sellerOrder.deliveryMethod);
};

var formatOrder = function formatOrder(orderData) {
  for (var _iterator = _createForOfIteratorHelperLoose(orderData.customerOrders), _step; !(_step = _iterator()).done;) {
    var order = _step.value;

    for (var _iterator2 = _createForOfIteratorHelperLoose(order.deliveryOrders), _step2; !(_step2 = _iterator2()).done;) {
      var sellerOrder = _step2.value;
      formatSellerOrder(sellerOrder);
    }
  }
};

var Orders = function Orders() {
  var _useState = React.useState({}),
      ordersData = _useState[0],
      setOrdersData = _useState[1];

  var _useState2 = React.useState(''),
      caseEmailInput = _useState2[0],
      setCaseEmailInput = _useState2[1];

  var changePageBack = function changePageBack(paginationData, email) {
    if (paginationData.page - 1 < 1) ; else {
      var page = paginationData.page - 1;
      viewOrdersByEmail(email, page);
    }
  };

  var changePageUp = function changePageUp(paginationData, email) {
    if (paginationData.page + 1 > paginationData.totalPages) ; else {
      var page = paginationData.page + 1;
      viewOrdersByEmail(email, page);
    }
  };

  var viewOrdersByEmail = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(email, page) {
      var response;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return getOrders(email, page);

            case 2:
              response = _context.sent;

              if (response) {
                formatOrder(response);
                setOrdersData(response);
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function viewOrdersByEmail(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  return React__default.createElement("div", {
    className: "Orders"
  }, React__default.createElement("div", {
    className: "Orders-body"
  }, React__default.createElement("div", {
    className: "orders-search pannel"
  }, React__default.createElement("p", {
    className: "title"
  }, "Revisi\xF3n de casos y compras"), React__default.createElement("div", {
    className: "input-container"
  }, React__default.createElement("p", {
    className: "subtitle"
  }, "Ingrese su email:"), React__default.createElement("input", {
    className: "search_inputs",
    key: "email",
    value: caseEmailInput,
    type: "text",
    onInput: function onInput(e) {
      return setCaseEmailInput(e.currentTarget.value);
    }
  })), React__default.createElement("button", {
    className: 'button',
    onClick: function onClick(e) {
      return viewOrdersByEmail(caseEmailInput);
    }
  }, "Ver detalle")), ordersData && ordersData.pagination && ordersData.pagination.totalPages > 1 && React__default.createElement("div", {
    className: "orders-pagination"
  }, React__default.createElement("div", {
    className: "before-arrow arrow",
    onClick: function onClick(e) {
      return changePageBack(ordersData.pagination, caseEmailInput);
    }
  }, '<'), React__default.createElement("p", null, "P\xE1gina ", ordersData.pagination.page, " de ", ordersData.pagination.totalPages), React__default.createElement("div", {
    className: "next-arrow arrow",
    onClick: function onClick(e) {
      return changePageUp(ordersData.pagination, caseEmailInput);
    }
  }, '>')), ordersData && ordersData.customerOrders && ordersData.customerOrders.map(function (customerOrder, index) {
    return React__default.createElement("div", {
      key: index,
      className: 'orders-container pannel'
    }, React__default.createElement(OrdersCard, {
      order: customerOrder
    }));
  })));
};

exports.Chat = Chat;
exports.Header = Header;
exports.Orders = Orders;
//# sourceMappingURL=jnra-product-card.cjs.development.js.map
