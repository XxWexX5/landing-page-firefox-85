module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a81066125bd30465ba15296188c9cd21'),
  },
});
