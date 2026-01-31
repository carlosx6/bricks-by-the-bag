/* =========================
   Bricks by the Bag - store.js
   Single-file controller for:
   - Menu + Cart sidebar
   - Index product grid + Quick View modal
   - Product detail page
   - Checkout page
   - Free shipping progress ($200+) in cart + checkout
   ========================= */

const products = window.PRODUCTS || [];
let cart = {};
const CART_KEY = "bbtb_cart_v2";

const $ = (id) => document.getElementById(id);

/* ---------- Settings ---------- */
const FREE_SHIP_THRESHOLD = 200;

/* ---------- Storage ---------- */
function saveCart() {
  try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch {}
}
function loadCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY) || "{}") || {}; } catch { return {}; }
}

/* ---------- Helpers ---------- */
function money(x) { return "$" + Number(x || 0).toFixed(2); }

function escapeHtml(s) {
  return String(s ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function stars(n) {
  const k = Math.max(0, Math.min(5, Number(n || 0)));
  return "★".repeat(k) + "☆".repeat(5 - k);
}

function cartSubtotal() {
  let s = 0;
  for (const [idStr, qty] of Object.entries(cart)) {
    const p = products.find((x) => x.id === Number(idStr));
    if (p) s += p.price * qty;
  }
  return s;
}

/* ---------- Free shipping progress (injected UI) ---------- */
function upsertFreeShipProgress(whereEl, subtotal) {
  if (!whereEl) return;

  let box = whereEl.querySelector(".freeShipBox");
  if (!box) {
    box = document.createElement("div");
    box.className = "freeShipBox";
    box.innerHTML = `
      <div class="freeShipTop">
        <div class="freeShipTitle">Free shipping at $${FREE_SHIP_THRESHOLD}+</div>
        <div class="freeShipTitle freeShipPct">0%</div>
      </div>

      <div class="freeShipMsg"></div>

      <div class="freeShipTrack" aria-label="Free shipping progress">
        <div class="freeShipFill"></div>
      </div>

      <div class="freeShipNote muted"></div>
    `;
    whereEl.prepend(box);
  }

  const pct = Math.max(0, Math.min(100, (subtotal / FREE_SHIP_THRESHOLD) * 100));
  const remaining = Math.max(0, FREE_SHIP_THRESHOLD - subtotal);

  const pctEl = box.querySelector(".freeShipPct");
  const msgEl = box.querySelector(".freeShipMsg");
  const fillEl = box.querySelector(".freeShipFill");
  const noteEl = box.querySelector(".freeShipNote");

  if (pctEl) pctEl.textContent = `${Math.round(pct)}%`;
  if (fillEl) fillEl.style.width = `${pct}%`;

  if (subtotal >= FREE_SHIP_THRESHOLD) {
    if (msgEl) msgEl.textContent = "🎉 You unlocked free standard shipping!";
    if (noteEl) noteEl.textContent = "Standard shipping will show as Free at checkout.";
    box.classList.add("unlocked");
  } else {
    if (msgEl) msgEl.textContent = `Add ${money(remaining)} more to unlock free standard shipping.`;
    if (noteEl) noteEl.textContent = "Applies to Standard shipping only.";
    box.classList.remove("unlocked");
  }
}

/* ---------- Long text formatter (Description) ---------- */
function looksLikeHeading(line) {
  const t = line.trim();
  if (!t) return false;
  if (t.length > 60) return false;
  if (/[.!?]$/.test(t)) return false;
  return true;
}
function looksLikeBullet(line) {
  const t = line.trim();
  if (!t) return false;
  if (t.startsWith("•") || t.startsWith("-")) return true;
  if (t.includes(" – ")) return true;
  return false;
}
function formatLongText(raw) {
  const lines = String(raw || "")
    .replaceAll("\r\n", "\n")
    .split("\n")
    .map((l) => l.trim());

  let html = "";
  let inList = false;

  const closeList = () => {
    if (inList) { html += "</ul>"; inList = false; }
  };

  for (const line of lines) {
    if (!line) { closeList(); continue; }

    if (looksLikeHeading(line)) {
      closeList();
      html += `<h4>${escapeHtml(line)}</h4>`;
      continue;
    }

    if (looksLikeBullet(line)) {
      if (!inList) { closeList(); html += "<ul>"; inList = true; }
      html += `<li>${escapeHtml(line.replace(/^[-•]\s*/, ""))}</li>`;
      continue;
    }

    closeList();
    html += `<p>${escapeHtml(line)}</p>`;
  }

  closeList();
  return html;
}

/* ---------- Toast ---------- */
let toastTimer = null;
function showToast(msg) {
  const t = $("toast");
  if (!t) return;
  t.textContent = msg;
  t.classList.remove("hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.add("hidden"), 1400);
}

/* ---------- Menu ---------- */
function menuInit() {
  const menuBtn = $("menuBtn");
  const menu = $("menu");
  const back = $("menuBackdrop");
  const close = $("closeMenu");

  if (!menuBtn || !menu || !back || !close) return;

  const open = () => {
    menu.classList.add("open");
    back.classList.remove("hidden");
    menuBtn.setAttribute("aria-expanded", "true");
  };

  const shut = () => {
    menu.classList.remove("open");
    back.classList.add("hidden");
    menuBtn.setAttribute("aria-expanded", "false");
  };

  menuBtn.addEventListener("click", open);
  close.addEventListener("click", shut);
  back.addEventListener("click", shut);
}

/* ---------- Cart ---------- */
function cartInit() {
  const cartBtn = $("cartBtn");
  const cartBox = $("cart");
  const back = $("cartBackdrop");
  const close = $("closeCart");
  const clear = $("clearCart");

  if (cartBtn && cartBox && back) {
    cartBtn.addEventListener("click", () => {
      cartBox.classList.add("open");
      back.classList.remove("hidden");
    });
    back.addEventListener("click", () => {
      cartBox.classList.remove("open");
      back.classList.add("hidden");
    });
  }

  if (close && cartBox && back) {
    close.addEventListener("click", () => {
      cartBox.classList.remove("open");
      back.classList.add("hidden");
    });
  }

  if (clear) {
    clear.addEventListener("click", () => {
      cart = {};
      updateCart();
      showToast("Cart cleared");
    });
  }
}

function addToCart(id, qty = 1) {
  const k = String(id);
  cart[k] = (cart[k] || 0) + qty;
  if (cart[k] <= 0) delete cart[k];
  updateCart();

  const p = products.find((x) => x.id === id);
  if (p) showToast(`Added: ${p.name}`);
}

function updateCart() {
  const items = $("cartItems");
  const totalEl = $("cartTotal");
  const countEl = $("cartCount");
  const checkoutBtn = $("cartCheckoutBtn");

  if (!items || !totalEl || !countEl) return;

  items.innerHTML = "";
  let total = 0;
  let count = 0;

  const entries = Object.entries(cart);

  // Always show progress at the top
  const subNow = cartSubtotal();
  upsertFreeShipProgress(items, subNow);

  if (entries.length === 0) {
    const empty = document.createElement("div");
    empty.className = "muted";
    empty.textContent = "Cart is empty.";
    items.appendChild(empty);

    totalEl.textContent = "";
    countEl.textContent = "0";
    if (checkoutBtn) checkoutBtn.classList.add("hidden");
    saveCart();

    if (typeof window.__bbtbRenderSummary === "function") window.__bbtbRenderSummary();
    return;
  }

  for (const [idStr, qty] of entries) {
    const p = products.find((x) => x.id === Number(idStr));
    if (!p) continue;

    count += qty;
    total += p.price * qty;

    const thumbSrc = p.images?.[0] || "";

    const row = document.createElement("div");
    row.className = "cartRow";
    row.innerHTML = `
      <div class="cartRowMain">
        <img class="cartThumb" src="${thumbSrc}" alt="${escapeHtml(p.name)}">

        <div class="cartRowText">
          <div class="cartRowTitle">${escapeHtml(p.name)}</div>
          <div class="muted">${money(p.price)} each</div>

          <div class="qtyControls">
            <button class="qtyBtn dec" type="button" aria-label="Decrease quantity">−</button>
            <div class="qtyPill" aria-label="Quantity">${qty}</div>
            <button class="qtyBtn inc" type="button" aria-label="Increase quantity">+</button>
            <button class="ghostBtn rm" type="button">Remove</button>
          </div>
        </div>
      </div>

      <div class="cartRowRight">
        <div class="cartLineTotal">${money(p.price * qty)}</div>
      </div>
    `;

    row.querySelector(".inc")?.addEventListener("click", () => {
      cart[idStr] = qty + 1;
      updateCart();
    });

    row.querySelector(".dec")?.addEventListener("click", () => {
      (qty - 1 <= 0) ? delete cart[idStr] : (cart[idStr] = qty - 1);
      updateCart();
    });

    row.querySelector(".rm")?.addEventListener("click", () => {
      delete cart[idStr];
      updateCart();
    });

    items.appendChild(row);
  }

  totalEl.textContent = "Total: " + money(total);
  countEl.textContent = String(count);
  if (checkoutBtn) checkoutBtn.classList.remove("hidden");

  saveCart();

  if (typeof window.__bbtbRenderSummary === "function") window.__bbtbRenderSummary();
}

/* ---------- Index page: grid + modal ---------- */
function indexInit() {
  const grid = $("productGrid");
  if (!grid) return;

  const modal = $("productModal");
  const back = $("modalBackdrop");
  const title = $("modalTitle");
  const hero = $("modalHero");
  const thumbs = $("thumbs");
  const prev = $("prevImg");
  const next = $("nextImg");
  const price = $("modalPrice");
  const addBtn = $("modalAddBtn");
  const fullLink = $("modalFullLink");

  const tabDesc = $("tab-desc");
  const tabDetails = $("tab-details");
  const tabReviews = $("tab-reviews");
  const tabs = [...document.querySelectorAll(".tab")];

  let current = null;
  let idx = 0;

  const setTab = (name) => {
    tabs.forEach((b) => b.classList.toggle("active", b.dataset.tab === name));
    tabDesc?.classList.toggle("hidden", name !== "desc");
    tabDetails?.classList.toggle("hidden", name !== "details");
    tabReviews?.classList.toggle("hidden", name !== "reviews");
  };

  const renderGallery = () => {
    if (!current) return;
    if (hero) hero.src = current.images[idx];
    if (!thumbs) return;

    thumbs.innerHTML = "";
    current.images.forEach((src, i) => {
      const t = document.createElement("img");
      t.className = "thumb" + (i === idx ? " active" : "");
      t.src = src;
      t.addEventListener("click", () => { idx = i; renderGallery(); });
      thumbs.appendChild(t);
    });
  };

  const openModal = (id) => {
    if (!modal || !back) return;
    current = products.find((p) => p.id === id);
    if (!current) return;

    idx = 0;

    if (title) title.textContent = current.name;
    if (price) price.textContent = money(current.price);

    if (tabDesc) tabDesc.innerHTML = formatLongText(current.description);
    if (tabDetails) {
      tabDetails.innerHTML = `<ul>${(current.details || []).map(d => `<li>${escapeHtml(d)}</li>`).join("")}</ul>`;
    }
    if (tabReviews) {
      tabReviews.innerHTML = (current.reviews || []).map(r => `
        <div class="review">
          <div class="reviewTop">
            <div>${escapeHtml(r.user)} <span class="muted">(${escapeHtml(r.date)})</span></div>
            <div>${stars(r.stars)}</div>
          </div>
          <div class="muted" style="margin-top:6px;">${escapeHtml(r.text)}</div>
        </div>
      `).join("");
    }

    if (fullLink) fullLink.href = `product.html?id=${current.id}`;
    if (addBtn) addBtn.onclick = () => addToCart(current.id, 1);

    renderGallery();
    setTab("desc");

    document.body.style.overflow = "hidden";
    back.classList.remove("hidden");
    modal.classList.remove("hidden");
  };

  const closeModal = () => {
    if (!modal || !back) return;
    back.classList.add("hidden");
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  };

  $("modalClose")?.addEventListener("click", closeModal);
  back?.addEventListener("click", closeModal);

  next?.addEventListener("click", () => {
    if (!current) return;
    idx = (idx + 1) % current.images.length;
    renderGallery();
  });

  prev?.addEventListener("click", () => {
    if (!current) return;
    idx = (idx - 1 + current.images.length) % current.images.length;
    renderGallery();
  });

  tabs.forEach((btn) => btn.addEventListener("click", () => setTab(btn.dataset.tab)));

  /* Render grid */
  grid.innerHTML = "";
  products.forEach((p) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="cardMeta">
        <span class="badge">${escapeHtml(p.theme)}</span>
        <span class="avail"><span class="availDot"></span>${escapeHtml(p.availability)}</span>
      </div>

      <img src="${p.images?.[0] || ""}" alt="${escapeHtml(p.name)}" class="productImg">

      <div class="cardBody">
        <h3 class="productTitle">${escapeHtml(p.name)}</h3>
        <p class="price">${money(p.price)}</p>
        <p class="cardDesc">${escapeHtml(p.short)}</p>

        <div class="cardActions">
          <div class="cardBtns">
            <button class="ghostBtn quickBtn" type="button">Quick View</button>
            <a class="primaryBtn linkBtn" href="product.html?id=${p.id}">View</a>
          </div>

          <button class="addBtn" type="button">Add to cart</button>
        </div>
      </div>
    `;

    card.querySelector(".addBtn")?.addEventListener("click", () => addToCart(p.id, 1));
    card.querySelector(".quickBtn")?.addEventListener("click", () => openModal(p.id));

    card.querySelector(".productImg")?.addEventListener("click", () => openModal(p.id));
    card.querySelector(".productTitle")?.addEventListener("click", () => openModal(p.id));

    grid.appendChild(card);
  });

  /* Keyboard */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();

    const isOpen = modal && !modal.classList.contains("hidden");
    if (!isOpen || !current) return;

    if (e.key === "ArrowRight") {
      idx = (idx + 1) % current.images.length;
      renderGallery();
    }
    if (e.key === "ArrowLeft") {
      idx = (idx - 1 + current.images.length) % current.images.length;
      renderGallery();
    }
  });
}

/* ---------- Product page ---------- */
function productPageInit() {
  const page = $("productPage");
  if (!page) return;

  const params = new URLSearchParams(location.search);
  const id = Number(params.get("id"));
  const p = products.find((x) => x.id === id) || products[0];
  if (!p) return;

  const crumb = $("crumbName");
  if (crumb) crumb.textContent = p.name;

  page.innerHTML = `
    <div class="productTop">
      <div>
        <div class="productMetaRow">
          <span class="badge">${escapeHtml(p.theme)}</span>
          <span class="avail"><span class="availDot"></span>${escapeHtml(p.availability)}</span>
        </div>

        <div class="pHeroWrap">
          <button class="navBtn" id="pPrev" type="button" aria-label="Previous image">‹</button>
          <img id="pageHero" alt="${escapeHtml(p.name)}"/>
          <button class="navBtn" id="pNext" type="button" aria-label="Next image">›</button>
        </div>

        <div id="pThumbs" class="thumbs pThumbs"></div>
      </div>

      <div class="productInfo">
        <h2>${escapeHtml(p.name)}</h2>

        <div class="buyRow">
          <div class="bigPrice">${money(p.price)}</div>
          <button id="pageAdd" class="primaryBtn" type="button">Add to cart</button>
        </div>

        <p class="productShort">${escapeHtml(p.short)}</p>

        <div class="tabs" role="tablist" aria-label="Product tabs">
          <button class="tab active" data-tab="desc" type="button" role="tab">Description</button>
          <button class="tab" data-tab="details" type="button" role="tab">Details</button>
          <button class="tab" data-tab="reviews" type="button" role="tab">Reviews</button>
        </div>

        <div class="tabPanel" id="p-desc"></div>
        <div class="tabPanel hidden" id="p-details"></div>
        <div class="tabPanel hidden" id="p-reviews"></div>
      </div>
    </div>
  `;

  const pDesc = $("p-desc");
  const pDetails = $("p-details");
  const pReviews = $("p-reviews");

  if (pDesc) pDesc.innerHTML = formatLongText(p.description);
  if (pDetails) {
    pDetails.innerHTML = `<ul>${(p.details || []).map(d => `<li>${escapeHtml(d)}</li>`).join("")}</ul>`;
  }
  if (pReviews) {
    pReviews.innerHTML = (p.reviews || []).map(r => `
      <div class="review">
        <div class="reviewTop">
          <div>${escapeHtml(r.user)} <span class="muted">(${escapeHtml(r.date)})</span></div>
          <div>${stars(r.stars)}</div>
        </div>
        <div class="muted" style="margin-top:6px;">${escapeHtml(r.text)}</div>
      </div>
    `).join("");
  }

  const tabs = [...page.querySelectorAll(".tab")];
  const setTab = (name) => {
    tabs.forEach((b) => b.classList.toggle("active", b.dataset.tab === name));
    pDesc?.classList.toggle("hidden", name !== "desc");
    pDetails?.classList.toggle("hidden", name !== "details");
    pReviews?.classList.toggle("hidden", name !== "reviews");
  };
  tabs.forEach((btn) => btn.addEventListener("click", () => setTab(btn.dataset.tab)));

  /* Gallery */
  let idx = 0;
  const hero = $("pageHero");
  const tWrap = $("pThumbs");

  const render = () => {
    if (!hero || !tWrap) return;
    hero.src = p.images[idx];
    tWrap.innerHTML = "";

    (p.images || []).forEach((src, i) => {
      const t = document.createElement("img");
      t.className = "thumb" + (i === idx ? " active" : "");
      t.src = src;
      t.addEventListener("click", () => { idx = i; render(); });
      tWrap.appendChild(t);
    });
  };

  $("pNext")?.addEventListener("click", () => { idx = (idx + 1) % p.images.length; render(); });
  $("pPrev")?.addEventListener("click", () => { idx = (idx - 1 + p.images.length) % p.images.length; render(); });

  render();

  $("pageAdd")?.addEventListener("click", () => addToCart(p.id, 1));
}

/* ---------- Checkout ---------- */
function checkoutInit() {
  const summary = $("summaryItems");
  if (!summary) return;

  const sumSubtotal = $("sumSubtotal");
  const sumShip = $("sumShipping");
  const sumTax = $("sumTax");
  const sumTotal = $("sumTotal");

  const shipStd = $("shipStandardPrice");
  const shipExp = $("shipExpressPrice");

  const form = $("checkoutForm");
  const msg = $("checkoutMsg");

  const cardFields = $("cardFields");
  const paypalFields = $("paypalFields");

  const calcSubtotal = () => cartSubtotal();

  const shippingCost = () => {
    const method = document.querySelector('input[name="shipMethod"]:checked')?.value || "standard";
    const subtotal = calcSubtotal();
    if (method === "standard") return subtotal >= FREE_SHIP_THRESHOLD ? 0 : 14.99;
    return 29.99;
  };

  const tax = (subtotal) => subtotal * 0.06;

  const renderSummary = () => {
    const entries = Object.entries(cart);

    if (entries.length === 0) {
      summary.innerHTML = `Your cart is empty. <a href="index.html">Shop products</a>.`;
      sumSubtotal.textContent = "$0.00";
      sumShip.textContent = "$0.00";
      sumTax.textContent = "$0.00";
      sumTotal.textContent = "$0.00";
      if (shipStd) shipStd.textContent = "$0.00";
      if (shipExp) shipExp.textContent = "$0.00";
      return;
    }

    // Build the items HTML first...
    summary.innerHTML = `
      <div class="sumItems">
        ${entries.map(([idStr, qty]) => {
          const p = products.find((x) => x.id === Number(idStr));
          if (!p) return "";
          return `
            <div class="sumItem">
              <div style="font-weight:900;">${escapeHtml(p.name)}</div>
              <div class="muted">Qty: ${qty}</div>
              <div style="font-weight:900; margin-left:auto;">${money(p.price * qty)}</div>
            </div>
          `;
        }).join("")}
      </div>
    `;

    // ...then inject the progress bar above it (prepends)
    upsertFreeShipProgress(summary, calcSubtotal());

    const sub = calcSubtotal();
    const ship = shippingCost();
    const tx = tax(sub);
    const tot = sub + ship + tx;

    sumSubtotal.textContent = money(sub);
    sumShip.textContent = money(ship);
    sumTax.textContent = money(tx);
    sumTotal.textContent = money(tot);

    // Display "Free" instead of $0.00 for Standard when unlocked
    if (shipStd) shipStd.textContent = sub >= FREE_SHIP_THRESHOLD ? "Free" : money(14.99);
    if (shipExp) shipExp.textContent = money(29.99);
  };

  // Expose for updateCart() to call
  window.__bbtbRenderSummary = renderSummary;

  const updatePayUI = () => {
    const method = document.querySelector('input[name="payMethod"]:checked')?.value || "card";
    const usePaypal = method === "paypal";

    cardFields?.classList.toggle("hidden", usePaypal);
    paypalFields?.classList.toggle("hidden", !usePaypal);

    ["cardNumber", "cardName", "cardExp", "cardCvv"].forEach((id) => {
      const el = $(id);
      if (el) el.required = !usePaypal;
    });
  };

  document.querySelectorAll('input[name="shipMethod"]').forEach((r) =>
    r.addEventListener("change", renderSummary)
  );
  document.querySelectorAll('input[name="payMethod"]').forEach((r) =>
    r.addEventListener("change", updatePayUI)
  );
  updatePayUI();

  /* Input formatting */
  const cardNumber = $("cardNumber");
  const cardExp = $("cardExp");
  const cardCvv = $("cardCvv");

  const onlyDigits = (v) => String(v || "").replace(/\D/g, "");

  cardNumber?.addEventListener("input", () => {
    let v = onlyDigits(cardNumber.value).slice(0, 16);
    cardNumber.value = v.replace(/(\d{4})(?=\d)/g, "$1 ");
  });

  cardExp?.addEventListener("input", () => {
    let v = onlyDigits(cardExp.value).slice(0, 4);
    if (v.length >= 3) v = v.slice(0, 2) + "/" + v.slice(2);
    cardExp.value = v;
  });

  cardCvv?.addEventListener("input", () => {
    cardCvv.value = onlyDigits(cardCvv.value).slice(0, 4);
  });

  form?.addEventListener("submit", (e) => {
    e.preventDefault();

    if (Object.keys(cart).length === 0) {
      if (msg) msg.textContent = "Your cart is empty.";
      return;
    }

    const email = $("email")?.value?.trim() || "";
    const order = "BBTB-" + Math.random().toString(36).slice(2, 8).toUpperCase();

    const orderNumber = $("orderNumber");
    const orderEmail = $("orderEmail");
    if (orderNumber) orderNumber.textContent = order;
    if (orderEmail) orderEmail.textContent = email || "your email";

    form.classList.add("hidden");
    $("confirmation")?.classList.remove("hidden");

    cart = {};
    saveCart();
    updateCart(); // triggers cart UI + summary refresh
    showToast("Order placed");
  });

  renderSummary();
}

/* ---------- Boot ---------- */
function init() {
  cart = loadCart();
  menuInit();
  cartInit();
  updateCart();
  indexInit();
  productPageInit();
  checkoutInit();
}

init();
