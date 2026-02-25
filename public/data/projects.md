# STAR Projects

## Generative AI for Banking Customer Service — Amelia (SNB)

### Situation
During my tenure as Engagement Manager at Amelia, I led a transformative initiative for a major banking client whose call center was overwhelmed with high call volumes, extended wait times, rising operational costs, and declining customer satisfaction. They needed to automate responses to common requests across 60 distinct use cases while maintaining the accuracy and trust that banking customers require.

### Task
Develop and deploy a comprehensive generative AI system to revolutionize the bank's customer service hotline. My responsibilities spanned the complete deployment lifecycle: stakeholder engagement with bank executives and IT teams, overseeing architecture design, ensuring regulatory compliance and PII protection, managing go-live, and continuous performance monitoring across a 9-month engagement.

### Action
Started with an honest data-driven assessment — analyzed 500,000+ historical call transcripts and discovered the top 5 request types accounted for 80% of call volume. Rather than agreeing to the client's original scope of all 60 use cases simultaneously, I challenged their assumptions with data and proposed a phased approach. This uncomfortable but accurate recommendation became the foundation of our trusted partnership. Designed the AI architecture with fine-tuned LLMs for banking terminology, TTS/STT voice integration, and a dialogue management system for multi-turn conversations and warm human handoffs. During pre-launch, discovered a security vulnerability in the telephony integration — immediately halted the deployment despite go-live pressure, called the bank's CTO at 11 PM, and proposed a 48-hour delay for security patches. When model accuracy later dropped to 89% post-launch, I personally took ownership, implemented additional RLHF protocols, reviewed 1,000+ customer interactions, and created a real-time transparency dashboard showing both successes and areas needing improvement.

### Result
- **78% decrease** in calls requiring human agent transfer
- Average customer wait time reduced from **8.5 minutes to 12 seconds**
- **94% first-call resolution rate** for top 5 customer request categories
- **96.8% accurate response rate** across all automated interactions
- Net Promoter Score increased from **6.2 to 8.9**
- **340% increase** in self-service transaction completions
- **65% reduction** in call center operational costs ($2.3M annual savings)
- **312% ROI** within the first 8 months
- Client elevated me from vendor to trusted strategic advisor; when they acquired another institution, they specifically requested I lead the integration

---

## Insurance "Hello to Quote" Conversational AI — Amelia (Liberty Mutual)

### Situation
At IPsoft (now Amelia.ai), a major insurance company contracted us to convert their "Hello to Quote" online form into a conversational AI experience. The existing form had low completion rates, high abandonment due to insurance terminology complexity, and no contextual guidance. The conventional form-to-chatbot approach being planned wouldn't deliver the experience their customers actually needed.

### Task
As Implementation Manager, I recognized that following the original project scope would produce a mediocre outcome. My task was to reconstruct the use case from a true conversational AI perspective, drive innovation using IPsoft's newest (and still unstable) cognitive AI engine, create technical specifications for new platform functionality, and deliver measurable improvements — while managing competing stakeholder expectations between the client, company leadership, and end users.

### Action
Launched a deliberate "skunk project" — going beyond the original contract scope to deliver exceptional customer value. Conducted deep-dive analysis of the insurance quoting process, identified 15+ interaction patterns needed for natural dialogue, and created comprehensive specs for new AI capabilities. Established daily standups with the CEO and Head of R&D to drive rapid platform innovation, advocating for customer needs even when it meant challenging executive priorities. Ran daily disambiguation sessions with the insurance company to deeply understand their customer workflows. Integrated LexisNexis data services to pre-populate customer information and reduce friction. Built a rapid prototyping methodology to validate improvements iteratively despite frequent platform instability.

### Result
- Query Completion Rate improved from **40% (form) to 60% (conversational AI)** — a 50% increase
- Resolution rate **20% higher than projected**
- **150 successful conversations per week** in Ohio pilot alone
- **85% customer satisfaction** vs. 62% for the original form
- **45% reduction** in customer support calls due to real-time AI guidance
- **25% faster** quote completion time vs. linear form
- **12 new AI engine capabilities** developed and adopted as platform standards
- **$1.8M contract expansion** based on pilot success
- Skunk project approach accepted by client and established as reference case for insurance vertical

