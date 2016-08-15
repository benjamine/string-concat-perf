string-concat-perf
====

just a little benchmark test to compare different methods to concatenate strings in javascript.

Run:

```
npm i
npm test
```

Example Result (YMMV):

```
string concat x 431 ops/sec ±3.80% (76 runs sampled)
array push join x 204 ops/sec ±1.47% (75 runs sampled)
array set join x 203 ops/sec ±1.55% (75 runs sampled)
Fastest is string concat
```
