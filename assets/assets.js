import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import postgresql from './postgresql.png';
import postman from './postman.png';
import colab from './colab.png';
import supabase from './supabase.png';
import teaching from './teaching.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    postgresql,
    postman,
    colab,
    supabase,
    teaching,
};

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/work-1.png',
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: '/work-2.png',
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/work-3.png',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
    },
]

export const serviceData = [
    {
      icon: assets.web_icon,
      title: 'Web Design & Development',
      description: 'I specialize in creating modern, responsive websites using the latest web technologies, including JavaScript, React, and Next.js. My goal is to build visually appealing and functional websites that provide an excellent user experience.',
      link: 'https://github.com/Dariusan3?tab=repositories' // Link to a relevant GitHub repo, e.g., a portfolio or web-related project
    },
    {
      icon: assets.mobile_icon,
      title: 'Mobile App Development',
      description: 'I develop cross-platform mobile applications for both iOS and Android using frameworks like Flutter and React Native. My focus is on performance, usability, and delivering a seamless experience for users on mobile devices.',
      link: 'https://github.com/Dariusan3?tab=repositories' // Link to a relevant GitHub repo, e.g., mobile app project
    },
    {
      icon: assets.ui_icon,
      title: 'UI/UX Design',
      description: 'I focus on creating user interfaces and experiences that are both functional and aesthetically pleasing. By applying principles of design and usability, I ensure the final product is intuitive and meets user needs.',
      link: 'https://github.com/Dariusan3?tab=repositories' // Link to a relevant GitHub repo, e.g., UI/UX project or designs
    },
    {
        icon: assets.teaching,
        title: 'Programming Instructor',
        description: 'I teach programming to others, covering topics like algorithms and various programming subjects. I aim to make complex concepts easy to understand and help learners build strong coding skills.',
        link: 'https://github.com/Dariusan3?tab=repositories' // Link to a relevant GitHub repo if applicable
    },
];

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages and Frameworks', description: 'HTML, CSS, JavaScript, TypeScript, Python, C#, SQL, Java, Dart, React Js, Next Js, .NET, Node.js, Flutter, Tailwind, PostgreSQL, MongoDB, Supabase, Firebase' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Polytechnic University of Timișoara Bachelor’s Degree in Automation and Computer Science (2022 – 2026)' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built full-stack and AI-powered projects using React, Next.js, Node.js, .NET, and machine learning, with a strong focus on continuous improvement.' }
];

export const toolsData = [
    assets.vscode, assets.figma, assets.git, assets.postman, assets.colab, assets.firebase, assets.mongodb, assets.supabase,assets.postgresql
];