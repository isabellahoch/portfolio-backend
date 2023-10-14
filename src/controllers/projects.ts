import { collection, getDocs, addDoc, updateDoc } from 'firebase/firestore';
import { QuerySnapshot, DocumentData } from 'firebase/firestore';
import { query, where } from 'firebase/firestore';
import { Request, Response } from 'express';
import { Badge, Project, ProjectUnpopulated } from '../models';

import { db } from '..';

export const fetchEmptyProjects = (req: Request, res: Response) => {
  res.status(200).json([]);
}

// export const fetchProjects = async (req: Request, res: Response) => {
//   try {
//     const projectCollection = collection(db, 'projects');
//     const projectsSnapshot = await getDocs(projectCollection);

//     const projects: Project[] = [];
//     projectsSnapshot.forEach((doc) => {
//       const projectData = doc.data();
//       const projectWithId = { id: doc.id, ...projectData } as Project;
//       projects.push(projectWithId);
//     });

//     console.log(projects);

//     res.status(200).json(projects);
//   } catch (error) {
//     console.error('Error fetching projects: ', error);
//     res.status(500).send('Error fetching projects');
//   }
// };

export const fetchProjects = async (req: Request, res: Response) => {
  try {
    const projectCollection = collection(db, 'projects');
    const projectsSnapshot = await getDocs(projectCollection);

    const projects: ProjectUnpopulated[] = [];
    const badgeIds: string[] = [];
    projectsSnapshot.forEach((doc) => {
      const projectData = doc.data() as ProjectUnpopulated | undefined;
      if (projectData) {
        if (projectData?.badges) {
          projects.push(projectData);
          projectData.badges.forEach((badgeId) => {
            if (!badgeIds.includes(badgeId as string)) {
              badgeIds.push(badgeId as string);
            }
          });
        }
        else {
          projects.push(projectData);
        }
      }
    });

    const batchedBadges: Badge[] = [];
    const badgesCollection = collection(db, 'badges');
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(query(badgesCollection, where('__name__', 'in', badgeIds)));

    querySnapshot.forEach((doc) => {
      batchedBadges.push({ id: doc.id, ...doc.data() } as Badge);
    });

    let updatedProjects: Project[] = [];

    projects.forEach((project) => {
      if (project?.badges && project.badges.length > 0) {
        const updatedBadges = batchedBadges.filter((badge: Badge) => {
          return project.badges?.includes(badge.id as string);
        });
        const updatedProject: Project = {
          ...project,
          badges: updatedBadges
        };
        updatedProjects.push(updatedProject);
      } else {
        updatedProjects.push(project as Project);
      }
    });

    console.log(updatedProjects);

    updatedProjects.sort((a, b) => b.precedence - a.precedence);

    res.status(200).json(updatedProjects);
  } catch (error) {
    console.error('Error fetching projects: ', error);
    res.status(500).send('Error fetching projects');
  }
};

