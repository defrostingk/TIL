class Fruit {
  // variable 앞에 #을 붙여 private variable을 선언할 수 있다.
  // private field는 class 외부에서 접근할 수 없다.
  // 내부에서만 접근할 수 있다.
  #name;
  // 기본 field는 public이다.
  color;

  // static을 사용하여 class level의 property를 선언할 수 있다.
  static MAX_WEIGHT = 5;

  // constructor: object를 생성할 때 호출되는 함수
  constructor(name, color) {
    this.#name = name;
    this.color = color;
  }

  // instance level의 method
  display() {
    // 화살표 함수도 사용 가능하다.
    console.log(`${this.#name} ${this.color}`);
  }

  // static을 사용하여 class level의 method를 선언할 수 있다.
  // class level이기 때문에 this를 참조할 수 없다.
  static example() {
    console.log("const apple = new Fruit('apple', 'red');");
  }

  // Accessor Property
  // get을 통해 외부에서 내부 property에 대신 접근할 수 있다.
  get nameAndColor() {
    return `${this.#name} ${this.color}`;
  }

  set color(value) {
    console.log('new color is', value);
  }
}

// apple은 Fruit class의 instance이다.
const apple = new Fruit('apple', 'red');

console.log(Fruit.MAX_WEIGHT); // 5
Fruit.example(); // const apple = new Fruit('apple', 'red');
console.log(apple.nameAndColor); // apple red
console.log(apple); // Fruit { color: 'red' }
apple.color = 'green'; // new color is green
console.log(apple); // Fruit { color: 'green' }
