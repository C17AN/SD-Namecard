type availableMastery = 1 | 2 | 3;

type company = {
  [company: string]: string;
};

interface config {
  name: string;
  company: string;
  description: string;
  sns?: {
    facebook?: string;
    github?: string;
    instagram?: string;
    linkedin?: string;
    notion?: string;
  };
  techStack: {
    html?: availableMastery;
    css?: availableMastery;
    sass?: availableMastery;
    tailwindcss?: availableMastery;
    git?: availableMastery;
    gitlab?: availableMastery;
    github?: availableMastery;
    react?: availableMastery;
    gatsby?: availableMastery;
    nodejs?: availableMastery;
    javascript?: availableMastery;
    typescript?: availableMastery;
    express?: availableMastery;
    aws?: availableMastery;
    mysql?: availableMastery;
    java?: availableMastery;
    spring?: availableMastery;
    springboot?: availableMastery;
    python?: availableMastery;
    django?: availableMastery;
    flask?: availableMastery;
    ruby?: availableMastery;
    cpp?: availableMastery;
    c?: availableMastery;
    tensorflow?: availableMastery;
    heroku?: availableMastery;
    netlify?: availableMastery;
    nextjs?: availableMastery;
    vue?: availableMastery;
    nuxt?: availableMastery;
    nest?: availableMastery;
    postgresql?: availableMastery;
    mongodb?: availableMastery;
    vscode?: availableMastery;
    webstorm?: availableMastery;
    swift?: availableMastery;
    kotlin?: availableMastery;
    flutter?: availableMastery;
    go?: availableMastery;
    php?: availableMastery;
    azure?: availableMastery;
    gcp?: availableMastery;
    r?: availableMastery;
    docker?: availableMastery;
    kubernetes?: availableMastery;
    ansible?: availableMastery;
  };
  career: Array<company>;
}

export default config;
