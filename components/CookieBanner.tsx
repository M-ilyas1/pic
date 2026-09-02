"use client";

import { useEffect, useState } from "react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(!window.localStorage.getItem("pic-cookie-choice"));
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  function choose(value: "essential" | "analytics") {
    window.localStorage.setItem("pic-cookie-choice", value);
    setVisible(false);
    if (value === "analytics") {
      window.dispatchEvent(new CustomEvent("pic-analytics-consent"));
    }
  }

  if (!visible) return null;

  return (
    <aside className="cookie-banner" aria-label="Cookie preferences">
      <div>
        <strong>Your privacy matters</strong>
        <p>
          We use essential storage for site functions. Optional analytics will
          run only after an approved integration is configured and you consent.
        </p>
      </div>
      <div className="cookie-actions">
        <button className="button button-secondary" onClick={() => choose("essential")}>
          Essential only
        </button>
        <button className="button" onClick={() => choose("analytics")}>
          Accept analytics
        </button>
      </div>
    </aside>
  );
}
