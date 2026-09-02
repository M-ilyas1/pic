export const siteConfig = {
  name: "Partners in Care (Private) Limited",
  shortName: "Partners in Care",
  tagline: "Working Together for Healthier Communities",
  description:
    "A multidisciplinary public health, research, consultancy, capacity-building, project-management and care-support company based in Islamabad, Pakistan.",
  positioning:
    "Partners in Care connects research, evidence, professional expertise and compassionate support to help institutions, health programmes, communities and individuals achieve better health and development outcomes.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://partners-in-care.researchpeaks.chatgpt.site",
  email: "[Insert official email]",
  careersEmail: "[Insert careers email]",
  phone: "[Insert approved phone number]",
  whatsapp: "[Insert approved WhatsApp number]",
  address: "Office, Basement 12, Plaza 2000, I-8 Markaz, Islamabad, Pakistan",
  legal: {
    cuin: "0348175",
    incorporated: "30 July 2026",
    jurisdiction: "Islamabad Capital Territory, Pakistan",
    act: "Companies Act, 2017",
    structure: "Private company limited by shares",
  },
};

export const primaryNavigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Sectors", href: "/sectors" },
  { label: "Projects", href: "/projects" },
  { label: "Research & Insights", href: "/insights" },
];

export const secondaryNavigation = [
  { label: "Opportunities", href: "/opportunities" },
  { label: "Patient Support", href: "/patient-support" },
  { label: "Our Experts", href: "/experts" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Contact", href: "/contact" },
];

export const legalNavigation = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Website Disclaimer", href: "/disclaimer" },
  { label: "Medical Disclaimer", href: "/medical-disclaimer" },
  { label: "Research Ethics", href: "/research-ethics" },
  { label: "Safeguarding", href: "/safeguarding" },
  { label: "Anti-Fraud & Anti-Corruption", href: "/anti-fraud" },
  { label: "Conflict of Interest", href: "/conflict-of-interest" },
  { label: "Data Protection", href: "/data-protection" },
];

export const trustIndicators = [
  "Incorporated private limited company",
  "Islamabad-based",
  "Multidisciplinary expertise",
  "Evidence-driven solutions",
  "Ethical and client-centred approach",
];

