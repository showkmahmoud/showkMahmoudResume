import { IconNamesEnum } from 'ngx-bootstrap-icons';

type socialItem = {
  iconName: IconNamesEnum | IconNamesEnum;
  link: string;
  iconSize: string;
};
type educationStep = {
  time: string;
  level: string;
  location: string;
  grade: string;
};
type experienceItem = {
  position: string;
  location: string;
  time: string;
  content: string;
};
type portfolioItemContent = {
  description: string;
  img: string;
};
type portfolioItem = {
  cover: string;
  name: string;
  content: portfolioItemContent[];
};

export type User = {
  img: string;
  name: string;
  birthday: string;
  position: string;
  email: string;
  military_service: string;
  about: {
    name: string;
    content: string;
    achievement: string[];
  };
  resume: string;
  socialMedia: socialItem[];
  skills: {
    name: string;
    content: string[];
  };
  education: {
    name: string;
    content: educationStep[];
  };
  work: {
    name: string;
    content: experienceItem[];
  };
  contact: {
    name: string;
    email: string;
    address: string;
    mobileUae: string;
    mobileEgy: string;
    mobileKsa: string;
    postion: string;
    linkedIn: string;
  };
  testimonials: {
    clients: {
      name: string;
      content: string[];
    };
    testimonialData: {
      name: string;
      content: string[];
    };
  };
  portfolio: {
    name: string;
    items: portfolioItem[];
  };
};
