# Superintelligence-Academy implementation specifications

Canonical planned units: [`registry/roadmap.json`](../registry/roadmap.json). GitHub PR numbers are assigned only when real implementation branches exist.

#### SIA-001 — Initialize independent Academy web app and CI

**Target repository:** `neophilism/Superintelligence-Academy`  
**Status:** Planned draft — not an opened, merged, deployed, or verified GitHub PR  
**Phase:** 1 — Application foundation and learning presentation  
**Plan ID:** `SIA-001`

## Objective
Implement initialize independent Academy web app and CI as a real, testable component of the shared architecture, with no success claims based only on UI appearance.

## Implementation scope

- Create independent Academy Next.js app with SDK version pin and environment validation.
- Add build, lint, tests, CI, deploy/preview pipeline and feature-flag control.
- Define Academy-owned content DB schema and prevent embedding engine secrets.

## Prerequisites / merge gates

- `SIE-002` — Define canonical OpenAPI and generated engine SDK
- `SIE-008` — Publish design tokens, domain UI package and base shell

## Required acceptance criteria
- Build/test/deploy independent application consuming published engine SDK.

## PR-specific verification

- Deploy a functional app shell to a preview without copying engine code.
- An incompatible engine SDK version fails CI or produces clear degraded state.

## Merge evidence (required)

- [ ] Code and migrations are present in the target repository, not only design mockups.
- [ ] Tests, security, accessibility, privacy, and spend controls appropriate to the changed surface are passing.
- [ ] API/schema and shared UI compatibility tests are updated when their contracts change.
- [ ] Automated checks and manual acceptance evidence are linked in this PR.
- [ ] The canonical `registry/roadmap.json` records the **real GitHub PR number only after it exists**; no synthetic mapping.
- [ ] Deployment claims, if any, are supported by the actual service URL, source commit SHA, readiness result, and live behavior.

**Out of scope:** Marking the whole platform, another service, or a future AI provider production-ready based solely on this PR.

---


#### SIA-002 — Shared SSO and project portability

**Target repository:** `neophilism/Superintelligence-Academy`  
**Status:** Planned draft — not an opened, merged, deployed, or verified GitHub PR  
**Phase:** 1 — Application foundation and learning presentation  
**Plan ID:** `SIA-002`

## Objective
Implement shared SSO and project portability as a real, testable component of the shared architecture, with no success claims based only on UI appearance.

## Implementation scope

- Connect OIDC login and user/organization scope to Academy sessions.
- Display shared canonical projects and directly open artifacts by engine IDs.
- Preserve run history and grants while switching from/to Command Center.

## Prerequisites / merge gates

- `SIA-001` — Initialize independent Academy web app and CI
- `SIE-003` — Implement OIDC authentication and product SSO
- `SIE-004` — Tenant roles, permissions and row-level isolation
- `SIE-007` — Project/artifact version graph and export API

## Required acceptance criteria
- Existing user opens one project in both apps with same artifact IDs and no conversion.

## PR-specific verification

- Same project/version IDs open in both products with no import/export.
- A revoked membership cannot open old shared project links.

## Merge evidence (required)

- [ ] Code and migrations are present in the target repository, not only design mockups.
- [ ] Tests, security, accessibility, privacy, and spend controls appropriate to the changed surface are passing.
- [ ] API/schema and shared UI compatibility tests are updated when their contracts change.
- [ ] Automated checks and manual acceptance evidence are linked in this PR.
- [ ] The canonical `registry/roadmap.json` records the **real GitHub PR number only after it exists**; no synthetic mapping.
- [ ] Deployment claims, if any, are supported by the actual service URL, source commit SHA, readiness result, and live behavior.

**Out of scope:** Marking the whole platform, another service, or a future AI provider production-ready based solely on this PR.

---


#### SIA-003 — Academy theme, responsive accessible shell

**Target repository:** `neophilism/Superintelligence-Academy`  
**Status:** Planned draft — not an opened, merged, deployed, or verified GitHub PR  
**Phase:** 1 — Application foundation and learning presentation  
**Plan ID:** `SIA-003`

## Objective
Implement academy theme, responsive accessible shell as a real, testable component of the shared architecture, with no success claims based only on UI appearance.

## Implementation scope

- Design approachable but restrained Academy shell, typography, spacing, navigation and responsive rules.
- Apply shared tool renderer with education-specific surface tokens.
- Test semantic structure, keyboard focus and reduced-motion baseline.

## Prerequisites / merge gates

- `SIA-001` — Initialize independent Academy web app and CI
- `SIE-008` — Publish design tokens, domain UI package and base shell

## Required acceptance criteria
- Warm restrained tokens, keyboard navigation and WCAG baseline are verified.

## PR-specific verification

- Mobile and desktop major routes are usable by keyboard.
- Switching themes changes presentation but never data or tool behavior.

## Merge evidence (required)

- [ ] Code and migrations are present in the target repository, not only design mockups.
- [ ] Tests, security, accessibility, privacy, and spend controls appropriate to the changed surface are passing.
- [ ] API/schema and shared UI compatibility tests are updated when their contracts change.
- [ ] Automated checks and manual acceptance evidence are linked in this PR.
- [ ] The canonical `registry/roadmap.json` records the **real GitHub PR number only after it exists**; no synthetic mapping.
- [ ] Deployment claims, if any, are supported by the actual service URL, source commit SHA, readiness result, and live behavior.

