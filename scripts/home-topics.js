/* global hexo */

hexo.extend.filter.register('theme_inject', function (injects) {
  injects.header.file('home-topics', 'views/home-topics.ejs', {}, {}, 20);
});
