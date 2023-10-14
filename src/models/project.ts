import { Badge } from "./badge";

// can be either an array of ids pre-populate or an array of Badge objects

export interface ProjectUnpopulated {
    id: string;
    description: string;
    precedence: number;
    year: number;
    title: string;
    liveUrl?: string;
    githubUrl?: string;
    imageUrl?: string;
    badges?: string[]; 
};

export interface Project {
    id: string;
    description: string;
    precedence: number;
    year: number;
    title: string;
    liveUrl?: string;
    githubUrl?: string;
    imageUrl?: string;
    badges?: Badge[];
};