export type Service = {
  slug: string;
  title: string;
  number: string;
  summary: string;
  covers: string[];
  audiences: string[];
  deliverables: string[];
  process: string[];
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: "public-health-consultancy",
    number: "01",
    title: "Public Health Consultancy",
    summary:
      "Practical, evidence-informed advisory support for health policies, programmes, systems and implementation challenges.",
    covers: [
      "Health-needs assessments",
      "Programme and policy reviews",
      "Health-system analysis",
      "Strategic and operational planning",
      "Implementation research",
      "Quality-improvement support",
    ],
    audiences: [
      "Government health departments",
      "Development partners",
      "NGOs",
      "Healthcare organizations",
    ],
    deliverables: [
      "Assessment reports",
      "Policy and strategy briefs",
      "Implementation roadmaps",
      "Quality-improvement plans",
    ],
    process: [
      "Clarify the decision or programme need",
      "Review evidence and local context",
      "Co-design practical options",
      "Support implementation and learning",
    ],
    benefits: [
      "Clearer priorities",
      "Context-appropriate solutions",
      "Decision-ready recommendations",
    ],
  },
  {
    slug: "research-data-services",
    number: "02",
    title: "Research & Data Services",
    summary:
      "Rigorous support across the research lifecycle—from a focused question to defensible analysis and clear dissemination.",
    covers: [
      "Research questions, protocols and proposals",
      "Literature, systematic and scoping reviews",
      "Quantitative, qualitative and mixed-methods research",
      "Survey and questionnaire design",
      "Data-management planning and statistical analysis",
      "Manuscript development and dissemination",
    ],
    audiences: [
      "Universities",
      "Research institutions",
      "Health programmes",
      "Researchers and students",
    ],
    deliverables: [
      "Protocols and proposals",
      "Search strategies and evidence syntheses",
      "Data-analysis plans and outputs",
      "Manuscripts, briefs and presentations",
    ],
    process: [
      "Define the question and intended use",
      "Agree methods and ethical requirements",
      "Collect or analyse quality-assured data",
      "Interpret and communicate findings",
    ],
    benefits: [
      "Methodological clarity",
      "Reproducible analysis",
      "Stronger research communication",
    ],
  },
  {
    slug: "monitoring-evaluation-learning",
    number: "03",
    title: "Monitoring, Evaluation & Learning",
    summary:
      "Measurement systems that explain progress, surface implementation issues and turn evidence into action.",
    covers: [
      "Theory of change and logical frameworks",
      "Indicator development",
      "Baseline and endline studies",
      "Process and outcome evaluations",
      "Implementation-fidelity assessment",
      "Learning agendas, dashboards and reporting systems",
    ],
    audiences: [
      "Donors",
      "Development programmes",
      "NGOs",
      "Public-sector institutions",
    ],
    deliverables: [
      "MEL frameworks",
      "Indicator reference sheets",
      "Evaluation protocols and reports",
      "Dashboards and learning briefs",
    ],
    process: [
      "Map the programme logic",
      "Define credible indicators and sources",
      "Collect and validate evidence",
      "Facilitate learning and adaptation",
    ],
    benefits: [
      "Better accountability",
      "Earlier identification of delivery gaps",
      "More useful programme learning",
    ],
  },
  {
    slug: "project-design-management",
    number: "04",
    title: "Project Design & Management",
    summary:
      "End-to-end support to shape feasible projects, coordinate delivery and close the loop between plans, results and learning.",
    covers: [
      "Concept notes, grants and proposals",
      "Work plans and budget-planning support",
      "Risk and stakeholder management",
      "Field implementation",
      "Documentation and reporting",
      "Project close-out and learning",
    ],
    audiences: [
      "Government programmes",
      "Donors",
      "NGOs",
      "Academic and private-sector teams",
    ],
    deliverables: [
      "Project designs and proposals",
      "Implementation plans",
      "Risk registers",
      "Progress and close-out reports",
    ],
    process: [
      "Frame the problem and stakeholders",
      "Build the delivery and resource plan",
      "Coordinate implementation",
      "Track, report and adapt",
    ],
    benefits: [
      "Stronger delivery discipline",
      "Visible risks and responsibilities",
      "Better documentation and continuity",
    ],
  },
  {
    slug: "training-capacity-building",
    number: "05",
    title: "Training & Capacity Building",
    summary:
      "Practical learning experiences tailored to professional roles, institutional needs and real delivery challenges.",
    covers: [
      "Public-health and research-methods training",
      "Data-analysis and MEL training",
      "Proposal-writing workshops",
      "Project-management training",
      "Leadership and team development",
      "Customized institutional training",
    ],
    audiences: [
      "Health professionals",
      "Programme teams",
      "Researchers",
      "Managers and field staff",
    ],
    deliverables: [
      "Training-needs assessments",
      "Facilitator and participant materials",
      "Workshops and coaching",
      "Competency and learning assessments",
    ],
    process: [
      "Assess role and performance needs",
      "Design applied learning",
      "Deliver and facilitate practice",
      "Evaluate learning and follow-through",
    ],
    benefits: [
      "Relevant skills",
      "Shared ways of working",
      "Improved institutional capability",
    ],
  },
  {
    slug: "health-system-strengthening",
    number: "06",
    title: "Health-System Strengthening",
    summary:
      "Structured improvement support for services, workflows, workforce arrangements, referral pathways and community systems.",
    covers: [
      "Service-delivery assessments",
      "Process mapping and quality improvement",
      "Lean Six Sigma applications",
      "Workforce optimization",
      "Referral pathways",
      "Community-health and primary-healthcare strengthening",
    ],
    audiences: [
      "Health departments",
      "Hospitals",
      "Primary-healthcare networks",
      "Development programmes",
    ],
    deliverables: [
      "Current-state process maps",
      "Waste and bottleneck analyses",
      "Improvement charters",
      "Referral and control plans",
    ],
    process: [
      "Observe the system and users",
      "Map flow, delays and failure points",
      "Test prioritized improvements",
      "Standardize and monitor gains",
    ],
    benefits: [
      "Clearer patient and service flow",
      "Reduced avoidable waste",
      "More reliable delivery",
    ],
  },
  {
    slug: "patient-navigation-support",
    number: "07",
    title: "Patient Navigation & Support",
    summary:
      "Compassionate, non-clinical help for understanding service options, organizing next steps and maintaining continuity of care.",
    covers: [
      "Explaining available health-service options",
      "Navigation to appropriate healthcare providers",
      "Appointment and referral information",
      "Health-education materials",
      "Continuity-of-care support",
      "Connections to relevant services",
    ],
    audiences: [
      "Patients",
      "Families and caregivers",
      "Community organizations",
      "Healthcare programmes",
    ],
    deliverables: [
      "Navigation plans",
      "Referral information",
      "Appointment-support information",
      "Patient-friendly education materials",
    ],
    process: [
      "Listen to the non-emergency support need",
      "Clarify suitable service options",
      "Share practical referral information",
      "Support follow-through where agreed",
    ],
    benefits: [
      "Clearer next steps",
      "Better-informed care seeking",
      "Improved continuity",
    ],
  },
  {
    slug: "human-resource-institutional-development",
    number: "08",
    title: "Human-Resource & Institutional Development",
    summary:
      "Structured support for organizations to define roles, strengthen workforce systems and improve institutional practice.",
    covers: [
      "Workforce planning",
      "Job descriptions and competency frameworks",
      "Training-needs assessments",
      "Recruitment-process and candidate-screening support",
      "Organizational assessments",
      "Policy and procedure development",
    ],
    audiences: [
      "Health and development organizations",
      "Project teams",
      "Academic institutions",
      "Private-sector organizations",
    ],
    deliverables: [
      "Workforce plans",
      "Role and competency packs",
      "Assessment reports",
      "Policies and standard procedures",
    ],
    process: [
      "Assess organizational needs",
      "Define roles, standards and gaps",
      "Develop practical systems",
      "Support adoption and review",
    ],
    benefits: [
      "Clearer accountabilities",
      "More consistent people processes",
      "Institutional resilience",
    ],
  },
  {
    slug: "community-humanitarian-support",
    number: "09",
    title: "Community & Humanitarian Support",
    summary:
      "Planning and operational support for community engagement, preparedness, health awareness and lawful disaster-response activities.",
    covers: [
      "Community-needs assessment",
      "Emergency and disaster-response planning",
      "Community engagement",
      "Volunteer coordination",
      "Health-awareness activities",
      "Operational and event support",
    ],
    audiences: [
      "Communities",
      "Civil-society organizations",
      "Humanitarian programmes",
      "Public-sector partners",
    ],
    deliverables: [
      "Needs assessments",
      "Response and engagement plans",
      "Volunteer and activity protocols",
      "Operational documentation",
    ],
    process: [
      "Assess needs and local capacity",
      "Coordinate with authorized stakeholders",
      "Plan safe and inclusive action",
      "Document delivery and learning",
    ],
    benefits: [
      "Locally informed planning",
      "Safer coordination",
      "Stronger community participation",
    ],
  },
];

