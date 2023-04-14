import { createClient } from "next-sanity";

import { definePreview } from "next-sanity/preview";

import imageUrlBuilder from "@sanity/image-url";

const dataset = process.env.NEXT_PUBLIC_FORCE_PRODUCTION
  ? "production"
  : process.env.NODE_ENV === "development"
  ? "dev"
  : "production";

export const client = createClient({
  projectId: "s55i3zss",
  dataset,
  useCdn: true,
  apiVersion: "v2021-10-21",
});

function onPublicAccessOnly() {
  throw new Error(`Unable to load preview as you're not logged in`);
}

export const usePreview = definePreview({
  projectId: "s55i3zss",
  dataset,
  onPublicAccessOnly,
});

export const urlFor = (source: any) => imageUrlBuilder(client).image(source);