**Out of scope:** Marking the whole platform, another service, or a future AI provider production-ready based solely on this PR.

---


#### SIA-004 — Tools directory, search and goal-first onboarding

**Target repository:** `neophilism/Superintelligence-Academy`  
**Status:** Planned draft — not an opened, merged, deployed, or verified GitHub PR  
**Phase:** 1 — Application foundation and learning presentation  
**Plan ID:** `SIA-004`

## Objective
Implement tools directory, search and goal-first onboarding as a real, testable component of the shared architecture, with no success claims based only on UI appearance.

## Implementation scope

- Create searchable tools catalog grouped by user goals and capability families.
- Offer project creation by desired artifact rather than requiring model selection.
- Reflect live enabled, unavailable and upcoming statuses from server catalog.

## Prerequisites / merge gates

- `SIA-003` — Academy theme, responsive accessible shell
- `SIE-009` — Tool manifest schema, UI anchors and domain plugin loader
- `SIE-010` — Model capability registry and provider health

## Required acceptance criteria
- Learner reaches any enabled tool or a blank project with accurate support status.

## PR-specific verification

- A novice reaches each enabled editor from a goal-oriented entry.
- Unavailable tool/provider cannot deceptively launch a demo job.

## Merge evidence (required)

- [ ] Code and migrations are present in the target repository, not only design mockups.
- [ ] Tests, security, accessibility, privacy, and spend controls appropriate to the changed surface are passing.
- [ ] API/schema and shared UI compatibility tests are updated when their contracts change.
- [ ] Automated checks and manual acceptance evidence are linked in this PR.
- [ ] The canonical `registry/roadmap.json` records the **real GitHub PR number only after it exists**; no synthetic mapping.
- [ ] Deployment claims, if any, are supported by the actual service URL, source commit SHA, readiness result, and live behavior.

**Out of scope:** Marking the whole platform, another service, or a future AI provider production-ready based solely on this PR.

---


#### SIA-005 — Lesson/slot schema and learning registry

**Target repository:** `neophilism/Superintelligence-Academy`  
**Status:** Planned draft — not an opened, merged, deployed, or verified GitHub PR  
**Phase:** 1 — Application foundation and learning presentation  
**Plan ID:** `SIA-005`

## Objective
Implement lesson/slot schema and learning registry as a real, testable component of the shared architecture, with no success claims based only on UI appearance.

## Implementation scope

- Implement Academy-owned lesson/course/version entities and stable engine UI-slot references.
- Define micro-lesson and course schemas, prerequisite and compatibility validation.
- Build lesson registry reader with graceful invalid-anchor handling.

## Prerequisites / merge gates

- `SIA-001` — Initialize independent Academy web app and CI
- `SIE-009` — Tool manifest schema, UI anchors and domain plugin loader

## Required acceptance criteria
- All lessons reference stable manifest slots and verified tool-version ranges.

## PR-specific verification

- Every instructional attachment resolves to a declared stable tool anchor.
- An outdated lesson is flagged rather than silently attached to wrong control.

## Merge evidence (required)

- [ ] Code and migrations are present in the target repository, not only design mockups.
- [ ] Tests, security, accessibility, privacy, and spend controls appropriate to the changed surface are passing.
- [ ] API/schema and shared UI compatibility tests are updated when their contracts change.
- [ ] Automated checks and manual acceptance evidence are linked in this PR.
- [ ] The canonical `registry/roadmap.json` records the **real GitHub PR number only after it exists**; no synthetic mapping.
- [ ] Deployment claims, if any, are supported by the actual service URL, source commit SHA, readiness result, and live behavior.

**Out of scope:** Marking the whole platform, another service, or a future AI provider production-ready based solely on this PR.

---


#### SIA-006 — Reusable micro-hints and inline learning overlay

**Target repository:** `neophilism/Superintelligence-Academy`  
**Status:** Planned draft — not an opened, merged, deployed, or verified GitHub PR  
**Phase:** 1 — Application foundation and learning presentation  
**Plan ID:** `SIA-006`

## Objective
Implement reusable micro-hints and inline learning overlay as a real, testable component of the shared architecture, with no success claims based only on UI appearance.

## Implementation scope

- Render dismissible contextual help on stable controls using shared slot IDs.
- Support hint density preferences, keyboard navigation and low-obstruction placement.
- Track explicit user intent without embedding instructional code in engine packages.

## Prerequisites / merge gates

- `SIA-003` — Academy theme, responsive accessible shell
- `SIA-005` — Lesson/slot schema and learning registry

## Required acceptance criteria
- At least ten validated anchors open dismissible hints without obscuring editing.

## PR-specific verification

- Ten representative interactive anchors show relevant short explanations.
- No lesson overlay traps focus or covers core editing action.

## Merge evidence (required)

- [ ] Code and migrations are present in the target repository, not only design mockups.
- [ ] Tests, security, accessibility, privacy, and spend controls appropriate to the changed surface are passing.
- [ ] API/schema and shared UI compatibility tests are updated when their contracts change.
- [ ] Automated checks and manual acceptance evidence are linked in this PR.
- [ ] The canonical `registry/roadmap.json` records the **real GitHub PR number only after it exists**; no synthetic mapping.
- [ ] Deployment claims, if any, are supported by the actual service URL, source commit SHA, readiness result, and live behavior.

