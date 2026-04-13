function createHelpers(pres, theme) {
  const C = theme.colors;
  const W = theme.width;
  const H = theme.height;

  function sectionDivider(title, num, darkBg = false) {
    const s = pres.addSlide();
    s.background = { color: darkBg ? C.black : C.red };
    s.addText(String(num).padStart(2, "0"), {
      x: 5.5,
      y: -0.3,
      w: 4.5,
      h: H + 0.5,
      fontFace: theme.fonts.heading,
      fontSize: 220,
      color: darkBg ? "2A2A2A" : "BB1111",
      bold: true,
      align: "right",
      valign: "middle",
      margin: 0,
    });
    s.addText(title, {
      x: 0.7,
      y: 1.8,
      w: 7,
      h: 2,
      fontFace: theme.fonts.heading,
      fontSize: 64,
      color: C.white,
      bold: true,
      align: "left",
      valign: "middle",
      margin: 0,
    });
    return s;
  }

  function contentSlide(bg = C.white) {
    const s = pres.addSlide();
    s.background = { color: bg };
    return s;
  }

  function slideTitle(slide, text, y = 0.38) {
    slide.addText(text, {
      x: 0.6,
      y,
      w: 8.8,
      h: 0.52,
      fontFace: theme.fonts.heading,
      fontSize: 24,
      color: C.black,
      bold: true,
      align: "left",
      margin: 0,
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.6,
      y: y + 0.57,
      w: 1.2,
      h: 0.055,
      fill: { color: C.red },
      line: { color: C.red },
    });
  }

  function statBox(slide, number, label, x, y, w = 2.8, h = 1.5) {
    slide.addShape(pres.shapes.RECTANGLE, {
      x,
      y,
      w,
      h,
      fill: { color: C.offWhite },
      line: { color: C.lightGray, width: 1 },
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x,
      y,
      w: 0.08,
      h,
      fill: { color: C.red },
      line: { color: C.red },
    });
    slide.addText(number, {
      x: x + 0.18,
      y: y + 0.15,
      w: w - 0.25,
      h: 0.9,
      fontFace: theme.fonts.heading,
      fontSize: 34,
      color: C.red,
      bold: true,
      align: "left",
      margin: 0,
    });
    slide.addText(label, {
      x: x + 0.18,
      y: y + 0.98,
      w: w - 0.25,
      h: 0.38,
      fontFace: theme.fonts.body,
      fontSize: 11,
      color: C.gray,
      align: "left",
      margin: 0,
    });
  }

  return {
    C,
    W,
    H,
    sectionDivider,
    contentSlide,
    slideTitle,
    statBox,
  };
}

module.exports = {
  createHelpers,
};
