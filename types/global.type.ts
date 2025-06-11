export interface ImageItem {
    src: string;
    alt: string;
    type: "image" | "video";
  }

  export interface WhyList {
    id: string;
    title: string;
    description: string;
    icon?: string;
  }