exports.linkResolver = function linkResolver(doc) {

  if (doc.type === 'blog_post') {
    return '/blog/' + doc.uid;
  }
  if (doc.type.includes('page')) {
    return '/' + doc.uid;
  }
  return '/';
}
