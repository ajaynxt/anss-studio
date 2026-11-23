// Anss Studio - Bright & Luxury Studio Experience Engine

// ================= 1. PROJECT DATA CATALOG WITH REAL HIGH-RES WEDDING PHOTOS =================
const projectsData = [
  {
    id: 'edius-master-2026',
    title: 'Edius 11 Royal Wedding Master Project',
    category: 'edius',
    badge: 'Edius Pro',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    image: './assets/slider-couple-graded.jpg',
    resolution: '4K / 60FPS',
    audio: 'Pre-synced Bollywood & Sufi',
    price: 11500,
    originalPrice: 15000,
    description: 'Complete Wedding Sequence: Haldi, Mehndi, Varmala, Reception, and Cinematic 3-Min Teaser. Zero missing plugins.',
    videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1'
  },
  {
    id: 'premiere-cinematic-teaser',
    title: 'Premiere Pro 4K Cinematic Teaser Pack',
    category: 'premiere',
    badge: 'Premiere Pro',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    image: './assets/wedding-bride.jpg',
    resolution: '4K UHD HDR',
    audio: 'Beat Marker Guided',
    price: 5999,
    originalPrice: 8500,
    description: 'Modern slow-motion speed ramps, film halation, color grading LUTs, and auto-beat sync transitions for Premiere 2022-2026.',
    videoUrl: 'https://www.youtube.com/embed/9No-FiEInLA?autoplay=1'
  },
  {
    id: 'ae-royal-invitation',
    title: 'After Effects 3D Royal Palace Wedding Invite',
    category: 'after-effects',
    badge: 'After Effects',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    image: './assets/after-effects-project.jpg',
    resolution: '3840x2160',
    audio: 'Royal Shehnai & Strings',
    price: 5999,
    originalPrice: 7999,
    description: 'Luxurious gold ornament flourishes, 3D palace gates opening, golden foil text reveal. Easily change bride & groom names.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
  },
  {
    id: 'fcp-wedding-storyteller',
    title: 'Final Cut Pro (FCPX) Wedding Storyteller Suite',
    category: 'fcp',
    badge: 'Final Cut Pro',
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
    image: './assets/wedding-palace.jpg',
    resolution: 'Apple ProRes 422',
    audio: 'Multi-Track Audio Sync',
    price: 11999,
    originalPrice: 16000,
    description: 'Superfast Apple Silicon native rendering (M1/M2/M3/M4). Complete wedding timeline with color grading generators.',
    videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1'
  },
  {
    id: 'led-stage-center',
    title: 'LED Stage Center - Royal Grand Varmala (4K)',
    category: 'led',
    badge: 'LED Center',
    badgeColor: 'bg-cyan-50 text-cyan-800 border-cyan-200',
    image: './assets/led-stage-1.jpg',
    resolution: '3840x2160 (60FPS)',
    audio: 'Visual Loop',
    price: 7500,
    originalPrice: 10000,
    description: 'Seamless 60-second loop with grand temple pillars, golden chandeliers, and peacock motifs. Resolume Arena ready.',
    videoUrl: 'https://www.youtube.com/embed/9No-FiEInLA?autoplay=1'
  },
  {
    id: 'led-stage-wings',
    title: 'LED Stage Wings (Left & Right Synchronized Pair)',
    category: 'led',
    badge: 'LED Wings',
    badgeColor: 'bg-cyan-50 text-cyan-800 border-cyan-200',
    image: './assets/led-stage-2.jpg',
    resolution: '1080x1920 (Pair)',
    audio: 'Visual Loop',
    price: 6500,
    originalPrice: 9000,
    description: 'Perfect vertical wing loops designed to frame the center screen. Ambient golden sparkle particles and palace arches.',
    videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1'
  },
  {
    id: 'led-stage-base',
    title: 'LED Stage Base Strip & Floor Riser Visuals',
    category: 'led',
    badge: 'LED Base',
    badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    image: './assets/led-stage-4.jpg',
    resolution: '3840x480 Ultra-Wide',
    audio: 'Visual Loop',
    price: 4500,
    originalPrice: 6000,
    description: 'Horizontal stage bottom strip with synchronized wave particle motion. Matches center screen timing 1:1.',
    videoUrl: 'https://www.youtube.com/embed/9No-FiEInLA?autoplay=1'
  },
  {
    id: 'complete-led-bundle',
    title: 'Complete 4-Piece Grand Stage LED Visual Bundle',
    category: 'led',
    badge: '4-Screen Bundle',
    badgeColor: 'bg-rose-50 text-rose-700 border-rose-300 font-bold',
    image: './assets/led-stage-3.jpg',
    resolution: 'Full 4-Screen Sync',
    audio: 'Timecode Sync Ready',
    price: 15999,
    originalPrice: 24000,
    description: 'Save 35%! Includes: Center 4K Screen + Left Wing + Right Wing + Base Riser in 3 luxury themes (Varmala, Sangeet & Sufi).',
    videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1'
  },
  {
    id: 'edius-haldi-song-mixing',
    title: 'Edius Haldi & Sangeet Beat-Sync Song Mixing',
    category: 'edius',
    badge: 'Edius Pro',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    image: './assets/wedding-haldi.jpg',
    resolution: '1080p / 4K Ready',
    audio: '20+ Hit Songs Pre-Cut',
    price: 6999,
    originalPrice: 9500,
    description: 'High-energy cuts for fast dance sequences and haldi celebrations. Ready with light leaks and dhol rhythmic transitions.',
    videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1'
  },
  {
    id: 'ae-vertical-reels-pack',
    title: 'After Effects 9:16 Instagram Reels Wedding Pack',
    category: 'after-effects',
    badge: 'After Effects',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    image: './assets/wedding-sangeet.jpg',
    resolution: '1080x1920 Vertical',
    audio: 'Trending Audio Cut',
    price: 3999,
    originalPrice: 5500,
    description: '15 High-engagement vertical teaser templates for Instagram, YouTube Shorts, and WhatsApp Status. Instant drag-drop.',
    videoUrl: 'https://www.youtube.com/embed/9No-FiEInLA?autoplay=1'
  }
];

