// SoccerVerse – Premium Football Experience Navigation & Core Framework (2026)
(function () {
    const page = document.body.getAttribute('data-page') || '';

    // ── Navigation Configuration ──
    const links = [
        { href: 'index.html', label: 'Home', id: 'home' },
        { href: 'games.html', label: 'Matches', id: 'games' },
        { href: 'players.html', label: 'Players', id: 'players' },
        { href: 'scores.html', label: 'Standings', id: 'scores' },
        { href: 'feedback.html', label: 'Feedback', id: 'feedback' },
        { href: 'contact.html', label: 'Contact', id: 'contact' },
    ];

    const navItems = links.map(l =>
        `<li class="nav-item">
            <a href="${l.href}" class="nav-link ${l.id === page ? 'active' : ''}" id="nav-${l.id}">
                ${l.label}
                <span class="nav-indicator"></span>
            </a>
        </li>`
    ).join('');

    // ── Header Injection ──
    const headerEl = document.getElementById('site-header');
    if (headerEl) {
        headerEl.innerHTML = `
            <div class="container header-container">
                <a class="logo" href="index.html" id="site-logo" aria-label="SoccerVerse Home">
                    <div class="logo-icon">
                        <i class="fas fa-futbol"></i>
                    </div>
                    <span class="logo-text">Soccer<span class="logo-accent">Verse</span></span>
                </a>

                <nav class="main-nav" role="navigation" aria-label="Main Navigation">
                    <ul class="nav-links" id="nav-menu">${navItems}</ul>
                </nav>

                <div class="header-cta">
                    <a href="scores.html" class="header-badge">
                        <span class="live-dot"></span> 3 Live Games
                    </a>
                </div>

                <button class="hamburger" id="hamburger" aria-label="Toggle Navigation Menu" aria-expanded="false">
                    <span></span><span></span><span></span>
                </button>
            </div>`;
    }

    // ── Footer Injection ──
    const footerEl = document.getElementById('site-footer');
    if (footerEl) {
        footerEl.innerHTML = `
            <div class="container">
                <div class="footer-grid">
                    <div class="footer-col">
                        <a class="logo" href="index.html" style="margin-bottom:16px; display:inline-flex;">
                            <div class="logo-icon"><i class="fas fa-futbol"></i></div>
                            <span class="logo-text">Soccer<span class="logo-accent">Verse</span></span>
                        </a>
                        <p style="margin-top:10px; font-size:0.92rem; line-height:1.6;">The next-generation football telemetry & match platform. Real-time live scores, tactical insights, and comprehensive player intelligence for fans worldwide.</p>
                        <div class="social-links">
                            <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter/X"><i class="fab fa-x-twitter"></i></a>
                            <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                            <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                            <a href="https://tiktok.com" target="_blank" rel="noopener" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>
                            <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                        </div>
                    </div>

                    <div class="footer-col">
                        <h4>Navigation</h4>
                        <ul class="footer-links">
                            <li><a href="index.html"><i class="fas fa-home"></i> Home</a></li>
                            <li><a href="games.html"><i class="fas fa-futbol"></i> Matches</a></li>
                            <li><a href="players.html"><i class="fas fa-user-ninja"></i> Players</a></li>
                            <li><a href="scores.html"><i class="fas fa-table"></i> Standings</a></li>
                            <li><a href="feedback.html"><i class="fas fa-comment-dots"></i> Feedback</a></li>
                            <li><a href="contact.html"><i class="fas fa-envelope"></i> Contact Us</a></li>
                            <li><a href="about.html"><i class="fas fa-info-circle"></i> About SoccerVerse</a></li>
                        </ul>
                    </div>

                    <div class="footer-col">
                        <h4>Competitions</h4>
                        <ul class="footer-links">
                            <li><a href="games.html?league=ucl"><i class="fas fa-trophy"></i> Champions League</a></li>
                            <li><a href="games.html?league=epl"><i class="fas fa-shield-alt"></i> Premier League</a></li>
                            <li><a href="games.html?league=laliga"><i class="fas fa-shield-alt"></i> La Liga</a></li>
                            <li><a href="games.html?league=seriea"><i class="fas fa-shield-alt"></i> Serie A</a></li>
                            <li><a href="games.html?league=bundesliga"><i class="fas fa-shield-alt"></i> Bundesliga</a></li>
                            <li><a href="games.html?league=ligue1"><i class="fas fa-shield-alt"></i> Ligue 1</a></li>
                        </ul>
                    </div>

                    <div class="footer-col">
                        <h4>Match Alerts</h4>
                        <p style="font-size:0.92rem;">Subscribe to get real-time goal alerts and weekly football intelligence reports.</p>
                        <form class="newsletter-form" id="footer-newsletter-form">
                            <input type="email" placeholder="Enter your email address" required aria-label="Email for Newsletter">
                            <button type="submit" aria-label="Subscribe to newsletter"><i class="fas fa-paper-plane"></i></button>
                        </form>
                        <div style="margin-top:14px; font-size:0.8rem; color:var(--secondary-text);">
                            <i class="fas fa-check-circle" style="color:var(--primary);"></i> Over 150,000 subscribers
                        </div>
                    </div>
                </div>

                <div class="footer-bottom">
                    <div>&copy; 2026 SoccerVerse Platform. All rights reserved. &nbsp;|&nbsp; Built for True Football Fans.</div>
                    <div style="display:flex; gap:16px;">
                        <a href="about.html" style="color:var(--secondary-text);">About</a>
                        <a href="contact.html" style="color:var(--secondary-text);">Support</a>
                        <a href="feedback.html" style="color:var(--secondary-text);">Feedback</a>
                    </div>
                </div>
            </div>`;

        // Newsletter handler
        const newsForm = document.getElementById('footer-newsletter-form');
        if (newsForm) {
            newsForm.addEventListener('submit', function(e) {
                e.preventDefault();
                showToast('Thank you for subscribing to SoccerVerse Alerts! ⚽');
                newsForm.reset();
            });
        }
    }

    // ── Hamburger Toggle ──
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = navMenu.classList.toggle('open');
            hamburger.classList.toggle('active', isOpen);
            hamburger.setAttribute('aria-expanded', isOpen);
        });

        // Close menu on click outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('open');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // ── Header Scroll Blur ──
    if (headerEl) {
        const onScroll = () => {
            headerEl.classList.toggle('scrolled', window.scrollY > 40);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    // ── Global Toast Notification ──
    window.showToast = function (msg, type = 'success') {
        let t = document.getElementById('sv-toast');
        if (!t) {
            t = document.createElement('div');
            t.id = 'sv-toast';
            t.style.cssText = `
                position: fixed;
                bottom: 30px;
                right: 30px;
                background: linear-gradient(135deg, #00FFB3, #00D4FF);
                color: #05070D;
                padding: 14px 24px;
                border-radius: 12px;
                font-weight: 700;
                font-size: 0.92rem;
                font-family: 'Inter', sans-serif;
                z-index: 99999;
                box-shadow: 0 10px 30px rgba(0, 255, 179, 0.45);
                display: flex;
                align-items: center;
                gap: 10px;
                transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
                opacity: 0;
                transform: translateY(20px) scale(0.95);
                pointer-events: none;
            `;
            document.body.appendChild(t);
        }

        let icon = '<i class="fas fa-check-circle"></i>';
        if (type === 'error') {
            icon = '<i class="fas fa-exclamation-circle"></i>';
            t.style.background = 'linear-gradient(135deg, #FF3B5C, #FF6B81)';
            t.style.color = '#FFFFFF';
            t.style.boxShadow = '0 10px 30px rgba(255, 59, 92, 0.45)';
        } else if (type === 'info') {
            icon = '<i class="fas fa-info-circle"></i>';
            t.style.background = 'linear-gradient(135deg, #00D4FF, #8B5CF6)';
            t.style.color = '#FFFFFF';
            t.style.boxShadow = '0 10px 30px rgba(0, 212, 255, 0.45)';
        } else {
            t.style.background = 'linear-gradient(135deg, #00FFB3, #00D4FF)';
            t.style.color = '#05070D';
            t.style.boxShadow = '0 10px 30px rgba(0, 255, 179, 0.45)';
        }

        t.innerHTML = `${icon} <span>${msg}</span>`;
        t.style.opacity = '1';
        t.style.transform = 'translateY(0) scale(1)';

        clearTimeout(t._t);
        t._t = setTimeout(() => {
            t.style.opacity = '0';
            t.style.transform = 'translateY(20px) scale(0.95)';
        }, 3500);
    };

    // ── Form Helper ──
    window.handleForm = function (formId, msg) {
        const f = document.getElementById(formId);
        if (f) {
            f.addEventListener('submit', function (e) {
                e.preventDefault();
                showToast(msg);
                f.reset();
            });
        }
    };

    // ── Global Image Error Fallback Handler ──
    // Guarantees zero broken images across the entire website!
    const svgFallback = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="%230F172A"><rect width="100" height="100" rx="20" fill="%230F172A"/><path d="M50 20 A30 30 0 1 0 50 80 A30 30 0 1 0 50 20 Z" fill="none" stroke="%2300FFB3" stroke-width="4"/><circle cx="50" cy="50" r="12" fill="%2300FFB3"/><text x="50" y="93" font-size="9" text-anchor="middle" fill="%2394A3B8" font-family="sans-serif">SOCCERVERSE</text></svg>';

    document.addEventListener('error', function (e) {
        if (e.target && e.target.tagName === 'IMG') {
            const img = e.target;
            if (!img.dataset.hasFailed) {
                img.dataset.hasFailed = 'true';
                img.src = svgFallback;
                img.style.objectFit = 'contain';
            }
        }
    }, true);

    // ── Global Highlights Modal ──
    function createHighlightsModal() {
        if (document.getElementById('sv-highlights-modal')) return;

        const modalOverlay = document.createElement('div');
        modalOverlay.id = 'sv-highlights-modal';
        modalOverlay.className = 'sv-modal-overlay';
        modalOverlay.innerHTML = `
            <div class="sv-modal" style="max-width:820px; padding:0; overflow:hidden;">
                <button class="sv-modal-close" id="close-highlights-modal" aria-label="Close highlights">&times;</button>
                <div style="position:relative; background:#000; width:100%; aspect-ratio:16/9; display:flex; flex-direction:column; align-items:center; justify-content:center; overflow:hidden;">
                    <img id="modal-video-poster" src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; opacity:0.5; filter:blur(2px);">
                    <div style="position:absolute; inset:0; background:linear-gradient(180deg, rgba(5,7,13,0.3) 0%, rgba(5,7,13,0.85) 100%);"></div>
                    
                    <div style="position:relative; z-index:2; text-align:center; padding:20px;">
                        <div style="width:75px; height:75px; border-radius:50%; background:linear-gradient(135deg,#00FFB3,#00D4FF); display:inline-flex; align-items:center; justify-content:center; font-size:1.8rem; color:#05070D; margin-bottom:15px; box-shadow:0 0 35px rgba(0,255,179,0.7); cursor:pointer; padding-left:4px;" onclick="showToast('Playing official 4K match stream... ⚽')">
                            <i class="fas fa-play"></i>
                        </div>
                        <h2 id="modal-video-title" style="margin-bottom:8px; font-size:1.5rem;">UEFA Champions League Highlights</h2>
                        <p id="modal-video-desc" style="color:var(--secondary-text); font-size:0.95rem; margin-bottom:15px;">Real Madrid 2 - 1 Manchester City (Full Recap, All Goals & Tactical Analysis)</p>
                        <div style="display:inline-flex; gap:15px; font-size:0.85rem; color:var(--primary); font-weight:700;">
                            <span><i class="fas fa-tv"></i> 4K Ultra HD</span>
                            <span><i class="fas fa-volume-up"></i> English Commentary</span>
                            <span><i class="fas fa-clock"></i> 08:45</span>
                        </div>
                    </div>
                </div>
                <div style="padding:24px; background:var(--surface);">
                    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
                        <div>
                            <span style="color:var(--primary); font-weight:700; font-size:0.8rem; text-transform:uppercase; letter-spacing:1px;">Key Match Events Included</span>
                            <div style="display:flex; gap:10px; margin-top:8px; flex-wrap:wrap;">
                                <span class="badge-count" style="background:rgba(255,255,255,0.08); padding:4px 10px;">12' Haaland Goal</span>
                                <span class="badge-count" style="background:rgba(255,255,255,0.08); padding:4px 10px;">45' Vini Jr. Goal</span>
                                <span class="badge-count" style="background:rgba(255,255,255,0.08); padding:4px 10px;">78' Bellingham Winner</span>
                            </div>
                        </div>
                        <a href="games.html" class="btn btn-outline btn-sm">Explore All Matches <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modalOverlay);

        document.getElementById('close-highlights-modal').addEventListener('click', () => {
            modalOverlay.classList.remove('active');
        });

        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) modalOverlay.classList.remove('active');
        });
    }

    window.openHighlightsModal = function (title, desc, poster) {
        createHighlightsModal();
        const modalOverlay = document.getElementById('sv-highlights-modal');
        if (title) document.getElementById('modal-video-title').textContent = title;
        if (desc) document.getElementById('modal-video-desc').textContent = desc;
        if (poster) document.getElementById('modal-video-poster').src = poster;
        modalOverlay.classList.add('active');
    };

    // Attach highlights listener to buttons
    document.addEventListener('DOMContentLoaded', () => {
        createHighlightsModal();
        document.querySelectorAll('[data-action="highlights"], .btn-highlights').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const title = btn.getAttribute('data-title') || 'Match Highlights & Analysis';
                const desc = btn.getAttribute('data-desc') || 'Full highlights, key goal sequences, and tactical post-match review.';
                const poster = btn.getAttribute('data-poster');
                openHighlightsModal(title, desc, poster);
            });
        });

        // ── Universal Tab Switcher (.detail-nav-tab & [data-tab]) ──
        document.querySelectorAll('.detail-nav-tab, [data-tab-target]').forEach(tabBtn => {
            tabBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = tabBtn.getAttribute('data-tab-target') || tabBtn.getAttribute('href')?.replace('#', '');
                if (!targetId) return;

                // Deactivate sibling tabs
                const parentNav = tabBtn.closest('.detail-nav-tabs') || tabBtn.parentElement;
                if (parentNav) {
                    parentNav.querySelectorAll('.detail-nav-tab, [data-tab-target]').forEach(t => t.classList.remove('active'));
                }
                tabBtn.classList.add('active');

                // Switch panes in the same container or document
                const container = tabBtn.closest('.container') || document;
                container.querySelectorAll('.tab-pane').forEach(pane => {
                    if (pane.id === targetId) {
                        pane.classList.add('active');
                    } else if (pane.id && document.getElementById(targetId)) {
                        // only hide sibling panes that share the tab set
                        if (pane.parentElement === document.getElementById(targetId).parentElement) {
                            pane.classList.remove('active');
                        }
                    }
                });
            });
        });
    });

})();