export const sectors = [
  {
    title: "Government & public-sector health",
    description:
      "Support for assessments, strategy, implementation planning, quality improvement, workforce systems and learning—aligned with public mandates and approval processes.",
  },
  {
    title: "Donors & development partners",
    description:
      "Locally grounded technical input for programme design, due diligence, MEL, implementation support, reporting and adaptive learning.",
  },
  {
    title: "NGOs & civil society",
    description:
      "Practical support for proposals, programme systems, community engagement, capacity building, evaluation and accountable delivery.",
  },
  {
    title: "Hospitals & healthcare organizations",
    description:
      "Service-flow assessment, quality improvement, referral pathways, staff development and patient-navigation design without replacing licensed clinical functions.",
  },
  {
    title: "Universities & research institutions",
    description:
      "Collaboration on protocols, evidence synthesis, field methods, analysis, dissemination and research-capacity development.",
  },
  {
    title: "Private-sector organizations",
    description:
      "Health and development advisory, workforce training, programme design and responsible community-investment support.",
  },
  {
    title: "Communities & welfare organizations",
    description:
      "Needs assessment, inclusive engagement, health awareness, referral information and community-centred programme planning.",
  },
  {
    title: "Researchers & students",
    description:
      "Methodological guidance, research planning, ethical data workflows, analysis support and scholarly communication.",
  },
  {
    title: "Patients & families",
    description:
      "Non-emergency navigation, referral and appointment information, patient-friendly education and continuity support.",
  },
];

