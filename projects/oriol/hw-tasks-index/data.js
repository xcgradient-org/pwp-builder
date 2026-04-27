module.exports = {
  id: "hw-tasks-index",
  title: "Local AI Hardware & Project Status",
  subtitle: "April 2026 Index",
  
  hardware: {
    eyebrow: "PHASE 1: THE MODEL FUNDAMENTALS",
    title: "MODEL WEIGHTS & QUANTIZATION",
    fundamentals: [
      { label: "Parameters (N)", text: "Billions of mathematical variables representing total knowledge." },
      { label: "Weight Matrix", text: "Massive static files of numbers. Never change during inference." },
      { label: "Quantization (p)", text: "Compression (e.g., 16-bit to 4-bit) to fit VRAM." },
      { label: "The Trade-off", text: "Lower bits = more space, but higher perplexity (hallucinations)." }
    ],
    
    vram: {
      eyebrow: "PHASE 2: PHYSICAL LIMITS — CAPACITY",
      title: "VRAM: THE CAPACITY PILLAR",
      equation: "VRAM_total = W + M + E + KV + A",
      components: [
        { label: "Weights (W)", text: "Parameters x bits." },
        { label: "Metadata (M)", text: "Scales/offsets. ~3–4 GB 'Ghost Tax' on 70B+." },
        { label: "Engine (E)", text: "CUDA, drivers, NCCL overhead (~1.2 GB)." },
        { label: "KV Cache (KV)", text: "Context Window. History storage (Use RotorQuant!)." },
        { label: "Activations (A)", text: "Scratchpad for temporary math (~1 GB)." }
      ]
    },

    turboquant: {
      title: "TURBOQUANT: CACHE COMPRESSION",
      eyebrow: "INFRASTRUCTURE OPTIMIZATION",
      summary: "Advanced inference engine optimizing the critical path for low-bit models.",
      features: [
        { label: "Key/Value Quantization", text: "Shrinks KV tensors from FP16 down to 3-bit or 4-bit." },
        { label: "Memory Savings", text: "Reduces VRAM footprint of context by ~4x-5x." },
        { label: "Direct Low-Bit Math", text: "Executes on Tensor Cores without full de-quantization to FP16." }
      ],
      impact: "Allows a 70B model to maintain a 32k context window on dual 3090s where 8k was previously the limit."
    },

    rotorquant: {
      title: "ROTORQUANT: THE MATH OF SPEED",
      eyebrow: "ADVANCED ROTATIONAL QUANTIZATION",
      logic: "Uses rotational invariance to spread feature density before compression.",
      math: [
        { label: "Basis Rotation", text: "Applies a unitary transformation to normalize outliers in the feature space." },
        { label: "Reduced Bandwidth", text: "Lower bit-depth = less data dragging across the VRAM Bus per token." },
        { label: "Kernel Fusion", text: "Combines rotation + quantization into a single GPU pass, reducing memory round-trips." }
      ],
      speedLaw: "TPOT = (W + KV_rotor) / Bandwidth",
      impact: "Mathematically minimizes the 'Memory Wall' by reducing the KV term in the latency equation by up to 80%."
    },
    
    latency: {
      eyebrow: "PHASE 3: PHYSICAL LIMITS — SPEED",
      title: "LATENCY: THE TIME PILLAR",
      phases: [
        { 
          name: "Prefill: TTFT", 
          law: "Compute Bound (TFLOPs)", 
          math: "2 * |P| * N / FLOPS", 
          hero: "Tensor Cores" 
        },
        { 
          name: "Decode: TPOT", 
          law: "Memory Bandwidth Bound (GB/s)", 
          math: "(W + KV) / Bandwidth", 
          hero: "VRAM Bus" 
        }
      ],
      interconnect: [
        { label: "NVLink", text: "High-speed bridge. Essential for 70B+ sync." },
        { label: "PCIe", text: "Slower backup. Adds communication delay per token." }
      ]
    },
    
    summary: {
      title: "DUAL 3090 SWEET SPOT",
      points: [
        "Model Size: Target 70B–80B parameters.",
        "Quantization: Use 4-bit (Q4_K_M) for speed/brains balance.",
        "Cache: Use RotorQuant (rotor4) for VRAM context window.",
        "Fallback: vm.swappiness=10 for graceful RAM overflow."
      ]
    }
  },
  
  tasks: {
    notDone: [
      { id: "ALPHA-CEO-1", desc: "Build JSON of all Decfa machines", project: "ALPHA" },
      { id: "ALPHA-CEO-2", desc: "Retrieve and digitise 3 Decfa manuals", project: "ALPHA" },
      { id: "ALPHA-CEO-11", desc: "Add the auto report of Hardware", project: "ALPHA" },
      { id: "ALPHA-CEO-16", desc: "Record the pitch updated for Santander X Awards", project: "ALPHA" },
      { id: "ALPHA-CEO-23", desc: "Validate Decfa machine data", project: "ALPHA" }
    ],
    done: [
      { id: "ALPHA-CEO-19", desc: "Create XC Gradient GitHub org", date: "17 Apr 2026" },
      { id: "ALPHA-CEO-20", desc: "Reorganize repos", date: "17 Apr 2026" },
      { id: "ALPHA-CEO-22", desc: "Call with Paver", date: "21 Apr 2026" },
      { id: "ALPHA-CEO-26", desc: "Review Arnau's benchmark", date: "23 Apr 2026" },
      { id: "ALPHA-CEO-34", desc: "Create agentic pipeline", date: "23 Apr 2026" }
    ]
  }
};
