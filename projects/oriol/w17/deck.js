const data = require("./data");

module.exports = {
  id: data.id,
  title: data.title,
  build(pres, { theme, contentSlide, slideTitle, sectionDivider, statBox }) {
    let slide;

    // TITLE SLIDE
    slide = contentSlide(theme.colors.offWhite);
    slide.addText(data.title.toUpperCase(), {
      x: 1, y: 2, w: 8, h: 1.5,
      fontFace: theme.fonts.heading, fontSize: 54, color: theme.colors.black, bold: true, align: "center", margin: 0
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 3.5, y: 3.3, w: 3, h: 0.1, fill: { color: theme.colors.red }
    });

    // 1. HARDWARE & OPERATIONS
    sectionDivider(data.sections[0], 1);
    slide = contentSlide();
    slideTitle(slide, "MANUALS AND MACHINES");
    statBox(slide, "3", "MANUALS DIGITIZED", 0.6, 1.4);
    statBox(slide, "10", "INCIDENT PHOTOS COLLECTED", 3.6, 1.4, 3.2);
    
    slide.addText("Hardware Logistics", {
      x: 0.6, y: 3.2, w: 8.8, h: 0.4,
      fontFace: theme.fonts.body, fontSize: 16, color: theme.colors.gray, bold: true, margin: 0
    });
    slide.addText("• " + data.hardware.join("\n• "), {
      x: 0.6, y: 3.6, w: 8.8, h: 1.5,
      fontFace: theme.fonts.body, fontSize: 16, color: theme.colors.black, margin: 0, bullet: false
    });

    // 2. PITCHING
    sectionDivider(data.sections[1], 2, true); // Dark background
    slide = contentSlide();
    slideTitle(slide, "SANTANDER X DEMO DAY");
    slide.addText("• " + data.pitch.join("\n• "), {
      x: 0.6, y: 1.5, w: 8.8, h: 3,
      fontFace: theme.fonts.body, fontSize: 18, color: theme.colors.black, margin: 0, lineSpacing: 35, bullet: false
    });

    // 3. AUTOMATION
    sectionDivider(data.sections[2], 3);
    
    // Automation: Bots
    slide = contentSlide();
    slideTitle(slide, "DISCORD & NOTION PIPELINE");
    slide.addText("• " + data.automationDiscordNotion.join("\n• "), {
      x: 0.6, y: 1.5, w: 8.8, h: 3.0,
      fontFace: theme.fonts.body, fontSize: 18, color: theme.colors.black, margin: 0, lineSpacing: 35, bullet: false
    });

    // Automation: Builders
    slide = contentSlide();
    slideTitle(slide, "DOCUMENT BUILDERS & DEV");
    slide.addText("• " + data.automationDev.join("\n• "), {
      x: 0.6, y: 1.5, w: 8.8, h: 3.0,
      fontFace: theme.fonts.body, fontSize: 18, color: theme.colors.black, margin: 0, lineSpacing: 35, bullet: false
    });

    // 4. NEXT STEPS
    sectionDivider(data.sections[3], 4, true);
    slide = contentSlide();
    slideTitle(slide, "UPCOMING FOCUS");
    slide.addText("• " + data.nextSteps.join("\n• "), {
      x: 0.6, y: 1.5, w: 8.8, h: 3.0,
      fontFace: theme.fonts.body, fontSize: 20, color: theme.colors.black, margin: 0, lineSpacing: 40, bullet: false
    });
  },
};
