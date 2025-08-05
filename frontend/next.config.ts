module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://cg0jnzdv-8080.usw2.devtunnels.ms/api/:path*',
      },
    ];
  },
};
