import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'

import markovia from '../assets/png/markovia_prime.png'
import cryptuki from '../assets/png/cryptuki_prime.png'
import kernel from '../assets/png/kernel_prime.png'
import compiler from '../assets/png/compiler_prime.png'
import ai from '../assets/png/ai_prime.png'
import socks5 from '../assets/png/socks5_prime.png'
import entrenapp from '../assets/png/entrenapp_prime.png'
import catdog from '../assets/png/catdog_prime.png'







export const projectsData = [
    {
        id: 1,
        title: 'Full-Stack Keras-based Classiﬁer',
        desc: 'This project implements an end-to-end system for classifying pictures containing cats or dogs. A server accepts images by exposing endpoints, feeds them to a trained CNN and responds with a prediction value. The web client consumes the response and displays the results. Each module is containerized.',
        tags: ['FastAPI', 'Python', 'React', 'Keras', 'Tensorflow', 'Docker'],
        github: 'https://github.com/gonzabeade/cat-dog-classifier',
        link: '',
        image: catdog
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
        title: 'Socks5 Proxy From Scratch',
        desc: 'Jointly designed and implemented with my team a fully-functional Socks5 proxy that fully satisfies RFC1928. The team also designed an additional control protocol in which authorised users could retrieve statistics from the Socks5 proxy server.',
        tags: ['C'],
        link: '',
        github: 'https://github.com/mdedeu/socks5-proxy',
        image: socks5
    },
    {
        id: 4,
        title: 'Markovia: Ecosystem Simulator',
        desc: 'This project allows users to simulate a simple food chain and study darwinian processes on natural selection. Statistics on the populations\' demography and biology can be visualized in charts. Each individual can sense its environment and necessities and take rational decisions according to them. A simple, trained multilayer perceptron acts as a tiny brain for each individual.',
        tags: ['Unity', 'C#', 'Blender'],
        github: 'https://github.com/markoviateam/markovia',
        link: 'https://markoviateam.github.io/markovia/',
        image: markovia
    },
    {
        id: 5,
        title: 'JSON-to-XHTML Compiler',
        desc: 'The purpose of this project is to design a compiler that generates XHTML files from syntactically-valid JSON scripts. The compiler takes constrained JSON files and generates dynamic XHTML files according to a set of rules. It is intended to be a modern, JSON-based, replacement for the classic XSLT language.',
        tags: ['C', 'Bison', 'Flex'],
        link: '',
        github: 'https://github.com/camilaDiToro/TPTLA',
        image: compiler
    },
    {
        id: 6,
        title: 'Kernel From Scratch',
        desc: 'Co-designed with my team a mini kernel that implements IPC mechanisms (pipes and shared memory), memory management, a shell and process switching.',
        tags: ['C', 'ASM'],
        github: 'https://github.com/salvaCasta276/OS-pure64',
        link: '',
        image: kernel
    },
    {
        id: 7,
        title: 'AI Methods From Scratch',
        desc: 'This repository contains several AI algorithms and techniques implemented from scratch. Single and multi-layered perceptrons, genetic algorithms, Kohonen networks and autoencoders where implemented and subsequently used to solve engineering and data-analysis problems. ',
        tags: ['Python 3', 'Numpy', 'Matplotlib'],
        github: 'https://github.com/matiapa/itba-sia',
        link: '',
        image: ai
    },
    {
        id: 8,
        title: 'Entrenapp - Mobile and Web Apps for Training',
        desc: 'Co-designed and implemented the frontend of both the mobile and web versions of a simple training app. Users can upload, modify execute and share routines for their day-to-day training sessions.',
        tags: ['Android Studio', 'CSS', 'Vue', 'Javascript'],
        github: 'https://github.com/gbeade/EntrenappMobile',
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