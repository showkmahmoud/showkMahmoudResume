import { IconNamesEnum } from 'ngx-bootstrap-icons';
import { FILTER_ACTIONS } from '../elements/components/portfolio/portfolio.component';
import { User } from './userType';

// portfolio data pages
export const user: User = {
  img: '../assets/user.jpeg',
  name: 'Showk Mahmoud',
  birthday: '10/7/1996',
  position: 'Front-end developer',
  phone: '+971586471992',
  email: 'showkmahmoud@gmail.com',
  cvLink:
    'https://drive.google.com/file/d/1LIACcbxlRkluCF05XeEO_qB9TZQ6tdIQ/view?usp=sharing',
  about: {
    name: 'About Me',
    content: `
    I’m a passionate Front-End Developer with 4+ years of experience crafting modern, responsive, and user-friendly web applications using React.js, Angular, and TypeScript.
My expertise covers UI/UX design in Figma, building pixel-perfect layouts with Tailwind CSS, Bootstrap, and SASS, and integrating REST APIs for seamless functionality.

Currently based in Dubai, UAE, I’ve worked across diverse industries, delivering projects for companies in the MENA region as a Senior Front-End Developer, ITI Instructor, and Freelancer. I thrive in collaborative environments, lead teams effectively, and always stay up to date with the latest tech trends to create high-quality, scalable solutions.

Core Skills & Tools:
React.js | Angular | TypeScript | JavaScript | HTML5 | CSS3/SASS | Tailwind CSS | Bootstrap | REST API Integration | Git & GitHub | UI/UX Design with Figma | Responsive Web Apps | Team Leadership

💡 Open to opportunities in front-end development and UI/UX-focused roles where I can combine technical expertise with creative design to deliver impactful results.`,
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
        position: 'Front-End Developer at KG Technologies',
        location: 'Dubai, UAE',
        time: 'NOVEMBER 2024 – May 2025',
        content: `
        Developed ECO Print web application using React.js, Figma, Tailwind CSS, Material UI, CSS, JavaScript, and Git/GitHub.

        Designed user interfaces in Figma and implemented pixel-perfect, fully responsive web pages.

        Built the front end from scratch: set up project structure, created reusable components, and maintained best coding practices.

        Collaborated closely with backend developers for seamless API integration and smooth functionality.

        Continuously enhanced the application by adding features and improving UX based on user feedback.
      `,
      },
      {
        position: 'Freelancer Front-End Developer',
        location: 'Dubai, UAE',
        time: '',
        content: `
       Talabat Company:
I led the development of a website from initial design to deployment. This project involved designing in Figma, coding
with React, backend integration, and implementing animations with the GSAP library. -Technologies: HTML, HTML5, Tailwind, CSS3, Git with GitHub, Figma, React, GSAP, axios. - Designed a 3-page website in Figma, focusing on user experience and visual appeal starting from the wireframe to the
design. - Converted Figma designs into a responsive and interactive website using React. - Created reusable React components to streamline development and ensure consistency across the site. - Ensured the website was responsive and tested across various devices and browsers for consistent performance. Happy Community: - Technologies: HTML, HTML5, CSS3, Git with GitHub, Figma, Bootstrap. - I transformed a design project from Figma into a fully functional and responsive website contain 12 pages in 3 days. - Collaborated with the design team to understand the visual and interactive elements of the Figma design. - Planned the structure and layout of the website, ensuring that the design's integrity was maintained during the
conversion process. - Ensured that the HTML code was clean, maintainable, and followed best practices. - Applied custom CSS to style the website according to the design specifications. - Utilized Bootstrap to create a responsive and mobile-friendly layout, leveraging its grid system and pre-built
components for efficiency. -Tested the website on various devices and browsers to ensure cross-browser compatibility and optimal performance.
        `,
      },
      {
        position: 'Front-End Developer at Freelance (Various Projects)',
        location: 'Dubai, UAE',
        time: '',
        content: `
       - Project Types: Security Web Page, Community Application (6 Pages), E-commerce App (7 Pages)
        Technologies: HTML5, CSS3, Bootstrap, Tailwind CSS
        Key Contributions: - Converted Figma designs into fully responsive and pixel-perfect HTML/CSS layouts using Bootstrap and Tailwind CSS. - Ensured cross-browser compatibility and optimized performance across different devices. - Developed and implemented responsive designs for complex layouts, adhering to best practices in web development. - Collaborated with clients to gather requirements and deliver tailored solutions that met their needs.
        `,
      },
      {
        position:
          'Front-End Development Instructor at | Information Technology Institute (ITI)',
        location: 'Egypt',
        time: '',
        content: `
        -Developed structured lesson plans and course materials for Bootstrap, ES6, and responsive web design.
        -Created real-world examples and coding exercises to reinforce learning objectives.
        -Conducted interactive and engaging sessions on Bootstrap, demonstrating how to use its components and utilities to
        build responsive websites.
        - Taught modern JavaScript features and best practices, helping students write efficient and up-to-date code.
        - Guided students through practical coding exercises and projects, providing hands-on experience with Bootstrap, ES6, and responsive design techniques.
        `,
      },
      {
        position: 'Front-End Developer (Angular) at 3D Diagnostix',
        location: 'Cairo, Egypt',
        time: 'NOVEMBER 2022 – May 2024',
        content: `
        Working on more than one project such as:
        * iSmile:
        - Technologies: Angular, Angular Material, HTML5, CSS3, JS, Git with GitLab, unit test, ES6, Bootstrap.
        - It is an E-commerce application.
        - implementing easy-to-use and reusable components for managing configurations.
        - building documentation for the UI components and making the integrations with back-end.
        * Connect:
        - Technologies: Angular, Angular Material, Prime NG, HTML5, CSS3, JS, Git, unit test, ES6, Bootstrap.
        - It is an E-commerce application for Boston Dental doctors.        - Display popups depend on specific data from API.
        - Do all client requirements.
        - starting in a new integration with NetSuite back-end.
        `,
      },
      {
        position: 'Front-End Developer at Exceed-web',
        location: 'Remote, Saudi Arabia',
        time: '(July 2022 – October 2022)',
        content: `
        Technologies: Angular, Prime NG, HTML5, CSS, Sass, JS, Git with GitHub, ES6.
        - Initializing the project from scratch through building the files structures, the integration with back-end, negotiation with
        the designer and the whole setup
        `,
      },
      {
        position: 'Front-End Developer (Angular) at Plark Project',
        location: 'Alexandria, Egypt',
        time: 'September 2021 – November 2022',
        content: `
       - Technologies: React Js, Taiga UI, HTML5, CSS, Less, JS, Git with GitHub, ES6.
       - the project helps the user who can want to build his website from our website based on some options in the
        configuration part to choose the page layout and the sections with a dashboard to the admin.
      - the integration with back-end library: SupaBase JavaScript Client Library.
      - Initializing the project from scratch through building the files structures, modules, components, linting and the whole
      setup.
        `,
      },
    ],
  },
  contact: {
    name: 'Contact Me',
    email: 'showkmahmoud@gmail.com',
    address: 'Dubai, UAE',
    mobileEgy: '+971586471992',
    postion: 'Front-end developer',
    linkedIn: 'https://www.linkedin.com/in/showk-mahmoud-0b78b417b',
  },
  portfolio: {
    name: 'Portfolio',
    items: [
      {
        cover: '../assets/talabatWeb/cover.png',
        name: 'Talabat website',
        content: [
          {
            description: 'home page',
            img: '../assets/talabatWeb/cover.png',
          },
          {
            description: 'home page',
            img: '../assets/talabatWeb/1.png',
          },
          {
            description: 'Request page',
            img: '../assets/talabatWeb/2.png',
          },
          {
            description: 'Blogs page',
            img: '../assets/talabatWeb/3.png',
          },

          {
            description: 'Mobile View',
            img: '../assets/talabatWeb/4.png',
          },
        ],
        type: FILTER_ACTIONS.react,
        link: 'https://talabat-web.onrender.com/',
      },
      {
        cover: '../assets/talabatWeb/design1.png',
        name: 'Talabat Figma Design',
        content: [
          {
            description: 'figma design includes 3 pages',
            img: '../assets/talabatWeb/design1.png',
          },
        ],
        type: FILTER_ACTIONS.Figma,
        link: 'https://www.figma.com/design/J2sZnTVs5DUlLtDRWZjp8N/TALABAT-(Copy)?node-id=0-1&node-type=canvas&t=R8bKocdabFCeew2u-0',
      },
      {
        cover: '../assets/exceed-web/exceed-cover.png',
        name: 'Exceed website',
        content: [
          {
            description: 'home page',
            img: '../assets/exceed-web/1.png',
          },
          {
            description: 'About us page',
            img: '../assets/exceed-web/2.png',
          },
          {
            description: 'Services page',
            img: '../assets/exceed-web/3.png',
          },
          {
            description: 'Products page',
            img: '../assets/exceed-web/4.png',
          },
          {
            description: 'Contact-us page',
            img: '../assets/exceed-web/5.png',
          },
        ],
        type: FILTER_ACTIONS.angular,
        link: 'https://atheebsoft.com/home',
      },
      {
        cover: '../assets/k-shop/cover.png',
        name: 'K-shop Website',
        content: [
          {
            description: 'small E-commerce project',
            img: '../assets/k-shop/cover.png',
          },
          {
            description: 'home page of the website',
            img: '../assets/k-shop/1.png',
          },
          {
            description: 'Whish List Page',
            img: '../assets/k-shop/2.png',
          },
          {
            description: 'Categories Page',
            img: '../assets/k-shop/3.png',
          },
          {
            description: 'Cart Page',
            img: '../assets/k-shop/4.png',
          },
        ],
        type: FILTER_ACTIONS.angular,
        link: 'https://k-shop-web.netlify.app/',
      },
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
      {
        cover: '../assets/zid-app/cover.png',
        name: 'zid-app Template',
        content: [
          {
            description: 'full website page',
            img: '../assets/zid-app/2.png',
          },
          {
            description: '',
            img: '../assets/zid-app/cover.png',
          },
          {
            description: '',
            img: '../assets/zid-app/2.png',
          },
          {
            description: 'mobile view',
            img: '../assets/zid-app/3.png',
          },
        ],
        type: FILTER_ACTIONS.html,
        link: 'https://zid-app.netlify.app/home',
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
