/* ============================================
   PRE-PAID TAXI SERVICE — Lucknow Airport
   Main Script
   ============================================ */

// ─── Vehicle Data ───
const vehicles = [
    {
        id: 1,
        name: "Tata Indigo eCS",
        category: "sedan",
        badge: "Sedan",
        seats: 4,
        ac: "AC",
        luggage: 2,
        fuel: "Diesel",
        priceKm: 10,
        priceDay: 1800,
        image: "images/indigo.jpg",
        description: "Affordable and reliable airport taxi. Spacious boot for luggage, smooth diesel engine, and comfortable AC cabin. The go-to choice for budget-friendly airport transfers in Lucknow."
    },
    {
        id: 2,
        name: "Toyota Etios",
        category: "sedan",
        badge: "Sedan",
        seats: 4,
        ac: "AC",
        luggage: 3,
        fuel: "Petrol / Diesel",
        priceKm: 12,
        priceDay: 2200,
        image: "images/etios.jpg",
        description: "Toyota's trusted workhorse. Excellent mileage, spacious interiors, and Toyota reliability. Ideal for solo travellers and couples heading to Lucknow city from the airport."
    },
    {
        id: 3,
        name: "Maruti Swift Tour",
        category: "sedan",
        badge: "Sedan",
        seats: 4,
        ac: "AC",
        luggage: 2,
        fuel: "Petrol / CNG",
        priceKm: 11,
        priceDay: 2000,
        image: "images/swift-tour.jpg",
        description: "India's favourite compact sedan. Fuel-efficient, clean, and well-maintained. Perfect for quick airport-to-city rides and short outstation trips from Lucknow."
    },
    {
        id: 4,
        name: "Maruti Ertiga",
        category: "suv",
        badge: "MPV",
        seats: 7,
        ac: "AC",
        luggage: 3,
        fuel: "Petrol / CNG",
        priceKm: 14,
        priceDay: 2800,
        image: "images/ertiga.jpg",
        description: "Best value 7-seater for families. Spacious second and third row seating with good boot space. Great for families arriving at Lucknow airport heading to Kanpur, Ayodhya, or within city."
    },
    {
        id: 5,
        name: "Toyota Innova Crysta",
        category: "suv",
        badge: "SUV",
        seats: 7,
        ac: "AC",
        luggage: 4,
        fuel: "Diesel",
        priceKm: 16,
        priceDay: 3500,
        image: "images/innova.jpg",
        description: "The king of highway rides. 7-seater with captain seats, powerful diesel engine, and massive boot. Perfect for families arriving at Lucknow airport heading to Kanpur, Ayodhya, or Varanasi."
    }
];

// ─── Route Distances (km) & Fixed Fares (sedan base) ───
const routeData = {
    "lucknow-airport-hazratganj": { km: 15, fare: 350, time: "25 min" },
    "lucknow-airport-gomtinagar": { km: 18, fare: 400, time: "30 min" },
    "lucknow-airport-alambagh": { km: 8, fare: 250, time: "15 min" },
    "lucknow-airport-charbagh": { km: 12, fare: 300, time: "20 min" },
    "lucknow-airport-aliganj": { km: 22, fare: 500, time: "35 min" },
    "lucknow-airport-indira-nagar": { km: 20, fare: 450, time: "30 min" },
    "lucknow-airport-chowk": { km: 16, fare: 400, time: "28 min" },
    "lucknow-airport-sgpgi": { km: 14, fare: 350, time: "25 min" },
    "lucknow-airport-amausi-metro": { km: 3, fare: 150, time: "8 min" },
    "lucknow-airport-lucknow-city": { km: 16, fare: 350, time: "25 min" },
    "lucknow-airport-kanpur": { km: 85, fare: 1800, time: "1.5 hr" },
    "lucknow-airport-agra": { km: 335, fare: 5800, time: "5 hr" },
    "lucknow-airport-varanasi": { km: 320, fare: 5500, time: "5.5 hr" },
    "lucknow-airport-allahabad": { km: 210, fare: 3800, time: "3.5 hr" },
    "lucknow-airport-ayodhya": { km: 135, fare: 2800, time: "2.5 hr" },
    "lucknow-airport-delhi": { km: 530, fare: 8500, time: "7 hr" },
    "lucknow-airport-sultanpur": { km: 140, fare: 2800, time: "2.5 hr" },
    "lucknow-airport-raebareli": { km: 85, fare: 1800, time: "1.5 hr" },
    "lucknow-airport-unnao": { km: 55, fare: 1200, time: "1 hr" },
    "lucknow-airport-sitapur": { km: 90, fare: 1900, time: "1.5 hr" },
    "lucknow-airport-hardoi": { km: 130, fare: 2600, time: "2.5 hr" },
    "lucknow-airport-gorakhpur": { km: 270, fare: 4800, time: "5 hr" },
    "lucknow-airport-barabanki": { km: 30, fare: 700, time: "45 min" },
    "lucknow-airport-lakhimpur": { km: 135, fare: 2800, time: "3 hr" },
    "lucknow-airport-gonda": { km: 195, fare: 3800, time: "3.5 hr" },
    "lucknow-airport-bahraich": { km: 185, fare: 3600, time: "3.5 hr" },
    "lucknow-airport-chitrakoot": { km: 280, fare: 5000, time: "5 hr" },
    "hazratganj-gomtinagar": { km: 8, fare: 200, time: "15 min" },
    "hazratganj-charbagh": { km: 5, fare: 150, time: "10 min" },
    "charbagh-lucknow-airport": { km: 12, fare: 300, time: "20 min" },
};