export const focusAreas = [
  "Public health",
  "Primary healthcare",
  "Maternal and child health",
  "Immunization",
  "Nutrition",
  "Mental health",
  "Noncommunicable diseases",
  "Health research",
  "Community development",
  "Humanitarian and disaster response",
  "Digital health",
  "Social and behavioural change",
];

export const workSteps = [
  {
    number: "01",
    title: "Understand",
    text: "Listen carefully, define the decision or support need, and examine the operating context.",
  },
  {
    number: "02",
    title: "Co-design",
    text: "Develop feasible options with the people who will use, deliver or be affected by them.",
  },
  {
    number: "03",
    title: "Implement",
    text: "Translate plans into coordinated action with clear roles, safeguards and documentation.",
  },
  {
    number: "04",
    title: "Measure",
    text: "Track delivery, quality, outcomes and experience using fit-for-purpose evidence.",
  },
  {
    number: "05",
    title: "Improve",
    text: "Use findings and feedback to adapt, strengthen and sustain what works.",
  },
];

export const values = [
  ["Care", "We treat people’s needs, dignity and experience as central to good work."],
  ["Integrity", "We communicate honestly, protect confidentiality and act within our competence."],
  ["Partnership", "We work with clients and communities, not simply for them."],
  ["Evidence", "We use appropriate data, research and professional judgement."],
  ["Equity", "We consider who is reached, who is excluded and how barriers can be reduced."],
  ["Excellence", "We pursue clear methods, dependable delivery and useful outputs."],
  ["Accountability", "We make responsibilities visible and remain answerable for our commitments."],
  ["Innovation", "We test practical improvements without losing sight of context or safety."],
];

export const projects = [
  {
    category: "Current Initiatives",
    title: "Project information to be added after authorization.",
    status: "Awaiting approved project information",
  },
  {
    category: "Projects Under Development",
    title: "Project information to be added after authorization.",
    status: "Concepts will be published after internal approval",
  },
  {
    category: "Partnership Opportunities",
    title: "Project information to be added after authorization.",
    status: "Open areas will be announced here",
  },
  {
    category: "Completed Projects",
    title: "Project information to be added after authorization.",
    status: "No completed company projects are claimed at launch",
  },
];

export const projectCategories = [
  "All",
  "Public health",
  "Research",
  "Monitoring and evaluation",
  "Capacity building",
  "Community health",
  "Health-system strengthening",
  "Humanitarian response",
];

