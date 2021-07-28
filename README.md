<h1 align="center">
👨🏻‍💻 Simple Developer Namecard Template 💳
</h1>

![pr](https://camo.githubusercontent.com/b0ad703a46e8b249ef2a969ab95b2cb361a2866ecb8fe18495a2229f5847102d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5052732d77656c636f6d652d627269676874677265656e2e737667)

![스크린샷](./screenshot.png)

## ☺️ 소개

- `config.ts` 설정을 통해 여러분의 기술 스택과 소개를 꾸밀 수 있는 템플릿입니다.
- 약 40여개의 기술 스택과 6종의 SNS 정보를 꾸밀 수 있습니다.

## `config.ts` 커스텀 가이드

### 1. 이름, 소속, 소개 설정

`name` : 사용할 이름 (페이지의 `title` 이 됩니다.)  
`company` : 소속  
`description` : 짧은 자기소개 (1 ~ 2줄을 권장합니다.)

### 2. SNS 정보 설정

SNS는 github / notion / facebook / instagram / linkedin / 개인 홈페이지 아이콘을 지원합니다.

**적용 예시**  
깃허브 정보를 추가합니다. (아이콘을 누르면 해당 주소로 리다이렉팅됩니다.)

```javascript
 sns: {
    github: "https://github.com/C17AN",
 }
```

### 3. 배경 테마 설정

배경 테마는 9종을 지원하며, [loading.io](https://loading.io/background/m-trianglify/)의 trianglify를 활용했습니다.
| | | | | |
|:-:|:-:|:-:|---|---|
| ![image](/src/images/background/icecream.svg) icecream |![image](/src/images/background/beach.svg) beach| ![image](/src/images/background/bloom.svg) bloom|
| ![image](/src/images/background/rainbow.svg) rainbow| ![image](/src/images/background/blossom.svg) blossom|![image](/src/images/background/tropica.svg) tropica|
| ![image](/src/images/background/sky.svg) sky|![image](/src/images/background/mirror.svg) mirror|![image](/src/images/background/ocean.svg) ocean |

### 4. 기술 스택

기술 스택은 약 40여종을 지원하며, 인텔리센스 또는 `configType.ts` 파일에서 목록을 확인하실 수 있습니다.

- 항목 추가는 PR 또는 이슈로 남겨주시면 반영하도록 하겠습니다!

기술 스택은 {"기술명" : "숙련도"} 의 형태로 작성하며, 숙련도는 1 ~ 3의 값을 입력합니다.

**예시**

```javascript
  techStack: {
    react: 3,
    javascript: 2,
  }
```
