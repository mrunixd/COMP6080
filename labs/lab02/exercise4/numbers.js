const numbers = [406, 646, 199, 996, 989, 47, 55, 614, 293, 407, 287, 605, -56, 960, 832, 25, 596, 541, -577, 56, 878, 483, 681, 17, 73, 428, -757, 923, 748, 619, 117, 588, -661, -267, 571, 95, 923, 386, 507, 243, -868, -797, 344, 660, 34, 945, -424, -169, 344, 601, 277, 478, 562, 863, 887, 172, 23, 995, 999, 2, 12, 476, 755, 617, 155, 698, 91, 1, 481, 971, 371, 164, 220, 854, 590, 364, 446, 254, 980, 469, 738, 866, 297, 410, 407, 576, 893, 319, 866, 501, 939, 536, 380, 331, 438, 76, 423, 951, 459, 425 ];

const posSum = numbers.filter((number) => number >= 0);
const evenSum = numbers.filter((number) => number % 2 == 0);
const largeSum = numbers.filter((number) => number > 400);
const indexSum = numbers.filter((number, idx) => idx >= 20 && idx <= 40);

console.log("Sum = " + numbers.reduce((x, y) => x + y, 0));
console.log("Positive Sum = " + posSum.reduce((x, y) => x + y, 0));
console.log("Even Sum = " + evenSum.reduce((x, y) => x + y, 0));
console.log("Sum of numbers above 400 = " + largeSum.reduce((x, y) => x + y, 0));
console.log("Sum of numbers inbetween indexes 20 and 40 inclusive = " + indexSum.reduce((x, y) => x + y, 0));