**Out of scope:** Marking the whole platform, another service, or a future AI provider production-ready based solely on this PR.

---


#### SIA-007 — Context tooltips, examples and 30-second lessons

**Target repository:** `neophilism/Superintelligence-Academy`  
**Status:** Planned draft — not an opened, merged, deployed, or verified GitHub PR  
**Phase:** 1 — Application foundation and learning presentation  
**Plan ID:** `SIA-007`

## Objective
Implement context tooltips, examples and 30-second lessons as a real, testable component of the shared architecture, with no success claims based only on UI appearance.

## Implementation scope

- Write and connect task-oriented tooltips, worked examples and compact L0/L1 micro-lessons.
- Include accessible text-first and localized-content-ready representations.
- Establish editorial accuracy/version review for help examples.

## Prerequisites / merge gates

- `SIA-006` — Reusable micro-hints and inline learning overlay

## Required acceptance criteria
- L0/L1 instruction is coherent, keyboard accessible and content-versioned.

## PR-specific verification

- A learner completes a real basic action after a short inline lesson.
- Incorrect/outdated examples are caught by content fixture checks.

## Merge evidence (required)

- [ ] Code and migrations are present in the target repository, not only design mockups.
- [ ] Tests, security, accessibility, privacy, and spend controls appropriate to the changed surface are passing.
- [ ] API/schema and shared UI compatibility tests are updated when their contracts change.
- [ ] Automated checks and manual acceptance evidence are linked in this PR.
- [ ] The canonical `registry/roadmap.json` records the **real GitHub PR number only after it exists**; no synthetic mapping.
- [ ] Deployment claims, if any, are supported by the actual service URL, source commit SHA, readiness result, and live behavior.

**Out of scope:** Marking the whole platform, another service, or a future AI provider production-ready based solely on this PR.

---

### Phase 2: Adaptive guided teaching and evidence


#### SIA-008 — Scoped AI tutor conversation and content retrieval

**Target repository:** `neophilism/Superintelligence-Academy`  
**Status:** Planned draft — not an opened, merged, deployed, or verified GitHub PR  
**Phase:** 2 — Adaptive guided teaching and evidence  
**Plan ID:** `SIA-008`

## Objective
Implement scoped AI tutor conversation and content retrieval as a real, testable component of the shared architecture, with no success claims based only on UI appearance.

## Implementation scope

- Integrate AI tutor scoped to verified current lesson, user permission and consented project artifacts.
- Retrieve approved lesson text and actual control/tool events as context, not unrelated user history.
- Bound tutor spend, cite lesson references and label uncertainties.

## Prerequisites / merge gates

- `SIA-005` — Lesson/slot schema and learning registry
- `SIE-013` — Structured generation, retrieval and approved tool calls
- `SIE-014` — Budget estimation, reservation and usage ledger

## Required acceptance criteria
- Tutor sees only consented project and verified lesson/tool events.

## PR-specific verification

- Tutor answers correct control question without seeing unrelated tenant projects.
- Tutor refuses to fabricate completed runs or unsupported model capability.

## Merge evidence (required)

- [ ] Code and migrations are present in the target repository, not only design mockups.
- [ ] Tests, security, accessibility, privacy, and spend controls appropriate to the changed surface are passing.
- [ ] API/schema and shared UI compatibility tests are updated when their contracts change.
- [ ] Automated checks and manual acceptance evidence are linked in this PR.
- [ ] The canonical `registry/roadmap.json` records the **real GitHub PR number only after it exists**; no synthetic mapping.
- [ ] Deployment claims, if any, are supported by the actual service URL, source commit SHA, readiness result, and live behavior.

**Out of scope:** Marking the whole platform, another service, or a future AI provider production-ready based solely on this PR.

---


#### SIA-009 — Step-by-step guided execution of live tool interfaces

**Target repository:** `neophilism/Superintelligence-Academy`  
**Status:** Planned draft — not an opened, merged, deployed, or verified GitHub PR  
**Phase:** 2 — Adaptive guided teaching and evidence  
**Plan ID:** `SIA-009`

## Objective
Implement step-by-step guided execution of live tool interfaces as a real, testable component of the shared architecture, with no success claims based only on UI appearance.

## Implementation scope

- Implement guided step controller observing real engine tool actions and run results.
- Use explicit expected events/rubrics to validate each step before progressing.
- Store resumable checkpoints and allow user to leave guidance without losing work.

## Prerequisites / merge gates

- `SIA-006` — Reusable micro-hints and inline learning overlay
- `SIA-008` — Scoped AI tutor conversation and content retrieval
- `SIE-012` — Production text/reasoning provider and token streaming

## Required acceptance criteria
- L2 lesson completes only after actual control events or run evidence.

## PR-specific verification

- Complete a guided generation and prove actual artifact version created.
- A fake click or mocked output cannot earn live-completion badge.

## Merge evidence (required)

