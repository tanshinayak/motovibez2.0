// Main JavaScript for AutoDetailing Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        offset: 50,
        once: true,
        easing: 'ease-out-cubic'
    });

    // Gallery data
    const galleryData = [
        {
            id: 1,
            src: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW1ib3JnaGluaSUyMGNhcnN8ZW58MXx8fHwxNzU3ODQ1MzI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
            alt: 'Lamborghini Sports Car',
            category: 'sports',
            title: 'Lamborghini PPF Installation'
        },
        {
            id: 2,
            src: 'https://images.unsplash.com/photo-1563720223185-11003d516935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZW50bGV5JTIwbHV4dXJ5JTIwY2FyfGVufDF8fHx8MTc1Nzg0NTMyNHww&ixlib=rb-4.1.0&q=80&w=1080',
            alt: 'Luxury Bentley',
            category: 'luxury',
            title: 'Bentley Ceramic Coating'
        },
        {
            id: 3,
            src: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaXNzYW4lMjBza3lsaW5lJTIwanBufGVufDF8fHx8MTc1Nzg0NTMyNHww&ixlib=rb-4.1.0&q=80&w=1080',
            alt: 'Nissan Skyline JDM',
            category: 'jdm',
            title: 'Skyline Full Detail'
        },
        {
            id: 4,
            src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwY2FyJTIwdmludGFnZXxlbnwxfHx8fDE3NTc4NDUzMjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
            alt: 'Classic Vintage Car',
            category: 'classic',
            title: 'Classic Car Restoration'
        },
        {
            id: 5,
            src: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJyYXJpJTIwc3BvcnRzJTIwY2FyfGVufDF8fHx8MTc1Nzg0NTMyNHww&ixlib=rb-4.1.0&q=80&w=1080',
            alt: 'Ferrari Sports Car',
            category: 'sports',
            title: 'Ferrari Paint Protection'
        },
        {
            id: 6,
            src: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXJjZWRlcyUyMGx1eHVyeXxlbnwxfHx8fDE3NTc4NDUzMjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
            alt: 'Mercedes Luxury',
            category: 'luxury',
            title: 'Mercedes Ceramic Coating'
        }
    ];

    // Initialize Gallery
    function initGallery() {
        const galleryContainer = document.getElementById('gallery-container');
        const filterButtons = document.querySelectorAll('.filter-buttons .btn');

        // Render gallery items
        function renderGallery(items) {
            galleryContainer.innerHTML = '';
            items.forEach((item, index) => {
                const galleryItem = createGalleryItem(item, index);
                galleryContainer.appendChild(galleryItem);
            });
        }

        // Create gallery item
        function createGalleryItem(item, index) {
            const div = document.createElement('div');
            div.className = 'col-md-6 col-lg-4 gallery-item';
            div.setAttribute('data-aos', 'fade-up');
            div.setAttribute('data-aos-delay', (index * 100).toString());
            
            div.innerHTML = `
                <div class="gallery-card">
                    <div class="gallery-image-container">
                        <img src="${item.src}" alt="${item.alt}" class="gallery-image">
                        <div class="gallery-overlay">
                            <h5 class="gallery-title">${item.title}</h5>
                            <button class="btn btn-sm btn-gradient" onclick="openImageModal('${item.src}', '${item.title}')">
                                <i class="fas fa-expand-alt me-1"></i>
                                View Full Size
                            </button>
                        </div>
                    </div>
                </div>
            `;
            
            return div;
        }

        // Filter functionality
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Filter items
                const filteredItems = filter === 'all' 
                    ? galleryData 
                    : galleryData.filter(item => item.category === filter);
                
                renderGallery(filteredItems);
                
                // Refresh AOS
                AOS.refresh();
            });
        });

        // Initial render
        renderGallery(galleryData);
    }

    // Image Modal
    window.openImageModal = function(src, title) {
        // Create modal if it doesn't exist
        let modal = document.getElementById('imageModal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'imageModal';
            modal.className = 'modal fade';
            modal.innerHTML = `
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content bg-dark border-secondary">
                        <div class="modal-header border-secondary">
                            <h5 class="modal-title text-white" id="imageModalTitle">${title}</h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body p-0">
                            <img id="modalImage" src="${src}" alt="${title}" class="img-fluid w-100">
                        </div>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
        } else {
            document.getElementById('imageModalTitle').textContent = title;
            document.getElementById('modalImage').src = src;
            document.getElementById('modalImage').alt = title;
        }
        
        const bootstrapModal = new bootstrap.Modal(modal);
        bootstrapModal.show();
    };

    // Smooth scrolling for navigation links
    function initSmoothScrolling() {
        const navLinks = document.querySelectorAll('a[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 100; // Account for fixed navbar
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse.classList.contains('show')) {
                        const navbarToggler = document.querySelector('.navbar-toggler');
                        navbarToggler.click();
                    }
                }
            });
        });
    }

    // Navbar scroll effect
    function initNavbarScrollEffect() {
        const navbar = document.querySelector('.navbar');
        let lastScrollTop = 0;
        
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Add/remove scrolled class for styling
            if (scrollTop > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            lastScrollTop = scrollTop;
        });
    }

    // Add active nav link highlighting
    function initActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY + 150;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        });
    }

    // Initialize all functions
    initGallery();
    initSmoothScrolling();
    initNavbarScrollEffect();
    initActiveNavLink();

    // Add loading animation to images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('fade-in-up');
        });
    });

    // Contact form interactions (if you want to add a form later)
    const contactButtons = document.querySelectorAll('.btn-gradient');
    contactButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add parallax effect to hero background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero-section');
        
        if (heroSection && scrolled < window.innerHeight) {
            const rate = scrolled * -0.5;
            heroSection.style.transform = `translateY(${rate}px)`;
        }
    });

    // Add floating animation to dots
    const floatingDots = document.querySelectorAll('.floating-dot');
    floatingDots.forEach((dot, index) => {
        setInterval(() => {
            const randomX = Math.random() * 20 - 10;
            const randomY = Math.random() * 20 - 10;
            dot.style.transform = `translate(${randomX}px, ${randomY}px)`;
        }, 2000 + (index * 500));
    });

    console.log('AutoDetailing website loaded successfully! 🚗✨');
});

// Add CSS for gallery cards
const galleryStyles = `
    <style>
        .gallery-card {
            background: rgba(17, 24, 39, 0.8);
            border: 1px solid #374151;
            border-radius: 1rem;
            overflow: hidden;
            transition: all 0.3s ease;
            height: 100%;
        }
        
        .gallery-card:hover {
            transform: translateY(-8px);
            border-color: #8b5cf6;
            box-shadow: 0 20px 40px rgba(139, 92, 246, 0.2);
        }
        
        .gallery-image-container {
            position: relative;
            overflow: hidden;
        }
        
        .gallery-image {
            width: 100%;
            height: 250px;
            object-fit: cover;
            transition: transform 0.3s ease;
        }
        
        .gallery-card:hover .gallery-image {
            transform: scale(1.1);
        }
        
        .gallery-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, transparent 100%);
            padding: 1.5rem;
            color: white;
            transform: translateY(100%);
            transition: transform 0.3s ease;
        }
        
        .gallery-card:hover .gallery-overlay {
            transform: translateY(0);
        }
        
        .gallery-title {
            margin-bottom: 1rem;
            font-weight: 600;
        }
        
        .navbar.scrolled {
            background: rgba(0, 0, 0, 0.98) !important;
            box-shadow: 0 2px 20px rgba(139, 92, 246, 0.1);
        }
        
        .navbar-nav .nav-link.active {
            color: #8b5cf6 !important;
        }
        
        @media (max-width: 768px) {
            .gallery-image {
                height: 200px;
            }
            
            .gallery-overlay {
                padding: 1rem;
            }
        }
    </style>
`;

document.head.insertAdjacentHTML('beforeend', galleryStyles);