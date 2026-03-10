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

];

export const partners = [
  { name: "DOST", img: "/dost.jpg", href: "https://www.dost.gov.ph/" },
  { name: "CSU", img: "/CSU.png", href: "https://www.carsu.edu.ph/" },
  { name: "DOA", img: "/DOA.png", href: "https://www.da.gov.ph/" },
  { name: "TMC", img: "/tmc.png", href: "https://www.mgb.gov.ph/" },
  { name: "APEX", img: "/apex.png", href: "https://www.apexmines.com/" },
  { name: "DSWD", img: "/dswd.png", href: "https://caraga.dswd.gov.ph/" },
];
