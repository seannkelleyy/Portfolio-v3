import { Technology } from "./technology";

export type Project = {
    title: string;
    code: string;
    link: string;
    image: string;
    technologies: Technology[];
    description?: string;
}