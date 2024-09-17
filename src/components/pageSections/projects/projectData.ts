import { Project } from "@/types/project";

export const ProjectsData: Project[] = [
    {
        title: 'Breeze Budgeting',
        code: 'https://github.com/seannkelleyy/Breeze',
        link: 'https://www.breeze.seannkelleyy.com',
        image: '/projects/breeze.jpeg',
        technologies: [
            {
                title: 'React',
                color: 'bg-blue-400 text-black',
            },
            {
                title: '.NET C#',
                color: 'bg-purple-500 text-black',
            },
            {
                title: 'SQL',
                color: 'bg-green-500 text-black',
            },
            
            {
                title: 'Docker',
                color: 'bg-blue-100 text-black',
            },
            {
                title: 'Azure',
                color: 'bg-blue-500 text-black',
            }],
        description: 'Breeze Budgeting is a full-stack web application that I built as an intern at Neudesic and ' +
            'as a personal project. It is a budgeting application that allows users to track their income and expenses. ' +
            'I built the front-end using React and the back-end using .NET C# and SQL. I used Docker to containerize the ' +
            'application and Azure to host the application. I learned how to use Docker and Azure to deploy applications. ' +
            'Breeze allowed me to design, model, and implement a full-stack application. I built this application between the ' +
            'fall of 2023 and the spring of 2024.'
    },
        {
        title: 'This Website',
        code: 'https://github.com/seannkelleyy/Portfolio-v3',
        link: 'https://www.seannkelleyy.com',
        image: '/projects/portfolioV3.jpeg',
        technologies: [{
            title: 'React',
            color: 'bg-blue-500 text-black',
        }, {
            title: 'TailwindCSS',
            color: 'bg-blue-100 text-black',
        }, {
            title: 'ShadCN',
            color: 'bg-yellow-400 text-black',
        }],
        description: 'This website is the third version of my personal website. I built this website to showcase my projects ' +
            'and to get more experience using ShadCN and TailwindCSS. I built this website in the summer of 2024.'
    },
    {
        title: 'Pomodoro Timer',
        code: 'https://github.com/seannkelleyy/Pomodoro',
        link: 'https://www.timer.seannkelleyy.com',
        image: '/projects/pomodoro.jpeg',
        technologies: [{
            title: 'React',
            color: 'bg-blue-500 text-black',
        },],
        description: 'The Pomodoro Timer is a simple productivity tool that I built using React. It allows users to set a ' +
            'focus time and a break time and then start the timer. The timer will count down the focus time and then the break ' +
            'time. It also has a focus mode to count how long you have been focused for. I built this project to learn more about ' +
            'React and how to use state and rendering.The challenging part of this was learning how to build a timer that keeps time ' +
            'even when the tab is asleep. I built this project in the summer of 2024.'
        
    },
        {
        title: 'My Second  Website',
        code: 'https://github.com/seannkelleyy/Portfolio-v2',
        link: 'https://www.v2.seannkelleyy.com',
        image: '/projects/portfolioV2.jpeg',
        technologies: [{
            title: 'React',
            color: 'bg-blue-400 text-black',
        }],
        description: 'I built this version of my personal website while interning at Neudesic. It was my first React project ' +
            'that I created by myself. I learned a lot about React Hooks and API fetching. I learned more about CSS styling to ' +
            'create a cohesive and responsive design. I hosted this website using Azure Static Web Apps. I built this website in ' +
            'the summer of 2023.'
    },
    {
        title: 'My first website',
        code: 'https://github.com/seannkelleyy/Portfolio-v1',
        link: 'https://www.v1.seannkelleyy.com',
        image: '/projects/portfolioV1.png',
        technologies: [
            {
                title: 'HTML',
                color: 'bg-rose-500 text-black',
            },
            {
                title: 'CSS',
                color: 'bg-blue-500 text-black',
            }
        ],
        description: 'This was my first personal website that I created. It was a simple HTML and CSS website that ' +
            'I created to showcase my projects. I learned the basics of website design as well as how to host ' +
            'a website under a custom domain. This was created in the spring of 2022.'
    },
    {
        title: 'Mortgage Calculator',
        code: 'https://github.com/seannkelleyy/MortgageCalculator',
        link: '',
        image: '/projects/mortgageCalculator.png',
        technologies: [{
            title: '.NET C#',
            color: 'bg-purple-500 text-black',
        }],
        description: 'This is a simple mortgage calculator that I created in C# using Windows Forms. I built ' +
            'this as a project for my recruitment as an intern as Neudesic, an IBM Company, in the fall of 2022. ' +
            'It takes the loan amount, loan length in years, and interest rate as inputs and calculates the monthly ' +
            'payment, and the amortization schedule for the loan. I learned how to use Windows Forms and gained  ' +
            'more experience with C# and .NET.'
    },
];