// Analytics Debug Utility - Development Only
// This helps verify that analytics events are being fired correctly

export const enableAnalyticsDebug = () => {
  if (process.env.NODE_ENV === "development") {
    // Override gtag to log events to console
    const originalGtag = window.gtag;

    window.gtag = function (...args) {
      console.group("🔍 Google Analytics Event");
      console.log("Event Type:", args[0]);
      console.log("Event Name:", args[1]);
      console.log("Event Parameters:", args[2]);
      console.log("Timestamp:", new Date().toISOString());
      console.groupEnd();

      // Call original gtag function
      if (originalGtag) {
        originalGtag.apply(window, args);
      }
    };

    console.log("🔍 Analytics Debug Mode Enabled");
  }
};

export const testAnalyticsEvents = () => {
  if (process.env.NODE_ENV === "development") {
    console.log("🧪 Testing Analytics Events...");

    // Test basic events
    window.gtag("event", "test_event", {
      event_category: "Debug",
      event_label: "Analytics Test",
      test_parameter: "test_value",
    });

    console.log("✅ Analytics test complete");
  }
};
