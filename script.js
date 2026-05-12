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
        image: "https://imgd.aeplcdn.com/664x374/cw/ec/21597/Tata-Indigo-eCS-Right-Front-Three-Quarter-82498.jpg?wm=0&q=80",
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
        image: "https://imgd.aeplcdn.com/664x374/cw/ec/20827/Toyota-Etios-Right-Front-Three-Quarter-82498.jpg?wm=0&q=80",
        description: "Toyota's trusted workhorse. Excellent mileage, spacious interiors, and Toyota reliability. Ideal for solo travellers and couples heading to Lucknow city from the airport."
    },
    {
        id: 3,
        name: "Maruti Swift Dzire Tour",
        category: "sedan",
        badge: "Sedan",
        seats: 4,
        ac: "AC",
        luggage: 2,
        fuel: "Petrol / CNG",
        priceKm: 11,
        priceDay: 2000,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/159099/dzire-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
        description: "India's favourite compact sedan. Fuel-efficient, clean, and well-maintained. Perfect for quick airport-to-city rides and short outstation trips from Lucknow."
    },
    {
        id: 4,
        name: "Maruti Ertiga Tour M",
        category: "suv",
        badge: "MPV",
        seats: 7,
        ac: "AC",
        luggage: 3,
        fuel: "Petrol / CNG",
        priceKm: 14,
        priceDay: 2800,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/112113/ertiga-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
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
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/140809/innova-crysta-exterior-right-front-three-quarter-2.png?isig=0&q=80",
        description: "The king of highway rides. 7-seater with captain seats, powerful diesel engine, and massive boot. Perfect for families arriving at Lucknow airport heading to Kanpur, Ayodhya, or Varanasi."
    }
];

// ─── Route Distances (km) & Fixed Fares (sedan base) ───
const routeData = {
    // Airport to Lucknow city areas
    "lucknow-airport-hazratganj": { km: 15, fare: 350, time: "25 min" },
    "lucknow-airport-gomtinagar": { km: 18, fare: 400, time: "30 min" },
    "lucknow-airport-alambagh": { km: 8, fare: 200, time: "15 min" },
    "lucknow-airport-charbagh": { km: 12, fare: 300, time: "20 min" },
    "lucknow-airport-aliganj": { km: 22, fare: 500, time: "35 min" },
    "lucknow-airport-indira-nagar": { km: 20, fare: 450, time: "30 min" },
    "lucknow-airport-lucknow-city": { km: 16, fare: 350, time: "25 min" },

    // Airport to outstation
    "lucknow-airport-kanpur": { km: 85, fare: 1800, time: "1.5 hr" },
    "lucknow-airport-agra": { km: 335, fare: 5800, time: "5 hr" },
    "lucknow-airport-varanasi": { km: 320, fare: 5500, time: "5.5 hr" },
    "lucknow-airport-allahabad": { km: 210, fare: 3800, time: "3.5 hr" },
    "lucknow-airport-ayodhya": { km: 135, fare: 2800, time: "2.5 hr" },
    "lucknow-airport-delhi": { km: 530, fare: 8500, time: "7 hr" },
    "lucknow-airport-bareilly": { km: 260, fare: 4500, time: "4.5 hr" },
    "lucknow-airport-sultanpur": { km: 140, fare: 2800, time: "2.5 hr" },
    "lucknow-airport-raebareli": { km: 85, fare: 1800, time: "1.5 hr" },
    "lucknow-airport-unnao": { km: 55, fare: 1200, time: "1 hr" },
    "lucknow-airport-sitapur": { km: 90, fare: 1900, time: "1.5 hr" },
    "lucknow-airport-hardoi": { km: 130, fare: 2600, time: "2.5 hr" },
    "lucknow-airport-faizabad": { km: 130, fare: 2600, time: "2.5 hr" },

    // City to city (regular taxi)
    "lucknow-city-kanpur": { km: 80, fare: 1700, time: "1.5 hr" },
    "lucknow-city-agra": { km: 330, fare: 5700, time: "5 hr" },
    "lucknow-city-varanasi": { km: 315, fare: 5400, time: "5.5 hr" },
    "lucknow-city-ayodhya": { km: 130, fare: 2700, time: "2.5 hr" },
    "lucknow-city-delhi": { km: 525, fare: 8400, time: "7 hr" },
    "lucknow-city-allahabad": { km: 205, fare: 3700, time: "3.5 hr" },

    // Within city
    "hazratganj-gomtinagar": { km: 8, fare: 200, time: "15 min" },
    "hazratganj-charbagh": { km: 5, fare: 150, time: "10 min" },
    "gomtinagar-charbagh": { km: 10, fare: 250, time: "18 min" },
    "alambagh-charbagh": { km: 6, fare: 180, time: "12 min" },
    "charbagh-lucknow-airport": { km: 12, fare: 300, time: "20 min" },
    "gomtinagar-lucknow-airport": { km: 18, fare: 400, time: "30 min" },
    "hazratganj-lucknow-airport": { km: 15, fare: 350, time: "25 min" },
};

// ─── Location Name Map ───
const locationNames = {
    "lucknow-airport": "Lucknow Airport (Amausi)",
    "lucknow-city": "Lucknow City",
    "hazratganj": "Hazratganj",
    "gomtinagar": "Gomti Nagar",
    "alambagh": "Alambagh",
    "charbagh": "Charbagh Station",
    "aliganj": "Aliganj",
    "indira-nagar": "Indira Nagar",
    "kanpur": "Kanpur",
    "agra": "Agra",
    "varanasi": "Varanasi",
    "allahabad": "Prayagraj",
    "ayodhya": "Ayodhya",
    "delhi": "Delhi / NCR",
    "bareilly": "Bareilly",
    "sultanpur": "Sultanpur",
    "raebareli": "Rae Bareli",
    "unnao": "Unnao",
    "sitapur": "Sitapur",
    "hardoi": "Hardoi",
    "faizabad": "Faizabad"
};

// ─── State ───
let currentFilter = "all";
let selectedPickup = "";
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
const pickupEl = document.getElementById("pickup");
const dropEl = document.getElementById("drop");
const travelDateEl = document.getElementById("travelDate");

// ─── Initialize ───
document.addEventListener("DOMContentLoaded", () => {
    const today = new Date().toISOString().split("T")[0];
    travelDateEl.setAttribute("min", today);
    travelDateEl.value = today;

    renderVehicles();
    initScrollReveal();
    initParticles();
    initEventListeners();
});

// ─── Render Vehicle Cards ───
function renderVehicles(filter = "all") {
    const filtered = filter === "all" ? vehicles : vehicles.filter(v => v.category === filter);

    vehicleGrid.innerHTML = filtered.map((v, i) => `
        <div class="vehicle-card" data-id="${v.id}" style="animation-delay: ${i * 0.08}s">
            <div class="card-image">
                <img src="${v.image}" alt="${v.name}" loading="lazy">
                <span class="card-badge">${v.badge}</span>
                <span class="card-price-tag">₹${v.priceKm}/km</span>
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
                    <div class="card-price">
                        <span class="amount">₹${v.priceDay.toLocaleString("en-IN")}</span>
                        <span class="unit">per day</span>
                    </div>
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
    document.getElementById("modalPriceKm").textContent = `₹${v.priceKm}/km`;
    document.getElementById("modalPriceDay").textContent = `₹${v.priceDay.toLocaleString("en-IN")}/day`;
    document.getElementById("modalDescription").textContent = v.description;

    // Specs
    document.getElementById("modalSpecs").innerHTML = `
        <div class="modal-spec-item"><span class="spec-icon">👥</span> ${v.seats} Seats</div>
        <div class="modal-spec-item"><span class="spec-icon">❄️</span> ${v.ac}</div>
        <div class="modal-spec-item"><span class="spec-icon">🧳</span> ${v.luggage} Bags</div>
        <div class="modal-spec-item"><span class="spec-icon">⛽</span> ${v.fuel}</div>
    `;

    // Route estimate
    const routeEstimate = document.getElementById("modalRouteEstimate");
    if (currentRouteData && selectedPickup && selectedDrop) {
        const multiplier = getVehicleMultiplier(v.category);
        const tripCost = Math.round(currentRouteData.fare * multiplier);
        const pickupName = locationNames[selectedPickup] || selectedPickup;
        const dropName = locationNames[selectedDrop] || selectedDrop;
        document.getElementById("modalRouteText").textContent =
            `${pickupName} → ${dropName} • ${currentRouteData.km} km • ~${currentRouteData.time}`;
        document.getElementById("modalTripCost").textContent =
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
    selectedPickup = pickupEl.value;
    selectedDrop = dropEl.value;

    if (!selectedPickup || !selectedDrop) {
        shakeElement(searchBtn);
        return;
    }
    if (selectedPickup === selectedDrop) {
        shakeElement(searchBtn);
        return;
    }

    // Look up route
    const routeKey = `${selectedPickup}-${selectedDrop}`;
    const reverseKey = `${selectedDrop}-${selectedPickup}`;
    currentRouteData = routeData[routeKey] || routeData[reverseKey] || null;

    const pickupName = locationNames[selectedPickup] || selectedPickup;
    const dropName = locationNames[selectedDrop] || selectedDrop;

    if (currentRouteData) {
        routeInfoText.textContent = `✈️ ${pickupName} → ${dropName} • ~${currentRouteData.km} km • ${currentRouteData.time} • Sedan from ₹${currentRouteData.fare.toLocaleString("en-IN")}`;
    } else {
        // Estimate
        const estKm = 100 + Math.floor(Math.random() * 200);
        currentRouteData = { km: estKm, fare: estKm * 12, time: "~" + Math.round(estKm / 60) + " hr" };
        routeInfoText.textContent = `✈️ ${pickupName} → ${dropName} • ~${estKm} km (est.) • Call for exact fare`;
    }
    routeInfoBar.style.display = "block";

    // Scroll to fleet
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
