import { ImageResizeMode, ImageStyle, StyleProp } from 'react-native';
import octocatImage from '../assets/octocat.png';
import githubImage from '../assets/github.png';
import linkedinImage from '../assets/linkedin.png';
import linkedinLogo from '../assets/lilogo.png';

export type ImageModel = {
  source: string;
  resizeMode?: ImageResizeMode;
  style?: StyleProp<ImageStyle>;
}

export type Link = {
  url: string;
  image?: ImageModel;
  title?: string;
}

export type CardData = {
  title?: string;
  paragraphs: string[];
  closing?: string;
  image?: ImageModel;
  link?: Link;
}

const intro: CardData = {
  title: "👋 Hi, I'm Shawn!",
  paragraphs: [
    "I'm a software engineer and leader.",
    'I specialize in iOS development in both native and react native, but also have a strong background in SQL, Node.js and other technologies.',
    "There are a few details below about what I've done, what I'm working on now and how to get in touch with me.",
  ],
  closing: 'Thanks for stopping by! ✌️',
  image: { source: 'https://github.com/OffensivelyBad/best-resume-ever/blob/master/resume/id.jpg?raw=true' },
};

const nshape: CardData = {
  title: 'NShape 🏃‍♂️',
  paragraphs: [
    "NShape Sets is the current app I'm working on. It is available on iOS and Android! 🚀",
    "There's a standalone WatchOS version - called NShape Sets Go - that I'm currently TestFlight'ing and will be out soon.",
    "It's all about helping you track your exercise sets, rest periods, and logging your activity to help you close your rings. 🔥",
    'Now for the tech stuff:',
    "On iOS and WatchOS the app is built in SwiftUI.  The WatchOS app is standalone so you don't need the iOS app to use it!",
    "For Android support, it's built in React Native and Kotlin.",
  ],
  closing: 'Check it out and let me know what you think! 😬',
  image: { source: 'https://github.com/OffensivelyBad/NShape-Sets/blob/master/NShapeSets-Logo@3x.jpg?raw=true' },
  link: {
    url: 'https://github.com/OffensivelyBad/NShape-Sets',
    image: { source: 'https://github.com/OffensivelyBad/NShape-Sets/blob/master/Logo@3x.png?raw=true' },
    title: 'NShape Sets',
  },
};

const github: CardData = {
  title: 'Projects 👩‍💻',
  paragraphs: [
    "Github is the best place to see what I've been working on.",
    'I embrace Proofs of Concept to see what ideas will stick, and sometimes just to get my hands dirty with something new! 🎉',
  ],
  closing: "Poke around, and I'd love to hear your thoughts! 💭",
  image: { source: octocatImage, resizeMode: 'contain' },
  link: {
    url: 'https://github.com/OffensivelyBad',
    image: { source: githubImage, resizeMode: 'contain' },
    title: 'Github',
  },
};

const behance: CardData = {
  title: 'Digital Drawings 🎨',
  paragraphs: [
    "Sometimes it's fun to draw on an iPad!",
    'Occasionally I put stuff on Behance which is a fun place to explore and share digital art. 👀',
  ],
  closing: "Check it out",
  image: { source: octocatImage, resizeMode: 'contain' },
  link: {
    url: 'https://www.behance.net/douglasroller',
    image: { source: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Behance_logo.svg/1024px-Behance_logo.svg.png?20180331154838', resizeMode: 'contain' },
    title: 'Behance',
  },
};

const contact: CardData = {
  title: 'Connect with me! 🤗',
  paragraphs: [
    "Don't hestitate to reach out!  The best way to contact me is to hit me up on LinkedIn or follow me on Github.",
    "Reach out and I'm happy to talk about what I'm working on currently, what plans I have for the future, and sometimes just random stuff! 🤷‍♂️",
  ],
  image: { source: linkedinLogo, resizeMode: 'contain', style: { borderRadius: 0 } },
  link: {
    url: 'https://www.linkedin.com/in/shawn-roller-8a831856',
    image: { source: linkedinImage, resizeMode: 'contain', style: { borderRadius: 0 } },
    title: 'LinkedIn',
  },
};

const resume: CardData = {
  title: 'Résumé 🧑‍🎨',
  paragraphs: [
    'Down to business... below is a link to my CV.',
    "Have a look and see if we'd be a good match to work together!",
    'PS - my LinkedIn profile may be more up to date, but this will work if you need to print a hard copy!',
  ],
  closing: 'Thanks for scrolling all the way down! 😅 ✌️',
  link: {
    url: 'https://github.com/OffensivelyBad/best-resume-ever/blob/master/pdf/cool.pdf',
    image: { source: githubImage },
    title: 'Résumé',
  },
};

export const cards = [intro, nshape, github, contact, resume];