// ─── Local Routes ───
const localRoutes = [
    { name: "Hazratganj", icon: "🏙️", km: 15, time: "25 min", fare: 600, drop: "hazratganj", seoPage: "routes/lucknow-airport-to-hazratganj-taxi.html" },
    { name: "Gomti Nagar", icon: "🏢", km: 18, time: "30 min", fare: 600, drop: "gomtinagar", seoPage: "routes/lucknow-airport-to-gomtinagar-taxi.html" },
    { name: "Charbagh Railway Station", icon: "🚂", km: 12, time: "20 min", fare: 500, drop: "charbagh" },
    { name: "Alambagh", icon: "🏘️", km: 8, time: "15 min", fare: 450, drop: "alambagh" },
    { name: "Indira Nagar", icon: "🌳", km: 20, time: "30 min", fare: 700, drop: "indira-nagar" },
    { name: "Chowk", icon: "🕌", km: 16, time: "28 min", fare: 600, drop: "chowk" },
    { name: "IIM Road", icon: "🎓", km: 17, time: "28 min", fare: 650, drop: "iim-road" },
    { name: "Lulu Mall", icon: "🛍️", km: 14, time: "22 min", fare: 500, drop: "lulu-mall" },
    { name: "Palassio Mall", icon: "🏬", km: 15, time: "24 min", fare: 500, drop: "palassio-mall" },
    { name: "Amausi Metro", icon: "🚇", km: 3, time: "8 min", fare: 400, drop: "amausi-metro" },
];

