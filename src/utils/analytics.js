// Google Analytics Enhanced Tracking Utilities
export const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;

// Initialize Google Analytics with enhanced configuration
export const initGA = () => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
      custom_map: {
        custom_parameter_1: "user_type",
        custom_parameter_2: "device_type",
        custom_parameter_3: "referrer_source",
      },
    });
  }
};

// Enhanced page view tracking
export const trackPageView = (pageName, additionalData = {}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "page_view", {
      page_title: pageName,
      page_location: window.location.href,
      user_type: "portfolio_visitor",
      device_type: window.innerWidth >= 768 ? "desktop" : "mobile",
      referrer_source: document.referrer || "direct",
      ...additionalData,
    });
  }
};

// Track navigation clicks
export const trackNavigation = (sectionName) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "navigation_click", {
      event_category: "Navigation",
      event_label: sectionName,
      section_name: sectionName,
      interaction_type: "menu_click",
    });
  }
};

// Track social media clicks
export const trackSocialClick = (platform, url) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "social_click", {
      event_category: "Social Media",
      event_label: platform,
      platform: platform,
      destination_url: url,
      interaction_type: "external_link",
    });
  }
};

// Track contact form interactions
export const trackContactFormEvent = (action, field = null) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "contact_form_interaction", {
      event_category: "Contact Form",
      event_label: action,
      form_action: action,
      form_field: field,
      interaction_type: "form_engagement",
    });
  }
};

// Track project link clicks
export const trackProjectClick = (projectName, projectType, url) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "project_click", {
      event_category: "Projects",
      event_label: projectName,
      project_name: projectName,
      project_type: projectType,
      destination_url: url,
      interaction_type: "external_project_link",
    });
  }
};

// Track scroll depth
export const trackScrollDepth = (percentage) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "scroll_depth", {
      event_category: "User Engagement",
      event_label: `${percentage}%`,
      scroll_percentage: percentage,
      interaction_type: "scroll_tracking",
    });
  }
};

// Track time on page
export const trackTimeOnPage = (timeInSeconds, pageName) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "time_on_page", {
      event_category: "User Engagement",
      event_label: pageName,
      time_spent: timeInSeconds,
      page_name: pageName,
      interaction_type: "time_tracking",
    });
  }
};

// Track file downloads (if any)
export const trackDownload = (fileName, fileType) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "file_download", {
      event_category: "Downloads",
      event_label: fileName,
      file_name: fileName,
      file_type: fileType,
      interaction_type: "download",
    });
  }
};

// Track custom events
export const trackCustomEvent = (
  eventName,
  category,
  label,
  value = null,
  customData = {},
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, {
      event_category: category,
      event_label: label,
      value: value,
      ...customData,
    });
  }
};

// Track user demographics and device info
export const trackUserInfo = () => {
  if (typeof window !== "undefined" && window.gtag) {
    const userAgent = navigator.userAgent;
    const screenResolution = `${window.screen.width}x${window.screen.height}`;
    const browserLanguage = navigator.language;
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Detect browser
    const getBrowser = () => {
      if (userAgent.includes("Chrome")) return "Chrome";
      if (userAgent.includes("Firefox")) return "Firefox";
      if (userAgent.includes("Safari")) return "Safari";
      if (userAgent.includes("Edge")) return "Edge";
      return "Other";
    };

    // Detect OS
    const getOS = () => {
      if (userAgent.includes("Windows")) return "Windows";
      if (userAgent.includes("Mac")) return "macOS";
      if (userAgent.includes("Linux")) return "Linux";
      if (userAgent.includes("Android")) return "Android";
      if (userAgent.includes("iOS")) return "iOS";
      return "Other";
    };

    // Detect if mobile/tablet
    const getDeviceCategory = () => {
      if (/Mobi|Android/i.test(userAgent)) return "Mobile";
      if (/Tablet|iPad/i.test(userAgent)) return "Tablet";
      return "Desktop";
    };

    window.gtag("event", "detailed_user_info", {
      event_category: "Enhanced User Analytics",
      screen_resolution: screenResolution,
      browser_language: browserLanguage,
      time_zone: timeZone,
      browser_name: getBrowser(),
      operating_system: getOS(),
      device_category: getDeviceCategory(),
      viewport_size: `${window.innerWidth}x${window.innerHeight}`,
      connection_type: navigator.connection
        ? navigator.connection.effectiveType
        : "unknown",
      color_depth: window.screen.colorDepth,
      pixel_ratio: window.devicePixelRatio || 1,
      cookies_enabled: navigator.cookieEnabled,
      online_status: navigator.onLine ? "online" : "offline",
    });
  }
};

