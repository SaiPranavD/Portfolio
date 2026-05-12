(function () {
  const measurementId = "G-KFPT5FRPYK";

  if (!measurementId || !measurementId.startsWith("G-")) {
    console.info("Analytics is ready. Add your Google Analytics Measurement ID in analytics.js to enable tracking.");
    return;
  }

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }

  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", measurementId);

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(measurementId);
  document.head.appendChild(script);
})();