- [ ] Code and migrations are present in the target repository, not only design mockups.
- [ ] Tests, security, accessibility, privacy, and spend controls appropriate to the changed surface are passing.
- [ ] API/schema and shared UI compatibility tests are updated when their contracts change.
- [ ] Automated checks and manual acceptance evidence are linked in this PR.
- [ ] The canonical `registry/roadmap.json` records the **real GitHub PR number only after it exists**; no synthetic mapping.
- [ ] Deployment claims, if any, are supported by the actual service URL, source commit SHA, readiness result, and live behavior.

**Out of scope:** Marking the whole platform, another service, or a future AI provider production-ready based solely on this PR.

---


#### SIA-010 — Interactive project lessons and goal checklists

**Target repository:** `neophilism/Superintelligence-Academy`  
**Status:** Planned draft — not an opened, merged, deployed, or verified GitHub PR  
**Phase:** 2 — Adaptive guided teaching and evidence  
**Plan ID:** `SIA-010`

## Objective
Implement interactive project lessons and goal checklists as a real, testable component of the shared architecture, with no success claims based only on UI appearance.

## Implementation scope

- Build L3 goal-based tutorials with deliverable checklist and workflow preview.
- Connect bill/package and another cross-domain example to real editable project outputs.
- Support interruption, targeted reteaching and artifact-specific feedback.

## Prerequisites / merge gates

- `SIA-009` — Step-by-step guided execution of live tool interfaces
- `SIE-015` — Typed workflow template engine and graph validation
- `SIE-023` — Structured legislation editor and package DAG

## Required acceptance criteria
- L3 bill/film-like project builds editable outputs with checkpoint resume.

## PR-specific verification

- Bill/package lesson produces each checked output with preserved lineage.
- Pause at a checkpoint, resume, and edit a single result independently.

## Merge evidence (required)

- [ ] Code and migrations are present in the target repository, not only design mockups.
- [ ] Tests, security, accessibility, privacy, and spend controls appropriate to the changed surface are passing.
- [ ] API/schema and shared UI compatibility tests are updated when their contracts change.
- [ ] Automated checks and manual acceptance evidence are linked in this PR.
- [ ] The canonical `registry/roadmap.json` records the **real GitHub PR number only after it exists**; no synthetic mapping.
- [ ] Deployment claims, if any, are supported by the actual service URL, source commit SHA, readiness result, and live behavior.

**Out of scope:** Marking the whole platform, another service, or a future AI provider production-ready based solely on this PR.

---


#### SIA-011 — Evidence-based learner assessment and feedback

**Target repository:** `neophilism/Superintelligence-Academy`  
**Status:** Planned draft — not an opened, merged, deployed, or verified GitHub PR  
**Phase:** 2 — Adaptive guided teaching and evidence  
**Plan ID:** `SIA-011`

## Objective
Implement evidence-based learner assessment and feedback as a real, testable component of the shared architecture, with no success claims based only on UI appearance.

## Implementation scope

- Specify machine-checkable assessment rubrics for artifacts, actions and source evidence.
- Generate formative feedback linked to exact artifact versions and instructor review option.
- Distinguish AI assessment from verified execution and human certification.

## Prerequisites / merge gates

- `SIA-010` — Interactive project lessons and goal checklists

## Required acceptance criteria
- Rubrics cannot pass on the strength of a model assertion without verifiable output.

## PR-specific verification

- Submitting no output cannot pass despite optimistic model response.
- Changing artifact after grading invalidates or records corresponding evidence version.

## Merge evidence (required)

- [ ] Code and migrations are present in the target repository, not only design mockups.
- [ ] Tests, security, accessibility, privacy, and spend controls appropriate to the changed surface are passing.
- [ ] API/schema and shared UI compatibility tests are updated when their contracts change.
- [ ] Automated checks and manual acceptance evidence are linked in this PR.
- [ ] The canonical `registry/roadmap.json` records the **real GitHub PR number only after it exists**; no synthetic mapping.
- [ ] Deployment claims, if any, are supported by the actual service URL, source commit SHA, readiness result, and live behavior.

**Out of scope:** Marking the whole platform, another service, or a future AI provider production-ready based solely on this PR.

---


#### SIA-012 — Safe practice fixtures, dry-runs and labeling

**Target repository:** `neophilism/Superintelligence-Academy`  
**Status:** Planned draft — not an opened, merged, deployed, or verified GitHub PR  
**Phase:** 2 — Adaptive guided teaching and evidence  
**Plan ID:** `SIA-012`

## Objective
Implement safe practice fixtures, dry-runs and labeling as a real, testable component of the shared architecture, with no success claims based only on UI appearance.

## Implementation scope

- Build safe practice fixtures with explicit simulation badges and reproducible sample assets.
- Separate estimated/test usage from genuinely paid provider runs and user ledger.
- Prevent fixture data from entering paid completion reports as live output.

## Prerequisites / merge gates

- `SIA-009` — Step-by-step guided execution of live tool interfaces
- `SIE-014` — Budget estimation, reservation and usage ledger

## Required acceptance criteria
- Practice mode is explicit and never misrepresented as actual paid generation.

## PR-specific verification

- Practice demo completes without charging a real provider.
- User can distinguish simulated and actual generation at every step.

## Merge evidence (required)