// ─── Outstation Routes ───
const outstationRoutes = [
    // Featured (popular + starred for SEO pages)
    { name: "Kanpur", icon: "🏭", km: 85, time: "1.5 hr", fare: 2000, category: "popular", featured: true, seoPage: "routes/lucknow-airport-to-kanpur-taxi.html" },
    { name: "Ayodhya", icon: "🛕", km: 135, time: "2.5 hr", fare: 3250, category: "popular", featured: true, seoPage: "routes/lucknow-airport-to-ayodhya-taxi.html" },
    { name: "Prayagraj", icon: "🙏", km: 210, time: "3.5 hr", fare: 4500, category: "religious", featured: true, seoPage: "routes/lucknow-airport-to-prayagraj-cab.html" },
    { name: "Varanasi", icon: "🕉️", km: 320, time: "5.5 hr", fare: 5500, category: "religious", featured: true, seoPage: "routes/lucknow-airport-to-varanasi-taxi.html" },
    { name: "Gorakhpur", icon: "⛩️", km: 270, time: "5 hr", fare: 5000, category: "popular", featured: true, seoPage: "routes/lucknow-airport-to-gorakhpur-taxi.html" },
    { name: "Agra", icon: "🏛️", km: 335, time: "5 hr", fare: 6000, category: "popular", featured: true, seoPage: "routes/lucknow-airport-to-agra-taxi.html" },
    { name: "Hardoi", icon: "🏛️", km: 130, time: "2.5 hr", fare: 2500, category: "popular", featured: true, seoPage: "routes/lucknow-airport-to-hardoi-cab.html" },
    { name: "Sitapur", icon: "🏘️", km: 90, time: "1.5 hr", fare: 2000, category: "popular", featured: true, seoPage: "routes/lucknow-airport-to-sitapur-cab.html" },
    { name: "Lakhimpur Kheri", icon: "🌿", km: 135, time: "3 hr", fare: 3000, category: "popular", featured: true, seoPage: "routes/lucknow-airport-to-lakhimpur-taxi.html" },
    { name: "Barabanki", icon: "🕌", km: 30, time: "45 min", fare: 1000, category: "popular", featured: true, seoPage: "routes/lucknow-airport-to-barabanki-taxi.html" },
    { name: "Sultanpur", icon: "🏰", km: 140, time: "2.5 hr", fare: 3200, category: "popular", featured: true },
    { name: "Gonda", icon: "🌾", km: 195, time: "3.5 hr", fare: 2500, category: "popular", featured: true },
    { name: "Bahraich", icon: "🦁", km: 185, time: "3.5 hr", fare: 2850, category: "popular", featured: true },
    { name: "Rae Bareli", icon: "🏭", km: 85, time: "1.5 hr", fare: 2000, category: "nearby", featured: true },
    { name: "Chitrakoot", icon: "⛰️", km: 280, time: "5 hr", fare: 4500, category: "religious", featured: true },
    { name: "Guriphanta", icon: "🌲", km: 230, time: "4.5 hr", fare: 4500, category: "nearby", featured: true, seoPage: "routes/lucknow-airport-to-guriphanta-taxi.html" },
    { name: "Rupaidiha Border", icon: "🛂", km: 180, time: "3.5 hr", fare: 3500, category: "nearby", featured: true, seoPage: "routes/lucknow-airport-to-rupaidiha-border-taxi.html" },
    { name: "Dudhwa National Park", icon: "🐅", km: 220, time: "4.5 hr", fare: 4500, category: "tourist", featured: true, seoPage: "routes/lucknow-airport-to-dudhwa-national-park-taxi.html" },
    // Purvanchal
    { name: "Azamgarh", icon: "🏘️", km: 280, time: "5 hr", fare: 5500, category: "purvanchal" },
    { name: "Mau", icon: "🏘️", km: 340, time: "6 hr", fare: 6500, category: "purvanchal" },
    { name: "Ballia", icon: "🏘️", km: 380, time: "7 hr", fare: 7000, category: "purvanchal" },
    { name: "Deoria", icon: "🏘️", km: 310, time: "5.5 hr", fare: 6000, category: "purvanchal" },
    { name: "Jaunpur", icon: "🕌", km: 230, time: "4 hr", fare: 4000, category: "purvanchal" },
    { name: "Ghazipur", icon: "🏘️", km: 360, time: "6.5 hr", fare: 7000, category: "purvanchal" },
    { name: "Ambedkar Nagar", icon: "🏘️", km: 170, time: "3 hr", fare: 4000, category: "purvanchal" },
    { name: "Sant Kabir Nagar", icon: "🏘️", km: 250, time: "4.5 hr", fare: 5000, category: "purvanchal" },
    { name: "Siddharthnagar", icon: "🏘️", km: 280, time: "5 hr", fare: 6000, category: "purvanchal" },
    { name: "Kushinagar", icon: "☸️", km: 310, time: "5.5 hr", fare: 6500, category: "purvanchal" },
    { name: "Maharajganj", icon: "🏘️", km: 330, time: "6 hr", fare: 7000, category: "purvanchal" },
    { name: "Pratapgarh", icon: "🏘️", km: 170, time: "3 hr", fare: 3000, category: "purvanchal" },
    { name: "Mirzapur", icon: "🏘️", km: 330, time: "5.5 hr", fare: 6500, category: "purvanchal" },
    // Nearby Districts
    { name: "Unnao", icon: "🏘️", km: 55, time: "1 hr", fare: 1500, category: "nearby" },
    { name: "Shahjahanpur", icon: "🏘️", km: 185, time: "3.5 hr", fare: 3500, category: "nearby" },
    { name: "Fatehpur", icon: "🏘️", km: 170, time: "3 hr", fare: 3000, category: "nearby" },
    { name: "Balrampur", icon: "🏰", km: 200, time: "4 hr", fare: 3500, category: "nearby" },
    { name: "Shravasti", icon: "☸️", km: 175, time: "3.5 hr", fare: 3250, category: "nearby" },
    { name: "Pilibhit", icon: "🌲", km: 260, time: "4.5 hr", fare: 5000, category: "nearby" },
    { name: "Farrukhabad", icon: "🏘️", km: 200, time: "3.5 hr", fare: 4000, category: "nearby" },
    { name: "Kannauj", icon: "🌹", km: 140, time: "2.5 hr", fare: 2500, category: "nearby" },
    { name: "Etawah", icon: "🏘️", km: 220, time: "4 hr", fare: 4000, category: "nearby" },
    { name: "Bareilly", icon: "🏘️", km: 250, time: "4.5 hr", fare: 4500, category: "nearby" },
    { name: "Bans Bareilly", icon: "🏘️", km: 260, time: "5 hr", fare: 4500, category: "nearby" },
    { name: "Meerut", icon: "🏘️", km: 470, time: "7 hr", fare: 8500, category: "nearby" },
    { name: "Azaamgarh", icon: "🏘️", km: 260, time: "4.5 hr", fare: 5000, category: "nearby" },
    // Religious
    { name: "Mathura", icon: "🛕", km: 400, time: "6 hr", fare: 7000, category: "religious" },
    { name: "Vrindavan", icon: "🦚", km: 410, time: "6 hr", fare: 7000, category: "religious" },
    { name: "Vindhyachal", icon: "🙏", km: 290, time: "5 hr", fare: 5500, category: "religious" },
    { name: "Naimisharanya", icon: "📿", km: 95, time: "2 hr", fare: 2250, category: "religious" },
    // Tourist
    { name: "Nainital", icon: "🏔️", km: 440, time: "7 hr", fare: 7500, category: "tourist" },
    { name: "Mussoorie", icon: "⛰️", km: 540, time: "8.5 hr", fare: 10000, category: "tourist" },
    // Long Distance
    { name: "Delhi", icon: "🏙️", km: 530, time: "7 hr", fare: 11500, category: "longdistance" },
    { name: "Noida", icon: "🏢", km: 520, time: "7 hr", fare: 11000, category: "longdistance" },
    { name: "Bihar", icon: "🏘️", km: 500, time: "8 hr", fare: 8000, category: "longdistance" },
];

