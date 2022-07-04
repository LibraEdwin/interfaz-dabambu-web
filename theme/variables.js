export const FONTS = {
  montserrat: '"Montserrat", sans-serif',
  comforta: '"Comfortaa", sans-serif',
  roboto: '"Roboto", sans-serif',
  quick: '"Quicksand", sans-serif'
}

export const BREAK_POINTS = {
  sm: 576,
  md: 768,
  lg: 1150,
  xl: 1200,
  xxl: 1400
}

export const MEDIA_BREAKPOINTS = {
  mobile: `@media (min-width: ${BREAK_POINTS.sm}px)`,
  tablet: `@media (min-width: ${BREAK_POINTS.md}px)`,
  laptop: `@media (min-width: ${BREAK_POINTS.lg}px)`,
  desktop: `@media (min-width: ${BREAK_POINTS.xl}px)`,
  desktopL: `@media (min-width: ${BREAK_POINTS.xxl}px)`
}

export const CONTAINER_MAX_WIDTHS = {
  sm: '640px',
  md: '890px',
  lg: '1100px',
  xl: '1240px',
  xxl: '1320px'
}
