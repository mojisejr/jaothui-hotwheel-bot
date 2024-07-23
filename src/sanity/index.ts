import { createClient } from "@sanity/client";

export const client = createClient({
  apiVersion: "2023-09-26",
  dataset: "production",
  projectId: process.env.sanity_project_id!,
  useCdn: true,
  token: process.env.sanity_token!,
});
