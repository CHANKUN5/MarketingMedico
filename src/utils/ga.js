export const GA_ID = "G-N96E5S56TT";

export const pageview = (url) => {
  if (window.gtag) {
    window.gtag("config", GA_ID, {
      page_path: url,
    });
  }
};
