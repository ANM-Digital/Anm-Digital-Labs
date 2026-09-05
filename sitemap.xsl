<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>ANM Digital — XML Sitemap</title>
        <style>
          :root {
            color-scheme: dark;
            --navy: #100a2e;
            --royal-blue: #2457ff;
            --maroon: #7b1637;
            --gold: #d7ae50;
            --ivory: #fffaf0;
            --muted: #b9bdd1;
          }
          * { box-sizing: border-box; }
          body {
            margin: 0;
            min-height: 100vh;
            color: var(--ivory);
            font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
            background:
              radial-gradient(circle at 15% 10%, rgba(36,87,255,.28), transparent 35%),
              radial-gradient(circle at 85% 20%, rgba(123,22,55,.32), transparent 38%),
              linear-gradient(145deg, #08051a, var(--navy));
          }
          main { width: min(1040px, calc(100% - 32px)); margin: 0 auto; padding: 64px 0; }
          header {
            padding: 32px;
            border: 1px solid rgba(255,255,255,.14);
            border-radius: 24px;
            background: rgba(255,255,255,.07);
            box-shadow: 0 24px 70px rgba(0,0,0,.32);
            backdrop-filter: blur(18px);
          }
          .eyebrow { margin: 0 0 10px; color: var(--gold); font-size: 13px; font-weight: 800; letter-spacing: .18em; text-transform: uppercase; }
          h1 { margin: 0; font-size: clamp(34px, 7vw, 64px); line-height: 1; letter-spacing: -.045em; }
          .intro { max-width: 720px; margin: 18px 0 0; color: var(--muted); font-size: 17px; line-height: 1.65; }
          .summary { display: flex; gap: 10px; align-items: center; margin-top: 22px; color: var(--muted); }
          .count { display: inline-grid; place-items: center; min-width: 34px; height: 34px; padding: 0 10px; border-radius: 999px; color: #0c0921; background: var(--gold); font-weight: 900; }
          table { width: 100%; margin-top: 28px; border-collapse: separate; border-spacing: 0 12px; }
          th { padding: 0 18px 4px; color: var(--gold); font-size: 12px; letter-spacing: .12em; text-align: left; text-transform: uppercase; }
          td { padding: 20px 18px; background: rgba(255,255,255,.07); border-top: 1px solid rgba(255,255,255,.12); border-bottom: 1px solid rgba(255,255,255,.12); }
          td:first-child { border-left: 1px solid rgba(255,255,255,.12); border-radius: 14px 0 0 14px; }
          td:last-child { border-right: 1px solid rgba(255,255,255,.12); border-radius: 0 14px 14px 0; color: var(--muted); white-space: nowrap; }
          a { color: #fff; font-weight: 700; text-decoration: none; overflow-wrap: anywhere; }
          a:hover { color: var(--gold); text-decoration: underline; }
          footer { margin-top: 28px; color: var(--muted); font-size: 13px; text-align: center; }
          @media (max-width: 640px) {
            main { padding: 24px 0; }
            header { padding: 24px; }
            th:last-child, td:last-child { display: none; }
            td:first-child { border-right: 1px solid rgba(255,255,255,.12); border-radius: 14px; }
          }
        </style>
      </head>
      <body>
        <main>
          <header>
            <p class="eyebrow">ANM Digital Labs</p>
            <h1>XML Sitemap</h1>
            <p class="intro">This sitemap helps search engines discover and index the public pages of anmdigital.online.</p>
            <div class="summary"><span class="count"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></span> public URLs listed</div>
          </header>

          <table>
            <thead>
              <tr><th>Page URL</th><th>Last updated</th></tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a></td>
                  <td><xsl:value-of select="sitemap:lastmod"/></td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
          <footer>Generated for Google Search Console · ANM Digital Labs</footer>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
