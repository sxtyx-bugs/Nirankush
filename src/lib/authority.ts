import articlesData from "@/content/articles.json";

export const SITE_URL = "https://www.nirankush.com";
export const AUTHOR_ID = `${SITE_URL}/#nirankush`;

export type Article = {
  slug: string;
  title: string;
  short: string;
  eyebrow: string;
  body: string;
};

export const articles = articlesData as Article[];

export const sameAs = [
  "https://www.instagram.com/nirankush/",
  "https://www.facebook.com/niraankush/",
  "https://www.youtube.com/@TheNirankushVoice",
  "https://www.threads.com/@nirankush",
  "https://in.linkedin.com/in/webdevankush",
];

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": AUTHOR_ID,
  name: "निरांकुश",
  alternateName: ["Nirankush", "Ankush Patil", "अंकुश पाटील", "Nirankush Ankush Patil"],
  description: "Marathi poet, author and performer; author of Sahyajinashi.",
  jobTitle: ["Marathi poet", "Author", "Performer", "Technical Architect"],
  url: `${SITE_URL}/nirankush`,
  image: `${SITE_URL}/author-profile.jpeg`,
  sameAs,
  knowsAbout: ["Marathi poetry", "Maharashtra", "Sahyadri", "Marathi literature", "Software architecture"],
  mainEntityOfPage: `${SITE_URL}/nirankush`,
};

export const bookJsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  "@id": `${SITE_URL}/#sahyajinashi`,
  name: "सह्यजिनशी",
  alternateName: "Sahyajinashi — Sahyadrichya Raktache Vanshaj",
  inLanguage: "mr",
  isbn: "9789348458896",
  image: `${SITE_URL}/sahyadinashi.jpg`,
  author: { "@id": AUTHOR_ID },
  bookFormat: "https://schema.org/Paperback",
  url: `${SITE_URL}/sahyajinashi`,
};

