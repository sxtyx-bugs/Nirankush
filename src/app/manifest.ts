import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "Nirankush — Ankush Patil", short_name: "Nirankush", description: "Marathi poet, author of Sahyajinashi and technical architect.", start_url: "/", display: "standalone", background_color: "#fffaf0", theme_color: "#f8dc25", lang: "mr-IN" };
}

