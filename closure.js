var makeCounter = function () {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function () { changeBy(1); },
        decrement: function () { changeBy(-1); },
        value: function () { return privateCounter; }
    }
};
var counter1 = makeCounter();
var counter2 = makeCounter();

function test1() {
    counter1.increment()
  document.getElementById("c1").innerHTML = counter1.value()
}
function test2() {
    counter2.increment()
   document.getElementById("c2").innerHTML = counter2.value()
}

