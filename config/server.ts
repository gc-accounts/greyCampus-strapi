export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  admin: {
    allowEdit: true, // Enable editing of content types in production
  },
  cache: {
    enabled: false, // Disable any internal caching in Strapi
  },
});



