const amazonDomains = {
    'it': 'https://www.amazon.it/vine/vine-items#grapfinder',
    'com': 'https://www.amazon.com/vine/vine-items#grapfinder',
    'co.uk': 'https://www.amazon.co.uk/vine/vine-items#grapfinder',
    'de': 'https://www.amazon.de/vine/vine-items#grapfinder',
    'fr': 'https://www.amazon.fr/vine/vine-items#grapfinder',
    'es': 'https://www.amazon.es/vine/vine-items#grapfinder',
  };
  
  chrome.action.onClicked.addListener((activeTab) => {
    const currentUrl = activeTab.url;
    // Fallback on com domain if the current url is not an amazon one
    let targetUrl = amazonDomains['com'];
  
    if (currentUrl) {
      try {
        const url = new URL(currentUrl);
        const hostname = url.hostname; // e.g., "www.amazon.it"
        const tld = hostname.split('.').slice(2).join('.');
        if (amazonDomains[tld]) {
          targetUrl = amazonDomains[tld];
        }
      } catch (e) {
        console.error("Could not parse current URL:", currentUrl, e);
      }
    }
  
    chrome.tabs.create({ url: targetUrl });
  });