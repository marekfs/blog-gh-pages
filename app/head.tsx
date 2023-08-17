export default function Head() {
  return (
    <>
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/blog/static/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/blog/static/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/blog/static/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/blog/static/favicons/site.webmanifest" />
      <link rel="mask-icon" href="/blog/static/favicons/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </>
  )
}
