const form = document.getElementById('searchbar');
const input = document.getElementById('address');

if (form && input) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const url = input.value.trim();
    if (url.includes('now.gg')) {
      nomoreservicesendpoint(url, '/now.html'); // Enclose 'now.html' in quotes
    } else {
      nomoreservicesendpoint(url, '/go.html');
    }
  });
}



function registerServiceWorker() {
  return window.navigator.serviceWorker.register('./sw.js', {
    scope: __uv$config.prefix,
  });
}



if (form && input) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const url = input.value.trim();
    if (url.includes('now.gg')) {
      nomoreservicesendpoint(url, '/now.html');
    } else {
      nomoreservicesendpoint(url, '/go.html');
    }
  });
}

function registerServiceWorker() {
  return window.navigator.serviceWorker.register('./sw.js', {
    scope: __uv$config.prefix,
  });
}

function nomoreservicesendpoint(value, path) {
  registerServiceWorker().then(() => {
    let url = value.trim();
    if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
    else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'https://' + url;

    if (url.includes('https://now.gg/') || url.includes('now.gg/')) {
      sessionStorage.setItem('GoUrl', __uv$config.encodeUrl(url));
      location.href = 'now.html';
    } else {
      sessionStorage.setItem('GoUrl', __uv$config.encodeUrl(url));

      if (path) {
        location.href = path;
      } else {
        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
      }
    }
  });
}

function blank(value) {
  processUrl(value);
}

function isUrl(val = '') {
  if (/^http(s?):\/\//.test(val) || (val.includes('.') && val.substr(0, 1) !== ' ')) return true;
  return false;
}

function openURL(url) {
    window.navigator.serviceWorker
        .register("./sw.js", {
      scope: __uv$config.prefix,
    })
    .then(() => {
      if (!isUrl(url)) url = getSearchEngineURL() + url;
      else if (!(url.startsWith("https://") || url.startsWith("http://")))
        url = "http://" + url;

      nomoreservicesendpoint(url, '/go.html');
    });
};


function blank(value) {
  processUrl(value);
}

function isUrl(val = '') {
  if (/^http(s?):\/\//.test(val) || (val.includes('.') && val.substr(0, 1) !== ' ')) return true;
  return false;
}


function openURL(url) {
    window.navigator.serviceWorker
    .register("./sw.js", {
      scope: __uv$config.prefix,
    })
    .then(() => {
      if (!isUrl(url)) url = getSearchEngineURL() + url;
      else if (!(url.startsWith("https://") || url.startsWith("http://")))
        url = "http://" + url;

      
        nomoreservicesendpoint(url, '/go.html');
      
    });
};