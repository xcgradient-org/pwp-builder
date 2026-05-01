module.exports = {
  id: "w18",
  title: "XC Gradient OS: Week 18 Update",
  sections: [
    "Infrastructure Wins",
    "People & Product",
    "Company as a System",
    "Next Steps"
  ],
  infrastructureFlux: [
    "New internal tool: `flux` — the XC Gradient internal Python package.",
    "First tool: `flux git` — stages all, generates LLM commit message, and pushes.",
    "Serves as the foundation for all future CLI automation inside the org."
  ],
  infrastructureCron: [
    "Weekly task rollover is now a deterministic cron job — replacing the Notion agent.",
    "Achieved 54 unit tests passing, covering year-boundary safety and prefix logic.",
    "Runs every Friday at 17:00 via crontab on sterry machine.",
    "Includes flags for --dry-run and --sync-only."
  ],
  peopleProduct: [
    "First contact established with CIP (internship coordination program).",
    "Goal is to secure 2 free interns for XC Gradient; meeting confirmed for Tuesday.",
    "Task Archive Feature added: Tasks can now be marked as Archived.",
    "Improves Notion OS hygiene by cleaning the operational view without deleting history."
  ],
  proposalCentralizedBuild: [
    "Problem: Creation of PPTs, LaTeX docs, tasks, and logs are scattered without shared context.",
    "Proposal: A single internal CLI/UI orchestrating tasks, presentations, and documents.",
    "Goal: Remove context switching and make every creation action auditable and reproducible.",
    "Currently under design — input welcome from Arnau & Adam."
  ],
  proposalDeptOS: [
    "Vision: Scale faster than headcount to hit 50–100M ARR.",
    "Architecture: 8 self-contained React/Tailwind frontends hitting a shared FastAPI backend.",
    "Progressive agent offloading: deterministic pipelines bounded by agent behavior."
  ],
  departmentsList: ["CEO", "CTO", "COO", "MKT", "SALES", "CFO", "HR", "LEGAL"],
  proposalInternalDomain: [
    "Proposal: Host all internal tooling at internal.xcgradient.com.",
    "Access gated via Cloudflare Access (zero-trust, no VPN needed).",
    "Auth via company email with per-user audit logs out of the box.",
    "Status: Domain and CF account exist. Needs tunnel config and first service deployed."
  ],
  nextSteps: [
    "Oriol: CIP meeting Tuesday 11:00 — secure 2 interns.",
    "Oriol: Design centralized build system spec.",
    "Arnau: First dept frontend scaffold (FastAPI + React shell).",
    "Adam: Cloudflare Access tunnel setup for internal.xcgradient.com.",
    "All: Align on dept OS priority order."
  ]
};
