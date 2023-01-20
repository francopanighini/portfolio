import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'

import markovia from '../assets/png/markovia.png'
import cryptuki from '../assets/png/cryptuki.png'
import kernel from '../assets/png/kernel.png'
import compiler from '../assets/png/compiler.png'
import ai from '../assets/png/ai.png'
import entrenapp from '../assets/png/entrenapp.png'






export const projectsData = [
    {
        id: 1,
        projectName: 'Markovia: Ecosystem Simulator',
        projectDesc: 'This project allows users to simulate a simple food chain and study darwinian processes on natural selection. Statistics on the populations\' demography and biology can be visualized in charts. Each individual can sense its environment and necessities and take rational decisions according to them. A simple, trained multilayer perceptron acts as a tiny brain for each individual.',
        tags: ['Unity', 'C#', 'Blender'],
        code: 'https://github.com/markoviateam/markovia',
        demo: 'https://markoviateam.github.io/markovia/',
        image: markovia
    },
    {
        id: 2,
        projectName: 'Cryptuki: P2P Cryptocurrency Marketplace',
        projectDesc: 'Jointly deployed with my team a fully-operational Buenos-Aires-based marketplace for cryptocurrencies. Both the backend and the frontend were designed from scratch.',
        tags: ['Spring 4', 'Spring Security', 'Java', 'PostgreSQL', 'Hibernate', 'Jersey'],
        code: '',
        demo: 'http://pawserver.it.itba.edu.ar/paw-2022a-01',
        image: cryptuki
    },
    {
        id: 3,
        projectName: 'JSON-to-XHTML Compiler',
        projectDesc: 'The purpose of this project was to design a compiler that generated XHTML code from syntactically-valid JSON scripts. The compiler takes constrained JSON files and generates dynamic XHTML files according to a set of rules. It is intended to be a modern JSON-based replacement for the classic XSLT language.',
        tags: ['C', 'Bison', 'Flex'],
        code: 'https://github.com/sreerag-rajan/educative-clone',
        demo: 'https://educative-clone.vercel.app/',
        image: compiler
    },
    {
        id: 4,
        projectName: 'Kernel from Scratch',
        projectDesc: 'Co-designed with my team a mini kernel that implements IPC mechanisms (pipes and shared memory), memory management, a shell and process switching.',
        tags: ['C', 'ASM'],
        code: 'https://github.com/sreerag-rajan/Reliance-Digital-Clone-U4-',
        demo: 'https://reliance-digital-clone.herokuapp.com/',
        image: kernel
    },
    {
        id: 5,
        projectName: 'AI Methods From Scratch',
        projectDesc: 'This repository contains several AI algorithms and techniques implemented from scratch. Single and multi-layered perceptrons, genetic algorithms, Kohonen networks and autoencoders where implemented and subsequently used to solve engineering and data-analysis problems. ',
        tags: ['Python 3', 'Numpy', 'Maplotlib'],
        code: 'https://github.com/iamrituyadav/Reliance_digital',
        demo: 'https://reliance-digital-clone.herokuapp.com/',
        image: ai
    },
    {
        id: 6,
        projectName: 'Entrenapp - Mobile and Web app for Training',
        projectDesc: 'Co-designed and implemented the frontend of both the mobile and web versions of a simple training app. Users can upload, modify execute and share routines for their day-to-day training sessions.',
        tags: ['Android Studio', 'CSS', 'Vue', 'Javascript'],
        code: 'https://github.com/iamrituyadav/Reliance_digital',
        demo: 'https://reliance-digital-clone.herokuapp.com/',
        image: entrenapp
    },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/