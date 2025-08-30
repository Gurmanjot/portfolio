import React, { useEffect } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Recommendations from "./components/Recommendations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "./theme/ThemeProvider";
import BackgroundGrid from "./components/ui/BackgroundGrid";
import useScrollDepthTracking from "./hooks/useScrollDepthTracking";
import {
  initGA,
  trackPageView,
  trackSessionStart,
  trackSessionEnd,
  trackUserInfo,
  trackTimeOnPage,
  trackGeographicInsights,
  trackVisitorJourney,
} from "./utils/analytics";
import { enableAnalyticsDebug } from "./utils/analyticsDebug";
import "./App.css";

function App() {
  // Initialize scroll depth tracking
  useScrollDepthTracking();

  useEffect(() => {
    // Enable analytics debugging in development
    enableAnalyticsDebug();

    // Initialize enhanced Google Analytics
    initGA();

    // Track session start
    trackSessionStart();

    // Track initial page view with enhanced data
    trackPageView("Portfolio Home", {
      section: "landing",
      visitor_type: "new_visitor",
    });

    // Track user info for demographics
    trackUserInfo();

    // Track geographic insights
    trackGeographicInsights();

    // Track visitor journey
    trackVisitorJourney("landing_page_view");

    // Track page load performance
    const trackPageLoadTime = () => {
      if (window.performance) {
        const loadTime =
          window.performance.timing.loadEventEnd -
          window.performance.timing.navigationStart;
        if (loadTime > 0) {
          if (window.gtag) {
            window.gtag("event", "timing_complete", {
              name: "page_load",
              value: loadTime,
            });
          }
        }
      }
    };

    // Wait for page to fully load before tracking load time
    if (document.readyState === "complete") {
      trackPageLoadTime();
    } else {
      window.addEventListener("load", trackPageLoadTime);
    }

    // Track time on page every 30 seconds
    const timeTrackingInterval = setInterval(() => {
      const sessionStart = sessionStorage.getItem("portfolioSessionStart");
      if (sessionStart) {
        const timeOnPage = Math.round(
          (Date.now() - parseInt(sessionStart)) / 1000
        );
        trackTimeOnPage(timeOnPage, "Portfolio");
      }
    }, 30000);

    // Track session end on page unload
    const handleBeforeUnload = () => {
      trackSessionEnd();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup
    return () => {
      window.removeEventListener("load", trackPageLoadTime);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      clearInterval(timeTrackingInterval);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="App min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 transition-colors">
        <Navigation />
        <BackgroundGrid>
          <main>
            <section id="home">
              <Hero />
            </section>
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Education />
            <Recommendations />
            <Contact />
          </main>
          <Footer />
        </BackgroundGrid>
      </div>
    </ThemeProvider>
  );
}

export default App;