// ─── Location Name Map ───
const locationNames = {
    "lucknow-airport": "Lucknow Airport (Amausi)",
    "lucknow-city": "Lucknow City",
    "hazratganj": "Hazratganj", "gomtinagar": "Gomti Nagar",
    "alambagh": "Alambagh", "charbagh": "Charbagh Station",
    "aliganj": "Aliganj", "indira-nagar": "Indira Nagar",
    "chowk": "Chowk", "sgpgi": "SGPGI", "amausi-metro": "Amausi Metro",
    "kanpur": "Kanpur", "agra": "Agra", "varanasi": "Varanasi",
    "allahabad": "Prayagraj", "ayodhya": "Ayodhya", "delhi": "Delhi / NCR",
    "sultanpur": "Sultanpur", "raebareli": "Rae Bareli", "unnao": "Unnao",
    "sitapur": "Sitapur", "hardoi": "Hardoi", "gorakhpur": "Gorakhpur",
    "barabanki": "Barabanki", "lakhimpur": "Lakhimpur Kheri",
    "gonda": "Gonda", "bahraich": "Bahraich", "chitrakoot": "Chitrakoot",
};

// ─── WhatsApp Helper ───
const PHONE = "917985578937";
function waLink(route) {
    const text = encodeURIComponent(`Hi, I want to book a taxi from Lucknow Airport to ${route}. Please share details.`);
    return `https://wa.me/${PHONE}?text=${text}`;
}

// ─── Render Local Routes ───
function renderLocalRoutes() {
    const grid = document.getElementById("localRoutesGrid");
    if (!grid) return;
    grid.innerHTML = localRoutes.map(r => `
        <div class="local-route-card">
            <div class="local-route-icon">${r.icon}</div>
            <div class="local-route-info">
                <h4>Airport → ${r.name}</h4>
                <span class="local-route-dist">~${r.km} km • ${r.time}</span>
            </div>
            <div class="local-route-fare">₹${r.fare}</div>
            <a href="${waLink(r.name)}" target="_blank" class="local-book-btn">Book Now</a>
        </div>
    `).join("");
}

