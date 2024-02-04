MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
var originTitle = document.title
var observer = new MutationObserver(function(mutations, observer) {document.title = originTitle});
observer.observe(document, {subtree: true, attributes: true});