- [ ] Code and migrations are present in the target repository, not only design mockups.
- [ ] Tests, security, accessibility, privacy, and spend controls appropriate to the changed surface are passing.
- [ ] API/schema and shared UI compatibility tests are updated when their contracts change.
- [ ] Automated checks and manual acceptance evidence are linked in this PR.
- [ ] The canonical `registry/roadmap.json` records the **real GitHub PR number only after it exists**; no synthetic mapping.
- [ ] Deployment claims, if any, are supported by the actual service URL, source commit SHA, readiness result, and live behavior.

**Out of scope:** Marking the whole platform, another service, or a future AI provider production-ready based solely on this PR.

---


#### SIA-013 — Curriculum dependency graph and learner pathfinding

**Target repository:** `neophilism/Superintelligence-Academy`  
**Status:** Planned draft — not an opened, merged, deployed, or verified GitHub PR  
**Phase:** 2 — Adaptive guided teaching and evidence  
**Plan ID:** `SIA-013`

## Objective
Implement curriculum dependency graph and learner pathfinding as a real, testable component of the shared architecture, with no success claims based only on UI appearance.

## Implementation scope

- Model prerequisites, competencies, difficulty, lesson dependencies and course sequence.
- Suggest learning paths from declared goal, current proficiency and actual assessment results.
- Include opt-out from adaptive recommendations and avoid hidden progress claims.

## Prerequisites / merge gates

- `SIA-005` — Lesson/slot schema and learning registry
- `SIA-011` — Evidence-based learner assessment and feedback

## Required acceptance criteria
- Suggested next lesson follows prerequisites and user-declared goals.

## PR-specific verification

- Missing prerequisite blocks false mastery claim while permitting exploration.
- Path recalculates when user demonstrates required competency.

## Merge evidence (required)

- [ ] Code and migrations are present in the target repository, not only design mockups.
- [ ] Tests, security, accessibility, privacy, and spend controls appropriate to the changed surface are passing.
- [ ] API/schema and shared UI compatibility tests are updated when their contracts change.
- [ ] Automated checks and manual acceptance evidence are linked in this PR.
- [ ] The canonical `registry/roadmap.json` records the **real GitHub PR number only after it exists**; no synthetic mapping.
- [ ] Deployment claims, if any, are supported by the actual service URL, source commit SHA, readiness result, and live behavior.

**Out of scope:** Marking the whole platform, another service, or a future AI provider production-ready based solely on this PR.

---


#### SIA-014 — Personal learning progress, privacy and resume

**Target repository:** `neophilism/Superintelligence-Academy`  
**Status:** Planned draft — not an opened, merged, deployed, or verified GitHub PR  
**Phase:** 2 — Adaptive guided teaching and evidence  
**Plan ID:** `SIA-014`

## Objective
Implement personal learning progress, privacy and resume as a real, testable component of the shared architecture, with no success claims based only on UI appearance.

## Implementation scope

- Persist enrollments, learning progress, checkpoint artifacts and consent choices in Academy schema.
- Support export/deletion requests and cross-device resume under one identity.
- Separate project ownership from educational event analytics.

## Prerequisites / merge gates

- `SIA-002` — Shared SSO and project portability
- `SIA-013` — Curriculum dependency graph and learner pathfinding

## Required acceptance criteria
- Private progress persists, is exportable/deletable and survives app transitions.

## PR-specific verification

- User resumes an interrupted tutorial on a second device.
- Progress deletion is verified without deleting unrelated owned creative work.

## Merge evidence (required)

- [ ] Code and migrations are present in the target repository, not only design mockups.
- [ ] Tests, security, accessibility, privacy, and spend controls appropriate to the changed surface are passing.
- [ ] API/schema and shared UI compatibility tests are updated when their contracts change.
- [ ] Automated checks and manual acceptance evidence are linked in this PR.
- [ ] The canonical `registry/roadmap.json` records the **real GitHub PR number only after it exists**; no synthetic mapping.
- [ ] Deployment claims, if any, are supported by the actual service URL, source commit SHA, readiness result, and live behavior.

**Out of scope:** Marking the whole platform, another service, or a future AI provider production-ready based solely on this PR.

---

### Phase 3: Course authoring, advanced courseware and commerce


#### SIA-015 — AI-assisted authoring plus human editorial approval

**Target repository:** `neophilism/Superintelligence-Academy`  
**Status:** Planned draft — not an opened, merged, deployed, or verified GitHub PR  
**Phase:** 3 — Course authoring, advanced courseware and commerce  
**Plan ID:** `SIA-015`

## Objective
Implement aI-assisted authoring plus human editorial approval as a real, testable component of the shared architecture, with no success claims based only on UI appearance.

## Implementation scope

- Build AI-assisted lesson/course draft authoring using registered tools, prerequisites and rubrics.
- Require human editorial review for factual, provider, rights, plagiarism and accessibility accuracy.
- Version approved content and include issue/review history.

## Prerequisites / merge gates

- `SIA-005` — Lesson/slot schema and learning registry
- `SIA-008` — Scoped AI tutor conversation and content retrieval
- `SIA-011` — Evidence-based learner assessment and feedback

## Required acceptance criteria
- Draft course publishing requires peer, factual, rights and accessibility checks.

## PR-specific verification

- Unreviewed AI-generated course cannot publish.
- Reviewed draft fails publication if its referenced tool anchors no longer exist.

## Merge evidence (required)

