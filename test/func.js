var passed = 0;
var failed = 0;
var quiet = false;

testModule0();
end();

function testModule0() {
  var module = createModule([
      0,  97, 115, 109,  11,   0,   0,   0,   4, 116, 121, 112, 101,  90,  16,  64,
      0,   0,  64,   1,   1,   0,  64,   3,   1,   4,   2,   0,  64,   2,   1,   4,
      0,  64,   5,   1,   3,   2,   1,   4,   0,  64,   0,   1,   1,  64,   4,   1,
      3,   2,   1,   1,   1,  64,   0,   1,   2,  64,   0,   1,   3,  64,   0,   1,
      4,  64,   2,   1,   1,   1,   1,  64,   2,   2,   2,   1,   2,  64,   2,   3,
      3,   1,   3,  64,   2,   4,   4,   1,   4,  64,   6,   3,   1,   2,   1,   4,
      1,   1,   4,  64,   1,   1,   1,   1,   8, 102, 117, 110,  99, 116, 105, 111,
    110, 161,   1, 159,   1,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
      0,   1,   1,   2,   3,   4,   5,   0,   6,   0,   5,   7,   8,   9,   5,   7,
      8,   9,   9,  10,  11,  12,  13,  10,  11,  12,  13,  14,   0,   0,   0,   5,
      7,   8,   9,   0,   0,   5,   0,   0,   0,   5,   7,   8,   9,   0,   0,   5,
      0,   0,   0,   5,   7,   8,   9,   0,   0,   5,   1,   1,  15,   1,   1,  15,
      1,  15,   5,   7,   8,   9,   5,   5,   5,   5,   5,   5,   5,   5,   5,   5,
      5,   5,   5,   5,   5,   5,   5,   5,   5,   5,   5,   5,   5,   5,   5,   5,
      5,   5,   5,   5,   5,   5,   5,   5,   5,   5,   5,   5,   5,   5,   5,   5,
      5,   5,   5,   5,   5,   5,   5,   5,   5,   5,   5,   5,   5,   5,   5,   5,
      5,   5,   5,   5,   5,   5,   5,   5,   5,   5,   5,   5,   5,   5,   5,   5,
      5,   5,   5,   5,   6, 101, 120, 112, 111, 114, 116, 166,  19, 140,   1,   2,
      1, 102,   4,   1, 103,  21,  15, 108, 111,  99,  97, 108,  45, 102, 105, 114,
    115, 116,  45, 105,  51,  50,  22,  15, 108, 111,  99,  97, 108,  45, 102, 105,
    114, 115, 116,  45, 105,  54,  52,  23,  15, 108, 111,  99,  97, 108,  45, 102,
    105, 114, 115, 116,  45, 102,  51,  50,  24,  15, 108, 111,  99,  97, 108,  45,
    102, 105, 114, 115, 116,  45, 102,  54,  52,  25,  16, 108, 111,  99,  97, 108,
     45, 115, 101,  99, 111, 110, 100,  45, 105,  51,  50,  26,  16, 108, 111,  99,
     97, 108,  45, 115, 101,  99, 111, 110, 100,  45, 105,  54,  52,  27,  16, 108,
    111,  99,  97, 108,  45, 115, 101,  99, 111, 110, 100,  45, 102,  51,  50,  28,
     16, 108, 111,  99,  97, 108,  45, 115, 101,  99, 111, 110, 100,  45, 102,  54,
     52,  29,  11, 108, 111,  99,  97, 108,  45, 109, 105, 120, 101, 100,  30,  15,
    112,  97, 114,  97, 109,  45, 102, 105, 114, 115, 116,  45, 105,  51,  50,  31,
     15, 112,  97, 114,  97, 109,  45, 102, 105, 114, 115, 116,  45, 105,  54,  52,
     32,  15, 112,  97, 114,  97, 109,  45, 102, 105, 114, 115, 116,  45, 102,  51,
     50,  33,  15, 112,  97, 114,  97, 109,  45, 102, 105, 114, 115, 116,  45, 102,
     54,  52,  34,  16, 112,  97, 114,  97, 109,  45, 115, 101,  99, 111, 110, 100,
     45, 105,  51,  50,  35,  16, 112,  97, 114,  97, 109,  45, 115, 101,  99, 111,
    110, 100,  45, 105,  54,  52,  36,  16, 112,  97, 114,  97, 109,  45, 115, 101,
     99, 111, 110, 100,  45, 102,  51,  50,  37,  16, 112,  97, 114,  97, 109,  45,
    115, 101,  99, 111, 110, 100,  45, 102,  54,  52,  38,  11, 112,  97, 114,  97,
    109,  45, 109, 105, 120, 101, 100,  39,   5, 101, 109, 112, 116, 121,  40,  10,
    118,  97, 108, 117, 101,  45, 118, 111, 105, 100,  41,  10, 118,  97, 108, 117,
    101,  45, 100, 114, 111, 112,  42,   9, 118,  97, 108, 117, 101,  45, 105,  51,
     50,  43,   9, 118,  97, 108, 117, 101,  45, 105,  54,  52,  44,   9, 118,  97,
    108, 117, 101,  45, 102,  51,  50,  45,   9, 118,  97, 108, 117, 101,  45, 102,
     54,  52,  46,  16, 118,  97, 108, 117, 101,  45,  98, 108, 111,  99, 107,  45,
    118, 111, 105, 100,  47,  16, 118,  97, 108, 117, 101,  45,  98, 108, 111,  99,
    107,  45, 100, 114, 111, 112,  48,  15, 118,  97, 108, 117, 101,  45,  98, 108,
    111,  99, 107,  45, 105,  51,  50,  49,  14, 114, 101, 116, 117, 114, 110,  45,
    110, 117, 108, 108,  97, 114, 121,  50,  11, 114, 101, 116, 117, 114, 110,  45,
    118, 111, 105, 100,  51,  11, 114, 101, 116, 117, 114, 110,  45, 100, 114, 111,
    112,  52,  10, 114, 101, 116, 117, 114, 110,  45, 105,  51,  50,  53,  10, 114,
    101, 116, 117, 114, 110,  45, 105,  54,  52,  54,  10, 114, 101, 116, 117, 114,
    110,  45, 102,  51,  50,  55,  10, 114, 101, 116, 117, 114, 110,  45, 102,  54,
     52,  56,  17, 114, 101, 116, 117, 114, 110,  45,  98, 108, 111,  99, 107,  45,
    118, 111, 105, 100,  57,  17, 114, 101, 116, 117, 114, 110,  45,  98, 108, 111,
     99, 107,  45, 100, 114, 111, 112,  58,  16, 114, 101, 116, 117, 114, 110,  45,
     98, 108, 111,  99, 107,  45, 105,  51,  50,  59,  13,  98, 114, 101,  97, 107,
     45, 110, 117, 108, 108,  97, 114, 121,  60,  10,  98, 114, 101,  97, 107,  45,
    118, 111, 105, 100,  61,  10,  98, 114, 101,  97, 107,  45, 100, 114, 111, 112,
     62,   9,  98, 114, 101,  97, 107,  45, 105,  51,  50,  63,   9,  98, 114, 101,
     97, 107,  45, 105,  54,  52,  64,   9,  98, 114, 101,  97, 107,  45, 102,  51,
     50,  65,   9,  98, 114, 101,  97, 107,  45, 102,  54,  52,  66,  16,  98, 114,
    101,  97, 107,  45,  98, 108, 111,  99, 107,  45, 118, 111, 105, 100,  67,  16,
     98, 114, 101,  97, 107,  45,  98, 108, 111,  99, 107,  45, 100, 114, 111, 112,
     68,  15,  98, 114, 101,  97, 107,  45,  98, 108, 111,  99, 107,  45, 105,  51,
     50,  69,  19,  98, 114, 101,  97, 107,  45,  98, 114,  95, 105, 102,  45, 110,
    117, 108, 108,  97, 114, 121,  70,  16,  98, 114, 101,  97, 107,  45,  98, 114,
     95, 105, 102,  45, 118, 111, 105, 100,  71,  15,  98, 114, 101,  97, 107,  45,
     98, 114,  95, 105, 102,  45, 110, 117, 109,  72,  22,  98, 114, 101,  97, 107,
     45,  98, 114,  95, 116,  97,  98, 108, 101,  45, 110, 117, 108, 108,  97, 114,
    121,  73,  19,  98, 114, 101,  97, 107,  45,  98, 114,  95, 116,  97,  98, 108,
    101,  45, 118, 111, 105, 100,  74,  18,  98, 114, 101,  97, 107,  45,  98, 114,
     95, 116,  97,  98, 108, 101,  45, 110, 117, 109,  75,  29,  98, 114, 101,  97,
    107,  45,  98, 114,  95, 116,  97,  98, 108, 101,  45, 110, 101, 115, 116, 101,
    100,  45, 110, 117, 108, 108,  97, 114, 121,  76,  25,  98, 114, 101,  97, 107,
     45,  98, 114,  95, 116,  97,  98, 108, 101,  45, 110, 101, 115, 116, 101, 100,
     45, 110, 117, 109,  77,  14, 105, 110, 105, 116,  45, 108, 111,  99,  97, 108,
     45, 105,  51,  50,  78,  14, 105, 110, 105, 116,  45, 108, 111,  99,  97, 108,
     45, 105,  54,  52,  79,  14, 105, 110, 105, 116,  45, 108, 111,  99,  97, 108,
     45, 102,  51,  50,  80,  14, 105, 110, 105, 116,  45, 108, 111,  99,  97, 108,
     45, 102,  54,  52,  81,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101,
    116, 117, 114, 110,  95,  48,  82,  16,  36,  97, 115, 115, 101, 114, 116,  95,
    114, 101, 116, 117, 114, 110,  95,  49,  83,  16,  36,  97, 115, 115, 101, 114,
    116,  95, 114, 101, 116, 117, 114, 110,  95,  50,  84,  16,  36,  97, 115, 115,
    101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  51,  85,  16,  36,  97,
    115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  52,  86,  16,
     36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  53,
     87,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,
     95,  54,  88,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117,
    114, 110,  95,  55,  89,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101,
    116, 117, 114, 110,  95,  56,  90,  16,  36,  97, 115, 115, 101, 114, 116,  95,
    114, 101, 116, 117, 114, 110,  95,  57,  91,  17,  36,  97, 115, 115, 101, 114,
    116,  95, 114, 101, 116, 117, 114, 110,  95,  49,  48,  92,  17,  36,  97, 115,
    115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,  49,  93,  17,
     36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,
     50,  94,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114,
    110,  95,  49,  51,  95,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101,
    116, 117, 114, 110,  95,  49,  52,  96,  17,  36,  97, 115, 115, 101, 114, 116,
     95, 114, 101, 116, 117, 114, 110,  95,  49,  53,  97,  17,  36,  97, 115, 115,
    101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,  54,  98,  17,  36,
     97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,  55,
     99,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,
     95,  49,  56, 100,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116,
    117, 114, 110,  95,  49,  57, 101,  17,  36,  97, 115, 115, 101, 114, 116,  95,
    114, 101, 116, 117, 114, 110,  95,  50,  48, 102,  17,  36,  97, 115, 115, 101,
    114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  50,  49, 103,  17,  36,  97,
    115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  50,  50, 104,
     17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,
     50,  51, 105,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117,
    114, 110,  95,  50,  52, 106,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114,
    101, 116, 117, 114, 110,  95,  50,  53, 107,  17,  36,  97, 115, 115, 101, 114,
    116,  95, 114, 101, 116, 117, 114, 110,  95,  50,  54, 108,  17,  36,  97, 115,
    115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  50,  55, 109,  17,
     36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  50,
     56, 110,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114,
    110,  95,  50,  57, 111,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101,
    116, 117, 114, 110,  95,  51,  48, 112,  17,  36,  97, 115, 115, 101, 114, 116,
     95, 114, 101, 116, 117, 114, 110,  95,  51,  49, 113,  17,  36,  97, 115, 115,
    101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  51,  50, 114,  17,  36,
     97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  51,  51,
    115,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,
     95,  51,  52, 116,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116,
    117, 114, 110,  95,  51,  53, 117,  17,  36,  97, 115, 115, 101, 114, 116,  95,
    114, 101, 116, 117, 114, 110,  95,  51,  54, 118,  17,  36,  97, 115, 115, 101,
    114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  51,  55, 119,  17,  36,  97,
    115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  51,  56, 120,
     17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,
     51,  57, 121,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117,
    114, 110,  95,  52,  48, 122,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114,
    101, 116, 117, 114, 110,  95,  52,  49, 123,  17,  36,  97, 115, 115, 101, 114,
    116,  95, 114, 101, 116, 117, 114, 110,  95,  52,  50, 124,  17,  36,  97, 115,
    115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  52,  51, 125,  17,
     36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  52,
     52, 126,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114,
    110,  95,  52,  53, 127,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101,
    116, 117, 114, 110,  95,  52,  54, 128,   1,  17,  36,  97, 115, 115, 101, 114,
    116,  95, 114, 101, 116, 117, 114, 110,  95,  52,  55, 129,   1,  17,  36,  97,
    115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  52,  56, 130,
      1,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,
     95,  52,  57, 131,   1,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101,
    116, 117, 114, 110,  95,  53,  48, 132,   1,  17,  36,  97, 115, 115, 101, 114,
    116,  95, 114, 101, 116, 117, 114, 110,  95,  53,  49, 133,   1,  17,  36,  97,
    115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  53,  50, 134,
      1,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,
     95,  53,  51, 135,   1,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101,
    116, 117, 114, 110,  95,  53,  52, 136,   1,  17,  36,  97, 115, 115, 101, 114,
    116,  95, 114, 101, 116, 117, 114, 110,  95,  53,  53, 137,   1,  17,  36,  97,
    115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  53,  54, 138,
      1,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,
     95,  53,  55, 139,   1,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101,
    116, 117, 114, 110,  95,  53,  56, 140,   1,  17,  36,  97, 115, 115, 101, 114,
    116,  95, 114, 101, 116, 117, 114, 110,  95,  53,  57, 141,   1,  17,  36,  97,
    115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  54,  48, 142,
      1,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,
     95,  54,  49, 143,   1,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101,
    116, 117, 114, 110,  95,  54,  50, 144,   1,  17,  36,  97, 115, 115, 101, 114,
    116,  95, 114, 101, 116, 117, 114, 110,  95,  54,  51, 145,   1,  17,  36,  97,
    115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  54,  52, 146,
      1,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,
     95,  54,  53, 147,   1,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101,
    116, 117, 114, 110,  95,  54,  54, 148,   1,  17,  36,  97, 115, 115, 101, 114,
    116,  95, 114, 101, 116, 117, 114, 110,  95,  54,  55, 149,   1,  17,  36,  97,
    115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  54,  56, 150,
      1,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,
     95,  54,  57, 151,   1,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101,
    116, 117, 114, 110,  95,  55,  48, 152,   1,  17,  36,  97, 115, 115, 101, 114,
    116,  95, 114, 101, 116, 117, 114, 110,  95,  55,  49, 153,   1,  17,  36,  97,
    115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  55,  50, 154,
      1,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,
     95,  55,  51, 155,   1,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101,
    116, 117, 114, 110,  95,  55,  52, 156,   1,  17,  36,  97, 115, 115, 101, 114,
    116,  95, 114, 101, 116, 117, 114, 110,  95,  55,  53, 157,   1,  17,  36,  97,
    115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  55,  54, 158,
      1,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,
     95,  55,  55,   4,  99, 111, 100, 101, 191,  11, 159,   1,   1,   0,   1,   0,
      1,   0,   1,   0,   1,   0,   1,   0,   3,   1,   1,   1,   3,   1,   1,   1,
      7,   3,   1,   1,   1,   2,   1,   4,   5,   2,   1,   1,   1,   4,   9,   4,
      2,   1,   1,   2,   1,   3,   1,   4,   1,   0,   1,   0,   1,   0,   1,   0,
      1,   0,   1,   0,   2,   0,  10,   1,   0,  11,   4,   3,   1,   1,   2,   1,
      3,   1,   4,  10,  10,  11,   4,   3,   1,   1,   2,   1,   3,   1,   4,  10,
     10,   5,   1,   2,   1,  20,   0,   5,   1,   2,   2,  20,   0,   5,   1,   2,
      3,  20,   0,   5,   1,   2,   4,  20,   0,   5,   1,   2,   1,  20,   1,   5,
      1,   2,   2,  20,   1,   5,   1,   2,   3,  20,   1,   5,   1,   2,   4,  20,
      1,  29,   4,   3,   1,   1,   2,   1,   3,   1,   4,  20,   4, 124,  20,   0,
     90,  20,   3, 186,  20,   1,  90,  20,   5, 144,  20,   2,  90,  20,   5,   3,
      0,  20,   0,   3,   0,  20,   0,   3,   0,  20,   0,   3,   0,  20,   0,   3,
      0,  20,   1,   3,   0,  20,   1,   3,   0,  20,   1,   3,   0,  20,   1,  21,
      0,  20,   0, 124,  20,   1,  90,  20,   2, 186,  20,   3,  90,  20,   4, 144,
     20,   5,  90,  20,   4,   1,   0,   4,   0,  22,   0,   0,   3,   0,  16,   1,
      4,   0,  16, 205,   0,   4,   0,  17, 225,  60,   6,   0,  19, 102, 102, 155,
     66,  10,   0,  18, 225, 122,  20, 174,  71, 113,  83,  64,   8,   0,   1,  16,
      1,  22,   0,   0,  15,   8,   0,   1,  22,   0,   0,  16,   1,  15,   9,   0,
      1,  22,   0,   0,  16, 205,   0,  15,   3,   0,   9,   0,   6,   0,  22,   0,
      0,   9,   1,   5,   0,  16,   1,   9,   1,   6,   0,  16, 206,   0,   9,   1,
      6,   0,  17, 198,  61,   9,   1,   8,   0,  19, 102, 102, 157,  66,   9,   1,
     12,   0,  18,  82, 184,  30, 133, 235, 177,  83,  64,   9,   1,  10,   0,   1,
     16,   1,  22,   0,   0,  15,   9,   1,  10,   0,   1,  22,   0,   0,  16,   1,
     15,   9,   1,  11,   0,   1,  22,   0,   0,  16, 205,   0,  15,   9,   1,   4,
      0,   6,   0,   0,   7,   0,  22,   0,   0,   6,   1,   0,   6,   0,  16,   1,
      6,   1,   0,   7,   0,  16, 207,   0,   6,   1,   0,   7,   0,  17, 171,  62,
      6,   1,   0,   9,   0,  19, 205, 204, 159,  66,   6,   1,   0,  13,   0,  18,
    195, 245,  40,  92, 143, 242,  83,  64,   6,   1,   0,  11,   0,   1,  16,   1,
     22,   0,   0,  15,   6,   1,   0,  11,   0,   1,  22,   0,   0,  16,   1,  15,
      6,   1,   0,  12,   0,   1,  22,   0,   0,  16, 205,   0,  15,   6,   1,   0,
      6,   0,  20,   0,   7,   0,   0,   9,   0,  22,   0,   0,  20,   0,   7,   1,
      0,  10,   0,  16,  50,  20,   0,   7,   1,   0,  16,  51,  18,   0,  20,   0,
      8,   0,   2,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,  17,
      0,  22,   0,   0,  20,   0,   8,   1,   1,   0,   0,   0,   0,   0,   0,   0,
      0,  18,   0,  16,  50,  20,   0,   8,   1,   1,   0,   0,   0,   0,   0,   0,
      0,   0,  16,  51,  20,   0,   1,  20,   0,   8,   0,   2,   0,   0,   0,   0,
      1,   0,   0,   0,   0,   0,   0,   0,  15,  27,   0,   1,  16,  50,  20,   0,
      8,   1,   2,   0,   0,   0,   0,   1,   0,   0,   0,   0,   0,   0,   0,  16,
     51,  15,  16,   2,  64,   5,   1,   1,   1,  20,   0,   5,   1,   1,   2,  20,
      0,   5,   1,   1,   3,  20,   0,   5,   1,   1,   4,  20,   0,   7,   0,  22,
      0,  21,  16,   0,  77,   7,   0,  22,   0,  22,  17,   0, 104,  10,   0,  22,
      0,  23,  19,   0,   0,   0,   0, 131,  14,   0,  22,   0,  24,  18,   0,   0,
      0,   0,   0,   0,   0,   0, 151,   7,   0,  22,   0,  25,  16,   0,  77,   7,
      0,  22,   0,  26,  17,   0, 104,  10,   0,  22,   0,  27,  19,   0,   0,   0,
      0, 131,  14,   0,  22,   0,  28,  18,   0,   0,   0,   0,   0,   0,   0,   0,
    151,  14,   0,  22,   0,  29,  18,   0,   0,   0,   0,   0,   0,   0,   0, 151,
     11,   0,  16,   2,  16,   3,  22,   2,  30,  16,   2,  77,  11,   0,  17,   2,
     17,   3,  22,   2,  31,  17,   2, 104,  20,   0,  19,   0,   0,   0,  64,  19,
      0,   0,  64,  64,  22,   2,  32,  19,   0,   0,   0,  64, 131,  32,   0,  18,
      0,   0,   0,   0,   0,   0,   0,  64,  18,   0,   0,   0,   0,   0,   0,   8,
     64,  22,   2,  33,  18,   0,   0,   0,   0,   0,   0,   0,  64, 151,  11,   0,
     16,   2,  16,   3,  22,   2,  34,  16,   3,  77,  11,   0,  17,   2,  17,   3,
     22,   2,  35,  17,   3, 104,  20,   0,  19,   0,   0,   0,  64,  19,   0,   0,
     64,  64,  22,   2,  36,  19,   0,   0,  64,  64, 131,  32,   0,  18,   0,   0,
      0,   0,   0,   0,   0,  64,  18,   0,   0,   0,   0,   0,   0,   8,  64,  22,
      2,  37,  18,   0,   0,   0,   0,   0,   0,   8,  64, 151,  36,   0,  19,   0,
      0, 128,  63,  16,   2,  17,   3,  16,   4,  18,   0,   0,   0,   0,   0,   0,
     22,  64,  16,   6,  22,   6,  38,  18,   0,   0,   0,   0,   0,   0,  22,  64,
    151,   6,   0,  22,   0,  39,  16,   1,   6,   0,  22,   0,  40,  16,   1,   6,
      0,  22,   0,  41,  16,   1,   8,   0,  22,   0,  42,  16, 205,   0,  77,   8,
      0,  22,   0,  43,  17, 225,  60, 104,  10,   0,  22,   0,  44,  19, 102, 102,
    155,  66, 131,  14,   0,  22,   0,  45,  18, 225, 122,  20, 174,  71, 113,  83,
     64, 151,   6,   0,  22,   0,  46,  16,   1,   6,   0,  22,   0,  47,  16,   1,
      8,   0,  22,   0,  48,  16, 205,   0,  77,   6,   0,  22,   0,  49,  16,   1,
      6,   0,  22,   0,  50,  16,   1,   6,   0,  22,   0,  51,  16,   1,   8,   0,
     22,   0,  52,  16, 206,   0,  77,   8,   0,  22,   0,  53,  17, 198,  61, 104,
     10,   0,  22,   0,  54,  19, 102, 102, 157,  66, 131,  14,   0,  22,   0,  55,
     18,  82, 184,  30, 133, 235, 177,  83,  64, 151,   6,   0,  22,   0,  56,  16,
      1,   6,   0,  22,   0,  57,  16,   1,   8,   0,  22,   0,  58,  16, 205,   0,
     77,   6,   0,  22,   0,  59,  16,   1,   6,   0,  22,   0,  60,  16,   1,   6,
      0,  22,   0,  61,  16,   1,   8,   0,  22,   0,  62,  16, 207,   0,  77,   8,
      0,  22,   0,  63,  17, 171,  62, 104,  10,   0,  22,   0,  64,  19, 205, 204,
    159,  66, 131,  14,   0,  22,   0,  65,  18, 195, 245,  40,  92, 143, 242,  83,
     64, 151,   6,   0,  22,   0,  66,  16,   1,   6,   0,  22,   0,  67,  16,   1,
      8,   0,  22,   0,  68,  16, 205,   0,  77,   8,   0,  16,   0,  22,   1,  69,
     16,   1,   8,   0,  16,   2,  22,   1,  69,  16,   1,   8,   0,  16,   0,  22,
      1,  70,  16,   1,   8,   0,  16, 127,  22,   1,  70,  16,   1,   9,   0,  16,
      0,  22,   1,  71,  16,  51,  77,   9,   0,  16,   1,  22,   1,  71,  16,  50,
     77,   8,   0,  16,   0,  22,   1,  72,  16,   1,   8,   0,  16,   1,  22,   1,
     72,  16,   1,   8,   0,  16,   5,  22,   1,  72,  16,   1,   8,   0,  16, 127,
     22,   1,  72,  16,   1,   8,   0,  16,   0,  22,   1,  73,  16,   1,   8,   0,
     16,   1,  22,   1,  73,  16,   1,   8,   0,  16,   2,  22,   1,  73,  16,   1,
      9,   0,  16, 156, 127,  22,   1,  73,  16,   1,   9,   0,  16,   0,  22,   1,
     74,  16,  50,  77,   9,   0,  16,   1,  22,   1,  74,  16,  50,  77,   9,   0,
     16,  10,  22,   1,  74,  16,  50,  77,  10,   0,  16, 156, 127,  22,   1,  74,
     16,  50,  77,   8,   0,  16,   0,  22,   1,  75,  16,   1,   8,   0,  16,   1,
     22,   1,  75,  16,   1,   8,   0,  16,   3,  22,   1,  75,  16,   1,   8,   0,
     16, 126,  22,   1,  75,  16,   1,   9,   0,  16,   0,  22,   1,  76,  16,  52,
     77,   9,   0,  16,   1,  22,   1,  76,  16,  50,  77,   9,   0,  16,   2,  22,
      1,  76,  16,  52,  77,   9,   0,  16, 125,  22,   1,  76,  16,  52,  77,   7,
      0,  22,   0,  77,  16,   0,  77,   7,   0,  22,   0,  78,  17,   0, 104,  10,
      0,  22,   0,  79,  19,   0,   0,   0,   0, 131,  14,   0,  22,   0,  80,  18,
      0,   0,   0,   0,   0,   0,   0,   0, 151,
  ]);

  assertReturn(module, '$assert_return_0', 'external/testsuite/func.wast', 162);
  assertReturn(module, '$assert_return_1', 'external/testsuite/func.wast', 163);
  assertReturn(module, '$assert_return_2', 'external/testsuite/func.wast', 164);
  assertReturn(module, '$assert_return_3', 'external/testsuite/func.wast', 165);
  assertReturn(module, '$assert_return_4', 'external/testsuite/func.wast', 166);
  assertReturn(module, '$assert_return_5', 'external/testsuite/func.wast', 167);
  assertReturn(module, '$assert_return_6', 'external/testsuite/func.wast', 168);
  assertReturn(module, '$assert_return_7', 'external/testsuite/func.wast', 169);
  assertReturn(module, '$assert_return_8', 'external/testsuite/func.wast', 170);
  assertReturn(module, '$assert_return_9', 'external/testsuite/func.wast', 173);
  assertReturn(module, '$assert_return_10', 'external/testsuite/func.wast', 176);
  assertReturn(module, '$assert_return_11', 'external/testsuite/func.wast', 179);
  assertReturn(module, '$assert_return_12', 'external/testsuite/func.wast', 182);
  assertReturn(module, '$assert_return_13', 'external/testsuite/func.wast', 185);
  assertReturn(module, '$assert_return_14', 'external/testsuite/func.wast', 188);
  assertReturn(module, '$assert_return_15', 'external/testsuite/func.wast', 191);
  assertReturn(module, '$assert_return_16', 'external/testsuite/func.wast', 194);
  assertReturn(module, '$assert_return_17', 'external/testsuite/func.wast', 198);
  assertReturn(module, '$assert_return_18', 'external/testsuite/func.wast', 205);
  assertReturn(module, '$assert_return_19', 'external/testsuite/func.wast', 206);
  assertReturn(module, '$assert_return_20', 'external/testsuite/func.wast', 207);
  assertReturn(module, '$assert_return_21', 'external/testsuite/func.wast', 208);
  assertReturn(module, '$assert_return_22', 'external/testsuite/func.wast', 209);
  assertReturn(module, '$assert_return_23', 'external/testsuite/func.wast', 210);
  assertReturn(module, '$assert_return_24', 'external/testsuite/func.wast', 211);
  assertReturn(module, '$assert_return_25', 'external/testsuite/func.wast', 212);
  assertReturn(module, '$assert_return_26', 'external/testsuite/func.wast', 213);
  assertReturn(module, '$assert_return_27', 'external/testsuite/func.wast', 214);
  assertReturn(module, '$assert_return_28', 'external/testsuite/func.wast', 216);
  assertReturn(module, '$assert_return_29', 'external/testsuite/func.wast', 217);
  assertReturn(module, '$assert_return_30', 'external/testsuite/func.wast', 218);
  assertReturn(module, '$assert_return_31', 'external/testsuite/func.wast', 219);
  assertReturn(module, '$assert_return_32', 'external/testsuite/func.wast', 220);
  assertReturn(module, '$assert_return_33', 'external/testsuite/func.wast', 221);
  assertReturn(module, '$assert_return_34', 'external/testsuite/func.wast', 222);
  assertReturn(module, '$assert_return_35', 'external/testsuite/func.wast', 223);
  assertReturn(module, '$assert_return_36', 'external/testsuite/func.wast', 224);
  assertReturn(module, '$assert_return_37', 'external/testsuite/func.wast', 225);
  assertReturn(module, '$assert_return_38', 'external/testsuite/func.wast', 227);
  assertReturn(module, '$assert_return_39', 'external/testsuite/func.wast', 228);
  assertReturn(module, '$assert_return_40', 'external/testsuite/func.wast', 229);
  assertReturn(module, '$assert_return_41', 'external/testsuite/func.wast', 230);
  assertReturn(module, '$assert_return_42', 'external/testsuite/func.wast', 231);
  assertReturn(module, '$assert_return_43', 'external/testsuite/func.wast', 232);
  assertReturn(module, '$assert_return_44', 'external/testsuite/func.wast', 233);
  assertReturn(module, '$assert_return_45', 'external/testsuite/func.wast', 234);
  assertReturn(module, '$assert_return_46', 'external/testsuite/func.wast', 235);
  assertReturn(module, '$assert_return_47', 'external/testsuite/func.wast', 236);
  assertReturn(module, '$assert_return_48', 'external/testsuite/func.wast', 238);
  assertReturn(module, '$assert_return_49', 'external/testsuite/func.wast', 239);
  assertReturn(module, '$assert_return_50', 'external/testsuite/func.wast', 240);
  assertReturn(module, '$assert_return_51', 'external/testsuite/func.wast', 241);
  assertReturn(module, '$assert_return_52', 'external/testsuite/func.wast', 242);
  assertReturn(module, '$assert_return_53', 'external/testsuite/func.wast', 243);
  assertReturn(module, '$assert_return_54', 'external/testsuite/func.wast', 245);
  assertReturn(module, '$assert_return_55', 'external/testsuite/func.wast', 246);
  assertReturn(module, '$assert_return_56', 'external/testsuite/func.wast', 247);
  assertReturn(module, '$assert_return_57', 'external/testsuite/func.wast', 248);
  assertReturn(module, '$assert_return_58', 'external/testsuite/func.wast', 249);
  assertReturn(module, '$assert_return_59', 'external/testsuite/func.wast', 250);
  assertReturn(module, '$assert_return_60', 'external/testsuite/func.wast', 251);
  assertReturn(module, '$assert_return_61', 'external/testsuite/func.wast', 252);
  assertReturn(module, '$assert_return_62', 'external/testsuite/func.wast', 253);
  assertReturn(module, '$assert_return_63', 'external/testsuite/func.wast', 254);
  assertReturn(module, '$assert_return_64', 'external/testsuite/func.wast', 255);
  assertReturn(module, '$assert_return_65', 'external/testsuite/func.wast', 256);
  assertReturn(module, '$assert_return_66', 'external/testsuite/func.wast', 257);
  assertReturn(module, '$assert_return_67', 'external/testsuite/func.wast', 258);
  assertReturn(module, '$assert_return_68', 'external/testsuite/func.wast', 259);
  assertReturn(module, '$assert_return_69', 'external/testsuite/func.wast', 260);
  assertReturn(module, '$assert_return_70', 'external/testsuite/func.wast', 262);
  assertReturn(module, '$assert_return_71', 'external/testsuite/func.wast', 265);
  assertReturn(module, '$assert_return_72', 'external/testsuite/func.wast', 268);
  assertReturn(module, '$assert_return_73', 'external/testsuite/func.wast', 271);
  assertReturn(module, '$assert_return_74', 'external/testsuite/func.wast', 274);
  assertReturn(module, '$assert_return_75', 'external/testsuite/func.wast', 275);
  assertReturn(module, '$assert_return_76', 'external/testsuite/func.wast', 276);
  assertReturn(module, '$assert_return_77', 'external/testsuite/func.wast', 277);
}

function createModule(data) {
  var u8a = new Uint8Array(data);
  var ffi = {spectest: {print: print}};
  return Wasm.instantiateModule(u8a, ffi);
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