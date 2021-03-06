'use strict';

let soft_validate = true;

let spectest = {
  print: print || ((...xs) => console.log(...xs)),
  global: 666,
  table: new WebAssembly.Table({initial: 10, maximum: 20, element: 'anyfunc'}),  memory: new WebAssembly.Memory({initial: 1, maximum: 2}),};

let registry = {spectest};
let $$;

function register(name, instance) {
  registry[name] = instance.exports;
}

function module(bytes) {
  let buffer = new ArrayBuffer(bytes.length);
  let view = new Uint8Array(buffer);
  for (let i = 0; i < bytes.length; ++i) {
    view[i] = bytes.charCodeAt(i);
  }
  return new WebAssembly.Module(buffer);
}

function instance(bytes, imports = registry) {
  return new WebAssembly.Instance(module(bytes), imports);
}

function assert_malformed(bytes) {
  try { module(bytes) } catch (e) {
    if (e instanceof WebAssembly.CompileError) return;
  }
  throw new Error("Wasm decoding failure expected");
}

function assert_invalid(bytes) {
  try { module(bytes) } catch (e) {
    if (e instanceof WebAssembly.CompileError) return;
  }
  throw new Error("Wasm validation failure expected");
}

function assert_soft_invalid(bytes) {
  try { module(bytes) } catch (e) {
    if (e instanceof WebAssembly.CompileError) return;
    throw new Error("Wasm validation failure expected");
  }
  if (soft_validate)
    throw new Error("Wasm validation failure expected");
}

function assert_unlinkable(bytes) {
  let mod = module(bytes);
  try { new WebAssembly.Instance(mod, registry) } catch (e) {
    if (e instanceof TypeError) return;
  }
  throw new Error("Wasm linking failure expected");
}

function assert_uninstantiable(bytes) {
  let mod = module(bytes);
  try { new WebAssembly.Instance(mod, registry) } catch (e) {
    if (e instanceof WebAssembly.RuntimeError) return;
  }
  throw new Error("Wasm trap expected");
}

function assert_trap(action) {
  try { action() } catch (e) {
    if (e instanceof WebAssembly.RuntimeError) return;
  }
  throw new Error("Wasm trap expected");
}

function assert_return(action, expected) {
  let actual = action();
  if (!Object.is(actual, expected)) {
    throw new Error("Wasm return value " + expected + " expected, got " + actual);
  };
}

function assert_return_nan(action) {
  let actual = action();
  if (!Number.isNaN(actual)) {
    throw new Error("Wasm return value NaN expected, got " + actual);
  };
}

