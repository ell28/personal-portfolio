Drop your images in here — they'll be served from the site root.

HEADSHOT
  Put your photo here, e.g.:   public/images/headshot.jpg
  Then set in src/data/site.ts:  about.headshot = '/images/headshot.jpg'
  A square image (1:1) looks best; it's shown at up to 250×250px.

PROJECT SCREENSHOTS
  Put them in:  public/images/projects/   (e.g. pourfect.png, zony.png)
  Then set on each project in src/data/site.ts:
      image: '/images/projects/pourfect.png'
  Portrait phone screenshots are shown whole on a tinted panel by default.
  Prefer a cropped banner look? Add:  imageFit: 'cover'

Tip: compress images (TinyPNG, or `sips`/ImageOptim on macOS) before adding
them so the site stays fast.
