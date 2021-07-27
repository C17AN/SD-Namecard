import configType from "./types/configType";

const config: configType = {
  // set your name
  name: "",
  // set your school or company
  company: "",
  // one-line description about you
  description: "",
  // social network service link (optional)
  sns: {},
  // tech : skill mastery (optional, value must be in 1 ~ 3)
  // all implemented skills list: types/configType.ts
  // + recommended 5 ~ 7 items to show

  techStack: {},
  career: [{ naver: "2027-19-19" }, { kakao: "2027102" }],
};

export default config;
