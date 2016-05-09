var passed = 0;
var failed = 0;
var quiet = false;

testModule0();
testModule1();
testModule2();
testModule3();
end();

function testModule0() {
  var module = createModule([
      0,  97, 115, 109,  11,   0,   0,   0,   4, 116, 121, 112, 101,  12,   3,  64,
      0,   1,   3,  64,   0,   1,   1,  64,   0,   0,   8, 102, 117, 110,  99, 116,
    105, 111, 110,  20,  19,   0,   1,   2,   2,   2,   1,   1,   2,   1,   1,   2,
      1,   1,   2,   1,   1,   2,   1,   1,   6, 109, 101, 109, 111, 114, 121,   3,
      1,   1,   0,   6, 101, 120, 112, 111, 114, 116, 150,   2,  19,   0,   8, 102,
     51,  50,  46, 108, 111,  97, 100,   1,   8, 105,  51,  50,  46, 108, 111,  97,
    100,   2,   9, 102,  51,  50,  46, 115, 116, 111, 114, 101,   3,   9, 105,  51,
     50,  46, 115, 116, 111, 114, 101,   4,   5, 114, 101, 115, 101, 116,   5,  16,
     36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  48,
      6,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,
     95,  49,   7,   9,  36, 105, 110, 118, 111, 107, 101,  95,  50,   8,  16,  36,
     97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  51,   9,
     16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,
     52,  10,   9,  36, 105, 110, 118, 111, 107, 101,  95,  53,  11,  16,  36,  97,
    115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  54,  12,  16,
     36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  55,
     13,   9,  36, 105, 110, 118, 111, 107, 101,  95,  56,  14,  16,  36,  97, 115,
    115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  57,  15,  17,  36,
     97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,  48,
     16,  10,  36, 105, 110, 118, 111, 107, 101,  95,  49,  49,  17,  17,  36,  97,
    115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,  50,  18,
     17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,
     49,  51,   4,  99, 111, 100, 101, 182,   1,  19,   6,   0,  16,   0,  44,   2,
      0,   6,   0,  16,   0,  42,   2,   0,  11,   0,  16,   0,  19,   0,   0, 160,
    127,  53,   2,   0,  12,   0,  16,   0,  16, 128, 128, 128, 253,   7,  51,   2,
      0,   8,   0,  16,   0,  16,   0,  51,   2,   0,  11,   0,  22,   0,   1,  16,
    128, 128, 128, 253,   7,  77,  12,   0,  22,   0,   0, 180,  19,   0,   0, 160,
    127, 180,  77,   4,   0,  22,   0,   4,   7,   0,  22,   0,   1,  16,   0,  77,
     10,   0,  22,   0,   0,  19,   0,   0,   0,   0, 131,   4,   0,  22,   0,   2,
     11,   0,  22,   0,   1,  16, 128, 128, 128, 253,   7,  77,  12,   0,  22,   0,
      0, 180,  19,   0,   0, 160, 127, 180,  77,   4,   0,  22,   0,   4,   7,   0,
     22,   0,   1,  16,   0,  77,  10,   0,  22,   0,   0,  19,   0,   0,   0,   0,
    131,   4,   0,  22,   0,   3,  11,   0,  22,   0,   1,  16, 128, 128, 128, 253,
      7,  77,  12,   0,  22,   0,   0, 180,  19,   0,   0, 160, 127, 180,  77,   4,
    100,  97, 116,  97,   7,   1,   0,   4,   0,   0, 160, 127,
  ]);

  assertReturn(module, '$assert_return_0', 'external/testsuite/float_memory.wast', 24);
  assertReturn(module, '$assert_return_1', 'external/testsuite/float_memory.wast', 25);
  invoke(module, '$invoke_2');
  assertReturn(module, '$assert_return_3', 'external/testsuite/float_memory.wast', 27);
  assertReturn(module, '$assert_return_4', 'external/testsuite/float_memory.wast', 28);
  invoke(module, '$invoke_5');
  assertReturn(module, '$assert_return_6', 'external/testsuite/float_memory.wast', 30);
  assertReturn(module, '$assert_return_7', 'external/testsuite/float_memory.wast', 31);
  invoke(module, '$invoke_8');
  assertReturn(module, '$assert_return_9', 'external/testsuite/float_memory.wast', 33);
  assertReturn(module, '$assert_return_10', 'external/testsuite/float_memory.wast', 34);
  invoke(module, '$invoke_11');
  assertReturn(module, '$assert_return_12', 'external/testsuite/float_memory.wast', 36);
  assertReturn(module, '$assert_return_13', 'external/testsuite/float_memory.wast', 37);
}