// ─── Render Outstation Routes ───
let outstationFilter = "all";
let showAllSecondary = false;

function renderOutstationRoutes() {
    const featuredGrid = document.getElementById("featuredRoutesGrid");
    const secondaryGrid = document.getElementById("secondaryRoutesGrid");
    if (!featuredGrid) return;

    const featured = outstationRoutes.filter(r => r.featured);
    const secondary = outstationRoutes.filter(r => !r.featured);

    // Featured cards
    const filteredFeatured = outstationFilter === "all" ? featured :
        featured.filter(r => r.category === outstationFilter);
    featuredGrid.innerHTML = filteredFeatured.map(r => `
        <div class="featured-route-card">
            <div class="featured-route-header">
                <span class="featured-route-icon">${r.icon}</span>
                <div class="featured-route-meta">
                    <span>~${r.km} km</span>
                    <span>${r.time}</span>
                </div>
            </div>
            <h4 class="featured-route-name">Airport → ${r.name}</h4>
            <div class="featured-route-fare">
                <span class="fare-label">Sedan from</span>
                <span class="fare-amount">₹${r.fare.toLocaleString("en-IN")}</span>
            </div>
            <div class="featured-route-actions">
                <a href="${waLink(r.name)}" target="_blank" class="featured-book-btn">📱 Book Taxi</a>
                ${r.seoPage ? `<a href="${r.seoPage}" class="featured-info-btn">ℹ️ Details</a>` : ''}
            </div>
        </div>
    `).join("");

    // Secondary cards
    if (!secondaryGrid) return;
    const filteredSecondary = outstationFilter === "all" ? secondary :
        secondary.filter(r => r.category === outstationFilter);
    const visibleSecondary = showAllSecondary ? filteredSecondary : filteredSecondary.slice(0, 8);
    secondaryGrid.innerHTML = visibleSecondary.map(r => `
        <div class="secondary-route-card">
            <span class="secondary-route-icon">${r.icon}</span>
            <div class="secondary-route-info">
                <h5>${r.name}</h5>
                <span class="secondary-route-dist">${r.time} • ₹${r.fare.toLocaleString("en-IN")}</span>
            </div>
            <a href="${waLink(r.name)}" target="_blank" class="secondary-book-btn">Book</a>
        </div>
    `).join("");

    // View more button
    const viewMoreBtn = document.getElementById("viewMoreRoutes");
    if (viewMoreBtn) {
        viewMoreBtn.style.display = filteredSecondary.length > 8 ? "inline-flex" : "none";
        viewMoreBtn.textContent = showAllSecondary ?
            "Show Less ↑" : `View ${filteredSecondary.length - 8} More Routes ↓`;
    }
}

function setOutstationFilter(cat) {
    outstationFilter = cat;
    showAllSecondary = false;
    document.querySelectorAll(".outstation-filter-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.category === cat);
    });
    renderOutstationRoutes();
}

function toggleViewMore() {
    showAllSecondary = !showAllSecondary;
    renderOutstationRoutes();
}

// ─── Master Location List (for search) ───
const AIRPORT_FEE = 250; // Hidden airport pickup surcharge
const PER_KM_RATE = 12;

const allLocations = [
    // Airport
    { id: "lucknow-airport", name: "Lucknow Airport (Amausi)", icon: "✈️", group: "Airport", km: 0, fare: 0 },
    // Local
    ...localRoutes.map(r => ({ id: r.drop, name: r.name, icon: r.icon, group: "Lucknow City", km: r.km, fare: r.fare })),
    // Outstation
    ...outstationRoutes.map(r => {
        const id = r.name.toLowerCase().replace(/[\s()]+/g, '-').replace(/-+/g, '-');
        return { id, name: r.name, icon: r.icon, group: r.category === 'purvanchal' ? 'Purvanchal' : r.category === 'religious' ? 'Religious' : r.category === 'tourist' ? 'Tourist' : r.category === 'longdistance' ? 'Long Distance' : 'Popular', km: r.km, fare: r.fare };
    }),
];

// Build fare lookup from all locations (km from airport)
const fareLookup = {};
allLocations.forEach(loc => {
    if (loc.id !== 'lucknow-airport') {
        fareLookup[loc.id] = { km: loc.km, fare: loc.fare, name: loc.name };
    }
});

// ─── State ───
let currentFilter = "all";
let selectedPickup = "lucknow-airport";
let selectedDrop = "";
let currentRouteData = null;

