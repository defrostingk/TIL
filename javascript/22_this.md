# 22장. this

p. 342 ~ p. 00

## this의 필요

메서드가 자신이 속한 객체의 프로퍼티를 참조하려면 먼저 자신이 속한 객체를 가리키는 식별자를 참조할 수 있어야 한다.

객체 리터럴 방식으로 생성한 객체의 경우 메서드 내부에서 메서드 자신이 속한 객체를 가리키는 식별자를 재귀적으로 참조할 수 있다.

- 자기 자신이 속한 객체를 재귀적으로 참조하는 방식은 일반적이지 않고 바람직하지 않다.

생성자 함수의 경우

- 생성자 함수를 정의하는 시점에는 아직 인스턴스를 생성하기 이전이므로 생성자 함수가 생성할 인스턴스를 가리키는 식별자를 알 수 없다.

  - 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 특수한 식별자가 필요하다.

    - 이를 위해 자바스크립티는 this라는 특수한 식별자를 제공한다.

## this

자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수다.

this를 통해 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로퍼티나 메서드를 참조할 수 있다.

this는 자바스크립트 엔진에 의해 암묵적으로 생성된다.

this가 가리키는 값(this 바인딩)은 함수 호출 방식에 의해 동적으로 결정된다.

- strict mode는 this 바인딩에 영향을 준다.

  - strcit mode가 적용된 일반 함수 내부의 this에는 undefined가 바인딩된다.

    - 일반 함수 내부에서 this를 사용할 필요가 없다.

## 함수 호출 방식과 this 바인딩

함수는 다양한 방식으로 호출할 수 있다.

일반 함수 호출

- 기본적으로 this에 전역 객체가 바인딩된다.

  - 내부에 존재하는 중첩 함수를 호출해도 this에 전역 객체가 바인딩된다.

- 객체를 생성하지 않는 일반 함수에서 this는 의미가 없다.

  - strict mode가 적용된 일반 함수 내부의 this에는 undefined가 바인딩된다.

- 메서드 내부의 중첩 함수나 콜백 함수의 this 바인딩을 메서드의 this 바인딩과 일치시키기 위해 다음과 같이 작성할 수 있다.

  ```JavaScript
  var value = 1;

  const obj = {
    value: 100,
    foo() {
        const that = this; // this 바인딩(obj)을 변수 that에 할당한다.

        setTimeout(function() {
            console.log(that.value); // 100
        }, 100);
    }
  }
  ```

- 또는 this를 명시적으로 바인딩하는 Function.prototype.apply/call/bind 메서드를 사용할 수 있다.

  ```JavaScript
  var value = 1;

  const obj = {
    value: 100,
    foo() {
        setTimeout(function() {
            console.log(this.value); // 100
        }.bind(this), 100);
    }
  }
  ```

- 또는 화살표 함수를 사용하여 this 바인딩을 일치시킬 수 있다.

  ```JavaScript
  var value = 1;

  const obj = {
    value: 100,
    foo() {
        setTimeout(() => console.log(this.value), 100);
    }
  }
  ```

메서드 호출

- 메서드 내부의 this에는 메서드를 호출한 객체(메서드 이름 앞의 마침표 연산자 앞에 기술한 객체)가 바인딩된다.

  - 메서드를 소유한 객체가 아닌, 메서드를 호출한 객체에 바인딩된다.

- 메서드는 프로퍼티에 바인딩된 함수다.

  - 메서드는 상위 객체에 포함된 것이 아니라 독립적으로 존재하는 별도의 객체이며

  - 프로퍼티가 함수 객체를 가리키고 있을 뿐이다.

    - 다른 객체의 프로퍼티로 할당하면

      - 다른 객체의 메서드가 될 수 있다.

    - 일반 변수에 할당하면

      - 일반 함수로 호출할 수 있다.

    - 따라서 메서드 내부의 this는 프로퍼티로 메서드를 가리키고 있는 객체(상위 객체)와 관계가 없고

      - 메서드를 호출한 객체에 바인딩된다.

- 프로토타입 메서드 내부에서 사용된 this도 일반 메서드와 마찬가지로 해당 메서드를 호출한 객체에 바인딩된다.

생성자 함수 호출

- 생성자 함수가 생성할 인스턴스가 바인딩된다.

Function.prototype.apply/call/bind 메서드에 의한 간접 호출

- 이들은 모두 Function.prototype의 메서드다.

  - 모든 함수가 상속받아 사용할 수 있다.

- apply와 call

  - 함수를 호출하면서 첫 번째 인수로 전달한 특정 객체를 호출한 함수의 this에 바인딩한다.

  - 두 함수는 호출할 함수에 인수를 전달하는 방식만 다르고 동일하게 동작한다.

    ```JavaScript
    function getThisBinding() {
      console.log(arguments);
      return this;
    }

    const thisArg = { a: 1 };

    // apply는 호출할 함수의 인수를 배열로 묶어 전달한다.
    console.log(getThisBinding.apply(thisArg, [1, 2, 3]));
    // [Arguments] { '0': 1, '1': 2, '2': 3 }
    //{ a: 1 }


    // call은 호출할 함수의 인수를 쉼표로 구분한 리스트 형식으로 전달한다.
    console.log(getThisBinding.call(thisArg, 1, 2, 3));
    // [Arguments] { '0': 1, '1': 2, '2': 3 }
    //{ a: 1 }
    ```

  - 대표적인 용도는 arguments 객체와 같은 유사 배열 객체에 배열 메서드를 사용하는 경우다.

- bind는 함수를 호출하지 않는다.

  - 첫 번째 인수로 전달한 값으로 this 바인딩이 교체된 함수를 새롭게 생성해 반환한다.

    ```JavaScript
    function getThisBinding() {
      return this;
    }

    const thisArg = { a: 1 };

    console.log(getThisBinding.bind(thisArg)); // getThisBinding

    // bind는 함수를 호출하지는 않으므로 명시적으로 호출해야 한다.
    console.log(getThisBinding.bind(thisArg)()); // { a: 1 }

    ```

  - 메서드의 this와 메서드 내부의 중첩 함수 또는 콜백 함수의 this가 불일치하는 문제를 해결하기 위해 사용한다.

  ```JavaScript
  const person = {
    name: 'Lee',
    foo(callback) {
        setTimeout(callback.bind(this), 100);
    }
  };

  person.foo(function () {
    console.log(this.name); // Lee
  })
  ```
