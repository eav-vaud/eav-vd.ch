exports.linkResolver = function linkResolver(doc) {

  if (doc.type === 'blog_post') {
    return '/blog/' + doc.uid;
  }
  return '/test';
}
