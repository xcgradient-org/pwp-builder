const data = require("./data");

module.exports = {
  id: data.id,
  title: data.title,
  build(pres, { C, W, H, sectionDivider, contentSlide, slideTitle, statBox }) {
    // ════════════════════════════════════════════════════════════════════════════
    // SLIDE 1 — TITLE
    // ════════════════════════════════════════════════════════════════════════════
    {
      const s = pres.addSlide();
      s.background = { color: C.black };

      s.addShape(pres.shapes.RECTANGLE, {
        x: 0,
        y: 0,
        w: 0.25,
        h: H,
        fill: { color: C.red },
        line: { color: C.red },
      });

      s.addText("INTRODUCCIÓ A LA\nINFORMÀTICA I LA IA", {
        x: 0.6,
        y: 1.1,
        w: 7.5,
        h: 2.6,
        fontFace: "Bebas Neue",
        fontSize: 50,
        color: C.white,
        bold: true,
        align: "left",
        valign: "middle",
        margin: 0,
      });

      s.addText(data.subtitle, {
        x: 0.6,
        y: 3.9,
        w: 6,
        h: 0.45,
        fontFace: "Poppins",
        fontSize: 16,
        color: "888888",
        align: "left",
        margin: 0,
      });

      s.addShape(pres.shapes.OVAL, {
        x: 8.8,
        y: 4.8,
        w: 0.5,
        h: 0.5,
        fill: { color: C.red },
        line: { color: C.red },
      });
    }

    // ════════════════════════════════════════════════════════════════════════════
    // SLIDE 2 — SECTION: QUI SOC JO
    // ════════════════════════════════════════════════════════════════════════════
    sectionDivider("QUI SOC JO", 1);

    // ════════════════════════════════════════════════════════════════════════════
    // SLIDE 3 — EDUCACIÓ
    // ════════════════════════════════════════════════════════════════════════════
    {
      const s = contentSlide();
      slideTitle(s, "EDUCACIÓ");

      s.addShape(pres.shapes.RECTANGLE, {
        x: 0.6,
        y: 1.3,
        w: 4.1,
        h: 3.6,
        fill: { color: C.offWhite },
        line: { color: C.lightGray, width: 1 },
      });
      s.addShape(pres.shapes.RECTANGLE, {
        x: 0.6,
        y: 1.3,
        w: 0.09,
        h: 3.6,
        fill: { color: C.red },
        line: { color: C.red },
      });

      const rows = [
        ["Universitat", "FIB · UPC Barcelona"],
        ["Grau", "Enginyeria Informàtica"],
        ["Especialitat", "Intel·ligència Artificial"],
        ["Estat", "Últim any — Tesi en curs"],
      ];
      rows.forEach(([lbl, val], i) => {
        s.addText(lbl.toUpperCase(), {
          x: 0.85,
          y: 1.55 + i * 0.78,
          w: 3.6,
          h: 0.28,
          fontFace: "Poppins",
          fontSize: 9,
          color: C.gray,
          bold: false,
          align: "left",
          margin: 0,
        });
        s.addText(val, {
          x: 0.85,
          y: 1.82 + i * 0.78,
          w: 3.6,
          h: 0.38,
          fontFace: "Poppins",
          fontSize: 14,
          color: C.black,
          bold: true,
          align: "left",
          margin: 0,
        });
      });

      s.addShape(pres.shapes.RECTANGLE, {
        x: 5.1,
        y: 1.3,
        w: 4.3,
        h: 3.6,
        fill: { color: C.black },
        line: { color: C.black },
      });
      s.addText("EL QUE M'ATRAU\nDE LA INFORMÀTICA", {
        x: 5.3,
        y: 1.55,
        w: 3.9,
        h: 0.7,
        fontFace: "Bebas Neue",
        fontSize: 26,
        color: C.white,
        bold: true,
        align: "left",
        margin: 0,
      });
      s.addText("Matemàtiques", {
        x: 5.35,
        y: 2.35,
        w: 3.5,
        h: 0.38,
        fontFace: "Poppins",
        fontSize: 14,
        color: C.white,
        bold: true,
        align: "left",
        margin: 0,
      });
      s.addText("Lògica", {
        x: 5.35,
        y: 2.9,
        w: 3.5,
        h: 0.38,
        fontFace: "Poppins",
        fontSize: 14,
        color: C.white,
        bold: true,
        align: "left",
        margin: 0,
      });
      s.addText("Construir coses útils", {
        x: 5.35,
        y: 3.45,
        w: 3.5,
        h: 0.38,
        fontFace: "Poppins",
        fontSize: 14,
        color: C.white,
        bold: true,
        align: "left",
        margin: 0,
      });
      s.addText("No és només programar.\nÉs entendre problemes\ni convertir-los en sistemes.", {
        x: 5.35,
        y: 4.0,
        w: 3.7,
        h: 0.8,
        fontFace: "Merriweather",
        fontSize: 11,
        color: "DDDDDD",
        italic: true,
        align: "left",
        margin: 0,
      });
      s.addShape(pres.shapes.RECTANGLE, {
        x: 5.1,
        y: 1.3,
        w: 0.1,
        h: 3.6,
        fill: { color: C.red },
        line: { color: C.red },
      });
    }

    // ════════════════════════════════════════════════════════════════════════════
    // SLIDE 4 — HOSPITAL CLÍNIC
    // ════════════════════════════════════════════════════════════════════════════
    {
      const s = contentSlide();
      slideTitle(s, "HOSPITAL CLÍNIC DE BARCELONA");

      statBox(s, "€2M+", "projecte de recerca liderat", 0.6, 1.35, 3.1, 1.6);

      const pills = [
        ["ROL", "Liderar un projecte de recerca"],
        ["FEINA", "Estructurar dades de pacients"],
        ["REPTE", "Treballar amb dades clíniques reals"],
      ];
      pills.forEach(([lbl, val], i) => {
        const px = 0.6;
        const py = 3.2 + i * 0.65;
        s.addShape(pres.shapes.RECTANGLE, {
          x: px,
          y: py,
          w: 3.1,
          h: 0.52,
          fill: { color: C.offWhite },
          line: { color: C.lightGray, width: 1 },
        });
        s.addText(lbl, {
          x: px + 0.12,
          y: py + 0.05,
          w: 0.9,
          h: 0.42,
          fontFace: "Poppins",
          fontSize: 8,
          color: C.red,
          bold: true,
          align: "left",
          margin: 0,
        });
        s.addText(val, {
          x: px + 1.05,
          y: py + 0.05,
          w: 2.1,
          h: 0.42,
          fontFace: "Poppins",
          fontSize: 10,
          color: C.black,
          bold: false,
          align: "left",
          margin: 0,
        });
      });

      s.addShape(pres.shapes.RECTANGLE, {
        x: 4.2,
        y: 1.35,
        w: 5.2,
        h: 3.9,
        fill: { color: C.red },
        line: { color: C.red },
      });
      s.addText("Abans de parlar d'IA,\nprimer havíem de posar ordre\na les dades dels pacients.", {
        x: 4.45,
        y: 1.8,
        w: 4.7,
        h: 2.8,
        fontFace: "Merriweather",
        fontSize: 18,
        color: C.white,
        italic: true,
        align: "left",
        valign: "middle",
        margin: 0,
      });
    }

    // ════════════════════════════════════════════════════════════════════════════
    // SLIDE 5 — RECERCA: DADES SINTÈTIQUES
    // ════════════════════════════════════════════════════════════════════════════
    {
      const s = contentSlide();
      slideTitle(s, "RECERCA — DADES SINTÈTIQUES");

      s.addShape(pres.shapes.RECTANGLE, {
        x: 0.6,
        y: 1.3,
        w: 8.8,
        h: 1.05,
        fill: { color: C.black },
        line: { color: C.black },
      });
      s.addText("Generar dades artificials que preserven les propietats estadístiques de les dades reals — sense exposar registres privats.", {
        x: 0.75,
        y: 1.37,
        w: 8.5,
        h: 0.88,
        fontFace: "Merriweather",
        fontSize: 14,
        italic: true,
        color: C.white,
        align: "left",
        valign: "middle",
        margin: 0,
      });

      const cards = [
        ["PER QUÈ", "Les dades mèdiques no es poden compartir lliurement — GDPR, ètica clínica."],
        ["COM", "Es generen dades falses estadísticament equivalents per entrenar models d'IA."],
        ["ROL", "Co-autor de papers peer-reviewed amb investigadors doctorats."],
      ];
      cards.forEach(([h, b], i) => {
        const cx = 0.6 + i * 3.1;
        const cy = 2.6;
        s.addShape(pres.shapes.RECTANGLE, {
          x: cx,
          y: cy,
          w: 2.85,
          h: 2.6,
          fill: { color: C.offWhite },
          line: { color: C.lightGray, width: 1 },
        });
        s.addShape(pres.shapes.RECTANGLE, {
          x: cx,
          y: cy,
          w: 2.85,
          h: 0.06,
          fill: { color: C.red },
          line: { color: C.red },
        });
        s.addText(h, {
          x: cx + 0.15,
          y: cy + 0.18,
          w: 2.55,
          h: 0.38,
          fontFace: "Bebas Neue",
          fontSize: 20,
          color: C.red,
          bold: true,
          align: "left",
          margin: 0,
        });
        s.addText(b, {
          x: cx + 0.15,
          y: cy + 0.62,
          w: 2.55,
          h: 1.8,
          fontFace: "Poppins",
          fontSize: 11,
          color: C.gray,
          align: "left",
          valign: "top",
          margin: 0,
        });
      });
    }

    // ════════════════════════════════════════════════════════════════════════════
    // SLIDE 7 — SECTION: QUI SOU VOSALTRES
    // ════════════════════════════════════════════════════════════════════════════
    sectionDivider("QUI SOU\nVOSALTRES?", 2, false);

    // ════════════════════════════════════════════════════════════════════════════
    // SLIDE 8 — PREGUNTA OBERTA
    // ════════════════════════════════════════════════════════════════════════════
    {
      const s = contentSlide(C.offWhite);

      s.addText("Què voleu\nestudiar?", {
        x: 0.8,
        y: 0.9,
        w: 8.5,
        h: 2.8,
        fontFace: "Bebas Neue",
        fontSize: 96,
        color: C.black,
        bold: true,
        align: "left",
        margin: 0,
      });

      s.addText("Si no ho sabeu — en què passeu el temps quan no estudieu?", {
        x: 0.8,
        y: 3.9,
        w: 8,
        h: 0.6,
        fontFace: "Merriweather",
        fontSize: 15,
        italic: true,
        color: C.gray,
        align: "left",
        margin: 0,
      });

      s.addShape(pres.shapes.RECTANGLE, {
        x: 0.8,
        y: 3.82,
        w: 3,
        h: 0.05,
        fill: { color: C.red },
        line: { color: C.red },
      });
    }

    // ════════════════════════════════════════════════════════════════════════════
    // SLIDE 9 — SECTION: EL CURS
    // ════════════════════════════════════════════════════════════════════════════
    sectionDivider("EL CURS", 3, true);

    // ════════════════════════════════════════════════════════════════════════════
    // SLIDE 10 — ESTRUCTURA DEL CURS
    // ════════════════════════════════════════════════════════════════════════════
    {
      const s = contentSlide();
      slideTitle(s, "ESTRUCTURA DEL CURS");

      const sprints = [
        ["01", "LaTeX + IA", "CV + document", "25%"],
        ["02", "Python + Teoria de Jocs", "Bot Dilema del Presoner", "25%"],
        ["03", "Machine Learning", "Competició Kaggle", "25%"],
        ["04", "Projecte avançat", "Per decidir junts", "25%"],
      ];

      sprints.forEach(([num, topic, deliverable, pct], i) => {
        const py = 1.3 + i * 1.0;
        const isOdd = i % 2 === 1;
        s.addShape(pres.shapes.RECTANGLE, {
          x: 0.5,
          y: py,
          w: 9,
          h: 0.88,
          fill: { color: isOdd ? C.offWhite : C.white },
          line: { color: C.lightGray, width: 1 },
        });
        s.addShape(pres.shapes.RECTANGLE, {
          x: 0.5,
          y: py,
          w: 0.65,
          h: 0.88,
          fill: { color: C.red },
          line: { color: C.red },
        });
        s.addText(num, {
          x: 0.5,
          y: py,
          w: 0.65,
          h: 0.88,
          fontFace: "Bebas Neue",
          fontSize: 24,
          color: C.white,
          bold: true,
          align: "center",
          valign: "middle",
          margin: 0,
        });
        s.addText(topic, {
          x: 1.35,
          y: py + 0.1,
          w: 4.2,
          h: 0.42,
          fontFace: "Poppins",
          fontSize: 14,
          color: C.black,
          bold: true,
          align: "left",
          margin: 0,
        });
        s.addText(deliverable, {
          x: 1.35,
          y: py + 0.5,
          w: 4.2,
          h: 0.3,
          fontFace: "Poppins",
          fontSize: 10,
          color: C.gray,
          align: "left",
          margin: 0,
        });
        s.addShape(pres.shapes.RECTANGLE, {
          x: 8.6,
          y: py + 0.19,
          w: 0.75,
          h: 0.5,
          fill: { color: C.black },
          line: { color: C.black },
        });
        s.addText(pct, {
          x: 8.6,
          y: py + 0.19,
          w: 0.75,
          h: 0.5,
          fontFace: "Bebas Neue",
          fontSize: 18,
          color: C.white,
          bold: true,
          align: "center",
          valign: "middle",
          margin: 0,
        });
      });
    }

    // ════════════════════════════════════════════════════════════════════════════
    // SLIDE 11 — SECTION: ÀMBITS DE LA INFORMÀTICA
    // ════════════════════════════════════════════════════════════════════════════
    sectionDivider("ÀMBITS DE LA\nINFORMÀTICA", 4, false);

    // ════════════════════════════════════════════════════════════════════════════
    // SLIDE 12 — PREGUNTA OBERTA
    // ════════════════════════════════════════════════════════════════════════════
    {
      const s = contentSlide(C.offWhite);

      s.addText("Quines creieu\nque són les 5\nbranques?", {
        x: 0.8,
        y: 0.95,
        w: 8.2,
        h: 2.5,
        fontFace: "Bebas Neue",
        fontSize: 82,
        color: C.black,
        bold: true,
        align: "left",
        margin: 0,
      });

      s.addText("Les que ens van oferir a la FIB quan havíem d'escollir recorregut.", {
        x: 0.8,
        y: 4.15,
        w: 8.3,
        h: 0.45,
        fontFace: "Merriweather",
        fontSize: 14,
        italic: true,
        color: C.gray,
        align: "left",
        margin: 0,
      });

      s.addShape(pres.shapes.RECTANGLE, {
        x: 0.8,
        y: 4.05,
        w: 4.6,
        h: 0.05,
        fill: { color: C.red },
        line: { color: C.red },
      });
    }

    // ════════════════════════════════════════════════════════════════════════════
    // SLIDE 13 — BRANQUES DE LA FIB
    // ════════════════════════════════════════════════════════════════════════════
    {
      const s = contentSlide();
      slideTitle(s, "LES 5 BRANQUES QUE ENS OFERIEN A LA FIB");

      const branches = [
        ["Software", "Construir aplicacions i sistemes", "Backend · Web · Mòbil"],
        ["Hardware", "Treballar més a prop de la màquina", "Arquitectura · Embedded · Electrònica"],
        ["Cyber", "Protegir sistemes i xarxes", "Seguretat · Pentesting · Infraestructura"],
        ["Sistemes d'informació", "La part més orientada a consultoria", "Empresa · Processos · Dades"],
        ["Computació", "La part més matemàtica i teòrica", "Algorísmia · Optimització · Recerca"],
      ];

      branches.forEach(([name, q, roles], i) => {
        const py = 1.28 + i * 0.82;
        s.addShape(pres.shapes.RECTANGLE, {
          x: 0.5,
          y: py,
          w: 9,
          h: 0.72,
          fill: { color: i % 2 === 0 ? C.white : C.offWhite },
          line: { color: C.lightGray, width: 1 },
        });
        s.addText(name, {
          x: 0.7,
          y: py + 0.08,
          w: 3,
          h: 0.55,
          fontFace: "Poppins",
          fontSize: 12,
          color: C.black,
          bold: true,
          align: "left",
          margin: 0,
        });
        s.addText(q, {
          x: 3.8,
          y: py + 0.08,
          w: 2.8,
          h: 0.55,
          fontFace: "Poppins",
          fontSize: 11,
          color: C.gray,
          align: "left",
          margin: 0,
        });
        s.addText(roles, {
          x: 6.7,
          y: py + 0.08,
          w: 2.7,
          h: 0.55,
          fontFace: "Poppins",
          fontSize: 10,
          color: C.gray,
          align: "left",
          margin: 0,
        });
      });
    }

    // ════════════════════════════════════════════════════════════════════════════
    // SLIDE 14 — SALARIS EUROPA
    // ════════════════════════════════════════════════════════════════════════════
    {
      const s = contentSlide();
      slideTitle(s, "SALARIS A EUROPA (2024) — ENGINYERS INFORMÀTICS");

      s.addChart(
        pres.charts.BAR,
        [
          {
            name: "Junior (0–3 anys)",
            labels: ["Computació", "Sistemes d'informació", "Cyber", "Hardware", "Software"],
            values: [34, 36, 40, 41, 43],
          },
          {
            name: "Sènior (7+ anys)",
            labels: ["Computació", "Sistemes d'informació", "Cyber", "Hardware", "Software"],
            values: [78, 82, 95, 92, 98],
          },
        ],
        {
          x: 0.4,
          y: 1.1,
          w: 9.2,
          h: 4.15,
          barDir: "bar",
          barGrouping: "clustered",
          chartColors: ["CCCCCC", C.red],
          chartArea: { fill: { color: C.white } },
          catAxisLabelColor: C.black,
          valAxisLabelColor: C.gray,
          catAxisLabelFontFace: "Poppins",
          valAxisLabelFontFace: "Poppins",
          catAxisLabelFontSize: 10,
          valAxisLabelFontSize: 10,
          valGridLine: { color: "EEEEEE", size: 0.5 },
          catGridLine: { style: "none" },
          showLegend: true,
          legendPos: "t",
          legendFontSize: 10,
          showValue: false,
          valAxisTitle: "k€ / any",
          showValAxisTitle: true,
        }
      );
    }

    // ════════════════════════════════════════════════════════════════════════════
    // SLIDE 15 — SALARIS EUA
    // ════════════════════════════════════════════════════════════════════════════
    {
      const s = contentSlide();
      slideTitle(s, "SALARIS ALS EUA (2024) — ENGINYERS INFORMÀTICS");

      s.addChart(
        pres.charts.BAR,
        [
          {
            name: "Junior (0–3 anys)",
            labels: ["Computació", "Sistemes d'informació", "Cyber", "Hardware", "Software"],
            values: [95, 90, 105, 110, 120],
          },
          {
            name: "Sènior (7+ anys)",
            labels: ["Computació", "Sistemes d'informació", "Cyber", "Hardware", "Software"],
            values: [180, 165, 195, 200, 220],
          },
        ],
        {
          x: 0.4,
          y: 1.1,
          w: 9.2,
          h: 4.15,
          barDir: "bar",
          barGrouping: "clustered",
          chartColors: ["CCCCCC", C.red],
          chartArea: { fill: { color: C.white } },
          catAxisLabelColor: C.black,
          valAxisLabelColor: C.gray,
          catAxisLabelFontFace: "Poppins",
          valAxisLabelFontFace: "Poppins",
          catAxisLabelFontSize: 10,
          valAxisLabelFontSize: 10,
          valGridLine: { color: "EEEEEE", size: 0.5 },
          catGridLine: { style: "none" },
          showLegend: true,
          legendPos: "t",
          legendFontSize: 10,
          showValue: false,
          valAxisTitle: "k$ / any",
          showValAxisTitle: true,
        }
      );
    }

    // ════════════════════════════════════════════════════════════════════════════
    // SLIDE 14 — RUPTURA ESTRUCTURAL
    // ════════════════════════════════════════════════════════════════════════════
    {
      const s = contentSlide();
      slideTitle(s, "EL CANVI ESTRUCTURAL QUE PASSA ARA");

      s.addShape(pres.shapes.RECTANGLE, {
        x: 0.5,
        y: 1.25,
        w: 4.2,
        h: 3.85,
        fill: { color: C.offWhite },
        line: { color: C.lightGray, width: 1 },
      });
      s.addShape(pres.shapes.RECTANGLE, {
        x: 0.5,
        y: 1.25,
        w: 4.2,
        h: 0.48,
        fill: { color: "EEEEEE" },
        line: { color: C.lightGray, width: 1 },
      });
      s.addText("L'IA AUTOMATITZA", {
        x: 0.65,
        y: 1.3,
        w: 3.9,
        h: 0.38,
        fontFace: "Bebas Neue",
        fontSize: 18,
        color: C.gray,
        bold: true,
        align: "left",
        margin: 0,
      });

      const displaced = [
        "Webs bàsics i scripts simples",
        "Disseny de plantilla",
        "Anàlisi de dades rutinari",
        "Documentació tècnica estàndard",
      ];
      displaced.forEach((t, i) => {
        s.addShape(pres.shapes.RECTANGLE, {
          x: 0.65,
          y: 1.92 + i * 0.72,
          w: 0.06,
          h: 0.4,
          fill: { color: C.lightGray },
          line: { color: C.lightGray },
        });
        s.addText(t, {
          x: 0.85,
          y: 1.9 + i * 0.72,
          w: 3.6,
          h: 0.44,
          fontFace: "Poppins",
          fontSize: 12,
          color: C.gray,
          align: "left",
          margin: 0,
        });
      });

      s.addShape(pres.shapes.RECTANGLE, {
        x: 5.3,
        y: 1.25,
        w: 4.2,
        h: 3.85,
        fill: { color: C.black },
        line: { color: C.black },
      });
      s.addShape(pres.shapes.RECTANGLE, {
        x: 5.3,
        y: 1.25,
        w: 4.2,
        h: 0.48,
        fill: { color: C.red },
        line: { color: C.red },
      });
      s.addText("CREIX GRÀCIES A LA IA", {
        x: 5.45,
        y: 1.3,
        w: 3.9,
        h: 0.38,
        fontFace: "Bebas Neue",
        fontSize: 18,
        color: C.white,
        bold: true,
        align: "left",
        margin: 0,
      });

      const growing = [
        "Enginyeria ML i infraestructura IA",
        "Seguretat (més superfície d'atac)",
        "Experts de domini que saben programar",
        "Gestió de productes IA",
      ];
      growing.forEach((t, i) => {
        s.addShape(pres.shapes.RECTANGLE, {
          x: 5.45,
          y: 1.92 + i * 0.72,
          w: 0.06,
          h: 0.4,
          fill: { color: C.red },
          line: { color: C.red },
        });
        s.addText(t, {
          x: 5.65,
          y: 1.9 + i * 0.72,
          w: 3.6,
          h: 0.44,
          fontFace: "Poppins",
          fontSize: 12,
          color: "DDDDDD",
          align: "left",
          margin: 0,
        });
      });
    }

    // ════════════════════════════════════════════════════════════════════════════
    // SLIDE 15 — SECTION: MACROECONOMIA DE LA IA
    // ════════════════════════════════════════════════════════════════════════════
    sectionDivider("MACROECONOMIA\nDE LA IA", 5, true);

    // ════════════════════════════════════════════════════════════════════════════
    // SLIDE 16 — ELS TRES GRANS LABORATORIS
    // ════════════════════════════════════════════════════════════════════════════
    {
      const s = contentSlide();
      slideTitle(s, "ELS TRES GRANS LABORATORIS");

      const labs = [
        {
          name: "OpenAI",
          model: "GPT 5.4\nStandard · Pro · Thinking",
          backer: "Microsoft + Amazon\nronda de $122.000M",
          pos: "GPT-5.3-Codex integrat.\nFort en agents i repositoris grans.",
        },
        {
          name: "Anthropic",
          model: "Claude Opus 4.6\nSonnet 4.6 · Haiku 4.5",
          backer: "Amazon + Google\nARR > $30.000M",
          pos: "Molt fort en codi i\nciberseguretat autònoma.",
        },
        {
          name: "Google\nDeepMind",
          model: "Gemini 3.1 Pro\nFlash · Nano Banana 2",
          backer: "Alphabet\nintegració vertical",
          pos: "TPUs pròpies, Android Studio\ni eines natives de Google.",
        },
      ];

      labs.forEach(({ name, model, backer, pos }, i) => {
        const cx = 0.45 + i * 3.2;
        s.addShape(pres.shapes.RECTANGLE, {
          x: cx,
          y: 1.25,
          w: 3.0,
          h: 3.9,
          fill: { color: i === 0 ? C.black : C.offWhite },
          line: { color: i === 0 ? C.black : C.lightGray, width: 1 },
        });
        s.addShape(pres.shapes.RECTANGLE, {
          x: cx,
          y: 1.25,
          w: 3.0,
          h: 0.07,
          fill: { color: C.red },
          line: { color: C.red },
        });
        s.addText(name, {
          x: cx + 0.18,
          y: 1.42,
          w: 2.65,
          h: 0.65,
          fontFace: "Bebas Neue",
          fontSize: 34,
          color: i === 0 ? C.white : C.black,
          bold: true,
          align: "left",
          margin: 0,
        });
        s.addText("MODELS", {
          x: cx + 0.18,
          y: 2.18,
          w: 2.65,
          h: 0.28,
          fontFace: "Poppins",
          fontSize: 8,
          color: C.red,
          bold: true,
          align: "left",
          margin: 0,
        });
        s.addText(model, {
          x: cx + 0.18,
          y: 2.44,
          w: 2.65,
          h: 0.62,
          fontFace: "Poppins",
          fontSize: 10,
          color: i === 0 ? "CCCCCC" : C.gray,
          align: "left",
          margin: 0,
        });
        s.addText("INVERSOR", {
          x: cx + 0.18,
          y: 2.98,
          w: 2.65,
          h: 0.28,
          fontFace: "Poppins",
          fontSize: 8,
          color: C.red,
          bold: true,
          align: "left",
          margin: 0,
        });
        s.addText(backer, {
          x: cx + 0.18,
          y: 3.24,
          w: 2.65,
          h: 0.6,
          fontFace: "Poppins",
          fontSize: 10,
          color: i === 0 ? "CCCCCC" : C.gray,
          align: "left",
          margin: 0,
        });
        s.addText(pos, {
          x: cx + 0.18,
          y: 4.0,
          w: 2.65,
          h: 0.78,
          fontFace: "Poppins",
          fontSize: 9,
          italic: true,
          color: i === 0 ? "AAAAAA" : C.gray,
          align: "left",
          margin: 0,
        });
      });

      s.addText("La frontera del 2026 és un oligopoli: només aquests actors poden pagar la infraestructura per entrenar i servir aquests models.", {
        x: 0.5,
        y: 5.22,
        w: 9,
        h: 0.3,
        fontFace: "Poppins",
        fontSize: 10,
        color: C.gray,
        italic: true,
        align: "left",
        margin: 0,
      });
    }

    // ════════════════════════════════════════════════════════════════════════════
    // SLIDE 17 — META I EL CODI OBERT
    // ════════════════════════════════════════════════════════════════════════════
    {
      const s = contentSlide();
      slideTitle(s, "META, L'OPEN-SOURCE I EL GIR DEL 2026");

      const cols = [
        {
          x: 0.45,
          title: "API TANCADA",
          body: "OpenAI i Google et lloguen intel·ligència.\nPagues per tòquens i tot corre al seu núvol.",
          bg: C.black,
          fg: C.white,
        },
        {
          x: 3.38,
          title: "PESOS OBERTS",
          body: "Fins al 2025, Llama deixava descarregar el model i executar-lo localment.\nAixò va enfonsar preus i va donar sobirania tècnica.",
          bg: C.offWhite,
          fg: C.black,
        },
        {
          x: 6.31,
          title: "GIR DEL 2026",
          body: "Meta abandona aquesta línia amb Muse Spark:\nmodel tancat, multimodal i dins del seu ecosistema.",
          bg: C.red,
          fg: C.white,
        },
      ];

      cols.forEach(({ x, title, body, bg, fg }, i) => {
        s.addShape(pres.shapes.RECTANGLE, {
          x,
          y: 1.25,
          w: 2.74,
          h: 3.85,
          fill: { color: bg },
          line: { color: bg === C.offWhite ? C.lightGray : bg, width: 1 },
        });
        s.addShape(pres.shapes.RECTANGLE, {
          x,
          y: 1.25,
          w: 2.74,
          h: 0.06,
          fill: { color: C.red },
          line: { color: C.red },
        });
        s.addText(title, {
          x: x + 0.15,
          y: 1.45,
          w: 2.4,
          h: 0.5,
          fontFace: "Bebas Neue",
          fontSize: 24,
          color: fg,
          bold: true,
          align: "left",
          margin: 0,
        });
        s.addText(body, {
          x: x + 0.15,
          y: 2.0,
          w: 2.4,
          h: 2.4,
          fontFace: "Poppins",
          fontSize: 11,
          color: bg === C.red ? "FFEAEA" : fg,
          align: "left",
          valign: "top",
          margin: 0,
        });
      });

      s.addText("Meta va pressionar brutalment els marges del sector amb Llama. El tancament de Muse Spark redueix aquesta pressió competitiva.", {
        x: 0.5,
        y: 5.2,
        w: 9,
        h: 0.28,
        fontFace: "Merriweather",
        fontSize: 10,
        italic: true,
        color: C.gray,
        align: "left",
        margin: 0,
      });
    }

    // ════════════════════════════════════════════════════════════════════════════
    // SLIDE 18 — ECONOMIA D'OPENAI
    // ════════════════════════════════════════════════════════════════════════════
    {
      const s = contentSlide();
      slideTitle(s, "L'ECONOMIA D'OPENAI");

      const stats = [
        ["$24.000M", "ingressos anualitzats\nARR 2026"],
        ["$14.000M", "pèrdues projectades\naquest any"],
        ["$852.000M", "valoració després\nde la ronda"],
        ["$122.000M", "capital nou aixecat\nel març de 2026"],
      ];

      stats.forEach(([num, lbl], i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        statBox(s, num, lbl, 0.5 + col * 4.8, 1.3 + row * 2.0, 4.3, 1.72);
      });

      s.addShape(pres.shapes.RECTANGLE, {
        x: 0.5,
        y: 5.02,
        w: 9,
        h: 0.32,
        fill: { color: C.black },
        line: { color: C.black },
      });
      s.addText("El problema no és només entrenar el model: servir-lo també costa fortunes. La inferència d'OpenAI s'estima en $14.100M el 2026.", {
        x: 0.65,
        y: 5.07,
        w: 8.7,
        h: 0.22,
        fontFace: "Poppins",
        fontSize: 9,
        color: C.white,
        align: "left",
        margin: 0,
      });
    }

    // ════════════════════════════════════════════════════════════════════════════
    // SLIDE 19 — ESTRUCTURA CIRCULAR
    // ════════════════════════════════════════════════════════════════════════════
    {
      const s = contentSlide();
      slideTitle(s, "EL CERCLE DE CAPITAL");

      const steps = [
        ["1", "Hiperescalador", "Microsoft, Amazon o Google inverteixen milers de milions en un laboratori d'IA."],
        ["2", "Crèdits", "Aquesta inversió sovint queda lligada a consum de computació i contractes de núvol."],
        ["3", "Retorn", "El laboratori gasta aquests diners als servidors del mateix inversor original."],
        ["4", "Comptabilitat", "L'inversor recupera part del capital com a ingressos de núvol i reforça el seu relat de creixement."],
      ];

      steps.forEach(([num, title, body], i) => {
        const py = 1.22 + i * 0.93;
        s.addShape(pres.shapes.RECTANGLE, {
          x: 0.55,
          y: py,
          w: 6.05,
          h: 0.76,
          fill: { color: i % 2 === 0 ? C.white : C.offWhite },
          line: { color: C.lightGray, width: 1 },
        });
        s.addShape(pres.shapes.RECTANGLE, {
          x: 0.55,
          y: py,
          w: 0.6,
          h: 0.76,
          fill: { color: C.red },
          line: { color: C.red },
        });
        s.addText(num, {
          x: 0.55,
          y: py + 0.02,
          w: 0.6,
          h: 0.7,
          fontFace: "Bebas Neue",
          fontSize: 28,
          color: C.white,
          bold: true,
          align: "center",
          valign: "middle",
          margin: 0,
        });
        s.addText(title, {
          x: 1.3,
          y: py + 0.09,
          w: 1.35,
          h: 0.25,
          fontFace: "Poppins",
          fontSize: 10,
          color: C.red,
          bold: true,
          align: "left",
          margin: 0,
        });
        s.addText(body, {
          x: 1.3,
          y: py + 0.28,
          w: 5.0,
          h: 0.35,
          fontFace: "Poppins",
          fontSize: 10,
          color: C.black,
          align: "left",
          margin: 0,
        });
      });

      s.addShape(pres.shapes.RECTANGLE, {
        x: 6.9,
        y: 1.22,
        w: 2.6,
        h: 3.65,
        fill: { color: C.black },
        line: { color: C.black },
      });
      s.addShape(pres.shapes.RECTANGLE, {
        x: 6.9,
        y: 1.22,
        w: 2.6,
        h: 0.07,
        fill: { color: C.red },
        line: { color: C.red },
      });
      s.addText("NVIDIA", {
        x: 7.08,
        y: 1.45,
        w: 2.2,
        h: 0.4,
        fontFace: "Bebas Neue",
        fontSize: 28,
        color: C.white,
        bold: true,
        align: "left",
        margin: 0,
      });
      s.addText("ELS PICS I PALES", {
        x: 7.08,
        y: 1.95,
        w: 2.1,
        h: 0.25,
        fontFace: "Poppins",
        fontSize: 9,
        color: C.red,
        bold: true,
        align: "left",
        margin: 0,
      });
      s.addText("No participa en el cercle de la mateixa manera: ven GPUs i cobra diners reals per endavant.", {
        x: 7.08,
        y: 2.25,
        w: 2.1,
        h: 0.85,
        fontFace: "Poppins",
        fontSize: 10,
        color: "DDDDDD",
        align: "left",
        margin: 0,
      });
      s.addText("Cap. borsària\n~$4,3T", {
        x: 7.08,
        y: 3.45,
        w: 2.0,
        h: 0.7,
        fontFace: "Bebas Neue",
        fontSize: 26,
        color: C.white,
        bold: true,
        align: "left",
        margin: 0,
      });

      s.addText("Pregunta clau: això és una garantia d'infraestructura futura o una forma d'inflar demanda aparent?", {
        x: 0.55,
        y: 5.08,
        w: 8.9,
        h: 0.26,
        fontFace: "Merriweather",
        fontSize: 10,
        italic: true,
        color: C.gray,
        align: "left",
        margin: 0,
      });
    }

    // ════════════════════════════════════════════════════════════════════════════
    // SLIDE 20 — BOMBOLLA O NO?
    // ════════════════════════════════════════════════════════════════════════════
    {
      const s = contentSlide();
      slideTitle(s, "BOMBOLLA O INFRAESTRUCTURA REAL?");

      s.addShape(pres.shapes.RECTANGLE, {
        x: 0.5,
        y: 1.25,
        w: 4.2,
        h: 3.9,
        fill: { color: C.offWhite },
        line: { color: C.lightGray, width: 1 },
      });
      s.addShape(pres.shapes.RECTANGLE, {
        x: 0.5,
        y: 1.25,
        w: 4.2,
        h: 0.5,
        fill: { color: C.black },
        line: { color: C.black },
      });
      s.addText("ÉS REAL", {
        x: 0.65,
        y: 1.3,
        w: 3.9,
        h: 0.4,
        fontFace: "Bebas Neue",
        fontSize: 22,
        color: C.white,
        bold: true,
        align: "left",
        margin: 0,
      });

      const real = [
        "Ingressos demostrats: Anthropic supera els $30.000M d'ARR",
        "Els models ja milloren productivitat real en codi i seguretat",
        "S'estan construint centres de dades, xarxes i energia física",
        "La IA ja és una capa d'infraestructura del programari modern",
      ];
      real.forEach((t, i) => {
        s.addShape(pres.shapes.RECTANGLE, {
          x: 0.65,
          y: 1.95 + i * 0.72,
          w: 0.06,
          h: 0.4,
          fill: { color: C.black },
          line: { color: C.black },
        });
        s.addText(t, {
          x: 0.85,
          y: 1.93 + i * 0.72,
          w: 3.65,
          h: 0.6,
          fontFace: "Poppins",
          fontSize: 10,
          color: C.black,
          align: "left",
          valign: "top",
          margin: 0,
        });
      });

      s.addShape(pres.shapes.RECTANGLE, {
        x: 5.3,
        y: 1.25,
        w: 4.2,
        h: 3.9,
        fill: { color: C.black },
        line: { color: C.black },
      });
      s.addShape(pres.shapes.RECTANGLE, {
        x: 5.3,
        y: 1.25,
        w: 4.2,
        h: 0.5,
        fill: { color: C.red },
        line: { color: C.red },
      });
      s.addText("TÉ CARACTERÍSTIQUES DE BOMBOLLA", {
        x: 5.45,
        y: 1.3,
        w: 3.9,
        h: 0.4,
        fontFace: "Bebas Neue",
        fontSize: 16,
        color: C.white,
        bold: true,
        align: "left",
        margin: 0,
      });

      const bubble = [
        "Les pèrdues continuen sent gegants malgrat la facturació",
        "Els fluxos circulars poden maquillar la demanda real",
        "Moltes start-ups són només wrappers sense avantatge defensiu",
        "L'excés d'expectatives recorda parts de la bombolla dot-com",
      ];
      bubble.forEach((t, i) => {
        s.addShape(pres.shapes.RECTANGLE, {
          x: 5.45,
          y: 1.95 + i * 0.72,
          w: 0.06,
          h: 0.4,
          fill: { color: C.red },
          line: { color: C.red },
        });
        s.addText(t, {
          x: 5.65,
          y: 1.93 + i * 0.72,
          w: 3.65,
          h: 0.6,
          fontFace: "Poppins",
          fontSize: 10,
          color: "CCCCCC",
          align: "left",
          valign: "top",
          margin: 0,
        });
      });
    }

    // ════════════════════════════════════════════════════════════════════════════
    // SLIDE 21 — TANCAMENT
    // ════════════════════════════════════════════════════════════════════════════
    {
      const s = contentSlide(C.black);

      s.addShape(pres.shapes.RECTANGLE, {
        x: 0,
        y: 0,
        w: 0.25,
        h: H,
        fill: { color: C.red },
        line: { color: C.red },
      });

      s.addText("La informàtica va de criteri,\nno només de codi.", {
        x: 0.6,
        y: 0.55,
        w: 9,
        h: 2.2,
        fontFace: "Bebas Neue",
        fontSize: 56,
        color: C.white,
        bold: true,
        align: "left",
        margin: 0,
      });

      s.addShape(pres.shapes.RECTANGLE, {
        x: 0.6,
        y: 3.45,
        w: 9,
        h: 0.055,
        fill: { color: C.red },
        line: { color: C.red },
      });

      s.addText("Pròxima sessió: Docker · LaTeX · El teu CV professional", {
        x: 0.6,
        y: 3.55,
        w: 9,
        h: 0.45,
        fontFace: "Poppins",
        fontSize: 15,
        color: "888888",
        align: "left",
        margin: 0,
      });

      s.addText("Preguntes?", {
        x: 0.6,
        y: 4.25,
        w: 4,
        h: 0.7,
        fontFace: "Bebas Neue",
        fontSize: 38,
        color: C.red,
        bold: true,
        align: "left",
        margin: 0,
      });
    }
  },
};
