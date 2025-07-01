
document.addEventListener('DOMContentLoaded', function() {
	  document.querySelectorAll('.is-collapsed').forEach(e => {
		      e.classList.remove('is-collapsed');
		      e.classList.add('is-expanded');
		    });
});