function testModule1() {
  var module = createModule([
      0,  97, 115, 109,  11,   0,   0,   0,   4, 116, 121, 112, 101,  16,   4,  64,
      0,   1,   4,  64,   0,   1,   2,  64,   0,   0,  64,   0,   1,   1,   8, 102,
    117, 110,  99, 116, 105, 111, 110,  20,  19,   0,   1,   2,   2,   2,   3,   3,
      2,   3,   3,   2,   3,   3,   2,   3,   3,   2,   3,   3,   6, 109, 101, 109,
    111, 114, 121,   3,   1,   1,   0,   6, 101, 120, 112, 111, 114, 116, 150,   2,
     19,   0,   8, 102,  54,  52,  46, 108, 111,  97, 100,   1,   8, 105,  54,  52,
     46, 108, 111,  97, 100,   2,   9, 102,  54,  52,  46, 115, 116, 111, 114, 101,
      3,   9, 105,  54,  52,  46, 115, 116, 111, 114, 101,   4,   5, 114, 101, 115,
    101, 116,   5,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117,
    114, 110,  95,  48,   6,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101,
    116, 117, 114, 110,  95,  49,   7,   9,  36, 105, 110, 118, 111, 107, 101,  95,
     50,   8,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114,
    110,  95,  51,   9,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116,
    117, 114, 110,  95,  52,  10,   9,  36, 105, 110, 118, 111, 107, 101,  95,  53,
     11,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,
     95,  54,  12,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117,
    114, 110,  95,  55,  13,   9,  36, 105, 110, 118, 111, 107, 101,  95,  56,  14,
     16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,
     57,  15,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114,
    110,  95,  49,  48,  16,  10,  36, 105, 110, 118, 111, 107, 101,  95,  49,  49,
     17,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,
     95,  49,  50,  18,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116,
    117, 114, 110,  95,  49,  51,   4,  99, 111, 100, 101, 226,   1,  19,   6,   0,
     16,   0,  45,   3,   0,   6,   0,  16,   0,  43,   3,   0,  15,   0,  16,   0,
     18,   0,   0,   0,   0,   0,   0, 244, 127,  54,   3,   0,  17,   0,  16,   0,
     17, 128, 128, 128, 128, 128, 128, 128, 250, 255,   0,  52,   3,   0,   8,   0,
     16,   0,  17,   0,  52,   3,   0,  16,   0,  22,   0,   1,  17, 128, 128, 128,
    128, 128, 128, 128, 250, 255,   0, 104,  16,   0,  22,   0,   0, 181,  18,   0,
      0,   0,   0,   0,   0, 244, 127, 181, 104,   4,   0,  22,   0,   4,   7,   0,
     22,   0,   1,  17,   0, 104,  14,   0,  22,   0,   0,  18,   0,   0,   0,   0,
      0,   0,   0,   0, 151,   4,   0,  22,   0,   2,  16,   0,  22,   0,   1,  17,
    128, 128, 128, 128, 128, 128, 128, 250, 255,   0, 104,  16,   0,  22,   0,   0,
    181,  18,   0,   0,   0,   0,   0,   0, 244, 127, 181, 104,   4,   0,  22,   0,
      4,   7,   0,  22,   0,   1,  17,   0, 104,  14,   0,  22,   0,   0,  18,   0,
      0,   0,   0,   0,   0,   0,   0, 151,   4,   0,  22,   0,   3,  16,   0,  22,
      0,   1,  17, 128, 128, 128, 128, 128, 128, 128, 250, 255,   0, 104,  16,   0,
     22,   0,   0, 181,  18,   0,   0,   0,   0,   0,   0, 244, 127, 181, 104,   4,
    100,  97, 116,  97,  11,   1,   0,   8,   0,   0,   0,   0,   0,   0, 244, 127,
  ]);

  assertReturn(module, '$assert_return_0', 'external/testsuite/float_memory.wast', 58);
  assertReturn(module, '$assert_return_1', 'external/testsuite/float_memory.wast', 59);
  invoke(module, '$invoke_2');
  assertReturn(module, '$assert_return_3', 'external/testsuite/float_memory.wast', 61);
  assertReturn(module, '$assert_return_4', 'external/testsuite/float_memory.wast', 62);
  invoke(module, '$invoke_5');
  assertReturn(module, '$assert_return_6', 'external/testsuite/float_memory.wast', 64);
  assertReturn(module, '$assert_return_7', 'external/testsuite/float_memory.wast', 65);
  invoke(module, '$invoke_8');
  assertReturn(module, '$assert_return_9', 'external/testsuite/float_memory.wast', 67);
  assertReturn(module, '$assert_return_10', 'external/testsuite/float_memory.wast', 68);
  invoke(module, '$invoke_11');
  assertReturn(module, '$assert_return_12', 'external/testsuite/float_memory.wast', 70);
  assertReturn(module, '$assert_return_13', 'external/testsuite/float_memory.wast', 71);
}

