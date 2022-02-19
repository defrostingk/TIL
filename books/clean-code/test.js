class Foo {
  constructor() {
    this.value = "bar";
  }
}

class DependenceOnFoo {
  constructor() {
    this.foo = new Foo();
  }
}

let bar = new DependenceOnFoo();
console.log(bar.foo.value);
