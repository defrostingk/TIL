# 06장. 데이터 타입

p. 59 ~ p. 73

## 데이터 타입

자바스크립트의 모든 값은 데이터 타입을 갖는다.

자바스크립트는 7개의 데이터 타입을 제공한다. 7개의 데이터 타입은 다시 원시 타입과 객체 타입으로 분류할 수 있다.

- 원시 타입

  - 숫자 타입

  - 문자열 타입

  - 불리언 타입

  - undefined 타입

  - null 타입

  - 심벌 타입

- 객체 타입

## 숫자 타입

숫자 타입의 값은 모두 배정밀도 64비트 부동소수점 형식을 따른다.

즉 모든 수를 실수로 처리한다.

2진수, 8진수, 16진수를 표현하기 위한 데이터 타입을 제공하지 않기 때문에 이들 값을 참조하면 모두 10진수로 해석된다.

정수를 표시된다 해도 사실은 실수를 의미한다.

추가적으로 세 가지 특별한 값도 표현할 수 있다.

- Infinity: 양의 무한대

- -Infinity: 음의 무한대

- NaN: 산술 연산 불가 (Not a Number)

## 문자열 타입

문자열은 0개 이상의 16비트 유니코드 문자의 집합으로 전 세계 대부분의 문자를 표현할 수 있다.

자바스크립트의 문자열은 원시타입으로 변경 불가능한 값이다.

''(작은따옴표), ""(큰따옴표), ``(백틱)으로 텍스트를 감싼다.

## 템플릿 리터럴

``(백틱)을 사용해 표현한다.

- 멀티라인 문자열

  - 일반 문자열 내에서는 줄바꿈이 허용되지 않는다.

    - 줄바꿈 등의 공백을 표현하려면 백슬래시로 시작하는 이스케이프 시퀀스를 사용해야 한다.

  - 템플릿 리터럴 내에서는 줄바꿈이 허용된다.

- 표현식 삽입

  - 문자열은 문자열 연산자 +를 사용해 연결한다. +는 피연산자 중 하나 이상이 문자열인 경우 문자열 연결 연산자로 동작한다.

  - 템플릿 리터럴 내에서는 표현식 삽입을 통해 문자열을 연결할 수 있다.

    - ${}

## 라인 피드와 캐리지 리턴

개행 문자는 텍스트의 한 줄이 끝남음 표시하는 문자 또는 문자열로, 라인 피드와 캐리지 리턴이 있다.

라인 피드는 커서를 정지한 상태에서 종이를 한 줄 올리는 것이고,

캐리지 리턴은 종이를 움직이지 않고 커서를 맨 앞줄로 이동하는 것이다.

운영 체제에 따라 다음과 같이 서로 다른 개행 방식을 사용한다.

- 윈도우: CR+LF

- 유닉스: LF

- 맥(~버전9): CR

- 맥(버전10~): LF

자바스크립트의 경우 라인 피드와 캐리지 리턴 모두 개행을 의미하지만, 일반적으로 라인 피드를 사용해 개행한다.

## 불리언 타입

논리적 참, 거짓을 나타내는 true와 false뿐이다.

## undefined 타입

undefined 타입의 값은 undefined가 유일하다.

var, let 키워드로 선언한 변수는 암묵적으로 undefined로 초기화된다.

undefined를 의도적으로 변수에 할당한다면 본래 취지에 어긋나며 혼란을 줄 수 있다.

값이 없다는 것을 명시하고 싶을 때는 null을 할당한다.

## null 타입

null 타입의 값은 null이 유일하다.

null은 변수에 값이 없다는 것을 의도적으로 명시할 때 사용한다.

변수에 null을 할당하는 것은 변수가 이전에 참조하던 값을 더 이상 참조하지 않겠다는 의미이다.

- 이전에 할당되어 있던 값에 대한 참조를 명시적으로 제거.

  - 따라서 아무도 참조하지 않는 메모리 공간에 대해 가비지 콜렉션을 수행한다.

document.querySelecotr 메서드는 조건에 부합하는 HTML 요소를 검색할 수 없는 경우 에러 대신 null을 반환한다.

## 심벌 타입

ES6에서 추가된 7번째 타입으로 변경 불가능한 원시 타입의 값이다.

