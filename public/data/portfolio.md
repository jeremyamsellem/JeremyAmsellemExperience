# Portfolio

## GenAI Content Validation System — Social Native

### Situation
As Product Manager at Social Native — a platform connecting brands with social media influencers — the manual review process for influencer-submitted content was becoming unsustainable. As influencers shifted from static images to high-volume short-form videos, the labor-intensive approval workflow created bottlenecks that slowed campaign fulfillment and drove up operational costs.

### Challenges
- Increasing video content volume made manual review costly and unscalable
- Slow approval cycles directly delayed brand campaign launches
- Inconsistent content quality across campaigns risked brand reputation
- Needed C-suite buy-in and engineering alignment on an ambitious timeline

### Approach
Led the end-to-end development of an AI-powered content suggestion and validation system. Started with extensive data collection — analyzing historical approved and rejected media to identify patterns. Presented projected ROI to C-suite executives to secure buy-in, then adopted an Agile methodology with two-week sprints. Prioritized image validation as the POC due to resource constraints, ran the AI validator in parallel with the manual team, and executed a phased rollout starting with beta brands. Manual reviewers shifted from initial approvals to validating AI results, creating a continuous feedback loop.

### Results and Impact
- Campaigns completed **5x faster** due to drastically reduced media validation time
- Brands received picture validation against guidelines within **1 hour** of submission
- **10% increase** in campaign requests from beta brands
- Influencers received rejection feedback within an hour, improving creator satisfaction
- Workforce reallocated from manual review to random AI verification, reducing direct review headcount
- Success immediately extended to video approval, validating the methodology's scalability

### Key Takeaways
Getting leadership buy-in required speaking in ROI terms before touching any technical specification. Building trust with a phased rollout — running AI in parallel with human reviewers — made the transition seamless and built organizational confidence in the system.

---

## Healthcare AI Platform Deployment — Hyro.ai

### Situation
As Senior Solution Architect at Hyro.ai, I led the deployment of Hyro's Generative AI platform to replace a large healthcare institution's traditional IVR system. The client was a complex organization comprising multiple hospitals and numerous clinics. The core challenge was not technical complexity — it was an aggressive 100-day deadline from contract signing to product launch.

### Challenges
- 100-day timeline for a full system replacement in a complex healthcare environment
- Client infrastructure significantly more intricate than Hyro's standard deployment profile
- Required integrating two disparate information systems (telephony, CRM, system of record)
- Needed rapid stakeholder alignment across a large, siloed organization
- Defining MVP scope while managing scope creep and edge cases

### Approach
Immediately identified key decision-makers on the client side and established weekly steering meetings throughout the 100 days. Organized an onsite workshop to handle initial setup — telephony integration, CRM integration, system of record integration, and warm handoff protocols — which also empowered a core team of client testers committed to continuous testing. Before each use case implementation, ran discovery sessions with relevant SMEs to define the MVP, formally documenting and accepting deferred edge cases to prevent scope creep without losing track of future enhancements.

### Results and Impact
- Launched MVP in **78 days** from contract signing — a new company record
- Client witnessed measurable positive impact from the AI assistant within a single quarter
- Onsite workshop process was standardized internally as a blueprint for future deployments
- Hyro formally adopted the fast-track onsite workshop initiative company-wide
- Post-launch monitoring identified an unexpected call volume spike to the PCC hotline; root cause was identified and resolved rapidly, further strengthening client trust

### Key Takeaways
In complex enterprise deployments, speed comes from stakeholder clarity, not technical shortcuts. Investing early in the right people — both internal champions and client testers — compressed the timeline more than any technical optimization could.

---

## Conversational Tax Optimization Platform — Startup Advisory (Jamselle Consulting)

### Situation
A fintech startup with deep domain expertise in tax law approached me to build the technical infrastructure for their vision: an intelligent conversational system that could guide users through complex tax scenarios via natural language. The company was preparing for a Series A raise and needed a working demonstration to prove viability to investors.

### Challenges
- Non-technical founding team needed complex AI architecture translated into business terms
- System needed to handle both structured tax law data and unstructured financial assessments
- Tight delivery timeline: POC in 2 months, MVP in 4 months
- Solution had to be compelling enough to differentiate in a competitive investor environment

### Approach
Structured the project into five phases: technology assessment, architecture design, POC development, MVP development, and investor demo preparation. Evaluated Dialogflow, Microsoft Bot Framework, Rasa, and OpenAI's GPT models before selecting a hybrid approach using OpenAI for NLP with Amelia conversation management. Designed a hybrid RAG architecture combining Pinecone (vector DB for unstructured financial assessments) and Elasticsearch (structured tax law data). Conducted weekly demos with founders to iterate on UX, and prepared the founding team to speak to the technical architecture during investor conversations.

