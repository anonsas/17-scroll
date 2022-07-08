// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
// offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const year = document.querySelector('.date');
const thisYear = new Date().getFullYear().toString();
year.textContent = thisYear;

// ********** close links ************
const navToggleBtn = document.querySelector('.nav-toggle');
const ulWrapper = document.querySelector('.links-container');
const ulContainer = document.querySelector('.links');

navToggleBtn.addEventListener('click', () => {
  const containerHeight = ulWrapper.getBoundingClientRect().height; //0
  const linksHeight = ulContainer.getBoundingClientRect().height; // 201.5625

  if (containerHeight === 0) {
    ulWrapper.style.height = `${linksHeight}px`; // 201.5625
  } else {
    ulWrapper.style.height = 0; //0
  }
});

// ********** fixed navbar ************
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }

  if (scrollHeight > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});

// ********** smooth scroll ************
const navLinks = document.querySelectorAll('.scroll-link');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // navigate to specific id
    const id = e.currentTarget.getAttribute('href').slice(1);
    const sectionId = document.getElementById(id);

    // calculate heights
    const navHeight = navbar.getBoundingClientRect().height;
    const navLinksHeight = ulWrapper.getBoundingClientRect().height;

    const fixedNav = navbar.classList.contains('fixed-nav');
    let sectionPosition = sectionId.offsetTop - navHeight;

    if (!fixedNav) {
      sectionPosition = sectionPosition - navHeight;
    }

    if (navHeight > 82) {
      sectionPosition = sectionPosition + navLinksHeight;
    }

    window.scrollTo({
      left: 0,
      top: sectionPosition,
    });

    ulWrapper.style.height = 0;
  });
});
