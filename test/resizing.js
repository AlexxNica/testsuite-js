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

$$ = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x8d\x80\x80\x80\x00\x03\x60\x00\x01\x7f\x60\x00\x00\x60\x01\x7f\x01\x7f\x03\x87\x80\x80\x80\x00\x06\x00\x01\x00\x01\x02\x00\x05\x83\x80\x80\x80\x00\x01\x00\x00\x07\xd7\x80\x80\x80\x00\x06\x0c\x6c\x6f\x61\x64\x5f\x61\x74\x5f\x7a\x65\x72\x6f\x00\x00\x0d\x73\x74\x6f\x72\x65\x5f\x61\x74\x5f\x7a\x65\x72\x6f\x00\x01\x11\x6c\x6f\x61\x64\x5f\x61\x74\x5f\x70\x61\x67\x65\x5f\x73\x69\x7a\x65\x00\x02\x12\x73\x74\x6f\x72\x65\x5f\x61\x74\x5f\x70\x61\x67\x65\x5f\x73\x69\x7a\x65\x00\x03\x04\x67\x72\x6f\x77\x00\x04\x04\x73\x69\x7a\x65\x00\x05\x0a\xcd\x80\x80\x80\x00\x06\x87\x80\x80\x80\x00\x00\x41\x00\x28\x02\x00\x0b\x89\x80\x80\x80\x00\x00\x41\x00\x41\x02\x36\x02\x00\x0b\x89\x80\x80\x80\x00\x00\x41\x80\x80\x04\x28\x02\x00\x0b\x8b\x80\x80\x80\x00\x00\x41\x80\x80\x04\x41\x03\x36\x02\x00\x0b\x86\x80\x80\x80\x00\x00\x20\x00\x40\x00\x0b\x84\x80\x80\x80\x00\x00\x3f\x00\x0b");
assert_return(() => $$.exports["size"](), 0);
assert_trap(() => $$.exports["store_at_zero"]());
assert_trap(() => $$.exports["load_at_zero"]());
assert_trap(() => $$.exports["store_at_page_size"]());
assert_trap(() => $$.exports["load_at_page_size"]());
assert_return(() => $$.exports["grow"](1), 0);
assert_return(() => $$.exports["size"](), 1);
assert_return(() => $$.exports["load_at_zero"](), 0);
assert_return(() => $$.exports["store_at_zero"]());
assert_return(() => $$.exports["load_at_zero"](), 2);
assert_trap(() => $$.exports["store_at_page_size"]());
assert_trap(() => $$.exports["load_at_page_size"]());
assert_return(() => $$.exports["grow"](4), 1);
assert_return(() => $$.exports["size"](), 5);
assert_return(() => $$.exports["load_at_zero"](), 2);
assert_return(() => $$.exports["store_at_zero"]());
assert_return(() => $$.exports["load_at_zero"](), 2);
assert_return(() => $$.exports["load_at_page_size"](), 0);
assert_return(() => $$.exports["store_at_page_size"]());
assert_return(() => $$.exports["load_at_page_size"](), 3);
$$ = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x86\x80\x80\x80\x00\x01\x60\x01\x7f\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x05\x83\x80\x80\x80\x00\x01\x00\x00\x07\x88\x80\x80\x80\x00\x01\x04\x67\x72\x6f\x77\x00\x00\x0a\x8c\x80\x80\x80\x00\x01\x86\x80\x80\x80\x00\x00\x20\x00\x40\x00\x0b");
assert_return(() => $$.exports["grow"](0), 0);
assert_return(() => $$.exports["grow"](1), 0);
assert_return(() => $$.exports["grow"](0), 1);
assert_return(() => $$.exports["grow"](2), 1);
assert_return(() => $$.exports["grow"](800), 3);
$$ = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x86\x80\x80\x80\x00\x01\x60\x01\x7f\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x00\x0a\x07\x88\x80\x80\x80\x00\x01\x04\x67\x72\x6f\x77\x00\x00\x0a\x8c\x80\x80\x80\x00\x01\x86\x80\x80\x80\x00\x00\x20\x00\x40\x00\x0b");
assert_return(() => $$.exports["grow"](0), 0);
assert_return(() => $$.exports["grow"](1), 0);
assert_return(() => $$.exports["grow"](1), 1);
assert_return(() => $$.exports["grow"](2), 2);
assert_return(() => $$.exports["grow"](6), 4);
assert_return(() => $$.exports["grow"](0), 10);
assert_return(() => $$.exports["grow"](1), -1);
