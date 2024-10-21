import customKernel1 from '../assets/png/tron_OS1.png'
import customKernel2 from '../assets/png/tron_OS2.png'
import voltex1 from '../assets/png/voltex_compiler1.png'
import voltex2 from '../assets/png/voltex_compiler2.png'
import voltex3 from '../assets/png/voltex_compiler3.png'
import parallelMD5 from '../assets/png/parallel_MD5.png'
import mario1 from '../assets/png/Mario_Bros1.png'
import mario2 from '../assets/png/Mario_Bros2.png'
import mario3 from '../assets/png/Mario_Bros3.png'
import mario4 from '../assets/png/Mario_Bros4.png'
import pop3Server1 from '../assets/png/POP3_Server1.png'
import pop3Server2 from '../assets/png/POP3_Server2.png'
import pop3Server3 from '../assets/png/POP3_Server3.png'
import pop3Server4 from '../assets/png/POP3_Server4.png'


export const projectsData = [
    {
        id: 1,
        title: 'Custom Kernel and Shell From Scratch',
        desc: 'Co-developed a bootable kernel which implements IPC mechanisms (shared memory and pipes), process scheduling, memory management, interruption and exception handling and a custom shell. It features an embedded Tron arcade game, demonstrating the kernel’s capability to handle interactive applications.',
        tags: ['C', 'ASM', 'Docker', 'QEMU'],
        github: 'https://github.com/fpanighini/tron-kernel',
        link:'',
        images: [customKernel1, customKernel2]
    },
    {
        id: 2,
        title: 'Voltex Compiler - Circuit Design Language',
        desc: 'Co-designed an un-typed programming language and compiler that allows users to design and visualize electrical circuits. The language allows users to define basic components like batteries, resistors, capacitors, inductors, and LEDs, connect them in series or parallel, and generate LaTeX files representing the circuit. Designed for students and professors, the tool helps model circuits in a user-friendly format.',
        tags: ['C', 'Bison', 'Flex'],
        github: 'https://github.com/fpanighini/TLA-TPE',
        link:'',
        images: [voltex1, voltex2, voltex3]
    },
    {
        id: 3,
        title: 'Super Mario Bros Clone',
        desc: 'Developed a project that recreates the core mechanics of the original NES Super Mario Bros. game. Players control Mario to run, jump, collect coins, use power-ups, and defeat enemies within a timed setting. The game includes two levels with destructible blocks, two enemy types, power-ups like Super Mushrooms and Stars, and a flagpole at the end of each level. A graphical user interface (GUI) displays the player\’s score, coin count, current world, and remaining time.',
        tags: ['HTML', 'JavaScript'],
        github: 'https://github.com/fpanighini/ProyectoJC/tree/improved-front',
        link:'https://mario-jc.vercel.app/',
        images: [mario1, mario2, mario3, mario4]
    },
    {
        id: 4,
        title: 'POP3 Server From Scratch',
        desc: 'Collaborated on the design and implementation of a fully-functional POP3 server adhering to RFC 1939 and RFC 2449 standards. Developed a custom monitoring and configuration protocol, RAID (Retrieve and Inspect Data Protocol), which provides POP3-like commands for server administration over TCP.',
        tags: ['C'],
        github: 'https://github.com/fpanighini/c-pop3-server',
        link:'',
        images: [pop3Server1, pop3Server2, pop3Server3, pop3Server4]
    },
    {
        id: 5,
        title: 'Parallel MD5 Hashing',
        desc: 'This project enables simultaneous MD5 hashing on multiple files using multiprocessing. It includes an application for managing worker processes, a worker for computing MD5 hashes, and a viewer for displaying results. The system is containerized using Docker and employs POSIX, shared memory, pipes, and IPC mechanisms.',
        tags: ['C', 'Docker'],
        github: 'https://github.com/fpanighini/grupOS',
        link:'',
        images: [parallelMD5]
    }
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