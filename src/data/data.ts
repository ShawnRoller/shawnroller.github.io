export interface CardData {
  title?: string;
  paragraphs: string[];
  closing?: string;
}
export const intro: CardData = {
  title: "👋 Hi, I'm Shawn!",
  paragraphs: [
    "I'm a software engineer and leader.",
    'I specialize in iOS development in both native and react native, but also have a strong background in SQL, Node.js and other technologies.',
    "There are a few details below about what I've done, what I'm working on now and how to get in touch with me.",
  ],
  closing: 'Thanks for stopping by! ✌️',
};
