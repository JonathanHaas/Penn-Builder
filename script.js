const palettes = [
  {
    id: "salt-marigold",
    name: "Salt Marigold",
    colors: ["#fffefa", "#26231f", "#176c66", "#f2b84b"],
    paper: "#fff7e1",
    ink: "#26231f",
    accent: "#176c66",
    warm: "#bd5f3b"
  },
  {
    id: "gallery-red",
    name: "Gallery Red",
    colors: ["#f8f5f0", "#211d1b", "#aa3128", "#30706f"],
    paper: "#f8f5f0",
    ink: "#211d1b",
    accent: "#aa3128",
    warm: "#30706f"
  },
  {
    id: "moss-ink",
    name: "Moss Ink",
    colors: ["#f2f3ea", "#1d241d", "#627b4d", "#c47b4b"],
    paper: "#f2f3ea",
    ink: "#1d241d",
    accent: "#627b4d",
    warm: "#c47b4b"
  },
  {
    id: "paper-cobalt",
    name: "Paper Cobalt",
    colors: ["#faf9f4", "#1f2328", "#315fba", "#c86b45"],
    paper: "#faf9f4",
    ink: "#1f2328",
    accent: "#315fba",
    warm: "#c86b45"
  },
  {
    id: "penn-classic",
    name: "Penn Classic",
    colors: ["#ffffff", "#011f5b", "#990000", "#82afd3"],
    paper: "#ffffff",
    ink: "#011f5b",
    accent: "#990000",
    warm: "#82afd3"
  }
];

const fontStacks = {
  Inter: '"Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  Roboto: '"Roboto", Arial, sans-serif',
  "EB Garamond": '"EB Garamond", Georgia, "Times New Roman", serif',
  Georgia: 'Georgia, "Times New Roman", serif',
  Verdana: 'Verdana, Geneva, sans-serif',
  "Trebuchet MS": '"Trebuchet MS", Tahoma, sans-serif'
};

const layoutLabels = {
  hero: "Hero",
  text: "Text",
  feature: "Fullbleed",
  split: "Split",
  quote: "Quote",
  stats: "Facts",
  image: "Image",
  accordion: "Accordion",
  gallery: "Gallery",
  cards: "Cards",
  events: "Events",
  video: "Video"
};

const PENN_COLLEGE_HALL_IMAGE = "assets/college-hall.jpg";
const PENN_FISHER_FINE_ARTS_IMAGE = "assets/fisher-fine-arts-library.jpg";
const PENN_STUDENT_ORIENTATION_IMAGE = "assets/student-life-orientation.jpg";
const PENN_STUDENT_HOLI_IMAGE = "assets/student-life-holi.jpg";
const PENN_STUDENT_CONVOCATION_IMAGE = "assets/student-life-convocation.jpg";
const PENN_STUDENT_POWWOW_IMAGE = "assets/student-life-powwow.jpg";
const PENN_RESEARCH_MRNA_IMAGE = "assets/research-mrna.jpg";
const PENN_RESEARCH_CHIP_IMAGE = "assets/research-chip.jpg";
const PENN_RESEARCH_LAB_IMAGE = "assets/research-composito-lab.jpg";
const PENN_RESEARCH_SUPERCOMPUTER_IMAGE = "assets/research-supercomputer.jpg";
const PENN_LOGO_IMAGE = "assets/penn-logo.png";
const PENN_REVERSED_LOGO_IMAGE = "assets/penn-logo-reverse.png";
const PENN_HERO_IMAGE = PENN_COLLEGE_HALL_IMAGE;
const PENN_GALLERY_CAMPUS = PENN_COLLEGE_HALL_IMAGE;
const PENN_GALLERY_RESEARCH = PENN_FISHER_FINE_ARTS_IMAGE;
const PENN_GALLERY_CITY = PENN_FISHER_FINE_ARTS_IMAGE;
const PENN_GALLERY_IMAGES = [
  PENN_COLLEGE_HALL_IMAGE,
  PENN_FISHER_FINE_ARTS_IMAGE,
  PENN_STUDENT_ORIENTATION_IMAGE,
  PENN_STUDENT_HOLI_IMAGE,
  PENN_STUDENT_CONVOCATION_IMAGE,
  PENN_STUDENT_POWWOW_IMAGE,
  PENN_RESEARCH_MRNA_IMAGE,
  PENN_RESEARCH_CHIP_IMAGE,
  PENN_RESEARCH_LAB_IMAGE,
  PENN_RESEARCH_SUPERCOMPUTER_IMAGE
];
const DEFAULT_HERO_IMAGE = PENN_HERO_IMAGE;
const OLD_DEFAULT_VIDEO_URLS = ["https://vimeo.com/416160065"];
const DEFAULT_VIDEO_URL = "https://vimeo.com/1084537";
const DEFAULT_BUTTON_URL = "https://www.upenn.edu";
const PREVIEW_ID = "upenn-preview-2026-05-09-penn-buildings";
const DEFAULT_GROUPS = [
  {
    id: "overview",
    label: "Overview",
    navTitle: "Overview",
    visibleInNav: true,
    parallaxImage: PENN_COLLEGE_HALL_IMAGE
  },
  {
    id: "academics",
    label: "Academics",
    navTitle: "Academics",
    visibleInNav: true,
    parallaxImage: PENN_FISHER_FINE_ARTS_IMAGE
  },
  {
    id: "campus-life",
    label: "Campus Life",
    navTitle: "Campus Life",
    visibleInNav: true,
    parallaxImage: PENN_STUDENT_HOLI_IMAGE
  },
  {
    id: "happening-now",
    label: "Happening Now",
    navTitle: "Happening Now",
    visibleInNav: true,
    parallaxImage: PENN_RESEARCH_LAB_IMAGE
  }
];
const PENN_RESOURCE_LINKS = [
  { label: "Current Students", href: "https://path.at.upenn.edu/" },
  { label: "Faculty & Staff", href: "https://portal.apps.upenn.edu/" },
  { label: "Parents", href: "https://www.upenn.edu/life-at-penn/parents" },
  { label: "Alumni", href: "https://www.alumni.upenn.edu/" },
  { label: "Visitors", href: "https://www.upenn.edu/life-at-penn/visitors" },
  { label: "Media", href: "https://university-communications.upenn.edu/" },
  { label: "Directory", href: "https://directory.apps.upenn.edu/" },
  { label: "Webmail", href: "https://provider.www.upenn.edu/computing/email/" },
  { label: "Services", href: "https://www.upenn.edu/services" }
];

const starterState = {
  previewId: PREVIEW_ID,
  videoSectionSeeded: true,
  cardsSectionSeeded: true,
  eventsSectionSeeded: true,
  typographyDefaultsUpdated: true,
  siteTitle: "Penn",
  tagline: "A Philadelphia campus where rigorous teaching, interdisciplinary research, and civic engagement move ideas into the world.",
  palette: "penn-classic",
  font: "Roboto",
  secondaryFont: "EB Garamond",
  radius: 6,
  externalLinkIcons: true,
  groups: structuredClone(DEFAULT_GROUPS),
  selectedId: "hero",
  sections: [
    {
      id: "hero",
      groupId: "overview",
      layout: "hero",
      label: "Hero",
      heading: "Penn",
      body: "Rooted in Philadelphia and connected to the world, Penn brings teaching, research, service, and innovation together across a historic urban campus.",
      buttonText: "Explore Penn",
      buttonUrl: DEFAULT_BUTTON_URL,
      heroImage: PENN_HERO_IMAGE,
      heroImagePosition: "right",
      visible: true
    },
    {
      id: "principle",
      groupId: "overview",
      layout: "text",
      label: "Text",
      heading: "In principle and practice",
      body: "Penn's preview story is built around academic breadth, research intensity, civic purpose, and a campus culture shaped by Philadelphia. This section uses the full-width Text layout for a broad institutional message.",
      visible: true
    },
    {
      id: "academics",
      groupId: "academics",
      layout: "split",
      label: "Split",
      heading: "Academics across a connected university.",
      body: "Four undergraduate schools and 12 graduate and professional schools create a distinctive ecosystem for learning across liberal arts, business, engineering, design, law, medicine, education, policy, and more.",
      buttonText: "View academics",
      buttonUrl: DEFAULT_BUTTON_URL,
      splitColor: "blue",
      visible: true
    },
    {
      id: "facts",
      groupId: "academics",
      layout: "stats",
      label: "Facts",
      heading: "Penn Facts",
      body: "1740 Year founded|8:1 Student-faculty ratio|$1.33B 2026 research budget",
      visible: true
    },
    {
      id: "research",
      groupId: "academics",
      layout: "feature",
      label: "Fullbleed",
      heading: "Research and innovation with public purpose.",
      body: "Penn's research enterprise spans medicine, technology, business, science, the humanities, and the social sciences, pairing discovery with practical impact for communities nearby and around the world.",
      buttonText: "Research at Penn",
      buttonUrl: DEFAULT_BUTTON_URL,
      visible: true
    },
    {
      id: "campus-life",
      groupId: "campus-life",
      layout: "accordion",
      label: "Accordion",
      heading: "Campus life overview",
      body: "",
      accordionItems: [
        {
          id: "accordion-academics",
          title: "Academics",
          body: "Penn's schools and programs encourage interdisciplinary study, intellectual rigor, and opportunities to learn across fields."
        },
        {
          id: "accordion-research",
          title: "Research",
          body: "Students and faculty work in a research ecosystem designed to move ideas from labs, studios, clinics, and classrooms into practice."
        },
        {
          id: "accordion-community",
          title: "Campus and community",
          body: "Traditions, student organizations, cultural life, athletics, and service connect Penn's campus to the surrounding city."
        },
        {
          id: "accordion-global",
          title: "Global engagement",
          body: "Penn Global and school-based programs connect students, faculty, and alumni with communities and institutions around the world."
        }
      ],
      visible: true
    },
    {
      id: "gallery",
      groupId: "campus-life",
      layout: "gallery",
      label: "Gallery",
      heading: "Scenes from Penn",
      body: "A scrollable preview gallery for Penn buildings, student life, and research.",
      galleryImages: PENN_GALLERY_IMAGES.map((src, index) => ({
        id: `gallery-penn-${index + 1}`,
        src
      })),
      visible: true
    },
    {
      id: "philadelphia",
      groupId: "campus-life",
      layout: "image",
      label: "Image",
      heading: "Penn and Philadelphia",
      body: "A campus shaped by its city, with partnerships, public engagement, and discovery extending across Philadelphia and beyond.",
      image: PENN_GALLERY_CITY,
      visible: true
    },
    {
      id: "cards",
      groupId: "campus-life",
      layout: "cards",
      label: "Cards",
      heading: "Explore Penn",
      body: "Use cards to highlight high-priority paths, stories, or calls to action with color and imagery.",
      cardColumns: 3,
      cardItems: [
        {
          id: "card-student-life",
          title: "Student Life",
          body: "Clubs, traditions, cultural centers, performances, and campus events make Penn feel active every week.",
          color: "white",
          image: PENN_STUDENT_HOLI_IMAGE
        },
        {
          id: "card-research",
          title: "Research",
          body: "Labs, clinics, studios, and institutes connect discovery with practical impact across disciplines.",
          color: "blue",
          image: PENN_RESEARCH_LAB_IMAGE
        },
        {
          id: "card-campus",
          title: "Campus Landmarks",
          body: "Historic buildings and green spaces anchor a campus woven into the life of Philadelphia.",
          color: "red",
          image: PENN_FISHER_FINE_ARTS_IMAGE
        }
      ],
      visible: true
    },
    {
      id: "events",
      groupId: "happening-now",
      layout: "events",
      label: "Events",
      heading: "Events",
      body: "A Penn-inspired event lineup styled with calendar date cards, editorial copy, and optional imagery.",
      eventItems: [
        {
          id: "event-talks",
          category: "Talks",
          month: "MAY",
          day: "14",
          title: "Boosting Infrastructure Investment for Global Cities",
          description: "Susan Wachter joins public finance experts for a conversation on how cities can meet the demands of population growth and climate change.",
          image: PENN_GALLERY_CITY
        },
        {
          id: "event-student-life",
          category: "Student Life",
          month: "MAY",
          day: "21",
          title: "Spring Traditions Across Campus",
          description: "Students gather for performances, cultural events, and campus traditions that connect the Penn community.",
          image: PENN_STUDENT_HOLI_IMAGE
        },
        {
          id: "event-research",
          category: "Research",
          month: "JUN",
          day: "04",
          title: "Discovery at the Edge of Medicine and Engineering",
          description: "Faculty and students share new research that connects labs, clinics, and technology with public impact.",
          image: PENN_RESEARCH_LAB_IMAGE
        }
      ],
      visible: true
    },
    {
      id: "video",
      groupId: "happening-now",
      layout: "video",
      label: "Video",
      heading: "A quick comic intermission.",
      body: "Use this full-width video section for a little levity, a launch film, or any YouTube or Vimeo story you want to feature.",
      videoUrl: DEFAULT_VIDEO_URL,
      visible: true
    },
    {
      id: "quote",
      groupId: "happening-now",
      layout: "quote",
      label: "Quote",
      heading: "Benjamin Franklin",
      body: "Well done is better than well said",
      quoteColor: "red",
      visible: true
    }
  ]
};

let state = loadState();
let undoStack = [];
let redoStack = [];
let saveTimer = null;
let cmsSaveTimer = null;
let cmsEnabled = window.location.protocol !== "file:";
let pointerDrag = null;
let suppressNextSectionClick = false;

