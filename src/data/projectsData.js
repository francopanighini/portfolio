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
        title: 'Markovia: Ecosystem Simulator',
        desc: 'This project allows users to simulate a simple food chain and study darwinian processes on natural selection. Statistics on the populations\' demography and biology can be visualized in charts. Each individual can sense its environment and necessities and take rational decisions according to them. A simple, trained multilayer perceptron acts as a tiny brain for each individual.',
        tags: ['Unity', 'C#', 'Blender'],
        github: 'https://github.com/markoviateam/markovia',
        link: 'https://markoviateam.github.io/markovia/',
        image: markovia
    },
    {
        id: 2,
        title: 'P2P Cryptocurrency Marketplace',
        desc: 'Jointly deployed with my team a fully-operational Buenos-Aires-based marketplace for cryptocurrencies. Both the backend and the frontend were designed from scratch.',
        tags: ['Spring 4', 'Spring Security', 'Java', 'PostgreSQL', 'Hibernate', 'Jersey'],
        github: '',
        link: 'http://pawserver.it.itba.edu.ar/paw-2022a-01',
        image: cryptuki
    },
    {
        id: 3,
        title: 'JSON-to-XHTML Compiler',
        desc: 'The purpose of this project is to design a compiler that generates XHTML files from syntactically-valid JSON scripts. The compiler takes constrained JSON files and generates dynamic XHTML files according to a set of rules. It is intended to be a modern, JSON-based, replacement for the classic XSLT language.',
        tags: ['C', 'Bison', 'Flex'],
        github: 'https://github.com/sreerag-rajan/educative-clone',
        link: 'https://educative-clone.vercel.app/',
        image: compiler
    },
    {
        id: 4,
        title: 'Kernel from Scratch',
        desc: 'Co-designed with my team a mini kernel that implements IPC mechanisms (pipes and shared memory), memory management, a shell and process switching.',
        tags: ['C', 'ASM'],
        github: 'https://github.com/sreerag-rajan/Reliance-Digital-Clone-U4-',
        link: 'https://reliance-digital-clone.herokuapp.com/',
        image: kernel
    },
    {
        id: 5,
        title: 'AI Methods From Scratch',
        desc: 'This repository contains several AI algorithms and techniques implemented from scratch. Single and multi-layered perceptrons, genetic algorithms, Kohonen networks and autoencoders where implemented and subsequently used to solve engineering and data-analysis problems. ',
        tags: ['Python 3', 'Numpy', 'Maplotlib'],
        github: 'https://github.com/iamrituyadav/Reliance_digital',
        link: 'https://reliance-digital-clone.herokuapp.com/',
        image: ai
    },
    {
        id: 6,
        title: 'Entrenapp - Mobile and Web app for Training',
        desc: 'Co-designed and implemented the frontend of both the mobile and web versions of a simple training app. Users can upload, modify execute and share routines for their day-to-day training sessions.',
        tags: ['Android Studio', 'CSS', 'Vue', 'Javascript'],
        github: 'https://github.com/iamrituyadav/Reliance_digital',
        link: 'https://reliance-digital-clone.herokuapp.com/',
        image: entrenapp
    },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    title: 'Car Pooling System',
    desc: '',
    tags: ['Flutter', 'React'],
    github: '',
    lin: '',
    image: ''
}, 
*/