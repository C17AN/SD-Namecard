import configType from "./types/configType";

const config: configType = {
  // set your name
  name: "Chan-Min, Kim",
  // set your school or company
  company: "한국항공대학교 소프트웨어학과",
  // one-line description about you
  description: "무한한 호기심과 함께 계속해서 성장하는 개발자가 되려 합니다.",
  // social network service link (optional)
  sns: {
    github: "https://github.com/C17AN",
    // homepage: "",
    notion: "j",
    facebook: "d",
    // instagram: "",
    // linkedin: "",
  },
  // background theme
  theme: "icecream",
  // tech : skill mastery (optional, value must be in 1 ~ 3)
  // all implemented skills list: types/configType.ts
  // + recommended 5 ~ 7 items to show
  techStack: {
    react: 3,
    javascript: 3,
    nextjs: 2,
    git: 2,
    aws: 1,
    typescript: 1,
    docker: 1,
  },
  // Career: company name, from, to
  career: [
    {
      name: "kakao",
      from: "2019-12-31",
      to: "2020-06-31",
      position: "FE Developer",
    },
    {
      name: "naver",
      from: "2019-12-31",
      to: "2020-06-31",
      position: "FE Developer",
    },
    {
      name: "naver",
      from: "2019-12-31",
      to: "2020-06-31",
      position: "FE Developer",
    },
  ],
  extra: [
    {
      name: "오픈소스 컨트리뷰톤",
      year: "2020",
      description: "정보통신산업진흥원장상",
    },
    {
      name: "오픈소스 컨트리뷰톤",
      year: "2020",
      description: "정보통신산업진흥원장상",
    },
    {
      name: "오픈소스 컨트리뷰톤",
      year: "2020",
      description: "정보통신산업진흥원장상",
    },
  ],
};

export default config;
