export type EpisodeType = {
  title: string;
  file: string;
  image: string | null;
  description: string;
  number: number;
} | null;

export type SocialLinkType = {
  href: string;
  textContent: string;
  network?: string;
};
