# Infrastructure and Stewardship

**Confirmed assets, current risks, and the case for stronger stewardship structure**

This brief states the asset base, continuity risks, and stewardship structure for Sutton SignWriting.

The issue is no longer whether SignWriting infrastructure exists, but whether it will remain stable under a stronger stewardship model.

Sutton SignWriting already operates as infrastructure.

The main assets, the work currently required to keep them running, and the main risks are visible enough that a PI, administrator, or collaborator can see what a host institution would actually be stewarding.

## Overview

Sutton SignWriting is existing infrastructure, not a speculative project.

The system already includes:

- domains and public websites
- legacy and active servers
- software and code maintained across multiple languages
- dictionaries, datasets, and corpus assets
- formal encoding standards and rendering systems

The challenge is no longer whether these things can be created.

The challenge is whether they will be kept running, documented clearly, and given stronger stewardship backing before the maintenance burden outgrows the current model.

In program terms, the work is a combination of preservation, maintenance, modernization, and research enablement.

| Asset category | Examples | Stewardship need |
| --- | --- | --- |
| Public web infrastructure | Domains, websites, documentation sites | Renewal, hosting, migration, monitoring |
| Server infrastructure | Legacy services, production applications, static hosting | Backups, deployment documentation, modernization |
| Software and code | Libraries, fonts, rendering tools, web applications | Maintenance, compatibility, onboarding |
| Data and corpus assets | SignPuddle datasets, dictionaries, written materials | Preservation, metadata, access planning |
| Standards and encoding | ISWA 2010, FSW, SWU, fonts | Specification maintenance, implementation support |
| Partner infrastructure | International use cases, partner statements, research contacts | Coordination, documentation, continuity |

## Domains and web infrastructure

The SignWriting ecosystem includes a coordinated set of domains that support public access, tools, documentation, and archival material.

Current domains under active maintenance include:

- `signwriting.org`
- `signwriting.net`
- `signwriting.com`
- `signpuddle.org`
- `signpuddle.net`
- `signpuddle.com`
- `signbank.org`
- `signbank.net`
- `sutton-signwriting.io`
- `valeriesutton.org`
- `dancewriting.org`
- `movementwriting.org`
- `aslgospel.org`
- `soulsite.com`
- `pamelasuttonmd.org`
- `paulmsutton.org`
- `steveslevinski.me`

These domains represent:

- the primary public presence of SignWriting
- application entry points such as SignPuddle and SignMaker-related services
- technical documentation and standards resources
- historical and archival materials

Keeping these domains running includes:

- domain renewal and continuity of ownership
- DNS and hosting configuration
- uptime and monitoring
- content preservation and migration planning

This is already a real web infrastructure portfolio.

## Server and platform infrastructure

The ecosystem currently depends on a combination of:

- legacy SignWriting servers
- active production servers
- static and dynamic web hosting environments

These systems support:

- SignPuddle and dictionary services
- SignWriting.org and archival content
- developer resources and documentation
- data access and downloads

Key characteristics include:

- long-running systems with historical continuity
- a mixed technology stack including PHP, JavaScript, Python, and static hosting
- evolving architecture with ongoing redevelopment in Platform V3

Immediate operational concerns include:

- backup and disaster recovery
- migration planning for legacy systems
- documentation of deployment and configuration
- reduction of single-person operational dependency

This is exactly the kind of infrastructure that becomes more valuable as its maintenance risk becomes more visible.

## Concrete operational pressure

The continuity risk is no longer only theoretical.

Recent international work has already exposed where the pressure is felt.

In South Korea, preparation for the February 6, 2025 launch of the Korean Sign Language Nuri Dictionary depended on SignPuddle 2 on the legacy server to author signs for a public institutional dictionary.

That work appears to have pushed the old system hard enough to expose scaling weaknesses in save operations and concurrent use.

Direct technical help was needed during the launch period, including two days of vacation time taken to keep the work moving.

In Brazil, prior outages were felt immediately in an active user community that depends on the system for ongoing work.

More recently, repeated bot pressure and CPU-heavy requests have continued to cause temporary service interruptions on the legacy server.

These incidents matter because they show that thin stewardship is already interrupting real international work, not merely raising abstract maintenance concerns.

## Software and code infrastructure

The SignWriting ecosystem includes a substantial body of maintained code across multiple languages.

Primary development is organized through the `sutton-signwriting` GitHub organization and related repositories, including:

- core libraries in JavaScript, Python, and PHP
- rendering and font systems
- web components and client applications
- API and platform development
- tools such as SignMaker, SignPuddle viewers, and related utilities

Key characteristics include:

