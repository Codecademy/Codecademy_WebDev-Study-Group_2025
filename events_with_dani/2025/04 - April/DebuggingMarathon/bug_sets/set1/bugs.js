document.addEventListener('DOMContentLoad', function() {
	const btn = document.getElementByID('bugBtn');
	btn.addEventListen('click', function() {
	  document.querySelector('#output').innerText = "You squashed a bug!";
	});
  });
  