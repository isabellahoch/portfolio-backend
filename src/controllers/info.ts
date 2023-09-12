import { Request, Response } from 'express';

export const fetchAbout = (req: Request, res: Response) => {
  res.status(200).json("Here's a little bit about me!");
};

export const fetchLanguages = (req: Request, res: Response) => {
  res.status(200).json([
    "https://img.shields.io/badge/java%23-%23239120.svg?style=for-the-badge",
    "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
    "https://img.shields.io/badge/c-191970.svg?style=for-the-badge&logo=c&logoColor=white",
    "https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white",
    "https://img.shields.io/badge/swift-F54A2A?style=for-the-badge&logo=swift&logoColor=white",
    "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
    "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
    "https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white"
  ]);
};

export const fetchTechStacks = (req: Request, res: Response) => {
  res.status(200).json([
    "https://img.shields.io/badge/react-%23C21325.svg?style=for-the-badge&logo=react&logoColor=white",
    "https://img.shields.io/badge/redux-6C3483.svg?style=for-the-badge&logo=redux&logoColor=white",
    "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
    "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
    "https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white",
    "https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
    "https://img.shields.io/badge/Expo-000020?logo=expo&logoColor=white&style=for-the-badge",
    "https://img.shields.io/badge/swift-F54A2A?style=for-the-badge&logo=swift&logoColor=white",
    "https://img.shields.io/badge/Xcode-007ACC?style=for-the-badge&logo=Xcode&logoColor=white",
    "https://img.shields.io/badge/CocoaPods-E32?logo=cocoapods&logoColor=white&style=for-the-badge",
    "https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white",
    "https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white",
    "https://img.shields.io/badge/jinja-white.svg?style=for-the-badge&logo=jinja&logoColor=black",
    "https://img.shields.io/badge/gunicorn-%298729.svg?style=for-the-badge&logo=gunicorn&logoColor=white",
    "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
    "https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white",
    "https://img.shields.io/badge/ESLint-%23FF9A00?style=for-the-badge&logo=eslint&logoColor=white",
    "https://img.shields.io/badge/yarn-31A8FF.svg?style=for-the-badge&logo=yarn&logoColor=white",
    "https://img.shields.io/badge/npm-hotpink.svg?style=for-the-badge&logo=npm&logoColor=white",
    "https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white",
    "https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white",
    "https://img.shields.io/badge/Plotly-%233F4F75.svg?style=for-the-badge&logo=plotly&logoColor=white",
    "https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black",
    "https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white",
    "https://img.shields.io/badge/amazon%20alexa-52b5f7?style=for-the-badge&logo=amazon%20alexa&logoColor=white",
    "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white",
    "https://img.shields.io/badge/Google%20Cloud-4285F4?logo=googlecloud&logoColor=fff&style=for-the-badge"
  ]
  );
};

const badges: {
  [key: string]: Record<string, string>;
} = {
  "languages":
    { "Java": "https://img.shields.io/badge/java%23-%23239120.svg?style=for-the-badge",
    "Python": "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
    "C": "https://img.shields.io/badge/c-191970.svg?style=for-the-badge&logo=c&logoColor=white",
    "Go": "https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white",
    "Swift": "https://img.shields.io/badge/swift-F54A2A?style=for-the-badge&logo=swift&logoColor=white",
    "JavaScript": "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
    "TypeScript": "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
    "Shell Script": "https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white"
  },
  "tech": {
    "React": "https://img.shields.io/badge/react-%23C21325.svg?style=for-the-badge&logo=react&logoColor=white",
    "Redux": "https://img.shields.io/badge/redux-6C3483.svg?style=for-the-badge&logo=redux&logoColor=white",
    "Express.js": "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
    "MongoDB": "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
    "Firebase": "https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white",
    "React Native": "https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
    "Expo": "https://img.shields.io/badge/Expo-000020?logo=expo&logoColor=white&style=for-the-badge",
    "Xcode": "https://img.shields.io/badge/Xcode-007ACC?style=for-the-badge&logo=Xcode&logoColor=white",
    "Cocoapods": "https://img.shields.io/badge/CocoaPods-E32?logo=cocoapods&logoColor=white&style=for-the-badge",
    "Flask": "https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white",
    "Django": "https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white",
    "Jinja": "https://img.shields.io/badge/jinja-white.svg?style=for-the-badge&logo=jinja&logoColor=black",
    "Gunicorn": "https://img.shields.io/badge/gunicorn-%298729.svg?style=for-the-badge&logo=gunicorn&logoColor=white",
    "Git": "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
    "GitHub": "https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white",
    "ESLint": "https://img.shields.io/badge/ESLint-%23FF9A00?style=for-the-badge&logo=eslint&logoColor=white",
    "Yarn": "https://img.shields.io/badge/yarn-31A8FF.svg?style=for-the-badge&logo=yarn&logoColor=white",
    "NPM": "https://img.shields.io/badge/npm-hotpink.svg?style=for-the-badge&logo=npm&logoColor=white",
    "NumPy": "https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white",
    "Pandas": "https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white",
    "Plotly": "https://img.shields.io/badge/Plotly-%233F4F75.svg?style=for-the-badge&logo=plotly&logoColor=white",
    "Matplotlib": "https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black",
    "PyTorch": "https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white",
    "Amazon Alexa": "https://img.shields.io/badge/amazon%20alexa-52b5f7?style=for-the-badge&logo=amazon%20alexa&logoColor=white",
    "AWS": "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white",
    "Google Cloud": "https://img.shields.io/badge/Google%20Cloud-4285F4?logo=googlecloud&logoColor=fff&style=for-the-badge"
  },
  "other": {
    "Figma": "https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white",
    "Blender": "https://img.shields.io/badge/blender-%23F5792A.svg?style=for-the-badge&logo=blender&logoColor=white",
    "Duolingo": "https://img.shields.io/badge/Duolingo-%234DC730.svg?style=for-the-badge&logo=Duolingo&logoColor=white",
  },
  "learning": {
    "OCaml Badge": "https://img.shields.io/badge/OCaml-EC6813?logo=ocaml&logoColor=fff&style=for-the-badge",
    "Postgres": "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"
  }
}

export const fetchBadges = (req: Request, res: Response) => {
  const { key } = req.query;
  if(key === undefined || badges[key as string] === undefined) {
    res.status(200).json(badges);
  }
  else {
    res.status(200).json(badges[key as string]);
  }
};
