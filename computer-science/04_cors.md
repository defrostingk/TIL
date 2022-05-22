# CORS

## Origin

scheme, host, port로 이루어진 도메인을 의미한다.

    https://www.naver.com/

    scheme: https
    host: www.naver.com
    port: 공개되지 않음

## SOP; Same-Origin Policy

같은 출처에서만 리소스를 공유할 수 있다.

서로 다른 도메인에 대한 요청을 보안상 제한한다.

## CORS; Cross Origin Resource Sharing

다른 출처의 자원에 접근할 수 있는 권한을 부여한다.

- CORS의 동작

  1. 클라이언트에서 HTTP 요청의 헤더에 origin을 담아 전달한다.

  2. 서버가 응답 헤더에 Access-Control-Allow-Origin을 담아 클라이언트로 전달한다.

  3. 클라이언트는 자신이 보냈던 요청의 origin과 서버가 보낸 Access-Control-Allow-Origin을 비교한다.

     - 만약 유효하지 않다면 그 응답을 사용하지 않고 버린다.

서버 응답은 CORS 정책 위반 여부에 관여하지 않는다.

- 서버에서 정상적인 응답을 하여 상태코드가 200이 나오더라도,

  브라우저가 응답을 CORS 정책 위반이라 판단하면 그 응답은 사용하지 않는다.

- CORS 정책을 위반하여 에러가 발생하더라도 서버는 정상 응답을 한 로그를 남기기 때문에 CORS를 모르면 확인이 어렵다.

## 예비 요청; Preflight Request

브라우저는 요청을 한 번에 보내지 않고, 예비 요청과 본 요청으로 나누어 서버에 전달한다.

본 요청을 보내기 전에 예비 요청을 보내 안전한 요청인지 확인한다.

이때 예비 요청이 안전한 요청이라면 본 요청을 보낸다.

예비 요청은 보통 PUT, DELETE와 같은 요청에 사용한다.

- 데이터를 변경하는 요청이기 때문에 예비 요청을 통한 인증 과정을 거친다.

- POST도 데이터를 변경할 수 있지만 변경될 일이 적기 때문에 서버쪽 프로그래밍을 통해 처리한다.

## 단순 요청; Simple Request

예비 요청을 보내지 않고 서버에 바로 본 요청을 하여 인증 과정을 거친다.

단순 요청은 GET, HEAD, POST 요청에 사용한다.

'CORS-safelisted request header' 로 정의한 헤더만 사용할 수 있다.

- Accept

- Accept-Language

- Content-Language

- Content-Type

- DPR

- Downlink

- Save-Data

- Viewport-Width

- Width

'Content-Type' 을 사용하는 경우 다음 값만 허용된다.

- application/x-www-form-urlencoded

- multipart/form-data

- text/plain

## 인증된 요청; Credentialed Request

예비 요청에서 보안을 더 강화하고 싶을 때 사용한다.

브라우저가 제공하는 비동기 리소스 요청 API인 XMLHttpRequest 객체나 fetch API는 별도의 옵션 없이 브라우저의 쿠키 정보나 인증과 관련된 헤더를 함부로 요청에 담지 않는다.

이때 요청에 인증과 관련된 정보를 담을 수 있게 하는 옵션이 credentials 옵션이다.

다음 3가지 값을 사용할 수 있다.

- same-origin: 같은 출처 간 요청에만 인증 정보를 담을 수 있다.(default)

- include: 모든 요청에 인증 정보를 담을 수 있다.

- omit: 모든 요청에 인증 정보를 담지 않는다.

위 옵션의 사용(same-origin, include)으로 인해 리소스 요청에 인증 정보가 포함되면 브라우저는 추가로 다음 사항을 검사한다.

1. Access-Control-Allow-Origin 에 모든 요청을 허용하는 \*를 사용할 수 없고 명시적으로 URL을 지정하여야한다.

2. 응답 헤더에 반드시 'Access-Control-Allow-Credentials: true' 가 존재해야 한다.

   - fetch가 아닌 axios를 사용할 때는 'withCredentials: true' 를 사용한다.

## CORS 이슈 해결

서버에서 Access-Control-Allow-Origin 을 세팅한다.