- 주로 이름이 충돌한 위험이 없는 객체의 유일한 프로퍼티 키를 만들기 위해 사용한다.

- 심벌값은 외부에 노출되지 않으며, 다른 값과 절대 중복되지 않는 유일무이한 값이다.

Symbol 함수를 호출해 생성한다.

## 객체 타입

자바스크립트를 이루고 있는 거의 모든 것이 객체이다.

- 이전 6가지 데이터 타입 이외의 값은 모두 객체 타입이다.

## 데이터 타입의 필요성

- 값을 저장할 때 확보해야 하는 메모리 공간의 크기를 결정하기 위해

  - 몇 바이트의 메모리 공간을 사용해야 낭비와 손실 없이 값을 저장할 수 있는지 알아야 한다.

  - 자바스크립트는 데이터 타입에 따라 정해진 크기의 메모리 공간을 확보한다.

- 값을 참조할 때 한 번에 읽어 들여야 할 메모리 공간의 크기를 결정하기 위해

  - 값을 참조하려면 한 번에 읽어 들여야 할 메모리 공간의 크기를 알아야 한다.

  - 자바스크립트는 변수에 할당된 값의 데이터 타입을 확인하고 정해진 크기 단위로 메모리 공간을 읽어들인다.

- 메모리에서 읽어 들인 2진수를 어떻게 해석할지 결정하기 위해

  - 읽어들인 2진수를 데이터 타입에 따라 다르게 해석한다.

## 정적 타입 언어

정적 타입 언어는 변수를 선언할 때 데이터 타입을 사전에 선언해야 한다.

- 이를 명시적 타입 선언이라 한다.

정적 타입 언어는 변수의 타입을 변경할 수 없으며, 변수에 선언한 타입에 맞는 값만 할당할 수 있다.

컴파일 시점에 선언한 데이터 타입에 맞는 값을 할당했는지 검사하는 타입 체크를 수행한다.

타입 체크를 통과하지 못하면 에러가 발생하여 프로그램 실행을 막는다.

- 타입의 일관성을 강제한다.

- 안정적인 코드의 구현을 통해 런타임에 발생하는 에러를 줄인다.

## 동적 타이핑

자바스크립트는 정적 타입 언어와는 달리 어떠한 데이터 타입의 값이라도 자유롭게 할당할 수 있다.

자바스크립트의 변수는 선언이 아닌 할당에 의해 타입이 결정(타입 추론)된다.

재할당에 의해 변수의 타입은 언제든지 동적으로 변할 수 있다. (동적 타이핑)

자바스크립트는 동적 타입 언어이다.

## 동적 타입 언어

변수에 어떤 데이터 타입의 값이라도 자유롭게 할당할 수 있다.

자바스크립트는 개발자의 의도와 상관없이 자바스크립트 엔진에 의해 암묵적으로 타입이 자동으로 변환되기도 한다.

이로 인해 오류가 발생할 수 있다.

유연성은 높지만 신뢰성은 떨어진다.

따라서 변수를 사용할 때 다음과 같은 사항에 주의해야 한다.

- 변수는 꼭 필요한 경우에 한해 제한적으로 사용한다. 최소화한다.

  - 변수는 재할당에 의해 언제든지 변경될 수 있으므로 변수가 많아지면 자바스크립트가 타입을 잘못 예측할 확률, 오류가 발생할 확률도 높아진다.

- 변수의 유효 범위(스코프)는 최대한 좁게 만들어 변수의 부작용을 억제해야 한다.

  - 스코프가 넓을수록 변수에 의해 오류가 발생할 확률이 높아진다.

- 전역 변수를 최소화한다.

  - 어디서든 참조/변경 가능한 전역 변수는 의도치 않게 값이 변경될 가능성이 높다.

  - 다른 코드에 영향을 줄 가능성이 높다.

  - 프로그램 복잡성을 증가시키고 처리 흐름을 추적하기 어렵게 한다.

    - 오류의 원인을 특정하기 어렵다.

- 변수보다는 상수를 사용해 값의 변경을 억제한다. (const)

- 모든 식별자는 존재 이유를 파악할 수 있는 적절한 이름으로 지어야 한다.

## 가독성이 좋은 코드가 좋은 코드다.