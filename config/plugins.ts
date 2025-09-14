export default ({ env }) => ({
  // Upload config , provider: Cloudinary
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },

  // Email Config, Provider: Resend
  email: {
    config: {
      provider: "strapi-provider-email-resend-strapi",
      providerOptions: {
        apiKey: env("RESEND_API_KEY"), // Required
      },
      settings: {
        defaultFrom: "admin@noreply.yvesdc.site", // env('RESEND_DEFAULT_FROM')
        defaultReplyTo: "admin@noreply.yvesdc.site", // env('RESEND_DEFAULT_FROM')
      },
    },
  },
});
