export interface CardData {
  title?: string;
  paragraphs: string[];
  closing?: string;
  image?: string;
  link?: string;
}
export const intro: CardData = {
  title: "👋 Hi, I'm Shawn!",
  paragraphs: [
    "I'm a software engineer and leader.",
    'I specialize in iOS development in both native and react native, but also have a strong background in SQL, Node.js and other technologies.',
    "There are a few details below about what I've done, what I'm working on now and how to get in touch with me.",
  ],
  closing: 'Thanks for stopping by! ✌️',
  image: 'https://www.imatest.com/wp-content/uploads/2020/06/LabReflectiveModule-3-2-RESIZED.jpg',
  link: 'https://wikipedia.org',
};


/*
  TODO:
  [ ] - card for resume
  [ ] - card for projects with links
  [ ] - support for a profile image
  [ ] - card for github
*/