// ─── DOM Elements ───
const vehicleGrid = document.getElementById("vehicleGrid");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const searchBtn = document.getElementById("searchBtn");
const routeInfoBar = document.getElementById("routeInfoBar");
const routeInfoText = document.getElementById("routeInfoText");
const routeClearBtn = document.getElementById("routeClearBtn");
const navbar = document.getElementById("navbar");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const pickupInput = document.getElementById("pickupInput");
const pickupValue = document.getElementById("pickupValue");
const pickupDropdown = document.getElementById("pickupDropdown");
const dropInput = document.getElementById("dropInput");
const dropValue = document.getElementById("dropValue");
const dropDropdown = document.getElementById("dropDropdown");
const travelDateEl = document.getElementById("travelDate");

// ─── Search Dropdown Logic ───
function renderDropdown(dropdown, query, onSelect, excludeId) {
    const q = query.toLowerCase().trim();
    let html = '';
    const groups = {};

    allLocations.forEach(loc => {
        if (loc.id === excludeId) return;
        if (q && !loc.name.toLowerCase().includes(q)) return;
        if (!groups[loc.group]) groups[loc.group] = [];
        groups[loc.group].push(loc);
    });

    for (const [groupName, items] of Object.entries(groups)) {
        html += `<div class="search-dropdown-group">${groupName}</div>`;
        items.forEach(loc => {
            const info = loc.km > 0 ? `${loc.km} km` : '';
            html += `<div class="search-dropdown-item" data-id="${loc.id}" data-name="${loc.name}">
                <span class="sdi-icon">${loc.icon}</span>
                <span>${loc.name}</span>
                ${info ? `<span class="sdi-info">${info}</span>` : ''}
            </div>`;
        });
    }

    // Custom location option
    if (q && q.length > 1) {
        const customName = query.trim().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
        html += `<div class="search-dropdown-custom" data-id="custom-${customName}" data-name="${customName}">📌 Use "${customName}" as custom location</div>`;
    }

    dropdown.innerHTML = html;
    dropdown.classList.add('open');

    // Attach click handlers
    dropdown.querySelectorAll('.search-dropdown-item, .search-dropdown-custom').forEach(item => {
        item.addEventListener('click', () => {
            onSelect(item.dataset.id, item.dataset.name);
            dropdown.classList.remove('open');
        });
    });
}

function initSearchInputs() {
    // Pickup
    pickupInput.addEventListener('focus', () => {
        renderDropdown(pickupDropdown, pickupInput.value, (id, name) => {
            pickupInput.value = name;
            pickupValue.value = id;
            selectedPickup = id;
        }, dropValue.value);
    });
    pickupInput.addEventListener('input', () => {
        renderDropdown(pickupDropdown, pickupInput.value, (id, name) => {
            pickupInput.value = name;
            pickupValue.value = id;
            selectedPickup = id;
        }, dropValue.value);
    });

    // Drop
    dropInput.addEventListener('focus', () => {
        renderDropdown(dropDropdown, dropInput.value, (id, name) => {
            dropInput.value = name;
            dropValue.value = id;
            selectedDrop = id;
        }, pickupValue.value);
    });
    dropInput.addEventListener('input', () => {
        renderDropdown(dropDropdown, dropInput.value, (id, name) => {
            dropInput.value = name;
            dropValue.value = id;
            selectedDrop = id;
        }, pickupValue.value);
    });

    // Close dropdowns on click outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-field')) {
            pickupDropdown.classList.remove('open');
            dropDropdown.classList.remove('open');
        }
    });
}

// ─── Initialize ───
document.addEventListener("DOMContentLoaded", () => {
    const today = new Date().toISOString().split("T")[0];
    travelDateEl.setAttribute("min", today);
    travelDateEl.value = today;

    renderVehicles();
    renderLocalRoutes();
    renderOutstationRoutes();
    initScrollReveal();
    initParticles();
    initEventListeners();
    initSearchInputs();
});