export const insightExamples = [
  {
    type: "Draft website-content example",
    topic: "Health systems",
    year: "2026",
    title: "From Evidence to Implementation: Five Questions for Stronger Health Programmes",
    summary:
      "An example of how future practical insight articles may translate evidence into programme decisions.",
  },
  {
    type: "Draft website-content example",
    topic: "Monitoring & evaluation",
    year: "2026",
    title: "Designing Indicators That Teams Can Actually Use",
    summary:
      "An example article focused on useful definitions, feasible data sources and learning-oriented reporting.",
  },
  {
    type: "Draft website-content example",
    topic: "Community care",
    year: "2026",
    title: "Why Patient Navigation Matters Across the Continuum of Care",
    summary:
      "An example explainer on non-clinical guidance, referral information and continuity support.",
  },
];

export const opportunityTypes = [
  ["Consultancy opportunities", "Short- and long-term technical assignments will be posted after approval."],
  ["Employment opportunities", "Approved vacancies will include role scope, criteria, location and deadline."],
  ["Internship opportunities", "Structured learning opportunities may be offered as organizational capacity grows."],
  ["Research collaboration", "Researchers and institutions may propose aligned, ethical collaborations."],
  ["Expert registration", "Professionals can register interest for future assignments through the expert-network form."],
  ["Vendor registration", "Suppliers may express interest for future transparent procurement processes."],
  ["Volunteer opportunities", "Any approved volunteer role will include safeguards, supervision and clear boundaries."],
];

export const expertCategories = [
  ["Leadership", "[Insert approved leadership profile and photograph]"],
  ["Core team", "[Insert approved core-team biographies and qualifications]"],
  ["Technical consultants", "[Insert approved consultant profiles]"],
  ["Research associates", "[Insert approved research-associate profiles]"],
  ["Clinical advisers", "[Insert approved adviser profiles and registration details where relevant]"],
  ["Monitoring & evaluation experts", "[Insert approved MEL expert profiles]"],
  ["Training facilitators", "[Insert approved facilitator profiles]"],
];

export const partnershipTypes = [
  ["Government collaboration", "Technical cooperation aligned with public priorities, approvals and accountability requirements."],
  ["Donor-funded projects", "Design, implementation, monitoring, learning and reporting support for approved programmes."],
  ["Academic collaboration", "Ethical research, knowledge exchange, training and dissemination partnerships."],
  ["NGO partnerships", "Complementary expertise for community-centred programme design and delivery."],
  ["Healthcare partnerships", "Quality improvement, referral, workforce and patient-navigation initiatives within appropriate professional boundaries."],
  ["Corporate social responsibility", "Evidence-informed health and community-development initiatives with transparent objectives."],
  ["Independent consultant collaboration", "Flexible multidisciplinary teams assembled for defined assignments and deliverables."],
];

export const patientFaqs = [
  {
    question: "Do you diagnose or treat medical conditions?",
    answer:
      "No. Partners in Care provides non-clinical navigation, information and care-coordination support. Diagnosis and treatment must be provided by appropriately licensed healthcare professionals.",
  },
  {
    question: "Can you help me choose where to seek care?",
    answer:
      "We can help clarify available service types and share referral or appointment information. We do not guarantee availability, clinical suitability or outcomes.",
  },
  {
    question: "What information should I submit?",
    answer:
      "Share only the minimum information needed for us to understand your navigation request. Do not submit emergency information or detailed medical records through the general website form.",
  },
  {
    question: "What should I do in an emergency?",
    answer:
      "Immediately contact your nearest emergency department or the relevant local emergency service. Do not wait for a website response.",
  },
];

export const pageMetadata: Record<
  string,
  { title: string; description: string; keywords: string[] }
