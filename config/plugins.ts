module.exports = ({ env }) => ({
    upload: {
      config: {
        providerOptions: {
          sizeLimit: 100000000, // 100 MB (Adjust as needed)
        },
      },
    },
  });
  