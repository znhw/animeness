const fs = require("fs");
const path = require("path");

function generateSitemap() {
  const baseUrl = "https://animeness.com";

  const mangaPath = path.join(process.cwd(), "public/data/manga.json");
  const mangas = JSON.parse(fs.readFileSync(mangaPath, "utf8"));

  let urls = [
    { loc: `${baseUrl}/`, priority: 1.0, changefreq: "monthly" },
    { loc: `${baseUrl}/manga`, priority: 0.8, changefreq: "monthly" },
  ];

  urls = urls.concat(
    mangas.map((m) => ({
      loc: `${baseUrl}/manga/${m.slug}`,
      priority: 0.7,
      changefreq: "weekly",
    }))
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `
  <url>
    <loc>${u.loc}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`
  )
  .join("")}
</urlset>`;

  fs.writeFileSync(path.join(process.cwd(), "public", "sitemap.xml"), xml, "utf8");
  console.log("✅ sitemap.xml generated!");
}

generateSitemap();




