// Anss Studio - Modern Interactive Application Logic

// 1. PROJECT DATA CATALOG
const projectsData = [
  {
    id: 'edius-master-2026',
    title: 'Edius 11 Royal Wedding Master Project',
    category: 'edius',
    badge: 'Edius Pro',
    badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    image: './assets/edius-project.jpg',
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
    badgeColor: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    image: './assets/premiere-project.jpg',
    resolution: '4K UHD',
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
    badgeColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    image: './assets/after-effects-project.jpg',
    resolution: '3840x2160',
    audio: 'Orchestral Royalty Free',
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
    badgeColor: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    image: './assets/fcp-project.jpg',
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
    badgeColor: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
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
    badgeColor: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
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
    badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
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
    badgeColor: 'bg-amber-500/20 text-amber-400 border-amber-500/30 font-bold',
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
    badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    image: './assets/edius-project.jpg',
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
    badgeColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    image: './assets/after-effects-project.jpg',
    resolution: '1080x1920 Vertical',
    audio: 'Trending Audio Cut',
    price: 3999,
    originalPrice: 5500,
    description: '15 High-engagement vertical teaser templates for Instagram, YouTube Shorts, and WhatsApp Status. Instant drag-drop.',
    videoUrl: 'https://www.youtube.com/embed/9No-FiEInLA?autoplay=1'
  }
];

// 2. APP STATE
let currentFilter = 'all';
let currentSearch = '';
let cart = [];
let currentModalItemTitle = '';

// 3. INITIALIZE ON DOM LOAD
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  setupEventListeners();
  if (window.lucide) {
    lucide.createIcons();
  }
});

// 4. RENDER PROJECTS FUNCTION
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
      <div class="col-span-full text-center py-16">
        <i data-lucide="search-x" class="w-12 h-12 text-gray-600 mx-auto mb-3"></i>
        <h4 class="text-lg font-bold text-gray-300">No project templates found</h4>
        <p class="text-xs text-gray-500 mt-1">Try another keyword or category filter</p>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="glass-card rounded-2xl overflow-hidden border border-gray-800/80 hover:border-amber-500/50 transition-all duration-300 flex flex-col group">
      
      <!-- Card Image Thumbnail with Hover Play Button -->
      <div class="relative aspect-video overflow-hidden bg-black/60 cursor-pointer" onclick="openVideoModal('${item.videoUrl}', '${item.title.replace(/'/g, "\\'")}')">
        <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
        
        <!-- Software Pill Badge -->
        <div class="absolute top-3 left-3">
          <span class="text-[11px] font-bold px-2.5 py-1 rounded-full border backdrop-blur-md ${item.badgeColor}">
            ${item.badge}
          </span>
        </div>

        <!-- Resolution Tag -->
        <div class="absolute top-3 right-3">
          <span class="text-[10px] font-semibold px-2 py-0.5 rounded bg-black/70 text-gray-300 border border-white/10">
            ${item.resolution}
          </span>
        </div>

        <!-- Hover Overlay with Play Button -->
        <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div class="w-12 h-12 rounded-full bg-amber-500 text-black flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition">
            <i data-lucide="play" class="w-5 h-5 fill-black ml-0.5"></i>
          </div>
        </div>
      </div>

      <!-- Card Body Content -->
      <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 class="font-bold text-white text-base group-hover:text-amber-400 transition leading-snug">
            ${item.title}
          </h3>
          <p class="text-xs text-gray-400 mt-2 line-clamp-2 leading-relaxed">
            ${item.description}
          </p>

          <div class="flex items-center gap-2 mt-3 text-[11px] text-gray-400">
            <i data-lucide="music" class="w-3.5 h-3.5 text-amber-400"></i>
            <span>${item.audio}</span>
          </div>
        </div>

        <!-- Pricing & Action Buttons -->
        <div class="pt-4 border-t border-gray-800/80 flex items-center justify-between gap-2">
          <div>
            <div class="text-lg font-extrabold text-amber-400">₹${item.price.toLocaleString('en-IN')}</div>
            <div class="text-[10px] text-gray-500 line-through">₹${item.originalPrice.toLocaleString('en-IN')}</div>
          </div>

          <div class="flex items-center gap-2">
            <button onclick="openVideoModal('${item.videoUrl}', '${item.title.replace(/'/g, "\\'")}')" class="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold transition border border-white/10 flex items-center gap-1.5" title="Watch Demo">
              <i data-lucide="play" class="w-3.5 h-3.5"></i>
              <span class="hidden sm:inline">Demo</span>
            </button>
            
            <button onclick="addToCart('${item.id}')" class="gold-btn-gradient text-black font-bold px-3.5 py-2 rounded-xl text-xs transition flex items-center gap-1.5 shadow-md">
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

// 5. CATEGORY FILTER
function filterCategory(category) {
  currentFilter = category;
  
  // Update Active Pill Styles
  document.querySelectorAll('.cat-pill').forEach(pill => {
    if (pill.getAttribute('data-cat') === category) {
      pill.classList.remove('bg-[#111522]', 'text-gray-300');
      pill.classList.add('bg-amber-500', 'text-black', 'active');
    } else {
      pill.classList.add('bg-[#111522]', 'text-gray-300');
      pill.classList.remove('bg-amber-500', 'text-black', 'active');
    }
  });

  renderProjects();
}

