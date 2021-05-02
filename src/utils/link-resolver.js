exports.linkResolver = function linkResolver(doc) {
  if (doc.type === 'blog_post') {
    return '/actualites/' + doc.uid
  }
  if (doc.type.includes('page')) {
    return '/' + doc.uid
  }
  return '/'
}
