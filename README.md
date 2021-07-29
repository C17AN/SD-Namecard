<h1 align="center">
👨🏻‍💻 Simple Developer Namecard Template 💳
</h1>

[데모 링크](c17an-profile.netlify.app/)

<p align="center">
    <a href="https://github.com/C17AN/digital-namecard/pulls" target="_blank">
      <img src="https://camo.githubusercontent.com/b0ad703a46e8b249ef2a969ab95b2cb361a2866ecb8fe18495a2229f5847102d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5052732d77656c636f6d652d627269676874677265656e2e737667" alt="PR" />
    </a>
    <a href="https://app.netlify.com/" target="_blank">
      <img src="https://api.netlify.com/api/v1/badges/fa9e4695-53a0-4bc1-8564-026e9f740982/deploy-status" alt="netlify" />
    </a>
</p>

![스크린샷](https://user-images.githubusercontent.com/26535030/127426026-51e51443-863f-4f0d-99f1-ce1e943d9c35.png)
![스크린샷](https://user-images.githubusercontent.com/26535030/127443062-c6be0e59-b3b3-451c-9f33-2b401c4589bd.png)

## ☺️ 소개

- `config.ts` 설정을 통해 여러분의 기술 스택과 소개를 꾸밀 수 있는 템플릿입니다.
- 약 40여개의 기술 스택과 6종의 SNS 정보를 꾸밀 수 있습니다.

## 📖 `config.ts` 커스텀 가이드

#### 1) 이름, 소속, 소개 설정

`name` : 사용할 이름 (페이지의 `title` 이 됩니다.)  
`company` : 소속  
`description` : 짧은 자기소개 (1 ~ 2줄을 권장합니다.)

#### 2) SNS 정보 설정

SNS는 `github` | `notion` | `facebook` | `instagram` | `linkedin` | 개인 홈페이지 아이콘을 지원합니다.

**적용 예시**  
깃허브 정보를 추가합니다. (아이콘을 누르면 해당 주소로 리다이렉팅됩니다.)

```javascript
 sns: {
    github: "https://github.com/C17AN",
 }
```

#### 4) 배경 테마 설정

배경 테마는 9종을 지원하며, [loading.io](https://loading.io/background/m-trianglify/)의 trianglify를 활용했습니다.
| | | | | |
|:-:|:-:|:-:|---|---|
| ![image](/src/images/background/icecream.svg) icecream |![image](/src/images/background/beach.svg) beach| ![image](/src/images/background/bloom.svg) bloom|
| ![image](/src/images/background/rainbow.svg) rainbow| ![image](/src/images/background/blossom.svg) blossom|![image](/src/images/background/tropica.svg) tropica|
| ![image](/src/images/background/sky.svg) sky|![image](/src/images/background/mirror.svg) mirror|![image](/src/images/background/ocean.svg) ocean |

#### 5) 기술 스택

기술 스택은 약 40여종을 지원하며, 인텔리센스 또는 `configType.ts` 파일에서 목록을 확인하실 수 있습니다.

데이터는 `{"기술명" : "숙련도(1 ~ 3 사이의 값)"}` 형식으로 추가합니다.

**예시**

```javascript
  techStack: {
    react: 3,
    javascript: 2,
  }
```

- 추가를 원하시는 기술 아이콘이 있다면 PR 또는 이슈로 남겨주시면 반영하도록 하겠습니다!

#### 6) 경력 & 부가 정보

경력 및 부가 정보는 다음과 같이 추가할 수 있습니다.

**경력 예시**

```javascript
{
    name: "OO 개발회사", // required
    from: "2017-03-02", // required
    to: "2023-02-01",
    position: "FE Developer",
},
```

**부가정보 예시**

```javascript
{
    name: "OO 해커톤 참여",
    year: "2021",
    description: "OOO 주관 해커톤 본선 진출",
},
```

## 🚀 배포 가이드

Netlify와 Github pages를 통한 배포가 가능합니다.

### 방법 1. Netlify로 배포하기

1. Netlify 가입 후, **[New site from Git]** 을 선택해 포크한 저장소를 연결합니다. ![이미지](https://user-images.githubusercontent.com/26535030/127438344-94265c0b-a1f7-44b9-8a39-7d2ff3c4aa13.png)

2. 저장소를 연결하면, 자동으로 배포가 완료됩니다.
3. 도메인을 원하는 이름으로 변경하고 싶다면 **[Site settings]** - **[Change Site Name]** 으로 변경할 수 있습니다.![이미지](https://user-images.githubusercontent.com/26535030/127438760-14fbfb38-52ba-4c6a-b5cb-3aa5bb7516e5.png)
   ![이미지](https://user-images.githubusercontent.com/26535030/127439001-77695e3b-2d31-4d91-aa56-cebc4522710e.png)

### 방법 2. Github pages로 배포하기

1. `package.json` 에 `homepage` 속성을 추가하고, `"https://<사용자명>.github.io/digital-namecard"` 값을 설정합니다.

#### **package.json 예시**

```json
{
    "homepage": "https://c17an.github.io/digital-namecard",
    "name": "digital-namecard",
    ...
}
```

2. `yarn deploy` 또는 `npm run deploy` 커맨드로 배포하면, `homepage` 에 지정한 경로에 프로필 카드가 배포됩니다.

## 🤖 라이센스

코드는 자유롭게 수정해 사용하실 수 있으며, 따로 출처를 남기지 않으셔도 괜찮습니다!

즐겨주세요!
