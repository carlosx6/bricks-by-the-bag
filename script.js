// ===== Bricks by the Bag – Store + Quick View + Full Product Page =====

const products = [
  {
    id: 1,
    name: "Millennium Falcon™ – UCS",
    theme: "Star Wars",
    availability: "50+ Available",
    price: 849.99,
    short: "The ultimate LEGO® Star Wars™ Millennium Falcon is here. With 7,500 elements, this LEGO® model of the ship that made the Kessel Run in less than twelve parsecs is our biggest ever.",
    images: [
      "images/millennium-falcon.jpg",
      "images/millennium-falcon-2.jpg",
      "images/millennium-falcon-3.jpg"
    ],
    description: `Welcome to the largest, most detailed LEGO® Star Wars Millennium Falcon model we’ve ever created—in fact, with 7,500 pieces it’s one of our biggest LEGO models, period! This amazing LEGO interpretation of Han Solo’s unforgettable Corellian freighter has all the details that Star Wars fans of any age could wish for, including intricate exterior detailing, upper and lower quad laser cannons, landing legs, lowering boarding ramp and a 4-minifigure cockpit with detachable canopy. Remove individual hull plates to reveal the highly detailed main hold, rear compartment and gunnery station. This amazing model also features interchangeable sensor dishes and crew, so you decide whether to play out classic LEGO Star Wars adventures with Han, Leia, Chewbacca and C-3PO, or enter the world of Episode VII and VIII with older Han, Rey, Finn and BB-8!

Includes 4 classic crew minifigures: Han Solo, Chewbacca, Princess Leia and C-3PO.
Also includes 3 Episode VII/VIII crew minifigures: Older Han Solo, Rey and Finn.
Figures include a BB-8 droid, 2 buildable Porgs and a buildable Mynock.
Exterior features include intricately detailed and removable hull panels, a lowering boarding ramp, concealed blaster cannon, 4-minifigure cockpit with detachable canopy, interchangeable round/rectangular sensor dishes, upper and lower quad laser cannons, and 7 landing legs.
Main hold features a seating area, Dejarik holographic game, combat remote training helmet, engineering station with turning minifigure seat and a doorway build with passageway decoration.
Rear compartment features the engine room with hyperdrive and console, 2 doorways, hidden floor compartment, 2 escape pod hatches, engineering console and an access ladder to the gunnery station.
Gunnery station features a minifigure gunner’s seat and detachable hull panel with fully rotating quad laser cannon. An additional quad laser cannon is also mounted on the underside.
This model includes 7,500 pieces.
Also includes an informational fact plaque.
Features a new-for-October-2017 cockpit canopy element.
Classic crew weapons include Han’s blaster pistol and Chewbacca’s stud-firing bowcaster.
Measures over 8” (21cm) high, 33” (84cm) long and 23” (60cm) wide.`,
    details: [
      "Theme: Star Wars",
      "Series: Ultimate Collector Series (UCS)",
      "Pieces: 7,500",
      "Type: Display model",
      "Includes: Informational fact plaque"
    ],
    reviews: [
      { user: "Alex", stars: 5, text: "The most legendary UCS set ever made.", date: "Jan 2026" },
      { user: "Maya", stars: 5, text: "Huge, detailed, and absolutely worth it.", date: "Jan 2026" }
    ]
  },
  {
    id: 2,
    name: "Daily Bugle – LEGO Marvel (76178)",
    theme: "Marvel",
    availability: "100+ Available",
    price: 349.99,
    short: "The new Daily Bugle features storylines true comic fans will know, from the Sinister Six to the Spider-verse and beyond.",
    images: [
      "images/daily-bugle.jpg",
      "images/daily-bugle-2.jpg",
      "images/daily-bugle-3.jpg"
    ],
    description: `The LEGO® Marvel Spider-Man Daily Bugle (76178) brings together a cast of 25 classic characters from the Spiderverse in a stunning build-and-display construction project for adults.

A 4-story celebration of the Marvel Universe
Measuring over 32 in. (82 cm) high, this 3,789-piece recreation of the Daily Bugle office block provides a towering backdrop for an all-star cast of Marvel heroes and villains, many new to this set! The building is filled with authentic details, fascinating features and classic comic-book action – from the New York taxi cab outside to the penthouse office of the Bugle’s Editor in Chief.

LEGO® Marvel Spider-Man Daily Bugle (76178) is the ultimate build-and-display project for adult Marvel enthusiasts.
25 minifigures bring life to the set: Doctor Octopus, Spider-Man, Venom, Miles Morales, Spider-Ham, Green Goblin and more!
5 minifigures are new to this set – Blade, J. Jonah Jameson, Black Cat, Daredevil and Punisher.`,
    details: [
      "Theme: Marvel",
      "Set Number: 76178",
      "Pieces: 3,789",
      "Type: Build-and-display model",
      "Minifigures: 25"
    ],
    reviews: [
      { user: "Chris", stars: 5, text: "So many minifigures — insane value.", date: "Jan 2026" },
      { user: "Sam", stars: 4, text: "Tall, detailed, and looks great on display.", date: "Jan 2026" }
    ]
  },
  {
    id: 3,
    name: "Hogwarts Express™ – Collectors’ Edition (76405)",
    theme: "Harry Potter",
    availability: "100+ Available",
    price: 499.99,
    short: "Bring the magic of Harry Potter™ home with an all-new buildable, 1:32 scale replica of the Hogwarts Express™.",
    images: [
      "images/hogwarts-express.jpg",
      "images/hogwarts-express-2.jpg",
      "images/hogwarts-express-3.jpg"
    ],
    description: `Capture the magic of the Harry Potter™ stories with a buildable, 1:32 scale replica of the most iconic vehicle in the Wizarding World.

Authentically detailed inside and out
The engine features a detailed underside and a lever on the top that causes the train to rock with the motion of a steam train.`,
    details: [
      "Theme: Harry Potter",
      "Set: 76405 (Collectors’ Edition)",
      "Scale: 1:32",
      "Type: Build-and-display model"
    ],
    reviews: [
      { user: "Jordan", stars: 5, text: "Insane display piece. The train looks unreal.", date: "Jan 2026" },
      { user: "Riley", stars: 5, text: "Worth it for collectors. Huge and iconic.", date: "Jan 2026" }
    ]
  },

  // ✅ NEW: Hulkbuster
  {
    id: 4,
    name: "Hulkbuster – LEGO Marvel (76210)",
    theme: "Marvel",
    availability: "25+ Available",
    price: 549.99,
    short: "Under the golden chest plates lies a spacious cockpit, which fits the LEGO® Marvel Iron Man Figure (76206). Sold separately.",
    images: [
      "images/hulkbuster.jpg",
      "images/hulkbuster-2.jpg",
      "images/hulkbuster-3.jpg"
    ],
    description: `LEGO® Marvel Hulkbuster (76210) captures the scale and power of the Hulkbuster MK44 from Marvel Studios’ Avengers: Age of Ultron. Standing over 20.5 in. (52 cm) tall and containing 4,049 pieces, this challenging and rewarding construction project is designed with adult enthusiasts in mind.

Authentically engineered
The model features a multitude of movie-accurate features. Within the dark red armor and strategically positioned golden plates lies a spacious cockpit, from which the LEGO Marvel Iron Man Figure (76206) – sold separately – controls the heavy-duty armor. The set also includes an information plate and a Tony Stark minifigure.

LEGO brick kits for adults
This model is part of an extensive range of LEGO Marvel Sets for Adults.

Collectible movie colossus – This 4,049-piece LEGO® Marvel Hulkbuster (76210) captures the scale and power of the Hulkbuster MK44 from Marvel Studios’ Avengers: Age of Ultron
Authentic details – The model incorporates 3 light-up arc reactors (1 in the chest and 1 in each hand), a fully jointed upper body and a spacious, opening cockpit
Combine with an Iron Man pilot – The cockpit is designed to hold the LEGO® Marvel Iron Man Figure (76206) – sold separately
A surefire conversation-starter – This display piece also includes an information plate that holds a Tony Stark minifigure carrying tools
Gift for adults – Model-makers and Marvel enthusiasts will find this challenging build-and-display project provides pleasure and fulfillment long after the construction work is over
Movie memento – Measuring 20.5 in (52 cm) high, 18.5 in (47 cm) wide and 9.5 in (24 cm) deep, this celebration of the Marvel movies can be displayed in the home or workplace
High-quality printed instructions – Embark on this construction project as soon as you open the box
Relax and recharge – The range of premium LEGO® Sets for Adults provides a rewarding build-and-display experience that lasts long after the construction work has been completed
Quality guaranteed – LEGO® components fulfill stringent industry quality standards to ensure they are consistent, compatible and connect easily every time
Safety assured – LEGO® components are dropped, heated, crushed, twisted and analyzed to make sure they satisfy rigorous global safety standards`,
    details: [
      "Theme: Marvel",
      "Set Number: 76210",
      "Pieces: 4,049",
      "Height: 20.5 in (52 cm)",
      "Includes: Info plate + Tony Stark minifigure",
      "Note: Iron Man Figure (76206) sold separately"
    ],
    reviews: [
      { user: "Drew", stars: 5, text: "Massive build and insane shelf presence.", date: "Jan 2026" },
      { user: "Kylie", stars: 4, text: "Hard but worth it—looks like the movie suit.", date: "Jan 2026" }
    ]
  },

  // ✅ NEW: McLaren P1
  {
    id: 5,
    name: "McLaren P1™ – LEGO Technic™ (42172)",
    theme: "Technic™",
    availability: "25+ Available",
    price: 449.99,
    short: "Drive your passion for a legendary hypercar with the new LEGO Technic McLaren P1™.",
    images: [
      "images/mclaren-p1.jpg",
      "images/mclaren-p1-2.jpg",
      "images/mclaren-p1-3.jpg"
    ],
    description: `Ignite your love for supercars with this engaging LEGO® Technic™ McLaren P1™ hypercar set for adults. Become immersed in the details as you construct the impressive 1:8 scale model. Then take your time exploring features like the 7-speed gearbox with its shifter drum, the suspension and the V8 piston engine. Admire the adjustable rear wing and the opening doors with their butterfly-style mechanism, before proudly displaying your completed model. Like the real-world car, the LEGO Technic version features its own unique serial number, which gives you access to exclusive online content.

From the fun unboxing experience to adding the finishing details, this LEGO Technic set offers a rewarding challenge for adult building fans. It’s an ideal present for supercar enthusiasts and McLaren fans, offering a project to enjoy and a display piece to cherish.

LEGO® Technic™ race car set for adults – This McLaren P1™ building set for adults is packed with authentic details and can be built to make a 1:8 scale model collectible for supercar fans
Build the V8 piston engine and more – Enjoy a mindful project assembling all the details like the 7-speed gearbox with shifter drum, opening doors, adjustable rear wing and V8 piston engine
A 1:8 scale model car to display – From the unboxing experience to the building project, this adult building kit delivers a rewarding challenge for LEGO® Technic™ fans
Unique serial number tile – Like the real-world car, the LEGO® Technic™ version features its own unique serial number, giving you access to exclusive online content
A gift for car-lovers – This set makes a gift for adult LEGO® builders, supercar enthusiasts and McLaren fans, offering a creative project and a display piece to cherish
Measurements – 3,893-piece set with a model car measuring over 5.5 in. (14 cm) high, 23 in. (59 cm) long and 9.5 in. (25 cm) wide`,
    details: [
      "Theme: Technic™",
      "Set Number: 42172",
      "Pieces: 3,893",
      "Scale: 1:8",
      "Features: 7-speed gearbox + V8 piston engine",
      "Doors: Butterfly-style mechanism",
      "Includes: Serial number tile (exclusive content access)",
      "Size: 5.5 in (14 cm) H × 23 in (59 cm) L × 9.5 in (25 cm) W"
    ],
    reviews: [
      { user: "Miles", stars: 5, text: "The gearbox build is so satisfying.", date: "Jan 2026" },
      { user: "Avery", stars: 5, text: "Looks like a museum piece when finished.", date: "Jan 2026" }
    ]
  }
];

