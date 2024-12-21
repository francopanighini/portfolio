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
import CC_MareNostrum1 from '../assets/png/CC_Marenostrum1.png'
import CC_MareNostrum2 from '../assets/png/CC_Marenostrum2.png'
import CC_MareNostrum3 from '../assets/png/CC_Marenostrum3.png'
import CC_MareNostrum4 from '../assets/png/CC_Marenostrum4.png'
import Dialogai1 from '../assets/png/Dialogai1.png'
import Dialogai2 from '../assets/png/Dialogai2.png'


export const projectsData = [
    {
        id: 1,
        title: 'Deep Learning - Distributed Training on MareNostrum 4',
        desc: 'Implemented and optimized distributed training of deep learning models using TensorFlow, leveraging GPU parallelization and CUDA capabilities on the <a href="https://www.bsc.es/marenostrum/marenostrum" target="_blank" rel="noopener noreferrer" style="color: #1E90FF;">MareNostrum 4</a> supercomputer in the <a href="https://www.bsc.es/" target="_blank" rel="noopener noreferrer" style="color: #1E90FF;">Barcelona Supercomputing Center</a>. Utilized SLURM workload manager to train ResNetV2 family across multiple GPUs, analyzing performance metrics such as epoch time and speedup. Explored model and data parallelism techniques to enhance scalability, determining optimal batch sizes for various configurations.',
        tags: ['Python', 'TensorFlow', 'SLURM', 'CUDA'],
        github: '',
        link:'',
        images: [CC_MareNostrum1, CC_MareNostrum2, CC_MareNostrum3, CC_MareNostrum4]
    },
    {
        id: 2,
        title: 'DialogAI - Enterprise Messaging AI Integration',
        desc: 'As Prompt Engineer, co-developed an AI-powered conversational platform currently in production at <a href="https://nextret.net/en/" target="_blank" rel="noopener noreferrer" style="color: #1E90FF;">NexTReT</a>, an IT services company with 25+ years of experience serving 500+ enterprise clients. Integrated into NextRet’s <a href="https://tellfy.com" target="_blank" rel="noopener noreferrer" style="color: #1E90FF;">Tellfy</a> messaging platform, a WhatsApp-like service with 10K+ downloads on the PlayStore, the AI assistant manages customer support within an enterprise messaging context. Designed and implemented complex prompts and conversation flows to ensure contextually accurate and intent-driven responses, formal and respectful tone management and fallbacks to human administrators when needed. The system supports the use of multiple AI models, conversation history, and API-based integrations, addressing common customer service challenges while enabling seamless integration with existing communication systems.',
        tags: ['Python', 'JavaScript', 'API', 'Cloud'],
        github: '',
        link: 'https://drive.google.com/file/d/11HzTlocNTR_Y3ZBxQNNf6uPkLzjYwtRi/view?usp=sharing',
        images: [Dialogai1, Dialogai2]
    },
    {
        id: 3,
        title: 'Custom Kernel and Shell From Scratch',
        desc: 'Co-developed a bootable kernel which implements IPC mechanisms (shared memory and pipes), process scheduling, memory management, interruption and exception handling and a custom shell. It features an embedded Tron arcade game, demonstrating the kernel’s capability to handle interactive applications.',
        tags: ['C', 'ASM', 'Docker', 'QEMU'],
        github: 'https://github.com/fpanighini/tron-kernel',
        link:'',
        images: [customKernel1, customKernel2]
    },
    {
        id: 4,
        title: 'Voltex Compiler - Circuit Design Language',
        desc: 'Co-designed an un-typed programming language and compiler that allows users to design and visualize electrical circuits. The language allows users to define basic components like batteries, resistors, capacitors, inductors, and LEDs, connect them in series or parallel, and generate LaTeX files representing the circuit. Designed for students and professors, the tool helps model circuits in a user-friendly format.',
        tags: ['C', 'Bison', 'Flex'],
        github: 'https://github.com/fpanighini/TLA-TPE',
        link:'',
        images: [voltex1, voltex2, voltex3]
    },
    {
        id: 5,
        title: 'Super Mario Bros Clone',
        desc: 'Developed a project that recreates the core mechanics of the original NES Super Mario Bros. game. Players control Mario to run, jump, collect coins, use power-ups, and defeat enemies within a timed setting. The game includes two levels with destructible blocks, two enemy types, power-ups like Super Mushrooms and Stars, and a flagpole at the end of each level. A graphical user interface (GUI) displays the player’s score, coin count, current world, and remaining time.',
        tags: ['HTML', 'JavaScript'],
        github: 'https://github.com/fpanighini/ProyectoJC/tree/improved-front',
        link:'https://mario-jc.vercel.app/',
        images: [mario1, mario2, mario3, mario4]
    },
    {
        id: 6,
        title: 'POP3 Server From Scratch',
        desc: 'Collaborated on the design and implementation of a fully-functional POP3 server adhering to RFC 1939 and RFC 2449 standards. Developed a custom monitoring and configuration protocol, RAID (Retrieve and Inspect Data Protocol), which provides POP3-like commands for server administration over TCP.',
        tags: ['C'],
        github: 'https://github.com/fpanighini/c-pop3-server',
        link:'',
        images: [pop3Server1, pop3Server2, pop3Server3, pop3Server4]
    },
    {
        id: 7,
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