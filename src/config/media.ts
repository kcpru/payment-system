const customMediaQuery = (maxWidth: number) =>
  `@media (min-width: ${maxWidth}px)`;

const media = {
  custom: customMediaQuery,
  mobileS: customMediaQuery(320),
  mobileM: customMediaQuery(375),
  mobileL: customMediaQuery(425),
  tablet: customMediaQuery(768),
  laptop: customMediaQuery(1024),
  laptopL: customMediaQuery(1440),
  desktop: customMediaQuery(1820),
  desktopL: customMediaQuery(2560),
};

export default media;
