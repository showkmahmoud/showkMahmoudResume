import { IconNamesEnum } from 'ngx-bootstrap-icons';

type SocialItem = {
  iconName: IconNamesEnum | IconNamesEnum;
  link: string;
  iconSize: string;
};
type EducationStep = {
  time: string;
  level: string;
  location: string;
  grade: string;
};
type ExperienceItem = {
  position: string;
  location: string;
  time: string;
  content: string;
};
type PortfolioItemContent = {
  description: string;
  img: string;
};
type PortfolioItem = {
  cover: string;
  name: string;
  content: PortfolioItemContent[];
};
type SkillItem = {
  label: string;
  percentage: number;
  value: string;
};
export type User = {
  img: string;
  name: string;
  birthday: string;
  position: string;
  email: string;
  // military_service: string;
  about: {
    name: string;
    content: string;
    achievement: string[];
  };
  resume: string;
  socialMedia: SocialItem[];
  skills: {
    name: string;
    content: SkillItem[];
  };
  education: {
    name: string;
    content: EducationStep[];
  };
  work: {
    name: string;
    content: ExperienceItem[];
  };
  contact: {
    name: string;
    email: string;
    address: string;
    mobileEgy: string;
    postion: string;
    linkedIn: string;
  };
  portfolio: {
    name: string;
    items: PortfolioItem[];
  };
};