// 6. STAGE LED VISUALIZER THEME SWITCHER
function setStageTheme(theme) {
  const left = document.getElementById('screenLeftImg');
  const center = document.getElementById('screenCenterImg');
  const right = document.getElementById('screenRightImg');
  const base = document.getElementById('screenBaseImg');
  const title = document.getElementById('stageThemeTitle');
  const glow = document.getElementById('stageGlow');

  // Reset Button Styles
  document.querySelectorAll('.stage-theme-btn').forEach(btn => {
    btn.classList.remove('bg-amber-500', 'text-black', 'border-amber-500', 'bg-cyan-500', 'bg-purple-500');
    btn.classList.add('bg-[#111522]', 'text-gray-300', 'border-gray-700');
  });

  if (theme === 'royal') {
    document.getElementById('btnThemeRoyal').classList.add('bg-amber-500', 'text-black', 'border-amber-500');
    document.getElementById('btnThemeRoyal').classList.remove('bg-[#111522]', 'text-gray-300');
    left.src = './assets/led-stage-2.jpg';
    center.src = './assets/led-stage-1.jpg';
    right.src = './assets/led-stage-3.jpg';
    base.src = './assets/led-stage-4.jpg';
    title.textContent = 'THEME: 👑 Royal Varmala Palace (Synchronized 4K Master)';
    glow.className = 'absolute inset-0 bg-gradient-to-t from-amber-500/15 via-transparent to-transparent pointer-events-none transition-all duration-700';
  } else if (theme === 'neon') {
    document.getElementById('btnThemeNeon').classList.add('bg-cyan-500', 'text-black', 'border-cyan-500');
    document.getElementById('btnThemeNeon').classList.remove('bg-[#111522]', 'text-gray-300');
    left.src = './assets/led-stage-3.jpg';
    center.src = './assets/led-stage-2.jpg';
    right.src = './assets/led-stage-1.jpg';
    base.src = './assets/led-stage-4.jpg';
    title.textContent = 'THEME: ⚡ Neon Sangeet Night (Dynamic Laser Visuals)';
    glow.className = 'absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-transparent to-transparent pointer-events-none transition-all duration-700';
  } else if (theme === 'sufi') {
    document.getElementById('btnThemeSufi').classList.add('bg-purple-500', 'text-white', 'border-purple-500');
    document.getElementById('btnThemeSufi').classList.remove('bg-[#111522]', 'text-gray-300');
    left.src = './assets/led-stage-1.jpg';
    center.src = './assets/led-stage-3.jpg';
    right.src = './assets/led-stage-2.jpg';
    base.src = './assets/led-stage-4.jpg';
    title.textContent = 'THEME: 🌙 Mystical Sufi Night (Warm Lanterns & Geometric Geometry)';
    glow.className = 'absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-transparent pointer-events-none transition-all duration-700';
  }
}

// 7. VIDEO PREVIEW MODAL
function openVideoModal(url, title) {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('videoIframe');
  const modalTitle = document.getElementById('videoModalTitle');
  currentModalItemTitle = title;

  modalTitle.innerHTML = `<i data-lucide="play-circle" class="w-4 h-4 text-amber-500"></i> <span>${title}</span>`;
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
  const text = encodeURIComponent(`Hello Anss Studio, I saw the preview of "${currentModalItemTitle}" on your website and I want to order this project pack.`);
  window.open(`https://wa.me/919540642600?text=${text}`, '_blank');
}

// 8. CART MANAGEMENT
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

function addBundleToCart(bundleId) {
  addToCart(bundleId);
}

function removeFromCart(projectId) {
  cart = cart.filter(item => item.id !== projectId);
  updateCartUI();
}

function updateCartUI() {
  const badge = document.getElementById('cartCountBadge');
  const container = document.getElementById('cartItemsContainer');
  const totalDisplay = document.getElementById('cartTotalPrice');

  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  badge.textContent = totalCount;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="text-center py-16 text-gray-400 text-sm">
        <i data-lucide="folder-x" class="w-12 h-12 text-gray-600 mx-auto mb-3"></i>
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
      <div class="p-3 rounded-xl bg-[#131726] border border-gray-800 flex items-center justify-between gap-3">
        <img src="${item.image}" alt="${item.title}" class="w-14 h-14 rounded-lg object-cover shrink-0">
        <div class="flex-1 min-w-0">
          <h4 class="text-xs font-bold text-white truncate">${item.title}</h4>
          <span class="text-[10px] text-amber-400 font-semibold">₹${item.price.toLocaleString('en-IN')}</span>
          <span class="text-[10px] text-gray-500 block">${item.badge}</span>
        </div>
        <button onclick="removeFromCart('${item.id}')" class="text-gray-400 hover:text-rose-400 p-1.5 transition">
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
  message += `\n*Total Amount:* ₹${total.toLocaleString('en-IN')}\n\n*Please send me UPI payment details and Google Drive Download link.*`;

  const waUrl = `https://wa.me/919540642600?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank');
}

// 9. CONTACT FORM SUBMISSION
function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('formName').value.trim();
  const phone = document.getElementById('formPhone').value.trim();
  const software = document.getElementById('formSoftware').value;
  const message = document.getElementById('formMessage').value.trim();

  const waText = `*New Studio Enquiry via Website:*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Software:* ${software}\n*Message:* ${message || 'Looking for wedding project packs'}`;
  window.open(`https://wa.me/919540642600?text=${encodeURIComponent(waText)}`, '_blank');
}

// 10. SETUP EVENT LISTENERS
function setupEventListeners() {
  // Search Input Listener
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

  // Cart Drawer open button
  const cartBtn = document.getElementById('openCartBtn');
  if (cartBtn) {
    cartBtn.addEventListener('click', openCart);
  }

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
}
