// Console Log Remover for Production Builds
// This utility removes all console logs in production environment

export const setupConsoleRemoval = () => {
  if (process.env.NODE_ENV === "production") {
    // Override all console methods in production
    console.log = () => {};
    console.warn = () => {};
    console.error = () => {};
    console.info = () => {};
    console.debug = () => {};
    console.trace = () => {};
    console.group = () => {};
    console.groupEnd = () => {};
    console.groupCollapsed = () => {};
    console.time = () => {};
    console.timeEnd = () => {};
    console.timeLog = () => {};
    console.count = () => {};
    console.countReset = () => {};
    console.table = () => {};
    console.clear = () => {};
    console.dir = () => {};
    console.dirxml = () => {};
    console.assert = () => {};
  }
};

// Alternative: Keep only critical errors in production
export const setupMinimalConsole = () => {
  if (process.env.NODE_ENV === "production") {
    // Keep only error and warn for debugging critical issues
    const originalError = console.error;
    const originalWarn = console.warn;

    console.log = () => {};
    console.info = () => {};
    console.debug = () => {};
    console.trace = () => {};
    console.group = () => {};
    console.groupEnd = () => {};
    console.groupCollapsed = () => {};
    console.time = () => {};
    console.timeEnd = () => {};
    console.timeLog = () => {};
    console.count = () => {};
    console.countReset = () => {};
    console.table = () => {};
    console.clear = () => {};
    console.dir = () => {};
    console.dirxml = () => {};
    console.assert = () => {};

    // Keep critical logging
    console.error = originalError;
    console.warn = originalWarn;
  }
};
