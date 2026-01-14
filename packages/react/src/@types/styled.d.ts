import 'styled-components';
import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@ignite-ui/tokens';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    fontSizes: typeof fontSizes;
    fontWeights: typeof fontWeights;
    fonts: typeof fonts;
    lineHeights: typeof lineHeights;
    radii: typeof radii;
    space: typeof space;
  }
}
