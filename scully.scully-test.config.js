exports.config = {
  projectRoot: "./src",
  projectName: "scully-test",
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
  }
};