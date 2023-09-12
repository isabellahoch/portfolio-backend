export { getUsers, createUser } from './users';

import { Request, Response } from 'express';

export const fetchProjects = (req: Request, res: Response) => {
  res.status(200).json([
    {
      "id": 1,
      "title": "Project One",
      "description": "This is the description for Project One. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "imageUrl": "https://via.placeholder.com/300x200",
      "githubUrl": "https://github.com/project-one",
      "liveUrl": "https://project-one-demo.com"
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