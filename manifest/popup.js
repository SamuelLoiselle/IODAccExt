chrome.tabs.executeScript(void 0, {
	file: 'injected.js'
});
chrome.runtime.onMessage.addListener(
  function(request) {
      document.getElementById('errorDisplay').innerHTML = document.getElementById('errorDisplay').innerHTML + request.errors;
  });
document.getElementById('sam').addEventListener('click', () => {
	document.getElementById('errorDisplay').innerHTML = '';

	chrome.tabs.executeScript(void 0, {
		code: `(function() {
			flagCheckerS.errorCheck(flagCheckerS.errorListThatIsCool)
		})();`
	});
});
