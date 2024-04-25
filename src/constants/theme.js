import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const COLORS = {
  BLACK: 'black',
  WHITE: 'white',
  RED: 'red',
  GREEN: 'green',
  PURPLE: '#800080',
  PRIMARY: '#0D0D0D',
  TEXT_GREY: '#757575',
  BORDER_RED: '#A90808',
  PRIMARY_BG: '#c7c7cc',
  BORDER_GREY: '#a3a0a0',
  BUTTON_COLOR: '#263245',
  TEXT_GREY_LIGHT: '#6a6a6a',
  INPUT_DARK_BLUE: '#1b2330',
  BLUE: '#007bff',
};

export const FONT_SIZE = {
  SM: 12,
  MD: 16,
  L: 18,
  LG: 20,
  MX: 22,
};

export const SCREEN_PADDING = 20;

export const SCREEN = {
  WIDTH: width,
  HEIGHT: height,
};
