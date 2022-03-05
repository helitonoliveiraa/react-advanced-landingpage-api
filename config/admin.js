module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ec2102b8500d35a468793de590bb7c65'),
  },
});
