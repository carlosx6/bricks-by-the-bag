// =========================
// Bricks by the Bag
// includes.js
// Loads shared footer safely
// =========================

async function loadFooter() {
  const slot = document.getElementById("siteFooter");
  if (!slot) return;

  try {
    const response = await fetch("footer.html", {
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error("Failed to load footer");
    }

    slot.innerHTML = await response.text();
  } catch (err) {
    // Fallback footer so the site never looks broken
    slot.innerHTML = `
      <footer class="miniFooter">
        <div class="container footerBar">
          <div class="muted">
            Copyright © 2026 Bricks by the Bag. All rights reserved.
          </div>
        </div>
      </footer>
    `;
  }
}

// Run immediately
loadFooter();
