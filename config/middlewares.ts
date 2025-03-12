export default [
  'strapi::logger',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:', 'http://localhost:8080', 'ws://localhost:8080', 'res.cloudinary.com'],
          'img-src': ["'self'", 'data:', 'blob:', 'https://market-assets.strapi.io', 'https://res.cloudinary.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'https://market-assets.strapi.io', 'https://res.cloudinary.com'],
          'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"], // Allow inline scripts
          'frame-src': ["'self'", 'https://res.cloudinary.com'],
          'worker-src': ["'self'", 'blob:'],
        },
      },
    },
  },

  'strapi::errors',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