- cross-language implementation
- open-source licensing
- active development and maintenance
- production use in tools, websites, and research contexts

This is a mature technical foundation, not a prototype environment.

## Data and corpus assets

One of the most significant infrastructure components is the accumulated SignWriting data.

This includes:

- SignPuddle dictionaries and datasets
- SPML (SignPuddle Markup Language) files
- millions of sign entries across languages
- structured lexical and textual resources
- literature collections, including educational and religious texts

Key characteristics include:

- community-generated and internationally sourced data
- accumulation over roughly two decades
- preservation through multiple format migrations
- partial normalization and structure already present

This dataset represents a rare, large-scale corpus of written signed language.

Immediate stewardship concerns include:

- long-term preservation
- format standardization
- metadata and indexing
- controlled access pathways for research use

For an academic host, that is not just a maintenance burden.

It is also a serious research asset.

## Standards and encoding infrastructure

The technical foundation of SignWriting includes formal encoding systems and specifications:

- International SignWriting Alphabet 2010 (`ISWA 2010`)
- Formal SignWriting in ASCII (`FSW`)
- SignWriting in Unicode (`SWU`)
- associated fonts and rendering systems

These systems:

- enable machine-readable SignWriting
- support searching, sorting, and processing
- integrate with modern web and programming environments

Together they represent a complete and stable encoding framework for written signed language.

Stewardship responsibilities include:

- maintaining compatibility across formats
- documenting specifications
- supporting implementation across tools and languages
- preserving the link between formal standards and production systems

This standards layer is one of the clearest reasons to treat the work as long-term scholarly and technical infrastructure.

## Continuity and responsibility

Current responsibility follows a recognizable lineage:

- Valerie Sutton as originator of Sutton SignWriting and foundational system design
- Steve Slevinski as technical steward, encoding architect, and infrastructure maintainer
- a designated next-generation technical path for future continuity

This continuity includes:

- technical knowledge transfer
- operational responsibilities across domains, servers, and code
- preservation of standards, datasets, and public-facing systems

The issue is not that continuity is absent.

The issue is that the current stewardship model is still too informal for infrastructure of this scope and importance.

## Risk profile

With a clearer internal view, the primary risks can be stated more directly:

- concentration of operational knowledge
- dependence on a very small number of maintainers
- incomplete documentation of systems and workflows
- limited institutional redundancy
- long-term preservation risk for data, domains, and services

These are typical risks for infrastructure that has grown in value faster than the stewardship around it.

| Risk | Current impact | First mitigation |
| --- | --- | --- |
| Single-maintainer dependency | Continuity risk for domains, services, data, and technical decisions | Documentation plus a backup maintainer path |
| Legacy server continuity risk | Outages or slowdowns under real use, bot pressure, and CPU-heavy requests | Monitoring, rate limiting, caching, and migration planning |
| Data preservation | Loss, corruption, or inaccessible archives would weaken research and community use | Scheduled backups, checksums, and recovery testing |
| Domain continuity | Public resources could become unstable or difficult to recover | Renewal calendar, ownership documentation, continuity plan |
| Documentation gaps | New collaborators cannot onboard reliably | Deployment, architecture, and workflow documentation |
| Partner confidence | International collaborators may hesitate if infrastructure looks informal | Clear stewardship model, status reporting, and service priorities |

The situation is not unusual because the work is weak.
It is unusual because the work has become significant without yet receiving the stronger host structure it requires.

## Why this matters for a host institution

This level of asset maturity changes the institutional question.

A host institution would not be:

- funding an idea
- starting from zero
- being asked to invent relevance after the fact

It would be:

- stabilizing and extending an existing globally used infrastructure system
- inheriting a research-ready and partnership-ready technical base
- making preservation, maintenance, and future grants more credible
- supporting preservation, maintenance, modernization, and research enablement as one connected program

This reduces startup cost and increases:

- grant readiness
- collaboration potential
- research applicability
- educational and public-impact value

## Relationship to Platform V3

Platform V3 means the next integrated web and application architecture for Sutton SignWriting tools, services, accounts, and data workflows.

It is the next architectural layer, not the starting point.

The existing infrastructure already includes domains, systems, code, data, and standards.
Platform V3 is the opportunity to:

- modernize the service layer
- improve user registration and access patterns
- support institutional and educational use more effectively
- create a better base for AI, translation, and research workflows

In other words, Platform V3 extends the infrastructure.
It does not create it from nothing.

For the shortest stewardship summary, see *Executive Brief*. For the research-facing bridge into study design and cumulative science, see *Sutton SignWriting Language and Literacy Research: Research Program for Literacy Without Sound*.
