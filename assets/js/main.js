/**
 * ENGINEERING PORTFOLIO - AKSHIDHA SHREE G.R.
 * Interactive Scripts: Gallery Switcher, Lightbox, Filter, Clipboard & PDF Print
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initProjectGalleries();
  initLightbox();
  initCopyEmail();
  initProjectFilters();
  initScrollEffects();
});

/* Mobile Navigation Toggle */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      const isExpanded = navLinks.classList.contains('show');
      toggleBtn.setAttribute('aria-expanded', isExpanded);
    });

    // Close mobile nav when clicking outside
    document.addEventListener('click', (e) => {
      if (!toggleBtn.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('show');
      }
    });
  }
}

/* Project Image Gallery Thumbnail Switcher */
function initProjectGalleries() {
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    const mainImgContainer = card.querySelector('.main-image-container img');
    const thumbnails = card.querySelectorAll('.thumb-item');

    if (mainImgContainer && thumbnails.length > 0) {
      thumbnails.forEach(thumb => {
        thumb.addEventListener('click', (e) => {
          e.stopPropagation();
          const newSrc = thumb.getAttribute('data-full') || thumb.querySelector('img').src;
          const newCaption = thumb.getAttribute('data-caption') || thumb.querySelector('img').alt;

          // Update active state
          thumbnails.forEach(t => t.classList.remove('active'));
          thumb.classList.add('active');

          // Smooth image swap
          mainImgContainer.style.opacity = '0.3';
          setTimeout(() => {
            mainImgContainer.src = newSrc;
            mainImgContainer.alt = newCaption;
            mainImgContainer.style.opacity = '1';
          }, 150);
        });
      });
    }
  });
}

/* Lightbox Modal for High-Resolution Circuit & Hardware Inspection */
function initLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (!modal) return;

  const lightboxImg = modal.querySelector('.lightbox-img');
  const lightboxCaption = modal.querySelector('.lightbox-caption');
  const closeBtn = modal.querySelector('.lightbox-close');

  const openLightbox = (src, caption) => {
    lightboxImg.src = src;
    lightboxCaption.textContent = caption || 'Hardware Inspection View';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  // Attach to all zoomable main images
  document.querySelectorAll('.main-image-container').forEach(container => {
    container.addEventListener('click', () => {
      const img = container.querySelector('img');
      if (img) openLightbox(img.src, img.alt);
    });
  });

  // Attach to individual thumbnails with direct zoom
  document.querySelectorAll('.thumb-item').forEach(thumb => {
    thumb.addEventListener('dblclick', () => {
      const img = thumb.querySelector('img');
      if (img) openLightbox(thumb.getAttribute('data-full') || img.src, img.alt);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeLightbox);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('lightbox-container')) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeLightbox();
    }
  });
}

/* Copy Email Toast Handler */
function initCopyEmail() {
  const copyButtons = document.querySelectorAll('.copy-email-btn');
  const toast = document.getElementById('toastNotice');
  const toastText = document.getElementById('toastText');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = btn.getAttribute('data-email') || 'akshidha78@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast(`Email copied: ${email}`);
      }).catch(() => {
        showToast(`Contact: ${email}`);
      });
    });
  });

  function showToast(message) {
    if (!toast) return;
    if (toastText) toastText.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }
}

/* Project Category Filter (for Projects Page) */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterBtns.length === 0 || projectCards.length === 0) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // Update button active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter cards
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category.includes(filter)) {
          card.style.display = 'block';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* Subtle Scroll Effects & Header Border */
function initScrollEffects() {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        navbar.style.borderBottomColor = 'rgba(0, 229, 255, 0.25)';
        navbar.style.background = 'rgba(7, 11, 18, 0.95)';
      } else {
        navbar.style.borderBottomColor = 'var(--border-subtle)';
        navbar.style.background = 'rgba(7, 11, 18, 0.85)';
      }
    });
  }
}

/* PDF Print Trigger Helper */
function printPortfolio() {
  window.print();
}
window.printPortfolio = printPortfolio;