// App State
let currentFilter = 'all';
let currentSearch = '';
let cart = [];
let currentModalItemTitle = '';

// ================= 2. INITIALIZATION =================
document.addEventListener('DOMContentLoaded', () => {
  initBeforeAfterSlider();
  initLiveSalesToasts();
  initSavingsCalculator();
  renderProjects();
  setupEventListeners();
  if (window.lucide) {
    lucide.createIcons();
  }
});

// ================= 3. BEFORE / AFTER COLOR GRADE SLIDER (PIXEL-PERFECT ACCURACY) =================
function syncSliderImageDimensions() {
  const wrapper = document.getElementById('sliderWrapper');
  const rawImg = document.getElementById('rawImg');
  if (wrapper && rawImg) {
    rawImg.style.width = wrapper.clientWidth + 'px';
    rawImg.style.height = wrapper.clientHeight + 'px';
  }
}

function initBeforeAfterSlider() {
  const wrapper = document.getElementById('sliderWrapper');
  const beforeContainer = document.getElementById('beforeImageContainer');
  const handle = document.getElementById('sliderHandle');
  if (!wrapper || !beforeContainer || !handle) return;

  // Sync image dimensions immediately and on resize
  syncSliderImageDimensions();
  window.addEventListener('resize', syncSliderImageDimensions);

  let isDragging = false;

  function updateSlider(clientX) {
    const rect = wrapper.getBoundingClientRect();
    let x = clientX - rect.left;
    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;

    const percentage = (x / rect.width) * 100;
    beforeContainer.style.width = `${percentage}%`;
    handle.style.left = `${percentage}%`;
  }

  wrapper.addEventListener('mousedown', (e) => {
    isDragging = true;
    updateSlider(e.clientX);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateSlider(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Touch Support for Mobile
  wrapper.addEventListener('touchstart', (e) => {
    isDragging = true;
    updateSlider(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    updateSlider(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });
}

// Switch between Couple Varmala and Haldi comparison
function switchComparisonPreset(preset) {
  const rawImg = document.getElementById('rawImg');
  const gradedImg = document.getElementById('gradedImg');
  const btnCouple = document.getElementById('btnPresetCouple');
  const btnHaldi = document.getElementById('btnPresetHaldi');

  if (preset === 'couple') {
    rawImg.src = './assets/slider-couple-raw.jpg';
    gradedImg.src = './assets/slider-couple-graded.jpg';

    btnCouple.classList.add('bg-rose-600', 'text-white', 'border-rose-600', 'shadow-sm');
    btnCouple.classList.remove('bg-slate-100', 'text-slate-700', 'border-slate-300');

    btnHaldi.classList.remove('bg-rose-600', 'text-white', 'border-rose-600', 'shadow-sm');
    btnHaldi.classList.add('bg-slate-100', 'text-slate-700', 'border-slate-300');
  } else if (preset === 'haldi') {
    rawImg.src = './assets/slider-haldi-raw.jpg';
    gradedImg.src = './assets/slider-haldi-graded.jpg';

    btnHaldi.classList.add('bg-rose-600', 'text-white', 'border-rose-600', 'shadow-sm');
    btnHaldi.classList.remove('bg-slate-100', 'text-slate-700', 'border-slate-300');

    btnCouple.classList.remove('bg-rose-600', 'text-white', 'border-rose-600', 'shadow-sm');
    btnCouple.classList.add('bg-slate-100', 'text-slate-700', 'border-slate-300');
  }

  // Re-sync after image switch
  setTimeout(syncSliderImageDimensions, 100);
}

// ================= 4. LIVE SALES NOTIFICATION TOASTS =================
function initLiveSalesToasts() {
  const toast = document.getElementById('liveSalesToast');
  const title = document.getElementById('toastTitle');
  const desc = document.getElementById('toastDesc');
  if (!toast) return;

  const realPurchases = [
    { name: 'Rohit K. from Delhi', item: 'Downloaded Edius 11 Master Timeline' },
    { name: 'Vivaah Studio, Jaipur', item: 'Purchased 4-Screen LED Stage Visuals' },
    { name: 'Amitabh from Lucknow', item: 'Unlocked Premiere Pro Cinematic Teaser' },
    { name: 'CineCraft Studio, Chandigarh', item: 'Downloaded Royal Palace 3D Invitation' },
    { name: 'Vikas P. from Ahmedabad', item: 'Ordered FCPX Wedding Storyteller Suite' }
  ];

  let index = 0;
  function showNextToast() {
    const cur = realPurchases[index % realPurchases.length];
    title.textContent = cur.name;
    desc.textContent = cur.item;
    toast.classList.remove('-translate-x-full');

    setTimeout(() => {
      toast.classList.add('-translate-x-full');
    }, 5500);

    index++;
  }

  setTimeout(showNextToast, 4000);
  setInterval(showNextToast, 16000);
}

function hideToast() {
  const toast = document.getElementById('liveSalesToast');
  if (toast) toast.classList.add('-translate-x-full');
}

// ================= 5. RENDER PROJECT CARDS (BRIGHT DESIGN WITH REAL PHOTOS) =================
function renderProjects() {
  const container = document.getElementById('projectsGrid');
  if (!container) return;

  const filtered = projectsData.filter(item => {
    const matchesCategory = currentFilter === 'all' || item.category === currentFilter;
    const matchesSearch = !currentSearch || 
      item.title.toLowerCase().includes(currentSearch.toLowerCase()) || 
      item.description.toLowerCase().includes(currentSearch.toLowerCase()) ||
      item.badge.toLowerCase().includes(currentSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-16 bg-white rounded-3xl border border-slate-200">
        <i data-lucide="search-x" class="w-12 h-12 text-slate-400 mx-auto mb-3"></i>
        <h4 class="text-lg font-bold text-slate-800">No project templates found</h4>
        <p class="text-xs text-slate-500 mt-1">Try another keyword or category filter</p>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="white-card rounded-2xl overflow-hidden flex flex-col group">
      
      <!-- Card Image Thumbnail with Play Overlay -->
      <div class="relative aspect-video overflow-hidden bg-slate-900 cursor-pointer" onclick="openVideoModal('${item.videoUrl}', '${item.title.replace(/'/g, "\\'")}')">
        <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
        
        <!-- Software Pill Badge -->
        <div class="absolute top-3 left-3">
          <span class="text-[11px] font-bold px-2.5 py-1 rounded-full border shadow-sm ${item.badgeColor}">
            ${item.badge}
          </span>
        </div>

        <!-- Resolution Tag -->
        <div class="absolute top-3 right-3">
          <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-black/75 text-white border border-white/20">
            ${item.resolution}
          </span>
        </div>

        <!-- Hover Play Button Overlay -->
        <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div class="w-14 h-14 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition duration-300">
            <i data-lucide="play" class="w-6 h-6 fill-white ml-0.5"></i>
          </div>
        </div>
      </div>

      <!-- Card Body Content -->
      <div class="p-4 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 class="font-bold text-slate-900 text-base group-hover:text-rose-600 transition leading-snug">
            ${item.title}
          </h3>
          <p class="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
            ${item.description}
          </p>

          <div class="flex items-center gap-2 mt-3 text-[11px] text-slate-500 font-medium">
            <i data-lucide="music" class="w-3.5 h-3.5 text-amber-600"></i>
            <span>${item.audio}</span>
          </div>
        </div>

        <!-- Pricing & Action Buttons -->
        <div class="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
          <div>
            <div class="text-base sm:text-lg font-black text-rose-600">₹${item.price.toLocaleString('en-IN')}</div>
            <div class="text-[10px] sm:text-[11px] text-slate-400 line-through">₹${item.originalPrice.toLocaleString('en-IN')}</div>
          </div>

          <div class="flex items-center gap-1.5 sm:gap-2">
            <button onclick="openVideoModal('${item.videoUrl}', '${item.title.replace(/'/g, "\\'")}')" class="px-2.5 sm:px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition flex items-center gap-1 shrink-0" title="Watch Demo">
              <i data-lucide="play" class="w-3.5 h-3.5 fill-slate-800"></i>
              <span class="hidden sm:inline">Demo</span>
            </button>
            
            <button onclick="addToCart('${item.id}')" class="ruby-btn-gradient text-white font-bold px-3 sm:px-3.5 py-2 rounded-xl text-xs transition flex items-center gap-1 sm:gap-1.5 shadow-sm shrink-0">
              <i data-lucide="shopping-cart" class="w-3.5 h-3.5"></i>
              <span>Add to Cart</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  `).join('');

  if (window.lucide) {
    lucide.createIcons();
  }
}

// ================= 6. CATEGORY FILTER =================
function filterCategory(category) {
  currentFilter = category;
  
  document.querySelectorAll('.cat-pill').forEach(pill => {
    if (pill.getAttribute('data-cat') === category) {
      pill.classList.remove('bg-white', 'text-slate-700', 'border');
      pill.classList.add('bg-rose-600', 'text-white', 'shadow-md');
    } else {
      pill.classList.add('bg-white', 'text-slate-700', 'border');
      pill.classList.remove('bg-rose-600', 'text-white', 'shadow-md');
    }
  });

  renderProjects();
}

// ================= 7. STAGE THEME SWITCHER =================
function setStageTheme(theme) {
  const left = document.getElementById('screenLeftImg');
  const center = document.getElementById('screenCenterImg');
  const right = document.getElementById('screenRightImg');
  const base = document.getElementById('screenBaseImg');
  const title = document.getElementById('stageThemeTitle');

  document.querySelectorAll('.stage-theme-btn').forEach(btn => {
    btn.classList.remove('bg-amber-500', 'text-black', 'border-amber-500', 'bg-cyan-500', 'bg-purple-500', 'shadow-md');
    btn.classList.add('bg-slate-800', 'text-slate-300', 'border-slate-700');
  });

  if (theme === 'royal') {
    document.getElementById('btnThemeRoyal').classList.add('bg-amber-500', 'text-black', 'border-amber-500', 'shadow-md');
    document.getElementById('btnThemeRoyal').classList.remove('bg-slate-800', 'text-slate-300');
    left.src = './assets/led-stage-2.jpg';
    center.src = './assets/led-stage-1.jpg';
    right.src = './assets/led-stage-3.jpg';
    base.src = './assets/led-stage-4.jpg';
    title.textContent = 'THEME: 👑 Royal Varmala Palace (Synchronized 4K Master)';
  } else if (theme === 'neon') {
    document.getElementById('btnThemeNeon').classList.add('bg-cyan-500', 'text-black', 'border-cyan-500');
    document.getElementById('btnThemeNeon').classList.remove('bg-slate-800', 'text-slate-300');
    left.src = './assets/led-stage-3.jpg';
    center.src = './assets/led-stage-2.jpg';
    right.src = './assets/led-stage-1.jpg';
    base.src = './assets/led-stage-4.jpg';
    title.textContent = 'THEME: ⚡ Neon Sangeet Concert (Dynamic Laser Visuals)';
  } else if (theme === 'sufi') {
    document.getElementById('btnThemeSufi').classList.add('bg-purple-500', 'text-white', 'border-purple-500');
    document.getElementById('btnThemeSufi').classList.remove('bg-slate-800', 'text-slate-300');
    left.src = './assets/led-stage-1.jpg';
    center.src = './assets/led-stage-3.jpg';
    right.src = './assets/led-stage-2.jpg';
    base.src = './assets/led-stage-4.jpg';
    title.textContent = 'THEME: 🌙 Mystical Sufi Night (Warm Lanterns & Geometric Geometry)';
  }
}

// ================= 8. VIDEO MODAL =================
function openVideoModal(url, title) {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('videoIframe');
  const modalTitle = document.getElementById('videoModalTitle');
  currentModalItemTitle = title;

  modalTitle.innerHTML = `<i data-lucide="play-circle" class="w-4 h-4 text-rose-500"></i> <span>${title}</span>`;
  iframe.src = url;
  modal.classList.remove('hidden');
  if (window.lucide) lucide.createIcons();
}

function closeVideoModal() {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('videoIframe');
  iframe.src = '';
  modal.classList.add('hidden');
}

function orderCurrentModalItem() {
  const text = encodeURIComponent(`Hello Anss Studio, I previewed "${currentModalItemTitle}" on your website and I want to order this project pack.`);
  window.open(`https://wa.me/919540642600?text=${text}`, '_blank');
}

// ================= 9. CART MANAGEMENT =================
function addToCart(projectId) {
  const item = projectsData.find(p => p.id === projectId);
  if (!item) return;

  const existing = cart.find(c => c.id === projectId);
  if (!existing) {
    cart.push({ ...item, quantity: 1 });
  } else {
    existing.quantity += 1;
  }

  updateCartUI();
  openCart();
}

function removeFromCart(projectId) {
  cart = cart.filter(item => item.id !== projectId);
  updateCartUI();
}

function updateCartUI() {
  const badge = document.getElementById('cartCountBadge');
  const mobileBadge = document.getElementById('mobileCartCount');
  const container = document.getElementById('cartItemsContainer');
  const totalDisplay = document.getElementById('cartTotalPrice');

  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  if (badge) badge.textContent = totalCount;
  if (mobileBadge) mobileBadge.textContent = totalCount;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="text-center py-16 text-slate-400 text-sm">
        <i data-lucide="folder-x" class="w-12 h-12 text-slate-300 mx-auto mb-3"></i>
        Your cart is currently empty.
      </div>
    `;
    totalDisplay.textContent = '₹0';
    if (window.lucide) lucide.createIcons();
    return;
  }

  let totalAmount = 0;
  container.innerHTML = cart.map(item => {
    totalAmount += item.price * item.quantity;
    return `
      <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
        <img src="${item.image}" alt="${item.title}" class="w-14 h-14 rounded-lg object-cover shrink-0">
        <div class="flex-1 min-w-0">
          <h4 class="text-xs font-bold text-slate-900 truncate">${item.title}</h4>
          <span class="text-xs text-rose-600 font-extrabold">₹${item.price.toLocaleString('en-IN')}</span>
          <span class="text-[10px] text-slate-500 block">${item.badge}</span>
        </div>
        <button onclick="removeFromCart('${item.id}')" class="text-slate-400 hover:text-rose-600 p-1.5 transition">
          <i data-lucide="trash-2" class="w-4 h-4"></i>
        </button>
      </div>
    `;
  }).join('');

  totalDisplay.textContent = `₹${totalAmount.toLocaleString('en-IN')}`;
  if (window.lucide) lucide.createIcons();
}

function openCart() {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartBackdrop');
  const panel = document.getElementById('cartPanel');

  drawer.classList.remove('pointer-events-none');
  backdrop.classList.remove('opacity-0');
  panel.classList.remove('translate-x-full');
}

function closeCart() {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartBackdrop');
  const panel = document.getElementById('cartPanel');

  backdrop.classList.add('opacity-0');
  panel.classList.add('translate-x-full');
  setTimeout(() => {
    drawer.classList.add('pointer-events-none');
  }, 300);
}

function checkoutViaWhatsApp() {
  if (cart.length === 0) {
    alert('Your cart is empty! Please add some wedding projects first.');
    return;
  }

  let message = `*Hello Anss Studio, I want to purchase the following Project Packs from your website:*\n\n`;
  let total = 0;
  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.title} - ₹${item.price.toLocaleString('en-IN')}\n`;
    total += item.price * item.quantity;
  });
  message += `\n*Total Amount:* ₹${total.toLocaleString('en-IN')}\n\n*Please share UPI QR code and Google Drive Download link.*`;

  const waUrl = `https://wa.me/919540642600?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank');
}

// ================= 10. CONTACT FORM =================
function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('formName').value.trim();
  const phone = document.getElementById('formPhone').value.trim();
  const software = document.getElementById('formSoftware').value;
  const message = document.getElementById('formMessage').value.trim();

  const waText = `*New Studio Enquiry via Website:*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Software:* ${software}\n*Message:* ${message || 'Looking for wedding project packs'}`;
  window.open(`https://wa.me/919540642600?text=${encodeURIComponent(waText)}`, '_blank');
}

// ================= 11. EVENT LISTENERS =================
function setupEventListeners() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.trim();
      renderProjects();
    });
  }

  const mobileSearch = document.getElementById('mobileSearchInput');
  if (mobileSearch) {
    mobileSearch.addEventListener('input', (e) => {
      currentSearch = e.target.value.trim();
      renderProjects();
    });
  }

  const cartBtn = document.getElementById('openCartBtn');
  if (cartBtn) {
    cartBtn.addEventListener('click', openCart);
  }

  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Auto-close menu when link is tapped
    document.querySelectorAll('#mobileMenu a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

// ================= 12. SAVINGS CALCULATOR =================
function initSavingsCalculator() {
  const slider = document.getElementById('weddingSlider');
  const countDisplay = document.getElementById('weddingCountDisplay');
  const timeSaved = document.getElementById('calcTimeSaved');
  const extraWeddings = document.getElementById('calcExtraWeddings');
  const revenueIncrease = document.getElementById('calcRevenueIncrease');

  if (!slider || !countDisplay) return;

  function updateCalculator() {
    const count = parseInt(slider.value, 10);
    countDisplay.textContent = `${count} Weddings`;
    
    const hours = count * 15;
    if (timeSaved) timeSaved.textContent = `${hours} Hours`;
    
    const extra = Math.max(1, Math.floor(count * 0.35));
    if (extraWeddings) extraWeddings.textContent = `+${extra} Weddings`;
    
    const revenue = extra * 25000;
    if (revenueIncrease) revenueIncrease.textContent = `₹${revenue.toLocaleString('en-IN')}+`;
  }

  slider.addEventListener('input', updateCalculator);
  updateCalculator();
}

// ================= 13. FAQ ACCORDION =================
function toggleFaq(id) {
  const item = document.getElementById(id);
  const iconNum = id.replace('faq-', '');
  const icon = document.getElementById(`faq-icon-${iconNum}`);
  if (!item) return;

  const isHidden = item.classList.contains('hidden');
  
  // Close all other items
  document.querySelectorAll('#faqAccordion > div > div[id^="faq-"]').forEach(el => {
    el.classList.add('hidden');
  });
  document.querySelectorAll('#faqAccordion i[id^="faq-icon-"]').forEach(i => {
    i.classList.remove('rotate-180');
  });

  if (isHidden) {
    item.classList.remove('hidden');
    if (icon) icon.classList.add('rotate-180');
  }
}
