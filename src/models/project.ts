export interface Project {
    id: string;
    description: string;
    precedence: number;
    year: number;
    title: string;
    liveUrl?: string;
    githubUrl?: string;
    imageUrl?: string;
};