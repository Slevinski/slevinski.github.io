# SignWriting, AI, and Layered Stewardship

**Written signs, records, media, datasets, encodings, and deployment**

This position note clarifies how Sutton SignWriting infrastructure relates to sign-language AI, data governance, affected-community review, and technical stewardship.

Its purpose is practical:

- prevent individual written signs from being treated as privately owned data objects without regard to their status as reusable linguistic forms
- prevent encoding authority from being mistaken for language authority
- prevent AI datasets, signer media, corpora, dictionaries, and deployments from being collapsed into one generic data-governance problem

SignWriting can clarify AI governance because it separates layers that are often collapsed: reusable written signs, authored passages, lexical records, curated corpora, signer media, dataset exports, encodings, and deployments.

## Layer Matrix

| Layer | Example | Reuse and stewardship posture |
| --- | --- | --- |
| Script | Sutton SignWriting as a writing system | Open writing practice; not owned by individual users |
| Encoding | FSW and SWU | Author-stewarded infrastructure; open and forkable under license |
| Individual written sign | One written lexical form | Reusable linguistic form |
| Lexical record | Sign, gloss, source, metadata, review notes | Record-level attribution, licensing, and provenance matter |
| Authored passage | Story, lesson, translation, article, poem | Authorship, copyright, attribution, and publication rights apply |
| Dictionary or corpus | Curated database or collection | Collection design, editorial work, metadata, and database rights may apply |
| Video or media | Recording of a signer | Consent, likeness, privacy, context, and reuse rights matter |
| Dataset export | Training, testing, benchmark, or evaluation data | Terms, provenance, permissions, and use restrictions matter |
| AI deployment | Model, app, avatar, translation system, assessment tool | Affected signer and community evaluation, accountability, safety, and impact review are required |

This matrix does not settle legal questions by itself.

It gives researchers, developers, stewards, and institutions a clearer map of where rights, responsibilities, review, and authority attach.

This position note provides a stewardship and governance map, not legal advice. Copyright, database rights, privacy, consent, likeness, AI-training permissions, and institutional compliance require jurisdiction-specific and institution-specific review.

## Individual Written Signs

For project governance, individual written signs should generally be treated as reusable linguistic forms rather than as privately owned data objects merely because someone wrote them.

This is not a legal determination about every jurisdiction, database, font rendering, record, passage, corpus, dataset, or deployment.

A written sign is closer to a written word or spelling than to a proprietary record.

It can be indexed, cited, studied, searched, compared, attached to metadata, and used in dictionaries or corpora.

That does not mean the individual written sign itself is owned by the record around it.

A SignWriting form can function as a stable index for:

- lexical records
- dictionary entries
- corpus examples
- source notes
- regional or language metadata
- signer media
- passage references
- review status

The metadata attached to that index may carry source, license, attribution, review status, or usage notes.

The written sign remains a linguistic form; the record around it carries the metadata and rights.

## Authored Passages

Authored passages are different from individual signs.

Stories, translations, lessons, poems, articles, and other continuous texts written in SignWriting can carry authorship, copyright, attribution, and publication rights.

AI researchers should not treat a public SignWriting passage as freely reusable training material merely because the writing system itself is open.

The questions are different:

- Is the individual sign form reusable?
- Is the passage authored?
- What license applies to the passage?
- Are there restrictions on reuse, redistribution, translation, or model training?
- Does the passage include personal, educational, sacred, sensitive, or community-bound material?

Those questions belong at the authored-work layer, not at the sign-form layer.

## Lexical Records, Dictionaries, and Corpora

Dictionaries and corpora are curated resources.

The individual written signs inside them may be reusable linguistic forms, but the collection can carry its own stewardship requirements.

Those requirements may involve:

- editorial selection
- definitions and glosses
- source citations
- contributor attribution
- regional or language metadata
- review status
- example sentences
- linked media
- database structure
- publication license
- community or institutional agreements

AI work should distinguish a written sign from a lexical record, and a lexical record from a curated dictionary or corpus.

