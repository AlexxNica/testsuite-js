var passed = 0;
var failed = 0;
var quiet = false;

testModule0();
end();

function testModule0() {
  var module = createModule([
      0,  97, 115, 109,  11,   0,   0,   0,   4, 116, 121, 112, 101,  40,   8,  64,
      2,   1,   1,   0,  64,   2,   1,   2,   0,  64,   1,   1,   1,   1,  64,   1,
      1,   1,   2,  64,   1,   2,   1,   2,  64,   1,   3,   1,   3,  64,   1,   4,
      1,   4,  64,   0,   1,   1,   8, 102, 117, 110,  99, 116, 105, 111, 110,  92,
     91,   0,   0,   1,   2,   2,   3,   2,   2,   2,   4,   4,   4,   4,   4,   5,
      6,   2,   2,   4,   4,   4,   5,   6,   7,   7,   7,   7,   7,   7,   7,   7,
      7,   7,   7,   7,   7,   7,   7,   7,   7,   7,   7,   7,   7,   7,   7,   7,
      7,   7,   7,   7,   7,   7,   7,   7,   7,   7,   7,   7,   7,   7,   7,   7,
      7,   7,   7,   7,   7,   7,   7,   7,   7,   7,   7,   7,   7,   7,   7,   7,
      7,   7,   7,   7,   7,   7,   7,   7,   7,   7,   7,   7,   6, 109, 101, 109,
    111, 114, 121,   3,   1,   1,   0,   6, 101, 120, 112, 111, 114, 116, 210,  11,
     85,   6,  12, 105,  51,  50,  95, 108, 111,  97, 100,  49,  54,  95, 115,   7,
     12, 105,  51,  50,  95, 108, 111,  97, 100,  49,  54,  95, 117,   8,   8, 105,
     51,  50,  95, 108, 111,  97, 100,   9,  12, 105,  54,  52,  95, 108, 111,  97,
    100,  49,  54,  95, 115,  10,  12, 105,  54,  52,  95, 108, 111,  97, 100,  49,
     54,  95, 117,  11,  12, 105,  54,  52,  95, 108, 111,  97, 100,  51,  50,  95,
    115,  12,  12, 105,  54,  52,  95, 108, 111,  97, 100,  51,  50,  95, 117,  13,
      8, 105,  54,  52,  95, 108, 111,  97, 100,  14,   8, 102,  51,  50,  95, 108,
    111,  97, 100,  15,   8, 102,  54,  52,  95, 108, 111,  97, 100,  16,  11, 105,
     51,  50,  95, 115, 116, 111, 114, 101,  49,  54,  17,   9, 105,  51,  50,  95,
    115, 116, 111, 114, 101,  18,  11, 105,  54,  52,  95, 115, 116, 111, 114, 101,
     49,  54,  19,  11, 105,  54,  52,  95, 115, 116, 111, 114, 101,  51,  50,  20,
      9, 105,  54,  52,  95, 115, 116, 111, 114, 101,  21,   9, 102,  51,  50,  95,
    115, 116, 111, 114, 101,  22,   9, 102,  54,  52,  95, 115, 116, 111, 114, 101,
     23,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,
     95,  48,  24,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117,
    114, 110,  95,  49,  25,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101,
    116, 117, 114, 110,  95,  50,  26,  16,  36,  97, 115, 115, 101, 114, 116,  95,
    114, 101, 116, 117, 114, 110,  95,  51,  27,  16,  36,  97, 115, 115, 101, 114,
    116,  95, 114, 101, 116, 117, 114, 110,  95,  52,  28,  16,  36,  97, 115, 115,
    101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  53,  29,  16,  36,  97,
    115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  54,  30,  16,
     36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  55,
     31,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,
     95,  56,  32,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117,
    114, 110,  95,  57,  33,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101,
    116, 117, 114, 110,  95,  49,  48,  34,  17,  36,  97, 115, 115, 101, 114, 116,
     95, 114, 101, 116, 117, 114, 110,  95,  49,  49,  35,  17,  36,  97, 115, 115,
    101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,  50,  36,  17,  36,
     97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,  51,
     37,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,
     95,  49,  52,  38,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116,
    117, 114, 110,  95,  49,  53,  39,  17,  36,  97, 115, 115, 101, 114, 116,  95,
    114, 101, 116, 117, 114, 110,  95,  49,  54,  40,  17,  36,  97, 115, 115, 101,
    114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,  55,  41,  17,  36,  97,
    115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,  56,  42,
     17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,
     49,  57,  43,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117,
    114, 110,  95,  50,  48,  44,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114,
    101, 116, 117, 114, 110,  95,  50,  49,  45,  17,  36,  97, 115, 115, 101, 114,
    116,  95, 114, 101, 116, 117, 114, 110,  95,  50,  50,  46,  17,  36,  97, 115,
    115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  50,  51,  47,  17,
     36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  50,
     52,  48,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114,
    110,  95,  50,  53,  49,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101,
    116, 117, 114, 110,  95,  50,  54,  50,  17,  36,  97, 115, 115, 101, 114, 116,
     95, 114, 101, 116, 117, 114, 110,  95,  50,  55,  51,  17,  36,  97, 115, 115,
    101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  50,  56,  52,  17,  36,
     97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  50,  57,
     53,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,
     95,  51,  48,  54,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116,
    117, 114, 110,  95,  51,  49,  55,  17,  36,  97, 115, 115, 101, 114, 116,  95,
    114, 101, 116, 117, 114, 110,  95,  51,  50,  56,  17,  36,  97, 115, 115, 101,
    114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  51,  51,  57,  17,  36,  97,
    115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  51,  52,  58,
     17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,
     51,  53,  59,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117,
    114, 110,  95,  51,  54,  60,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114,
    101, 116, 117, 114, 110,  95,  51,  55,  61,  17,  36,  97, 115, 115, 101, 114,
    116,  95, 114, 101, 116, 117, 114, 110,  95,  51,  56,  62,  17,  36,  97, 115,
    115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  51,  57,  63,  17,
     36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  52,
     48,  64,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114,
    110,  95,  52,  49,  65,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101,
    116, 117, 114, 110,  95,  52,  50,  66,  17,  36,  97, 115, 115, 101, 114, 116,
     95, 114, 101, 116, 117, 114, 110,  95,  52,  51,  67,  17,  36,  97, 115, 115,
    101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  52,  52,  68,  17,  36,
     97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  52,  53,
     69,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,
     95,  52,  54,  70,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116,
    117, 114, 110,  95,  52,  55,  71,  17,  36,  97, 115, 115, 101, 114, 116,  95,
    114, 101, 116, 117, 114, 110,  95,  52,  56,  72,  17,  36,  97, 115, 115, 101,
    114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  52,  57,  73,  17,  36,  97,
    115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  53,  48,  74,
     17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,
     53,  49,  75,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117,
    114, 110,  95,  53,  50,  76,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114,
    101, 116, 117, 114, 110,  95,  53,  51,  77,  17,  36,  97, 115, 115, 101, 114,
    116,  95, 114, 101, 116, 117, 114, 110,  95,  53,  52,  78,  17,  36,  97, 115,
    115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  53,  53,  79,  17,
     36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  53,
     54,  80,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114,
    110,  95,  53,  55,  81,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101,
    116, 117, 114, 110,  95,  53,  56,  82,  17,  36,  97, 115, 115, 101, 114, 116,
     95, 114, 101, 116, 117, 114, 110,  95,  53,  57,  83,  17,  36,  97, 115, 115,
    101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  54,  48,  84,  17,  36,
     97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  54,  49,
     85,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,
     95,  54,  50,  86,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116,
    117, 114, 110,  95,  54,  51,  87,  17,  36,  97, 115, 115, 101, 114, 116,  95,
    114, 101, 116, 117, 114, 110,  95,  54,  52,  88,  17,  36,  97, 115, 115, 101,
    114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  54,  53,  89,  17,  36,  97,
    115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  54,  54,  90,
     17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,
     54,  55,   4,  99, 111, 100, 101, 152,  11,  91,  21,   0,  20,   0,  20,   1,
     46,   0,   0,  20,   0,  16,   1,  64,  20,   1,  16,   8,  75,  46,   0,   0,
     21,   0,  20,   0,  20,   1,  22,   2,   0,  20,   0,  16,   2,  64,  20,   1,
     16,  16,  75,  22,   2,   0,  23,   0,  20,   0,  20,   1, 161,  22,   2,   1,
     20,   0,  16,   4,  64,  20,   1,  17,  32, 102, 161,  22,   2,   1,  18,   0,
     20,   0,  33,   0,   0,  20,   0,  16,   1,  64,  33,   0,   0,  16,   8,  74,
     72,  18,   0,  20,   0,  22,   1,   3,  20,   0,  16,   2,  64,  22,   1,   3,
     16,  16,  74,  72,  20,   0,  20,   0,  22,   1,   4, 167,  20,   0,  16,   4,
     64,  22,   1,   4, 167,  17,  32, 101,  99,  13,   0,  16,   0,  20,   0,  22,
      2,   0,  16,   0,  34,   1,   0,  13,   0,  16,   0,  20,   0,  22,   2,   0,
     16,   0,  35,   1,   0,  13,   0,  16,   0,  20,   0,  22,   2,   1,  16,   0,
     42,   2,   0,  14,   0,  16,   0,  20,   0, 161,  22,   2,   0,  16,   0,  38,
      1,   0,  14,   0,  16,   0,  20,   0, 161,  22,   2,   0,  16,   0,  39,   1,
      0,  14,   0,  16,   0,  20,   0, 161,  22,   2,   1,  16,   0,  40,   2,   0,
     14,   0,  16,   0,  20,   0, 161,  22,   2,   1,  16,   0,  41,   2,   0,  13,
      0,  16,   0,  20,   0,  22,   2,   2,  16,   0,  43,   3,   0,  14,   0,  16,
      0,  20,   0, 180,  22,   2,   1,  16,   0,  44,   2,   0,  14,   0,  16,   0,
     20,   0, 181,  22,   2,   2,  16,   0,  45,   3,   0,  13,   0,  16,   0,  20,
      0,  47,   1,   0,  16,   0,  22,   1,   3,  13,   0,  16,   0,  20,   0,  51,
      2,   0,  16,   0,  22,   1,   4,  14,   0,  16,   0,  20,   0,  49,   1,   0,
     16,   0,  22,   1,   3, 167,  14,   0,  16,   0,  20,   0,  50,   2,   0,  16,
      0,  22,   1,   4, 167,  13,   0,  16,   0,  20,   0,  52,   3,   0,  16,   0,
     22,   1,   5,  14,   0,  16,   0,  20,   0,  53,   2,   0,  16,   0,  22,   1,
      4, 173,  14,   0,  16,   0,  20,   0,  54,   3,   0,  16,   0,  22,   1,   5,
    179,   9,   0,  16, 127,  22,   1,   6,  16, 127,  77,  11,   0,  16, 238,  94,
     22,   1,   6,  16, 238,  94,  77,   9,   0,  16,  42,  22,   1,   6,  16,  42,
     77,  13,   0,  16, 144, 228,   0,  22,   1,   6,  16, 144, 228,   0,  77,  11,
      0,  16, 127,  22,   1,   7,  16, 255, 255,   3,  77,  12,   0,  16, 238,  94,
     22,   1,   7,  16, 238, 222,   3,  77,   9,   0,  16,  42,  22,   1,   7,  16,
     42,  77,  13,   0,  16, 254, 149,   3,  22,   1,   7,  16, 254, 149,   3,  77,
      9,   0,  16, 127,  22,   1,   8,  16, 127,  77,  15,   0,  16, 206, 208, 226,
    107,  22,   1,   8,  16, 206, 208, 226, 107,  77,  15,   0,  16, 178, 175, 157,
     20,  22,   1,   8,  16, 178, 175, 157,  20,  77,  17,   0,  16, 234, 187, 180,
    221, 122,  22,   1,   8,  16, 234, 187, 180, 221, 122,  77,   9,   0,  17, 127,
     22,   1,   9,  17, 127, 104,  11,   0,  17, 238,  94,  22,   1,   9,  17, 238,
     94, 104,   9,   0,  17,  42,  22,   1,   9,  17,  42, 104,  13,   0,  17, 144,
    228,   0,  22,   1,   9,  17, 144, 228,   0, 104,  11,   0,  17, 127,  22,   1,
     10,  17, 255, 255,   3, 104,  12,   0,  17, 238,  94,  22,   1,  10,  17, 238,
    222,   3, 104,   9,   0,  17,  42,  22,   1,  10,  17,  42, 104,  13,   0,  17,
    254, 149,   3,  22,   1,  10,  17, 254, 149,   3, 104,   9,   0,  17, 127,  22,
      1,  11,  17, 127, 104,  15,   0,  17, 206, 208, 226, 107,  22,   1,  11,  17,
    206, 208, 226, 107, 104,  15,   0,  17, 178, 175, 157,  20,  22,   1,  11,  17,
    178, 175, 157,  20, 104,  17,   0,  17, 248, 172, 209, 145,   1,  22,   1,  11,
     17, 248, 172, 209, 145,   1, 104,  13,   0,  17, 127,  22,   1,  12,  17, 255,
    255, 255, 255,  15, 104,  16,   0,  17, 206, 208, 226, 107,  22,   1,  12,  17,
    206, 208, 226, 235,  15, 104,  15,   0,  17, 178, 175, 157,  20,  22,   1,  12,
     17, 178, 175, 157,  20, 104,  17,   0,  17, 234, 187, 180, 221,  10,  22,   1,
     12,  17, 234, 187, 180, 221,  10, 104,   9,   0,  17, 127,  22,   1,  13,  17,
    127, 104,  15,   0,  17, 206, 208, 226, 107,  22,   1,  13,  17, 206, 208, 226,
    107, 104,  17,   0,  17, 234, 187, 180, 221,  10,  22,   1,  13,  17, 234, 187,
    180, 221,  10, 104,  27,   0,  17, 234, 187, 180, 245, 237, 223, 242, 214, 171,
    127,  22,   1,  13,  17, 234, 187, 180, 245, 237, 223, 242, 214, 171, 127, 104,
     15,   0,  19,   0,   0, 128, 191,  22,   1,  14,  19,   0,   0, 128, 191, 131,
     15,   0,  19, 182,  45,  74,  60,  22,   1,  14,  19, 182,  45,  74,  60, 131,
     15,   0,  19, 101, 147, 132,  69,  22,   1,  14,  19, 101, 147, 132,  69, 131,
     15,   0,  19, 255, 255, 127, 127,  22,   1,  14,  19, 255, 255, 127, 127, 131,
     23,   0,  18,   0,   0,   0,   0,   0,   0, 240, 191,  22,   1,  15,  18,   0,
      0,   0,   0,   0,   0, 240, 191, 151,  23,   0,  18, 231, 198, 244, 132,  69,
     74, 147,  64,  22,   1,  15,  18, 231, 198, 244, 132,  69,  74, 147,  64, 151,
     23,   0,  18, 174, 126, 108, 178, 201, 228,  25,  65,  22,   1,  15,  18, 174,
    126, 108, 178, 201, 228,  25,  65, 151,  23,   0,  18, 255, 255, 255, 255, 255,
    255, 239, 127,  22,   1,  15,  18, 255, 255, 255, 255, 255, 255, 239, 127, 151,
     11,   0,  16, 127,  22,   1,  16,  16, 255, 255,   3,  77,  12,   0,  16, 238,
     94,  22,   1,  16,  16, 238, 222,   3,  77,   9,   0,  16,  42,  22,   1,  16,
     16,  42,  77,  13,   0,  16, 254, 149,   3,  22,   1,  16,  16, 254, 149,   3,
     77,   9,   0,  16, 127,  22,   1,  17,  16, 127,  77,  11,   0,  16, 238,  94,
     22,   1,  17,  16, 238,  94,  77,  15,   0,  16, 178, 175, 157,  20,  22,   1,
     17,  16, 178, 175, 157,  20,  77,  17,   0,  16, 254, 149, 183, 245, 125,  22,
      1,  17,  16, 254, 149, 183, 245, 125,  77,  11,   0,  17, 127,  22,   1,  18,
     17, 255, 255,   3, 104,  12,   0,  17, 238,  94,  22,   1,  18,  17, 238, 222,
      3, 104,   9,   0,  17,  42,  22,   1,  18,  17,  42, 104,  13,   0,  17, 254,
    149,   3,  22,   1,  18,  17, 254, 149,   3, 104,  13,   0,  17, 127,  22,   1,
     19,  17, 255, 255, 255, 255,  15, 104,  14,   0,  17, 238,  94,  22,   1,  19,
     17, 238, 222, 255, 255,  15, 104,  15,   0,  17, 178, 175, 157,  20,  22,   1,
     19,  17, 178, 175, 157,  20, 104,  17,   0,  17, 254, 149, 183, 245,  13,  22,
      1,  19,  17, 254, 149, 183, 245,  13, 104,   9,   0,  17, 127,  22,   1,  20,
     17, 127, 104,  15,   0,  17, 206, 208, 226, 107,  22,   1,  20,  17, 206, 208,
    226, 107, 104,  17,   0,  17, 234, 187, 180, 221,  10,  22,   1,  20,  17, 234,
    187, 180, 221,  10, 104,  27,   0,  17, 234, 187, 180, 245, 237, 223, 242, 214,
    171, 127,  22,   1,  20,  17, 234, 187, 180, 245, 237, 223, 242, 214, 171, 127,
    104,  15,   0,  19,   0,   0, 128, 191,  22,   1,  21,  19,   0,   0, 128, 191,
    131,  15,   0,  19, 182,  45,  74,  60,  22,   1,  21,  19, 182,  45,  74,  60,
    131,  15,   0,  19, 101, 147, 132,  69,  22,   1,  21,  19, 101, 147, 132,  69,
    131,  15,   0,  19, 255, 255, 127, 127,  22,   1,  21,  19, 255, 255, 127, 127,
    131,  23,   0,  18,   0,   0,   0,   0,   0,   0, 240, 191,  22,   1,  22,  18,
      0,   0,   0,   0,   0,   0, 240, 191, 151,  23,   0,  18, 231, 198, 244, 132,
     69,  74, 147,  64,  22,   1,  22,  18, 231, 198, 244, 132,  69,  74, 147,  64,
    151,  23,   0,  18, 174, 126, 108, 178, 201, 228,  25,  65,  22,   1,  22,  18,
    174, 126, 108, 178, 201, 228,  25,  65, 151,  23,   0,  18, 255, 255, 255, 255,
    255, 255, 239, 127,  22,   1,  22,  18, 255, 255, 255, 255, 255, 255, 239, 127,
    151,
  ]);

  assertReturn(module, '$assert_return_0', 'external/testsuite/endianness.wast', 157);
  assertReturn(module, '$assert_return_1', 'external/testsuite/endianness.wast', 158);
  assertReturn(module, '$assert_return_2', 'external/testsuite/endianness.wast', 159);
  assertReturn(module, '$assert_return_3', 'external/testsuite/endianness.wast', 160);
  assertReturn(module, '$assert_return_4', 'external/testsuite/endianness.wast', 162);
  assertReturn(module, '$assert_return_5', 'external/testsuite/endianness.wast', 163);
  assertReturn(module, '$assert_return_6', 'external/testsuite/endianness.wast', 164);
  assertReturn(module, '$assert_return_7', 'external/testsuite/endianness.wast', 165);
  assertReturn(module, '$assert_return_8', 'external/testsuite/endianness.wast', 167);
  assertReturn(module, '$assert_return_9', 'external/testsuite/endianness.wast', 168);
  assertReturn(module, '$assert_return_10', 'external/testsuite/endianness.wast', 169);
  assertReturn(module, '$assert_return_11', 'external/testsuite/endianness.wast', 170);
  assertReturn(module, '$assert_return_12', 'external/testsuite/endianness.wast', 172);
  assertReturn(module, '$assert_return_13', 'external/testsuite/endianness.wast', 173);
  assertReturn(module, '$assert_return_14', 'external/testsuite/endianness.wast', 174);
  assertReturn(module, '$assert_return_15', 'external/testsuite/endianness.wast', 175);
  assertReturn(module, '$assert_return_16', 'external/testsuite/endianness.wast', 177);
  assertReturn(module, '$assert_return_17', 'external/testsuite/endianness.wast', 178);
  assertReturn(module, '$assert_return_18', 'external/testsuite/endianness.wast', 179);
  assertReturn(module, '$assert_return_19', 'external/testsuite/endianness.wast', 180);
  assertReturn(module, '$assert_return_20', 'external/testsuite/endianness.wast', 182);
  assertReturn(module, '$assert_return_21', 'external/testsuite/endianness.wast', 183);
  assertReturn(module, '$assert_return_22', 'external/testsuite/endianness.wast', 184);
  assertReturn(module, '$assert_return_23', 'external/testsuite/endianness.wast', 185);
  assertReturn(module, '$assert_return_24', 'external/testsuite/endianness.wast', 187);
  assertReturn(module, '$assert_return_25', 'external/testsuite/endianness.wast', 188);
  assertReturn(module, '$assert_return_26', 'external/testsuite/endianness.wast', 189);
  assertReturn(module, '$assert_return_27', 'external/testsuite/endianness.wast', 190);
  assertReturn(module, '$assert_return_28', 'external/testsuite/endianness.wast', 192);
  assertReturn(module, '$assert_return_29', 'external/testsuite/endianness.wast', 193);
  assertReturn(module, '$assert_return_30', 'external/testsuite/endianness.wast', 194);
  assertReturn(module, '$assert_return_31', 'external/testsuite/endianness.wast', 195);
  assertReturn(module, '$assert_return_32', 'external/testsuite/endianness.wast', 197);
  assertReturn(module, '$assert_return_33', 'external/testsuite/endianness.wast', 198);
  assertReturn(module, '$assert_return_34', 'external/testsuite/endianness.wast', 199);
  assertReturn(module, '$assert_return_35', 'external/testsuite/endianness.wast', 200);
  assertReturn(module, '$assert_return_36', 'external/testsuite/endianness.wast', 202);
  assertReturn(module, '$assert_return_37', 'external/testsuite/endianness.wast', 203);
  assertReturn(module, '$assert_return_38', 'external/testsuite/endianness.wast', 204);
  assertReturn(module, '$assert_return_39', 'external/testsuite/endianness.wast', 205);
  assertReturn(module, '$assert_return_40', 'external/testsuite/endianness.wast', 208);
  assertReturn(module, '$assert_return_41', 'external/testsuite/endianness.wast', 209);
  assertReturn(module, '$assert_return_42', 'external/testsuite/endianness.wast', 210);
  assertReturn(module, '$assert_return_43', 'external/testsuite/endianness.wast', 211);
  assertReturn(module, '$assert_return_44', 'external/testsuite/endianness.wast', 213);
  assertReturn(module, '$assert_return_45', 'external/testsuite/endianness.wast', 214);
  assertReturn(module, '$assert_return_46', 'external/testsuite/endianness.wast', 215);
  assertReturn(module, '$assert_return_47', 'external/testsuite/endianness.wast', 216);
  assertReturn(module, '$assert_return_48', 'external/testsuite/endianness.wast', 218);
  assertReturn(module, '$assert_return_49', 'external/testsuite/endianness.wast', 219);
  assertReturn(module, '$assert_return_50', 'external/testsuite/endianness.wast', 220);
  assertReturn(module, '$assert_return_51', 'external/testsuite/endianness.wast', 221);
  assertReturn(module, '$assert_return_52', 'external/testsuite/endianness.wast', 223);
  assertReturn(module, '$assert_return_53', 'external/testsuite/endianness.wast', 224);
  assertReturn(module, '$assert_return_54', 'external/testsuite/endianness.wast', 225);
  assertReturn(module, '$assert_return_55', 'external/testsuite/endianness.wast', 226);
  assertReturn(module, '$assert_return_56', 'external/testsuite/endianness.wast', 228);
  assertReturn(module, '$assert_return_57', 'external/testsuite/endianness.wast', 229);
  assertReturn(module, '$assert_return_58', 'external/testsuite/endianness.wast', 230);
  assertReturn(module, '$assert_return_59', 'external/testsuite/endianness.wast', 231);
  assertReturn(module, '$assert_return_60', 'external/testsuite/endianness.wast', 233);
  assertReturn(module, '$assert_return_61', 'external/testsuite/endianness.wast', 234);
  assertReturn(module, '$assert_return_62', 'external/testsuite/endianness.wast', 235);
  assertReturn(module, '$assert_return_63', 'external/testsuite/endianness.wast', 236);
  assertReturn(module, '$assert_return_64', 'external/testsuite/endianness.wast', 238);
  assertReturn(module, '$assert_return_65', 'external/testsuite/endianness.wast', 239);
  assertReturn(module, '$assert_return_66', 'external/testsuite/endianness.wast', 240);
  assertReturn(module, '$assert_return_67', 'external/testsuite/endianness.wast', 241);
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
