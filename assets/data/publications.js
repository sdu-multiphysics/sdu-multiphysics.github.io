/*
 * ================================================================
 * PUBLICATIONS DATABASE
 * MSOE Group, University of Southern Denmark
 * ================================================================
 *
 * HOW TO ADD A NEW PUBLICATION
 * --------------------------------
 * Copy the template below and paste it at the TOP of the relevant
 * section (under review, or into the published list sorted by year).
 * Fill in all the fields. Leave any field empty ("") if not applicable.
 *
 * Template:
 *
 *   {
 *     type:       "journal",        // "journal", "conference", or "review"
 *     year:       2026,             // publication year; use null for under-review
 *     title:      "Full paper title here",
 *     authors:    "A Author, B Author, J Alexandersen",
 *     journal:    "Journal Name",   // or conference name for type: "conference"
 *     details:    "Vol(Issue):Pages", // volume, issue, pages — or "" if not yet known
 *     doi:        "10.xxxx/xxxxxx", // just the DOI number, not the full URL
 *     openAccess: false,            // true if freely available without paywall
 *     links: [
 *       // Add as many or as few links as apply:
 *       { label: "arXiv:XXXXXXX",  url: "https://arxiv.org/abs/XXXXXXX" },
 *       { label: "Postprint",      url: "assets/files/YourFile.pdf" },
 *       { label: "Code",           url: "https://github.com/..." },
 *       { label: "Video",          url: "https://youtu.be/..." },
 *     ]
 *   },
 *
 * ================================================================
 */

