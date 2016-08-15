
// npm i benchmark
var Benchmark = require('benchmark');

var suite = new Benchmark.Suite;

values = [];
for (var i = 100000; i < 200000; i++) {
  values.push(i.toString());
}

// add tests
suite
.add('string concat', function() {
  var output = '';
  values.forEach(function(value) {
    output += value;
  });
})
.add('array push join', function() {
  var output = [];
  values.forEach(function(value, index) {
    output.push(value);
  });
  output = output.join('');
})
.add('array set join', function() {
  var output = [];
  values.forEach(function(value, index) {
    output[index] = value;
  });
  output = output.join('');
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });
