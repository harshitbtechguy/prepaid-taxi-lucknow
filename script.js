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
    "lucknow-airport-kanpur": { km: 85, fare: 2200, time: "1.5 hr" },
    "lucknow-airport-agra": { km: 335, fare: 6800, time: "5 hr" },
    "lucknow-airport-varanasi": { km: 320, fare: 6000, time: "5.5 hr" },
    "lucknow-airport-allahabad": { km: 210, fare: 4500, time: "3.5 hr" },
    "lucknow-airport-ayodhya": { km: 135, fare: 3250, time: "2.5 hr" },
    "lucknow-airport-delhi": { km: 530, fare: 11500, time: "7 hr" },
    "lucknow-airport-sultanpur": { km: 140, fare: 3500, time: "2.5 hr" },
    "lucknow-airport-raebareli": { km: 85, fare: 2000, time: "1.5 hr" },
    "lucknow-airport-unnao": { km: 55, fare: 1800, time: "1 hr" },
    "lucknow-airport-sitapur": { km: 90, fare: 2200, time: "1.5 hr" },
    "lucknow-airport-hardoi": { km: 130, fare: 2500, time: "2.5 hr" },
    "lucknow-airport-gorakhpur": { km: 270, fare: 5500, time: "5 hr" },
    "lucknow-airport-barabanki": { km: 30, fare: 1200, time: "45 min" },
    "lucknow-airport-lakhimpur": { km: 135, fare: 3300, time: "3 hr" },
    "lucknow-airport-gonda": { km: 195, fare: 3000, time: "3.5 hr" },
    "lucknow-airport-bahraich": { km: 185, fare: 3000, time: "3.5 hr" },
    "lucknow-airport-chitrakoot": { km: 280, fare: 4500, time: "5 hr" },
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
    { name: "Kanpur", icon: "🏭", km: 85, time: "1.5 hr", fare: 2200, category: "popular", featured: true, seoPage: "routes/lucknow-airport-to-kanpur-taxi.html" },
    { name: "Ayodhya", icon: "🛕", km: 135, time: "2.5 hr", fare: 3250, category: "popular", featured: true, seoPage: "routes/lucknow-airport-to-ayodhya-taxi.html" },
    { name: "Prayagraj", icon: "🙏", km: 210, time: "3.5 hr", fare: 4500, category: "religious", featured: true, seoPage: "routes/lucknow-airport-to-prayagraj-taxi.html" },
    { name: "Varanasi", icon: "🕉️", km: 320, time: "5.5 hr", fare: 6000, category: "religious", featured: true, seoPage: "routes/lucknow-airport-to-varanasi-taxi.html" },
    { name: "Gorakhpur", icon: "⛩️", km: 270, time: "5 hr", fare: 5500, category: "popular", featured: true, seoPage: "routes/lucknow-airport-to-gorakhpur-taxi.html" },
    { name: "Agra", icon: "🏛️", km: 335, time: "5 hr", fare: 6800, category: "popular", featured: true, seoPage: "routes/lucknow-airport-to-agra-taxi.html" },
    { name: "Hardoi", icon: "🏛️", km: 130, time: "2.5 hr", fare: 2500, category: "popular", featured: true, seoPage: "routes/lucknow-airport-to-hardoi-cab.html" },
    { name: "Sitapur", icon: "🏘️", km: 90, time: "1.5 hr", fare: 2200, category: "popular", featured: true, seoPage: "routes/lucknow-airport-to-sitapur-taxi.html" },
    { name: "Lakhimpur Kheri", icon: "🌿", km: 135, time: "3 hr", fare: 3300, category: "popular", featured: true, seoPage: "routes/lucknow-airport-to-lakhimpur-taxi.html" },
    { name: "Barabanki", icon: "🕌", km: 30, time: "45 min", fare: 1200, category: "popular", featured: true, seoPage: "routes/lucknow-airport-to-barabanki-taxi.html" },
    { name: "Sultanpur", icon: "🏰", km: 140, time: "2.5 hr", fare: 3500, category: "popular", featured: true },
    { name: "Gonda", icon: "🌾", km: 120, time: "2.5 hr", fare: 3000, category: "popular", featured: true, seoPage: "routes/lucknow-airport-to-gonda-taxi.html" },
    { name: "Bahraich", icon: "🦁", km: 185, time: "3.5 hr", fare: 3000, category: "popular", featured: true, seoPage: "routes/lucknow-airport-to-bahraich-taxi.html" },
    { name: "Rae Bareli", icon: "🏭", km: 85, time: "1.5 hr", fare: 2000, category: "nearby", featured: true },
    { name: "Chitrakoot", icon: "⛰️", km: 280, time: "5 hr", fare: 4500, category: "religious", featured: true },
    { name: "Guriphanta", icon: "🌲", km: 230, time: "4.5 hr", fare: 5500, category: "nearby", featured: true, seoPage: "routes/lucknow-airport-to-guriphanta-taxi.html" },
    { name: "Nepal Border (Rupaidiha)", icon: "🛂", km: 180, time: "3.5 hr", fare: 4200, category: "nearby", featured: true, seoPage: "routes/lucknow-airport-to-nepal-border-taxi.html" },
    { name: "Dudhwa National Park", icon: "🐅", km: 220, time: "4.5 hr", fare: 5000, category: "tourist", featured: true, seoPage: "routes/lucknow-airport-to-dudhwa-national-park-taxi.html" },
    // Purvanchal
    { name: "Azamgarh", icon: "🏘️", km: 280, time: "5 hr", fare: 6500, category: "purvanchal" },
    { name: "Mau", icon: "🏘️", km: 340, time: "6 hr", fare: 6900, category: "purvanchal" },
    { name: "Ballia", icon: "🏘️", km: 380, time: "7 hr", fare: 7500, category: "purvanchal" },
    { name: "Deoria", icon: "🏘️", km: 310, time: "5.5 hr", fare: 7500, category: "purvanchal" },
    { name: "Jaunpur", icon: "🕌", km: 230, time: "4 hr", fare: 4800, category: "purvanchal" },
    { name: "Ghazipur", icon: "🏘️", km: 360, time: "6.5 hr", fare: 6800, category: "purvanchal" },
    { name: "Ambedkar Nagar", icon: "🏘️", km: 170, time: "3 hr", fare: 5000, category: "purvanchal" },
    { name: "Sant Kabir Nagar", icon: "🏘️", km: 250, time: "4.5 hr", fare: 5500, category: "purvanchal" },
    { name: "Siddharthnagar", icon: "🏘️", km: 280, time: "5 hr", fare: 6000, category: "purvanchal" },
    { name: "Kushinagar", icon: "☸️", km: 310, time: "5.5 hr", fare: 7500, category: "purvanchal" },
    { name: "Maharajganj", icon: "🏘️", km: 330, time: "6 hr", fare: 7200, category: "purvanchal" },
    { name: "Pratapgarh", icon: "🏘️", km: 170, time: "3 hr", fare: 4000, category: "purvanchal" },
    { name: "Mirzapur", icon: "🏘️", km: 330, time: "5.5 hr", fare: 6000, category: "purvanchal" },
    { name: "Gopalganj", icon: "🏘️", km: 340, time: "6 hr", fare: 9500, category: "purvanchal" },
    { name: "Siwan", icon: "🏘️", km: 360, time: "6.5 hr", fare: 8500, category: "purvanchal" },
    // Nearby Districts
    { name: "Unnao", icon: "🏘️", km: 55, time: "1 hr", fare: 1800, category: "nearby" },
    { name: "Shahjahanpur", icon: "🏘️", km: 185, time: "3.5 hr", fare: 4500, category: "nearby" },
    { name: "Fatehpur", icon: "🏘️", km: 170, time: "3 hr", fare: 3500, category: "nearby" },
    { name: "Balrampur", icon: "🏰", km: 200, time: "4 hr", fare: 4500, category: "nearby" },
    { name: "Shravasti", icon: "☸️", km: 175, time: "3.5 hr", fare: 4000, category: "nearby", featured: true, seoPage: "routes/lucknow-airport-to-shravasti-taxi.html" },
    { name: "Pilibhit", icon: "🌲", km: 260, time: "4.5 hr", fare: 6000, category: "nearby" },
    { name: "Farrukhabad", icon: "🏘️", km: 200, time: "3.5 hr", fare: 4500, category: "nearby" },
    { name: "Kannauj", icon: "🌹", km: 140, time: "2.5 hr", fare: 3200, category: "nearby" },
    { name: "Etawah", icon: "🏘️", km: 220, time: "4 hr", fare: 5000, category: "nearby" },
    { name: "Bareilly", icon: "🏘️", km: 250, time: "4.5 hr", fare: 5000, category: "nearby" },
    { name: "Bans Bareilly", icon: "🏘️", km: 260, time: "5 hr", fare: 5500, category: "nearby" },
    { name: "Meerut", icon: "🏘️", km: 470, time: "7 hr", fare: 9000, category: "nearby" },
    { name: "Amethi", icon: "🏘️", km: 130, time: "3 hr", fare: 3000, category: "nearby" },
    { name: "Tanakpur", icon: "🌲", km: 320, time: "6 hr", fare: 7000, category: "nearby" },
    { name: "Tulsipur", icon: "🏘️", km: 220, time: "4.5 hr", fare: 4000, category: "nearby" },
    { name: "Unchahar", icon: "🏘️", km: 110, time: "2.5 hr", fare: 2500, category: "nearby" },
    { name: "Safipur", icon: "🏘️", km: 70, time: "1.5 hr", fare: 2000, category: "nearby" },
    { name: "Bangarmau", icon: "🏘️", km: 80, time: "2 hr", fare: 2000, category: "nearby" },
    { name: "Madhavganj", icon: "🏘️", km: 90, time: "2 hr", fare: 2000, category: "nearby" },
    { name: "Bilgram", icon: "🏘️", km: 110, time: "2.5 hr", fare: 2400, category: "nearby" },
    { name: "Makanpur", icon: "🏘️", km: 100, time: "2.5 hr", fare: 3200, category: "nearby" },
    { name: "Maurawan", icon: "🏘️", km: 60, time: "1.5 hr", fare: 2000, category: "nearby" },
    { name: "Hamirpur", icon: "🏘️", km: 150, time: "3 hr", fare: 3500, category: "nearby" },
    { name: "Banda", icon: "🏘️", km: 200, time: "4 hr", fare: 4000, category: "nearby" },
    { name: "Bindki", icon: "🏘️", km: 120, time: "2.5 hr", fare: 3000, category: "nearby" },
    { name: "Rudauli", icon: "🏘️", km: 100, time: "2 hr", fare: 2200, category: "nearby" },
    { name: "Kursi", icon: "🏘️", km: 35, time: "1 hr", fare: 2000, category: "nearby" },
    { name: "Barhni Border", icon: "🛂", km: 240, time: "5 hr", fare: 4500, category: "nearby" },
    { name: "Fatehgarh", icon: "🏘️", km: 190, time: "4 hr", fare: 4500, category: "nearby" },
    { name: "Sonauli Border", icon: "🛂", km: 320, time: "6 hr", fare: 7000, category: "nearby" },
    // Religious
    { name: "Mathura", icon: "🛕", km: 400, time: "6 hr", fare: 8500, category: "religious" },
    { name: "Vrindavan", icon: "🦚", km: 410, time: "6 hr", fare: 8500, category: "religious" },
    { name: "Vindhyachal", icon: "🙏", km: 290, time: "5 hr", fare: 6000, category: "religious" },
    { name: "Naimisharanya", icon: "📿", km: 95, time: "2 hr", fare: 2500, category: "religious" },
    { name: "Kichhauchha", icon: "🕌", km: 190, time: "3.5 hr", fare: 4800, category: "religious" },
    // Tourist
    { name: "Nainital", icon: "🏔️", km: 440, time: "7 hr", fare: 8600, category: "tourist" },
    { name: "Mussoorie", icon: "⛰️", km: 540, time: "8.5 hr", fare: 10000, category: "tourist" },
    // Long Distance
    { name: "Delhi", icon: "🏙️", km: 530, time: "7 hr", fare: 11500, category: "longdistance" },
    { name: "Noida", icon: "🏢", km: 520, time: "7 hr", fare: 11000, category: "longdistance" },
    { name: "Patna", icon: "🏙️", km: 500, time: "8.5 hr", fare: 11000, category: "longdistance" },
    { name: "Bihar", icon: "🏘️", km: 500, time: "8 hr", fare: 11000, category: "longdistance" },
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

