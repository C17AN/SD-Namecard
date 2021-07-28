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
  career: [{ naver: "2027-19-19" }, { kakao: "2027102" }],
};

export default config;