// ----- Cart storage -----
let cart = {};
const CART_STORAGE_KEY = "bbb_cart_v1";

function saveCart(){ try { localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart)); } catch {} }
function loadCart(){
  try{
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return (parsed && typeof parsed === "object") ? parsed : {};
  } catch { return {}; }
}

// ----- Helpers -----
function money(x){ return "$" + Number(x).toFixed(2); }
function stars(n){ return "★".repeat(n) + "☆".repeat(5 - n); }
function escapeHtml(s){
  return String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");
}

// Auto-format long text into headings/bullets/paragraphs
function looksLikeHeading(line){
  const t = line.trim();
  if (!t) return false;

  // Must be short-ish and NOT end in punctuation
  if (t.length > 45) return false;
  if (/[.!?]$/.test(t)) return false;

  // Avoid turning normal sentences into headings
  const sentenceStarters = /^(The|This|A|An|Celebrate|Capture|Turn|Ignite|Replay|Looking|Step|Press|Recapture)\b/i;
  if (sentenceStarters.test(t)) return false;

  // If it contains " – " it's almost always a bullet item, not a heading
  if (t.includes(" – ")) return false;

  return true;
}
function looksLikeBullet(line){
  const t = line.trim();
  if (!t) return false;
  if (t.startsWith("•") || t.startsWith("-")) return true;
  if (t.includes(" – ")) return true;
  if (/^(Includes|Also includes|Exterior features|Main hold features|Rear compartment features|Gunnery station features|This model includes|Measures over|Authentic|Collectible|Unique|Build|A gift|Measurements|Quality|Safety)/i.test(t)) return true;
  return false;
}
function formatLongText(raw){
  const lines = raw.replaceAll("\r\n","\n").split("\n").map(l => l.trim());

  let html = "";
  let inList = false;
  let wroteIntro = false;

  const closeList = () => {
    if (inList){
      html += "</ul>";
      inList = false;
    }
  };

  for (const line of lines){
    if (!line){
      closeList();
      continue;
    }

    // ✅ Rule: first non-empty line should ALWAYS be a paragraph (realistic)
    if (!wroteIntro){
      closeList();
      html += `<p>${escapeHtml(line)}</p>`;
      wroteIntro = true;
      continue;
    }

    // bullets
    if (looksLikeBullet(line)){
      if (!inList){
        closeList();
        html += "<ul>";
        inList = true;
      }
      const clean = line.replace(/^[-•]\s*/, "");
      html += `<li>${escapeHtml(clean)}</li>`;
      continue;
    }

    // headings
    if (looksLikeHeading(line)){
      closeList();
      html += `<h4>${escapeHtml(line)}</h4>`;
      continue;
    }

    // normal paragraph
    closeList();
    html += `<p>${escapeHtml(line)}</p>`;
  }

  closeList();
  return html;
}