// ─── Booking Popup (Call or WhatsApp) ───
const PHONE = "917985578937";

function showBookingPopup(item, type = 'route') {
    const modal = document.getElementById('bookingModal');
    if (!modal) return;
    
    // Auto-fill destination if it's a route or package
    const destinationInput = document.getElementById('modalDestination');
    if (destinationInput) {
        if (type === 'route' || type === 'package') {
            destinationInput.value = item;
        } else if (dropInput && dropInput.value) {
            destinationInput.value = dropInput.value;
        } else {
            destinationInput.value = "Outstation Trip";
        }
    }

    // Auto-fill vehicle if it's a vehicle
    if (type === 'vehicle') {
        const vehicleSelect = document.getElementById('modalVehicle');
        if (vehicleSelect) {
            if (item.toLowerCase().includes('suv') || item.toLowerCase().includes('ertiga') || item.toLowerCase().includes('innova')) {
                vehicleSelect.value = 'SUV';
            } else {
                vehicleSelect.value = 'Sedan';
            }
        }
    }
    
    modal.classList.add('active');
}

function closeBookingPopup() {
    const modal = document.getElementById('bookingModal');
    if (modal) modal.classList.remove('active');
}

// ─── Render Local Routes ───
function renderLocalRoutes() {
    const grid = document.getElementById("localRoutesGrid");
    if (!grid) return;
    grid.classList.add("visible");
    grid.innerHTML = localRoutes.map(r => `
        <div class="local-route-card">
            <div class="local-route-icon">${r.icon}</div>
            <div class="local-route-info">
                <h4>Airport → ${r.name}</h4>
                <span class="local-route-dist">~${r.km} km • ${r.time}</span>
            </div>
            <div class="local-route-fare">₹${r.fare}</div>
            <button onclick="showBookingPopup('${r.name.replace(/'/g, "\\'")}')"
                class="local-book-btn">Book Now</button>
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
    featuredGrid.classList.add("visible");
    if (secondaryGrid) secondaryGrid.classList.add("visible");

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
                <button onclick="showBookingPopup('${r.name.replace(/'/g, "\\'")}')"
                    class="featured-book-btn">📱 Book Taxi</button>
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
            <button onclick="showBookingPopup('${r.name.replace(/'/g, "\\'")}')"
                class="secondary-book-btn">Book</button>
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
let selectedDrop = "";
let currentRouteData = null;
const CUSTOM_PER_KM = 12; // Adjusted to realistic base outstation rate

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
const dropInput = document.getElementById("dropInput");
const dropValue = document.getElementById("dropValue");
const dropDropdown = document.getElementById("dropDropdown");
const airportBookingCard = document.getElementById("airportBookingCard");
const bookingModal = document.getElementById("bookingModal");

// ─── Search Dropdown Logic ───
function renderDropdown(dropdown, query, onSelect) {
    const q = query.toLowerCase().trim();
    let html = '';
    const groups = {};
    const groupOrder = ['Popular', 'Religious', 'Purvanchal', 'Tourist', 'Long Distance', 'Nearby'];

    outstationRoutes.forEach(loc => {
        if (q && !loc.name.toLowerCase().includes(q)) return;
        const group = loc.category === 'popular' ? 'Popular' : 
                      loc.category === 'religious' ? 'Religious' : 
                      loc.category === 'purvanchal' ? 'Purvanchal' : 
                      loc.category === 'tourist' ? 'Tourist' : 
                      loc.category === 'nearby' ? 'Nearby' : 'Other';
        if (!groups[group]) groups[group] = [];
        groups[group].push(loc);
    });

    const sortedGroups = Object.entries(groups).sort((a, b) => {
        const ai = groupOrder.indexOf(a[0]);
        const bi = groupOrder.indexOf(b[0]);
        return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
    });

    let totalItems = 0;
    for (const [groupName, items] of sortedGroups) {
        html += `<div class="search-dropdown-group">${groupName}</div>`;
        items.forEach(loc => {
            const id = loc.name.toLowerCase().replace(/[\s()]+/g, '-').replace(/-+/g, '-');
            html += `<div class="search-dropdown-item" data-id="${id}" data-name="${loc.name}" data-fare="${loc.fare || 0}" data-km="${loc.km || 0}">
                <span class="sdi-name">${loc.icon} ${loc.name}</span>
            </div>`;
            totalItems++;
        });
    }

    // Custom location
    if (q && q.length > 1) {
        const customName = query.trim().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
        html += `<div class="search-dropdown-custom" data-id="custom-${customName}" data-name="${customName}" data-fare="0" data-km="0">📍 "${customName}"</div>`;
    }

    if (totalItems === 0 && (!q || q.length <= 1)) {
        html = '<div class="search-dropdown-empty">Start typing to search destinations...</div>';
    }

    dropdown.innerHTML = html;
    dropdown.classList.add('open');

    dropdown.querySelectorAll('.search-dropdown-item, .search-dropdown-custom').forEach(item => {
        item.addEventListener('click', () => {
            onSelect(item.dataset.id, item.dataset.name, item.dataset.fare, item.dataset.km);
            dropdown.classList.remove('open');
        });
    });
}

// ─── Update Fare Display ───
function updateFareDisplay(fare, km) {
    const fareDisplay = document.getElementById('fareDisplay');
    const fareAmount = document.getElementById('fareAmount');
    const fareKm = document.getElementById('fareKm');
    const modalDestination = document.getElementById('modalDestination');
    
    if (modalDestination && dropInput.value) {
        modalDestination.value = dropInput.value;
    }

    if (!fareDisplay || !fareAmount || !fareKm) return;

    const f = parseInt(fare, 10);
    const k = parseInt(km, 10) || 0;
    
    if (f > 0) {
        fareAmount.textContent = `₹${f.toLocaleString('en-IN')}`;
        fareKm.textContent = k > 0 ? `(${k} km)` : '';
        fareDisplay.style.display = 'flex';
    } else if (k > 0) {
        const estFare = k * CUSTOM_PER_KM;
        fareAmount.textContent = `₹${estFare.toLocaleString('en-IN')}`;
        fareKm.textContent = `(${k} km)`;
        fareDisplay.style.display = 'flex';
    } else {
        fareDisplay.style.display = 'none';
    }
}

// ─── Trip Tab Switching ───
function initTripTabs() {
    document.querySelectorAll('.trip-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.trip-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });
}

// ─── Search Input Events ───
function initSearchInputs() {
    dropInput.addEventListener('focus', () => {
        renderDropdown(dropDropdown, dropInput.value, (id, name, fare, km) => {
            dropInput.value = name;
            dropValue.value = id;
            selectedDrop = id;
            updateFareDisplay(fare, km);
        });
    });
    dropInput.addEventListener('input', () => {
        renderDropdown(dropDropdown, dropInput.value, (id, name, fare, km) => {
            dropInput.value = name;
            dropValue.value = id;
            selectedDrop = id;
            updateFareDisplay(fare, km);
        });
    });
    
    // Close dropdowns on click outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-field')) {
            dropDropdown.classList.remove('open');
        }
    });
}

// ─── Get Travel DateTime String ───
function getTravelDateTime() {
    const date = travelDateEl ? travelDateEl.value : '';
    const time = travelTimeEl ? travelTimeEl.value : '';
    let dateStr = '';
    if (date) {
        const d = new Date(date);
        dateStr = d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    }
    let timeStr = '';
    if (time) {
        const [h, m] = time.split(':');
        const hr = parseInt(h, 10);
        const ampm = hr >= 12 ? 'PM' : 'AM';
        const hr12 = hr % 12 || 12;
        timeStr = `${hr12}:${m} ${ampm}`;
    }
    if (dateStr && timeStr) return `${dateStr} at ${timeStr}`;
    if (dateStr) return dateStr;
    if (timeStr) return `Today at ${timeStr}`;
    return '';
}

// ─── Initialize ───
document.addEventListener("DOMContentLoaded", () => {
    // Modal defaults
    const today = new Date().toISOString().split("T")[0];
    const modalDate = document.getElementById('modalDate');
    const modalTime = document.getElementById('modalTime');
    if (modalDate) {
        modalDate.setAttribute("min", today);
        modalDate.value = today;
    }
    if (modalTime) {
        const now = new Date();
        const nextHour = new Date(now.getTime() + 60 * 60 * 1000);
        modalTime.value = `${String(nextHour.getHours()).padStart(2, '0')}:00`;
    }

    renderVehicles();
    renderLocalRoutes();
    renderOutstationRoutes();
    initScrollReveal();
    initParticles();
    initEventListeners();
    initSearchInputs();
    initTripTabs();
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
                    <button class="card-detail-btn" onclick="showBookingPopup('${v.name.replace(/'/g, "\\'")}', 'vehicle')">
                        📞 Book Now
                    </button>
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

// ─── Submit Booking via WhatsApp ───
function submitBooking() {
    const destination = document.getElementById('modalDestination').value || dropInput.value || "Outstation";
    const date = document.getElementById('modalDate').value;
    const time = document.getElementById('modalTime').value;
    const flight = document.getElementById('modalFlight').value;
    const passengers = document.getElementById('modalPassengers').value;
    const vehicle = document.getElementById('modalVehicle').value;
    const name = document.getElementById('modalNameInput').value;
    
    // Check if round-trip
    const tripTypeEl = document.querySelector('.trip-tab.active input');
    const tripType = tripTypeEl && tripTypeEl.value === 'outstation-roundtrip' ? 'Round-Trip' : 'One-Way';

    let msg = `*New Booking Request*%0A`;
    msg += `Name: ${name}%0A`;
    msg += `From: Lucknow Airport%0A`;
    msg += `To: ${destination} (${tripType})%0A`;
    msg += `Date & Time: ${date} at ${time}%0A`;
    msg += `Flight No: ${flight}%0A`;
    msg += `Passengers: ${passengers}%0A`;
    msg += `Vehicle: ${vehicle}`;

    window.open(`https://wa.me/917985578937?text=${msg}`, '_blank');
    document.getElementById('bookingModal').classList.remove('active');
}

// ─── Search / Route Selection ───
function handleSearch() {
    const dropName = dropInput.value.trim();
    if (!dropName) {
        shakeElement(searchBtn);
        return;
    }

    const route = outstationRoutes.find(r => r.name.toLowerCase() === dropName.toLowerCase());
    
    if (route) {
        currentRouteData = { km: route.km, fare: route.fare, time: route.time };
        updateFareDisplay(route.fare, route.km);
        routeInfoText.textContent = `✈️ Lucknow Airport → ${route.name} • ~${route.km} km • ${route.time} • Starting from ₹${route.fare.toLocaleString("en-IN")} (Sedan)`;
    } else {
        currentRouteData = null;
        routeInfoText.textContent = `✈️ Lucknow Airport → ${dropName} • Starting from ₹${CUSTOM_PER_KM}/km (Sedan) • Call 79855 78937`;
        updateFareDisplay(0, 0); 
    }

    routeInfoBar.style.display = "block";
    document.getElementById("fleet").scrollIntoView({ behavior: "smooth" });
}

function clearRoute() {
    dropInput.value = "";
    dropValue.value = "";
    currentRouteData = null;
    routeInfoBar.style.display = "none";
    const fareDisplay = document.getElementById('fareDisplay');
    if (fareDisplay) fareDisplay.style.display = "none";
}

// ─── Scroll Reveal (Intersection Observer) ───
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.01, rootMargin: "0px 0px 50px 0px" });

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
    if (searchBtn) searchBtn.addEventListener("click", handleSearch);

    // Clear route
    if (routeClearBtn) routeClearBtn.addEventListener("click", clearRoute);

    // Modal close
    if (modalClose) modalClose.addEventListener("click", closeModal);
    if (modalOverlay) {
        modalOverlay.addEventListener("click", (e) => {
            if (e.target === modalOverlay) closeModal();
        });
    }
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal();
    });

    // Filter buttons
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => setFilter(btn.dataset.filter));
    });

    // Navbar scroll effect
    if (navbar) {
        window.addEventListener("scroll", () => {
            navbar.classList.toggle("scrolled", window.scrollY > 50);
        });
    }

    // Mobile menu
    if (mobileMenuBtn && mobileMenu) {
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
    }

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
