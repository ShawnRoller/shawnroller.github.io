export enum NavigationScreens {
  Main = 'Main',
  Privacy = 'Privacy'
}

export type NavigationPropList = {
  Main: undefined;
  Privacy: undefined;
};

const config = {
  screens: {
    Main: '',
    Privacy: 'privacy',
  },
};

export const linking = {
  prefixes: ['shawnroller.github.io', 'localhost:3000'],
  config,
};