- [ ] Code and migrations are present in the target repository, not only design mockups.
- [ ] Tests, security, accessibility, privacy, and spend controls appropriate to the changed surface are passing.
- [ ] API/schema and shared UI compatibility tests are updated when their contracts change.
- [ ] Automated checks and manual acceptance evidence are linked in this PR.
- [ ] The canonical `registry/roadmap.json` records the **real GitHub PR number only after it exists**; no synthetic mapping.
- [ ] Deployment claims, if any, are supported by the actual service URL, source commit SHA, readiness result, and live behavior.

**Out of scope:** Marking the whole platform, another service, or a future AI provider production-ready based solely on this PR.

---


#### SIA-016 — Versioned course catalog, enrollment and entitlements

**Target repository:** `neophilism/Superintelligence-Academy`  
**Status:** Planned draft — not an opened, merged, deployed, or verified GitHub PR  
**Phase:** 3 — Course authoring, advanced courseware and commerce  
**Plan ID:** `SIA-016`

## Objective
Implement versioned course catalog, enrollment and entitlements as a real, testable component of the shared architecture, with no success claims based only on UI appearance.

## Implementation scope

- Deliver browsable versioned course catalog with outlines, enrollment and entitlements.
- Preserve historical lesson versions for ongoing learners and expose migration flags.
- Link required model capabilities and estimated compute bundles to course listings.

## Prerequisites / merge gates

- `SIA-014` — Personal learning progress, privacy and resume
- `SIA-015` — AI-assisted authoring plus human editorial approval

## Required acceptance criteria
- Purchased course records persist, lesson versions remain compatible or flag issues.

## PR-specific verification

- A learner retains access to correct purchased version after update.
- Revoked/refunded course entitlement changes access without erasing user work.

## Merge evidence (required)

- [ ] Code and migrations are present in the target repository, not only design mockups.
- [ ] Tests, security, accessibility, privacy, and spend controls appropriate to the changed surface are passing.
- [ ] API/schema and shared UI compatibility tests are updated when their contracts change.
- [ ] Automated checks and manual acceptance evidence are linked in this PR.
- [ ] The canonical `registry/roadmap.json` records the **real GitHub PR number only after it exists**; no synthetic mapping.
- [ ] Deployment claims, if any, are supported by the actual service URL, source commit SHA, readiness result, and live behavior.

**Out of scope:** Marking the whole platform, another service, or a future AI provider production-ready based solely on this PR.

---


#### SIA-017 — Foundational courses across major tool categories

**Target repository:** `neophilism/Superintelligence-Academy`  
**Status:** Planned draft — not an opened, merged, deployed, or verified GitHub PR  
**Phase:** 3 — Course authoring, advanced courseware and commerce  
**Plan ID:** `SIA-017`

## Objective
Implement foundational courses across major tool categories as a real, testable component of the shared architecture, with no success claims based only on UI appearance.

## Implementation scope

- Author actual foundation modules for writing, research, code and image with hands-on tasks.
- Attach formative assessments, source examples, estimated compute and accessible alternatives.
- Validate every published practice against current tool capability and provider policy.

## Prerequisites / merge gates

- `SIA-016` — Versioned course catalog, enrollment and entitlements
- `SIE-021` — Research, citations and document generation workspace
- `SIE-024` — Image board, masking and variation workspace
- `SIE-031` — Backend previews, test runner, GitHub and dev database

## Required acceptance criteria
- Build actual modules in text, research, code and image with assessment artifacts.

## PR-specific verification

- Learner completes each of four categories producing real artifacts.
- Course task fails honestly when required provider is unavailable.

## Merge evidence (required)

- [ ] Code and migrations are present in the target repository, not only design mockups.
- [ ] Tests, security, accessibility, privacy, and spend controls appropriate to the changed surface are passing.
- [ ] API/schema and shared UI compatibility tests are updated when their contracts change.
- [ ] Automated checks and manual acceptance evidence are linked in this PR.
- [ ] The canonical `registry/roadmap.json` records the **real GitHub PR number only after it exists**; no synthetic mapping.
- [ ] Deployment claims, if any, are supported by the actual service URL, source commit SHA, readiness result, and live behavior.

**Out of scope:** Marking the whole platform, another service, or a future AI provider production-ready based solely on this PR.

---


#### SIA-018 — Advanced multi-modal capstone course pipeline

**Target repository:** `neophilism/Superintelligence-Academy`  
**Status:** Planned draft — not an opened, merged, deployed, or verified GitHub PR  
**Phase:** 3 — Course authoring, advanced courseware and commerce  
**Plan ID:** `SIA-018`

## Objective
Implement advanced multi-modal capstone course pipeline as a real, testable component of the shared architecture, with no success claims based only on UI appearance.

## Implementation scope

- Implement L4/L5 capstone from project brief through multimodal workflow and review.
- Provide film-pitch or legislative-package coursework with cross-tool dependencies and instructor rubric.
- Support artifact portfolios, revision feedback, bounded reruns and final export.

## Prerequisites / merge gates

- `SIA-010` — Interactive project lessons and goal checklists
- `SIA-017` — Foundational courses across major tool categories
- `SIE-023` — Structured legislation editor and package DAG
- `SIE-027` — Video storyboard, timeline and production workspace

## Required acceptance criteria
- Learner completes one multi-tool project with reproducible rubric evidence.

