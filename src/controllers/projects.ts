export { getUsers, createUser } from './users';

import { Request, Response } from 'express';

export const fetchEmptyProjects = (req: Request, res: Response) => {
  res.status(200).json([]);
}

export const fetchProjects = (req: Request, res: Response) => {
  res.status(200).json([
    {
      "id": 1,
      "title": "Diatribe Internal Data Dashboard",
      "description": "Leveraged Mailchimp API to develop comprehensive Python/Flask internal data dashboard for diabetes-focused healthcare consulting agency with xx email subscribers",
      "year": 2018
    },
    {
      "id": 2,
      "title": "incub8",
      "description": "Created web app and mobile app for novel “Tinder for startups and investors” concept centered around uplifting female founders who traditionally receive only x% of funding through traditional VC channels. Placed 1st in Congressional App Challenge (District CA-15).",
      "year": 2018
    },
    {
      "id": 3,
      "title": "Toxic Instagram Agent",
      "description": "Created web scraping algorithm to determine the unreciprocal accounts a user is following but who do not follow them back (unidirectional edges on the social network graph).",
      "year": 2018
    },
    {
      "id": 4,
      "title": "Gluten VR Simulator",
      "description": "Developed 3D gluten simulator web app allowing users to visualize and interact with gluten molecules through an easy-to-use interface.",
      "year": 2019,
      "githubUrl": "https://github.com/isabellahoch/chem_project"
    },
    {
      "id": 5,
      "title": "buddi",
      "description": "Created accessibility-forward iOS app for senior population using Swift/Xcode/Cocoa, aggregating COVID-19 resources through a customized engaging intent-based conversational AI chatbot. Implemented Firebase authentication flow.",
      "year": 2020,
      "githubUrl": "https://github.com/isabellahoch/buddi"
    },
    {
      "id": 6,
      "title": "UHS Weekly Digest / Newspaper Website",
      "description": "Developed full-stack web app for school newspaper (The Devils’ Advocate) using Python/Flask, including admin editing page, created dynamic automated newsletter sent out weekly to 500+ users to streamline previous process.",
      "year": 2021,
      "githubUrl": "https://github.com/isabellahoch/devils-advocate"
    },
    {
      "id": 7,
      "title": "UHS Independent Study Symposium",
      "description": "Created Flask/Python web app to display student independent study achievements in a UX-forward engaging and accessible manner.",
      "year": 2021,
      "githubUrl": "https://github.com/isabellahoch/2021-independent-study"
    },
    {
      "id": 8,
      "title": "sendavirtualhug.com",
      "description": "During the COVID-19 pandemic, developed Python REST API allowing users to request virtual hugs to be sent with custom messaging and timeline, with the end goal of connecting users and bringing cheer during a challenging period. Created accompanying Flask frontend.",
      "year": 2021
    },
    {
      "id": 9,
      "title": "Alexa Skill",
      "description": "Developed 5-star Alexa Skill offering custom birth control reminders and accessible reproductive health information. Implemented 20+ intent handlers with Python ASK SDK. Featured on Alexa Skills Kit blog.",
      "year": 2021
    },
    {
      "id": 10,
      "title": "fightfastfashion.com",
      "description": "Developed macro-search engine scraping results from green websites to find sustainable alternatives to fast fashion items.",
      "year": 2021
    },
    {
      "id": 11,
      "title": "Viterbi Decoder Algorithm",
      "description": "Developed Viterbi decoder algorithm in 2021."
    },
    {
      "id": 12,
      "title": "PineTime",
      "description": "Created Python/Flask web app aggregating student events on campus and sending out an automated daily digest newsletter, leveraging Google Calendar API.",
      "year": 2021
    },
    {
      "id": 13,
      "title": "Prisoner’s Dilemma Bot",
      "description": "Developed bot optimized to play repeated rounds of the prisoner's dilemma. Optimized strategy and programmed model in R.",
      "year": 2022
    },
    {
      "id": 14,
      "title": "DALI Museum",
      "description": "Developed NodeJS REST API for novel augmented reality museum exhibit showcasing 30+ paintings. Integrated backend with Unity frontend using C#.",
      "year": 2022
    },
    {
      "id": 15,
      "title": "DartPass",
      "description": "Placed first in 10-week TuckLAB (Liberal Arts & Business) entrepreneurship-focused program through Dartmouth's Tuck School of Business for DartPass, the digital key to Dartmouth.",
      "year": 2022,
      "githubUrl": "https://github.com/isabellahoch/dartpass-website"
    },
    {
      "id": 16,
      "title": "Coursera MOOC",
      "description": "Developed comprehensive curriculum and testing for Coursera’s first collaboration with Dartmouth faculty, publishing material from COSC52: Full-Stack Web Development and writing tests in Jest.",
      "year": 2022,
      "githubUrl": "https://home.dartmouth.edu/news/2021/11/dartmouth-partner-coursera-online-learning"
    },
    {
      "id": 17,
      "title": "Munch",
      "description": "Created novel food-centric React Native social media app allowing users to share recipes and discover new foods. Developed RESTful NodeJS backend.",
      "year": 2022
    },
    {
      "id": 18,
      "title": "Uniswap v2/Curve Simulators",
      "description": "Developed low-latency simulators of decentralized exchange protocols in Go to mimic behaviors of automated market makers (AMMs) and streamline trading algorithms (reducing latency by 250%) across base of 1.2 million users.",
      "year": 2022
    },
    {
      "id": 19,
      "title": "Search Engine in C",
      "description": "Built a 3 part system comprised of a crawler, indexer, and querier in C to crawl the web given a starter URL and save results in HTML files with 98% accuracy. Created a search GUI able to process AND/OR query operators. Implemented a hashtable, set & counter data structures in C from scratch to support functions.",
      "year": 2022
    },
    {
      "id": 20,
      "title": "SpeakUp",
      "description": "Partnered with Dartmouth Linguistics professors to develop NodeJS backend for React Native app innovating the arduous task of collecting data for linguistics research, cultivating the largest-ever sample of audio recordings from New England area dialects to be used for novel computational linguistics research.",
      "year": 2022
    },
    {
      "id": 21,
      "title": "Blackjack Machine Learning Model (C)",
      "description": "Developed low-latency blackjack ML model in C, training model through 500,000 simulations, creating networking client to connect to web socket server, able to play with 76% average win rate.",
      "year": 2022
    },
    {
      "id": 22,
      "title": "Orbit",
      "description": "Led team of software engineers and designers to create high-fidelity prototype for early-stage social networking startup inspiring users to build friendships through mutual connections. Developed BFS-adjacent graph traversal algorithm matching users with second and third degree connections.",
      "year": 2023
    },
    {
      "id": 23,
      "title": "Dartmouth ITC Major Declaration Process",
      "description": "Worked directly with Dartmouth ITC to streamline major declaration process and make it more intuitive for students. Led team of developers to develop customized React frontend and JavaScript data parser to plug into school database.",
      "year": 2023
    },
    {
      "id": 24,
      "title": "Undisclosed Stealth Startup",
      "description": "Served as founding engineer of seed-stage stealth startup operating in the social networking space. Developed React Native app and accompanying web app using Firebase Auth, Firestore, Cloud Functions. Integrated CometChat webhook messaging API.",
      "year": 2023
    },
    {
      "id": 25,
      "title": "IoT Mushroom Lamp",
      "description": "Designed and engineered 3D-printed full-stack Internet of Things lamp using ESP32-C3 microcontroller to wirelessly control LEDs, leveraging Arduino IDE, React.js frontend, Node.js backend, and websockets.",
      "year": 2023,
      "githubUrl": "https://github.com/isabellahoch/cs29-dig-fab-IoT-mushroom-lamp"
    },
    {
      "id": 26,
      "title": "ImpressionAI",
      "description": "Developed frontend and backend for text-to-image generative AI web app leveraging stable diffusion to render impressionist-style paintings according to user input. Finalist at 2023 AI Genesis Hackathon.",
      "year": 2023,
      "liveUrl": "https://ai-impressionism.onrender.com/",
      "githubUrl": "https://github.com/isabellahoch/generative-ai-genesis-hackathon"
    }
  ].reverse()
  );
}

