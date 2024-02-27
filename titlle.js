MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
var observer = new MutationObserver(function(mutations, observer) {
  document.title = document.title.replace(/^\(\d+\)\s*/, '');
});
observer.observe(document.querySelector('title'), {subtree: true});
