/*
 * ================================================================
 * GROUP MEMBERS DATABASE
 * MSOE Group, University of Southern Denmark
 * ================================================================
 *
 * HOW TO UPDATE THIS FILE
 * --------------------------------
 * Each entry is a JavaScript object with a `type` field that
 * controls which section of the group page the person appears in:
 *
 *   "current"          → Current Members (card with photo)
 *   "thesis-master"    → Current Thesis Students → Master
 *   "thesis-bachelor"  → Current Thesis Students → Bachelor
 *   "past-postdoc"     → Past Members → Postdoctoral Researchers
 *   "past-visiting"    → Past Members → Visiting Ph.D. Students
 *   "past-ra"          → Past Members → Research Assistants
 *   "past-sa"          → Past Members → Student Assistants
 *   "past-thesis-master" → Past Members → Past Master Thesis Students
 *
 * FIELDS FOR CURRENT MEMBERS
 *   name        — Full name (required)
 *   role        — Job title / position (required)
 *   photo       — Path to photo from site root, e.g.
 *                 "assets/images/group/kanbur.jpg"
 *                 Set to null to show a placeholder icon.
 *   description — One or two sentences about research (required)
 *   funding     — Funding source / period string (optional)
 *   link        — If set, the name becomes a link to this URL (optional)
 *
 * FIELDS FOR THESIS STUDENTS
 *   name        — Full name (required)
 *   topic       — Thesis topic (required)
 *
 * FIELDS FOR PAST MEMBERS
 *   name        — Full name (required)
 *   period      — Years, e.g. "2024–2025" (optional)
 *   note        — Extra note, e.g. home institution (optional)
 *
 * ================================================================
 */

