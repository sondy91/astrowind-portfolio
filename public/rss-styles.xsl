<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  
  <xsl:template match="/">
    <html>
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>RSS Feed - Austin Sonderman</title>
        <style>
          body {
            font-family: system-ui, -apple-system, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
            background: #f9fafb;
            color: #1f2937;
          }
          header {
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 2px solid #e5e7eb;
          }
          h1 {
            margin: 0 0 0.5rem 0;
            color: #111827;
          }
          .subtitle {
            color: #6b7280;
            font-size: 0.875rem;
          }
          .info-box {
            background: #dbeafe;
            border-left: 4px solid #3b82f6;
            padding: 1rem;
            margin: 2rem 0;
            border-radius: 0.25rem;
          }
          .item {
            background: white;
            padding: 1.5rem;
            margin-bottom: 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          }
          .item h2 {
            margin: 0 0 0.5rem 0;
            font-size: 1.5rem;
          }
          .item a {
            color: #3b82f6;
            text-decoration: none;
          }
          .item a:hover {
            text-decoration: underline;
          }
          .meta {
            color: #6b7280;
            font-size: 0.875rem;
            margin-bottom: 1rem;
          }
          .description {
            color: #4b5563;
          }
          code {
            background: #f3f4f6;
            padding: 0.125rem 0.375rem;
            border-radius: 0.25rem;
            font-size: 0.875em;
          }
        </style>
      </head>
      <body>
        <header>
          <h1><xsl:value-of select="/rss/channel/title"/></h1>
          <p class="subtitle"><xsl:value-of select="/rss/channel/description"/></p>
        </header>
        
        <div class="info-box">
          <p><strong>📡 This is an RSS feed.</strong> Subscribe by copying the URL from the address bar into your RSS reader.</p>
          <p>Visit <a href="https://aboutfeeds.com">About Feeds</a> to learn more and get started.</p>
        </div>

        <main>
          <xsl:for-each select="/rss/channel/item">
            <article class="item">
              <h2>
                <a>
                  <xsl:attribute name="href">
                    <xsl:value-of select="link"/>
                  </xsl:attribute>
                  <xsl:value-of select="title"/>
                </a>
              </h2>
              <div class="meta">
                <xsl:value-of select="pubDate"/>
                <xsl:if test="author">
                   · <xsl:value-of select="author"/>
                </xsl:if>
              </div>
              <div class="description">
                <xsl:value-of select="description"/>
              </div>
            </article>
          </xsl:for-each>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
