import { IconNamesEnum } from 'ngx-bootstrap-icons';
import { FILTER_ACTIONS } from '../elements/components/portfolio/portfolio.component';
import { User } from './userType';

// portfolio data pages
export const user: User = {
  img: '../assets/user.jpeg',
  name: 'Showk Mahmoud',
  birthday: '10/7/1996',
  position: 'Front-end developer',
  email: 'showkmahmoud@gmail.com',
  about: {
    name: 'About Me',
    content:
      'Front-end developer graduated from Information Technology Institute with knowledge in front-end technologies, passionate about clean code and getting things done, I hope to build the success of the company while improving my experience.',
    achievement: [],
  },
  resume: '../assets/user.jpeg',
  socialMedia: [
    {
      iconName: IconNamesEnum.Facebook,
      link: 'https://www.facebook.com/showk.mahmoud.1',
      iconSize: '20',
    },
    {
      iconName: IconNamesEnum.Linkedin,
      link: 'https://www.linkedin.com/in/showk-mahmoud-0b78b417b',
      iconSize: '20',
    },
    {
      iconName: IconNamesEnum.Instagram,
      link: 'https://www.instagram.com/showk_mahmoud/',
      iconSize: '20',
    },
    {
      iconName: IconNamesEnum.Github,
      link: 'https://github.com/showkmahmoud',
      iconSize: '20',
    },
  ],
  skills: {
    name: 'Skills',
    content: [
      {
        label: 'HTML, HTML5',
        percentage: 95,
        value: '95',
      },
      {
        label: 'CSS, CSS3',
        percentage: 90,
        value: '90',
      },
      {
        label: 'Bootstrap and responsive web applications - Media Queries',
        percentage: 90,
        value: '90',
      },
      {
        label: 'ANGULAR',
        percentage: 80,
        value: '80',
      },
      {
        label: 'OOP',
        percentage: 60,
        value: '60',
      },
      {
        label: 'JAVASCRIPT',
        percentage: 75,
        value: '75',
      },

      {
        label: 'React.js',
        percentage: 65,
        value: '65',
      },
      {
        label: 'JQuery',
        percentage: 60,
        value: '60',
      },
      {
        label: 'Git and GitHub',
        percentage: 65,
        value: '65',
      },
    ],
  },
  education: {
    name: 'Education History',
    content: [
      {
        time: 'From Dec. 2020 Until Apr. 2021',
        level:
          '3-Month ITP TRACK in Information Technology Institute, Alexandria',
        location: 'Front-End Development',
        grade: 'Very Good',
      },
      {
        time: '2019',
        level: 'BSC. Of Science in Geology & Geophysics, Faculty of Science',
        location: 'Alexandria University, Egypt',
        grade: 'Good',
      },
    ],
  },
  work: {
    name: 'Working History',
    content: [
      {
        position: 'Front-End Developer (Angular) at Plark Project',
        location: 'Alexandria, Egypt',
        time: 'September 2021 – now',
        content: `the project serves
        the admin who can build his website from our website based on some options in the configuration part to choose the page layout and the sections
        with a dashboard
        to the admin`,
      },
    ],
  },
  contact: {
    name: 'Contact Me',
    email: 'showkmahmoud@gmail.com',
    address: 'Alexandria, Egypt',
    mobileEgy: '+201279748207',
    postion: 'Front-end developer',
    linkedIn: 'https://www.linkedin.com/in/showk-mahmoud-0b78b417b',
  },
  portfolio: {
    name: 'Portfolio',
    items: [
      {
        cover: '../assets/angularPortfolio/cover.png',
        name: 'angular portfolio website',
        content: [
          {
            description: 'home page',
            img: '../assets/angularPortfolio/1.png',
          },
          {
            description: 'home page in the dark mode',
            img: '../assets/angularPortfolio/2.png',
          },
          {
            description: 'testimonials page',
            img: '../assets/angularPortfolio/3.png',
          },
          {
            description: 'home page in mobile view',
            img: '../assets/angularPortfolio/4.png',
          },
          {
            description: 'testimonials page in mobile view',
            img: '../assets/angularPortfolio/5.png',
          },
        ],
        type: FILTER_ACTIONS.angular,
        link: 'https://alaamuhammed.netlify.app',
      },
      {
        cover: '../assets/colorLib/cover.png',
        name: 'Colorlib Template',
        content: [
          {
            description: 'full website page',
            img: '../assets/colorLib/full-page.jpg',
          },
          {
            description: '',
            img: '../assets/colorLib/1.png',
          },
          {
            description: '',
            img: '../assets/colorLib/2.png',
          },
          {
            description: '',
            img: '../assets/colorLib/3.png',
          },
          {
            description: '',
            img: '../assets/colorLib/4.png',
          },
          {
            description: '',
            img: '../assets/colorLib/5.png',
          },
        ],
        type: FILTER_ACTIONS.html,
        link: 'https://showkmahmoud.github.io/colorlip_app/',
      },
      {
        cover: '../assets/mogoProject/cover.png',
        name: 'Mogo project',
        content: [
          {
            description: '',
            img: '../assets/mogoProject/full-page.png',
          },
          {
            description: '',
            img: '../assets/mogoProject/1.png',
          },
          {
            description: '',
            img: '../assets/mogoProject/2.png',
          },
          {
            description: '',
            img: '../assets/mogoProject/3.png',
          },
          {
            description: '',
            img: '../assets/mogoProject/4.png',
          },
          {
            description: '',
            img: '../assets/mogoProject/5.png',
          },
        ],
        type: FILTER_ACTIONS.bootstrap,
        link: 'https://showkmahmoud.github.io/Mogo_project/',
      },
      {
        cover: '../assets/reactMoviesApp/cover.png',
        name: 'MOVIES APP',
        content: [
          {
            description: 'TRENDING TODAY',
            img: '../assets/reactMoviesApp/1.png',
          },
          {
            description: 'Search Page',
            img: '../assets/reactMoviesApp/2.png',
          },
          {
            description: 'DISCOVER SERIES',
            img: '../assets/reactMoviesApp/3.png',
          },
          {
            description: 'Movies',
            img: '../assets/reactMoviesApp/4.png',
          },
        ],
        type: FILTER_ACTIONS.react,
        link: 'https://movies-an-serieses-searching-app.netlify.app/',
      },

      {
        cover: '../assets/horicaStar/cover.png',
        name: 'horeca star template',
        content: [
          {
            description: 'HTML Static template',
            img: '../assets/horicaStar/full-page.png',
          },
          {
            description: '',
            img: '../assets/horicaStar/cover.png',
          },
          {
            description: '',
            img: '../assets/horicaStar/1.png',
          },
          {
            description: '',
            img: '../assets/horicaStar/2.png',
          },
          {
            description: '',
            img: '../assets/horicaStar/3.png',
          },
          {
            description: '',
            img: '../assets/horicaStar/4.png',
          },
        ],
        type: FILTER_ACTIONS.html,
        link: 'https://showkmahmoud.github.io/HoricaStar/',
      },
      {
        cover: '../assets/resume-philip/cover.png',
        name: 'template for Philip resume',
        content: [
          {
            description: 'HTML template for Philip resume',
            img: '../assets/resume-philip/7.png',
          },
          {
            description: 'HTML template for Philip resume',
            img: '../assets/resume-philip/cover.png',
          },
          {
            description: 'HTML template for Philip resume',
            img: '../assets/resume-philip/1.png',
          },
          {
            description: '',
            img: '../assets/resume-philip/2.png',
          },
          {
            description: '',
            img: '../assets/resume-philip/3.png',
          },
          {
            description: '',
            img: '../assets/resume-philip/4.png',
          },
          {
            description: '',
            img: '../assets/resume-philip/5.png',
          },
          {
            description: '',
            img: '../assets/resume-philip/6.png',
          },
        ],
        type: FILTER_ACTIONS.html,
        link: 'https://showkmahmoud.github.io/resume-PHILIP-GILBERT/',
      },
      {
        cover: '../assets/Trafalgar/cover.png',
        name: 'static template for Trafalgar',
        content: [
          {
            description: 'static template for Trafalgar',
            img: '../assets/Trafalgar/7.png',
          },
          {
            description: '',
            img: '../assets/Trafalgar/cover.png',
          },
          {
            description: '',
            img: '../assets/Trafalgar/1.png',
          },
          {
            description: '',
            img: '../assets/Trafalgar/2.png',
          },
          {
            description: '',
            img: '../assets/Trafalgar/3.png',
          },
          {
            description: '',
            img: '../assets/Trafalgar/4.png',
          },
          {
            description: '',
            img: '../assets/Trafalgar/5.png',
          },
          {
            description: '',
            img: '../assets/Trafalgar/6.png',
          },
        ],
        type: FILTER_ACTIONS.html,
        link: 'https://showkmahmoud.github.io/Trafalgar-Templatr/',
      },
      {
        cover: '../assets/balsam-pharmacy/cover0.png',
        name: 'balsam pharmay website',
        content: [
          {
            description: 'graduation project of ITI',
            img: '../assets/balsam-pharmacy/cover0.png',
          },
          {
            description: 'home page of the website',
            img: '../assets/balsam-pharmacy/1.png',
          },
          {
            description: 'login-page with sign in with google',
            img: '../assets/balsam-pharmacy/login.png',
          },
          {
            description: 'registeration page',
            img: '../assets/balsam-pharmacy/2.png',
          },
          {
            description: 'about-us page',
            img: '../assets/balsam-pharmacy/3.png',
          },
          {
            description: 'dashboard to the admin to add items',
            img: '../assets/balsam-pharmacy/4.png',
          },
          {
            description: '',
            img: '../assets/balsam-pharmacy/5.png',
          },
          {
            description: 'the drop-down shows the admin options',
            img: '../assets/balsam-pharmacy/6.png',
          },
          {
            description: '',
            img: '../assets/balsam-pharmacy/7.png',
          },
          {
            description: '',
            img: '../assets/balsam-pharmacy/8.png',
          },
          {
            description: '',
            img: '../assets/balsam-pharmacy/9.png',
          },
          {
            description: 'the website in mobile-view',
            img: '../assets/balsam-pharmacy/mobile.png',
          },
        ],
        type: FILTER_ACTIONS.react,
        link: 'https://github.com/showkmahmoud/Balasam_Pharmacy.git',
      },
    ],
  },
};
// navabr items
export const navbarItems = [
  {
    link: 'resume',
    name: 'Experience',
  },
  { link: 'education', name: 'Education' },

  { link: 'skills', name: 'Skills' },

  {
    link: 'portfolio',
    name: 'Portfolio',
  },
  {
    link: 'contact',
    name: 'Contact',
  },
];
