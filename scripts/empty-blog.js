/* Keep the blog navigable before the first post is published. */
hexo.extend.generator.register('empty-blog', function (locals) {
  if (locals.posts.length) return [];
  const data = { posts: locals.posts, current: 1, total: 1, prev: 0, next: 0 };
  return [
    { path: 'index.html', layout: ['index'], data: { ...data, __index: true } },
    { path: 'archives/index.html', layout: ['archive'], data: { ...data, archive: true } }
  ];
});