---

## AI Deployment Across 1,500 Retail Stores — OneReach.ai (Discount Tire)

### Situation
As Technical Account Manager at OneReach.ai, I led the most ambitious deployment in the company's history — rolling out our AI solution across a major retail client's entire network of 1,500 stores nationwide. The client had built their reputation on exceptional customer service, and any disruption during transition could damage decades of customer relationships.

### Task
Roll out the AI solution to 1,500 stores within 12 months with zero degradation to existing customer service standards, 99.9% uptime across all locations, and a deployment process designed entirely around minimizing end-customer disruption — while managing diverse store demographics, peak traffic patterns, and a real-time operational environment.

### Action
Implemented a customer-obsessed methodology. Rather than treating all 1,500 stores identically, developed customer-centric store segmentation based on demographics, peak service times, satisfaction scores, and local market characteristics. Built a rigorous customer experience checklist as the pre-deployment gate, with deployment windows designed around traffic patterns. Created comprehensive store team training materials positioning AI as a service enhancer, not a replacement. Executed a canary release strategy with real-time customer satisfaction monitoring, immediate feedback loops, and instant rollback capability treated as a hard deployment blocker — not a fallback. Ran Black Friday-level peak load simulations before any store went live.

### Result
- Completed all **1,500 store deployments in 11 months** — one month ahead of schedule
- Customer satisfaction scores increased **18%** across deployed stores
- Average service resolution time improved **34%** with no loss of personal touch
- **Zero negative customer impact** throughout the entire deployment
- **99.97% uptime** across all locations (exceeded 99.9% target)
- Customer complaints decreased **45%**; unsolicited positive feedback increased **340%**
- Employee satisfaction increased **28%**, directly correlating with customer experience gains
- Same-store customer return rates improved **19%** year-over-year

---

## Multi-Bot Orchestration for Enterprise Client — OneReach.ai (Pepsi)

### Situation
A large enterprise client was struggling with fragmentation across their internal support systems. Employees had to navigate between three separate chatbots — a ServiceNow bot for IT, a Lisa bot for HR, and a RAG system for general knowledge — creating confusion, reducing productivity, and driving poor adoption of digital support tools. The client wanted a unified interface but was uncertain about the best technical approach and concerned about complexity, cost, and timeline.

### Task
Design and evaluate different architectural approaches for a unified chatbot orchestration system. I needed to develop multiple proof-of-concept solutions, compare their effectiveness and resource requirements, provide clear cost and timeline assessments, and create a technical foundation that would accelerate the main project implementation.

### Action
Structured the evaluation as three focused POC developments testing distinct orchestration strategies:
- **POC 1 — Parallel Processing:** Simultaneously queried all three bots and selected based on confidence score comparison. Result: 87% accuracy, 2.3s latency, $12K/month operational cost.
- **POC 2 — Classification Orchestrator:** Implemented a BERT-based NLP classifier to pre-categorize queries before routing. Result: 92% accuracy, 0.8s latency, $7K/month.
- **POC 3 — Hierarchical Confidence Thresholding:** Built a cascading system querying bots in priority order until a confidence threshold was met. Result: 89% accuracy, 0.7–1.5s latency, $4K/month.

Created a detailed comparison matrix covering accuracy, latency, cost, scalability, and maintenance, then presented findings with clear trade-off analysis and a recommendation for POC 2 as the optimal balance.

### Result
- Client made architecture decision in **2 weeks** instead of an estimated 2-month analysis process
- Main implementation started **6 weeks earlier** than originally planned
- POC code reduced development time by **30%** by providing a proven foundation
- **40% reduction** in support ticket volume from improved self-service adoption
- **180% increase** in employee usage of chat support due to the unified interface
- IT and HR support teams reported **35% reduction** in routine inquiries
- **$300K annual savings** in support costs through improved automation
- POC evaluation methodology was adopted as a standard practice for future architecture decisions
