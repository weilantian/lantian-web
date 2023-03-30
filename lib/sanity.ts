import { createClient } from "next-sanity";

import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "s55i3zss",
  dataset: "production",
  useCdn: true,
  apiVersion: "v2021-10-21",
});

export const urlFor = (source: any) => imageUrlBuilder(client).image(source);