const elements = {
  siteTitle: document.querySelector("#siteTitle"),
  tagline: document.querySelector("#tagline"),
  externalLinkIcons: document.querySelector("#externalLinkIcons"),
  fontChoice: document.querySelector("#fontChoice"),
  secondaryFontChoice: document.querySelector("#secondaryFontChoice"),
  radiusControl: document.querySelector("#radiusControl"),
  paletteChoices: document.querySelector("#paletteChoices"),
  sectionList: document.querySelector("#sectionList"),
  groupEditorList: document.querySelector("#groupEditorList"),
  sectionHeadingLabel: document.querySelector("#sectionHeadingLabel"),
  sectionHeading: document.querySelector("#sectionHeading"),
  sectionBodyField: document.querySelector("#sectionBodyField"),
  sectionBodyLabel: document.querySelector("#sectionBodyLabel"),
  sectionBody: document.querySelector("#sectionBody"),
  layoutChoice: document.querySelector("#layoutChoice"),
  sectionLabel: document.querySelector("#sectionLabel"),
  sectionGroup: document.querySelector("#sectionGroup"),
  buttonTextField: document.querySelector("#buttonTextField"),
  buttonText: document.querySelector("#buttonText"),
  buttonUrlField: document.querySelector("#buttonUrlField"),
  buttonUrl: document.querySelector("#buttonUrl"),
  videoUrlField: document.querySelector("#videoUrlField"),
  videoUrl: document.querySelector("#videoUrl"),
  imageUploadField: document.querySelector("#imageUploadField"),
  imageUpload: document.querySelector("#imageUpload"),
  imageStatus: document.querySelector("#imageStatus"),
  imagePreview: document.querySelector("#imagePreview"),
  heroImageUploadField: document.querySelector("#heroImageUploadField"),
  heroImageUpload: document.querySelector("#heroImageUpload"),
  heroImageStatus: document.querySelector("#heroImageStatus"),
  heroImagePreview: document.querySelector("#heroImagePreview"),
  heroImagePositionField: document.querySelector("#heroImagePositionField"),
  heroImagePositionInputs: document.querySelectorAll('input[name="heroImagePosition"]'),
  quoteColorField: document.querySelector("#quoteColorField"),
  quoteColorInputs: document.querySelectorAll('input[name="quoteColor"]'),
  splitColorField: document.querySelector("#splitColorField"),
  splitColorInputs: document.querySelectorAll('input[name="splitColor"]'),
  accordionEditor: document.querySelector("#accordionEditor"),
  accordionItemEditorList: document.querySelector("#accordionItemEditorList"),
  addAccordionItemBtn: document.querySelector("#addAccordionItemBtn"),
  galleryEditor: document.querySelector("#galleryEditor"),
  galleryUpload: document.querySelector("#galleryUpload"),
  galleryImageList: document.querySelector("#galleryImageList"),
  cardsEditor: document.querySelector("#cardsEditor"),
  cardColumnsInputs: document.querySelectorAll('input[name="cardColumns"]'),
  cardItemEditorList: document.querySelector("#cardItemEditorList"),
  addCardItemBtn: document.querySelector("#addCardItemBtn"),
  eventsEditor: document.querySelector("#eventsEditor"),
  eventItemEditorList: document.querySelector("#eventItemEditorList"),
  addEventItemBtn: document.querySelector("#addEventItemBtn"),
  visibleToggle: document.querySelector("#visibleToggle"),
  inspectorTitle: document.querySelector("#inspectorTitle"),
  previewFrame: document.querySelector("#previewFrame"),
  sitePreview: document.querySelector("#sitePreview"),
  exportCode: document.querySelector("#exportCode"),
  statusText: document.querySelector("#statusText"),
  undoBtn: document.querySelector("#undoBtn"),
  redoBtn: document.querySelector("#redoBtn"),
  saveBtn: document.querySelector("#saveBtn"),
  exportBtn: document.querySelector("#exportBtn"),
  downloadBtn: document.querySelector("#downloadBtn"),
  addGroupBtn: document.querySelector("#addGroupBtn"),
  addSectionBtn: document.querySelector("#addSectionBtn"),
  removeSectionBtn: document.querySelector("#removeSectionBtn")
};

function slugify(value, fallback = "group") {
  return String(value || fallback)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || fallback;
}

function defaultGroupIdForSection(section) {
  if (!section) return DEFAULT_GROUPS[0].id;
  if (section.id === "hero" || section.id === "principle" || section.layout === "hero") return "overview";
  if (["academics", "facts", "research"].includes(section.id) || section.layout === "stats") return "academics";
  if (["campus-life", "gallery", "philadelphia", "cards"].includes(section.id) || ["accordion", "gallery", "image", "cards"].includes(section.layout)) {
    return "campus-life";
  }
  if (["events", "video", "quote"].includes(section.id) || ["events", "video", "quote"].includes(section.layout)) return "happening-now";
  return DEFAULT_GROUPS[0].id;
}

function uniqueGroupId(label, existingIds = []) {
  const base = slugify(label || "group");
  let candidate = base;
  let index = 2;
  while (existingIds.includes(candidate)) {
    candidate = `${base}-${index}`;
    index += 1;
  }
  return candidate;
}

function ensureGroups(targetState) {
  if (!targetState.groups || !Array.isArray(targetState.groups) || !targetState.groups.length) {
    targetState.groups = structuredClone(DEFAULT_GROUPS);
  }

  const existingIds = new Set();
  targetState.groups = targetState.groups.map((group, index) => {
    const defaultGroup = DEFAULT_GROUPS[index] || DEFAULT_GROUPS[0];
    const label = group.label || defaultGroup.label || `Group ${index + 1}`;
    const id = group.id && !existingIds.has(group.id) ? group.id : uniqueGroupId(label, Array.from(existingIds));
    existingIds.add(id);

    return {
      id,
      label,
      navTitle: group.navTitle || label,
      visibleInNav: group.visibleInNav !== false,
      parallaxImage: group.parallaxImage || defaultGroup.parallaxImage || ""
    };
  });

  if (!targetState.sections) return;

  const validIds = new Set(targetState.groups.map((group) => group.id));
  targetState.sections.forEach((section) => {
    if (!validIds.has(section.groupId)) {
      section.groupId = defaultGroupIdForSection(section);
    }
    if (!validIds.has(section.groupId)) {
      section.groupId = targetState.groups[0].id;
    }
  });
}

function groupById(groupId) {
  ensureGroups(state);
  return state.groups.find((group) => group.id === groupId) || state.groups[0];
}

function normalizeStoredState(storedState) {
  if (!storedState || storedState.previewId !== PREVIEW_ID) {
    return structuredClone(starterState);
  }

  const loadedState = { ...structuredClone(starterState), ...storedState };
  if (!Object.prototype.hasOwnProperty.call(storedState, "videoSectionSeeded")) {
    loadedState.videoSectionSeeded = false;
  }
  if (!Object.prototype.hasOwnProperty.call(storedState, "cardsSectionSeeded")) {
    loadedState.cardsSectionSeeded = false;
  }
  if (!Object.prototype.hasOwnProperty.call(storedState, "eventsSectionSeeded")) {
    loadedState.eventsSectionSeeded = false;
  }
  if (!Object.prototype.hasOwnProperty.call(storedState, "externalLinkIcons")) {
    loadedState.externalLinkIcons = Object.prototype.hasOwnProperty.call(storedState, "footerExternalIcons")
      ? storedState.footerExternalIcons
      : true;
  }
  ensureGroups(loadedState);
  if (!Object.prototype.hasOwnProperty.call(storedState, "typographyDefaultsUpdated")) {
    if (loadedState.font === "EB Garamond" && loadedState.secondaryFont === "Roboto") {
      loadedState.font = "Roboto";
      loadedState.secondaryFont = "EB Garamond";
    }
    loadedState.typographyDefaultsUpdated = true;
  }
  if (loadedState.sections && loadedState.sections[0] && loadedState.sections[0].id === "hero" && loadedState.sections[0].layout === "feature") {
    loadedState.sections[0].layout = "hero";
    if (loadedState.sections[0].featureImage && !loadedState.sections[0].heroImage) {
      loadedState.sections[0].heroImage = loadedState.sections[0].featureImage;
    }
  }
  if (loadedState.sections) {
    loadedState.sections.forEach((section) => {
      if (layoutHasButton(section.layout) && !section.buttonUrl) {
        section.buttonUrl = DEFAULT_BUTTON_URL;
      }
    });
    const defaultQuoteSection = loadedState.sections.find((section) => section.layout === "quote");
    if (
      defaultQuoteSection &&
      defaultQuoteSection.heading === "Creating knowledge to benefit the world." &&
      defaultQuoteSection.body === "A Penn-inspired close for the preview: ambitious, civic-minded, research-driven, and grounded in a historic campus community."
    ) {
      defaultQuoteSection.heading = "Benjamin Franklin";
      defaultQuoteSection.body = "Well done is better than well said";
    }
  }
  replaceBrokenPreviewImages(loadedState);
  ensureCardsSection(loadedState);
  ensureEventsSection(loadedState);
  ensureVideoSection(loadedState);
  ensureGroups(loadedState);
  return loadedState;
}

function loadState() {
  const stored = localStorage.getItem("website-builder-state");
  if (!stored) return structuredClone(starterState);

  try {
    return normalizeStoredState(JSON.parse(stored));
  } catch {
    return structuredClone(starterState);
  }
}

function defaultVideoSection() {
  return {
    id: "video",
    groupId: "happening-now",
    layout: "video",
    label: "Video",
    heading: "A quick comic intermission.",
    body: "Use this full-width video section for a little levity, a launch film, or any YouTube or Vimeo story you want to feature.",
    videoUrl: DEFAULT_VIDEO_URL,
    visible: true
  };
}

function defaultCardsSection() {
  return {
    id: "cards",
    groupId: "campus-life",
    layout: "cards",
    label: "Cards",
    heading: "Explore Penn",
    body: "Use cards to highlight high-priority paths, stories, or calls to action with color and imagery.",
    cardColumns: 3,
    cardItems: defaultCardItems(),
    visible: true
  };
}

function defaultEventsSection() {
  return {
    id: "events",
    groupId: "happening-now",
    layout: "events",
    label: "Events",
    heading: "Events",
    body: "A Penn-inspired event lineup styled with calendar date cards, editorial copy, and optional imagery.",
    eventItems: defaultEventItems(),
    visible: true
  };
}

function ensureVideoSection(targetState) {
  if (!targetState.sections) return;

  const existingVideoSection = targetState.sections.find((section) => section.layout === "video");
  if (existingVideoSection) {
    if (!existingVideoSection.videoUrl || OLD_DEFAULT_VIDEO_URLS.includes(existingVideoSection.videoUrl)) {
      existingVideoSection.heading = "A quick comic intermission.";
      existingVideoSection.body = "Use this full-width video section for a little levity, a launch film, or any YouTube or Vimeo story you want to feature.";
      existingVideoSection.videoUrl = DEFAULT_VIDEO_URL;
    }
    targetState.videoSectionSeeded = true;
    return;
  }

  if (targetState.videoSectionSeeded) return;

  const quoteIndex = targetState.sections.findIndex((section) => section.layout === "quote");
  const insertIndex = quoteIndex === -1 ? targetState.sections.length : quoteIndex;
  targetState.sections.splice(insertIndex, 0, defaultVideoSection());
  targetState.videoSectionSeeded = true;
}

function ensureCardsSection(targetState) {
  if (!targetState.sections) return;

  const existingCardsSection = targetState.sections.find((section) => section.layout === "cards");
  if (existingCardsSection) {
    existingCardsSection.cardItems = cardItemsFor(existingCardsSection);
    targetState.cardsSectionSeeded = true;
    return;
  }

  if (targetState.cardsSectionSeeded) return;

  const videoIndex = targetState.sections.findIndex((section) => section.layout === "video");
  const quoteIndex = targetState.sections.findIndex((section) => section.layout === "quote");
  const insertIndex = videoIndex !== -1 ? videoIndex : quoteIndex !== -1 ? quoteIndex : targetState.sections.length;
  targetState.sections.splice(insertIndex, 0, defaultCardsSection());
  targetState.cardsSectionSeeded = true;
}

function ensureEventsSection(targetState) {
  if (!targetState.sections) return;

  const existingEventsSection = targetState.sections.find((section) => section.layout === "events");
  if (existingEventsSection) {
    if (existingEventsSection.label === "Upcoming Events") {
      existingEventsSection.label = "Events";
    }
    if (existingEventsSection.heading === "Upcoming Events") {
      existingEventsSection.heading = "Events";
    }
    existingEventsSection.eventItems = eventItemsFor(existingEventsSection);
    targetState.eventsSectionSeeded = true;
    return;
  }

  if (targetState.eventsSectionSeeded) return;

  const videoIndex = targetState.sections.findIndex((section) => section.layout === "video");
  const quoteIndex = targetState.sections.findIndex((section) => section.layout === "quote");
  const insertIndex = videoIndex !== -1 ? videoIndex : quoteIndex !== -1 ? quoteIndex : targetState.sections.length;
  targetState.sections.splice(insertIndex, 0, defaultEventsSection());
  targetState.eventsSectionSeeded = true;
}

function replaceBrokenPreviewImages(targetState) {
  if (!targetState.sections) return;

  const replacementImages = [PENN_GALLERY_CAMPUS, PENN_GALLERY_RESEARCH, PENN_GALLERY_CITY];
  targetState.sections.forEach((section) => {
    if (section.heroImage && section.heroImage.includes("images.unsplash.com")) {
      section.heroImage = PENN_HERO_IMAGE;
    }

    if (section.image && section.image.includes("images.unsplash.com")) {
      section.image = PENN_GALLERY_CITY;
    }

    if (section.galleryImages) {
      section.galleryImages = section.galleryImages.map((image, index) => {
        const imageObject = typeof image === "string" ? { id: `gallery-migrated-${index}`, src: image } : image;
        if (imageObject.src && imageObject.src.includes("images.unsplash.com")) {
          return {
            ...imageObject,
            src: replacementImages[index % replacementImages.length]
          };
        }

        return imageObject;
      });
    }
  });

  const gallerySection = targetState.sections.find((section) => section.id === "gallery" && section.layout === "gallery");
  if (!gallerySection) return;

  const existingImages = Array.isArray(gallerySection.galleryImages) ? gallerySection.galleryImages : [];
  const existingSources = existingImages.map((image) => (typeof image === "string" ? image : image.src)).filter(Boolean);
  const oldDefaultSources = [PENN_GALLERY_CAMPUS, PENN_GALLERY_RESEARCH, PENN_GALLERY_CITY];
  const isOldDefaultGallery = existingSources.length <= oldDefaultSources.length && existingSources.every((src) => oldDefaultSources.includes(src));
  if (!existingSources.length || isOldDefaultGallery) {
    gallerySection.body = "A scrollable preview gallery for Penn buildings, student life, and research.";
    gallerySection.galleryImages = PENN_GALLERY_IMAGES.map((src, index) => ({
      id: `gallery-penn-${index + 1}`,
      src
    }));
    return;
  }

  const missingDefaultImages = PENN_GALLERY_IMAGES.filter((src) => !existingSources.includes(src));
  if (!missingDefaultImages.length && existingSources.length >= PENN_GALLERY_IMAGES.length) return;

  gallerySection.body = "A scrollable preview gallery for Penn buildings, student life, and research.";
  gallerySection.galleryImages = [
    ...existingImages.map((image, index) => (typeof image === "string" ? { id: `gallery-existing-${index}`, src: image } : image)),
    ...missingDefaultImages.map((src, index) => ({
      id: `gallery-penn-added-${index + 1}`,
      src
    }))
  ];
}

function selectedSection() {
  return state.sections.find((section) => section.id === state.selectedId) || state.sections[0];
}

function activePalette() {
  return palettes.find((palette) => palette.id === state.palette) || palettes[0];
}

function activeFontStack() {
  return fontStacks[state.font] || fontStacks.Inter;
}

function activeSecondaryFontStack() {
  return fontStacks[state.secondaryFont] || fontStacks.Inter;
}

function cssUrl(value) {
  return `url("${String(value).replaceAll("\\", "\\\\").replaceAll('"', '\\"')}")`;
}

function currentHeroImage() {
  const hero = state.sections.find((section) => section.layout === "hero" && section.visible) || state.sections[0] || starterState.sections[0];
  return hero.heroImage || DEFAULT_HERO_IMAGE;
}

function layoutHasButton(layout) {
  return layout === "hero" || layout === "feature" || layout === "split";
}

function buttonTextFor(section) {
  if (section.buttonText) return section.buttonText;
  return section.layout === "hero" ? "Book a call" : "Start a project";
}

