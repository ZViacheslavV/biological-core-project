import { refs } from './refs';

const resetHeaderLinksUnderlines = () =>
  refs.navLinks.forEach(link => link.classList.remove('active-link'));

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        resetHeaderLinksUnderlines();

        const id = entry.target.getAttribute('id');
        if (!id) return;

        const activeLink = document.querySelector(
          `.header-nav-link[href="#${id}"]`
        );
        if (activeLink) {
          activeLink.classList.add('active-link');
        }
      }
    });
  },
  {
    threshold: [0, 0.25, 0.5],
    rootMargin: '-30% 0px -60% 0px',
    // threshold: [0, 0.25, 0.5],   //best option for now
    // rootMargin: '-30% 0px -60% 0px',
  }
);

refs.sections.forEach(section => observer.observe(section));