// Enhanced session tracking
export const trackSessionStart = () => {
  if (typeof window !== "undefined" && window.gtag) {
    const sessionData = {
      session_start_time: new Date().toISOString(),
      entry_page: window.location.pathname,
      referrer: document.referrer || "direct",
      utm_source:
        new URLSearchParams(window.location.search).get("utm_source") || "none",
      utm_medium:
        new URLSearchParams(window.location.search).get("utm_medium") || "none",
      utm_campaign:
        new URLSearchParams(window.location.search).get("utm_campaign") ||
        "none",
    };

    window.gtag("event", "session_start", {
      event_category: "Session Tracking",
      ...sessionData,
    });

    // Store session start time for duration calculation
    sessionStorage.setItem("portfolioSessionStart", Date.now().toString());
  }
};

// Track session end
export const trackSessionEnd = () => {
  if (typeof window !== "undefined" && window.gtag) {
    const sessionStart = sessionStorage.getItem("portfolioSessionStart");
    const sessionDuration = sessionStart
      ? Math.round((Date.now() - parseInt(sessionStart)) / 1000)
      : 0;

    window.gtag("event", "session_end", {
      event_category: "Session Tracking",
      session_duration: sessionDuration,
      exit_page: window.location.pathname,
    });
  }
};

// Track section visibility
export const trackSectionView = (sectionName, timeViewed = 0) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "section_view", {
      event_category: "Section Engagement",
      event_label: sectionName,
      section_name: sectionName,
      time_viewed: timeViewed,
      interaction_type: "section_visibility",
    });
  }
};

// Track hover events on important elements
export const trackHover = (elementType, elementName) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "element_hover", {
      event_category: "User Interaction",
      event_label: elementName,
      element_type: elementType,
      element_name: elementName,
      interaction_type: "hover",
    });
  }
};

// Track clicks on call-to-action elements
export const trackCTA = (ctaType, ctaName, location) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "cta_click", {
      event_category: "Call to Action",
      event_label: ctaName,
      cta_type: ctaType,
      cta_name: ctaName,
      cta_location: location,
      interaction_type: "cta_engagement",
    });
  }
};

// Track technology/skill interest
export const trackTechInterest = (technology, context) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "tech_interest", {
      event_category: "Technology Interest",
      event_label: technology,
      technology: technology,
      context: context,
      interaction_type: "tech_engagement",
    });
  }
};

// Track visitor geographic insights (if available through APIs)
export const trackGeographicInsights = async () => {
  if (typeof window !== "undefined" && window.gtag) {
    try {
      // Basic timezone-based geographic inference
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const locale = navigator.language || navigator.userLanguage;

      // Infer country from locale
      const countryCode = locale.split("-")[1] || "unknown";

      window.gtag("event", "geographic_insight", {
        event_category: "Geographic Analytics",
        time_zone: timeZone,
        browser_locale: locale,
        inferred_country: countryCode,
        interaction_type: "geographic_tracking",
      });
    } catch (error) {
      console.log("Geographic tracking not available");
    }
  }
};

// Track visitor journey and behavior patterns
export const trackVisitorJourney = (journeyStage, additionalData = {}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "visitor_journey", {
      event_category: "User Journey",
      event_label: journeyStage,
      journey_stage: journeyStage,
      visitor_session: sessionStorage.getItem("portfolioSessionStart")
        ? "returning"
        : "new",
      ...additionalData,
    });
  }
};

// Identify which company opened the portfolio via a tracking link.
// Send each company a unique URL, e.g. https://yoursite.com/?ref=razorpay
// (also accepts ?company= or the standard ?utm_source=). When that link is
// opened, a `company_visit` event is logged and the value is stamped on the
// session so it shows up across all subsequent GA events for that visit.
export const trackCompanyVisit = () => {
  if (typeof window === "undefined" || !window.gtag) return null;

  const params = new URLSearchParams(window.location.search);
  // Prefer an explicit ref/company param; fall back to utm_source.
  const fromUrl =
    params.get("ref") || params.get("company") || params.get("utm_source");

  // Persist across in-session navigation so the attribution isn't lost
  // once the visitor scrolls/clicks and the query string is gone.
  if (fromUrl) {
    sessionStorage.setItem("portfolioCompanyRef", fromUrl);
  }
  const company = fromUrl || sessionStorage.getItem("portfolioCompanyRef");

  if (!company) return null;

  // Stamp it on the GA config so every later event carries the company.
  window.gtag("set", { company_ref: company });

  // Fire a dedicated event only on the visit that arrived via the link.
  if (fromUrl) {
    window.gtag("event", "company_visit", {
      event_category: "Company Attribution",
      event_label: company,
      company_ref: company,
      landing_page: window.location.pathname,
      referrer: document.referrer || "direct",
      interaction_type: "tracking_link",
    });
  }

  return company;
};

// Track interest signals based on time spent on sections
export const trackInterestSignal = (section, timeSpent, engagementLevel) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "interest_signal", {
      event_category: "Interest Analytics",
      event_label: section,
      section_name: section,
      time_spent: timeSpent,
      engagement_level: engagementLevel, // high, medium, low
      interaction_type: "interest_tracking",
    });
  }
};
