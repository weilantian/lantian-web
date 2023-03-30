import { ComponentProps } from "react";
import Image from "next/image";
export interface Article {
  _id: string;
  title: string;
  coverImage: any;
}

export interface Slug {
  current: string;
}

interface Image {
  url: string;
  metadata: {
    dimensions: {
      height: number;
      width: number;
    };
  };
}

export interface ItemListItem {
  slug: Slug;
  _id: string;
  coverImage: Image;
  title: string;
  description?: string;
  category?: string;
  tags?: string[];
}

export interface ItemListProps {
  title: string;
  items: ItemListItem[];
  path: string;
  itemPageOptions?: {
    title: string;
    link: string;
  };
}

export interface DesignWork {
  _id: string;
  title: string;
  slug: Slug;
  image: Image;
  description: string;
  link: string | null;
  publishedAt: string | null;
}
