module.exports = {
    apps: [
      {
        name: 'ui-pack',
        script: 'npm',
        args: 'start -p 4000',
        env: {
          NODE_ENV: 'production',
          PORT: 4000, // Specify the desired port number
        },
      },
    ],
  };