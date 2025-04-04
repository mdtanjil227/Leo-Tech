document.addEventListener("DOMContentLoaded", function () {
  const navbarCollapse = document.getElementById("navbarNav");
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      if (bsCollapse && navbarCollapse.classList.contains("show")) {
        bsCollapse.hide();
      }
    });
  });

  document.addEventListener("click", function (e) {
    const isClickInside = navbarCollapse.contains(e.target) || e.target.classList.contains("navbar-toggler");
    const isExpanded = navbarCollapse.classList.contains("show");

    if (!isClickInside && isExpanded) {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      if (bsCollapse) bsCollapse.hide();
    }
  });
});
// Bootstrap form validation
const forms = document.querySelectorAll('.needs-validation');
forms.forEach(form => {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
    } else {
      const toast = new bootstrap.Toast(document.getElementById('contactToast'));
      toast.show();
    
      form.reset();
      form.classList.remove('was-validated');
    }
  }, false);
});
// Scroll animation
ScrollReveal().reveal('section', {
  distance: '50px',
  duration: 800,
  easing: 'ease-out',
  origin: 'bottom',
  reset: true,
  interval: 100,
});

// Back to top button
const backToTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