$$ = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\xa1\x80\x80\x80\x00\x08\x60\x00\x01\x7f\x60\x00\x01\x7e\x60\x01\x7f\x00\x60\x01\x7e\x00\x60\x00\x01\x7d\x60\x00\x01\x7c\x60\x01\x7d\x00\x60\x01\x7c\x00\x03\x8d\x80\x80\x80\x00\x0c\x00\x01\x00\x01\x02\x03\x04\x05\x04\x05\x06\x07\x06\xbd\x80\x80\x80\x00\x08\x7f\x00\x41\x7e\x0b\x7d\x00\x43\x00\x00\x40\xc0\x0b\x7c\x00\x44\x00\x00\x00\x00\x00\x00\x10\xc0\x0b\x7e\x00\x42\x7b\x0b\x7f\x01\x41\x74\x0b\x7d\x01\x43\x00\x00\x50\xc1\x0b\x7c\x01\x44\x00\x00\x00\x00\x00\x00\x2c\xc0\x0b\x7e\x01\x42\x71\x0b\x07\xe1\x80\x80\x80\x00\x0c\x05\x67\x65\x74\x2d\x61\x00\x00\x05\x67\x65\x74\x2d\x62\x00\x01\x05\x67\x65\x74\x2d\x78\x00\x02\x05\x67\x65\x74\x2d\x79\x00\x03\x05\x73\x65\x74\x2d\x78\x00\x04\x05\x73\x65\x74\x2d\x79\x00\x05\x05\x67\x65\x74\x2d\x31\x00\x06\x05\x67\x65\x74\x2d\x32\x00\x07\x05\x67\x65\x74\x2d\x35\x00\x08\x05\x67\x65\x74\x2d\x36\x00\x09\x05\x73\x65\x74\x2d\x35\x00\x0a\x05\x73\x65\x74\x2d\x36\x00\x0b\x0a\xf5\x80\x80\x80\x00\x0c\x84\x80\x80\x80\x00\x00\x23\x00\x0b\x84\x80\x80\x80\x00\x00\x23\x03\x0b\x84\x80\x80\x80\x00\x00\x23\x04\x0b\x84\x80\x80\x80\x00\x00\x23\x07\x0b\x86\x80\x80\x80\x00\x00\x20\x00\x24\x04\x0b\x86\x80\x80\x80\x00\x00\x20\x00\x24\x07\x0b\x84\x80\x80\x80\x00\x00\x23\x01\x0b\x84\x80\x80\x80\x00\x00\x23\x02\x0b\x84\x80\x80\x80\x00\x00\x23\x05\x0b\x84\x80\x80\x80\x00\x00\x23\x06\x0b\x86\x80\x80\x80\x00\x00\x20\x00\x24\x05\x0b\x86\x80\x80\x80\x00\x00\x20\x00\x24\x06\x0b");
assert_return(() => $$.exports["get-a"](), -2);
instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7e\x02\x8c\x80\x80\x80\x00\x01\x02\x24\x24\x05\x67\x65\x74\x2d\x62\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x97\x80\x80\x80\x00\x01\x91\x80\x80\x80\x00\x00\x02\x40\x10\x00\x01\x42\x7b\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", {$$: $$.exports}).exports.run();  // assert_return(() => $$.exports["get-b"](), int64("-5"))
assert_return(() => $$.exports["get-x"](), -12);
instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7e\x02\x8c\x80\x80\x80\x00\x01\x02\x24\x24\x05\x67\x65\x74\x2d\x79\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x97\x80\x80\x80\x00\x01\x91\x80\x80\x80\x00\x00\x02\x40\x10\x00\x01\x42\x71\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", {$$: $$.exports}).exports.run();  // assert_return(() => $$.exports["get-y"](), int64("-15"))
instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7d\x02\x8c\x80\x80\x80\x00\x01\x02\x24\x24\x05\x67\x65\x74\x2d\x31\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9a\x80\x80\x80\x00\x01\x94\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbc\x43\x00\x00\x40\xc0\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", {$$: $$.exports}).exports.run();  // assert_return(() => $$.exports["get-1"](), -3.)
instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7c\x02\x8c\x80\x80\x80\x00\x01\x02\x24\x24\x05\x67\x65\x74\x2d\x32\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9e\x80\x80\x80\x00\x01\x98\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbd\x44\x00\x00\x00\x00\x00\x00\x10\xc0\xbd\x51\x45\x0d\x00\x0f\x0b\x00\x0b", {$$: $$.exports}).exports.run();  // assert_return(() => $$.exports["get-2"](), -4.)
instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7d\x02\x8c\x80\x80\x80\x00\x01\x02\x24\x24\x05\x67\x65\x74\x2d\x35\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9a\x80\x80\x80\x00\x01\x94\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbc\x43\x00\x00\x50\xc1\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", {$$: $$.exports}).exports.run();  // assert_return(() => $$.exports["get-5"](), -13.)
instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7c\x02\x8c\x80\x80\x80\x00\x01\x02\x24\x24\x05\x67\x65\x74\x2d\x36\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9e\x80\x80\x80\x00\x01\x98\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbd\x44\x00\x00\x00\x00\x00\x00\x2c\xc0\xbd\x51\x45\x0d\x00\x0f\x0b\x00\x0b", {$$: $$.exports}).exports.run();  // assert_return(() => $$.exports["get-6"](), -14.)
assert_return(() => $$.exports["set-x"](6));
instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x01\x7e\x00\x02\x8c\x80\x80\x80\x00\x01\x02\x24\x24\x05\x73\x65\x74\x2d\x79\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x91\x80\x80\x80\x00\x01\x8b\x80\x80\x80\x00\x00\x02\x40\x42\x07\x10\x00\x0f\x0b\x00\x0b", {$$: $$.exports}).exports.run();  // assert_return(() => $$.exports["set-y"](int64("7")))
instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x01\x7d\x00\x02\x8c\x80\x80\x80\x00\x01\x02\x24\x24\x05\x73\x65\x74\x2d\x35\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x94\x80\x80\x80\x00\x01\x8e\x80\x80\x80\x00\x00\x02\x40\x43\x00\x00\x00\x41\x10\x00\x0f\x0b\x00\x0b", {$$: $$.exports}).exports.run();  // assert_return(() => $$.exports["set-5"](8.))
instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x01\x7c\x00\x02\x8c\x80\x80\x80\x00\x01\x02\x24\x24\x05\x73\x65\x74\x2d\x36\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x98\x80\x80\x80\x00\x01\x92\x80\x80\x80\x00\x00\x02\x40\x44\x00\x00\x00\x00\x00\x00\x22\x40\x10\x00\x0f\x0b\x00\x0b", {$$: $$.exports}).exports.run();  // assert_return(() => $$.exports["set-6"](9.))
assert_return(() => $$.exports["get-x"](), 6);
instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7e\x02\x8c\x80\x80\x80\x00\x01\x02\x24\x24\x05\x67\x65\x74\x2d\x79\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x97\x80\x80\x80\x00\x01\x91\x80\x80\x80\x00\x00\x02\x40\x10\x00\x01\x42\x07\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", {$$: $$.exports}).exports.run();  // assert_return(() => $$.exports["get-y"](), int64("7"))
instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7d\x02\x8c\x80\x80\x80\x00\x01\x02\x24\x24\x05\x67\x65\x74\x2d\x35\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9a\x80\x80\x80\x00\x01\x94\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbc\x43\x00\x00\x00\x41\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", {$$: $$.exports}).exports.run();  // assert_return(() => $$.exports["get-5"](), 8.)
instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7c\x02\x8c\x80\x80\x80\x00\x01\x02\x24\x24\x05\x67\x65\x74\x2d\x36\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9e\x80\x80\x80\x00\x01\x98\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbd\x44\x00\x00\x00\x00\x00\x00\x22\x40\xbd\x51\x45\x0d\x00\x0f\x0b\x00\x0b", {$$: $$.exports}).exports.run();  // assert_return(() => $$.exports["get-6"](), 9.)
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x06\x89\x80\x80\x80\x00\x01\x7d\x00\x43\x00\x00\x00\x00\x0b\x0a\x8c\x80\x80\x80\x00\x01\x86\x80\x80\x80\x00\x00\x41\x01\x24\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x02\x88\x80\x80\x80\x00\x01\x01\x6d\x01\x61\x03\x7f\x01");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x02\x88\x80\x80\x80\x00\x01\x01\x6d\x01\x61\x03\x7f\x01");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x06\x89\x80\x80\x80\x00\x01\x7d\x01\x43\x00\x00\x00\x00\x0b\x07\x85\x80\x80\x80\x00\x01\x01\x61\x03\x00");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x06\x89\x80\x80\x80\x00\x01\x7d\x01\x43\x00\x00\x00\x00\x0b\x07\x85\x80\x80\x80\x00\x01\x01\x61\x03\x00");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x06\x8a\x80\x80\x80\x00\x01\x7d\x00\x43\x00\x00\x00\x00\x8c\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x06\x86\x80\x80\x80\x00\x01\x7d\x00\x20\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x06\x89\x80\x80\x80\x00\x01\x7f\x00\x43\x00\x00\x00\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x06\x86\x80\x80\x80\x00\x01\x7f\x00\x23\x00\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x06\x8b\x80\x80\x80\x00\x02\x7f\x00\x23\x01\x0b\x7f\x00\x41\x00\x0b");
