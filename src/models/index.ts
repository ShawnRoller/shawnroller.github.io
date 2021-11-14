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
  prefixes: [],
  config,
};
