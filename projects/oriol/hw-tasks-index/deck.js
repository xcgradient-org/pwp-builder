const data = require("./data");

module.exports = {
  id: data.id,
  title: data.title,

  build(pres, { C, W, H, theme, contentSlide, slideTitle }) {
    // ---- shared helpers -------------------------------------------------
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
        fontFace: theme.fonts.body,
        fontSize: 10,
        color: C.white,
        bold: true,
        margin: 0,
      });
    };

    // =====================================================================
    // Slide 1 - Cover
    // =====================================================================
    {
      const s = pres.addSlide();
      s.background = { color: C.black };

      s.addShape(pres.shapes.RECTANGLE, {
        x: 0,
        y: 0,
        w: 0.32,
        h: H,
        fill: { color: C.red },
        line: { color: C.red },
      });

      s.addText("XC GRADIENT", {
        x: 0.7,
        y: 0.55,
        w: 6.8,
        h: 0.3,
        fontFace: theme.fonts.body,
        fontSize: 11,
        color: C.red,
        bold: true,
        charSpacing: 4,
        margin: 0,
      });

      s.addText(data.title.toUpperCase(), {
        x: 0.7,
        y: 1.0,
        w: 8,
        h: 2.1,
        fontFace: theme.fonts.heading,
        fontSize: 60,
        color: C.white,
        bold: true,
        lineSpacing: 50,
        margin: 0,
      });

      s.addText(data.subtitle, {
        x: 0.7,
        y: 3.25,
        w: 6.8,
        h: 0.4,
        fontFace: theme.fonts.body,
        fontSize: 18,
        color: "D5D5D5",
        bold: true,
        margin: 0,
      });
    }

    // =====================================================================
    // Slide 2 - Phase 1
    // =====================================================================
    {
      const s = contentSlide();
      slideTitle(s, data.hardware.title);
      
      s.addText(data.hardware.eyebrow, {
        x: 0.6,
        y: 0.15,
        w: 8.8,
        h: 0.3,
        fontFace: theme.fonts.body,
        fontSize: 10,
        color: C.red,
        bold: true,
        charSpacing: 2,
        margin: 0,
      });

      data.hardware.fundamentals.forEach((item, idx) => {
        const y = 1.5 + idx * 0.9;
        s.addShape(pres.shapes.RECTANGLE, {
          x: 0.6,
          y,
          w: 8.8,
          h: 0.8,
          fill: { color: C.offWhite },
          line: { color: C.lightGray, width: 1 },
        });
        s.addShape(pres.shapes.RECTANGLE, {
          x: 0.6,
          y,
          w: 0.08,
          h: 0.8,
          fill: { color: C.red },
          line: { color: C.red },
        });
        s.addText(item.label, {
          x: 0.85,
          y: y + 0.1,
          w: 8,
          h: 0.3,
          fontFace: theme.fonts.body,
          fontSize: 12,
          color: C.red,
          bold: true,
          margin: 0,
        });
        s.addText(item.text, {
          x: 0.85,
          y: y + 0.35,
          w: 8,
          h: 0.4,
          fontFace: theme.fonts.body,
          fontSize: 14,
          color: C.black,
          margin: 0,
        });
      });
    }

    // =====================================================================
    // Slide 3 - Phase 2 (Capacity)
    // =====================================================================
    {
      const s = contentSlide();
      slideTitle(s, data.hardware.vram.title);
      
      s.addText(data.hardware.vram.eyebrow, {
        x: 0.6,
        y: 0.15,
        w: 8.8,
        h: 0.3,
        fontFace: theme.fonts.body,
        fontSize: 10,
        color: C.red,
        bold: true,
        charSpacing: 2,
        margin: 0,
      });

      s.addShape(pres.shapes.RECTANGLE, {
        x: 0.6,
        y: 1.0,
        w: 8.8,
        h: 0.6,
        fill: { color: C.black },
        line: { color: C.black },
      });
      s.addText(data.hardware.vram.equation, {
        x: 0.6,
        y: 1.0,
        w: 8.8,
        h: 0.6,
        fontFace: theme.fonts.heading,
        fontSize: 32,
        color: C.white,
        align: "center",
        valign: "middle",
        margin: 0,
      });

      // components
      data.hardware.vram.components.forEach((item, idx) => {
        const y = 1.7 + idx * 0.45;
        s.addText(item.label, { x: 0.6, y, w: 2.2, h: 0.3, fontFace: theme.fonts.body, fontSize: 11, color: C.red, bold: true });
        s.addText(item.text, { x: 2.9, y, w: 6.5, h: 0.3, fontFace: theme.fonts.body, fontSize: 11, color: C.black });
      });
    }

    // =====================================================================
    // Slide 4 - TurboQuant
    // =====================================================================
    {
      const s = contentSlide();
      slideTitle(s, data.hardware.turboquant.title);
      
      s.addText(data.hardware.turboquant.eyebrow, {
        x: 0.6, y: 0.15, w: 8.8, h: 0.3, fontFace: theme.fonts.body, fontSize: 10, color: C.red, bold: true, charSpacing: 2
      });

      s.addText(data.hardware.turboquant.summary, {
        x: 0.6, y: 1.0, w: 8.8, h: 0.4, fontFace: theme.fonts.body, fontSize: 14, color: C.gray, italic: true
      });

      data.hardware.turboquant.features.forEach((f, idx) => {
        const y = 1.6 + idx * 0.9;
        s.addShape(pres.shapes.RECTANGLE, {
          x: 0.6, y, w: 8.8, h: 0.8, fill: { color: C.offWhite }, line: { color: C.lightGray, width: 1 }
        });
        s.addText(f.label.toUpperCase(), {
          x: 0.8, y: y + 0.1, w: 8, h: 0.3, fontFace: theme.fonts.body, fontSize: 11, color: C.red, bold: true
        });
        s.addText(f.text, {
          x: 0.8, y: y + 0.35, w: 8, h: 0.4, fontFace: theme.fonts.body, fontSize: 13, color: C.black
        });
      });

      s.addShape(pres.shapes.RECTANGLE, {
        x: 0.6, y: 4.5, w: 8.8, h: 0.6, fill: { color: C.black }, line: { color: C.black }
      });
      s.addText("IMPACT: " + data.hardware.turboquant.impact, {
        x: 0.8, y: 4.5, w: 8.4, h: 0.6, fontFace: theme.fonts.body, fontSize: 12, color: C.white, bold: true, valign: "middle"
      });
    }

    // =====================================================================
    // Slide 5 - RotorQuant
    // =====================================================================
    {
      const s = contentSlide();
      slideTitle(s, data.hardware.rotorquant.title);
      
      s.addText(data.hardware.rotorquant.eyebrow, {
        x: 0.6, y: 0.15, w: 8.8, h: 0.3, fontFace: theme.fonts.body, fontSize: 10, color: C.red, bold: true, charSpacing: 2
      });

      s.addText(data.hardware.rotorquant.logic, {
        x: 0.6, y: 1.0, w: 8.8, h: 0.4, fontFace: theme.fonts.body, fontSize: 14, color: C.gray, italic: true
      });

      data.hardware.rotorquant.math.forEach((m, idx) => {
        const y = 1.6 + idx * 0.65;
        s.addText("• " + m.label, { x: 0.6, y, w: 2.5, h: 0.3, fontFace: theme.fonts.body, fontSize: 12, color: C.red, bold: true });
        s.addText(m.text, { x: 3.2, y, w: 6.2, h: 0.3, fontFace: theme.fonts.body, fontSize: 12, color: C.black });
      });

      s.addShape(pres.shapes.RECTANGLE, {
        x: 0.6, y: 3.8, w: 8.8, h: 0.8, fill: { color: "EEFFEE" }, line: { color: "CCEEDD", width: 1 }
      });
      s.addText("THE MATH OF SPEED:", { x: 0.8, y: 3.9, w: 3, h: 0.3, fontFace: theme.fonts.body, fontSize: 10, color: "228822", bold: true });
      s.addText(data.hardware.rotorquant.speedLaw, { x: 0.8, y: 4.2, w: 4, h: 0.4, fontFace: "Courier New", fontSize: 18, color: C.black, bold: true });
      
      s.addText(data.hardware.rotorquant.impact, {
        x: 5.0, y: 3.9, w: 4.2, h: 0.6, fontFace: theme.fonts.body, fontSize: 11, color: C.black, italic: true, valign: "middle"
      });
    }

    // =====================================================================
    // Slide 6 - Phase 3 (Latency Flow)
    // =====================================================================
    {
      const s = contentSlide();
      slideTitle(s, data.hardware.latency.title);
      
      s.addText(data.hardware.latency.eyebrow, {
        x: 0.6,
        y: 0.15,
        w: 8.8,
        h: 0.3,
        fontFace: theme.fonts.body,
        fontSize: 10,
        color: C.red,
        bold: true,
        charSpacing: 2,
        margin: 0,
      });

      // LATENCY PIPELINE BAR
      const pipeY = 1.1;
      const pipeH = 0.6;
      const stages = [
        { label: "START", w: 1.2, color: C.gray, text: "User sends prompt" },
        { label: "LOADING", w: 1.8, color: C.lightGray, text: "Weights/KV moving to VRAM" },
        { label: "TTFT (PREFILL)", w: 2.5, color: C.red, text: "Processing prompt (Compute Bound)" },
        { label: "TPOT (DECODE)", w: 3.3, color: C.black, text: "Generating tokens (Bandwidth Bound)" }
      ];

      let currentX = 0.6;
      stages.forEach((stage, idx) => {
        s.addShape(pres.shapes.RECTANGLE, {
          x: currentX, y: pipeY, w: stage.w, h: pipeH, fill: { color: stage.color }, line: { color: stage.color }
        });
        s.addText(stage.label, {
          x: currentX, y: pipeY, w: stage.w, h: pipeH, fontFace: theme.fonts.heading, fontSize: 16, color: idx === 2 || idx === 3 ? C.white : C.black, align: "center", valign: "middle"
        });
        s.addText(stage.text, {
          x: currentX, y: pipeY + 0.65, w: stage.w, h: 0.5, fontFace: theme.fonts.body, fontSize: 9, color: C.gray, align: "center"
        });
        currentX += stage.w;
      });

      // MATH DETAILS
      const colW = 4.3;
      data.hardware.latency.phases.forEach((phase, idx) => {
        const x = 0.6 + idx * (colW + 0.2);
        s.addShape(pres.shapes.RECTANGLE, {
          x, y: 2.5, w: colW, h: 1.8, fill: { color: C.offWhite }, line: { color: C.lightGray, width: 1 }
        });
        s.addText(phase.name, { x: x + 0.3, y: 2.6, w: colW - 0.6, h: 0.3, fontFace: theme.fonts.heading, fontSize: 20, color: C.red });
        s.addText(phase.law, { x: x + 0.3, y: 2.9, w: colW - 0.6, h: 0.3, fontFace: theme.fonts.body, fontSize: 11, color: C.gray, bold: true });
        s.addText(phase.math, { x: x + 0.3, y: 3.3, w: colW - 0.6, h: 0.4, fontFace: "Courier New", fontSize: 14, color: C.black, align: "center", fill: { color: "FFFFFF" } });
        s.addText("THROUGHPUT: " + (idx === 0 ? "Tokens/Sec (Burst)" : "Tokens/Sec (Sustained)"), { x: x + 0.3, y: 3.8, w: colW - 0.6, h: 0.3, fontFace: theme.fonts.body, fontSize: 10, color: C.red, bold: true });
      });

      // interconnects footer
      s.addText("INTERCONNECTS:", { x: 0.6, y: 4.6, w: 2, h: 0.3, fontFace: theme.fonts.body, fontSize: 10, color: C.gray, bold: true });
      data.hardware.latency.interconnect.forEach((item, idx) => {
        const x = 2.5 + idx * 3.5;
        s.addText(item.label + ": " + item.text, { x, y: 4.6, w: 3.2, h: 0.5, fontFace: theme.fonts.body, fontSize: 10, color: C.black });
      });
    }

    // =====================================================================
    // Slide 7 - HW Summary
    // =====================================================================
    {
      const s = contentSlide(C.black);
      slideTitle(s, data.hardware.summary.title, { color: C.white });

      data.hardware.summary.points.forEach((p, idx) => {
        const y = 1.5 + idx * 0.8;
        s.addShape(pres.shapes.RECTANGLE, {
          x: 1.0,
          y: y + 0.1,
          w: 0.2,
          h: 0.2,
          fill: { color: C.red },
          line: { color: C.red },
        });
        s.addText(p, {
          x: 1.5,
          y,
          w: 7.5,
          h: 0.5,
          fontFace: theme.fonts.body,
          fontSize: 20,
          color: C.white,
          valign: "middle",
          margin: 0,
        });
      });

      footerBar(s, "LOCAL AI INFRASTRUCTURE - APRIL 2026");
    }

    // =====================================================================
    // Slide 8 - Not Done Tasks
    // =====================================================================
    {
      const s = contentSlide();
      slideTitle(s, "PROJECT ALPHA: PENDING TASKS");

      s.addShape(pres.shapes.RECTANGLE, {
        x: 0.6,
        y: 1.1,
        w: 8.8,
        h: 0.4,
        fill: { color: C.red },
        line: { color: C.red },
      });
      s.addText("ID", { x: 0.7, y: 1.15, w: 1.5, h: 0.3, fontFace: theme.fonts.body, fontSize: 10, color: C.white, bold: true });
      s.addText("DESCRIPTION", { x: 2.3, y: 1.15, w: 5, h: 0.3, fontFace: theme.fonts.body, fontSize: 10, color: C.white, bold: true });
      s.addText("PROJECT", { x: 7.5, y: 1.15, w: 1.5, h: 0.3, fontFace: theme.fonts.body, fontSize: 10, color: C.white, bold: true });

      data.tasks.notDone.forEach((task, idx) => {
        const y = 1.6 + idx * 0.6;
        s.addShape(pres.shapes.RECTANGLE, {
          x: 0.6,
          y,
          w: 8.8,
          h: 0.5,
          fill: { color: C.offWhite },
          line: { color: C.lightGray, width: 1 },
        });
        s.addText(task.id, { x: 0.7, y, w: 1.5, h: 0.5, fontFace: theme.fonts.body, fontSize: 11, color: C.red, bold: true, valign: "middle" });
        s.addText(task.desc, { x: 2.3, y, w: 5, h: 0.5, fontFace: theme.fonts.body, fontSize: 11, color: C.black, valign: "middle" });
        s.addText(task.project, { x: 7.5, y, w: 1.5, h: 0.5, fontFace: theme.fonts.body, fontSize: 11, color: C.gray, valign: "middle" });
      });
    }

    // =====================================================================
    // Slide 9 - Done Tasks
    // =====================================================================
    {
      const s = contentSlide();
      slideTitle(s, "PROJECT ALPHA: RECENTLY COMPLETED");

      s.addShape(pres.shapes.RECTANGLE, {
        x: 0.6,
        y: 1.1,
        w: 8.8,
        h: 0.4,
        fill: { color: C.black },
        line: { color: C.black },
      });
      s.addText("ID", { x: 0.7, y: 1.15, w: 1.5, h: 0.3, fontFace: theme.fonts.body, fontSize: 10, color: C.white, bold: true });
      s.addText("DESCRIPTION", { x: 2.3, y: 1.15, w: 5, h: 0.3, fontFace: theme.fonts.body, fontSize: 10, color: C.white, bold: true });
      s.addText("DATE", { x: 7.5, y: 1.15, w: 1.5, h: 0.3, fontFace: theme.fonts.body, fontSize: 10, color: C.white, bold: true });

      data.tasks.done.forEach((task, idx) => {
        const y = 1.6 + idx * 0.6;
        s.addShape(pres.shapes.RECTANGLE, {
          x: 0.6,
          y,
          w: 8.8,
          h: 0.5,
          fill: { color: C.offWhite },
          line: { color: C.lightGray, width: 1 },
        });
        s.addText(task.id, { x: 0.7, y, w: 1.5, h: 0.5, fontFace: theme.fonts.body, fontSize: 11, color: C.gray, bold: true, valign: "middle" });
        s.addText(task.desc, { x: 2.3, y, w: 5, h: 0.5, fontFace: theme.fonts.body, fontSize: 11, color: "888888", strike: true, valign: "middle" });
        s.addText(task.date, { x: 7.5, y, w: 1.5, h: 0.5, fontFace: theme.fonts.body, fontSize: 10, color: C.gray, valign: "middle" });
      });

      footerBar(s, "XC GRADIENT - OPERATIONS LOG");
    }
  },
};
