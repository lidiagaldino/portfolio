//  icons
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiActivity,
  FiSettings,
  FiTag,
  FiCloud
} from 'react-icons/fi';

// projects images
import pokedex from './assets/img/projects/pokedex.PNG'
import kimetsu from './assets/img/projects/kimetsu.png'
import doctor from './assets/img/projects/doctorstrange.PNG'
import imc from './assets/img/projects/android.jpg'
import zeroWaste from './assets/img/projects/zero-waste.png'
import zerowaste_front from './assets/img/projects/zerowaste-front.png'
import zerowaste_logistic from './assets/img/projects/zero-waste-logistic.png'
import pizza_joy from './assets/img/projects/pizza-joy.png'

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg5 from './assets/img/skills/typescript.png'
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  }
];

// social
export const social = [
  {
    icon: <FiMail />,
    href: 'mailto:lidia.galdino@outlook.com',
  },
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/lidia-galdino-4b4033241/',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/lidiagaldino',
  }
];

// projects
export const projectsData = [
  {
    id: '1',
    image: pokedex,
    name: 'Pokedex',
    category: 'front-end',
    link: 'https://github.com/lidiagaldino/pokedex'
  },
  {
    id: '2',
    image: kimetsu,
    name: 'Kimetsu no Yaiba',
    category: 'front-end',
    link: 'https://github.com/lidiagaldino/kimetsu-no-yaiba'
  },
  {
    id: '3',
    image: doctor,
    name: 'Doctor Strange',
    category: 'front-end',
    link: 'https://github.com/lidiagaldino/doctor-strange'
  },
  {
    id: '4',
    image: imc,
    name: 'IMC Calculator',
    category: 'android',
    link: 'https://github.com/lidiagaldino/imc-android'
  },
  {
    id: '5',
    image: zeroWaste,
    name: 'API Zero Waste',
    category: 'back-end',
    link: 'https://github.com/lidiagaldino/api-zero-waste'
  },
  {
    id: '6',
    image: zerowaste_logistic,
    name: 'API Zero Waste Logistic',
    category: 'back-end',
    link: 'https://github.com/lidiagaldino/zero-waste-logistic'
  },
  {
    id: '7',
    image: zerowaste_front,
    name: 'Zero Waste Front-End Web',
    category: 'front-end',
    link: 'https://github.com/lidiagaldino/ZEROWASTE-WEB'
  },
  {
    id: '8',
    image: pizza_joy,
    name: 'Pizza Joy Back-End (microservices)',
    category: 'back-end',
    link: 'https://github.com/lidiagaldino/back-end-pizza-joy'
  }
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'front-end',
  },
  {
    name: 'back-end',
  },
  {
    name: 'android',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiActivity />,
    name: 'System Development',
    description:
      'SENAI',
  },
  {
    icon: <FiSettings />,
    name: 'Ignite Node',
    description:
      'Rocketseat',
  },
  {
    icon: <FiCloud />,
    name: 'AWS Cloud Practitioner Foundational',
    description:
      'SENAI',
  },
  {
    icon: <FiTag />,
    name: 'JavaScript and TypeScript course from basic to advanced',
    description:
      'Udemy',
  },
];