export const fetchDummyProjects = (req: Request, res: Response) => {
  res.status(200).json([
    {
      "id": 1,
      "title": "Project One",
      "description": "This is the description for Project One. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "imageUrl": "https://via.placeholder.com/300x200",
      "githubUrl": "https://github.com/project-one",
      "liveUrl": "https://project-one-demo.com",
      "badges": {"Java": "https://img.shields.io/badge/java%23-%23239120.svg?style=for-the-badge"}
    },
    {
      "id": 2,
      "title": "Project Two",
      "description": "This is the description for Project Two. Ut vehicula ex sit amet dolor fringilla, id finibus dolor efficitur.",
      "imageUrl": "https://via.placeholder.com/300x200",
      "githubUrl": "https://github.com/project-two"
    },
    {
      "id": 3,
      "title": "Project Three",
      "description": "This is the description for Project Three. Proin a orci at neque condimentum hendrerit vel eu nunc.",
      "imageUrl": "https://via.placeholder.com/300x200",
      "githubUrl": "https://github.com/project-three",
      "liveUrl": "https://project-three-demo.com"
    },
    {
      "id": 4,
      "title": "Project Four",
      "description": "This is the description for Project Four. Nullam eget enim vitae libero congue varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
      "imageUrl": "https://via.placeholder.com/300x200",
      "githubUrl": "https://github.com/project-four"
    },
    {
      "id": 5,
      "title": "Project Five",
      "description": "This is the description for Project Five. Fusce vel neque nec eros gravida efficitur at vel lorem.",
      "imageUrl": "https://via.placeholder.com/300x200",
      "githubUrl": "https://github.com/project-five",
      "liveUrl": "https://project-five-demo.com"
    }
  ]
  );
};