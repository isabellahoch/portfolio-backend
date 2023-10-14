import { Request, Response } from 'express';
import { collection, getDocs } from 'firebase/firestore';
import { Badge } from '../models';
import { db } from '..';

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

export const fetchBadges = async (req: Request, res: Response) => {
  try {
    const badgesCollection = collection(db, 'badges');
    const badgesSnapshot = await getDocs(badgesCollection);

    const orderByCategory = true;

    const badges: Badge[] = [];
    badgesSnapshot.forEach((doc) => {
      const badgeData = doc.data() as Badge;
      badgeData.id = doc.id;
      badges.push(badgeData);
    });

    if (orderByCategory) {
      const orderedBadges: Record<string, Badge[]> = {};
      badges.forEach((badge) => {
        if (orderedBadges[badge.category]) {
          orderedBadges[badge.category].push(badge);
        } else {
          orderedBadges[badge.category] = [badge];
        }
      });
      console.log(orderedBadges);
      res.status(200).json(orderedBadges);
    } else {
      console.log(badges);
      res.status(200).json(badges);
    }
  } catch (error) {
    console.error('Error fetching badges: ', error);
    res.status(500).send('Error fetching badges');
  }
};