function testModule2() {
  var module = createModule([
      0,  97, 115, 109,  11,   0,   0,   0,   4, 116, 121, 112, 101,  12,   3,  64,
      0,   1,   3,  64,   0,   1,   1,  64,   0,   0,   8, 102, 117, 110,  99, 116,
    105, 111, 110,  20,  19,   0,   1,   2,   2,   2,   1,   1,   2,   1,   1,   2,
      1,   1,   2,   1,   1,   2,   1,   1,   6, 109, 101, 109, 111, 114, 121,   3,
      1,   1,   0,   6, 101, 120, 112, 111, 114, 116, 150,   2,  19,   0,   8, 102,
     51,  50,  46, 108, 111,  97, 100,   1,   8, 105,  51,  50,  46, 108, 111,  97,
    100,   2,   9, 102,  51,  50,  46, 115, 116, 111, 114, 101,   3,   9, 105,  51,
     50,  46, 115, 116, 111, 114, 101,   4,   5, 114, 101, 115, 101, 116,   5,  16,
     36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  48,
      6,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,
     95,  49,   7,   9,  36, 105, 110, 118, 111, 107, 101,  95,  50,   8,  16,  36,
     97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  51,   9,
     16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,
     52,  10,   9,  36, 105, 110, 118, 111, 107, 101,  95,  53,  11,  16,  36,  97,
    115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  54,  12,  16,
     36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  55,
     13,   9,  36, 105, 110, 118, 111, 107, 101,  95,  56,  14,  16,  36,  97, 115,
    115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  57,  15,  17,  36,
     97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,  48,
     16,  10,  36, 105, 110, 118, 111, 107, 101,  95,  49,  49,  17,  17,  36,  97,
    115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,  50,  18,
     17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,
     49,  51,   4,  99, 111, 100, 101, 182,   1,  19,   6,   0,  16,   0,  44,   2,
      0,   6,   0,  16,   0,  42,   2,   0,  11,   0,  16,   0,  19,   1,   0, 208,
    127,  53,   2,   0,  12,   0,  16,   0,  16, 129, 128, 192, 254,   7,  51,   2,
      0,   8,   0,  16,   0,  16,   0,  51,   2,   0,  11,   0,  22,   0,   1,  16,
    129, 128, 192, 254,   7,  77,  12,   0,  22,   0,   0, 180,  19,   1,   0, 208,
    127, 180,  77,   4,   0,  22,   0,   4,   7,   0,  22,   0,   1,  16,   0,  77,
     10,   0,  22,   0,   0,  19,   0,   0,   0,   0, 131,   4,   0,  22,   0,   2,
     11,   0,  22,   0,   1,  16, 129, 128, 192, 254,   7,  77,  12,   0,  22,   0,
      0, 180,  19,   1,   0, 208, 127, 180,  77,   4,   0,  22,   0,   4,   7,   0,
     22,   0,   1,  16,   0,  77,  10,   0,  22,   0,   0,  19,   0,   0,   0,   0,
    131,   4,   0,  22,   0,   3,  11,   0,  22,   0,   1,  16, 129, 128, 192, 254,
      7,  77,  12,   0,  22,   0,   0, 180,  19,   1,   0, 208, 127, 180,  77,   4,
    100,  97, 116,  97,   7,   1,   0,   4,   1,   0, 208, 127,
  ]);

  assertReturn(module, '$assert_return_0', 'external/testsuite/float_memory.wast', 94);
  assertReturn(module, '$assert_return_1', 'external/testsuite/float_memory.wast', 95);
  invoke(module, '$invoke_2');
  assertReturn(module, '$assert_return_3', 'external/testsuite/float_memory.wast', 97);
  assertReturn(module, '$assert_return_4', 'external/testsuite/float_memory.wast', 98);
  invoke(module, '$invoke_5');
  assertReturn(module, '$assert_return_6', 'external/testsuite/float_memory.wast', 100);
  assertReturn(module, '$assert_return_7', 'external/testsuite/float_memory.wast', 101);
  invoke(module, '$invoke_8');
  assertReturn(module, '$assert_return_9', 'external/testsuite/float_memory.wast', 103);
  assertReturn(module, '$assert_return_10', 'external/testsuite/float_memory.wast', 104);
  invoke(module, '$invoke_11');
  assertReturn(module, '$assert_return_12', 'external/testsuite/float_memory.wast', 106);
  assertReturn(module, '$assert_return_13', 'external/testsuite/float_memory.wast', 107);
}