// ----- Toast -----
const toast = document.getElementById("toast");
let toastTimer = null;
function showToast(msg){
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.remove("hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.add("hidden"), 1500);
}

// ----- Shared cart DOM (exists on both pages) -----
const cartBtn = document.getElementById("cartBtn");
const cartBox = document.getElementById("cart");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");
const closeCart = document.getElementById("closeCart");
const clearCartBtn = document.getElementById("clearCart");
const cartBackdrop = document.getElementById("cartBackdrop");

// Cart functions
function addToCart(id, qty = 1){
  const key = String(id);
  cart[key] = (cart[key] || 0) + qty;
  if (cart[key] <= 0) delete cart[key];
  updateCart();

  const p = products.find(x => x.id === id);
  if (p) showToast(`Added: ${p.name}`);
}
function setQty(id, qty){
  const key = String(id);
  if (qty <= 0) delete cart[key];
  else cart[key] = qty;
  updateCart();
}
function removeFromCart(id){
  delete cart[String(id)];
  updateCart();
}
function clearCart(){
  cart = {};
  updateCart();
  showToast("Cart cleared");
}
function updateCart(){
  if (!cartItems || !cartTotal || !cartCount) return;

  cartItems.innerHTML = "";
  let total = 0, count = 0;

  const entries = Object.entries(cart);
  if (entries.length === 0){
    cartItems.textContent = "Cart is empty.";
    cartTotal.textContent = "";
    cartCount.textContent = "0";
    saveCart();
    return;
  }

  for (const [idStr, qty] of entries){
    const id = Number(idStr);
    const product = products.find(p => p.id === id);
    if (!product) continue;

    count += qty;
    total += product.price * qty;

    const row = document.createElement("div");
    row.className = "cartRow";
    row.innerHTML = `
      <div style="flex:1;">
        <div class="cartRowTitle">${escapeHtml(product.name)}</div>
        <div class="muted">${money(product.price)} each</div>

        <div class="qtyControls">
          <button class="qtyBtn decBtn" aria-label="Decrease quantity">−</button>
          <div class="qtyPill">${qty}</div>
          <button class="qtyBtn incBtn" aria-label="Increase quantity">+</button>
          <button class="ghostBtn removeBtn" style="margin-left:auto;">Remove</button>
        </div>
      </div>
      <div style="text-align:right; min-width:120px;">
        <div style="font-weight:900;">${money(product.price * qty)}</div>
      </div>
    `;

    row.querySelector(".incBtn").addEventListener("click", () => setQty(id, qty + 1));
    row.querySelector(".decBtn").addEventListener("click", () => setQty(id, qty - 1));
    row.querySelector(".removeBtn").addEventListener("click", () => removeFromCart(id));

    cartItems.appendChild(row);
  }

  cartTotal.textContent = "Total: " + money(total);
  cartCount.textContent = String(count);
  saveCart();
}

function openCart(){
  if (!cartBox || !cartBackdrop) return;
  cartBox.classList.add("open");
  cartBackdrop.classList.remove("hidden");
}
function closeCartFn(){
  if (!cartBox || !cartBackdrop) return;
  cartBox.classList.remove("open");
  cartBackdrop.classList.add("hidden");
}

// Wire cart events
if (cartBtn) cartBtn.addEventListener("click", openCart);
if (closeCart) closeCart.addEventListener("click", closeCartFn);
if (cartBackdrop) cartBackdrop.addEventListener("click", closeCartFn);
if (clearCartBtn) clearCartBtn.addEventListener("click", clearCart);

// ----- INDEX PAGE -----
const grid = document.getElementById("productGrid");

// Modal DOM on index
const backdrop = document.getElementById("modalBackdrop");
const modal = document.getElementById("productModal");
const modalClose = document.getElementById("modalClose");
const modalTitle = document.getElementById("modalTitle");
const modalHero = document.getElementById("modalHero");
const thumbs = document.getElementById("thumbs");
const prevImg = document.getElementById("prevImg");
const nextImg = document.getElementById("nextImg");
const modalPrice = document.getElementById("modalPrice");
const modalAddBtn = document.getElementById("modalAddBtn");
const tabButtons = Array.from(document.querySelectorAll(".tab"));
const tabDesc = document.getElementById("tab-desc");
const tabDetails = document.getElementById("tab-details");
const tabReviews = document.getElementById("tab-reviews");
const modalFullLink = document.getElementById("modalFullLink");

let currentProduct = null;
let currentIndex = 0;

function setTab(tabName){
  if (!tabDesc || !tabDetails || !tabReviews) return;
  tabButtons.forEach(b => b.classList.toggle("active", b.dataset.tab === tabName));
  tabDesc.classList.toggle("hidden", tabName !== "desc");
  tabDetails.classList.toggle("hidden", tabName !== "details");
  tabReviews.classList.toggle("hidden", tabName !== "reviews");
}

function renderGallery(){
  const imgs = currentProduct.images;
  modalHero.src = imgs[currentIndex];
  thumbs.innerHTML = "";

  imgs.forEach((src, idx) => {
    const t = document.createElement("img");
    t.className = "thumb" + (idx === currentIndex ? " active" : "");
    t.src = src;
    t.alt = "Thumbnail " + (idx + 1);
    t.addEventListener("click", () => {
      currentIndex = idx;
      renderGallery();
    });
    thumbs.appendChild(t);
  });
}

function nextImage(){
  currentIndex = (currentIndex + 1) % currentProduct.images.length;
  renderGallery();
}
function prevImageFn(){
  currentIndex = (currentIndex - 1 + currentProduct.images.length) % currentProduct.images.length;
  renderGallery();
}

function openModal(productId){
  currentProduct = products.find(p => p.id === productId);
  if (!currentProduct) return;

  currentIndex = 0;
  modalTitle.textContent = currentProduct.name;
  modalPrice.textContent = money(currentProduct.price);

  tabDesc.innerHTML = formatLongText(currentProduct.description);
  tabDetails.innerHTML = `<ul>${currentProduct.details.map(d => `<li>${escapeHtml(d)}</li>`).join("")}</ul>`;
  tabReviews.innerHTML = currentProduct.reviews.map(r => `
    <div class="review">
      <div class="reviewTop">
        <div>${escapeHtml(r.user)} <span class="muted">(${escapeHtml(r.date)})</span></div>
        <div>${stars(r.stars)}</div>
      </div>
      <div class="muted" style="margin-top:6px;">${escapeHtml(r.text)}</div>
    </div>
  `).join("");

  if (modalFullLink) modalFullLink.href = `product.html?id=${currentProduct.id}`;

  renderGallery();
  modalAddBtn.onclick = () => addToCart(currentProduct.id, 1);

  document.body.style.overflow = "hidden";
  backdrop.classList.remove("hidden");
  modal.classList.remove("hidden");
  setTab("desc");
}

function closeModal(){
  if (!backdrop || !modal) return;
  backdrop.classList.add("hidden");
  modal.classList.add("hidden");
  currentProduct = null;
  document.body.style.overflow = "";
}

function renderProducts(){
  if (!grid) return;
  grid.innerHTML = "";

  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="cardMeta">
        <span class="badge">${escapeHtml(p.theme)}</span>
        <span class="avail"><span class="availDot"></span>${escapeHtml(p.availability)}</span>
      </div>

      <img src="${p.images[0]}" alt="${escapeHtml(p.name)}" class="productImg">

      <h3 class="productTitle">${escapeHtml(p.name)}</h3>
      <p class="price">${money(p.price)}</p>
      <p class="cardDesc">${escapeHtml(p.short)}</p>

      <div class="cardBtns">
        <button class="ghostBtn quickBtn">Quick View</button>
        <a class="primaryBtn linkBtn" href="product.html?id=${p.id}">View</a>
      </div>

      <button class="addBtn" style="margin-top:10px;">Add to cart</button>
    `;

    card.querySelector(".addBtn").addEventListener("click", () => addToCart(p.id, 1));
    card.querySelector(".quickBtn").addEventListener("click", () => openModal(p.id));
    card.querySelector(".productImg").addEventListener("click", () => openModal(p.id));
    card.querySelector(".productTitle").addEventListener("click", () => openModal(p.id));

    grid.appendChild(card);
  });
}

// modal events if exists
if (modalClose) modalClose.addEventListener("click", closeModal);
if (backdrop) backdrop.addEventListener("click", closeModal);
if (nextImg) nextImg.addEventListener("click", nextImage);
if (prevImg) prevImg.addEventListener("click", prevImageFn);
tabButtons.forEach(btn => btn.addEventListener("click", () => setTab(btn.dataset.tab)));

// ----- PRODUCT PAGE -----
const productPage = document.getElementById("productPage");
const crumbName = document.getElementById("crumbName");

function getProductIdFromUrl(){
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));
  return Number.isFinite(id) ? id : null;
}

function renderProductPage(){
  if (!productPage) return;

  const id = getProductIdFromUrl();
  const p = products.find(x => x.id === id) || products[0];

  if (crumbName) crumbName.textContent = p.name;

  productPage.innerHTML = `
    <div class="productTop">
      <div>
        <div class="productMetaRow">
          <span class="badge">${escapeHtml(p.theme)}</span>
          <span class="avail"><span class="availDot"></span>${escapeHtml(p.availability)}</span>
        </div>

        <div class="pHeroWrap">
          <button class="navBtn" id="pPrev" aria-label="Previous image">‹</button>
          <img id="pageHero" alt="${escapeHtml(p.name)}" />
          <button class="navBtn" id="pNext" aria-label="Next image">›</button>
        </div>

        <div id="pThumbs" class="thumbs pThumbs"></div>
      </div>

      <div class="productInfo">
        <h2>${escapeHtml(p.name)}</h2>
        <div class="buyRow">
          <div class="bigPrice">${money(p.price)}</div>
          <button id="pageAdd" class="primaryBtn">Add to cart</button>
        </div>

        <p class="productShort">${escapeHtml(p.short)}</p>

        <div class="productTabs">
          <div class="tabs">
            <button class="tab active" data-tab="desc">Description</button>
            <button class="tab" data-tab="details">Details</button>
            <button class="tab" data-tab="reviews">Reviews</button>
          </div>

          <div class="tabPanel" id="p-desc"></div>
          <div class="tabPanel hidden" id="p-details"></div>
          <div class="tabPanel hidden" id="p-reviews"></div>
        </div>
      </div>
    </div>
  `;

  // tabs content
  const pDesc = document.getElementById("p-desc");
  const pDetails = document.getElementById("p-details");
  const pReviews = document.getElementById("p-reviews");

  pDesc.innerHTML = formatLongText(p.description);
  pDetails.innerHTML = `<ul>${p.details.map(d => `<li>${escapeHtml(d)}</li>`).join("")}</ul>`;
  pReviews.innerHTML = p.reviews.map(r => `
    <div class="review">
      <div class="reviewTop">
        <div>${escapeHtml(r.user)} <span class="muted">(${escapeHtml(r.date)})</span></div>
        <div>${stars(r.stars)}</div>
      </div>
      <div class="muted" style="margin-top:6px;">${escapeHtml(r.text)}</div>
    </div>
  `).join("");

  const pageTabs = Array.from(productPage.querySelectorAll(".tab"));
  function setPageTab(tabName){
    pageTabs.forEach(b => b.classList.toggle("active", b.dataset.tab === tabName));
    pDesc.classList.toggle("hidden", tabName !== "desc");
    pDetails.classList.toggle("hidden", tabName !== "details");
    pReviews.classList.toggle("hidden", tabName !== "reviews");
  }
  pageTabs.forEach(btn => btn.addEventListener("click", () => setPageTab(btn.dataset.tab)));
  setPageTab("desc");

  // gallery on product page
  let idx = 0;
  const hero = document.getElementById("pageHero");
  const tWrap = document.getElementById("pThumbs");
  const prev = document.getElementById("pPrev");
  const next = document.getElementById("pNext");

  function renderPageGallery(){
    hero.src = p.images[idx];
    tWrap.innerHTML = "";
    p.images.forEach((src, i) => {
      const t = document.createElement("img");
      t.className = "thumb" + (i === idx ? " active" : "");
      t.src = src;
      t.alt = "Thumbnail " + (i + 1);
      t.addEventListener("click", () => { idx = i; renderPageGallery(); });
      tWrap.appendChild(t);
    });
  }

  function pageNext(){ idx = (idx + 1) % p.images.length; renderPageGallery(); }
  function pagePrev(){ idx = (idx - 1 + p.images.length) % p.images.length; renderPageGallery(); }

  prev.addEventListener("click", pagePrev);
  next.addEventListener("click", pageNext);
  renderPageGallery();

  document.getElementById("pageAdd").addEventListener("click", () => addToCart(p.id, 1));
}

// global keys
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeCartFn();
  if (modal && !modal.classList.contains("hidden") && e.key === "Escape") closeModal();
  if (modal && !modal.classList.contains("hidden") && e.key === "ArrowRight") nextImage();
  if (modal && !modal.classList.contains("hidden") && e.key === "ArrowLeft") prevImageFn();
});

// Init
cart = loadCart();
updateCart();
renderProducts();
renderProductPage();
