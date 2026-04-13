# Meeting Notes – Wikimedia / Sutton SignWriting Discussion

**Date:** [Insert date]  
**Participants:** [Your name], [Wikimedia contact name + any others]  
**Goal of this first meeting:**  
Establish a shared factual baseline and build collaborative goodwill. Full technical agreement is not the objective. Accurate understanding and clarity on next steps is.

## Meeting framing (30-second opener)

"Thank you for taking the time. I know you are joining the UTC and are asking the very practical question: why are people still using ASCII (FSW) for SignWriting in Wikimedia projects when a Unicode block exists?

The short answer is in the one-page Wikimedia Brief I sent. Official Unicode SignWriting names characters, but it does not yet give us a complete, compatible solution for stable symbols and plane-based written signs. Our production tools, datasets, and real-world use therefore still rely on FSW and SWU. I would like to make sure we are on the same page about the current reality, then talk about what Wikimedia could realistically help with, whether that is interim support, accurate documentation, or future advocacy inside the UTC."

## Suggested agenda (45–60 minutes)

1. **Quick confirmation of the brief (5 min)**  
Did the Wikimedia Brief make sense? Any immediate questions or points that felt unclear?

Confirm they understand the difference between:

- naming characters (what official Unicode does)
- preserving stable writer-selected symbols
- encoding complete plane-based written signs (what production needs)

2. **Current production reality (10 min)**  

- what FSW and SWU actually are and why they remain canonical
- scale of the existing ecosystem (68k Brazilian signs, more than 1M signs total, live tools and corpora)
- role of the bridge package `@sutton-signwriting/unicode8`

3. **Wikimedia-specific implications (10 min)**  

- sign-language incubator projects, Wikidata lexemes, rendering and search
- why "Unicode already solved it" framing creates downstream problems

4. **What Wikimedia could help with (15 min)**  

Open discussion. Ask these three questions:

- What is Wikimedia primarily trying to achieve here? (Understand the issue? Support current project work? Advocate inside UTC?)
- Would Wikimedia be open to an interim posture that supports FSW/SWU where needed?
- If a concrete technical path opens in the UTC, would Wikimedia be willing to help advocate accurately?

5. **Next steps and documents (5–10 min)**  

- agree on any follow-up actions
- offer to send the full technical package if they want deeper reading

## Documents to send (or have ready)

- Wikimedia Brief (already sent)
- Developer Notes (the practical "what to use now" guide)
- Unicode Overview (one-page summary of the gap)
- UTC Technical Note (only if they want the detailed technical position)
- Chronology and Record (only if history becomes relevant, keep it off the first-meeting table)

## Best possible outcomes for this first meeting

- shared factual baseline ("we agree on what the current production stack is and where the gaps remain")
- clear understanding that the issue is encoding and interoperability, not just fonts
- goodwill and openness to collaborate
- concrete next step decided (for example, "Wikimedia will review the bridge tooling" or "we will schedule a follow-up once you have looked at the datasets")

## Tone reminders

- lead with pragmatism, not grievance
- listen more than lecture
- frame everything as "here is what works today for real users" rather than "Unicode failed"
- be explicit that we are not asking Wikimedia to reject the official block; we are asking for accurate understanding of its current limitations
