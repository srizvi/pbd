import { siteUrl } from "#/lib/constants";

interface Image {
  url: string;
  width: number;
  height: number;
  alt: string;
}

interface SiteConfig {
  company: string;
  companyUrl: string;
  description: string;
  keyword: string;
  image: Image;
  name: string;
  url: string;
}

export const siteConfig: SiteConfig = {
  company: "Pale Blue Nukta (SMC-PRIVATE) Limited",
  companyUrl: "https://palebluenukta.com",
  description:
    "Pale Blue Nukta collaborates with organizations to enhance competitive edge through outcome-driven strategies that focus on people, processes, and technology.",
  image: {
    url: `/opengraph-image.jpg`,
    width: 1200,
    height: 630,
    alt: "A pale blue dot on a dark background representing the logomark of Pale Blue Nukta.",
  },
  keyword: "Pakistan's Best Management Consulting Firm",
  name: "Pale Blue Nukta",
  url: siteUrl,
};