// ─── Render Vehicle Cards ───
function renderVehicles(filter = "all") {
    const filtered = filter === "all" ? vehicles : vehicles.filter(v => v.category === filter);

    vehicleGrid.innerHTML = filtered.map((v, i) => `
        <div class="vehicle-card" data-id="${v.id}" style="animation-delay: ${i * 0.08}s">
            <div class="card-image">
                <img src="${v.image}" alt="${v.name}" loading="lazy">
                <span class="card-badge">${v.badge}</span>
            </div>
            <div class="card-body">
                <h3 class="card-name">${v.name}</h3>
                <div class="card-specs">
                    <span class="spec-item"><span class="spec-icon">👥</span> ${v.seats} Seats</span>
                    <span class="spec-item"><span class="spec-icon">❄️</span> ${v.ac}</span>
                    <span class="spec-item"><span class="spec-icon">🧳</span> ${v.luggage} Bags</span>
                    <span class="spec-item"><span class="spec-icon">⛽</span> ${v.fuel}</span>
                </div>
                <div class="card-footer">
                    <a href="tel:+917985578937" class="card-detail-btn">📞 Book Now</a>
                    <button class="card-detail-btn" onclick="openModal(${v.id})">
                        View Details →
                    </button>
                </div>
            </div>
        </div>
    `).join("");
}

// ─── Open Modal ───
function openModal(vehicleId) {
    const v = vehicles.find(x => x.id === vehicleId);
    if (!v) return;

    document.getElementById("modalImg").src = v.image;
    document.getElementById("modalImg").alt = v.name;
    document.getElementById("modalBadge").textContent = v.badge;
    document.getElementById("modalName").textContent = v.name;
    document.getElementById("modalDescription").textContent = v.description;

    // Specs
    document.getElementById("modalSpecs").innerHTML = `
        <div class="modal-spec-item"><span class="spec-icon">👥</span> ${v.seats} Seats</div>
        <div class="modal-spec-item"><span class="spec-icon">❄️</span> ${v.ac}</div>
        <div class="modal-spec-item"><span class="spec-icon">🧳</span> ${v.luggage} Bags</div>
        <div class="modal-spec-item"><span class="spec-icon">⛽</span> ${v.fuel}</div>
    `;

    // Route estimate
    const routeEstimate = document.getElementById("routeEstimate");
    if (currentRouteData) {
        const multiplier = getVehicleMultiplier(v.category);
        const tripCost = Math.round(currentRouteData.fare * multiplier);
        document.getElementById("routeEstimateFare").textContent =
            `₹${tripCost.toLocaleString("en-IN")}`;
        routeEstimate.style.display = "block";
    } else {
        routeEstimate.style.display = "none";
    }

    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function getVehicleMultiplier(category) {
    switch (category) {
        case "sedan": return 1;
        case "suv": return 1.35;
        default: return 1;
    }
}

// ─── Close Modal ───
function closeModal() {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
}

// ─── Filter Vehicles ───
function setFilter(filter) {
    currentFilter = filter;
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.filter === filter);
    });
    renderVehicles(filter);
}

// ─── Search / Route Selection ───
function handleSearch() {
    selectedPickup = pickupValue.value;
    selectedDrop = dropValue.value;
    const pickupName = pickupInput.value.trim();
    const dropName = dropInput.value.trim();

    if (!pickupName || !dropName) {
        shakeElement(searchBtn);
        return;
    }
    if (selectedPickup === selectedDrop && selectedPickup) {
        shakeElement(searchBtn);
        return;
    }

    // Determine fare
    const isAirportPickup = selectedPickup === 'lucknow-airport';
    const isAirportDrop = selectedDrop === 'lucknow-airport';

    let routeKm = 0;
    let routeFare = 0;
    let routeTime = '';
    let isKnown = false;

    // Check if drop is a known location (from airport)
    if (isAirportPickup && fareLookup[selectedDrop]) {
        const loc = fareLookup[selectedDrop];
        routeKm = loc.km;
        routeFare = loc.fare + AIRPORT_FEE; // Hidden airport fee
        routeTime = routeKm < 25 ? `${Math.round(routeKm * 1.5)} min` : `${(routeKm / 55).toFixed(1)} hr`;
        isKnown = true;
    }
    // Check if pickup is known location going to airport
    else if (isAirportDrop && fareLookup[selectedPickup]) {
        const loc = fareLookup[selectedPickup];
        routeKm = loc.km;
        routeFare = loc.fare; // No airport fee for drop at airport
        routeTime = routeKm < 25 ? `${Math.round(routeKm * 1.5)} min` : `${(routeKm / 55).toFixed(1)} hr`;
        isKnown = true;
    }
    // Both known local locations
    else if (fareLookup[selectedPickup] && fareLookup[selectedDrop]) {
        const pkm = fareLookup[selectedPickup].km;
        const dkm = fareLookup[selectedDrop].km;
        routeKm = Math.abs(pkm - dkm) + 5; // approx
        routeFare = routeKm * PER_KM_RATE;
        routeTime = `${Math.round(routeKm * 1.5)} min`;
        isKnown = true;
    }
    // Custom / unknown location — estimate at ₹12/km
    else {
        // If one is airport and the other is custom
        if (isAirportPickup || isAirportDrop) {
            routeKm = 0; // unknown
            routeFare = 0;
            routeTime = '';
        }
    }

    if (isKnown && routeFare > 0) {
        // Show fare WITHOUT revealing airport fee (it's baked in)
        const displayFare = isAirportPickup ? (routeFare - AIRPORT_FEE) : routeFare;
        currentRouteData = { km: routeKm, fare: routeFare, time: routeTime };
        routeInfoText.textContent = `✈️ ${pickupName} → ${dropName} • ~${routeKm} km • ${routeTime} • Sedan from ₹${routeFare.toLocaleString("en-IN")}`;
    } else {
        currentRouteData = null;
        routeInfoText.textContent = `✈️ ${pickupName} → ${dropName} • Call 79855 78937 for exact fare`;
    }

    routeInfoBar.style.display = "block";
    document.getElementById("fleet").scrollIntoView({ behavior: "smooth" });
}