## PR-specific verification

- One complete capstone generates multiple correctly linked artifacts.
- A failed trailer shot can be fixed without recreating completed upstream project.

## Merge evidence (required)

- [ ] Code and migrations are present in the target repository, not only design mockups.
- [ ] Tests, security, accessibility, privacy, and spend controls appropriate to the changed surface are passing.
- [ ] API/schema and shared UI compatibility tests are updated when their contracts change.
- [ ] Automated checks and manual acceptance evidence are linked in this PR.
- [ ] The canonical `registry/roadmap.json` records the **real GitHub PR number only after it exists**; no synthetic mapping.
- [ ] Deployment claims, if any, are supported by the actual service URL, source commit SHA, readiness result, and live behavior.

**Out of scope:** Marking the whole platform, another service, or a future AI provider production-ready based solely on this PR.

---


#### SIA-019 — Paid checkout, refunds and finite course compute bundles

**Target repository:** `neophilism/Superintelligence-Academy`  
**Status:** Planned draft — not an opened, merged, deployed, or verified GitHub PR  
**Phase:** 3 — Course authoring, advanced courseware and commerce  
**Plan ID:** `SIA-019`

## Objective
Implement paid checkout, refunds and finite course compute bundles as a real, testable component of the shared architecture, with no success claims based only on UI appearance.

## Implementation scope

- Integrate payment checkout, tax/fee reporting hooks, refund and signed webhook handling.
- Sell course entitlements with finite included compute and transactional ledgers.
- Reconcile invoice, entitlement, reserved compute and actual provider billable units.

## Prerequisites / merge gates

- `SIA-016` — Versioned course catalog, enrollment and entitlements
- `SIE-014` — Budget estimation, reservation and usage ledger

## Required acceptance criteria
- Payments and credits reconcile with invoice/provider records and entitlement tests.

## PR-specific verification

- Duplicate payment webhook does not create two enrollments.
- Refund revokes entitlement and adjusts unused bundle balances correctly.

## Merge evidence (required)

- [ ] Code and migrations are present in the target repository, not only design mockups.
- [ ] Tests, security, accessibility, privacy, and spend controls appropriate to the changed surface are passing.
- [ ] API/schema and shared UI compatibility tests are updated when their contracts change.
- [ ] Automated checks and manual acceptance evidence are linked in this PR.
- [ ] The canonical `registry/roadmap.json` records the **real GitHub PR number only after it exists**; no synthetic mapping.
- [ ] Deployment claims, if any, are supported by the actual service URL, source commit SHA, readiness result, and live behavior.

**Out of scope:** Marking the whole platform, another service, or a future AI provider production-ready based solely on this PR.

---


#### SIA-020 — Bounded free tier and contribution-margin subsidy

**Target repository:** `neophilism/Superintelligence-Academy`  
**Status:** Planned draft — not an opened, merged, deployed, or verified GitHub PR  
**Phase:** 3 — Course authoring, advanced courseware and commerce  
**Plan ID:** `SIA-020`

## Objective
Implement bounded free tier and contribution-margin subsidy as a real, testable component of the shared architecture, with no success claims based only on UI appearance.

## Implementation scope

- Define bounded introductory free-tier quotas and anti-abuse controls by identity, device signal and rate limits.
- Model subsidy as percentage of positive course contribution margin with fixed monthly global cap.
- Enforce graceful exhaustion messaging and optional purchased/BYOK routes where allowed.

## Prerequisites / merge gates

- `SIA-019` — Paid checkout, refunds and finite course compute bundles
- `SIE-014` — Budget estimation, reservation and usage ledger

## Required acceptance criteria
- Hard subsidy cap is enforced; no unlimited paid-provider operation on free grants.

## PR-specific verification

- Thousands of concurrent free requests cannot exceed subsidy ceiling.
- An exhausted user retains access to free static lessons and owned outputs.

## Merge evidence (required)

- [ ] Code and migrations are present in the target repository, not only design mockups.
- [ ] Tests, security, accessibility, privacy, and spend controls appropriate to the changed surface are passing.
- [ ] API/schema and shared UI compatibility tests are updated when their contracts change.
- [ ] Automated checks and manual acceptance evidence are linked in this PR.
- [ ] The canonical `registry/roadmap.json` records the **real GitHub PR number only after it exists**; no synthetic mapping.
- [ ] Deployment claims, if any, are supported by the actual service URL, source commit SHA, readiness result, and live behavior.

**Out of scope:** Marking the whole platform, another service, or a future AI provider production-ready based solely on this PR.

---


#### SIA-021 — Course quality analytics, instructor moderation and support

**Target repository:** `neophilism/Superintelligence-Academy`  
**Status:** Planned draft — not an opened, merged, deployed, or verified GitHub PR  
**Phase:** 3 — Course authoring, advanced courseware and commerce  
**Plan ID:** `SIA-021`

## Objective
Implement course quality analytics, instructor moderation and support as a real, testable component of the shared architecture, with no success claims based only on UI appearance.

## Implementation scope

- Instrument consent-aware lesson outcomes, verified completion, dropout and cost-to-completion metrics.
- Build moderation/review queue for instructor feedback and broken lesson anchors.
- Expose non-sensitive operations/support dashboard with outcome and financial reconciliation.