function testModule3() {
  var module = createModule([
      0,  97, 115, 109,  11,   0,   0,   0,   4, 116, 121, 112, 101,  16,   4,  64,
      0,   1,   4,  64,   0,   1,   2,  64,   0,   0,  64,   0,   1,   1,   8, 102,
    117, 110,  99, 116, 105, 111, 110,  20,  19,   0,   1,   2,   2,   2,   3,   3,
      2,   3,   3,   2,   3,   3,   2,   3,   3,   2,   3,   3,   6, 109, 101, 109,
    111, 114, 121,   3,   1,   1,   0,   6, 101, 120, 112, 111, 114, 116, 150,   2,
     19,   0,   8, 102,  54,  52,  46, 108, 111,  97, 100,   1,   8, 105,  54,  52,
     46, 108, 111,  97, 100,   2,   9, 102,  54,  52,  46, 115, 116, 111, 114, 101,
      3,   9, 105,  54,  52,  46, 115, 116, 111, 114, 101,   4,   5, 114, 101, 115,
    101, 116,   5,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117,
    114, 110,  95,  48,   6,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101,
    116, 117, 114, 110,  95,  49,   7,   9,  36, 105, 110, 118, 111, 107, 101,  95,
     50,   8,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114,
    110,  95,  51,   9,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116,
    117, 114, 110,  95,  52,  10,   9,  36, 105, 110, 118, 111, 107, 101,  95,  53,
     11,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,
     95,  54,  12,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117,
    114, 110,  95,  55,  13,   9,  36, 105, 110, 118, 111, 107, 101,  95,  56,  14,
     16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,
     57,  15,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114,
    110,  95,  49,  48,  16,  10,  36, 105, 110, 118, 111, 107, 101,  95,  49,  49,
     17,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,
     95,  49,  50,  18,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116,
    117, 114, 110,  95,  49,  51,   4,  99, 111, 100, 101, 226,   1,  19,   6,   0,
     16,   0,  45,   3,   0,   6,   0,  16,   0,  43,   3,   0,  15,   0,  16,   0,
     18,   1,   0,   0,   0,   0,   0, 252, 127,  54,   3,   0,  17,   0,  16,   0,
     17, 129, 128, 128, 128, 128, 128, 128, 254, 255,   0,  52,   3,   0,   8,   0,
     16,   0,  17,   0,  52,   3,   0,  16,   0,  22,   0,   1,  17, 129, 128, 128,
    128, 128, 128, 128, 254, 255,   0, 104,  16,   0,  22,   0,   0, 181,  18,   1,
      0,   0,   0,   0,   0, 252, 127, 181, 104,   4,   0,  22,   0,   4,   7,   0,
     22,   0,   1,  17,   0, 104,  14,   0,  22,   0,   0,  18,   0,   0,   0,   0,
      0,   0,   0,   0, 151,   4,   0,  22,   0,   2,  16,   0,  22,   0,   1,  17,
    129, 128, 128, 128, 128, 128, 128, 254, 255,   0, 104,  16,   0,  22,   0,   0,
    181,  18,   1,   0,   0,   0,   0,   0, 252, 127, 181, 104,   4,   0,  22,   0,
      4,   7,   0,  22,   0,   1,  17,   0, 104,  14,   0,  22,   0,   0,  18,   0,
      0,   0,   0,   0,   0,   0,   0, 151,   4,   0,  22,   0,   3,  16,   0,  22,
      0,   1,  17, 129, 128, 128, 128, 128, 128, 128, 254, 255,   0, 104,  16,   0,
     22,   0,   0, 181,  18,   1,   0,   0,   0,   0,   0, 252, 127, 181, 104,   4,
    100,  97, 116,  97,  11,   1,   0,   8,   1,   0,   0,   0,   0,   0, 252, 127,
  ]);

  assertReturn(module, '$assert_return_0', 'external/testsuite/float_memory.wast', 128);
  assertReturn(module, '$assert_return_1', 'external/testsuite/float_memory.wast', 129);
  invoke(module, '$invoke_2');
  assertReturn(module, '$assert_return_3', 'external/testsuite/float_memory.wast', 131);
  assertReturn(module, '$assert_return_4', 'external/testsuite/float_memory.wast', 132);
  invoke(module, '$invoke_5');
  assertReturn(module, '$assert_return_6', 'external/testsuite/float_memory.wast', 134);
  assertReturn(module, '$assert_return_7', 'external/testsuite/float_memory.wast', 135);
  invoke(module, '$invoke_8');
  assertReturn(module, '$assert_return_9', 'external/testsuite/float_memory.wast', 137);
  assertReturn(module, '$assert_return_10', 'external/testsuite/float_memory.wast', 138);
  invoke(module, '$invoke_11');
  assertReturn(module, '$assert_return_12', 'external/testsuite/float_memory.wast', 140);
  assertReturn(module, '$assert_return_13', 'external/testsuite/float_memory.wast', 141);
}

function createModule(data) {
  var u8a = new Uint8Array(data);
  var ffi = {spectest: {print: print}};
  return Wasm.instantiateModule(u8a.buffer, ffi);
}

function assertReturn(module, name, file, line) {
  try {
    var result = module.exports[name]();
  } catch(e) {
    print(file + ":" + line + ": " + name + " unexpectedly threw: " + e);
  }

  if (result == 1) {
    passed++;
  } else {
    print(file + ":" + line + ": " + name + " failed.");
    failed++;
  }
}

function assertTrap(module, name, file, line) {
  var threw = false;
  try {
    module.exports[name]();
  } catch (e) {
    threw = true;
  }

  if (threw) {
    passed++;
  } else {
    print(file + ":" + line + ": " + name + " failed, didn't throw");
    failed++;
  }
}

function invoke(module, name) {
  try {
    var invokeResult = module.exports[name]();
  } catch(e) {
    print(file + ":" + line + ": " + name + " unexpectedly threw: " + e);
  }

  if (!quiet)
    print(name + " = " + invokeResult);
}

function end() {
  if ((failed > 0) || !quiet)
    print(passed + "/" + (passed + failed) + " tests passed.");
}