import configType from "./types/configType";

const config: configType = {
  // set your name
  name: "Chan-Min, Kim",
  // set your school or company
  company: "한국항공대학교 소프트웨어학과",
  // one-line description about you
  description: "무한한 호기심과 함께 계속해서 성장하는 개발자가 되고자 합니다.",

  // social network service link (optional)
  sns: {
    github: "https://github.com/C17AN",
    // homepage: "",
    notion: "https://c17an.notion.site/3a652ae4279f4e78a30135125d6ec48c",
    facebook: "https://www.facebook.com/profile.php?id=100013524540306",
    // instagram: "",
    // linkedin: "",
  },

  // background theme
  //  | "icecream" | "ocean" | "sky" | "tropica" | "rainbow" | "blossom" | "bloom" | "mirror" | "beach"
  theme: "ocean",

  // tech : skill mastery (optional, value must be in 1 ~ 3)
  // + recommended 7 > items to show
  techStack: {
    react: 3,
    javascript: 3,
    nextjs: 2,
    git: 2,
    aws: 1,
    typescript: 1,
    docker: 1,
    // ... and more! (skills list: types/configType.ts)
  },

  // Career: company name, from, to
  // Example
  career: [
    {
      name: "한국항공대학교",
      from: "2017-03-02",
      to: "2023-02-01",
      position: "AI융합대학 소프트웨어학과",
    },
  ],
  extra: [
    {
      name: "오픈소스 컨트리뷰톤",
      year: "2020",
      description: "정보통신산업진흥원장상",
    },
    {
      name: "코딩입문(Python) 조교",
      year: "2021",
      description: "한국항공대 파이썬 과목 조교활동",
    },
  ],
};

export default config;
