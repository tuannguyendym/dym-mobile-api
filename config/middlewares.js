module.exports = ({ env }) => [
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      header: "*",
      origin: "*",
    },
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