/* This variable is read by publications.html */
const PUBLICATIONS = [


  /* ============================================================
     UNDER REVIEW
     ============================================================ */

  {
    type:       "review",
    year:       null,
    title:      "Space-time spectral element method for topology optimization of transient heat conduction",
    authors:    "S Nataj, M Appel, J Alexandersen",
    journal:    "SIAM Journal of Scientific Computing",
    details:    "",
    doi:        "",
    openAccess: false,
    links: [
      { label: "arXiv:2601.08979", url: "https://arxiv.org/abs/2601.08979" }
    ]
  },

  {
    type:       "review",
    year:       null,
    title:      "Density-based topology optimization for turbulent fluid flow using standard k-epsilon RANS model with wall-functions imposed through an implicit wall penalty formulation",
    authors:    "A Bayat, H Li, J Alexandersen",
    journal:    "Computer Methods for Applied Mechanics and Engineering",
    details:    "",
    doi:        "",
    openAccess: false,
    links: [
      { label: "arXiv:2601.02202", url: "https://arxiv.org/abs/2601.02202" }
    ]
  },

  {
    type:       "review",
    year:       null,
    title:      "Space-time multigrid methods suitable for topology optimisation of transient heat conduction",
    authors:    "M Appel, J Alexandersen",
    journal:    "Mathematics and Computers in Simulation",
    details:    "",
    doi:        "",
    openAccess: false,
    links: [
      { label: "arXiv:2505.10168", url: "https://arxiv.org/abs/2505.10168" }
    ]
  },


  /* ============================================================
     JOURNAL PAPERS — 2026
     ============================================================ */

  {
    type:       "journal",
    year:       2026,
    title:      "Topology optimisation of heat sinks embedded with phase-change material for minimising thermal oscillations",
    authors:    "MBM Christensen, J Alexandersen",
    journal:    "Computation",
    details:    "14(1):23",
    doi:        "10.3390/computation14010023",
    openAccess: true,
    links: []
  },

  {
    type:       "journal",
    year:       2026,
    title:      "Density-based topology optimization for Navier-Stokes flow with free-slip boundary conditions",
    authors:    "A Bayat, H Li, J Alexandersen",
    journal:    "Structural and Multidisciplinary Optimization",
    details:    "69(1):23",
    doi:        "10.1007/s00158-025-04212-7",
    openAccess: false,
    links: [
      { label: "hal-05131366v2", url: "https://hal.science/hal-05131366v2" },
      { label: "Postprint",      url: "assets/files/postprints/Slip_Postprint.pdf" }
    ]
  },

  {
    type:       "journal",
    year:       2026,
    title:      "Influence of fluid flow models on the topology optimization of a passively cooled heatsink",
    authors:    "MJ Reid, J Alexandersen, MSA ElSayed",
    journal:    "Structural and Multidisciplinary Optimization",
    details:    "69(1):11",
    doi:        "10.1007/s00158-025-04217-2",
    openAccess: false,
    links: [
      { label: "Postprint", url: "assets/files/postprints/Mac_Paper1_Postprint.pdf" }
    ]
  },

  {
    type:       "journal",
    year:       2026,
    title:      "Large-scale topology optimisation of time-dependent thermal conduction using space-time finite elements and a parallel space-time multigrid preconditioner",
    authors:    "J Alexandersen, M Appel",
    journal:    "Computer Methods for Applied Mechanics and Engineering",
    details:    "450:118605",
    doi:        "10.1016/j.cma.2025.118605",
    openAccess: true,
    links: []
  },


  /* ============================================================
     JOURNAL PAPERS — 2025
     ============================================================ */

  {
    type:       "journal",
    year:       2025,
    title:      "One-shot Parareal approach for topology optimisation of transient heat flow",
    authors:    "M Appel, J Alexandersen",
    journal:    "SIAM Journal of Scientific Computing",
    details:    "47(6):B1450",
    doi:        "10.1137/24M1696603",
    openAccess: false,
    links: [
      { label: "arXiv:2411.19030", url: "https://arxiv.org/abs/2411.19030" },
      { label: "Postprint",        url: "assets/files/postprints/Appel2025_Parareal_Postprint.pdf" }
    ]
  },

  {
    type:       "journal",
    year:       2025,
    title:      "Topology optimisation of conformal cooling channels in injection moulding: a scaling strategy for forced convection in high Reynolds number flows",
    authors:    "Y Sun, A Ghosh, A Agazzi, R Le Goff, J Alexandersen",
    journal:    "Structural and Multidisciplinary Optimization",
    details:    "68:156",
    doi:        "10.1007/s00158-025-04067-y",
    openAccess: true,
    links: []
  },

  {
    type:       "journal",
    year:       2025,
    title:      "3D topology optimization of conjugate heat transfer considering a mean compliance constraint: advancing towards graphical user interface and prototyping",
    authors:    "H Li, S Garnotel, P Jolivet, H Ogawa, T Kondoh, K Furuta, J Alexandersen, S Nishiwaki",
    journal:    "Advances in Engineering Software",
    details:    "207:103939",
    doi:        "10.1016/j.advengsoft.2025.103939",
    openAccess: true,
    links: []
  },

  {
    type:       "journal",
    year:       2025,
    title:      "A numerical design methodology for optimal pacing strategy in the individual time trial discipline of cycling",
    authors:    "AF Bach, J Alexandersen, CB Lundgaard",
    journal:    "Sports Engineering",
    details:    "28:12",
    doi:        "10.1007/s12283-025-00493-9",
    openAccess: true,
    links: []
  },

  {
    type:       "journal",
    year:       2025,
    title:      "Topology optimization of contact-aided thermo-mechanical regulators",
    authors:    "A Dalklint, J Alexandersen, AH Frederiksen, K Poulios, O Sigmund",
    journal:    "International Journal of Numerical Methods in Engineering",
    details:    "126:e7761",
    doi:        "10.1002/nme.7661",
    openAccess: true,
    links: []
  },

  {
    type:       "journal",
    year:       2025,
    title:      "Experimental demonstration of a topology optimization method to generate a capacity-specific device with cavitation resistance for control valve applications",
    authors:    "B Butler, J Alexandersen, S Rao",
    journal:    "ASME Journal of Fluids Engineering",
    details:    "147(5):051503",
    doi:        "10.1115/1.4067310",
    openAccess: false,
    links: []
  },

  {
    type:       "journal",
    year:       2025,
    title:      "Multi-scale topology optimisation of microchannel cooling using a homogenisation-based method",
    authors:    "H Li, P Jolivet, J Alexandersen",
    journal:    "Structural and Multidisciplinary Optimization",
    details:    "68:8",
    doi:        "10.1007/s00158-024-03931-7",
    openAccess: false,
    links: [
      { label: "hal-04607025v3", url: "https://hal.science/hal-04607025v3" }
    ]
  },


  /* ============================================================
     JOURNAL PAPERS — 2024
     ============================================================ */

  {
    type:       "journal",
    year:       2024,
    title:      "Topography optimisation using a reduced-dimensional model for transient conjugate heat transfer between fluid channels and solid plates with volumetric heat source",
    authors:    "Y Sun, S Yao, J Alexandersen",
    journal:    "Structural and Multidisciplinary Optimization",
    details:    "67:45",
    doi:        "10.1007/s00158-024-03760-8",
    openAccess: true,
    links: []
  },


  /* ============================================================
     JOURNAL PAPERS — 2023
     ============================================================ */

  {
    type:       "journal",
    year:       2023,
    title:      "Topography optimisation using a reduced-dimensional model for convective heat transfer between plates with varying channel height and constant temperature",
    authors:    "Y Sun, S Yao, J Alexandersen",
    journal:    "Structural and Multidisciplinary Optimization",
    details:    "66:206",
    doi:        "10.1007/s00158-023-03661-2",
    openAccess: true,
    links: []
  },

  {
    type:       "journal",
    year:       2023,
    title:      "Application of a reduced-dimensional model for fluid flow between stacks of parallel plates with complex surface topography",
    authors:    "Y Sun, HMA Hassan, J Alexandersen",
    journal:    "Fluids",
    details:    "8(6):174",
    doi:        "10.3390/fluids8060174",
    openAccess: true,
    links: []
  },

  {
    type:       "journal",
    year:       2023,
    title:      "Reaction-diffusion equation driven topology optimization of high-resolution and feature-rich structures using unstructured meshes",
    authors:    "H Li, M Yu, P Jolivet, J Alexandersen, T Kondoh, T Hu, K Furuta, K Izui, S Nishiwaki",
    journal:    "Advances in Engineering Software",
    details:    "180:103457",
    doi:        "10.1016/j.advengsoft.2023.103457",
    openAccess: false,
    links: [
      { label: "arXiv:2007.01759", url: "https://arxiv.org/abs/2007.01759" }
    ]
  },

  {
    type:       "journal",
    year:       2023,
    title:      "Performance analysis of a stand-alone thermal energy storage system based on CSM plates filled with phase change material",
    authors:    "HMA Hassan, MPR Hansen, J Dallaire, MAB Larsen, E Kieseritzky, J Alexandersen, C Veje, I Lund",
    journal:    "Energy and Buildings",
    details:    "278:112621",
    doi:        "10.1016/j.enbuild.2022.112621",
    openAccess: true,
    links: []
  },

  {
    type:       "journal",
    year:       2023,
    title:      "A detailed introduction to density-based topology optimisation of fluid flow problems with implementation in MATLAB",
    authors:    "J Alexandersen",
    journal:    "Structural and Multidisciplinary Optimization",
    details:    "66(1):1–38",
    doi:        "10.1007/s00158-022-03420-9",
    openAccess: false,
    links: [
      { label: "arXiv:2207.13695", url: "https://arxiv.org/abs/2207.13695" },
      { label: "Code (topflow)", url: "https://github.com/topflow" }
    ]
  },


  /* ============================================================
     JOURNAL PAPERS — 2022
     ============================================================ */

  {
    type:       "journal",
    year:       2022,
    title:      "Material extrusion additive manufacturing and experimental testing of topology-optimised passive heat sinks using a thermally-conductive plastic filament",
    authors:    "E Huttunen, MT Nykanen, J Alexandersen",
    journal:    "Additive Manufacturing",
    details:    "59(A):103123",
    doi:        "10.1016/j.addma.2022.103123",
    openAccess: true,
    links: []
  },

  {
    type:       "journal",
    year:       2022,
    title:      "Topography optimisation of fluid flow between parallel plates of spatially-varying spacing: revisiting the origin of fluid flow topology optimisation",
    authors:    "J Alexandersen",
    journal:    "Structural and Multidisciplinary Optimization",
    details:    "65(5):152",
    doi:        "10.1007/s00158-022-03243-8",
    openAccess: false,
    links: [
      { label: "arXiv:2110.02595", url: "https://arxiv.org/abs/2110.02595" }
    ]
  },


  /* ============================================================
     JOURNAL PAPERS — 2020
     ============================================================ */

  {
    type:       "journal",
    year:       2020,
    title:      "Topology optimization of two fluid heat exchangers",
    authors:    "LC Høghøj, DR Nørhave, J Alexandersen, O Sigmund, CS Andreasen",
    journal:    "International Journal of Heat and Mass Transfer",
    details:    "163:120543",
    doi:        "10.1016/j.ijheatmasstransfer.2020.120543",
    openAccess: false,
    links: [
      { label: "arXiv:2007.01759", url: "https://arxiv.org/abs/2007.01759" },
      { label: "Postprint",        url: "assets/files/postprints/hex2fluid_postprint.pdf" }
    ]
  },

  {
    type:       "journal",
    year:       2020,
    title:      "Topology optimization of heat sinks for instantaneous chip cooling using a transient pseudo-3D thermofluid model",
    authors:    "T Zeng, H Wang, M Yang, J Alexandersen",
    journal:    "International Journal of Heat and Mass Transfer",
    details:    "154:119681",
    doi:        "10.1016/j.ijheatmasstransfer.2020.119681",
    openAccess: false,
    links: [
      { label: "arXiv:1911.12987", url: "https://arxiv.org/abs/1911.12987" },
      { label: "Postprint",        url: "assets/files/postprints/pseudo3d_postprint.pdf" }
    ]
  },

  {
    type:       "journal",
    year:       2020,
    title:      "A review of topology optimisation for fluid-based problems",
    authors:    "J Alexandersen, CS Andreasen",
    journal:    "Fluids",
    details:    "5(1):29",
    doi:        "10.3390/fluids5010029",
    openAccess: true,
    links: []
  },

  {
    type:       "journal",
    year:       2020,
    title:      "A \"poor man's\" approach for high-resolution three-dimensional topology design of natural convection problems",
    authors:    "N Pollini, O Sigmund, CS Andreasen, J Alexandersen",
    journal:    "Advances in Engineering Software",
    details:    "140:102736",
    doi:        "10.1016/j.advengsoft.2019.102736",
    openAccess: false,
    links: [
      { label: "arXiv:1904.00182", url: "https://arxiv.org/abs/1904.00182" },
      { label: "Postprint",        url: "assets/files/postprints/darcy3d_postprint.pdf" }
    ]
  },


  /* ============================================================
     JOURNAL PAPERS — 2019
     ============================================================ */

  {
    type:       "journal",
    year:       2019,
    title:      "A \"poor man's\" approach to topology optimization of natural convection problems",
    authors:    "J Asmussen, J Alexandersen, O Sigmund, CS Andreasen",
    journal:    "Structural and Multidisciplinary Optimization",
    details:    "59(4):1105–1124",
    doi:        "10.1007/s00158-019-02215-9",
    openAccess: false,
    links: [
      { label: "arXiv:1809.01900", url: "https://arxiv.org/abs/1809.01900" }
    ]
  },


  /* ============================================================
     JOURNAL PAPERS — 2018
     ============================================================ */

  {
    type:       "journal",
    year:       2018,
    title:      "Investment casting and experimental testing of heat sinks designed by topology optimization",
    authors:    "T Lei, J Alexandersen, BS Lazarov, F Wang, JHK Haertel, S Sanna, S De Angelis, O Sigmund, K Engelbrecht",
    journal:    "International Journal of Heat and Mass Transfer",
    details:    "127:396–412",
    doi:        "10.1016/j.ijheatmasstransfer.2018.07.060",
    openAccess: false,
    links: []
  },

  {
    type:       "journal",
    year:       2018,
    title:      "Experimental validation of additively manufactured optimized shapes for passive cooling",
    authors:    "BS Lazarov, O Sigmund, KE Meyer, J Alexandersen",
    journal:    "Applied Energy",
    details:    "226:330–339",
    doi:        "10.1016/j.apenergy.2018.05.106",
    openAccess: false,
    links: []
  },

  {
    type:       "journal",
    year:       2018,
    title:      "Revisiting density-based topology optimization for fluid-structure-interaction problems",
    authors:    "C Lundgaard, J Alexandersen, M Zhou, CS Andreasen, O Sigmund",
    journal:    "Structural and Multidisciplinary Optimization",
    details:    "58:969–995",
    doi:        "10.1007/s00158-018-1940-4",
    openAccess: false,
    links: []
  },

  {
    type:       "journal",
    year:       2018,
    title:      "Design of passive coolers for light-emitting diode lamps using topology optimisation",
    authors:    "J Alexandersen, O Sigmund, KE Meyer, BS Lazarov",
    journal:    "International Journal of Heat and Mass Transfer",
    details:    "122:138–149",
    doi:        "10.1016/j.ijheatmasstransfer.2018.01.103",
    openAccess: false,
    links: [
      { label: "Postprint", url: "assets/files/postprints/LED_lamps_postprint.pdf" },
      { label: "Preprint",  url: "assets/files/postprints/LED_lamps_preprint.pdf" }
    ]
  },


  /* ============================================================
     JOURNAL PAPERS — 2016
     ============================================================ */

  {
    type:       "journal",
    year:       2016,
    title:      "Large scale three-dimensional topology optimisation of heat sinks cooled by natural convection",
    authors:    "J Alexandersen, O Sigmund, N Aage",
    journal:    "International Journal of Heat and Mass Transfer",
    details:    "100:876–891",
    doi:        "10.1016/j.ijheatmasstransfer.2016.05.013",
    openAccess: false,
    links: [
      { label: "arXiv:1508.04596", url: "https://arxiv.org/abs/1508.04596" },
      { label: "Postprint",        url: "assets/files/postprints/largescale3D_postprint.pdf" }
    ]
  },

  {
    type:       "journal",
    year:       2016,
    title:      "Industrial application of topology optimization for combined conductive and convective heat transfer problems",
    authors:    "M Zhou, J Alexandersen, O Sigmund, CBW Pedersen",
    journal:    "Structural and Multidisciplinary Optimization",
    details:    "54(4):1045–1060",
    doi:        "10.1007/s00158-016-1433-2",
    openAccess: false,
    links: [
      { label: "Postprint", url: "assets/files/postprints/industrial_application_postprint.pdf" }
    ]
  },


  /* ============================================================
     JOURNAL PAPERS — 2015
     ============================================================ */

  {
    type:       "journal",
    year:       2015,
    title:      "Stress-constrained topology optimization for compliant mechanism design",
    authors:    "DM de Leon, J Alexandersen, JSO Fonseca, O Sigmund",
    journal:    "Structural and Multidisciplinary Optimization",
    details:    "52(5):929–943",
    doi:        "10.1007/s00158-015-1279-z",
    openAccess: false,
    links: [
      { label: "Postprint", url: "assets/files/postprints/stress_constrained_postprint.pdf" }
    ]
  },

  {
    type:       "journal",
    year:       2015,
    title:      "Topology optimisation of manufacturable microstructural details without length scale separation using a spectral coarse basis preconditioner",
    authors:    "J Alexandersen, BS Lazarov",
    journal:    "Computer Methods in Applied Mechanics and Engineering",
    details:    "290:156–182",
    doi:        "10.1016/j.cma.2015.02.028",
    openAccess: false,
    links: [
      { label: "arXiv:1411.3923", url: "https://arxiv.org/abs/1411.3923" },
      { label: "Postprint",       url: "assets/files/postprints/microstructural_postprint.pdf" }
    ]
  },


  /* ============================================================
     JOURNAL PAPERS — 2014
     ============================================================ */

  {
    type:       "journal",
    year:       2014,
    title:      "Topology optimisation for natural convection problems",
    authors:    "J Alexandersen, N Aage, CS Andreasen, O Sigmund",
    journal:    "International Journal of Numerical Methods in Fluids",
    details:    "76(10):699–721",
    doi:        "10.1002/fld.3954",
    openAccess: false,
    links: [
      { label: "arXiv:1408.2102", url: "https://arxiv.org/abs/1408.2102" }
    ]
  },


  /* ============================================================
     CONFERENCE PAPERS
     ============================================================ */

  {
    type:       "conference",
    year:       2025,
    title:      "Phasor-based dehomogenisation for microchannel cooling topology optimisation",
    authors:    "H Li, PDL Jensen, RV Woldseth, J Alexandersen",
    journal:    "Intersociety Conference on Thermal and Thermomechanical Phenomena in Electronic Systems (ITherm)",
    details:    "",
    doi:        "10.1109/ITherm55376.2025.11235758",
    openAccess: false,
    links: [
      { label: "hal-04839124", url: "https://hal.science/hal-04839124" }
    ]
  },

  {
    type:       "conference",
    year:       2021,
    title:      "Revisiting the optimal thickness profile of cooling fins: A one-dimensional analytical study using optimality conditions",
    authors:    "J Alexandersen, O Sigmund",
    journal:    "Intersociety Conference on Thermal and Thermomechanical Phenomena in Electronic Systems (ITherm)",
    details:    "",
    doi:        "10.1109/ITherm51669.2021.9503196",
    openAccess: false,
    links: [
      { label: "arXiv:2012.04310", url: "https://arxiv.org/abs/2012.04310" },
      { label: "Postprint",        url: "assets/files/postprints/ITherm2021_revised.pdf" }
    ]
  },

  {
    type:       "conference",
    year:       2020,
    title:      "Application of full and approximate flow models in topology optimisation of passive cooling for electronics cabinets",
    authors:    "J Alexandersen",
    journal:    "Intersociety Conference on Thermal and Thermomechanical Phenomena in Electronic Systems (ITherm)",
    details:    "",
    doi:        "10.1109/ITherm45881.2020.9190302",
    openAccess: false,
    links: [
      { label: "Postprint", url: "assets/files/postprints/Alexandersen_ITherm2020_v2.pdf" }
    ]
  },

  {
    type:       "conference",
    year:       2015,
    title:      "Topology optimisation of passive coolers for light-emitting diode lamps",
    authors:    "J Alexandersen, O Sigmund, N Aage",
    journal:    "11th World Congress of Structural and Multidisciplinary Optimization",
    details:    "",
    doi:        "10.13140/RG.2.1.3906.5446",
    openAccess: false,
    links: []
  }

]; /* end of PUBLICATIONS array */