That distinction matters because responsible reuse depends on the layer being reused.

## Video, Likeness, and Consent

A SignWriting transcription, a lexical record, and a video of a signer are not the same object.

Video introduces separate concerns:

- likeness
- performance
- privacy
- consent
- context
- redistribution
- AI training
- synthetic output
- community impact

A written sign can index a video example without absorbing the rights attached to that video.

Likewise, permission to use a written transcription does not automatically imply permission to use the signer media from which it was made.

AI researchers should treat signer media as a distinct rights and consent layer.

## FSW and SWU as Infrastructure Encodings

Formal SignWriting provides infrastructure encodings for written signs.

FSW and SWU define how written signs are represented for computation.

They do not claim ownership over:

- individual signs
- signed languages
- Deaf communities
- SignWriting practice
- dictionaries or corpora
- signer media
- AI datasets
- language authority

Formal SignWriting distinguishes computational validity from linguistic judgment.

The encoding determines whether a written sign is structurally valid for parsing, rendering, search, sorting, and interchange.

It does not determine whether a spelling is good, preferred, readable, standard, local, poetic, or community-approved.

The supported Sutton SignWriting production path remains the established FSW/SWU model.

Others may use it, critique it, reject it, or fork it under the applicable licenses.

Open licensing gives freedom, not an obligation to redesign the supported encoding.

## AI Training and Dataset Use

AI training and evaluation require layer discipline.

Public availability is not the same thing as permission for AI training.

A SignWriting form, an authored passage, a dictionary record, a corpus export, a linked video, and an AI dataset are different objects.

Responsible AI and data work should:

- use FSW as canonical production text where appropriate
- use SWU where a Unicode-oriented isomorphic representation is useful
- avoid assuming official Unicode SignWriting is a drop-in replacement for FSW/SWU in the existing production ecosystem
- separate individual signs from passages, records, corpora, videos, and datasets
- distinguish training use from search, indexing, display, and citation use
- track source, language, region, contributor, license, and review status at the record level
- avoid treating public availability as permission for AI training
- avoid treating SignWriting transcription as consent to use signer video
- preserve variant spellings rather than forcing premature normalization
- document whether a dataset is intended for training, testing, benchmarking, search, lexicography, education, or archival study

The dataset layer is where provenance, permissions, terms of use, filtering decisions, evaluation design, and community-review requirements must become explicit.

## Deaf, Signing-Community, and Local-Stakeholder Review

Signed languages should not be treated as private property in the ordinary sense.

Deaf signers and signing communities have legitimate governance interests where language access, education, public representation, AI deployment, institutional decisions, datasets, and media use affect them.

Authority should follow the layer, the affected community, and the consequence.

Deaf signers, signing communities, educators, readers, and affected local stakeholders should lead or materially shape decisions where AI systems affect people and communities.

That includes:

- language practice
- education
- dataset use
- corpus interpretation
- output evaluation
- signer likeness
- accessibility claims
- deployment risk
- community impact
- institutional accountability

Encoding governance and dataset governance are different.

The encoding can be author-stewarded and stable while AI use still requires review and influence from affected signers, signing communities, educators, local stakeholders, and accountable institutions at the appropriate layer.

Community review should also be real, local, and bounded.

One signer, one ambassador, one institution, or one country should not be treated as speaking for all Deaf people or all SignWriting users.

The goal is meaningful review, not symbolic representation.

## Bottom Line

SignWriting gives sign-language AI a way to separate linguistic forms, written texts, curated records, signer media, datasets, encodings, and deployments.

That separation can improve ethical governance.

Individual written signs remain reusable linguistic forms.

Authored passages, curated dictionaries, corpora, media, metadata, and datasets require separate attention to attribution, licensing, consent, stewardship, and community impact.

FSW and SWU are stable infrastructure encodings, not ownership claims.

AI deployment must be evaluated with affected Deaf signers, relevant signing communities, local stakeholders, and accountable institutions because deployment affects people, institutions, access, education, and public trust.
