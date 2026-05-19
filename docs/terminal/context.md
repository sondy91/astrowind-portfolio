```markdown
# Austin Sonderman Portfolio Site — Project Context

## Project Overview

Building a CRT terminal-style interactive portfolio site for Austin Sonderman (AI Platform Engineer, Nashville TN).
The site features a boot sequence, phosphor/scanline CRT aesthetic, tab navigation with flicker transitions,
and an AI-powered conversational avatar that speaks as Austin.

## Current State

A working HTML prototype exists (`austin_portfolio.html`) — single self-contained file, no build system.

### CRT Visual Design

- Full CRT monitor shell with knobs, brand badge, phosphor vignette, scanlines overlay, glass glare
- Boot sequence animates with fake BIOS lines, progress bar, then zooms into screen
- Tab switching uses a CRT flicker/collapse animation (no page reloads)
- Color palette: phosphor green (#00ff41), amber (#ffb000), dark CRT background (#050f05)
- Fonts: Share Tech Mono, VT323, Orbitron (Google Fonts)

### Avatar

- Austin's actual photo was processed into a pixel art head (180x180px, pixelated rendering)
- Embedded as base64 PNG directly in the HTML (no external assets)
- Two states: neutral and bright (talking) — animated via CSS + JS interval swap
- Tinted green/phosphor via CSS filter: `sepia + saturate + hue-rotate(80deg)`
- Three CSS classes: default, `.talking` (bright, bobs), `.thinking` (amber tint, dim)

### Tabs & Content

Five tabs, all SPA (no page reloads):

- **HOME** — AI chat interface with avatar
- **ABOUT** — Bio, skill bars (animated on tab open), tech tag cloud
- **RESUME** — Full work history with real bullet points
- **PROJECTS** — Project cards with tags
- **CONTACT** — Email, phone, location, clearance note

### Current AI Implementation (TO BE REPLACED)

Currently calls Anthropic API (claude-sonnet-4-20250514) client-side — this is a placeholder only.
**This will NOT be used in production** — see AI Strategy below.

---

## Austin's Real Info (from resume)

### Identity

- Name: Austin Sonderman
- Location: Nashville, TN
- Phone: (262) 433-0748
- Email: austins4922@gmail.com
- Role: AI Platform Engineer

### Experience

**AI Platform Engineer — RTX** (Apr 2025 – Present)

- Leading enterprise ArgoCD + GitOps rollout (ESO, Istio, Datadog, external-dns on AKS)
- Configured LiteLLM as unified proxy: Azure AI Gateway ↔ AWS Bedrock, Anthropic API-compatible (v1/messages)
- Integrated Claude Code + OpenCode with enterprise AI Gateway for air-gapped GovCloud developer tooling
- Architected enterprise MLflow platform with SSO on AKS via Terraform + Helm
- Built model catalog web app backed by MLflow model registry — 185,000+ employees
- Created OBO authentication reference implementation for Azure GovCloud AI Gateway
- Extended AWS ModelHub for compliant AI model access, mitigating ITAR/export-control risks

**AI Software Engineer — Collins Aerospace (RTX Company)** (Apr 2023 – Apr 2025)

- Integrated Ping SSO + stood up 1st enterprise production Poolside.ai instance → $55M/year savings
- Built two production FastAPI services (ESOM API + Allison) using RAG + LLMs → $2.2M/year savings, ~500 users
- Diagnosed SSE streaming latency through Apigee API Gateway: ~30s → ~300ms (100x improvement)
  — identified chunk-size bug in Layer7 gateway software, worked with Google Support on Apigee config,
  validated via Wireshark packet inspection
- Improved team PR review cycle time 90% (97hr → 9hr avg)
- Replaced pip with UV in Docker + GitHub Actions → 54% faster CI/CD pipelines
- Automated GitHub migration of 26 repos (issues + PRs) from Collins self-hosted → RTX US-Persons instance
- Automated FastAPI OpenAPI spec → Spectral linter → Apigee publish (days → hours)
- Created Flask + FastAPI department templates deployed to AWS ECS with standards docs

**Software Engineer II — Zywave, Inc** (May 2017 – Feb 2023)

- Developed/maintained 15+ RESTful microservices (C#, .NET Core) — CMS for 15,000+ customers
- Built batch-processing pipeline for insurance code cross-referencing in ElasticSearch
- Reduced Vue.js 2/TypeScript search component load times by 45%
- Remediated 33 critical/high GitLab SAST vulnerabilities
- Upgraded 2 services .NET 5 → .NET 6 in 2 days

### Education

B.S. Computer Science + Web Development Certificate
University of Wisconsin – Milwaukee, Dec 2016

### Certifications

- Azure Fundamentals (Jan 2024)
- AWS Cloud Practitioner (June 2023)
- Stanford / DeepLearning.AI Machine Learning Specialization (Aug 2022)

### Technical Stack

**Cloud & Infra:** AWS (SageMaker, Bedrock, ECS, EKS), Azure (AKS, APIM, Web App Service), Terraform, Helm
**Orchestration/DevOps:** Kubernetes, ArgoCD, GitOps, Docker, GitHub Actions, CI/CD, Datadog, Istio, ESO, external-dns
**Languages/Backend:** Python, FastAPI, C#, .NET Core
**AI/ML:** LiteLLM, MLflow, RAG, LLMs, Anthropic Claude API, Poolside.ai, AWS Bedrock, Azure AI Gateway
**Databases/Search:** SQL, NoSQL, OpenSearch, ElasticSearch

---

## AI Strategy (Planned — Not Yet Implemented)

### Why not Anthropic API

Austin uses Claude Pro for his own work. Exposing the API client-side would burn quota from
public visitors. Ruled out entirely for the production site.

### Chosen Approach: Option 2 — Local WebLLM + Static RAG

**Phase 1: Knowledge Distillation (one-time, offline using Claude Pro)**

- Feed Claude Austin's resume, projects, GitHub, LinkedIn, any other material
- Claude generates:
  - Structured JSON knowledge base (facts, achievements, personality, voice)
  - 50-100 synthetic Q&A pairs covering likely visitor/recruiter questions, in Austin's voice
- Austin reviews and edits — this becomes the static ground truth
- Goal: distill Claude-quality responses into data the small model can retrieve

**Phase 2: In-Browser Stack**

- **WebLLM** — runs small model locally in visitor's browser via WebGPU
  - Candidate models: Phi-3 mini (~2GB) or Llama 3.2 1B (~1GB)
  - Downloads once, cached in IndexedDB for return visits
- **Vector search** — pure JS, no server
  - Library candidates: `vectra`, `transformers.js` (for embeddings)
  - Retrieves most relevant knowledge base chunks per question
- Model receives: retrieved context chunks + personality system prompt + visitor question → responds as Austin

**Phase 3: UX / Fallback**

- First visit loading: lean into CRT theme — "Loading Austin's brain... (42%)"
- WebGPU not available (old browser, mobile): graceful fallback to static FAQ mode
  — clicking pre-written questions shows pre-authored answers (from distillation phase)
- Return visits: instant (model cached)

### Why This Is Interesting Beyond Just Cost

This architecture mirrors Austin's actual professional work (RAG pipelines, model serving,
knowledge distillation, enterprise AI infrastructure) — the portfolio itself is a live demo
of his skillset. Strong interview talking point.

---

## Next Steps (Not Yet Started)

1. Design knowledge base JSON schema
2. Run distillation session with Claude Pro — generate Q&A pairs + structured facts from resume
3. Evaluate WebLLM model candidates (quality vs. download size tradeoff)
4. Implement in-browser vector search + retrieval
5. Integrate WebLLM into portfolio HTML
6. Build loading UX + static FAQ fallback
7. Test on low-end hardware / mobile (fallback path)
```