export const fetchStaticProjects = (req: Request, res: Response) => {
  res.status(200).json([
    {
      "precedence": 1,
      "title": "Diatribe Internal Data Dashboard",
      "description": "Leveraged Mailchimp API to develop comprehensive Python/Flask internal data dashboard for diabetes-focused healthcare consulting agency with 325,000+ email subscribers",
      "year": 2018,
      "imageUrl": "https://isabellahoch-portfolio-bucket.s3.us-east-2.amazonaws.com/projects/dt_mailchimp_metrics.png"
    },
    {
      "precedence": 2,
      "title": "1ncub8",
      "description": "Created web app and mobile app for novel “Tinder for startups and investors” concept centered around empowering female founders who receive only 2.7% of funding through traditional VC channels. Placed 1st in Congressional App Challenge (District CA-15).",
      "year": 2018,
      "imageUrl": "https://isabellahoch-portfolio-bucket.s3.us-east-2.amazonaws.com/projects/1NCUB8.png"
    },
    {
      "precedence": 4,
      "title": "Gluten VR Simulator",
      "description": "Developed VR gluten simulator web app allowing users to visualize and interact with 3D gluten molecules through an easy-to-use interface.",
      "year": 2019,
      "githubUrl": "https://github.com/isabellahoch/chem_project",
      "imageUrl": "https://isabellahoch-portfolio-bucket.s3.us-east-2.amazonaws.com/projects/LetsGetThisBread.png"
    },
    {
      "precedence": 5,
      "title": "buddi",
      "description": "Created accessibility-forward iOS app for senior population using Swift/Xcode/Cocoa, aggregating COVID-19 resources through a customized engaging intent-based conversational AI chatbot. Implemented Firebase authentication flow.",
      "year": 2020,
      "githubUrl": "https://github.com/isabellahoch/buddi",
      "imageUrl": "https://isabellahoch-portfolio-bucket.s3.us-east-2.amazonaws.com/projects/Buddi.png"
    },
    {
      "precedence": 6,
      "title": "UHS Weekly Digest / Newspaper Website",
      "description": "Developed full-stack web app for school newspaper (The Devils’ Advocate) using Python/Flask, including admin editing page, created dynamic automated newsletter sent out weekly to 500+ users to streamline previous process.",
      "year": 2021,
      "githubUrl": "https://github.com/isabellahoch/devils-advocate"
    },
    {
      "precedence": 7,
      "title": "UHS Independent Study Symposium",
      "description": "Created Flask/Python web app to display student independent study achievements in a UX-forward engaging and accessible manner.",
      "year": 2021,
      "githubUrl": "https://github.com/isabellahoch/2021-independent-study"
    },
    {
      "precedence": 8,
      "title": "sendavirtualhug.com",
      "description": "During the COVID-19 pandemic, developed Python REST API allowing users to request virtual hugs to be sent with custom messaging and timeline, with the end goal of connecting users and bringing cheer during a challenging period. Created accompanying Flask frontend.",
      "year": 2021,
      "imageUrl": "https://isabellahoch-portfolio-bucket.s3.us-east-2.amazonaws.com/projects/SendAVirtualHug.png"
    },
    {
      "precedence": 9,
      "title": "Alexa Skill",
      "description": "Developed 5-star Alexa Skill offering custom birth control reminders and accessible reproductive health information. Implemented 20+ intent handlers with Python ASK SDK. Featured on Alexa Skills Kit blog.",
      "year": 2021,
      "imageUrl": "https://isabellahoch-portfolio-bucket.s3.us-east-2.amazonaws.com/projects/Nurx+Alexa+Skill.png"
    },
    {
      "precedence": 10,
      "title": "fightfastfashion.com",
      "description": "Developed macro-search engine scraping results from green websites to find sustainable alternatives to fast fashion items.",
      "year": 2021,
      "imageUrl": "https://isabellahoch-portfolio-bucket.s3.us-east-2.amazonaws.com/projects/FightFastFashion.png"
    },
    {
      "precedence": 12,
      "title": "PineTime",
      "description": "Created Python/Flask web app & accompanying Alexa Skill aggregating student events on campus and sending out an automated daily digest newsletter, leveraging Google Calendar API.",
      "year": 2021,
      "imageUrl": "https://isabellahoch-portfolio-bucket.s3.us-east-2.amazonaws.com/projects/PineTime.png"
    },
    {
      "precedence": 13,
      "title": "Prisoner’s Dilemma Bot",
      "description": "Developed bot optimized to play repeated rounds of the prisoner's dilemma. Optimized strategy and programmed model in R.",
      "year": 2022
    },
    {
      "precedence": 14,
      "title": "DALI Museum",
      "description": "Developed NodeJS REST API for novel augmented reality museum exhibit showcasing 30+ paintings. Integrated backend with Unity frontend using C#.",
      "year": 2022,
      "imageUrl": "https://isabellahoch-portfolio-bucket.s3.us-east-2.amazonaws.com/projects/HowDoILook.png"
    },
    {
      "precedence": 15,
      "title": "DartPass",
      "description": "Placed first in 10-week TuckLAB (Liberal Arts & Business) entrepreneurship-focused program through Dartmouth's Tuck School of Business for DartPass, the digital key to Dartmouth.",
      "year": 2022,
      "githubUrl": "https://github.com/isabellahoch/dartpass-website",
      "imageUrl": "https://isabellahoch-portfolio-bucket.s3.us-east-2.amazonaws.com/projects/DartPass.png"
    },
    {
      "precedence": 16,
      "title": "Coursera MOOC",
      "description": "Developed comprehensive curriculum and testing for Coursera’s first collaboration with Dartmouth faculty, publishing material from COSC52: Full-Stack Web Development and writing tests in Jest.",
      "year": 2022,
      "githubUrl": "https://home.dartmouth.edu/news/2021/11/dartmouth-partner-coursera-online-learning",
      "imageUrl": "https://isabellahoch-portfolio-bucket.s3.us-east-2.amazonaws.com/projects/Coursera+MOOC.png"
    },
    {
      "precedence": 17,
      "title": "Munch",
      "description": "Created novel food-centric React Native social media app allowing users to share recipes and discover new foods. Developed RESTful NodeJS backend.",
      "year": 2022,
      "imageUrl": "https://isabellahoch-portfolio-bucket.s3.us-east-2.amazonaws.com/projects/CS52+Munch.png"
    },
    {
      "precedence": 18,
      "title": "Uniswap v2/Curve Simulators",
      "description": "Developed low-latency simulators of decentralized exchange protocols in Go to mimic behaviors of automated market makers (AMMs) and streamline trading algorithms (reducing latency by 250%) across base of 1.2 million users.",
      "year": 2022
    },
    {
      "precedence": 19,
      "title": "Search Engine in C",
      "description": "Built a 3 part system comprised of a crawler, indexer, and querier in C to crawl the web given a starter URL and save results in HTML files with 98% accuracy. Created a search GUI able to process AND/OR query operators. Implemented a hashtable, set & counter data structures in C from scratch to support functions.",
      "year": 2022
    },
    {
      "precedence": 20,
      "title": "SpeakUp",
      "description": "Partnered with Dartmouth Linguistics professors to develop NodeJS backend for React Native app innovating the arduous task of collecting data for linguistics research, cultivating the largest-ever sample of audio recordings from New England area dialects to be used for novel computational linguistics research.",
      "year": 2022,
      "imageUrl": "https://isabellahoch-portfolio-bucket.s3.us-east-2.amazonaws.com/projects/Linguistics+Games.png"
    },
    {
      "precedence": 21,
      "title": "Blackjack Machine Learning Model (C)",
      "description": "Developed low-latency blackjack ML model in C, training model through 500,000 simulations, creating networking client to connect to web socket server, able to play with 76% average win rate.",
      "year": 2022
    },
    {
      "precedence": 22,
      "title": "Orbit",
      "description": "Led team of software engineers and designers to create high-fidelity prototype for early-stage social networking startup inspiring users to build friendships through mutual connections. Developed BFS-adjacent graph traversal algorithm matching users with second and third degree connections.",
      "year": 2023,
      "imageUrl": "https://isabellahoch-portfolio-bucket.s3.us-east-2.amazonaws.com/projects/Orbit.png"
    },
    {
      "precedence": 23,
      "title": "Dartmouth ITC Major Declaration Process",
      "description": "Worked directly with Dartmouth ITC to streamline major declaration process and make it more intuitive for students. Led team of developers to develop customized React frontend and JavaScript data parser to plug into school database.",
      "year": 2023,
      "imageUrl": "https://isabellahoch-portfolio-bucket.s3.us-east-2.amazonaws.com/projects/ITC+Major+Declaration.png"
    },
    {
      "precedence": 24,
      "title": "Undisclosed Stealth Startup",
      "description": "Served as founding engineer of seed-stage stealth startup operating in the social networking space. Developed React Native app and accompanying web app using Firebase Auth, Firestore, Cloud Functions. Integrated CometChat webhook messaging API.",
      "imageUrl": "https://isabellahoch-portfolio-bucket.s3.us-east-2.amazonaws.com/projects/Stealth.png",
      "year": 2023
    },
    {
      "precedence": 25,
      "title": "IoT Mushroom Lamp",
      "description": "Designed and engineered 3D-printed full-stack Internet of Things lamp using ESP32-C3 microcontroller to wirelessly control LEDs, leveraging Arduino IDE, React.js frontend, Node.js backend, and websockets.",
      "year": 2023,
      "githubUrl": "https://github.com/isabellahoch/cs29-dig-fab-IoT-mushroom-lamp",
      "imageUrl": "https://isabellahoch-portfolio-bucket.s3.us-east-2.amazonaws.com/projects/MushroomLamp.png"
    },
    {
      "precedence": 26,
      "title": "ImpressionAI",
      "description": "Developed frontend and backend for text-to-image generative AI web app leveraging stable diffusion to render impressionist-style paintings according to user input. Finalist at 2023 AI Genesis Hackathon.",
      "year": 2023,
      "liveUrl": "https://ai-impressionism.onrender.com/",
      "githubUrl": "https://github.com/isabellahoch/generative-ai-genesis-hackathon",
      "imageUrl": "https://isabellahoch-portfolio-bucket.s3.us-east-2.amazonaws.com/projects/ImpressionAI.png"
    }
  ].reverse()
  );
}

