export const researchAreas = [
  {
    image: "/MSC.png",
    title: "Multi-sensory Computing",
    description:
      "Exploring the integration of multiple sensory modalities in computing systems to create immersive and intuitive human-computer interfaces.",
  },
  {
    image: "/GS.png",
    title: "Gaming Science",
    description:
      "Advancing the science of game design and development, focusing on engagement, learning outcomes, and therapeutic applications.",
  },
  {
    image: "/MS.png",
    title: "Multimedia Science",
    description:
      "Research on digital media creation, processing, and distribution technologies for enhanced communication and storytelling.",
  },
  {
    image: "/CIC.png",
    title: "Cyber Intelligence Computing",
    description:
      "Developing intelligent systems for cybersecurity, threat detection, and digital forensics to protect communities and institutions.",
  },
  {
    image: "/CFD.png",
    title: "Computing for Development",
    description:
      "Leveraging computing technologies to address societal challenges and promote inclusive growth in underserved communities.",
  },
];

export const projects = [
  {
    slug: "marvel",
    name: "MARVEL",
    img: "/marvel.png",
    href: "/marvel",
    hero: {
      backgroundImage: "/marvelbg.jpg",
      subtitle: "Mining Beyond Reality",
      title: "MARVEL TECHNOLOGIES",
      location: "",
      cta: {
        label: "Download Application",
        href: "https://drive.google.com/drive/folders/1jp9FA4NitzAyFPpBm_VgIm_tw_FAdedq",
      },
    },
    sections: [
      {
        type: "about_video",
        eyebrow: "MARVEL About",
        title: "About",
        heading: "Project Overview",
        text: "Industry 4.0 combines cyber-physical systems, IoT, and smart automation. MARVEL bridges mining education with immersive digital training through VR and AR to extend learning beyond traditional delivery.",
        videoUrl: "https://www.youtube.com/embed/0XlkjM-Bwu8",
        videoTitle: "MARVEL Technologies Introduction Video",
        actions: [{ label: "Visit our Facebook Page", href: "https://www.facebook.com/csuchci/" }],
      },
      {
        type: "feature_grid",
        eyebrow: "MARVEL Focus",
        title: "Core Components",
        items: [
          {
            title: "Immersive Learning",
            description: "Uses virtual environments to deliver realistic mining training scenarios.",
          },
          {
            title: "AR-Assisted Instruction",
            description: "Provides contextual overlays to guide users in technical procedures.",
          },
          {
            title: "Digital Training Center",
            description: "Centralizes course assets, simulations, and evaluation workflows.",
          },
        ],
      },
    ],
  },
  {
    slug: "geoagr",
    name: "GEOAGR",
    img: "/geoagr.png",
    href: "/geoagr",
    hero: {
      backgroundImage: "/geoagribg.jpg",
      subtitle: "WE INTERACT IN THE MODERN WORLD",
      title:
        "Geographic Information System for Agricultural and Fisheries Machinery and Infrastructure (GEOAGRI)",
      location: "2nd Flr. Hiraya Building, Caraga State University, Ampayon, Butuan City, Philippines",
    },
    sections: [
      {
        type: "about_video",
        eyebrow: "GEOAGRI About",
        title: "About",
        heading: "Project Overview",
        text: "GEOAGRI is a web-based platform developed by BAFE and CSU to consolidate FMR information. It supports transparency, governance, resource optimization, and minimizes overlap of road infrastructure projects.",
        videoUrl: "https://www.youtube.com/embed/oYjpONIQnKA",
        videoTitle: "GEOAGRI Introduction Video",
        actions: [{ label: "Visit our Facebook Page", href: "https://www.facebook.com/csuchci/" }],
      },
      {
        type: "list",
        eyebrow: "GEOAGRI Objectives",
        title: "Objectives",
        items: [
          "Centralize infrastructure project records across agencies and LGUs.",
          "Improve monitoring and decision support for FMR planning.",
          "Support transparent and evidence-driven implementation.",
        ],
      },
    ],
  },
  {
    slug: "smart",
    name: "SMART",
    img: "/smart.png",
    href: "/smart",
    hero: {
      backgroundImage: "/CCIS.jpg",
      subtitle: "WE INTERACT IN THE MODERN WORLD",
      title: "Smart - Records Management System for DSWD",
      location: "2nd Flr. Hiraya Building, Caraga State University, Ampayon, Butuan City, Philippines",
    },
    sections: [
      {
        type: "text",
        eyebrow: "SMART System",
        title: "Description",
        text: "SMART is a records management platform designed to streamline data handling, improve retrieval speed, and reduce manual processing for agency workflows.",
      },
      {
        type: "feature_grid",
        eyebrow: "SMART Modules",
        title: "Key Features",
        items: [
          {
            title: "Records Indexing",
            description: "Structured indexing to make document lookup fast and consistent.",
          },
          {
            title: "Workflow Tracking",
            description: "Status-driven processing and traceability for records lifecycle.",
          },
          {
            title: "Directory Management",
            description: "Organized staff and office mapping for clearer data ownership.",
          },
        ],
      },
    ],
  },
  {
    slug: "famria",
    name: "FAMRIA",
    img: "/famria.png",
    href: "/famria",
    hero: {
      backgroundImage: "/famriabg.jpg",
      subtitle: "WE INTERACT IN THE MODERN WORLD",
      title: "Farm to Market Road Impact Assessment (FAMRIA)",
      location: "2nd Flr. Hiraya Building, Caraga State University, Ampayon, Butuan City, Philippines",
    },
    sections: [
      {
        type: "text",
        eyebrow: "FAMRIA About",
        title: "About",
        text: "FAMRIA evaluates the impacts of farm-to-market road interventions to guide better infrastructure planning and stronger support for rural development.",
      },
      {
        type: "list",
        eyebrow: "FAMRIA Objectives",
        title: "Objectives",
        items: [
          "Assess socio-economic outcomes of FMR interventions.",
          "Identify policy and program improvements for future projects.",
          "Provide technical evidence for road investment decisions.",
        ],
      },
      {
        type: "text",
        eyebrow: "FAMRIA Framework",
        title: "Framework",
        text: "The framework connects infrastructure performance, accessibility, and local outcomes to produce measurable and actionable project insights.",
      },
    ],
  },
  {
    slug: "atlas",
    name: "ATLAS",
    img: "/CHCI-LOGO.png",
    href: "/atlas",
    hero: {
      backgroundImage: "/CCIS.jpg",
      subtitle: "DATA-DRIVEN COMMUNITY PLANNING",
      title: "ATLAS - Analytics and Tracking for Local Area Services",
      location: "Caraga State University, Ampayon, Butuan City, Philippines",
      cta: {
        label: "View Project Brief",
        href: "https://www.facebook.com/csuchci/",
      },
    },
    sections: [
      {
        type: "about_video",
        eyebrow: "ATLAS Overview",
        title: "About",
        heading: "Project Overview",
        text: "ATLAS is a digital platform for tracking local service delivery data and generating insights for faster planning, transparent reporting, and evidence-based decisions.",
        videoUrl: "https://www.youtube.com/embed/OlJuSZeyug8",
        videoTitle: "ATLAS Introduction Video",
        image: "/CHCI-LOGO.png",
      },
      {
        type: "feature_grid",
        eyebrow: "ATLAS Modules",
        title: "Core Features",
        items: [
          {
            title: "Service Mapping",
            description: "Visualizes service coverage by area to identify gaps and priorities.",
            image: "/CHCI-LOGO.png",
          },
          {
            title: "Case Monitoring",
            description: "Tracks status updates across workflows with clear accountability.",
            image: "/CHCI-LOGO.png",
          },
          {
            title: "Analytics Dashboard",
            description: "Summarizes key indicators for planning and management decisions.",
            image: "/CHCI-LOGO.png",
          },
        ],
      },
    ],
  },
];

export const partners = [
  { name: "DOST", img: "/dost.jpg", href: "https://www.dost.gov.ph/" },
  { name: "CSU", img: "/CSU.png", href: "https://www.carsu.edu.ph/" },
  { name: "DOA", img: "/DOA.png", href: "https://www.da.gov.ph/" },
  { name: "TMC", img: "/tmc.png", href: "https://www.mgb.gov.ph/" },
  { name: "APEX", img: "/apex.png", href: "https://www.apexmines.com/" },
  { name: "DSWD", img: "/dswd.png", href: "https://caraga.dswd.gov.ph/" },
];
