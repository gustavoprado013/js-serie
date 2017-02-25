'use strict';

function fn1() {
  console.log("fn1");
};

function fn2() {
  console.log("fn2");
};

const myObject1 = {
  fn1,
  fn2
}

const myObject2 = {
  fn1: fn1,
  fn2: fn2
}

myObject1.fn1();
myObject1.fn2();

myObject2.fn1();
myObject2.fn2();