export const fetchDummyProjects = (req: Request, res: Response) => {
  res.status(200).json([
    {
      "precedence": 1,
      "title": "Project One",
      "description": "This is the description for Project One. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "imageUrl": "https://via.placeholder.com/300x200",
      "githubUrl": "https://github.com/project-one",
      "liveUrl": "https://project-one-demo.com",
      "badges": {"Java": "https://img.shields.io/badge/java%23-%23239120.svg?style=for-the-badge"}
    },
    {
      "precedence": 2,
      "title": "Project Two",
      "description": "This is the description for Project Two. Ut vehicula ex sit amet dolor fringilla, id finibus dolor efficitur.",
      "imageUrl": "https://via.placeholder.com/300x200",
      "githubUrl": "https://github.com/project-two"
    },
    {
      "precedence": 3,
      "title": "Project Three",
      "description": "This is the description for Project Three. Proin a orci at neque condimentum hendrerit vel eu nunc.",
      "imageUrl": "https://via.placeholder.com/300x200",
      "githubUrl": "https://github.com/project-three",
      "liveUrl": "https://project-three-demo.com"
    },
    {
      "precedence": 4,
      "title": "Project Four",
      "description": "This is the description for Project Four. Nullam eget enim vitae libero congue varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
      "imageUrl": "https://via.placeholder.com/300x200",
      "githubUrl": "https://github.com/project-four"
    },
    {
      "precedence": 5,
      "title": "Project Five",
      "description": "This is the description for Project Five. Fusce vel neque nec eros gravida efficitur at vel lorem.",
      "imageUrl": "https://via.placeholder.com/300x200",
      "githubUrl": "https://github.com/project-five",
      "liveUrl": "https://project-five-demo.com"
    }
  ]
  );
};
