const data = require("./data");

module.exports = {
  id: data.id,
  title: data.title,
  author: data.author,

  build(pres, { C, W, H, contentSlide, slideTitle }) {
    // ---- shared helpers -------------------------------------------------
    const slideNumberBadge = (s, number) => {
      s.addText(number, {
        x: 8.7,
        y: 0.3,
        w: 1.1,
        h: 0.4,
        fontFace: "Bebas Neue",
        fontSize: 22,
        color: C.red,
        bold: true,
        align: "right",
        margin: 0,
      });
    };

    const objectiveBox = (s, text, y = 1.1) => {
      s.addShape(pres.shapes.RECTANGLE, {
        x: 0.6,
        y,
        w: 8.8,
        h: 0.78,
        fill: { color: C.offWhite },
        line: { color: C.lightGray, width: 1 },
      });
      s.addShape(pres.shapes.RECTANGLE, {
        x: 0.6,
        y,
        w: 0.08,
        h: 0.78,
        fill: { color: C.red },
        line: { color: C.red },
      });
      s.addText("OBJETIVO", {
        x: 0.82,
        y: y + 0.08,
        w: 2,
        h: 0.22,
        fontFace: "Poppins",
        fontSize: 9,
        color: C.red,
        bold: true,
        margin: 0,
      });
      s.addText(text, {
        x: 0.82,
        y: y + 0.3,
        w: 8.4,
        h: 0.44,
        fontFace: "Poppins",
        fontSize: 12,
        color: C.black,
        bold: true,
        margin: 0,
      });
    };

    const footerBar = (s, text) => {
      s.addShape(pres.shapes.RECTANGLE, {
        x: 0,
        y: H - 0.35,
        w: W,
        h: 0.35,
        fill: { color: C.black },
        line: { color: C.black },
      });
      s.addText(text, {
        x: 0.6,
        y: H - 0.32,
        w: W - 1.2,
        h: 0.3,
        fontFace: "Poppins",
        fontSize: 10,
        color: C.white,
        bold: true,
        margin: 0,
      });
    };

    // =====================================================================
    // Slide 1 - Portada
    // =====================================================================
    {
      const s = pres.addSlide();
      s.background = { color: C.black };

      // left red band
      s.addShape(pres.shapes.RECTANGLE, {
        x: 0,
        y: 0,
        w: 0.32,
        h: H,
        fill: { color: C.red },
        line: { color: C.red },
      });

      s.addText(data.cover.eyebrow, {
        x: 0.7,
        y: 0.55,
        w: 6.8,
        h: 0.3,
        fontFace: "Poppins",
        fontSize: 11,
        color: C.red,
        bold: true,
        charSpacing: 4,
        margin: 0,
      });

      s.addText(data.cover.title, {
        x: 0.7,
        y: 1.0,
        w: 6.8,
        h: 2.1,
        fontFace: "Bebas Neue",
        fontSize: 82,
        color: C.white,
        bold: true,
        lineSpacing: 70,
        margin: 0,
      });

      s.addText(data.subtitle, {
        x: 0.7,
        y: 3.25,
        w: 6.8,
        h: 0.4,
        fontFace: "Poppins",
        fontSize: 18,
        color: "D5D5D5",
        bold: true,
        margin: 0,
      });

      s.addText(data.cover.subtitle, {
        x: 0.7,
        y: 3.72,
        w: 6.8,
        h: 0.32,
        fontFace: "Poppins",
        fontSize: 13,
        color: "A8A8A8",
        margin: 0,
      });

      s.addText(data.cover.caption, {
        x: 0.7,
        y: 4.1,
        w: 6.8,
        h: 0.3,
        fontFace: "Poppins",
        fontSize: 11,
        color: "808080",
        italic: true,
        margin: 0,
      });

      // questions panel on the right
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: 7.3,
        y: 0.9,
        w: 2.25,
        h: 3.9,
        rectRadius: 0.08,
        fill: { color: "202020" },
        line: { color: "333333", width: 1 },
      });

      s.addText("EN ESTE VIDEO", {
        x: 7.45,
        y: 1.05,
        w: 2,
        h: 0.3,
        fontFace: "Poppins",
        fontSize: 9,
        color: C.red,
        bold: true,
        charSpacing: 3,
        margin: 0,
      });

      data.cover.questions.forEach((q, idx) => {
        const y = 1.5 + idx * 1.05;
        s.addText(String(idx + 1).padStart(2, "0"), {
          x: 7.45,
          y,
          w: 0.6,
          h: 0.4,
          fontFace: "Bebas Neue",
          fontSize: 28,
          color: C.red,
          bold: true,
          margin: 0,
        });
        s.addText(q, {
          x: 7.45,
          y: y + 0.4,
          w: 2,
          h: 0.55,
          fontFace: "Poppins",
          fontSize: 11,
          color: C.white,
          margin: 0,
        });
      });
    }

    // =====================================================================
    // Slide 2 - La IA es clave, pero no lo es todo
    // =====================================================================
    {
      const s = contentSlide();
      slideNumberBadge(s, data.intro.number);
      slideTitle(s, data.intro.title.toUpperCase());
      objectiveBox(s, data.intro.objective);

      const colW = 2.75;
      const gap = 0.15;
      const totalW = colW * 3 + gap * 2;
      const startX = (W - totalW) / 2;

      data.intro.truths.forEach((item, idx) => {
        const x = startX + idx * (colW + gap);
        const bg = idx === 2 ? C.black : C.offWhite;
        const textColor = idx === 2 ? C.white : C.black;
        const labelColor = idx === 2 ? C.red : C.red;
        const borderColor = idx === 2 ? C.black : C.lightGray;

        s.addShape(pres.shapes.RECTANGLE, {
          x,
          y: 2.15,
          w: colW,
          h: 2.1,
          fill: { color: bg },
          line: { color: borderColor, width: 1 },
        });
        s.addShape(pres.shapes.RECTANGLE, {
          x,
          y: 2.15,
          w: colW,
          h: 0.06,
          fill: { color: C.red },
          line: { color: C.red },
        });
        s.addText(item.label, {
          x: x + 0.2,
          y: 2.32,
          w: colW - 0.4,
          h: 0.3,
          fontFace: "Poppins",
          fontSize: 10,
          color: labelColor,
          bold: true,
          charSpacing: 4,
          margin: 0,
        });
        s.addText(item.text, {
          x: x + 0.2,
          y: 2.7,
          w: colW - 0.4,
          h: 1.5,
          fontFace: "Poppins",
          fontSize: 13,
          color: textColor,
          valign: "top",
          margin: 0,
        });
      });

      // question
      s.addShape(pres.shapes.RECTANGLE, {
        x: 0.6,
        y: 4.5,
        w: 8.8,
        h: 0.55,
        fill: { color: C.red },
        line: { color: C.red },
      });
      s.addText(data.intro.question, {
        x: 0.8,
        y: 4.55,
        w: 8.4,
        h: 0.45,
        fontFace: "Bebas Neue",
        fontSize: 22,
        color: C.white,
        bold: true,
        align: "center",
        valign: "middle",
        margin: 0,
      });
    }

    // =====================================================================
    // Slide 3 - Donde brilla la IA
    // =====================================================================
    {
      const s = contentSlide();
      slideNumberBadge(s, data.shine.number);
      slideTitle(s, data.shine.title.toUpperCase());
      objectiveBox(s, data.shine.objective);

      const colW = 4.3;
      const gap = 0.2;
      const startX = (W - (colW * 2 + gap)) / 2;
      const colY = 2.15;
      const colH = 2.35;

      const drawColumn = (col, x, variant) => {
        const isBad = variant === "bad";
        const bg = isBad ? C.offWhite : C.black;
        const textColor = isBad ? C.gray : C.white;
        const labelColor = isBad ? C.gray : C.red;
        const accentColor = isBad ? "BBBBBB" : C.red;

        s.addShape(pres.shapes.RECTANGLE, {
          x,
          y: colY,
          w: colW,
          h: colH,
          fill: { color: bg },
          line: { color: isBad ? C.lightGray : C.black, width: 1 },
        });
        s.addShape(pres.shapes.RECTANGLE, {
          x,
          y: colY,
          w: 0.08,
          h: colH,
          fill: { color: accentColor },
          line: { color: accentColor },
        });

        s.addText(col.label, {
          x: x + 0.3,
          y: colY + 0.15,
          w: colW - 0.5,
          h: 0.3,
          fontFace: "Poppins",
          fontSize: 10,
          color: labelColor,
          bold: true,
          charSpacing: 4,
          margin: 0,
        });

        col.points.forEach((p, i) => {
          const py = colY + 0.6 + i * 0.55;
          s.addShape(pres.shapes.OVAL, {
            x: x + 0.3,
            y: py + 0.09,
            w: 0.14,
            h: 0.14,
            fill: { color: accentColor },
            line: { color: accentColor },
          });
          s.addText(p, {
            x: x + 0.55,
            y: py,
            w: colW - 0.7,
            h: 0.5,
            fontFace: "Poppins",
            fontSize: 12,
            color: textColor,
            valign: "top",
            margin: 0,
          });
        });
      };

      drawColumn(data.shine.bad, startX, "bad");
      drawColumn(data.shine.good, startX + colW + gap, "good");

      // arrow between columns
      s.addShape(pres.shapes.CHEVRON, {
        x: W / 2 - 0.22,
        y: colY + colH / 2 - 0.22,
        w: 0.44,
        h: 0.44,
        fill: { color: C.red },
        line: { color: C.red },
      });

      // closing insight
      s.addShape(pres.shapes.RECTANGLE, {
        x: 0.6,
        y: 4.65,
        w: 8.8,
        h: 0.5,
        fill: { color: "FFF0F0" },
        line: { color: "F3CACA", width: 1 },
      });
      s.addText(data.shine.closing, {
        x: 0.8,
        y: 4.7,
        w: 8.4,
        h: 0.4,
        fontFace: "Poppins",
        fontSize: 11,
        color: C.redDark,
        bold: true,
        italic: true,
        valign: "middle",
        margin: 0,
      });
    }

    // =====================================================================
    // Slide 4 - Producto: sistema vivo
    // =====================================================================
    {
      const s = contentSlide();
      slideNumberBadge(s, data.product.number);
      slideTitle(s, data.product.title.toUpperCase());
      objectiveBox(s, data.product.objective);

      const count = data.product.phases.length;
      const cardW = 2.05;
      const gap = 0.12;
      const totalW = cardW * count + gap * (count - 1);
      const startX = (W - totalW) / 2;
      const cardY = 2.15;
      const cardH = 2.3;

      data.product.phases.forEach((phase, idx) => {
        const x = startX + idx * (cardW + gap);
        const intensity = idx / (count - 1);
        // gradient of red intensity from light to dark
        const colors = ["FCE7E7", "F5B5B5", "E06060", C.red];
        const bg = colors[idx];
        const textColor = idx >= 2 ? C.white : C.black;
        const labelColor = idx >= 2 ? "FFE5E5" : C.red;

        s.addShape(pres.shapes.RECTANGLE, {
          x,
          y: cardY,
          w: cardW,
          h: cardH,
          fill: { color: bg },
          line: { color: bg },
        });

        // step number
        s.addText(String(idx + 1).padStart(2, "0"), {
          x: x + 0.2,
          y: cardY + 0.15,
          w: cardW - 0.4,
          h: 0.55,
          fontFace: "Bebas Neue",
          fontSize: 40,
          color: labelColor,
          bold: true,
          margin: 0,
        });

        s.addText(phase.label, {
          x: x + 0.2,
          y: cardY + 0.75,
          w: cardW - 0.4,
          h: 0.3,
          fontFace: "Poppins",
          fontSize: 11,
          color: labelColor,
          bold: true,
          charSpacing: 3,
          margin: 0,
        });

        s.addText(phase.text, {
          x: x + 0.2,
          y: cardY + 1.1,
          w: cardW - 0.4,
          h: 1.15,
          fontFace: "Poppins",
          fontSize: 11,
          color: textColor,
          valign: "top",
          margin: 0,
        });

        if (idx < count - 1) {
          s.addShape(pres.shapes.CHEVRON, {
            x: x + cardW + (gap - 0.28) / 2,
            y: cardY + cardH / 2 - 0.14,
            w: 0.28,
            h: 0.28,
            fill: { color: C.black },
            line: { color: C.black },
          });
        }
      });

      // growing intelligence arrow
      s.addText("INTELIGENCIA CRECIENTE ->", {
        x: startX,
        y: cardY + cardH + 0.2,
        w: totalW,
        h: 0.3,
        fontFace: "Poppins",
        fontSize: 10,
        color: C.gray,
        bold: true,
        charSpacing: 4,
        align: "right",
        margin: 0,
      });

      footerBar(s, data.product.tagline.toUpperCase());
    }

    // =====================================================================
    // Slide 5 - Motor RAG
    // =====================================================================
    {
      const s = contentSlide(C.offWhite);
      slideNumberBadge(s, data.engine.number);
      slideTitle(s, data.engine.title.toUpperCase());
      objectiveBox(s, data.engine.objective);

      s.addText(data.engine.opening, {
        x: 0.6,
        y: 2.05,
        w: 8.8,
        h: 0.5,
        fontFace: "Poppins",
        fontSize: 12,
        color: C.black,
        bold: true,
        margin: 0,
      });

      s.addText(data.engine.analogy, {
        x: 0.6,
        y: 2.45,
        w: 8.8,
        h: 0.35,
        fontFace: "Poppins",
        fontSize: 10,
        color: C.gray,
        italic: true,
        margin: 0,
      });

      const stages = data.engine.pipeline;
      const stageW = 2.5;
      const stageGap = 0.35;
      const totalW = stageW * stages.length + stageGap * (stages.length - 1);
      const startX = (W - totalW) / 2;
      const stageY = 3.0;
      const stageH = 1.7;

      stages.forEach((stage, idx) => {
        const x = startX + idx * (stageW + stageGap);
        const isLast = idx === stages.length - 1;
        const bg = idx === 0 ? C.white : isLast ? C.black : "FFF0F0";
        const borderColor = idx === 0 ? C.lightGray : isLast ? C.black : "F3CACA";
        const labelColor = isLast ? C.red : idx === 0 ? C.gray : C.red;
        const detailColor = isLast ? C.white : C.black;

        s.addShape(pres.shapes.RECTANGLE, {
          x,
          y: stageY,
          w: stageW,
          h: stageH,
          fill: { color: bg },
          line: { color: borderColor, width: 1 },
        });
        s.addText(stage.label, {
          x: x + 0.15,
          y: stageY + 0.2,
          w: stageW - 0.3,
          h: 0.35,
          fontFace: "Poppins",
          fontSize: 11,
          color: labelColor,
          bold: true,
          charSpacing: 4,
          align: "center",
          margin: 0,
        });
        s.addText(stage.detail, {
          x: x + 0.15,
          y: stageY + 0.6,
          w: stageW - 0.3,
          h: 1.0,
          fontFace: "Poppins",
          fontSize: 13,
          color: detailColor,
          bold: true,
          align: "center",
          valign: "middle",
          margin: 0,
        });

        if (!isLast) {
          s.addShape(pres.shapes.CHEVRON, {
            x: x + stageW + (stageGap - 0.3) / 2,
            y: stageY + stageH / 2 - 0.18,
            w: 0.3,
            h: 0.36,
            fill: { color: C.red },
            line: { color: C.red },
          });
        }
      });

      footerBar(s, data.engine.payoff.toUpperCase());
    }

    // =====================================================================
    // Slide 6 - Caso concreto
    // =====================================================================
    {
      const s = contentSlide();
      slideNumberBadge(s, data.caseStudy.number);
      slideTitle(s, data.caseStudy.title.toUpperCase());

      // error banner
      s.addShape(pres.shapes.RECTANGLE, {
        x: 0.6,
        y: 1.1,
        w: 8.8,
        h: 0.75,
        fill: { color: C.black },
        line: { color: C.black },
      });
      s.addShape(pres.shapes.RECTANGLE, {
        x: 0.6,
        y: 1.1,
        w: 0.18,
        h: 0.75,
        fill: { color: C.red },
        line: { color: C.red },
      });
      s.addText(data.caseStudy.errorLabel, {
        x: 0.95,
        y: 1.22,
        w: 4,
        h: 0.25,
        fontFace: "Poppins",
        fontSize: 10,
        color: "A0A0A0",
        charSpacing: 4,
        bold: true,
        margin: 0,
      });
      s.addText(data.caseStudy.errorCode, {
        x: 0.95,
        y: 1.42,
        w: 4,
        h: 0.4,
        fontFace: "Bebas Neue",
        fontSize: 30,
        color: C.white,
        bold: true,
        margin: 0,
      });
      s.addText("En pantalla de la maquina", {
        x: 6.0,
        y: 1.35,
        w: 3.2,
        h: 0.3,
        fontFace: "Poppins",
        fontSize: 10,
        color: "909090",
        italic: true,
        align: "right",
        margin: 0,
      });

      // before column
      const colY = 2.1;
      const colH = 2.55;
      const leftW = 3.5;
      const rightW = 5.1;
      const gap = 0.2;
      const leftX = 0.6;
      const rightX = leftX + leftW + gap;

      s.addShape(pres.shapes.RECTANGLE, {
        x: leftX,
        y: colY,
        w: leftW,
        h: colH,
        fill: { color: C.offWhite },
        line: { color: C.lightGray, width: 1 },
      });
      s.addText(data.caseStudy.before.label, {
        x: leftX + 0.25,
        y: colY + 0.2,
        w: leftW - 0.4,
        h: 0.3,
        fontFace: "Poppins",
        fontSize: 10,
        color: C.gray,
        bold: true,
        charSpacing: 4,
        margin: 0,
      });

      data.caseStudy.before.points.forEach((p, i) => {
        const y = colY + 0.65 + i * 0.55;
        s.addText("x", {
          x: leftX + 0.25,
          y,
          w: 0.3,
          h: 0.3,
          fontFace: "Bebas Neue",
          fontSize: 18,
          color: C.gray,
          bold: true,
          margin: 0,
        });
        s.addText(p, {
          x: leftX + 0.6,
          y,
          w: leftW - 0.8,
          h: 0.5,
          fontFace: "Poppins",
          fontSize: 12,
          color: C.black,
          valign: "top",
          margin: 0,
        });
      });

      // after column - the system's response
      s.addShape(pres.shapes.RECTANGLE, {
        x: rightX,
        y: colY,
        w: rightW,
        h: colH,
        fill: { color: C.black },
        line: { color: C.black },
      });
      s.addShape(pres.shapes.RECTANGLE, {
        x: rightX,
        y: colY,
        w: rightW,
        h: 0.06,
        fill: { color: C.red },
        line: { color: C.red },
      });
      s.addText(data.caseStudy.after.label, {
        x: rightX + 0.25,
        y: colY + 0.2,
        w: rightW - 0.4,
        h: 0.3,
        fontFace: "Poppins",
        fontSize: 10,
        color: C.red,
        bold: true,
        charSpacing: 4,
        margin: 0,
      });

      s.addText('"' + data.caseStudy.after.response + '"', {
        x: rightX + 0.3,
        y: colY + 0.55,
        w: rightW - 0.55,
        h: colH - 0.75,
        fontFace: "Merriweather",
        fontSize: 12,
        color: C.white,
        italic: true,
        valign: "top",
        margin: 0,
      });

      footerBar(s, data.caseStudy.impact.toUpperCase());
    }

    // =====================================================================
    // Slide 7 - Barrera defensiva
    // =====================================================================
    {
      const s = contentSlide();
      slideNumberBadge(s, data.moat.number);
      slideTitle(s, data.moat.title.toUpperCase());
      objectiveBox(s, data.moat.objective);

      // timeline
      const tlY = 2.25;
      const tlLeft = 1.0;
      const tlRight = W - 1.0;

      s.addShape(pres.shapes.LINE, {
        x: tlLeft,
        y: tlY,
        w: tlRight - tlLeft,
        h: 0,
        line: { color: C.lightGray, width: 1.5 },
      });

      data.moat.phases.forEach((phase, idx) => {
        const t = idx / (data.moat.phases.length - 1);
        const x = tlLeft + t * (tlRight - tlLeft);
        const r = 0.11 + idx * 0.05;

        s.addShape(pres.shapes.OVAL, {
          x: x - r,
          y: tlY - r,
          w: r * 2,
          h: r * 2,
          fill: { color: C.red },
          line: { color: C.red },
        });
        s.addText(phase, {
          x: x - 0.6,
          y: tlY + 0.3,
          w: 1.2,
          h: 0.25,
          fontFace: "Bebas Neue",
          fontSize: 18,
          color: C.black,
          bold: true,
          align: "center",
          margin: 0,
        });
        s.addText(data.moat.phaseLabels[idx], {
          x: x - 0.9,
          y: tlY + 0.55,
          w: 1.8,
          h: 0.25,
          fontFace: "Poppins",
          fontSize: 10,
          color: C.gray,
          align: "center",
          margin: 0,
        });
      });

      // narrative bullets
      const narY = 3.35;
      const rowH = 0.34;
      data.moat.narrative.forEach((line, i) => {
        const y = narY + i * rowH;
        s.addShape(pres.shapes.RECTANGLE, {
          x: 0.6,
          y: y + 0.1,
          w: 0.08,
          h: 0.08,
          fill: { color: C.red },
          line: { color: C.red },
        });
        s.addText(line, {
          x: 0.85,
          y,
          w: 8.55,
          h: rowH,
          fontFace: "Poppins",
          fontSize: 11,
          color: C.black,
          valign: "middle",
          margin: 0,
        });
      });

      footerBar(s, data.moat.banner.toUpperCase());
    }

    // =====================================================================
    // Slide 8 - Cierre
    // =====================================================================
    {
      const s = pres.addSlide();
      s.background = { color: C.red };

      // decorative black bar
      s.addShape(pres.shapes.RECTANGLE, {
        x: 0,
        y: H - 0.6,
        w: W,
        h: 0.6,
        fill: { color: C.black },
        line: { color: C.black },
      });

      s.addText("XC GRADIENT", {
        x: 0,
        y: H - 0.5,
        w: W,
        h: 0.4,
        fontFace: "Bebas Neue",
        fontSize: 16,
        color: C.white,
        bold: true,
        charSpacing: 8,
        align: "center",
        margin: 0,
      });

      s.addText(data.closing.headline, {
        x: 0.6,
        y: 1.1,
        w: W - 1.2,
        h: 2.0,
        fontFace: "Bebas Neue",
        fontSize: 90,
        color: C.white,
        bold: true,
        align: "center",
        lineSpacing: 80,
        margin: 0,
      });

      // red separator line
      s.addShape(pres.shapes.RECTANGLE, {
        x: W / 2 - 1.2,
        y: 3.2,
        w: 2.4,
        h: 0.06,
        fill: { color: C.white },
        line: { color: C.white },
      });

      s.addText(data.closing.subline, {
        x: 0.6,
        y: 3.4,
        w: W - 1.2,
        h: 0.55,
        fontFace: "Poppins",
        fontSize: 20,
        color: C.white,
        bold: true,
        align: "center",
        margin: 0,
      });

      s.addText(data.closing.caption, {
        x: 0.6,
        y: 4.1,
        w: W - 1.2,
        h: 0.4,
        fontFace: "Poppins",
        fontSize: 13,
        color: "FFDCDC",
        align: "center",
        italic: true,
        margin: 0,
      });
    }
  },
};
