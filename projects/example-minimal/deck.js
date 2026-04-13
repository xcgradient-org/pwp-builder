const data = require("./data");

module.exports = {
  id: data.id,
  title: data.title,
  build(pres, { theme, contentSlide, slideTitle }) {
    const slide = contentSlide();

    slideTitle(slide, data.title.toUpperCase());
    slide.addText(data.subtitle, {
      x: 0.6,
      y: 1.35,
      w: 8.8,
      h: 0.4,
      fontFace: theme.fonts.body,
      fontSize: 16,
      color: theme.colors.gray,
      bold: true,
      margin: 0,
    });
    slide.addText(data.body, {
      x: 0.6,
      y: 2.0,
      w: 8.8,
      h: 1.4,
      fontFace: theme.fonts.body,
      fontSize: 18,
      color: theme.colors.black,
      margin: 0,
    });
  },
};
