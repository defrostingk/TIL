# 20장. strict mode

p. 313 ~ p. 319

## 암묵적 전역

```JavaScript
function foo() {
    x = 10;
}
foo();

console.log(x); // 10
```

위와 같이 함수 내에서 선언하지 않은 x 변수에 값 10을 할당하면

자바스크립트 엔진은 x 변수가 어디에서 선언되었는지 스코프 체인을 통해 검색한다.

- foo 함수 스코프에 x 변수의 선언이 존재하지 않는다.

  - 상위 스코프에서 x 변수의 선언을 검색한다.

    - 상위 스코프인 전역 스코프에도 x 변수의 선언이 존재하지 않는다.

      - 암묵적으로 전역 객체에 x 프로퍼티를 동적 생성한다.

        - ReferenceError가 발생하지 않는다!

이를 암묵적 전역이라 한다.

- 개발자의 의도와 상관없이 발생해 오류를 발생시키는 원인이 될 가능성이 크다.

  - 반드시 var, let, const 키워드를 사용하여 변수를 선언하고 사용해야 한다.

## strict mode

자바스크립트 언어의 문법을 좀 더 엄격히 적용하여

- 오류를 발생시킬 가능성이 높거나

- 자바스크립트 엔진의 최적화 작업에 문제를 일으킬 수 있는 코드

에 대해 명시적인 에러를 발생시킨다.

ESLint 같은 린트 도구를 사용해도 strict mode와 유사한 효과를 얻을 수 있다.

- 문법적 오류뿐만 아니라 잠재적 오류까지 찾아내고 오류의 원인을 리포팅해준다.

- 코딩 컨벤션을 설정 파일 형태로 정의하고 강제할 수 있다.

## strict mode의 적용

전역의 선두 또는 함수 몸체의 선두에 'use strict';를 추가한다.

## 전역에 strict mode를 적용하는 것은 피한다.

전역에 적용한 strict mode는 스크립트 단위로 적용된다.

- 다른 스크립트에 영향을 주지 않고 해당 스크립트에 한정되어 적용된다.

strict mode 스크립트와 non-strict mode 스크립트를 혼용하는 것은 오류를 발생시킬 수 있다.

- 외부 서드파티 라이브러리를 사용하는 경우 라이브러리가 non-strict mode인 경우도 있다.

- 이 경우 즉시 실행 함수로 스크립트 전체를 감싸서 스코프를 구분하고 즉시 실행 함수의 선두에 strict mode를 적용한다.

## 함수 단위로 strict mode를 적용하는 것은 피한다.

모든 함수에 일일이 strict mode를 적용하는 것은 번거롭다.

strict mode가 적용된 함수가 참조할 함수 외부의 컨텍스트에 strict mode를 적용하지 않는다면 문제가 발생할 수 있다.

strict mode는 즉시 실행 함수로 감싼 스크립트 단위로 적용하는 것이 바람직하다.

```JavaScript
(function () {
  'use strict';
  // ...code
})();

```

## strict mode가 발생시키는 에러

암묵적 전역

- 선언하지 않은 변수를 참조하면 ReferenceError가 발생한다.

변수, 함수, 매개변수의 삭제

- delete 연산자로 변수, 함수, 매개변수를 삭제하면 SyntaxError가 발생한다.

매개변수 이름의 중복

- 중복된 매개변수 이름을 사용하면 SyntaxError가 발생한다.

with 문의 사용

- with 문을 사용하면 SyntaxError가 발생한다.

- with 문은 전달된 객체를 스코프 체인에 추가한다.

  - 동일한 객체의 프로퍼티를 반복해서 사용할 때 객체 이름을 생략할 수 있다.

    - 코드가 간단해진다.

    - 성능과 가독성이 나빠진다.

      - with 문은 사용하지 않는 것이 좋다.

```JavaScript
with ({ x: 1 }) {
  console.log(x);
}
```

## strict mode 적용에 의한 변화

일반 함수의 this

- 함수를 일반 함수로서 호출하면 this에 undefined가 바인딩된다.

  - 생성자 함수가 아닌 일반 함수 내부에서 this를 사용할 필요가 없기 때문이다.

  - 에러는 발생하지 않는다.

- strict mode를 사용하지 않고 일반 함수로서 호출하면 this에 전역 객체가 바인딩된다.

arguments 객체

- 매개변수에 전달된 인수를 재할당하여 변경해도 arguments 객체에 반영되지 않는다.