function buttonUrlFor(section) {
  return section.buttonUrl || DEFAULT_BUTTON_URL;
}

function defaultAccordionItems() {
  return [
    {
      id: `accordion-${Date.now()}-1`,
      title: "What is included?",
      body: "A focused section with a clear title, concise answer, and room to add as many items as you need."
    },
    {
      id: `accordion-${Date.now()}-2`,
      title: "Can I customize the items?",
      body: "Yes. Add, edit, remove, expand, and collapse accordion items directly from the studio."
    }
  ];
}

function accordionItemsFor(section) {
  if (!section.accordionItems || !section.accordionItems.length) {
    section.accordionItems = defaultAccordionItems();
  }

  return section.accordionItems;
}

function galleryImagesFor(section) {
  if (!section.galleryImages) {
    section.galleryImages = [];
  }

  section.galleryImages = section.galleryImages.map((image, index) => {
    if (typeof image === "string") {
      return {
        id: `gallery-${Date.now()}-${index}`,
        src: image
      };
    }

    return image;
  });

  return section.galleryImages;
}

function defaultCardItems() {
  return [
    {
      id: `card-${Date.now()}-1`,
      title: "Student Life",
      url: DEFAULT_BUTTON_URL,
      body: "Clubs, traditions, cultural centers, performances, and campus events make Penn feel active every week.",
      color: "white",
      image: PENN_STUDENT_HOLI_IMAGE
    },
    {
      id: `card-${Date.now()}-2`,
      title: "Research",
      url: DEFAULT_BUTTON_URL,
      body: "Labs, clinics, studios, and institutes connect discovery with practical impact across disciplines.",
      color: "blue",
      image: PENN_RESEARCH_LAB_IMAGE
    },
    {
      id: `card-${Date.now()}-3`,
      title: "Campus Landmarks",
      url: DEFAULT_BUTTON_URL,
      body: "Historic buildings and green spaces anchor a campus woven into the life of Philadelphia.",
      color: "red",
      image: PENN_FISHER_FINE_ARTS_IMAGE
    }
  ];
}

function cardItemsFor(section) {
  if (!section.cardItems || !section.cardItems.length) {
    section.cardItems = defaultCardItems();
  }

  section.cardItems = section.cardItems.map((card, index) => {
    if (typeof card === "string") {
      return {
        id: `card-${Date.now()}-${index}`,
        title: card,
        url: DEFAULT_BUTTON_URL,
        body: "",
        color: "white",
        image: ""
      };
    }

    return {
      id: card.id || `card-${Date.now()}-${index}`,
      title: card.title || `Card ${index + 1}`,
      url: card.url || DEFAULT_BUTTON_URL,
      body: card.body || "",
      color: ["white", "blue", "red"].includes(card.color) ? card.color : "white",
      image: card.image || ""
    };
  });

  if (![2, 3].includes(Number(section.cardColumns))) {
    section.cardColumns = 3;
  }

  return section.cardItems;
}

function defaultEventItems() {
  return [
    {
      id: `event-${Date.now()}-1`,
      category: "Talks",
      month: "MAY",
      day: "14",
      title: "Boosting Infrastructure Investment for Global Cities",
      url: DEFAULT_BUTTON_URL,
      description: "Susan Wachter joins public finance experts for a conversation on how cities can meet the demands of population growth and climate change.",
      image: PENN_GALLERY_CITY
    },
    {
      id: `event-${Date.now()}-2`,
      category: "Student Life",
      month: "MAY",
      day: "21",
      title: "Spring Traditions Across Campus",
      url: DEFAULT_BUTTON_URL,
      description: "Students gather for performances, cultural events, and campus traditions that connect the Penn community.",
      image: PENN_STUDENT_HOLI_IMAGE
    },
    {
      id: `event-${Date.now()}-3`,
      category: "Research",
      month: "JUN",
      day: "04",
      title: "Discovery at the Edge of Medicine and Engineering",
      url: DEFAULT_BUTTON_URL,
      description: "Faculty and students share new research that connects labs, clinics, and technology with public impact.",
      image: PENN_RESEARCH_LAB_IMAGE
    }
  ];
}

function eventItemsFor(section) {
  if (!section.eventItems || !section.eventItems.length) {
    section.eventItems = defaultEventItems();
  }

  section.eventItems = section.eventItems.slice(0, 3).map((eventItem, index) => ({
    id: eventItem.id || `event-${Date.now()}-${index}`,
    category: eventItem.category || "Event",
    month: eventItem.month || "MAY",
    day: eventItem.day || String(index + 1).padStart(2, "0"),
    title: eventItem.title || `Upcoming event ${index + 1}`,
    url: eventItem.url || DEFAULT_BUTTON_URL,
    description: eventItem.description || eventItem.body || "",
    image: eventItem.image || ""
  }));

  while (section.eventItems.length < 2) {
    section.eventItems.push(defaultEventItems()[section.eventItems.length]);
  }

  return section.eventItems;
}

function readImageFiles(files, onLoad) {
  const imageFiles = Array.from(files).filter((file) => file.type.startsWith("image/"));
  if (!imageFiles.length) {
    onLoad([]);
    return;
  }

  const results = [];
  let remaining = imageFiles.length;

  imageFiles.forEach((file, index) => {
    readImageFile(file, (imageData) => {
      results[index] = {
        id: `gallery-${Date.now()}-${index}`,
        src: imageData
      };
      remaining -= 1;

      if (remaining === 0) {
        onLoad(results.filter(Boolean));
      }
    });
  });
}

function recordChange(mutator) {
  undoStack.push(structuredClone(state));
  redoStack = [];
  mutator();
  persist();
  render();
}

function persist() {
  persistLocalState();
  persistCmsState();
}

function persistLocalState() {
  try {
    localStorage.setItem("website-builder-state", JSON.stringify(state));
    showStatus("Saved");
  } catch {
    showStatus("Preview only");
  }
}

function persistCmsState() {
  if (!cmsEnabled) return;

  window.clearTimeout(cmsSaveTimer);
  cmsSaveTimer = window.setTimeout(() => {
    fetch("/api/site", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ state })
    })
      .then((response) => {
        if (!response.ok) throw new Error("CMS save failed");
        showStatus("CMS saved");
      })
      .catch(() => {
        cmsEnabled = false;
        showStatus("Local only");
      });
  }, 400);
}

function loadCmsState() {
  if (!cmsEnabled) return;

  fetch("/api/site", { cache: "no-store" })
    .then((response) => {
      if (!response.ok) throw new Error("CMS unavailable");
      return response.json();
    })
    .then((payload) => {
      if (!payload || !payload.state) {
        persistCmsState();
        return;
      }

      state = normalizeStoredState(payload.state);
      undoStack = [];
      redoStack = [];
      persistLocalState();
      render();
      showStatus("CMS loaded");
    })
    .catch(() => {
      cmsEnabled = false;
    });
}

function showStatus(text) {
  elements.statusText.textContent = text;
  window.clearTimeout(saveTimer);
  saveTimer = window.setTimeout(() => {
    elements.statusText.textContent = "Ready";
  }, 1200);
}

function downloadFilenameBase() {
  return String(state.siteTitle || "website")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "website";
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
}

function bytesFromText(text) {
  return new TextEncoder().encode(text);
}

function extensionForMime(mimeType) {
  const cleanType = String(mimeType || "").toLowerCase().split(";")[0];
  if (cleanType === "image/jpeg" || cleanType === "image/jpg") return "jpg";
  if (cleanType === "image/png") return "png";
  if (cleanType === "image/gif") return "gif";
  if (cleanType === "image/webp") return "webp";
  if (cleanType === "image/svg+xml") return "svg";
  return "bin";
}

function bytesFromDataUrl(dataUrl) {
  const match = String(dataUrl).match(/^data:([^;,]+)?(;base64)?,(.*)$/);
  if (!match) return null;

  const [, mimeType = "application/octet-stream", base64Flag, payload] = match;
  if (base64Flag) {
    const binary = atob(payload);
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index += 1) {
      bytes[index] = binary.charCodeAt(index);
    }
    return { bytes, extension: extensionForMime(mimeType) };
  }

  return {
    bytes: bytesFromText(decodeURIComponent(payload)),
    extension: extensionForMime(mimeType)
  };
}

