import CMS from "netlify-cms-app"

import BlogPostPreview from "./preview-templates/blog-post-preview"

CMS.registerPreviewTemplate("blog", BlogPostPreview)