### Results and Impact
- Delivered POC in **8 weeks** and MVP in **16 weeks**, meeting all deadlines
- Conversation system handled complex multi-turn tax scenarios with **85% accuracy**
- Hybrid RAG architecture processed **50,000+ tax law documents** and personalized user assessments
- **78% conversation completion rate** with users averaging 12 minutes per session
- Startup raised **$2.3M Series A** — investors specifically cited the technical demo as a key differentiator
- Beta users reported **40% higher satisfaction** vs. existing tax software
- Architecture supported **500+ beta users** without performance degradation

### Key Takeaways
Working with non-technical founders requires constant translation between technical capability and business outcome. Every architectural decision had to be framed around investor narrative and user experience, not engineering elegance. That constraint actually produced a better product.

---

## Enterprise AI Rollout Across 1,500 Retail Stores — OneReach.ai

### Situation
As Technical Account Manager at OneReach.ai, I led what was the company's most ambitious deployment: rolling out our AI solution across a major retail client's entire network of 1,500 stores nationwide. The client had built their reputation on exceptional customer service, and any disruption during the transition could damage decades of customer relationships.

### Challenges
- Massive scale: 1,500 stores with diverse demographics, peak traffic patterns, and local market differences
- Zero tolerance for customer experience degradation during rollout
- New AI system had to enhance — not replace — the human-centered service customers valued
- 12-month deployment window with real-time customer operations running in parallel

### Approach
Implemented a customer-obsessed deployment methodology. Developed store segmentation based on customer demographics, peak service times, satisfaction scores, and local preferences — rather than a one-size-fits-all rollout. Built a customer experience checklist as the pre-deployment gate and designed deployment windows around traffic patterns. Trained store teams on AI as a service enhancer, not a replacement. Executed a canary release with real-time customer satisfaction monitoring, immediate feedback loops, and instant rollback capability as deployment blockers.

### Results and Impact
- Completed all **1,500 store deployments in 11 months** — one month ahead of schedule
- Customer satisfaction scores increased **18%** across deployed stores
- Average service resolution time improved **34%** while maintaining the personal touch
- Zero negative customer impact during the entire deployment
- **99.97% uptime** across all 1,500 locations
- Customer complaints decreased **45%**; positive unsolicited feedback increased **340%**
- Same-store customer return rates improved **19%** year-over-year

### Key Takeaways
At this scale, the deployment strategy matters more than the technology. Treating customer satisfaction as a hard deployment gate — not a KPI to report afterward — was the decision that made zero-downtime possible.

---

## Generative AI for Banking Customer Service — Amelia

### Situation
As Engagement Manager at Amelia, I led a transformative initiative for a major banking client whose call center was overwhelmed: extended wait times, rising operational costs, and declining customer satisfaction. They needed to automate responses to common requests while maintaining the accuracy and trust that banking customers require across 60 distinct use cases.

### Challenges
- Sensitive financial data requiring strict PII protection and regulatory compliance
- Wide query spectrum from simple balance checks to complex transaction disputes
- Performance requirements: sub-second response times with 99.5%+ accuracy
- Client's original scope (all 60 use cases simultaneously) was technically and operationally inefficient

### Approach
Started with an honest data-driven assessment: analyzed 500,000+ historical call transcripts and discovered the top 5 request types accounted for 80% of call volume. Rather than agreeing to the client's original scope, I challenged their assumptions and proposed a phased approach prioritizing highest-impact areas — an uncomfortable but accurate recommendation that ultimately built a trusted partnership. Designed the AI architecture with LLM fine-tuned for banking terminology, TTS/STT voice integration, and a dialogue management system capable of multi-turn conversations and warm handoffs to human agents. When a security vulnerability was discovered during pre-launch, I halted the deployment, called the bank's CTO at 11 PM, and proposed a 48-hour delay for security patches — prioritizing client security over the go-live deadline.

### Results and Impact
- **78% decrease** in calls requiring human agent transfer
- Average customer wait time reduced from **8.5 minutes to 12 seconds**
- **94% first-call resolution rate** for top 5 request categories
- **96.8% accurate response rate** across all automated interactions
- Net Promoter Score increased from **6.2 to 8.9**
- **340% increase** in self-service transaction completions
- **65% reduction** in call center operational costs (**$2.3M annual savings**)
- **312% ROI** within the first 8 months
- Client elevated me from vendor to trusted strategic advisor; when they acquired another institution, they specifically requested I lead the integration

### Key Takeaways
The most important technical decision on this project was a non-technical one: telling the client their original scope was wrong. Earning trust through uncomfortable honesty — backed by data — created a partnership that outlasted the initial engagement. Security is never a negotiable trade-off for timeline.
