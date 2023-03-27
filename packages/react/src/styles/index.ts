import {
  colors,
  fonts,
  fontSizes,
  radii,
  fontWeights,
  lineHeights,
  space,
} from '@iapp-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    width: 'space',
    height: 'space',
  },

  theme: {
    colors,
    fontSizes,
    fonts,
    radii,
    fontWeights,
    lineHeights,
    space,
  },
})
