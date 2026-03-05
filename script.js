/**
 * Java Developer Portfolio - Main JavaScript
 * Handles navigation, mobile menu, scroll animations, and form validation
 */

(function () {
  "use strict";
  // ========================================
  // DOM Elements
  // ========================================
  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const contactForm = document.getElementById("contact-form");
  // ========================================
  // Navigation Scroll Effect
  // ========================================
  function handleNavbarScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  // ========================================
  // Mobile Menu Toggle
  // ========================================
  function toggleMobileMenu() {
    navToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.body.style.overflow = navMenu.classList.contains("active")
      ? "hidden"
      : "";
  }

  function closeMobileMenu() {
    navToggle.classList.remove("active");
    navMenu.classList.remove("active");
    document.body.style.overflow = "";
  }

  // ========================================
  // Smooth Scroll Navigation
  // ========================================
  function smoothScrollTo(targetId) {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }

  // ========================================
  // Active Navigation Link
  // ========================================
  function updateActiveNavLink() {
    const sections = document.querySelectorAll("section[id]");
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  // ========================================
  // Scroll Animations
  // ========================================
  function initScrollAnimations() {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Add fade-in class to elements that should animate
    const animateElements = [
      ".skill-category",
      ".project-card",
      ".timeline-item",
      ".contact-info",
      ".contact-form",
      ".about-text",
      ".about-image",
    ];

    animateElements.forEach((selector) => {
      document.querySelectorAll(selector).forEach((element, index) => {
        element.classList.add("fade-in");
        element.classList.add(`fade-in-delay-${(index % 4) + 1}`);
        observer.observe(element);
      });
    });
  }

  // ========================================
  // Form Validation & Submission
  // ========================================
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function showFormError(input, message) {
    const formGroup = input.closest(".form-group");
    let errorElement = formGroup.querySelector(".error-message");

    if (!errorElement) {
      errorElement = document.createElement("span");
      errorElement.className = "error-message";
      errorElement.style.color = "#f778ba";
      errorElement.style.fontSize = "0.85rem";
      errorElement.style.marginTop = "4px";
      errorElement.style.display = "block";
      formGroup.appendChild(errorElement);
    }

    errorElement.textContent = message;
    input.style.borderColor = "#f778ba";
  }

  function clearFormError(input) {
    const formGroup = input.closest(".form-group");
    const errorElement = formGroup.querySelector(".error-message");

    if (errorElement) {
      errorElement.remove();
    }
    input.style.borderColor = "";
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const submitBtn = contactForm.querySelector(".btn-submit");

    let isValid = true;

    // Validate name
    if (!nameInput.value.trim()) {
      showFormError(nameInput, "Please enter your name");
      isValid = false;
    } else {
      clearFormError(nameInput);
    }

    // Validate email
    if (!emailInput.value.trim()) {
      showFormError(emailInput, "Please enter your email");
      isValid = false;
    } else if (!validateEmail(emailInput.value)) {
      showFormError(emailInput, "Please enter a valid email address");
      isValid = false;
    } else {
      clearFormError(emailInput);
    }

    // Validate message
    if (!messageInput.value.trim()) {
      showFormError(messageInput, "Please enter your message");
      isValid = false;
    } else if (messageInput.value.trim().length < 10) {
      showFormError(messageInput, "Message must be at least 10 characters");
      isValid = false;
    } else {
      clearFormError(messageInput);
    }

    if (isValid) {
      // Simulate form submission
      submitBtn.classList.add("loading");

      setTimeout(() => {
        submitBtn.classList.remove("loading");

        // Show success message
        alert("Thank you for your message! I will get back to you soon.");

        // Reset form
        contactForm.reset();
      }, 1500);
    }
  }

  // ========================================
  // Event Listeners
  // ========================================

  // Scroll events
  window.addEventListener("scroll", () => {
    handleNavbarScroll();
    updateActiveNavLink();
  });

  // Mobile menu toggle
  if (navToggle) {
    navToggle.addEventListener("click", toggleMobileMenu);
  }

  // Navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      smoothScrollTo(targetId);
      closeMobileMenu();
    });
  });

  // Close mobile menu on outside click
  document.addEventListener("click", (e) => {
    if (
      navMenu.classList.contains("active") &&
      !navMenu.contains(e.target) &&
      !navToggle.contains(e.target)
    ) {
      closeMobileMenu();
    }
  });

  // Close mobile menu on orientation change
  window.addEventListener("orientationchange", () => {
    setTimeout(closeMobileMenu, 100);
  });

  // Form submission
  if (contactForm) {
    contactForm.addEventListener("submit", handleFormSubmit);

    // Clear errors on input
    contactForm.querySelectorAll(".form-input").forEach((input) => {
      input.addEventListener("input", () => clearFormError(input));
    });
  }

  // ========================================
  // Initialize
  // ========================================
  document.addEventListener("DOMContentLoaded", () => {
    handleNavbarScroll();
    updateActiveNavLink();
    initScrollAnimations();
  });
})();