/* This variable is read by group.html */
const MEMBERS = [


  /* ============================================================
     CURRENT MEMBERS
     ============================================================ */

  {
    type:        "current",
    name:        "Joe Alexandersen",
    role:        "Associate Professor — Group Leader",
    photo:       "assets/images/profile.jpg",
    link:        "biography.html",
    description: "Joe leads the MSOE group. His research spans topology optimisation, advanced discretisation methods, conjugate heat transfer, and parallel computing. He received his Ph.D. from the Technical University of Denmark in 2016.",
    funding:     "See <a href=\"biography.html\">Biography</a> for full details.",
  },

  {
    type:        "current",
    name:        "Baris Burak Kanbur",
    role:        "Assistant Professor",
    photo:       "assets/images/group/kanbur.jpg",
    description: "Baris works on computational and experimental fluid mechanics and heat transfer, leading the experimental side of the group’s activities as well as the fluid mechanics research area at SDU.",
  },

  {
    type:        "current",
    name:        "Hao Li",
    role:        "Postdoctoral Researcher",
    photo:       "assets/images/group/hao-li.jpg",
    description: "Hao works on homogenisation-based topology optimisation methods for microchannel heat exchangers, with a focus on space-time adaptive mesh refinement to reduce computational cost. He was funded by the Marie Skłodowska-Curie Postdoctoral Fellowship (ADeHEx project, Oct. 2023–Sep. 2025) with a secondment at Brown University. He is currently funded by the COMFORT project.",
    funding:     "Funding: COMFORT project (from Oct. 2025)",
  },

  {
    type:        "current",
    name:        "Sarah Nataj",
    role:        "Postdoctoral Researcher",
    photo:       "assets/images/group/sarah-nataj.jpg",
    description: "Sarah develops space-time spectral element methods for topology optimisation of transient heat conduction problems, contributing to the group’s COMFORT project.",
    funding:     "Funding: DFF Sapere Aude Research Leader (COMFORT, Apr. 2025–Mar. 2027)",
  },

  {
    type:        "current",
    name:        "Amirhossein Bayat",
    role:        "Ph.D. Student",
    photo:       "assets/images/group/bayat.jpg",
    description: "Amirhossein’s research focuses on topology optimisation for high heat-flux cooling and turbulent flow, with applications to fusion reactor first-wall components and high-performance electronics cooling (HiHeat project).",
    funding:     "Funding: HiHeat project (Feb. 2024–Jan. 2027)",
  },

  {
    type:        "current",
    name:        "Magnus Højmose Appel",
    role:        "Ph.D. Student",
    photo:       "assets/images/group/appel.png",
    description: "Magnus develops time-parallel methods — including Parareal and space-time multigrid — for transient heat diffusion and topology optimisation, working towards order-of-magnitude speed-ups for time-dependent design problems (COMFORT project).",
    funding:     "Funding: DFF Sapere Aude Research Leader (COMFORT, Sep. 2024–Aug. 2027)",
  },

  {
    type:        "current",
    name:        "Morten Bjerre Jonathansen",
    role:        "Industrial Ph.D. Student",
    photo:       "assets/images/group/jonathansen.jpg",
    description: "Morten applies computational morphogenesis to the design of high temperature-difference heat exchangers, addressing the coupled thermomechanical challenges of large temperature gradients in exhaust gas recirculators, Power-to-X applications, and thermal energy storage.",
    funding:     "Funding: IFD &amp; Vestas Aircoil (Mar. 2025–Feb. 2028)",
  },

  {
    type:        "current",
    name:        "Haiyang Lei",
    role:        "Visiting Ph.D. Student",
    photo:       null,
    description: "Haiyang is visiting from Central South University, China. His research focuses on RBF (radial basis function) methods for topology optimisation of turbulent flow problems.",
    funding:     "Home institution: Central South University, China",
  },

  {
    type:        "current",
    name:        "Søren Schøler Sundall",
    role:        "Research Assistant",
    photo:       null,
    description: "Søren assists with experimental fluid mechanics research in collaboration with Baris Burak Kanbur.",
  },


  /* ============================================================
     CURRENT THESIS STUDENTS
     ============================================================ */

  {
    type:  "thesis-master",
    name:  "Christian H Larsen &amp; Jacob MS Andersen",
    topic: "Topology optimisation of electric motor cooling",
  },

  {
    type:  "thesis-master",
    name:  "Erik Detlefsen",
    topic: "Simulation of interactions between electromagnetic waves and tungsten tiles",
  },

  {
    type:  "thesis-bachelor",
    name:  "Ellen Kanstrup Larsen",
    topic: "Quantum computing for PDEs and optimisation",
  },


  /* ============================================================
     PAST MEMBERS
     ============================================================ */

  {
    type:   "past-postdoc",
    name:   "Yupeng Sun",
    period: "2024–2025",
  },

  {
    type:   "past-visiting",
    name:   "Yupeng Sun",
    period: "2021–2023",
  },

  {
    type:   "past-visiting",
    name:   "Takamitsu Sasaki",
    note:   "Kyoto University",
    period: "2025",
  },

  {
    type:   "past-visiting",
    name:   "Mojtaba Barzegari",
    period: "2025",
  },

  {
    type:   "past-ra",
    name:   "Magnus Højmose Appel",
    period: "2024",
  },

  {
    type:   "past-ra",
    name:   "Mark Bjerre Müller Christensen",
    period: "2023",
  },

  {
    type:   "past-sa",
    name:   "David Vestergaard Pedersen",
    period: "2022–2024",
  },

  {
    type:   "past-sa",
    name:   "Morten Andersen",
    period: "2022–2024",
  },

  {
    type:   "past-sa",
    name:   "Oliver Steen Mæhle Sindahl",
    period: "2022",
  },

  {
    type:   "past-sa",
    name:   "Daniel Kolbæk Thornild",
    period: "2019–2020",
  },

  {
    type: "past-thesis-master",
    name: "Casper Skjold Buhrkall",
  },

  {
    type: "past-thesis-master",
    name: "Kristian Søberg",
  },

  {
    type: "past-thesis-master",
    name: "Jens Ole Jepsen",
  },

  {
    type: "past-thesis-master",
    name: "Christopher Becker",
  },

  {
    type: "past-thesis-master",
    name: "Mathias Arnløv Graversen",
  },

  {
    type: "past-thesis-master",
    name: "Christian Buur Kej",
  },

  {
    type: "past-thesis-master",
    name: "Victor Lindberg Brink",
  },

]; /* end of MEMBERS array */
