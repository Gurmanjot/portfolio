// CRACO (Create React App Configuration Override)
// This allows us to customize the build process without ejecting

module.exports = {
  babel: {
    plugins: [
      // Remove console statements in production only
      ...(process.env.NODE_ENV === "production"
        ? [["transform-remove-console", { exclude: ["error", "warn"] }]]
        : []),
    ],
  },
};
