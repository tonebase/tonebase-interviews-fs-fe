//handles functionality related to the counter
function Counter() {
  this.count = 0;
}
Counter.prototype.increment = function() {
  console.log("incrementing!");
  this.count += 1;
  console.log(this.count);
};
Counter.prototype.decrement = function() {
  console.log("decrementing!");
  this.count -= 1;
  console.log(this.count);
};

export default Counter;
