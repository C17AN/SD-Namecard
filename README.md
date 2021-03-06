<h1 align="center">
π¨π»βπ» Simple Developer Namecard Template π³
</h1>

<p align="center">
    <a href="https://github.com/C17AN/digital-namecard/pulls" target="_blank">
      <img src="https://camo.githubusercontent.com/b0ad703a46e8b249ef2a969ab95b2cb361a2866ecb8fe18495a2229f5847102d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5052732d77656c636f6d652d627269676874677265656e2e737667" alt="PR" />
    </a>
    <a href="https://app.netlify.com/" target="_blank">
      <img src="https://api.netlify.com/api/v1/badges/fa9e4695-53a0-4bc1-8564-026e9f740982/deploy-status" alt="netlify" />
    </a>
</p>


### [λ°λͺ¨ λ§ν¬](https://c17an-profile.netlify.app)

![μ€ν¬λ¦°μ·](https://user-images.githubusercontent.com/26535030/127426026-51e51443-863f-4f0d-99f1-ce1e943d9c35.png)
![μ€ν¬λ¦°μ·](https://user-images.githubusercontent.com/26535030/127443062-c6be0e59-b3b3-451c-9f33-2b401c4589bd.png)

## βΊοΈ μκ°

- `config.ts` μ€μ μ ν΅ν΄ μ¬λ¬λΆμ κΈ°μ  μ€νκ³Ό μκ°λ₯Ό κΎΈλ° μ μλ ννλ¦Ώμλλ€.
- μ½ 40μ¬κ°μ κΈ°μ  μ€νκ³Ό 6μ’μ SNS μ λ³΄λ₯Ό κΎΈλ° μ μμ΅λλ€.

## π `config.ts` μ»€μ€ν κ°μ΄λ

#### 1) μ΄λ¦, μμ, μκ° μ€μ 

`name` : μ¬μ©ν  μ΄λ¦ (νμ΄μ§μ `title` μ΄ λ©λλ€.)  
`company` : μμ  
`description` : μ§§μ μκΈ°μκ° (1 ~ 2μ€μ κΆμ₯ν©λλ€.)

#### 2) SNS μ λ³΄ μ€μ 

SNSλ `github` | `notion` | `facebook` | `instagram` | `linkedin` | κ°μΈ ννμ΄μ§ μμ΄μ½μ μ§μν©λλ€.

**μ μ© μμ**  
κΉνλΈ μ λ³΄λ₯Ό μΆκ°ν©λλ€. (μμ΄μ½μ λλ₯΄λ©΄ ν΄λΉ μ£Όμλ‘ λ¦¬λ€μ΄λ νλ©λλ€.)

```javascript
 sns: {
    github: "https://github.com/C17AN",
 }
```

#### 4) λ°°κ²½ νλ§ μ€μ 

λ°°κ²½ νλ§λ 9μ’μ μ§μνλ©°, [loading.io](https://loading.io/background/m-trianglify/)μ trianglifyλ₯Ό νμ©νμ΅λλ€.
| | | | | |
|:-:|:-:|:-:|---|---|
| ![image](/src/images/background/icecream.svg) icecream |![image](/src/images/background/beach.svg) beach| ![image](/src/images/background/bloom.svg) bloom|
| ![image](/src/images/background/rainbow.svg) rainbow| ![image](/src/images/background/blossom.svg) blossom|![image](/src/images/background/tropica.svg) tropica|
| ![image](/src/images/background/sky.svg) sky|![image](/src/images/background/mirror.svg) mirror|![image](/src/images/background/ocean.svg) ocean |

#### 5) κΈ°μ  μ€ν

κΈ°μ  μ€νμ μ½ 40μ¬μ’μ μ§μνλ©°, μΈνλ¦¬μΌμ€ λλ `configType.ts` νμΌμμ λͺ©λ‘μ νμΈνμ€ μ μμ΅λλ€.

λ°μ΄ν°λ `{"κΈ°μ λͺ" : "μλ ¨λ(1 ~ 3 μ¬μ΄μ κ°)"}` νμμΌλ‘ μΆκ°ν©λλ€.

**μμ**

```javascript
  techStack: {
    react: 3,
    javascript: 2,
  }
```

- μΆκ°λ₯Ό μνμλ κΈ°μ  μμ΄μ½μ΄ μλ€λ©΄ PR λλ μ΄μλ‘ λ¨κ²¨μ£Όμλ©΄ λ°μνλλ‘ νκ² μ΅λλ€!

#### 6) κ²½λ ₯ & λΆκ° μ λ³΄

κ²½λ ₯ λ° λΆκ° μ λ³΄λ λ€μκ³Ό κ°μ΄ μΆκ°ν  μ μμ΅λλ€.

**κ²½λ ₯ μμ**

```javascript
{
    name: "OO κ°λ°νμ¬", // required
    from: "2017-03-02", // required
    to: "2023-02-01",
    position: "FE Developer",
},
```

**λΆκ°μ λ³΄ μμ**

```javascript
{
    name: "OO ν΄μ»€ν€ μ°Έμ¬",
    year: "2021",
    description: "OOO μ£Όκ΄ ν΄μ»€ν€ λ³Έμ  μ§μΆ",
},
```

## π λ°°ν¬ κ°μ΄λ

Netlifyμ Github pagesλ₯Ό ν΅ν λ°°ν¬κ° κ°λ₯ν©λλ€.

### λ°©λ² 1. Netlifyλ‘ λ°°ν¬νκΈ°

1. Netlify κ°μ ν, **[New site from Git]** μ μ νν΄ ν¬ν¬ν μ μ₯μλ₯Ό μ°κ²°ν©λλ€. ![μ΄λ―Έμ§](https://user-images.githubusercontent.com/26535030/127438344-94265c0b-a1f7-44b9-8a39-7d2ff3c4aa13.png)

2. μ μ₯μλ₯Ό μ°κ²°νλ©΄, μλμΌλ‘ λ°°ν¬κ° μλ£λ©λλ€.
3. λλ©μΈμ μνλ μ΄λ¦μΌλ‘ λ³κ²½νκ³  μΆλ€λ©΄ **[Site settings]** - **[Change Site Name]** μΌλ‘ λ³κ²½ν  μ μμ΅λλ€.![μ΄λ―Έμ§](https://user-images.githubusercontent.com/26535030/127438760-14fbfb38-52ba-4c6a-b5cb-3aa5bb7516e5.png)
   ![μ΄λ―Έμ§](https://user-images.githubusercontent.com/26535030/127439001-77695e3b-2d31-4d91-aa56-cebc4522710e.png)

### λ°©λ² 2. Github pagesλ‘ λ°°ν¬νκΈ°

1. `package.json` μ `homepage` μμ±μ μΆκ°νκ³ , `"https://<μ¬μ©μλͺ>.github.io/digital-namecard"` κ°μ μ€μ ν©λλ€.

#### **package.json μμ**

```json
{
    "homepage": "https://c17an.github.io/digital-namecard",
    "name": "digital-namecard",
    ...
}
```

2. `yarn deploy` λλ `npm run deploy` μ»€λ§¨λλ‘ λ°°ν¬νλ©΄, `homepage` μ μ§μ ν κ²½λ‘μ νλ‘ν μΉ΄λκ° λ°°ν¬λ©λλ€.

## π€ λΌμ΄μΌμ€

μ½λλ μμ λ‘­κ² μμ ν΄ μ¬μ©νμ€ μ μμΌλ©°, λ°λ‘ μΆμ²λ₯Ό λ¨κΈ°μ§ μμΌμλ κ΄μ°?μ΅λλ€!

μ¦κ²¨μ£ΌμΈμ!
