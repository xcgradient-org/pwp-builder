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

    // 1. INFRASTRUCTURE WINS
    sectionDivider(data.sections[0], 1);

    // Infrastructure: flux
    slide = contentSlide();
    slideTitle(slide, "FLUX PYTHON LIBRARY");
    statBox(slide, "1", "CLI COMMAND", 0.6, 1.4);
    slide.addText("• " + data.infrastructureFlux.join("\n• "), {
      x: 0.6, y: 3.2, w: 8.8, h: 1.5,
      fontFace: theme.fonts.body, fontSize: 18, color: theme.colors.black, margin: 0, lineSpacing: 35, bullet: false
    });

    // Infrastructure: Cron
    slide = contentSlide();
    slideTitle(slide, "CRON ROLLOVER");
    statBox(slide, "54", "TESTS PASSING", 0.6, 1.4);
    slide.addText("• " + data.infrastructureCron.join("\n• "), {
      x: 0.6, y: 3.2, w: 8.8, h: 2.0,
      fontFace: theme.fonts.body, fontSize: 18, color: theme.colors.black, margin: 0, lineSpacing: 35, bullet: false
    });

    // 2. PEOPLE & PRODUCT
    sectionDivider(data.sections[1], 2, true); // Dark background
    slide = contentSlide();
    slideTitle(slide, "CIP & TASK ARCHIVE");
    statBox(slide, "2", "FREE INTERNS GOAL", 0.6, 1.4);
    slide.addText("• " + data.peopleProduct.join("\n• "), {
      x: 0.6, y: 3.2, w: 8.8, h: 2.0,
      fontFace: theme.fonts.body, fontSize: 18, color: theme.colors.black, margin: 0, lineSpacing: 35, bullet: false
    });

    // 3. COMPANY AS A SYSTEM (Proposals)
    sectionDivider(data.sections[2], 3);

    // Proposal 1
    slide = contentSlide();
    slideTitle(slide, "CENTRALIZED BUILD SYSTEM");
    slide.addText("• " + data.proposalCentralizedBuild.join("\n• "), {
      x: 0.6, y: 1.5, w: 8.8, h: 3.0,
      fontFace: theme.fonts.body, fontSize: 18, color: theme.colors.black, margin: 0, lineSpacing: 35, bullet: false
    });

    // Proposal 2
    slide = contentSlide();
    slideTitle(slide, "THE DEPARTMENTAL OS");
    
    const startX = 0.6;
    const boxW = 0.98;
    const boxH = 0.55;
    const gap = 0.11;
    data.departmentsList.forEach((dept, i) => {
      const x = startX + i * (boxW + gap);
      const isRed = i % 2 === 0;
      slide.addShape(pres.shapes.RECTANGLE, {
        x, y: 1.5, w: boxW, h: boxH,
        fill: { color: isRed ? theme.colors.red : theme.colors.black }
      });
      slide.addText(dept, {
        x, y: 1.5, w: boxW, h: boxH,
        fontFace: theme.fonts.heading, fontSize: 16, color: theme.colors.white,
        bold: true, align: "center", valign: "middle", margin: 0
      });
    });

    slide.addText("• " + data.proposalDeptOS.join("\n• "), {
      x: 0.6, y: 2.5, w: 8.8, h: 2.5,
      fontFace: theme.fonts.body, fontSize: 18, color: theme.colors.black, margin: 0, lineSpacing: 35, bullet: false
    });

    // Proposal 3
    slide = contentSlide();
    slideTitle(slide, "INTERNAL FRONT DOOR");
    slide.addText("• " + data.proposalInternalDomain.join("\n• "), {
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