## Prerequisites / merge gates

- `SIA-011` — Evidence-based learner assessment and feedback
- `SIA-016` — Versioned course catalog, enrollment and entitlements
- `SIA-019` — Paid checkout, refunds and finite course compute bundles

## Required acceptance criteria
- Consent-preserving dropout/learning outcomes and review queue are visible.

## PR-specific verification

- Analytics reports exclude opted-out or private project contents.
- Support can diagnose a failed lesson using IDs without reading unrelated work.

## Merge evidence (required)

- [ ] Code and migrations are present in the target repository, not only design mockups.
- [ ] Tests, security, accessibility, privacy, and spend controls appropriate to the changed surface are passing.
- [ ] API/schema and shared UI compatibility tests are updated when their contracts change.
- [ ] Automated checks and manual acceptance evidence are linked in this PR.
- [ ] The canonical `registry/roadmap.json` records the **real GitHub PR number only after it exists**; no synthetic mapping.
- [ ] Deployment claims, if any, are supported by the actual service URL, source commit SHA, readiness result, and live behavior.

**Out of scope:** Marking the whole platform, another service, or a future AI provider production-ready based solely on this PR.

---


#### SIA-022 — A11y/localization/performance across tutorial overlays

**Target repository:** `neophilism/Superintelligence-Academy`  
**Status:** Planned draft — not an opened, merged, deployed, or verified GitHub PR  
**Phase:** 3 — Course authoring, advanced courseware and commerce  
**Plan ID:** `SIA-022`

## Objective
Implement a11y/localization/performance across tutorial overlays as a real, testable component of the shared architecture, with no success claims based only on UI appearance.

## Implementation scope

- Audit overlays and course player for screen readers, keyboard-only flows and reduced motion.
- Support translation keys and locale-safe course content with text alternatives for media.
- Test responsive and low-bandwidth progression with persistent checkpoints.

## Prerequisites / merge gates

- `SIA-003` — Academy theme, responsive accessible shell
- `SIA-006` — Reusable micro-hints and inline learning overlay
- `SIA-018` — Advanced multi-modal capstone course pipeline

## Required acceptance criteria
- Screen reader, keyboard, low-bandwidth, reduced-motion and localization QA pass.

## PR-specific verification

- All critical L0-L5 flows pass WCAG 2.2 AA-oriented audit.
- A slow connection does not lose lesson steps or submitted artifacts.

## Merge evidence (required)

- [ ] Code and migrations are present in the target repository, not only design mockups.
- [ ] Tests, security, accessibility, privacy, and spend controls appropriate to the changed surface are passing.
- [ ] API/schema and shared UI compatibility tests are updated when their contracts change.
- [ ] Automated checks and manual acceptance evidence are linked in this PR.
- [ ] The canonical `registry/roadmap.json` records the **real GitHub PR number only after it exists**; no synthetic mapping.
- [ ] Deployment claims, if any, are supported by the actual service URL, source commit SHA, readiness result, and live behavior.

**Out of scope:** Marking the whole platform, another service, or a future AI provider production-ready based solely on this PR.

---


#### SIA-023 — Live end-to-end acceptance, privacy review and deployment

**Target repository:** `neophilism/Superintelligence-Academy`  
**Status:** Planned draft — not an opened, merged, deployed, or verified GitHub PR  
**Phase:** 3 — Course authoring, advanced courseware and commerce  
**Plan ID:** `SIA-023`

## Objective
Implement live end-to-end acceptance, privacy review and deployment as a real, testable component of the shared architecture, with no success claims based only on UI appearance.

## Implementation scope

- Deploy Academy app to authorized domain with release identity and rollback.
- Exercise free enrollment, checkout/refunds, live AI tutorial, capstone and cross-app project switching.
- Record security/privacy/a11y and operations evidence with real model-cost reconciliation.

## Prerequisites / merge gates

- `SIA-002` — Shared SSO and project portability
- `SIA-018` — Advanced multi-modal capstone course pipeline
- `SIA-020` — Bounded free tier and contribution-margin subsidy
- `SIA-022` — A11y/localization/performance across tutorial overlays
- `SCC-003` — Shared identity, projects and entitlement validation
- `SIE-039` — Production deployment and acceptance evidence

## Required acceptance criteria
- Paid/free sign-ups, live provider lesson and cross-app project moves verified.

## PR-specific verification

- End-to-end test operates against deployed Academy, Command Center and engine SHAs.
- Failed readiness or simulated provider output blocks production acceptance.

## Merge evidence (required)

- [ ] Code and migrations are present in the target repository, not only design mockups.
- [ ] Tests, security, accessibility, privacy, and spend controls appropriate to the changed surface are passing.
- [ ] API/schema and shared UI compatibility tests are updated when their contracts change.
- [ ] Automated checks and manual acceptance evidence are linked in this PR.
- [ ] The canonical `registry/roadmap.json` records the **real GitHub PR number only after it exists**; no synthetic mapping.
- [ ] Deployment claims, if any, are supported by the actual service URL, source commit SHA, readiness result, and live behavior.

**Out of scope:** Marking the whole platform, another service, or a future AI provider production-ready based solely on this PR.

---

## Superintelligence-Command-Center — 19 PRs

### Phase 1: Independent professional shell