function clearRoute() {
    selectedPickup = "";
    selectedDrop = "";
    currentRouteData = null;
    pickupEl.value = "lucknow-airport";
    dropEl.value = "";
    routeInfoBar.style.display = "none";
}

// ─── Route card click handler ───
function handleRouteCardClick(pickup, drop) {
    pickupEl.value = pickup;
    dropEl.value = drop;
    handleSearch();
}

// ─── Scroll Reveal (Intersection Observer) ───
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

// ─── Floating Particles ───
function initParticles() {
    const container = document.getElementById("heroParticles");
    if (!container) return;
    for (let i = 0; i < 25; i++) {
        const dot = document.createElement("div");
        const size = 1.5 + Math.random() * 2.5;
        dot.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(34, 211, 238, ${0.08 + Math.random() * 0.15});
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: floatParticle ${6 + Math.random() * 10}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        container.appendChild(dot);
    }

    const style = document.createElement("style");
    style.textContent = `
        @keyframes floatParticle {
            0% { transform: translateY(0) translateX(0); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-100vh) translateX(${Math.random() > 0.5 ? '' : '-'}30px); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// ─── Event Listeners ───
function initEventListeners() {
    // Search
    searchBtn.addEventListener("click", handleSearch);

    // Clear route
    routeClearBtn.addEventListener("click", clearRoute);

    // Modal close
    modalClose.addEventListener("click", closeModal);
    modalOverlay.addEventListener("click", (e) => {
        if (e.target === modalOverlay) closeModal();
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal();
    });

    // Filter buttons
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => setFilter(btn.dataset.filter));
    });

    // Navbar scroll effect
    window.addEventListener("scroll", () => {
        navbar.classList.toggle("scrolled", window.scrollY > 50);
    });

    // Mobile menu
    mobileMenuBtn.addEventListener("click", () => {
        mobileMenuBtn.classList.toggle("active");
        mobileMenu.classList.toggle("open");
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenuBtn.classList.remove("active");
            mobileMenu.classList.remove("open");
        });
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", (e) => {
            const target = document.querySelector(link.getAttribute("href"));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Route card clicks
    document.querySelectorAll(".route-card").forEach(card => {
        card.addEventListener("click", () => {
            const pickup = card.dataset.pickup;
            const drop = card.dataset.drop;
            if (pickup && drop) {
                handleRouteCardClick(pickup, drop);
            }
        });
    });
}

// ─── Utilities ───
function shakeElement(el) {
    el.style.animation = "none";
    el.offsetHeight;
    el.style.animation = "shake 0.4s ease";
    setTimeout(() => el.style.animation = "", 400);

    if (!document.getElementById("shakeStyle")) {
        const style = document.createElement("style");
        style.id = "shakeStyle";
        style.textContent = `
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-6px); }
                50% { transform: translateX(6px); }
                75% { transform: translateX(-4px); }
            }
        `;
        document.head.appendChild(style);
    }
}