> = {
  home: {
    title: "Public Health & Research Consultancy in Pakistan",
    description:
      "Partners in Care provides public health consultancy, research, MEL, training, project management and patient-navigation support from Islamabad, Pakistan.",
    keywords: [
      "Public health consultancy Pakistan",
      "Healthcare consultancy Islamabad",
      "Research consultancy Pakistan",
    ],
  },
  about: {
    title: "About Partners in Care",
    description:
      "Learn about Partners in Care (Private) Limited, our purpose, values, legal status and commitment to ethical, evidence-driven health and development work.",
    keywords: ["Healthcare consultancy Islamabad", "Public health company Pakistan"],
  },
  services: {
    title: "Public Health, Research & Project Services",
    description:
      "Explore consultancy, research, MEL, project-management, training, health-system strengthening and patient-navigation services in Pakistan.",
    keywords: [
      "Public health research services",
      "Monitoring and evaluation consultants Pakistan",
      "Health project management Pakistan",
    ],
  },
  sectors: {
    title: "Sectors We Support",
    description:
      "Professional health and development support for government, donors, NGOs, healthcare organizations, universities, communities and researchers.",
    keywords: ["NGO consultancy services Pakistan", "Healthcare consultancy Islamabad"],
  },
  projects: {
    title: "Projects & Partnership Opportunities",
    description:
      "View authorized Partners in Care initiatives, projects under development and future partnership opportunities.",
    keywords: ["Health project management Pakistan", "Public health projects Pakistan"],
  },
  insights: {
    title: "Research & Insights",
    description:
      "A developing knowledge hub for public-health articles, policy briefs, technical resources, opportunities and organizational updates.",
    keywords: ["Public health research services", "Health research Pakistan"],
  },
  opportunities: {
    title: "Careers, Consultancies & Expert Network",
    description:
      "Explore future consultancy, employment, internship, collaboration, vendor and expert-network opportunities.",
    keywords: ["Public health consultant opportunities Pakistan", "Health research jobs Pakistan"],
  },
  "patient-support": {
    title: "Patient Navigation & Support",
    description:
      "Request non-emergency healthcare navigation, referral information, appointment support and continuity-of-care guidance in Pakistan.",
    keywords: ["Patient-navigation support Pakistan", "Healthcare navigation Islamabad"],
  },
  experts: {
    title: "Our Experts",
    description:
      "Meet the multidisciplinary leadership, consultants, researchers, advisers and facilitators supporting Partners in Care.",
    keywords: ["Public health consultants Pakistan", "Research consultants Pakistan"],
  },
  partnerships: {
    title: "Partner With Us",
    description:
      "Discuss government, donor, academic, NGO, healthcare, CSR or independent-consultant collaboration with Partners in Care.",
    keywords: ["NGO consultancy services Pakistan", "Public health partnerships Pakistan"],
  },
  contact: {
    title: "Contact & Request a Proposal",
    description:
      "Contact Partners in Care in Islamabad or submit a consultancy, proposal, partnership or patient-support inquiry.",
    keywords: ["Healthcare consultancy Islamabad", "Request health consultancy proposal Pakistan"],
  },
  search: {
    title: "Search",
    description: "Search Partners in Care services, sectors, resources and support pages.",
    keywords: ["Partners in Care search"],
  },
};

export const legalPolicies: Record<
  string,
  {
    title: string;
    summary: string;
    sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  }
