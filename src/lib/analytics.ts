declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();

function getPagePath() {
  return `${window.location.pathname}${window.location.hash}${window.location.search}`;
}

export function initAnalytics() {
  if (typeof window === 'undefined' || !measurementId) {
    return;
  }

  if (document.querySelector(`script[data-ga-id="${measurementId}"]`)) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => {
    window.dataLayer.push(args);
  };

  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    page_path: getPagePath(),
    send_page_view: true,
  });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.dataset.gaId = measurementId;
  document.head.appendChild(script);
}

export {};