function shouldPackageAsset(src) {
  if (!src || src.startsWith("data:")) return false;
  if (/^(https?:|mailto:|tel:|#)/i.test(src)) return false;
  return true;
}

function normalizedAssetPath(src) {
  return String(src).replace(/^\.?\//, "").split(/[?#]/)[0];
}

async function fetchAssetBytes(path) {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Could not fetch ${path}`);
  }
  return new Uint8Array(await response.arrayBuffer());
}

async function buildZipExport(html) {
  const files = [];
  const packagedAssets = new Map();
  let uploadedImageCount = 0;

  const packagedHtml = html.replace(/(<img\b[^>]*\bsrc=")([^"]+)(")/g, (match, before, src, after) => {
    if (src.startsWith("data:")) {
      if (!packagedAssets.has(src)) {
        const imageData = bytesFromDataUrl(src);
        if (!imageData) return match;

        uploadedImageCount += 1;
        const filename = `assets/uploaded-image-${uploadedImageCount}.${imageData.extension}`;
        packagedAssets.set(src, filename);
        files.push({ name: filename, bytes: imageData.bytes });
      }
      return `${before}${packagedAssets.get(src)}${after}`;
    }

    if (shouldPackageAsset(src)) {
      const assetPath = normalizedAssetPath(src);
      if (!packagedAssets.has(assetPath)) {
        packagedAssets.set(assetPath, assetPath);
      }
    }

    return match;
  });

  for (const [assetPath, filename] of packagedAssets.entries()) {
    if (assetPath.startsWith("data:")) continue;
    files.push({ name: filename, bytes: await fetchAssetBytes(assetPath) });
  }

  files.unshift({ name: "index.html", bytes: bytesFromText(packagedHtml) });

  return {
    html: packagedHtml,
    blob: new Blob([createZipArchive(files)], { type: "application/zip" })
  };
}

function zipCrcTable() {
  if (zipCrcTable.cache) return zipCrcTable.cache;

  zipCrcTable.cache = Array.from({ length: 256 }, (_, index) => {
    let value = index;
    for (let bit = 0; bit < 8; bit += 1) {
      value = value & 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
    }
    return value >>> 0;
  });

  return zipCrcTable.cache;
}

function crc32(bytes) {
  const table = zipCrcTable();
  let crc = 0xffffffff;
  bytes.forEach((byte) => {
    crc = table[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  });
  return (crc ^ 0xffffffff) >>> 0;
}

function dosDateTime(date = new Date()) {
  const year = Math.max(date.getFullYear(), 1980);
  return {
    time: (date.getHours() << 11) | (date.getMinutes() << 5) | Math.floor(date.getSeconds() / 2),
    date: ((year - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate()
  };
}

function writeUint16(target, value) {
  target.push(value & 0xff, (value >>> 8) & 0xff);
}

function writeUint32(target, value) {
  target.push(value & 0xff, (value >>> 8) & 0xff, (value >>> 16) & 0xff, (value >>> 24) & 0xff);
}

function createZipArchive(files) {
  const encoder = new TextEncoder();
  const localParts = [];
  const centralParts = [];
  const { time, date } = dosDateTime();
  let offset = 0;

  files.forEach((file) => {
    const nameBytes = encoder.encode(file.name);
    const fileBytes = file.bytes;
    const checksum = crc32(fileBytes);
    const localHeader = [];

    writeUint32(localHeader, 0x04034b50);
    writeUint16(localHeader, 20);
    writeUint16(localHeader, 0);
    writeUint16(localHeader, 0);
    writeUint16(localHeader, time);
    writeUint16(localHeader, date);
    writeUint32(localHeader, checksum);
    writeUint32(localHeader, fileBytes.length);
    writeUint32(localHeader, fileBytes.length);
    writeUint16(localHeader, nameBytes.length);
    writeUint16(localHeader, 0);

    localParts.push(new Uint8Array(localHeader), nameBytes, fileBytes);

    const centralHeader = [];
    writeUint32(centralHeader, 0x02014b50);
    writeUint16(centralHeader, 20);
    writeUint16(centralHeader, 20);
    writeUint16(centralHeader, 0);
    writeUint16(centralHeader, 0);
    writeUint16(centralHeader, time);
    writeUint16(centralHeader, date);
    writeUint32(centralHeader, checksum);
    writeUint32(centralHeader, fileBytes.length);
    writeUint32(centralHeader, fileBytes.length);
    writeUint16(centralHeader, nameBytes.length);
    writeUint16(centralHeader, 0);
    writeUint16(centralHeader, 0);
    writeUint16(centralHeader, 0);
    writeUint16(centralHeader, 0);
    writeUint32(centralHeader, 0);
    writeUint32(centralHeader, offset);

    centralParts.push(new Uint8Array(centralHeader), nameBytes);
    offset += localHeader.length + nameBytes.length + fileBytes.length;
  });

  const centralSize = centralParts.reduce((total, part) => total + part.length, 0);
  const endRecord = [];
  writeUint32(endRecord, 0x06054b50);
  writeUint16(endRecord, 0);
  writeUint16(endRecord, 0);
  writeUint16(endRecord, files.length);
  writeUint16(endRecord, files.length);
  writeUint32(endRecord, centralSize);
  writeUint32(endRecord, offset);
  writeUint16(endRecord, 0);

  return new Blob([...localParts, ...centralParts, new Uint8Array(endRecord)]);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function videoEmbedFor(rawUrl) {
  if (!rawUrl) return null;

  let url;
  try {
    url = new URL(rawUrl.trim());
  } catch {
    return null;
  }

  const host = url.hostname.toLowerCase().replace(/^www\./, "");
  const pathParts = url.pathname.split("/").filter(Boolean);

  if (host === "youtu.be") {
    const id = cleanVideoId(pathParts[0]);
    return id ? { provider: "youtube", src: `https://www.youtube.com/embed/${id}?enablejsapi=1&rel=0&modestbranding=1&playsinline=1` } : null;
  }

  if (host === "youtube.com" || host === "m.youtube.com" || host === "youtube-nocookie.com") {
    const watchId = cleanVideoId(url.searchParams.get("v"));
    const embedId = pathParts[0] === "embed" ? cleanVideoId(pathParts[1]) : null;
    const shortsId = pathParts[0] === "shorts" ? cleanVideoId(pathParts[1]) : null;
    const id = watchId || embedId || shortsId;
    return id ? { provider: "youtube", src: `https://www.youtube.com/embed/${id}?enablejsapi=1&rel=0&modestbranding=1&playsinline=1` } : null;
  }

  if (host === "vimeo.com" || host === "player.vimeo.com") {
    const id = pathParts.find((part) => /^\d+$/.test(part));
    return id ? { provider: "vimeo", src: `https://player.vimeo.com/video/${id}?api=1&title=0&byline=0&portrait=0` } : null;
  }

  return null;
}

function cleanVideoId(value) {
  if (!value) return "";
  const [id] = String(value).split(/[?&#]/);
  return /^[A-Za-z0-9_-]+$/.test(id) ? id : "";
}

function readImageFile(file, onLoad) {
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    const rawData = String(reader.result);

    if (file.type === "image/svg+xml" || file.type === "image/gif") {
      onLoad(rawData);
      return;
    }

    const image = new Image();
    image.addEventListener("load", () => {
      const maxSize = 1600;
      const scale = Math.min(1, maxSize / Math.max(image.width, image.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(image.width * scale));
      canvas.height = Math.max(1, Math.round(image.height * scale));
      const context = canvas.getContext("2d");

      if (!context) {
        onLoad(rawData);
        return;
      }

      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      onLoad(canvas.toDataURL("image/jpeg", 0.88));
    });

    image.addEventListener("error", () => {
      onLoad(rawData);
    });

    image.src = rawData;
  });

  reader.readAsDataURL(file);
}

function sectionLabel(section) {
  const explicitLabel = section.label ? section.label.trim() : "";
  if (explicitLabel) return explicitLabel;

  if (layoutLabels[section.layout]) return layoutLabels[section.layout];

  const words = section.heading.trim().split(/\s+/).slice(0, 4).join(" ");
  return words || "Untitled section";
}

function renderPaletteChoices() {
  elements.paletteChoices.innerHTML = "";
  palettes.forEach((palette) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `palette-button${palette.id === state.palette ? " active" : ""}`;
    button.title = palette.name;
    button.setAttribute("aria-label", palette.name);
    button.setAttribute("role", "radio");
    button.setAttribute("aria-checked", String(palette.id === state.palette));
    button.addEventListener("click", () => {
      recordChange(() => {
        state.palette = palette.id;
      });
    });

    palette.colors.forEach((color) => {
      const swatch = document.createElement("span");
      swatch.className = "swatch";
      swatch.style.background = color;
      button.append(swatch);
    });

    elements.paletteChoices.append(button);
  });
}

function sectionsForGroup(groupId, includeHidden = true) {
  return state.sections.filter((section) => section.groupId === groupId && (includeHidden || section.visible));
}

function renderGroupEditors() {
  ensureGroups(state);
  elements.groupEditorList.innerHTML = "";

  state.groups.forEach((group, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "group-editor";
    wrapper.innerHTML = `
      <label class="field">
        <span>Group label</span>
        <input type="text" maxlength="42" data-group-label="${group.id}">
      </label>
      <label class="field">
        <span>Navigation label</span>
        <input type="text" maxlength="42" data-group-nav="${group.id}">
      </label>
      <label class="toggle-row">
        <span>Show in navigation</span>
        <input type="checkbox" data-group-visible="${group.id}">
      </label>
      <label class="field image-upload-field">
        <span>Parallax image</span>
        <input type="file" accept="image/*" data-group-image="${group.id}">
        <small>${group.parallaxImage ? "Image selected" : "No parallax image"}</small>
      </label>
      ${
        group.parallaxImage
          ? `<div class="gallery-image-editor"><img src="${escapeHtml(group.parallaxImage)}" alt=""><div><p class="gallery-empty">Current parallax image</p><button class="small-danger-button" type="button" data-remove-group-image="${group.id}">Remove image</button></div></div>`
          : ""
      }
      <button class="small-danger-button" type="button" data-remove-group="${group.id}" ${state.groups.length <= 1 ? "disabled" : ""}>Remove group</button>
    `;

    wrapper.querySelector(`[data-group-label="${group.id}"]`).value = group.label || `Group ${index + 1}`;
    wrapper.querySelector(`[data-group-nav="${group.id}"]`).value = group.navTitle || group.label || `Group ${index + 1}`;
    wrapper.querySelector(`[data-group-visible="${group.id}"]`).checked = group.visibleInNav !== false;

    wrapper.querySelector(`[data-group-label="${group.id}"]`).addEventListener("change", (event) => {
      updateGroup(group.id, "label", event.target.value);
    });

    wrapper.querySelector(`[data-group-nav="${group.id}"]`).addEventListener("change", (event) => {
      updateGroup(group.id, "navTitle", event.target.value);
    });

    wrapper.querySelector(`[data-group-visible="${group.id}"]`).addEventListener("change", (event) => {
      updateGroup(group.id, "visibleInNav", event.target.checked);
    });

    wrapper.querySelector(`[data-group-image="${group.id}"]`).addEventListener("change", (event) => {
      updateGroupImage(group.id, event.target.files, event.target);
    });

    const removeImageButton = wrapper.querySelector(`[data-remove-group-image="${group.id}"]`);
    if (removeImageButton) {
      removeImageButton.addEventListener("click", () => {
        updateGroup(group.id, "parallaxImage", "");
      });
    }

    wrapper.querySelector(`[data-remove-group="${group.id}"]`).addEventListener("click", () => {
      removeGroup(group.id);
    });

    elements.groupEditorList.append(wrapper);
  });
}

function renderSectionList() {
  const template = document.querySelector("#sectionItemTemplate");
  elements.sectionList.innerHTML = "";

  ensureGroups(state);
  state.groups.forEach((group) => {
    const divider = document.createElement("div");
    divider.className = "section-group-divider";
    divider.textContent = group.label || "Group";
    elements.sectionList.append(divider);

    sectionsForGroup(group.id).forEach((section) => {
      const item = template.content.firstElementChild.cloneNode(true);
      item.dataset.sectionId = section.id;
      item.classList.toggle("active", section.id === state.selectedId);
      item.querySelector(".section-item-title").textContent = sectionLabel(section);
      item.querySelector(".section-item-kind").textContent = `${layoutLabels[section.layout] || section.layout}${section.visible ? "" : " hidden"}`;
      item.addEventListener("click", (event) => {
        if (suppressNextSectionClick) {
          event.preventDefault();
          suppressNextSectionClick = false;
          return;
        }
        state.selectedId = section.id;
        persist();
        render();
      });
      item.addEventListener("pointerdown", (event) => {
        if (event.button !== 0) return;
        pointerDrag = {
          active: false,
          dropAfter: false,
          sourceId: section.id,
          startX: event.clientX,
          startY: event.clientY,
          targetId: null
        };
      });
      elements.sectionList.append(item);
    });
  });
}

function clearDropTargets() {
  elements.sectionList.querySelectorAll(".dragging, .drop-target, .drop-before, .drop-after").forEach((target) => {
    target.classList.remove("dragging");
    target.classList.remove("drop-target");
    target.classList.remove("drop-before");
    target.classList.remove("drop-after");
  });
}

function updatePointerDropTarget(event) {
  if (!pointerDrag) return;

  clearDropTargets();
  const sourceItem = elements.sectionList.querySelector(`[data-section-id="${pointerDrag.sourceId}"]`);
  if (sourceItem) {
    sourceItem.classList.add("dragging");
  }

  const hoveredElement = document.elementFromPoint(event.clientX, event.clientY);
  const target = hoveredElement ? hoveredElement.closest(".section-item") : null;
  if (!target || !elements.sectionList.contains(target) || target.dataset.sectionId === pointerDrag.sourceId) {
    pointerDrag.targetId = null;
    return;
  }

  const bounds = target.getBoundingClientRect();
  pointerDrag.dropAfter = event.clientY > bounds.top + bounds.height / 2;
  pointerDrag.targetId = target.dataset.sectionId;
  target.classList.add("drop-target");
  target.classList.toggle("drop-before", !pointerDrag.dropAfter);
  target.classList.toggle("drop-after", pointerDrag.dropAfter);
}

function moveSection(sourceId, targetId, dropAfter) {
  if (!sourceId || !targetId || sourceId === targetId) return;

  const sourceIndex = state.sections.findIndex((section) => section.id === sourceId);
  const targetIndex = state.sections.findIndex((section) => section.id === targetId);
  if (sourceIndex === -1 || targetIndex === -1) return;

  recordChange(() => {
    const [movedSection] = state.sections.splice(sourceIndex, 1);
    const adjustedTargetIndex = sourceIndex < targetIndex ? targetIndex - 1 : targetIndex;
    const insertIndex = adjustedTargetIndex + (dropAfter ? 1 : 0);
    state.sections.splice(insertIndex, 0, movedSection);
    state.selectedId = movedSection.id;
  });
}

function renderInspector() {
  const section = selectedSection();
  if (!section) return;

  elements.inspectorTitle.textContent = sectionLabel(section);
  elements.sectionLabel.value = section.label || layoutLabels[section.layout] || "";
  elements.sectionLabel.placeholder = layoutLabels[section.layout] || "Section";
  elements.sectionHeadingLabel.textContent = section.layout === "quote" ? "Author" : "Heading";
  elements.sectionHeading.value = section.heading;
  elements.sectionBodyLabel.textContent = section.layout === "quote" ? "Quote" : "Body";
  elements.sectionBody.value = section.body;
  elements.layoutChoice.value = section.layout;
  elements.sectionGroup.innerHTML = state.groups
    .map((group) => `<option value="${escapeHtml(group.id)}">${escapeHtml(group.label || group.navTitle || group.id)}</option>`)
    .join("");
  elements.sectionGroup.value = groupById(section.groupId).id;
  elements.sectionBodyField.hidden = section.layout === "accordion";
  elements.buttonTextField.hidden = !layoutHasButton(section.layout);
  elements.buttonText.value = buttonTextFor(section);
  elements.buttonUrlField.hidden = !layoutHasButton(section.layout);
  elements.buttonUrl.value = layoutHasButton(section.layout) ? buttonUrlFor(section) : "";
  elements.videoUrlField.hidden = section.layout !== "video";
  elements.videoUrl.value = section.videoUrl || "";
  elements.imageUploadField.hidden = section.layout !== "image";
  elements.imageStatus.textContent = section.image ? "Image selected" : "No image selected";
  elements.imagePreview.hidden = section.layout !== "image" || !section.image;
  elements.imagePreview.innerHTML = section.image
    ? `
      <div class="gallery-image-editor">
        <img src="${escapeHtml(section.image)}" alt="">
        <div>
          <p class="gallery-empty">Current image</p>
        </div>
      </div>
    `
    : "";
  elements.heroImageUploadField.hidden = section.layout !== "hero";
  elements.heroImageStatus.textContent = section.heroImage ? "Hero image selected" : "Using default image";
  elements.heroImagePreview.hidden = section.layout !== "hero" || !section.heroImage;
  elements.heroImagePreview.innerHTML = section.heroImage
    ? `
      <div class="gallery-image-editor">
        <img src="${escapeHtml(section.heroImage)}" alt="">
        <div>
          <p class="gallery-empty">Current hero image</p>
        </div>
      </div>
    `
    : "";
  elements.heroImagePositionField.hidden = section.layout !== "hero";
  elements.heroImagePositionInputs.forEach((input) => {
    input.checked = input.value === (section.heroImagePosition || "right");
  });
  elements.quoteColorField.hidden = section.layout !== "quote";
  elements.quoteColorInputs.forEach((input) => {
    input.checked = input.value === (section.quoteColor || "red");
  });
  elements.splitColorField.hidden = section.layout !== "split";
  elements.splitColorInputs.forEach((input) => {
    input.checked = input.value === (section.splitColor || "blue");
  });
  elements.accordionEditor.hidden = section.layout !== "accordion";
  elements.galleryEditor.hidden = section.layout !== "gallery";
  elements.cardsEditor.hidden = section.layout !== "cards";
  elements.eventsEditor.hidden = section.layout !== "events";
  elements.addEventItemBtn.disabled = section.layout === "events" && eventItemsFor(section).length >= 3;
  elements.cardColumnsInputs.forEach((input) => {
    input.checked = Number(input.value) === Number(section.cardColumns || 3);
  });
  elements.visibleToggle.checked = section.visible;
  elements.removeSectionBtn.disabled = state.sections.length <= 1;
  renderAccordionEditor(section);
  renderGalleryEditor(section);
  renderCardsEditor(section);
  renderEventsEditor(section);
}

function renderAccordionEditor(section) {
  elements.accordionItemEditorList.innerHTML = "";
  if (section.layout !== "accordion") return;

  accordionItemsFor(section).forEach((item) => {
    const wrapper = document.createElement("div");
    wrapper.className = "accordion-item-editor";
    wrapper.innerHTML = `
      <label class="field">
        <span>Title</span>
        <input type="text" maxlength="80" data-accordion-title="${item.id}">
      </label>
      <label class="field">
        <span>Content</span>
        <textarea rows="3" maxlength="260" data-accordion-body="${item.id}"></textarea>
      </label>
      <button class="small-danger-button" type="button" data-remove-accordion-item="${item.id}">Remove item</button>
    `;

    wrapper.querySelector(`[data-accordion-title="${item.id}"]`).value = item.title;
    wrapper.querySelector(`[data-accordion-body="${item.id}"]`).value = item.body;

    wrapper.querySelector(`[data-accordion-title="${item.id}"]`).addEventListener("input", (event) => {
      updateAccordionItem(item.id, "title", event.target.value);
    });

    wrapper.querySelector(`[data-accordion-body="${item.id}"]`).addEventListener("input", (event) => {
      updateAccordionItem(item.id, "body", event.target.value);
    });

    wrapper.querySelector(`[data-remove-accordion-item="${item.id}"]`).addEventListener("click", () => {
      removeAccordionItem(item.id);
    });

    elements.accordionItemEditorList.append(wrapper);
  });
}

function updateAccordionItem(itemId, key, value) {
  updateSelectedSection((section) => {
    const item = accordionItemsFor(section).find((candidate) => candidate.id === itemId);
    if (item) item[key] = value;
  });
}

function removeAccordionItem(itemId) {
  updateSelectedSection((section) => {
    section.accordionItems = accordionItemsFor(section).filter((item) => item.id !== itemId);
  });
}

function renderGalleryEditor(section) {
  elements.galleryImageList.innerHTML = "";
  if (section.layout !== "gallery") return;

  const images = galleryImagesFor(section);
  if (!images.length) {
    const empty = document.createElement("p");
    empty.className = "gallery-empty";
    empty.textContent = "No images yet.";
    elements.galleryImageList.append(empty);
    return;
  }

  images.forEach((image, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "gallery-image-editor";
    wrapper.innerHTML = `
      <img alt="">
      <div>
        <p class="gallery-empty">Image ${index + 1}</p>
        <button class="small-danger-button" type="button">Remove image</button>
      </div>
    `;
    wrapper.querySelector("img").src = image.src;
    wrapper.querySelector("button").addEventListener("click", () => {
      removeGalleryImage(image.id);
    });
    elements.galleryImageList.append(wrapper);
  });
}

function renderCardsEditor(section) {
  elements.cardItemEditorList.innerHTML = "";
  if (section.layout !== "cards") return;

  const cards = cardItemsFor(section);
  cards.forEach((card, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "card-item-editor";
    wrapper.innerHTML = `
      <label class="field">
        <span>Title</span>
        <input type="text" maxlength="80" data-card-title="${card.id}">
      </label>
      <label class="field">
        <span>URL</span>
        <input type="url" data-card-url="${card.id}" placeholder="${DEFAULT_BUTTON_URL}">
      </label>
      <label class="field">
        <span>Body</span>
        <textarea rows="3" maxlength="240" data-card-body="${card.id}"></textarea>
      </label>
      <label class="field compact">
        <span>Color</span>
        <select data-card-color="${card.id}">
          <option value="white">White</option>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
        </select>
      </label>
      <label class="field">
        <span>Image</span>
        <input type="file" accept="image/*" data-card-image="${card.id}">
        <small>${card.image ? "Image selected" : "No image selected"}</small>
      </label>
      ${card.image ? `<div class="gallery-image-editor"><img src="${escapeHtml(card.image)}" alt=""><div><p class="gallery-empty">Current image</p></div></div>` : ""}
      <button class="small-danger-button" type="button" data-remove-card-item="${card.id}">Remove card</button>
    `;

    wrapper.querySelector(`[data-card-title="${card.id}"]`).value = card.title || `Card ${index + 1}`;
    wrapper.querySelector(`[data-card-url="${card.id}"]`).value = card.url || DEFAULT_BUTTON_URL;
    wrapper.querySelector(`[data-card-body="${card.id}"]`).value = card.body || "";
    wrapper.querySelector(`[data-card-color="${card.id}"]`).value = card.color || "white";

    wrapper.querySelector(`[data-card-title="${card.id}"]`).addEventListener("input", (event) => {
      updateCardItem(card.id, "title", event.target.value);
    });

    wrapper.querySelector(`[data-card-url="${card.id}"]`).addEventListener("input", (event) => {
      updateCardItem(card.id, "url", event.target.value);
    });

    wrapper.querySelector(`[data-card-body="${card.id}"]`).addEventListener("input", (event) => {
      updateCardItem(card.id, "body", event.target.value);
    });

    wrapper.querySelector(`[data-card-color="${card.id}"]`).addEventListener("change", (event) => {
      updateCardItem(card.id, "color", event.target.value);
    });

    wrapper.querySelector(`[data-card-image="${card.id}"]`).addEventListener("change", (event) => {
      updateCardImage(card.id, event.target.files, event.target);
    });

    wrapper.querySelector(`[data-remove-card-item="${card.id}"]`).addEventListener("click", () => {
      removeCardItem(card.id);
    });

    elements.cardItemEditorList.append(wrapper);
  });
}

function updateCardItem(cardId, key, value) {
  updateSelectedSection((section) => {
    const card = cardItemsFor(section).find((candidate) => candidate.id === cardId);
    if (card) card[key] = value;
  });
}

function updateCardImage(cardId, files, input) {
  const [file] = files;
  if (!file) return;

  if (!file.type.startsWith("image/")) {
    showStatus("Choose an image");
    input.value = "";
    return;
  }

  const selectedId = state.selectedId;
  const previousState = structuredClone(state);
  readImageFile(file, (imageData) => {
    undoStack.push(previousState);
    redoStack = [];
    const section = state.sections.find((item) => item.id === selectedId);
    if (section) {
      const card = cardItemsFor(section).find((candidate) => candidate.id === cardId);
      if (card) card.image = imageData;
      state.selectedId = selectedId;
    }
    input.value = "";
    persist();
    render();
  });
}

function removeCardItem(cardId) {
  updateSelectedSection((section) => {
    section.cardItems = cardItemsFor(section).filter((card) => card.id !== cardId);
  });
}

function renderEventsEditor(section) {
  elements.eventItemEditorList.innerHTML = "";
  if (section.layout !== "events") return;

  const events = eventItemsFor(section);
  elements.addEventItemBtn.disabled = events.length >= 3;

  events.forEach((eventItem, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "event-item-editor";
    wrapper.innerHTML = `
      <div class="event-editor-row">
        <label class="field">
          <span>Month</span>
          <input type="text" maxlength="3" data-event-month="${eventItem.id}">
        </label>
        <label class="field">
          <span>Calendar number</span>
          <input type="text" maxlength="2" inputmode="numeric" data-event-day="${eventItem.id}">
        </label>
      </div>
      <label class="field">
        <span>Category</span>
        <input type="text" maxlength="36" data-event-category="${eventItem.id}">
      </label>
      <label class="field">
        <span>Title</span>
        <input type="text" maxlength="120" data-event-title="${eventItem.id}">
      </label>
      <label class="field">
        <span>URL</span>
        <input type="url" data-event-url="${eventItem.id}" placeholder="${DEFAULT_BUTTON_URL}">
      </label>
      <label class="field">
        <span>Description</span>
        <textarea rows="4" maxlength="520" data-event-description="${eventItem.id}"></textarea>
      </label>
      <label class="field">
        <span>Image</span>
        <input type="file" accept="image/*" data-event-image="${eventItem.id}">
        <small>${eventItem.image ? "Image selected" : "No image selected"}</small>
      </label>
      ${
        eventItem.image
          ? `<div class="gallery-image-editor"><img src="${escapeHtml(eventItem.image)}" alt=""><div><p class="gallery-empty">Current image</p><button class="small-danger-button" type="button" data-remove-event-image="${eventItem.id}">Remove image</button></div></div>`
          : ""
      }
      <button class="small-danger-button" type="button" data-remove-event-item="${eventItem.id}" ${events.length <= 2 ? "disabled" : ""}>Remove event</button>
    `;

    wrapper.querySelector(`[data-event-month="${eventItem.id}"]`).value = eventItem.month || "MAY";
    wrapper.querySelector(`[data-event-day="${eventItem.id}"]`).value = eventItem.day || String(index + 1).padStart(2, "0");
    wrapper.querySelector(`[data-event-category="${eventItem.id}"]`).value = eventItem.category || "Event";
    wrapper.querySelector(`[data-event-title="${eventItem.id}"]`).value = eventItem.title || `Upcoming event ${index + 1}`;
    wrapper.querySelector(`[data-event-url="${eventItem.id}"]`).value = eventItem.url || DEFAULT_BUTTON_URL;
    wrapper.querySelector(`[data-event-description="${eventItem.id}"]`).value = eventItem.description || "";

    wrapper.querySelector(`[data-event-month="${eventItem.id}"]`).addEventListener("input", (event) => {
      updateEventItem(eventItem.id, "month", event.target.value.toUpperCase());
    });

    wrapper.querySelector(`[data-event-day="${eventItem.id}"]`).addEventListener("input", (event) => {
      updateEventItem(eventItem.id, "day", event.target.value.replace(/\D/g, "").slice(0, 2));
    });

    wrapper.querySelector(`[data-event-category="${eventItem.id}"]`).addEventListener("input", (event) => {
      updateEventItem(eventItem.id, "category", event.target.value);
    });

    wrapper.querySelector(`[data-event-title="${eventItem.id}"]`).addEventListener("input", (event) => {
      updateEventItem(eventItem.id, "title", event.target.value);
    });

    wrapper.querySelector(`[data-event-url="${eventItem.id}"]`).addEventListener("input", (event) => {
      updateEventItem(eventItem.id, "url", event.target.value);
    });

    wrapper.querySelector(`[data-event-description="${eventItem.id}"]`).addEventListener("input", (event) => {
      updateEventItem(eventItem.id, "description", event.target.value);
    });

    wrapper.querySelector(`[data-event-image="${eventItem.id}"]`).addEventListener("change", (event) => {
      updateEventImage(eventItem.id, event.target.files, event.target);
    });

    const removeImageButton = wrapper.querySelector(`[data-remove-event-image="${eventItem.id}"]`);
    if (removeImageButton) {
      removeImageButton.addEventListener("click", () => {
        updateEventItem(eventItem.id, "image", "");
      });
    }

    wrapper.querySelector(`[data-remove-event-item="${eventItem.id}"]`).addEventListener("click", () => {
      removeEventItem(eventItem.id);
    });

    elements.eventItemEditorList.append(wrapper);
  });
}

function updateEventItem(eventId, key, value) {
  updateSelectedSection((section) => {
    const eventItem = eventItemsFor(section).find((candidate) => candidate.id === eventId);
    if (eventItem) eventItem[key] = value;
  });
}

function updateEventImage(eventId, files, input) {
  const [file] = files;
  if (!file) return;

  if (!file.type.startsWith("image/")) {
    showStatus("Choose an image");
    input.value = "";
    return;
  }

  const selectedId = state.selectedId;
  const previousState = structuredClone(state);
  readImageFile(file, (imageData) => {
    undoStack.push(previousState);
    redoStack = [];
    const section = state.sections.find((item) => item.id === selectedId);
    if (section) {
      const eventItem = eventItemsFor(section).find((candidate) => candidate.id === eventId);
      if (eventItem) eventItem.image = imageData;
      state.selectedId = selectedId;
    }
    input.value = "";
    persist();
    render();
  });
}

function removeEventItem(eventId) {
  updateSelectedSection((section) => {
    if (eventItemsFor(section).length <= 2) return;
    section.eventItems = eventItemsFor(section).filter((eventItem) => eventItem.id !== eventId);
  });
}

function removeGalleryImage(imageId) {
  updateSelectedSection((section) => {
    section.galleryImages = galleryImagesFor(section).filter((image) => image.id !== imageId);
  });
}

function updateGroup(groupId, key, value) {
  recordChange(() => {
    const group = state.groups.find((candidate) => candidate.id === groupId);
    if (group) group[key] = value;
  });
}

function updateGroupImage(groupId, files, input) {
  const [file] = files;
  if (!file) return;

  if (!file.type.startsWith("image/")) {
    showStatus("Choose an image");
    input.value = "";
    return;
  }

  const previousState = structuredClone(state);
  readImageFile(file, (imageData) => {
    undoStack.push(previousState);
    redoStack = [];
    const group = state.groups.find((candidate) => candidate.id === groupId);
    if (group) group.parallaxImage = imageData;
    input.value = "";
    persist();
    render();
  });
}

function removeGroup(groupId) {
  if (state.groups.length <= 1) return;

  recordChange(() => {
    const removedIndex = state.groups.findIndex((group) => group.id === groupId);
    if (removedIndex === -1) return;

    const fallbackGroup = state.groups[removedIndex === 0 ? 1 : removedIndex - 1];
    state.sections.forEach((section) => {
      if (section.groupId === groupId) section.groupId = fallbackGroup.id;
    });
    state.groups.splice(removedIndex, 1);
  });
}

function renderControls() {
  elements.siteTitle.value = state.siteTitle;
  elements.tagline.value = state.tagline;
  elements.externalLinkIcons.checked = state.externalLinkIcons !== false;
  elements.fontChoice.value = state.font;
  elements.secondaryFontChoice.value = state.secondaryFont || "Inter";
  elements.radiusControl.value = state.radius;
  elements.undoBtn.disabled = undoStack.length === 0;
  elements.redoBtn.disabled = redoStack.length === 0;
}

function renderPreview() {
  const palette = activePalette();
  elements.sitePreview.style.setProperty("--site-paper", palette.paper);
  elements.sitePreview.style.setProperty("--site-ink", palette.ink);
  elements.sitePreview.style.setProperty("--site-accent", palette.accent);
  elements.sitePreview.style.setProperty("--site-radius", `${state.radius}px`);
  elements.sitePreview.style.setProperty("--site-heading-font", activeFontStack());
  elements.sitePreview.style.setProperty("--site-body-font", activeSecondaryFontStack());
  elements.sitePreview.style.setProperty("--site-image", cssUrl(currentHeroImage()));
  elements.sitePreview.style.borderRadius = `${Math.min(Number(state.radius), 12)}px`;
  elements.sitePreview.classList.toggle("hide-external-icons", state.externalLinkIcons === false);
  elements.sitePreview.innerHTML = buildSiteHtml(false);
  updateParallax();
  elements.exportCode.value = buildExportDocument();
}

function updateParallax(root = elements.sitePreview, viewport = elements.previewFrame) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const viewportRect = viewport ? viewport.getBoundingClientRect() : { top: 0 };
  root.querySelectorAll(".site-group.has-parallax").forEach((group) => {
    const rect = group.getBoundingClientRect();
    const relativeTop = rect.top - viewportRect.top;
    const offset = Math.max(-90, Math.min(90, Math.round(relativeTop * -0.12)));
    group.style.setProperty("--parallax-offset", `${offset}px`);
  });
}

function handleVideoAction(button) {
  const panel = button.closest(".video-panel");
  const frame = panel ? panel.querySelector("iframe") : null;
  if (!frame || !frame.contentWindow) return;

  const provider = frame.dataset.videoProvider;
  const action = button.dataset.videoAction;

  if (provider === "youtube") {
    const func = action === "stop" ? "stopVideo" : "pauseVideo";
    frame.contentWindow.postMessage(JSON.stringify({ event: "command", func, args: [] }), "*");
  }

  if (provider === "vimeo") {
    frame.contentWindow.postMessage(JSON.stringify({ method: "pause" }), "*");
    if (action === "stop") {
      frame.contentWindow.postMessage(JSON.stringify({ method: "setCurrentTime", value: 0 }), "*");
    }
  }
}

function buildSectionHtml(section) {
  const heading = escapeHtml(section.heading);
  const body = escapeHtml(section.body);
  const buttonText = escapeHtml(buttonTextFor(section));
  const buttonUrl = escapeHtml(buttonUrlFor(section));

  if (section.layout === "hero") {
    const heroImage = escapeHtml(section.heroImage || DEFAULT_HERO_IMAGE);
    const heroAlt = heading || "Hero image";
    const imagePositionClass = (section.heroImagePosition || "right") === "left" ? " image-left" : "";

    return `
      <header class="site-hero${imagePositionClass}">
        <img class="site-hero-image" src="${heroImage}" alt="${heroAlt}">
        <div class="site-hero-copy">
          <h2>${heading}</h2>
          <p>${body || escapeHtml(state.tagline)}</p>
          <a class="site-cta" href="${buttonUrl}">${buttonText}</a>
        </div>
      </header>
    `;
  }

  if (section.layout === "image") {
    const imageSrc = escapeHtml(section.image || PENN_GALLERY_CITY);
    const imageAlt = heading || "Uploaded section image";

    return `
      <section class="site-section image">
        <img class="section-image" src="${imageSrc}" alt="${imageAlt}">
        <div class="image-caption">
          <h3>${heading}</h3>
          <p>${body}</p>
        </div>
      </section>
    `;
  }

  if (section.layout === "video") {
    const embed = videoEmbedFor(section.videoUrl || DEFAULT_VIDEO_URL);

    return `
      <section class="site-section video">
        <div class="site-copy">
          <h3>${heading}</h3>
          <p>${body}</p>
        </div>
        ${
          embed
            ? `<div class="video-panel">
                <div class="video-actions">
                  <button class="video-action" type="button" data-video-action="pause">Pause</button>
                  <button class="video-action" type="button" data-video-action="stop">Stop</button>
                </div>
                <div class="video-frame">
                  <iframe src="${escapeHtml(embed.src)}" title="${heading || "Embedded video"}" data-video-provider="${embed.provider}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>`
            : `<div class="video-placeholder">Add a YouTube or Vimeo URL in the studio</div>`
        }
      </section>
    `;
  }

  if (section.layout === "stats") {
    const metrics = section.body.split("|").map((metric) => metric.trim()).filter(Boolean).slice(0, 3);
    const fallback = metrics.length ? metrics : ["24 projects shipped", "8 core page types", "100% responsive"];
    return `
      <section class="site-section stats">
        ${fallback
          .map((metric) => {
            const [number, ...label] = escapeHtml(metric).split(" ");
            return `<div class="metric"><strong>${number}</strong><span>${label.join(" ") || "wins delivered"}</span></div>`;
          })
          .join("")}
      </section>
    `;
  }

  if (section.layout === "accordion") {
    const items = accordionItemsFor(section);

    return `
      <section class="site-section accordion">
        <div class="accordion-panel">
          <div class="accordion-actions">
            <button class="accordion-action" type="button" data-accordion-action="expand">Expand all</button>
            <button class="accordion-action" type="button" data-accordion-action="collapse">Collapse all</button>
          </div>
          ${items
            .map((item, index) => {
              const title = escapeHtml(item.title || `Item ${index + 1}`);
              const itemBody = escapeHtml(item.body || "");
              return `
                <details class="accordion-item">
                  <summary>${title}</summary>
                  <p>${itemBody}</p>
                </details>
              `;
            })
            .join("")}
        </div>
      </section>
    `;
  }

  if (section.layout === "gallery") {
    const images = galleryImagesFor(section);

    return `
      <section class="site-section gallery">
        <div class="site-copy">
          <h3>${heading}</h3>
          <p>${body}</p>
        </div>
        <div class="gallery-panel">
          <div class="gallery-actions">
            <button class="gallery-action" type="button" data-gallery-action="previous">Previous</button>
            <button class="gallery-action" type="button" data-gallery-action="next">Next</button>
          </div>
          ${
            images.length
              ? `<div class="gallery-track" tabindex="0">
                  ${images
                    .map((image, index) => {
                      const imageSrc = escapeHtml(image.src);
                      return `
                        <figure class="gallery-card">
                          <img src="${imageSrc}" alt="Gallery image ${index + 1}">
                        </figure>
                      `;
                    })
                    .join("")}
                </div>`
              : `<div class="gallery-placeholder">Add images in the studio</div>`
          }
        </div>
      </section>
    `;
  }

  if (section.layout === "cards") {
    const cards = cardItemsFor(section);
    const columns = Number(section.cardColumns) === 2 ? 2 : 3;

    return `
      <section class="site-section cards">
        <div class="site-copy">
          <h3>${heading}</h3>
          <p>${body}</p>
        </div>
        <div class="card-grid columns-${columns}">
          ${cards
            .map((card, index) => {
              const title = escapeHtml(card.title || `Card ${index + 1}`);
              const cardUrl = escapeHtml(card.url || DEFAULT_BUTTON_URL);
              const cardBody = escapeHtml(card.body || "");
              const color = ["white", "blue", "red"].includes(card.color) ? card.color : "white";
              const cardImage = card.image ? escapeHtml(card.image) : "";
              return `
                <article class="content-card ${color}">
                  ${cardImage ? `<img class="content-card-image" src="${cardImage}" alt="${title}">` : ""}
                  <div class="content-card-copy">
                    <h4><a href="${cardUrl}">${title}</a></h4>
                    <p>${cardBody}</p>
                  </div>
                </article>
              `;
            })
            .join("")}
        </div>
      </section>
    `;
  }

  if (section.layout === "events") {
    const events = eventItemsFor(section);

    return `
      <section class="site-section events">
        <div class="site-copy">
          <h3>${heading}</h3>
          <p>${body}</p>
        </div>
        <div class="events-grid">
          ${events
            .map((eventItem, index) => {
              const category = escapeHtml(eventItem.category || "Event");
              const month = escapeHtml(String(eventItem.month || "MAY").toUpperCase().slice(0, 3));
              const day = escapeHtml(eventItem.day || String(index + 1).padStart(2, "0"));
              const title = escapeHtml(eventItem.title || `Upcoming event ${index + 1}`);
              const eventUrl = escapeHtml(eventItem.url || DEFAULT_BUTTON_URL);
              const description = escapeHtml(eventItem.description || "");
              const image = eventItem.image ? escapeHtml(eventItem.image) : "";
              const calendar = `
                <div class="event-calendar" aria-label="${month} ${day}">
                  <span class="event-month">${month}</span>
                  <span class="event-day">${day}</span>
                </div>
              `;

              return `
                <article class="event-card${image ? "" : " no-image"}">
                  ${
                    image
                      ? `<div class="event-media"><img src="${image}" alt="${title}">${calendar}</div>`
                      : calendar
                  }
                  <div class="event-copy">
                    <p class="event-category">${category}</p>
                    <h4><a href="${eventUrl}">${title}</a></h4>
                    <p>${description}</p>
                  </div>
                </article>
              `;
            })
            .join("")}
        </div>
      </section>
    `;
  }

  if (section.layout === "text") {
    return `
      <section class="site-section text">
        <div class="site-copy">
          <h3>${heading}</h3>
          <p>${body}</p>
        </div>
      </section>
    `;
  }

  if (section.layout === "quote") {
    const color = ["white", "blue", "red"].includes(section.quoteColor) ? section.quoteColor : "red";

    return `
      <section class="site-section quote ${color}">
        <span class="quote-mark" aria-hidden="true">&ldquo;</span>
        <div class="site-copy">
          <h3>${body}</h3>
          <p>${heading}</p>
        </div>
      </section>
    `;
  }

  const splitColor = ["white", "blue", "red"].includes(section.splitColor) ? section.splitColor : "blue";
  const sectionColor = section.layout === "split" ? ` ${splitColor}` : "";

  return `
    <section class="site-section ${section.layout}${sectionColor}">
      <h3>${heading}</h3>
      <div class="site-copy">
        <p>${body}</p>
        <a class="site-cta" href="${buttonUrl}">${buttonText}</a>
      </div>
    </section>
  `;
}

function buildSiteHtml(includeHidden) {
  return `
    <nav class="site-nav" id="top">
      <div class="site-logo">
        <img src="${PENN_LOGO_IMAGE}" alt="Penn">
      </div>
      <div class="site-nav-links" aria-label="Section navigation">
        ${buildGroupNavHtml(includeHidden)}
      </div>
      <div class="site-nav-actions">
        ${buildResourcesMenuHtml()}
      </div>
    </nav>
    ${buildGroupedSectionsHtml(includeHidden)}
    ${buildFooterHtml()}
  `;
}

function buildGroupNavHtml(includeHidden) {
  ensureGroups(state);
  return state.groups
    .filter((group) => group.visibleInNav !== false && sectionsForGroup(group.id, includeHidden).length)
    .map((group) => {
      const navTitle = escapeHtml(group.navTitle || group.label || group.id);
      return `<a href="#${escapeHtml(group.id)}">${navTitle}</a>`;
    })
    .join("");
}

function buildGroupedSectionsHtml(includeHidden) {
  ensureGroups(state);
  return state.groups
    .map((group) => {
      const sections = sectionsForGroup(group.id, includeHidden);
      if (!sections.length) return "";

      const groupImage = group.parallaxImage ? escapeHtml(group.parallaxImage) : "";
      const groupClass = groupImage ? " has-parallax" : "";
      return `
        <section class="site-group${groupClass}" id="${escapeHtml(group.id)}" data-parallax-group>
          ${groupImage ? `<img class="site-group-backdrop" src="${groupImage}" alt="" aria-hidden="true">` : ""}
          <div class="site-group-content">
            ${sections.map(buildSectionHtml).join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

function buildResourcesMenuHtml() {
  return `
    <details class="resources-menu">
      <summary>
        <span>Resources</span>
        <span class="resources-chevron" aria-hidden="true">⌄</span>
      </summary>
      <div class="resources-panel">
        <div class="resources-panel-title">Resources</div>
        <div class="resources-list">
          ${PENN_RESOURCE_LINKS.map((link) => `<a href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`).join("")}
        </div>
        <a class="resources-give" href="https://giving.aws.cloud.upenn.edu/" target="_blank" rel="noreferrer">Give to Penn</a>
      </div>
    </details>
  `;
}

function buildFooterHtml() {
  return `
    <footer class="site-footer" id="contact">
      <section class="footer-equal-opportunity" aria-labelledby="footer-equal-opportunity-title">
        <h3 id="footer-equal-opportunity-title">Equal Opportunity and Nondiscrimination at Penn</h3>
        <p>The University of Pennsylvania seeks talented students, faculty, and staff with a wide variety of backgrounds, experiences, and perspectives.</p>
        <a href="https://oeop.upenn.edu/" target="_blank" rel="noreferrer">Nondiscrimination Statement</a>
      </section>
      <div class="footer-main">
        <div class="footer-brand">
          <img class="footer-logo" src="${PENN_REVERSED_LOGO_IMAGE}" alt="University of Pennsylvania">
          <p>Philadelphia, PA 19104</p>
          <p>Telephone: (215) 898-5000</p>
          <div class="footer-inline-links" aria-label="Contact links">
            <a href="https://www.upenn.edu/contact-us" target="_blank" rel="noreferrer">Contact Us</a>
            <a href="https://www.facilities.upenn.edu/maps" target="_blank" rel="noreferrer">Maps</a>
            <a href="https://cms.business-services.upenn.edu/transportation/" target="_blank" rel="noreferrer">Parking</a>
          </div>
        </div>
        <nav class="footer-column" aria-label="Navigate">
          <h3>Navigate</h3>
          <a href="https://www.upenn.edu/admissions-and-aid" target="_blank" rel="noreferrer">Admissions &amp; Aid</a>
          <a href="https://www.alumni.upenn.edu/" target="_blank" rel="noreferrer">Alumni</a>
          <a href="https://www.pennmedicine.org/" target="_blank" rel="noreferrer">Health Care</a>
          <a href="https://www.library.upenn.edu/" target="_blank" rel="noreferrer">Libraries</a>
          <a href="https://www.publicsafety.upenn.edu/" target="_blank" rel="noreferrer">Public Safety</a>
        </nav>
        <div class="footer-column footer-heritage">
          <h3>Penn's Heritage</h3>
          <p>As America's first university, Penn has a history that dates back to 1740 and shares many ties with the colonial city of Philadelphia and the birth of our nation.</p>
          <a href="https://www.upenn.edu/about/history" target="_blank" rel="noreferrer">Our History</a>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-legal" aria-label="Legal links">
          <a href="https://www.upenn.edu/about/disclaimer" target="_blank" rel="noreferrer">Disclaimer</a>
          <a href="https://oeop.upenn.edu/" target="_blank" rel="noreferrer">Nondiscrimination</a>
          <a href="https://www.upenn.edu/about/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a>
          <a href="https://accessibility.web-resources.upenn.edu/get-help" target="_blank" rel="noreferrer">Report Accessibility Issues and Get Help</a>
          <a href="https://www.upenn.edu/about/report-copyright-infringement" target="_blank" rel="noreferrer">Report Copyright Infringement</a>
        </div>
        <a class="back-to-top" href="#top">Back To Top</a>
      </div>
    </footer>
  `;
}

function buildExportDocument() {
  const palette = activePalette();
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(state.siteTitle)}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700;800&family=Inter:wght@400;700;800;900&family=Roboto:wght@400;700;900&display=swap" rel="stylesheet">
  <style>
    html { scroll-behavior: smooth; }
    body { margin: 0; color: ${palette.ink}; background: ${palette.paper}; font-family: ${activeSecondaryFontStack()}; }
    h2, h3, h4, summary, strong, .site-logo, .site-cta { overflow-wrap: anywhere; word-break: normal; hyphens: auto; }
    a[href^="http"]::after { content: "↗"; display: inline-block; margin-left: .35em; color: currentColor; font-family: ${activeFontStack()}; font-size: .8em; font-weight: 900; line-height: 1; text-decoration: none; }
    body.hide-external-icons a[href^="http"]::after { content: none; }
    .site-nav, .site-section, .site-footer { padding-left: clamp(20px, 5vw, 70px); padding-right: clamp(20px, 5vw, 70px); }
    .site-nav { min-height: 70px; display: flex; align-items: center; justify-content: space-between; gap: 18px; background: ${palette.paper}; border-bottom: 1px solid rgba(0,0,0,.12); }
    .site-nav-links, .site-nav-actions { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; justify-content: flex-end; }
    .site-nav-links a { color: ${palette.ink}; font-family: ${activeFontStack()}; font-size: 12px; font-weight: 900; text-decoration: none; text-transform: uppercase; }
    .site-nav-links a:hover { text-decoration: underline; text-underline-offset: 4px; }
    .site-logo { display: block; width: min(220px, 42vw); font-family: ${activeFontStack()}; font-weight: 900; font-size: 19px; }
    .site-logo img { display: block; width: 100%; height: auto; }
    .site-group { position: relative; isolation: isolate; overflow: hidden; scroll-margin-top: 76px; }
    .site-group.has-parallax { background: color-mix(in srgb, ${palette.paper} 84%, #ffffff); }
    .site-group.has-parallax :is(.site-hero, .site-section, .content-card, .accordion-item) { background-color: color-mix(in srgb, ${palette.paper} 88%, transparent); }
    .site-group.has-parallax .site-section.split.blue, .site-group.has-parallax .content-card.blue { background: color-mix(in srgb, ${palette.ink} 88%, transparent); }
    .site-group.has-parallax .site-section.split.red, .site-group.has-parallax .site-section.quote.red, .site-group.has-parallax .content-card.red { background: color-mix(in srgb, ${palette.accent} 88%, transparent); }
    .site-group.has-parallax .site-section.quote.blue { background: color-mix(in srgb, ${palette.ink} 88%, transparent); }
    .site-group.has-parallax .site-section.quote.white, .site-group.has-parallax .site-section.split.white, .site-group.has-parallax .event-card { background: color-mix(in srgb, #ffffff 88%, transparent); }
    .site-group-backdrop { position: absolute; top: -120px; right: 0; bottom: -120px; left: 0; z-index: 0; width: 100%; height: calc(100% + 240px); object-fit: cover; opacity: .16; transform: translateY(var(--parallax-offset, 0)); will-change: transform; pointer-events: none; }
    .site-group-content { position: relative; z-index: 1; }
    .resources-menu { position: relative; font-family: ${activeFontStack()}; color: ${palette.ink}; z-index: 5; }
    .resources-menu summary { min-height: 38px; display: inline-flex; align-items: center; gap: 8px; border: 1px solid rgba(0,0,0,.16); border-radius: 999px; padding: 0 13px; list-style: none; cursor: pointer; font-size: 12px; font-weight: 900; text-transform: uppercase; }
    .resources-menu summary::-webkit-details-marker { display: none; }
    .resources-chevron { font-size: 14px; line-height: 1; }
    .resources-menu[open] .resources-chevron { transform: rotate(180deg); }
    .resources-panel { position: absolute; top: calc(100% + 12px); right: 0; width: min(330px, 82vw); display: grid; gap: 14px; padding: 18px; border: 1px solid rgba(0,0,0,.16); background: ${palette.paper}; box-shadow: 0 22px 50px rgba(0,0,0,.16); }
    .resources-panel-title { color: ${palette.accent}; font-size: 11px; font-weight: 900; text-transform: uppercase; }
    .resources-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 2px 14px; }
    .resources-list a, .resources-give { min-height: 32px; display: flex; align-items: center; color: ${palette.ink}; font-size: 13px; font-weight: 850; text-decoration: none; overflow-wrap: anywhere; }
    .resources-list a:hover, .resources-give:hover { text-decoration: underline; text-underline-offset: 4px; }
    .resources-give { width: fit-content; min-height: 36px; border-radius: ${state.radius}px; background: ${palette.accent}; color: #ffffff; padding: 0 13px; text-decoration: none; }
    .resources-give:hover { text-decoration: none; }
    .site-hero { min-height: 470px; display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(220px, .95fr); background: ${palette.paper}; }
    .site-hero.image-left .site-hero-image { order: -1; }
    .site-hero:not(.image-left) .site-hero-copy { order: -1; }
    .site-hero-copy { padding: clamp(34px, 7vw, 82px) clamp(20px, 5vw, 70px); display: grid; align-content: center; gap: 18px; }
    .site-hero h2 { margin: 0; max-width: 10ch; font-family: ${activeFontStack()}; font-size: 68px; line-height: .98; letter-spacing: 0; text-wrap: balance; }
    .site-hero p, .site-section p, .site-footer p { margin: 0; line-height: 1.65; }
    .site-hero p { max-width: 54ch; color: color-mix(in srgb, ${palette.ink} 72%, transparent); font-size: 18px; }
    .site-hero-image { display: block; width: 100%; height: 100%; min-height: 360px; object-fit: cover; object-position: center; }
    .site-cta { width: fit-content; max-width: 100%; border-radius: ${state.radius}px; background: ${palette.accent}; color: #fff; padding: 13px 18px; font-family: ${activeFontStack()}; font-weight: 900; text-decoration: none; }
    .site-section { padding-top: clamp(34px, 6vw, 72px); padding-bottom: clamp(34px, 6vw, 72px); border-top: 1px solid rgba(0,0,0,.12); }
    .site-section.feature { display: grid; grid-template-columns: .8fr 1.2fr; gap: clamp(22px, 5vw, 70px); align-items: start; }
    .site-section.text { display: block; }
    .site-section.text .site-copy { max-width: none; }
    .site-section.text p { width: 100%; max-width: none; font-size: 18px; }
    .site-section.split { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; background: ${palette.ink}; color: #ffffff; }
    .site-section.split.white { background: #ffffff; color: ${palette.ink}; }
    .site-section.split.blue { background: ${palette.ink}; color: #ffffff; }
    .site-section.split.red { background: ${palette.accent}; color: #ffffff; }
    .site-section.split.blue .site-copy p, .site-section.split.red .site-copy p { color: color-mix(in srgb, currentColor 78%, transparent); }
    .site-section.split.blue .site-cta, .site-section.split.red .site-cta { background: #ffffff; color: ${palette.ink}; }
    .site-section.quote { display: grid; grid-template-columns: max-content minmax(0, 1fr); column-gap: clamp(12px, 2.5vw, 24px); align-content: start; align-items: start; background: ${palette.accent}; color: #ffffff; }
    .site-section.quote.white { background: #ffffff; color: ${palette.ink}; }
    .site-section.quote.blue { background: ${palette.ink}; color: #ffffff; }
    .site-section.quote.red { background: ${palette.accent}; color: #ffffff; }
    .quote-mark { width: clamp(48px, 7vw, 72px); height: 58px; color: currentColor; font-family: ${activeFontStack()}; font-size: clamp(86px, 12vw, 128px); font-weight: 900; line-height: .8; opacity: .92; }
    .site-section.quote .site-copy { min-width: 0; padding-top: 12px; }
    .site-section.quote.white .quote-mark { color: ${palette.ink}; }
    .site-section.stats { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
    .site-section.accordion { display: grid; grid-template-columns: 1fr; gap: clamp(22px, 5vw, 70px); align-items: start; background: color-mix(in srgb, ${palette.paper} 88%, #ffffff); }
    .site-section.gallery { display: grid; gap: 22px; background: color-mix(in srgb, ${palette.paper} 88%, #ffffff); }
    .site-section.cards { display: grid; gap: 24px; background: color-mix(in srgb, ${palette.paper} 90%, #ffffff); }
    .card-grid { display: grid; gap: 16px; }
    .card-grid.columns-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .card-grid.columns-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .content-card { min-width: 0; overflow: hidden; display: grid; align-content: start; border: 1px solid rgba(0,0,0,.14); border-radius: ${state.radius}px; background: #ffffff; color: ${palette.ink}; }
    .content-card.blue { border-color: color-mix(in srgb, ${palette.ink} 70%, transparent); background: ${palette.ink}; color: #ffffff; }
    .content-card.red { border-color: ${palette.accent}; background: ${palette.accent}; color: #ffffff; }
    .content-card-image { width: 100%; aspect-ratio: 16 / 10; display: block; object-fit: cover; object-position: center; }
    .content-card-copy { display: grid; gap: 9px; padding: clamp(16px, 3vw, 22px); }
    .content-card h4 { margin: 0; font-family: ${activeFontStack()}; font-size: 22px; line-height: 1.12; overflow-wrap: anywhere; }
    .content-card h4 a, .event-copy h4 a { color: inherit; text-decoration: none; }
    .content-card h4 a:hover, .event-copy h4 a:hover { text-decoration: underline; text-underline-offset: 4px; }
    .content-card p { color: color-mix(in srgb, currentColor 78%, transparent); }
    .site-section.events { display: grid; gap: clamp(26px, 5vw, 44px); background: #ffffff; }
    .events-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 290px), 1fr)); gap: clamp(26px, 5vw, 44px); }
    .event-card { position: relative; min-width: 0; display: grid; align-content: start; gap: clamp(28px, 4vw, 42px); padding-right: clamp(18px, 3vw, 34px); border-right: 1px solid rgba(0,0,0,.18); background: #ffffff; color: ${palette.ink}; }
    .event-media { position: relative; aspect-ratio: 16 / 9; overflow: visible; }
    .event-media img { width: 100%; height: 100%; display: block; object-fit: cover; object-position: center; }
    .event-calendar { width: clamp(70px, 14vw, 88px); position: absolute; top: clamp(12px, 3vw, 24px); right: clamp(12px, 3vw, 24px); display: grid; text-align: center; box-shadow: 0 14px 28px rgba(1,31,91,.12); z-index: 2; }
    .event-card.no-image { padding-top: clamp(84px, 10vw, 110px); }
    .event-card.no-image .event-calendar { top: 0; right: clamp(12px, 3vw, 24px); }
    .event-month { min-height: 32px; display: grid; place-items: center; background: ${palette.accent}; color: #ffffff; font-family: ${activeFontStack()}; font-size: 14px; font-weight: 900; text-transform: uppercase; }
    .event-day { min-height: 62px; display: grid; place-items: center; background: #ffffff; color: ${palette.ink}; font-family: ${activeSecondaryFontStack()}; font-size: clamp(34px, 5vw, 44px); line-height: 1; }
    .event-copy { display: grid; gap: 14px; }
    .event-category { position: relative; margin: 0; padding-bottom: 22px; color: ${palette.ink}; font-family: ${activeFontStack()}; font-size: 22px; font-weight: 900; line-height: 1.1; text-transform: uppercase; }
    .event-category::after { content: ""; position: absolute; left: 0; bottom: 0; width: 40px; height: 7px; background: rgba(1,31,91,.18); }
    .event-copy h4 { margin: 0; color: ${palette.ink}; font-family: ${activeFontStack()}; font-size: clamp(21px, 2vw, 24px); font-weight: 700; line-height: 1.25; overflow-wrap: anywhere; }
    .event-copy p:last-child { color: color-mix(in srgb, ${palette.ink} 70%, transparent); font-family: ${activeSecondaryFontStack()}; font-size: 18px; line-height: 1.65; }
    .site-section.video { display: grid; gap: 22px; background: color-mix(in srgb, ${palette.paper} 94%, #ffffff); }
    .video-panel { display: grid; gap: 10px; width: 100%; }
    .video-actions { display: flex; gap: 8px; justify-content: flex-end; flex-wrap: wrap; }
    .video-action { min-height: 34px; border: 1px solid rgba(0,0,0,.16); border-radius: ${state.radius}px; background: transparent; color: ${palette.ink}; padding: 0 11px; font-family: ${activeFontStack()}; font-size: 12px; font-weight: 850; }
    .video-frame { width: 100%; aspect-ratio: 16 / 9; min-height: 260px; overflow: hidden; border-radius: ${state.radius}px; background: #000000; }
    .video-frame iframe { display: block; width: 100%; height: 100%; border: 0; }
    .video-placeholder { min-height: 260px; display: grid; place-items: center; border: 1px dashed rgba(0,0,0,.22); border-radius: ${state.radius}px; color: color-mix(in srgb, ${palette.ink} 62%, transparent); font-weight: 850; }
    .accordion-panel { display: grid; gap: 10px; }
    .accordion-actions { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 6px; }
    .accordion-action { min-height: 34px; border: 1px solid rgba(0,0,0,.16); border-radius: ${state.radius}px; background: transparent; color: ${palette.ink}; padding: 0 11px; font-family: ${activeFontStack()}; font-size: 12px; font-weight: 850; }
    .accordion-item { border: 1px solid rgba(0,0,0,.14); border-radius: ${state.radius}px; background: color-mix(in srgb, ${palette.paper} 72%, #ffffff); overflow: hidden; }
    .accordion-item summary { cursor: pointer; padding: 16px 18px; font-family: ${activeFontStack()}; font-weight: 900; list-style: none; }
    .accordion-item summary::-webkit-details-marker { display: none; }
    .accordion-item summary::after { content: "+"; float: right; color: ${palette.accent}; }
    .accordion-item[open] summary::after { content: "-"; }
    .accordion-item p { padding: 0 18px 18px; }
    .gallery-panel { display: grid; gap: 10px; }
    .gallery-actions { display: flex; gap: 8px; justify-content: flex-end; flex-wrap: wrap; }
    .gallery-action { min-height: 34px; border: 1px solid rgba(0,0,0,.16); border-radius: ${state.radius}px; background: transparent; color: ${palette.ink}; padding: 0 11px; font-family: ${activeFontStack()}; font-size: 12px; font-weight: 850; }
    .gallery-track { display: grid; grid-auto-flow: column; grid-auto-columns: minmax(600px, 80%); gap: 18px; overflow-x: auto; overscroll-behavior-x: contain; padding-bottom: 8px; scroll-snap-type: x mandatory; scrollbar-width: thin; }
    .gallery-card { aspect-ratio: 3 / 2; border-radius: ${state.radius}px; overflow: hidden; scroll-snap-align: start; background: rgba(0,0,0,.08); }
    .gallery-card img { width: 100%; height: 100%; display: block; object-fit: cover; }
    .gallery-placeholder { min-height: 220px; display: grid; place-items: center; border: 1px dashed rgba(0,0,0,.22); border-radius: ${state.radius}px; color: color-mix(in srgb, ${palette.ink} 62%, transparent); font-weight: 850; }
    .site-section.image { position: relative; min-height: 430px; padding: 0; overflow: hidden; display: grid; align-items: end; isolation: isolate; }
    .site-section.image::after { content: ""; position: absolute; inset: 0; z-index: 1; background: linear-gradient(180deg, rgba(0,0,0,.05), rgba(0,0,0,.58)); }
    .section-image { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; }
    .image-caption { position: relative; z-index: 2; max-width: 650px; padding: clamp(26px, 5vw, 62px); color: #ffffff; }
    .image-caption p { color: rgba(255,255,255,.86); }
    .site-section h3 { margin: 0; font-family: ${activeFontStack()}; font-size: 38px; line-height: 1.08; letter-spacing: 0; overflow-wrap: anywhere; text-wrap: balance; }
    .site-section.quote h3 { max-width: 34ch; }
    .site-section.quote p { color: currentColor; font-size: 16px; font-weight: 800; }
    .site-copy { display: grid; gap: 14px; }
    .metric { min-height: 124px; display: grid; align-content: center; gap: 7px; border: 1px solid rgba(0,0,0,.14); border-radius: ${state.radius}px; padding: 18px; }
    .metric strong { font-family: ${activeFontStack()}; font-size: 34px; line-height: 1; }
    .metric span { color: color-mix(in srgb, ${palette.ink} 70%, transparent); font-weight: 750; }
    .site-footer { display: grid; gap: clamp(18px, 3vw, 30px); padding-top: clamp(22px, 4vw, 38px); padding-bottom: 20px; background: #011f5b; color: #ffffff; font-family: "Roboto", Arial, sans-serif; overflow-wrap: anywhere; }
    .footer-equal-opportunity { display: grid; gap: 10px; max-width: 980px; }
    .footer-equal-opportunity h3, .footer-column h3 { margin: 0; font-family: inherit; font-size: 15px; line-height: 1.25; letter-spacing: 0; text-transform: none; }
    .footer-equal-opportunity p, .footer-brand p, .footer-column p { max-width: 68ch; color: rgba(255,255,255,.78); font-size: 13px; line-height: 1.6; }
    .footer-main { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, .65fr) minmax(0, 1fr); gap: clamp(18px, 4vw, 44px); align-items: start; padding-top: clamp(18px, 3vw, 28px); border-top: 1px solid rgba(255,255,255,.22); }
    .footer-brand, .footer-column { display: grid; gap: 9px; min-width: 0; }
    .footer-logo { display: block; justify-self: start; align-self: start; width: min(220px, 100%); height: auto; }
    .footer-inline-links, .footer-legal { display: flex; flex-wrap: wrap; gap: 8px 18px; }
    .site-footer a { color: #ffffff; font-size: 13px; font-weight: 800; text-decoration: none; text-underline-offset: 4px; overflow-wrap: anywhere; }
    .site-footer a:hover { text-decoration: underline; }
    .footer-bottom { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 18px; align-items: flex-start; padding-top: 18px; border-top: 1px solid rgba(255,255,255,.18); }
    .footer-legal { max-width: 860px; }
    .back-to-top { white-space: normal; }
    @media (max-width: 760px) { .site-hero, .site-section.feature, .site-section.split, .site-section.stats, .site-section.accordion, .footer-main { grid-template-columns: 1fr; } .card-grid.columns-2, .card-grid.columns-3 { grid-template-columns: 1fr; } .site-hero { display: flex; flex-direction: column; } .site-hero-image, .site-hero.image-left .site-hero-image { order: 0; min-height: 260px; } .site-hero-copy, .site-hero:not(.image-left) .site-hero-copy { order: 1; } .site-nav { align-items: flex-start; flex-direction: column; justify-content: center; } .site-nav-links, .site-nav-actions { justify-content: flex-start; } .resources-panel { left: 0; right: auto; width: min(300px, 76vw); } .resources-list { grid-template-columns: 1fr; } .footer-bottom { display: grid; } .site-hero h2 { font-size: 42px; } .site-section h3 { font-size: 28px; } }
  </style>
</head>
<body${state.externalLinkIcons === false ? ' class="hide-external-icons"' : ""}>
${buildSiteHtml(false)}
<script>
  function handleVideoAction(button) {
    const panel = button.closest(".video-panel");
    const frame = panel ? panel.querySelector("iframe") : null;
    if (!frame || !frame.contentWindow) return;
    const provider = frame.dataset.videoProvider;
    const action = button.dataset.videoAction;
    if (provider === "youtube") {
      const func = action === "stop" ? "stopVideo" : "pauseVideo";
      frame.contentWindow.postMessage(JSON.stringify({ event: "command", func, args: [] }), "*");
    }
    if (provider === "vimeo") {
      frame.contentWindow.postMessage(JSON.stringify({ method: "pause" }), "*");
      if (action === "stop") {
        frame.contentWindow.postMessage(JSON.stringify({ method: "setCurrentTime", value: 0 }), "*");
      }
    }
  }

  function updateParallax() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.querySelectorAll(".site-group.has-parallax").forEach((group) => {
      const rect = group.getBoundingClientRect();
      const offset = Math.max(-90, Math.min(90, Math.round(rect.top * -0.12)));
      group.style.setProperty("--parallax-offset", offset + "px");
    });
  }

  window.addEventListener("scroll", updateParallax, { passive: true });
  window.addEventListener("resize", updateParallax, { passive: true });
  updateParallax();

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-accordion-action]");
    if (button) {
      const panel = button.closest(".accordion-panel");
      if (!panel) return;
      panel.querySelectorAll(".accordion-item").forEach((item) => {
        item.open = button.dataset.accordionAction === "expand";
      });
      return;
    }

    const videoButton = event.target.closest("[data-video-action]");
    if (videoButton) {
      handleVideoAction(videoButton);
      return;
    }

    const galleryButton = event.target.closest("[data-gallery-action]");
    if (!galleryButton) return;
    const galleryPanel = galleryButton.closest(".gallery-panel");
    if (!galleryPanel) return;
    const track = galleryPanel.querySelector(".gallery-track");
    if (!track) return;
    const direction = galleryButton.dataset.galleryAction === "next" ? 1 : -1;
    track.scrollBy({ left: direction * track.clientWidth * 0.85, behavior: "smooth" });
  });
</script>
</body>
</html>`;
}

function render() {
  renderControls();
  renderPaletteChoices();
  renderGroupEditors();
  renderSectionList();
  renderInspector();
  renderPreview();
}

function updateSelectedSection(updater) {
  recordChange(() => {
    const section = selectedSection();
    if (section) updater(section);
  });
}

function bindInputs() {
  window.addEventListener("scroll", () => updateParallax(), { passive: true });
  window.addEventListener("resize", () => updateParallax(), { passive: true });
  elements.previewFrame.addEventListener("scroll", () => updateParallax(), { passive: true });
  elements.sitePreview.addEventListener("scroll", () => updateParallax(), { passive: true });

  window.addEventListener("pointermove", (event) => {
    if (!pointerDrag) return;

    const movedX = Math.abs(event.clientX - pointerDrag.startX);
    const movedY = Math.abs(event.clientY - pointerDrag.startY);
    if (!pointerDrag.active && Math.max(movedX, movedY) < 8) return;

    pointerDrag.active = true;
    event.preventDefault();
    updatePointerDropTarget(event);
  });

  window.addEventListener("pointerup", () => {
    if (!pointerDrag) return;

    const drag = pointerDrag;
    pointerDrag = null;
    clearDropTargets();

    if (drag.active) {
      suppressNextSectionClick = true;
      moveSection(drag.sourceId, drag.targetId, drag.dropAfter);
      window.setTimeout(() => {
        suppressNextSectionClick = false;
      }, 0);
    }
  });

  elements.siteTitle.addEventListener("input", (event) => {
    recordChange(() => {
      state.siteTitle = event.target.value;
    });
  });

  elements.tagline.addEventListener("input", (event) => {
    recordChange(() => {
      state.tagline = event.target.value;
    });
  });

  elements.externalLinkIcons.addEventListener("change", (event) => {
    recordChange(() => {
      state.externalLinkIcons = event.target.checked;
    });
  });

  elements.fontChoice.addEventListener("change", (event) => {
    recordChange(() => {
      state.font = event.target.value;
    });
  });

  elements.secondaryFontChoice.addEventListener("change", (event) => {
    recordChange(() => {
      state.secondaryFont = event.target.value;
    });
  });

  elements.radiusControl.addEventListener("input", (event) => {
    recordChange(() => {
      state.radius = Number(event.target.value);
    });
  });

  elements.sectionLabel.addEventListener("input", (event) => {
    updateSelectedSection((section) => {
      section.label = event.target.value;
    });
  });

  elements.sectionHeading.addEventListener("input", (event) => {
    updateSelectedSection((section) => {
      section.heading = event.target.value;
    });
  });

  elements.sectionBody.addEventListener("input", (event) => {
    updateSelectedSection((section) => {
      section.body = event.target.value;
    });
  });

  elements.sectionGroup.addEventListener("change", (event) => {
    updateSelectedSection((section) => {
      section.groupId = event.target.value;
    });
  });

  elements.layoutChoice.addEventListener("change", (event) => {
    updateSelectedSection((section) => {
      const previousLayout = section.layout;
      const previousDefaultLabel = layoutLabels[previousLayout];
      const hadDefaultLayoutLabel = !section.label || section.label === previousDefaultLabel;
      section.layout = event.target.value;
      if (hadDefaultLayoutLabel) {
        section.label = layoutLabels[section.layout] || "";
      }
      if (section.layout === "accordion") {
        accordionItemsFor(section);
      } else if (section.layout === "gallery") {
        galleryImagesFor(section);
      } else if (section.layout === "cards") {
        cardItemsFor(section);
      } else if (section.layout === "events") {
        eventItemsFor(section);
      } else if (section.layout === "split" && !section.splitColor) {
        section.splitColor = "blue";
      } else if (section.layout === "quote" && !section.quoteColor) {
        section.quoteColor = "red";
      } else if (section.layout === "video" && !section.videoUrl) {
        section.videoUrl = DEFAULT_VIDEO_URL;
      }
    });
  });

  elements.videoUrl.addEventListener("input", (event) => {
    updateSelectedSection((section) => {
      section.videoUrl = event.target.value;
    });
  });

  elements.addAccordionItemBtn.addEventListener("click", () => {
    updateSelectedSection((section) => {
      accordionItemsFor(section).push({
        id: `accordion-${Date.now()}`,
        title: "New accordion item",
        body: "Add supporting detail for this item."
      });
    });
  });

  elements.cardColumnsInputs.forEach((input) => {
    input.addEventListener("change", (event) => {
      updateSelectedSection((section) => {
        section.cardColumns = Number(event.target.value);
      });
    });
  });

  elements.addCardItemBtn.addEventListener("click", () => {
    updateSelectedSection((section) => {
      section.layout = "cards";
      cardItemsFor(section).push({
        id: `card-${Date.now()}`,
        title: "New card",
        url: DEFAULT_BUTTON_URL,
        body: "Add supporting copy for this card.",
        color: "white",
        image: ""
      });
    });
  });

  elements.addEventItemBtn.addEventListener("click", () => {
    updateSelectedSection((section) => {
      section.layout = "events";
      if (eventItemsFor(section).length >= 3) return;
      section.eventItems.push({
        id: `event-${Date.now()}`,
        category: "Event",
        month: "MAY",
        day: String(section.eventItems.length + 1).padStart(2, "0"),
        title: "New upcoming event",
        url: DEFAULT_BUTTON_URL,
        description: "Add event details, speakers, location, or registration information.",
        image: ""
      });
    });
  });

  elements.sitePreview.addEventListener("click", (event) => {
    const button = event.target.closest("[data-accordion-action]");
    if (button) {
      const panel = button.closest(".accordion-panel");
      if (!panel) return;

      panel.querySelectorAll(".accordion-item").forEach((item) => {
        item.open = button.dataset.accordionAction === "expand";
      });
      return;
    }

    const videoButton = event.target.closest("[data-video-action]");
    if (videoButton) {
      const panel = videoButton.closest(".video-panel");
      const frame = panel ? panel.querySelector("iframe") : null;
      if (!frame || !frame.contentWindow) return;
      const provider = frame.dataset.videoProvider;
      const action = videoButton.dataset.videoAction;
      if (provider === "youtube") {
        const func = action === "stop" ? "stopVideo" : "pauseVideo";
        frame.contentWindow.postMessage(JSON.stringify({ event: "command", func, args: [] }), "*");
      }
      if (provider === "vimeo") {
        frame.contentWindow.postMessage(JSON.stringify({ method: "pause" }), "*");
        if (action === "stop") {
          frame.contentWindow.postMessage(JSON.stringify({ method: "setCurrentTime", value: 0 }), "*");
        }
      }
      return;
    }

    const galleryButton = event.target.closest("[data-gallery-action]");
    if (!galleryButton) return;
    const galleryPanel = galleryButton.closest(".gallery-panel");
    if (!galleryPanel) return;
    const track = galleryPanel.querySelector(".gallery-track");
    if (!track) return;
    const direction = galleryButton.dataset.galleryAction === "next" ? 1 : -1;
    track.scrollBy({ left: direction * track.clientWidth * 0.85, behavior: "smooth" });
  });

  elements.buttonText.addEventListener("input", (event) => {
    updateSelectedSection((section) => {
      section.buttonText = event.target.value;
    });
  });

  elements.buttonUrl.addEventListener("input", (event) => {
    updateSelectedSection((section) => {
      section.buttonUrl = event.target.value;
    });
  });

  elements.heroImagePositionInputs.forEach((input) => {
    input.addEventListener("change", (event) => {
      updateSelectedSection((section) => {
        section.heroImagePosition = event.target.value;
      });
    });
  });

  elements.quoteColorInputs.forEach((input) => {
    input.addEventListener("change", (event) => {
      updateSelectedSection((section) => {
        section.quoteColor = event.target.value;
      });
    });
  });

  elements.splitColorInputs.forEach((input) => {
    input.addEventListener("change", (event) => {
      updateSelectedSection((section) => {
        section.splitColor = event.target.value;
      });
    });
  });

  elements.galleryUpload.addEventListener("change", (event) => {
    const files = event.target.files;
    if (!files.length) return;
    const selectedId = state.selectedId;
    const previousState = structuredClone(state);

    readImageFiles(files, (images) => {
      if (!images.length) {
        showStatus("Choose images");
        event.target.value = "";
        return;
      }

      undoStack.push(previousState);
      redoStack = [];
      const section = state.sections.find((item) => item.id === selectedId);
      if (section) {
        section.layout = "gallery";
        section.galleryImages = galleryImagesFor(section).concat(images);
        state.selectedId = selectedId;
      }
      event.target.value = "";
      persist();
      render();
    });
  });

  elements.imageUpload.addEventListener("change", (event) => {
    const [file] = event.target.files;
    if (!file) return;
    const selectedId = state.selectedId;

    if (!file.type.startsWith("image/")) {
      showStatus("Choose an image");
      event.target.value = "";
      return;
    }

    const previousState = structuredClone(state);
    readImageFile(file, (imageData) => {
      undoStack.push(previousState);
      redoStack = [];
      const section = state.sections.find((item) => item.id === selectedId);
      if (section) {
        section.image = imageData;
        section.layout = "image";
        state.selectedId = selectedId;
      }
      event.target.value = "";
      persist();
      render();
    });
  });

  elements.heroImageUpload.addEventListener("change", (event) => {
    const [file] = event.target.files;
    if (!file) return;
    const selectedId = state.selectedId;

    if (!file.type.startsWith("image/")) {
      showStatus("Choose an image");
      event.target.value = "";
      return;
    }

    const previousState = structuredClone(state);
    readImageFile(file, (imageData) => {
      undoStack.push(previousState);
      redoStack = [];
      const section = state.sections.find((item) => item.id === selectedId);
      if (section) {
        section.heroImage = imageData;
        section.layout = "hero";
        state.selectedId = selectedId;
      }
      event.target.value = "";
      persist();
      render();
    });
  });

  elements.visibleToggle.addEventListener("change", (event) => {
    updateSelectedSection((section) => {
      section.visible = event.target.checked;
    });
  });

  elements.addSectionBtn.addEventListener("click", () => {
    recordChange(() => {
      const id = `section-${Date.now()}`;
      state.sections.push({
        id,
        groupId: state.groups[0].id,
        layout: "feature",
        label: "Fullbleed",
        heading: "A focused new section.",
        body: "Add a concise point, proof, or offer that makes the page stronger.",
        buttonUrl: DEFAULT_BUTTON_URL,
        visible: true
      });
      state.selectedId = id;
    });
  });

  elements.addGroupBtn.addEventListener("click", () => {
    recordChange(() => {
      const id = uniqueGroupId("New Group", state.groups.map((group) => group.id));
      state.groups.push({
        id,
        label: "New Group",
        navTitle: "New Group",
        visibleInNav: true,
        parallaxImage: ""
      });
    });
  });

  elements.removeSectionBtn.addEventListener("click", () => {
    if (state.sections.length <= 1) {
      showStatus("Keep one section");
      return;
    }

    recordChange(() => {
      const selectedId = state.selectedId;
      const removedIndex = state.sections.findIndex((section) => section.id === selectedId);
      if (removedIndex === -1) return;

      state.sections.splice(removedIndex, 1);
      const nextIndex = Math.min(removedIndex, state.sections.length - 1);
      state.selectedId = state.sections[nextIndex].id;
    });
  });

  elements.undoBtn.addEventListener("click", () => {
    if (!undoStack.length) return;
    redoStack.push(structuredClone(state));
    state = undoStack.pop();
    persist();
    render();
  });

  elements.redoBtn.addEventListener("click", () => {
    if (!redoStack.length) return;
    undoStack.push(structuredClone(state));
    state = redoStack.pop();
    persist();
    render();
  });

  elements.saveBtn.addEventListener("click", () => {
    persist();
  });

  elements.exportBtn.addEventListener("click", async () => {
    const html = buildExportDocument();
    elements.exportCode.value = html;
    try {
      await navigator.clipboard.writeText(html);
      showStatus("Copied");
    } catch {
      elements.exportCode.select();
      showStatus("Selected");
    }
  });

  elements.downloadBtn.addEventListener("click", async () => {
    const html = buildExportDocument();
    showStatus("Building zip");
    try {
      const zipExport = await buildZipExport(html);
      elements.exportCode.value = zipExport.html;
      downloadBlob(zipExport.blob, `${downloadFilenameBase()}.zip`);
      showStatus("Downloaded zip");
    } catch {
      elements.exportCode.value = html;
      showStatus("Download failed");
    }
  });

  document.querySelectorAll(".segment").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".segment").forEach((segment) => segment.classList.remove("active"));
      button.classList.add("active");
      elements.previewFrame.className = `preview-frame ${button.dataset.view}`;
    });
  });
}

bindInputs();
render();
loadCmsState();