> = {
  privacy: {
    title: "Privacy Policy",
    summary:
      "This draft explains how Partners in Care may collect, use, protect and retain personal information submitted through this website.",
    sections: [
      {
        heading: "Information we collect",
        paragraphs: [
          "We may collect contact details, organization information, professional information, inquiry content, consent records and files that you choose to submit.",
          "Patient-support users should provide only the minimum information required for non-emergency navigation. The website is not intended for detailed medical records.",
        ],
      },
      {
        heading: "How information may be used",
        paragraphs: [
          "Information may be used to respond to inquiries, assess service requests, manage proposals, consider expert-network applications, administer relationships and meet lawful obligations.",
        ],
      },
      {
        heading: "Retention and deletion",
        paragraphs: [
          "Form submissions should be retained only as long as needed for the stated purpose, normally no longer than 180 days for unanswered or inactive inquiries unless a longer period is required by law, contract, safeguarding, audit or dispute-management needs.",
          "Approved operational procedures must define routine review and secure deletion before launch.",
        ],
      },
      {
        heading: "Your choices",
        paragraphs: [
          "Subject to applicable law, individuals may request access, correction or deletion by contacting [Insert privacy contact email]. Identity may need to be verified before acting on a request.",
        ],
      },
    ],
  },
  terms: {
    title: "Terms and Conditions",
    summary:
      "These draft terms govern use of the public Partners in Care website and do not themselves create a consultancy, clinical or employment relationship.",
    sections: [
      {
        heading: "Website use",
        paragraphs: [
          "Users may access public information for lawful purposes. Content must not be misused, copied in a misleading way, disrupted or used to attempt unauthorized access.",
        ],
      },
      {
        heading: "No automatic engagement",
        paragraphs: [
          "Submitting a form, CV or proposal request does not create a contract, partnership, employment relationship, clinical relationship or obligation to accept work. Any engagement requires separate written agreement and authorization.",
        ],
      },
      {
        heading: "Intellectual property",
        paragraphs: [
          "Unless otherwise stated, website text, visual identity and original resources belong to Partners in Care. Third-party material remains subject to its own rights and licences.",
        ],
      },
    ],
  },
  cookies: {
    title: "Cookie Policy",
    summary:
      "This draft describes essential website storage and any optional analytics that may be activated after consent configuration.",
    sections: [
      {
        heading: "Essential storage",
        paragraphs: [
          "The website may use strictly necessary storage for security, form integrity and remembering a user’s cookie choice.",
        ],
      },
      {
        heading: "Optional analytics",
        paragraphs: [
          "Analytics must remain disabled until an approved provider, lawful basis, consent mechanism and data-processing settings are confirmed. The current build contains only an integration placeholder.",
        ],
      },
      {
        heading: "Managing preferences",
        paragraphs: [
          "Users can accept or decline optional analytics through the cookie banner and can clear stored preferences through their browser.",
        ],
      },
    ],
  },
  disclaimer: {
    title: "Website Disclaimer",
    summary:
      "Public website information is provided for general organizational and educational purposes.",
    sections: [
      {
        heading: "General information",
        paragraphs: [
          "Content does not constitute legal, financial, clinical or other regulated professional advice. Specific advice requires a separately agreed scope and appropriately qualified professionals.",
        ],
      },
      {
        heading: "Accuracy and availability",
        paragraphs: [
          "Reasonable efforts may be made to keep information current, but completeness, uninterrupted availability and suitability for a particular purpose are not guaranteed.",
        ],
      },
      {
        heading: "Third-party information",
        paragraphs: [
          "References or links to external services do not imply endorsement. Users should independently verify third-party information.",
        ],
      },
    ],
  },
  "medical-disclaimer": {
    title: "Medical Disclaimer",
    summary:
      "Partners in Care is not presented on this website as a hospital, licensed medical facility or emergency service.",
    sections: [
      {
        heading: "No diagnosis or treatment",
        paragraphs: [
          "Website information and navigation support do not replace consultation with appropriately licensed healthcare professionals and do not provide diagnosis, prescriptions, treatment plans or guaranteed outcomes.",
        ],
      },
      {
        heading: "Emergencies",
        paragraphs: [
          "This website is not an emergency service. In a medical emergency, immediately contact your nearest emergency department or the relevant local emergency service.",
        ],
      },
      {
        heading: "Referral information",
        paragraphs: [
          "Referral or appointment information is subject to provider availability and independent clinical assessment. Partners in Care does not guarantee acceptance, suitability or outcomes.",
        ],
      },
    ],
  },
  "research-ethics": {
    title: "Research Ethics Statement",
    summary:
      "Partners in Care aims to support scientifically sound, respectful and accountable research within applicable approvals and professional standards.",
    sections: [
      {
        heading: "Ethical requirements",
        paragraphs: [
          "Human-participant research should proceed only with appropriate scientific review, ethics approval, informed consent, privacy protection and risk-management procedures.",
        ],
      },
      {
        heading: "Research integrity",
        bullets: [
          "Honest methods, analysis and reporting",
          "Transparent authorship and contributor roles",
          "Appropriate data-management and reproducibility",
          "Disclosure and management of conflicts of interest",
          "No fabrication, falsification or plagiarism",
        ],
        paragraphs: [],
      },
    ],
  },
  safeguarding: {
    title: "Safeguarding Statement",
    summary:
      "Partners in Care is committed to preventing harm, exploitation, abuse and harassment in its activities and relationships.",
    sections: [
      {
        heading: "Our commitment",
        paragraphs: [
          "Activities involving children, adults at risk or communities should use risk assessment, safe recruitment, codes of conduct, informed participation and confidential reporting pathways appropriate to context.",
        ],
      },
      {
        heading: "Reporting",
        paragraphs: [
          "Safeguarding concerns should be reported through [Insert safeguarding reporting channel]. Immediate danger should be referred to the appropriate emergency or statutory authority.",
        ],
      },
    ],
  },
  "anti-fraud": {
    title: "Anti-Fraud and Anti-Corruption Statement",
    summary:
      "Partners in Care does not tolerate fraud, bribery, corruption, kickbacks, falsification or misuse of resources.",
    sections: [
      {
        heading: "Expected conduct",
        paragraphs: [
          "Personnel, consultants, suppliers and partners should act lawfully, maintain accurate records, avoid improper influence and disclose suspected wrongdoing through approved channels.",
        ],
      },
      {
        heading: "Reporting and response",
        paragraphs: [
          "Concerns may be reported to [Insert confidential reporting channel]. Reports should be assessed impartially with protection against retaliation consistent with law and policy.",
        ],
      },
    ],
  },
  "conflict-of-interest": {
    title: "Conflict-of-Interest Policy",
    summary:
      "Interests that could affect—or appear to affect—professional judgement should be declared and managed.",
    sections: [
      {
        heading: "Disclosure",
        paragraphs: [
          "Directors, personnel, consultants, reviewers and decision-makers should disclose relevant financial, professional, personal or institutional interests before participating in affected work.",
        ],
      },
      {
        heading: "Management",
        bullets: [
          "Document the interest and assessment",
          "Restrict access to sensitive information where appropriate",
          "Use independent review or recusal",
          "Reassign responsibilities when necessary",
          "Record and review the agreed management plan",
        ],
        paragraphs: [],
      },
    ],
  },
  "data-protection": {
    title: "Data Protection Statement",
    summary:
      "Partners in Care aims to process personal and research data lawfully, fairly, securely and only for defined purposes.",
    sections: [
      {
        heading: "Core principles",
        bullets: [
          "Purpose limitation and data minimization",
          "Accuracy and controlled access",
          "Secure storage and transfer",
          "Defined retention and secure disposal",
          "Incident reporting and response",
          "Due diligence for service providers",
        ],
        paragraphs: [],
      },
      {
        heading: "Research and special-category data",
        paragraphs: [
          "Sensitive health and research data require project-specific governance, ethics approval where applicable, role-based access, secure analysis environments and documented sharing arrangements.",
        ],
      },
    ],
  },
};

export const allPageLinks = [
  ...primaryNavigation,
  ...secondaryNavigation,
  ...legalNavigation,
];

export const searchItems = [
  ...allPageLinks.map((item) => ({
    title: item.label,
    href: item.href,
    description: `Visit the ${item.label} page.`,
  })),
  ...services.map((service) => ({
    title: service.title,
    href: `/services#${service.slug}`,
    description: service.summary,
  })),
  ...sectors.map((sector) => ({
    title: sector.title,
    href: "/sectors",
    description: sector.description,
  })),
  ...focusAreas.map((area) => ({
    title: area,
    href: "/sectors",
    description: `${area} is included among the health and development priorities Partners in Care can support through an approved, appropriately scoped assignment.`,
  })),
  ...insightExamples.map((insight) => ({
    title: insight.title,
    href: "/insights",
    description: insight.summary,
  })),
];
