const loadash = require('lodash');

differ = loadash.difference([5, 6, 7, 1], [7, 5, 6, 7, 0]);
console.log(`This is difference ${differ}`);

sm_ = loadash.sum([5, 9, 1]);
console.log(`This is sum ${sm_}`);

filter_false = loadash.compact([0, 1, "", false, 9]);
console.log(`This is filter false ${filter_false}`);

max_ = loadash.max([5, 9, 1]);
console.log(`This is max ${max_}`);

chunk = loadash.chunk([5, 8, 4, 6, 7, 0], 2);
console.log(`This is chunk ${chunk}`);

