import Script from 'next/script';

export default function Home() {
  return (
    <>
      <div className="cursor" id="cursor"></div>
      <div className="cursor-ring" id="cursorRing"></div>

      {/* NAV */}
      <nav id="mainNav">
        <a href="#" className="nav-logo">Maison <span>Ismahal</span></a>
        <ul className="nav-links">
          <li><a href="#collections">Collections</a></li>
          <li><a href="#craft">Atelier</a></li>
          <li><a href="#editorial">Boutique</a></li>
          <li><a href="#provenance">Maison</a></li>
        </ul>
        <div className="nav-actions">
          <button>Account</button>
          <button className="cart-btn" id="openCartBtn">
            Atelier Cart
            <span className="cart-count" id="cartCount">2</span>
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-left">
          <div className="hero-texture"></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p className="hero-eyebrow">Milano · Firenze · Napoli — Est. MMXII</p>
            <h1 className="hero-title">
              Crafted<br />
              <em>by hand,</em><br />
              worn for<br />
              generations.
            </h1>
            <p className="hero-subtitle">
              Each piece emerges from the same Florentine ateliers that dressed 
              the <strong style={{ color: 'var(--tan)', fontWeight: 400 }}>Medici</strong>. 
              Full-grain leather selected by our maestri, 
              stitched with <strong style={{ color: 'var(--tan)', fontWeight: 400 }}>linen thread</strong> 
              in the Goodyear tradition.
            </p>
            <div className="hero-cta">
              <button className="btn-primary" id="discoverBtn">
                Discover the Collection
              </button>
              <button className="btn-ghost" id="atelierBtn">
                Our Atelier
              </button>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-img-main" style={{ background: 'var(--espresso)', position: 'relative' }}>
            <img src="/assets/hero_derby.png" alt="Il Derby Fiorentino" className="img-luxe" style={{ objectFit: 'cover' }} />
            <div className="img-overlay-gradient"></div>
            
            {/* Hotspots */}
            <div className="hotspot" style={{ top: '60%', left: '35%' }}>
              <div className="hotspot-card">
                <div className="hotspot-title">Florentine Calfskin</div>
                <div className="hotspot-desc">Hand-selected full-grain calfskin, vegetable tanned in Santa Croce sull'Arno for a rich, breathing patina.</div>
              </div>
            </div>
            <div className="hotspot" style={{ top: '75%', left: '55%' }}>
              <div className="hotspot-card">
                <div className="hotspot-title">Goodyear Welt</div>
                <div className="hotspot-desc">240 hand-locked stitches bind the upper, welt, and insole, ensuring a lifetime of resoling.</div>
              </div>
            </div>
            <div className="hotspot" style={{ top: '45%', left: '45%' }}>
              <div className="hotspot-card">
                <div className="hotspot-title">Waxed Linen Thread</div>
                <div className="hotspot-desc">Natural linen thread, hand-waxed by our Neapolitan maestri for unparalleled strength and elegance.</div>
              </div>
            </div>
          </div>

          <div className="hero-label">
            <div className="hero-label-title">Il Derby Fiorentino</div>
            <div className="hero-label-sub">Full-Grain Florentine Calfskin · Goodyear Welt</div>
            <div className="hero-label-price">€ 895</div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-strip">
        <div className="marquee-inner">
          <span className="marquee-item">Full-Grain Florentine Leather</span>
          <span className="marquee-item">Goodyear Welt Construction</span>
          <span className="marquee-item">Hand-Stitched in Napoli</span>
          <span className="marquee-item">Vegetable-Tanned Patina</span>
          <span className="marquee-item">Made in Italia</span>
          <span className="marquee-item">Full-Grain Florentine Leather</span>
          <span className="marquee-item">Goodyear Welt Construction</span>
          <span className="marquee-item">Hand-Stitched in Napoli</span>
          <span className="marquee-item">Vegetable-Tanned Patina</span>
          <span className="marquee-item">Made in Italia</span>
        </div>
      </div>

      {/* COLLECTIONS */}
      <section className="collections" id="collections">
        <div className="section-header reveal">
          <div>
            <p className="section-eyebrow">La Collezione — AW 2025</p>
            <h2 className="section-title">Where leather<br /><em>becomes legend</em></h2>
          </div>
          <a href="#" className="section-link">View All Pieces</a>
        </div>

        <div className="collections-grid">
          <div className="coll-card reveal">
            <div className="coll-visual" style={{ height: '680px' }}>
              <a href="/product/derby" style={{ display: 'contents' }}>
                <img src="/assets/hero_derby.png" alt="Il Derby Fiorentino" className="img-luxe" />
                <div className="img-overlay-gradient"></div>
              </a>
              <div className="coll-info">
                <div className="coll-meta">La Collezione Principale · Oxford</div>
                <div className="coll-name">Il Derby Fiorentino</div>
                <div className="coll-price">€ 895</div>
              </div>
            </div>
          </div>

          <div className="coll-card reveal reveal-delay-1">
            <div className="coll-visual">
              <a href="/product/loafer" style={{ display: 'contents' }}>
                <img src="/assets/loafer_romano.png" alt="Il Morsetto Romano" className="img-luxe" />
                <div className="img-overlay-gradient"></div>
              </a>
              <div className="coll-info">
                <div className="coll-meta">Penny Loafer · Vitello</div>
                <div className="coll-name">Il Morsetto Romano</div>
                <div className="coll-price">€ 720</div>
              </div>
            </div>
          </div>

          <div className="coll-card reveal reveal-delay-2">
            <div className="coll-visual">
              <a href="/product/belt" style={{ display: 'contents' }}>
                <img src="/assets/cintura_milano.png" alt="La Cintura Milano" className="img-luxe" />
                <div className="img-overlay-gradient"></div>
              </a>
              <div className="coll-info">
                <div className="coll-meta">Cintura · Full-Grain</div>
                <div className="coll-name">La Cintura Milano</div>
                <div className="coll-price">€ 285</div>
              </div>
            </div>
          </div>

          <div className="coll-card reveal reveal-delay-1">
            <div className="coll-visual">
              <a href="/product/weekender" style={{ display: 'contents' }}>
                <img src="/assets/weekender_bag.png" alt="Il Viaggio Veneziano" className="img-luxe" />
                <div className="img-overlay-gradient"></div>
              </a>
              <div className="coll-info">
                <div className="coll-meta">Borsa da Viaggio · Cuoio</div>
                <div className="coll-name">Il Viaggio Veneziano</div>
                <div className="coll-price">€ 1,480</div>
              </div>
            </div>
          </div>

          <div className="coll-card reveal reveal-delay-2">
            <div className="coll-visual">
              <a href="/product/brogue" style={{ display: 'contents' }}>
                <img src="/assets/brogue_shoe.png" alt="Il Brogue Britannico" className="img-luxe" />
                <div className="img-overlay-gradient"></div>
              </a>
              <div className="coll-info">
                <div className="coll-meta">Full Brogue · Vitello Verde</div>
                <div className="coll-name">Il Brogue Britannico</div>
                <div className="coll-price">€ 945</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROVENANCE */}
      <section className="provenance" id="provenance">
        <div className="prov-left">
          <p className="prov-eyebrow reveal">L'Arte del Cuoio</p>
          <h2 className="prov-title reveal">Born in the<br /><em>tanneries</em><br />of Tuscany.</h2>
          <p className="prov-body reveal reveal-delay-1">
            The journey of every Maison Ismahal piece begins in the <strong>Santa Croce sull'Arno</strong> district of Tuscany — the most celebrated leather-producing region on earth. Our hides are sourced from <strong>a single, third-generation tannery</strong>, selected for their commitment to the ancient art of vegetable tanning.
          </p>
          <p className="prov-body reveal reveal-delay-1" style={{ marginTop: '12px' }}>
            This centuries-old process uses natural tannins — oak bark, chestnut, quebracho — instead of chromium. It takes <strong>sixty days</strong> instead of one. The result is a leather that breathes, molds to your foot, and develops a patina uniquely yours.
          </p>
          <div className="prov-stats reveal reveal-delay-2">
            <div className="stat-block">
              <div className="stat-num">60</div>
              <div className="stat-label">Days to tan each hide</div>
            </div>
            <div className="stat-block">
              <div className="stat-num">240</div>
              <div className="stat-label">Hand stitches per shoe</div>
            </div>
            <div className="stat-block">
              <div className="stat-num">3</div>
              <div className="stat-label">Generations of craft</div>
            </div>
          </div>
        </div>

        <div className="prov-right">
          <img src="/assets/tuscany_leather.png" alt="Tuscan Leather Tannery" className="img-luxe" style={{ position: 'absolute', inset: 0 }} />
          <div className="img-overlay-gradient"></div>
        </div>
      </section>

      {/* EDITORIAL / BOUTIQUE */}
      <section className="editorial" id="editorial">
        <div className="editorial-intro">
          <p className="section-eyebrow reveal">La Boutique</p>
          <h2 className="section-title reveal">Every piece,<br /><em>a narrative.</em></h2>
          <p className="craft-body reveal" style={{ marginTop: '20px' }}>
            We don't sell shoes. We offer heirlooms with appointment times. Each model carries a story — a geography, a technique, a name that means something.
          </p>
        </div>

        <div className="editorial-scroll">
          <div className="ed-card">
            <div className="ed-visual bg-derby">
              <img src="/assets/hero_derby.png" alt="Il Derby Fiorentino" className="img-luxe" style={{ position: 'absolute', inset: 0 }} />
            </div>
            <div className="ed-card-info">
              <div className="ed-tag">Oxford · Full-Grain Calfskin · Goodyear Welt</div>
              <div className="ed-name">Il Derby<br />Fiorentino</div>
              <div className="ed-sub">Firenze · Handcrafted 2025</div>
              <div className="ed-footer">
                <div className="ed-price">€ 895</div>
                <button className="add-btn cart-add" data-id="derby">Add to Atelier</button>
              </div>
            </div>
          </div>

          <div className="ed-card">
            <div className="ed-visual bg-loafer">
              <img src="/assets/loafer_romano.png" alt="Il Morsetto Romano" className="img-luxe" style={{ position: 'absolute', inset: 0 }} />
            </div>
            <div className="ed-card-info">
              <div className="ed-tag">Horsebit Loafer · Vitello Liscio</div>
              <div className="ed-name">Il Morsetto<br />Romano</div>
              <div className="ed-sub">Roma · Handcrafted 2025</div>
              <div className="ed-footer">
                <div className="ed-price">€ 720</div>
                <button className="add-btn cart-add" data-id="loafer">Add to Atelier</button>
              </div>
            </div>
          </div>

          <div className="ed-card">
            <div className="ed-visual bg-brogue">
              <img src="/assets/brogue_shoe.png" alt="Il Brogue Britannico" className="img-luxe" style={{ position: 'absolute', inset: 0 }} />
            </div>
            <div className="ed-card-info">
              <div className="ed-tag">Full Brogue · Vitello Verde Inglese</div>
              <div className="ed-name">Il Brogue<br />Britannico</div>
              <div className="ed-sub">Napoli · Handcrafted 2025</div>
              <div className="ed-footer">
                <div className="ed-price">€ 945</div>
                <button className="add-btn cart-add" data-id="brogue">Add to Atelier</button>
              </div>
            </div>
          </div>

          <div className="ed-card">
            <div className="ed-visual bg-weekender">
              <img src="/assets/weekender_bag.png" alt="Il Viaggio Veneziano" className="img-luxe" style={{ position: 'absolute', inset: 0 }} />
            </div>
            <div className="ed-card-info">
              <div className="ed-tag">Borsa Weekender · Cuoio Naturale</div>
              <div className="ed-name">Il Viaggio<br />Veneziano</div>
              <div className="ed-sub">Venezia · Handcrafted 2025</div>
              <div className="ed-footer">
                <div className="ed-price">€ 1,480</div>
                <button className="add-btn cart-add" data-id="weekender">Add to Atelier</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRAFT */}
      <section className="craft" id="craft">
        <div className="craft-visual">
          <div className="craft-main-img">
            <img src="/assets/atelier_craft.png" alt="Master Craftsman" className="img-luxe" style={{ position: 'absolute', inset: 0 }} />
            <div className="img-overlay-gradient"></div>
          </div>
          <div className="craft-accent">
            <div className="craft-quote">
              "La pelle non mente.<br />Ogni segno è una storia."
              <cite>— Marco Ferrante, Maestro Calzolaio, Napoli</cite>
            </div>
          </div>
        </div>

        <div className="craft-content">
          <p className="section-eyebrow reveal">L'Atelier Ismahal</p>
          <h2 className="craft-title reveal">The old way<br />is the <em>only way</em>.</h2>
          <p className="craft-body reveal">
            Our workshop in <strong>Via dei Tribunali, Napoli</strong> has been producing hand-lasted footwear since our founding maestro, Salvatore Ismahal, apprenticed under the great <strong>Vincenzo Tramontano</strong> in the 1970s.
          </p>
          <p className="craft-body reveal reveal-delay-1">
            We still use his original <strong>wooden lasts</strong> — turned from hornbeam, seasoned for a decade, shaped to the proportions of the ideal Neapolitan foot. We produce fewer than <strong>800 pairs per year</strong>. Every single one is signed.
          </p>

          <div className="craft-steps reveal reveal-delay-2">
            <div className="craft-step">
              <div className="step-num">01</div>
              <div className="step-info">
                <div className="step-title">Leather Selection & Skiving</div>
                <div className="step-desc">Each hide is hand-examined, graded, and skived to consistent thickness. Only the central 60% of each hide is used — the choicest grain.</div>
              </div>
            </div>
            <div className="craft-step">
              <div className="step-num">02</div>
              <div className="step-info">
                <div className="step-title">Hand-Lasting to Wooden Forms</div>
                <div className="step-desc">The upper is wet-lasted over our original hornbeam lasts using bone tools, stretched by hand — never by machine — to perfect the silhouette.</div>
              </div>
            </div>
            <div className="craft-step">
              <div className="step-num">03</div>
              <div className="step-info">
                <div className="step-title">Goodyear Welt Stitching</div>
                <div className="step-desc">240 stitches of waxed linen thread bind upper, welt, and insole. This single seam allows full resoling — your shoes can outlive you.</div>
              </div>
            </div>
            <div className="craft-step">
              <div className="step-num">04</div>
              <div className="step-info">
                <div className="step-title">Finishing & Patination</div>
                <div className="step-desc">Each shoe receives seven coats of hand-applied wax and polish, burnished with horsehair brushes and a final chamois cloth. Then, your pair number is stamped in gold.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="nav-logo" style={{ fontSize: '28px', color: 'var(--alabaster)' }}>Maison <span>Ismahal</span></a>
            <p className="footer-tagline">
              "Leather is not a material. It is a memory. It records every step, every journey, every story. We exist to give you something worth remembering."
            </p>
          </div>
          <div>
            <p className="footer-col-title">Collezione</p>
            <ul className="footer-links">
              <li><a href="#">Oxford & Derby</a></li>
              <li><a href="#">Loafer & Moccasin</a></li>
              <li><a href="#">Brogue & Wing</a></li>
              <li><a href="#">Belts & Cinture</a></li>
              <li><a href="#">Borse da Viaggio</a></li>
              <li><a href="#">Bespoke Service</a></li>
            </ul>
          </div>
          <div>
            <p className="footer-col-title">La Maison</p>
            <ul className="footer-links">
              <li><a href="#">Our Atelier</a></li>
              <li><a href="#">The Maestri</a></li>
              <li><a href="#">Provenance</a></li>
              <li><a href="#">Care & Resoling</a></li>
              <li><a href="#">Stockists</a></li>
            </ul>
          </div>
          <div>
            <p className="footer-col-title">Servizio</p>
            <ul className="footer-links">
              <li><a href="#">Size Guide</a></li>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">Private Appointments</a></li>
              <li><a href="#">Gift Wrapping</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© 2025 Maison Ismahal S.r.l. — Milano · Firenze · Napoli — All rights reserved.</p>
          <p className="footer-made">Crafted with the same patience as our shoes.</p>
        </div>
      </footer>

      {/* CART OVERLAY */}
      <div className="cart-overlay" id="cartOverlay">
        <div className="cart-panel">
          <div className="cart-header">
            <h2 className="cart-title">Il Tuo Atelier</h2>
            <button className="cart-close" id="closeCartBtn">✕</button>
          </div>

          <div className="cart-items" id="cartItems">
            <div className="cart-item">
              <div className="cart-item-visual bg-derby" style={{ aspectRatio: 1 }}>
                <img src="/assets/hero_derby.png" alt="Derby Thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <div className="cart-item-name">Il Derby Fiorentino</div>
                <div className="cart-item-meta">Size 43 EU · Cognac Tan</div>
              </div>
              <div className="cart-item-price">€ 895</div>
            </div>

            <div className="cart-item">
              <div className="cart-item-visual bg-loafer" style={{ aspectRatio: 1 }}>
                <img src="/assets/loafer_romano.png" alt="Loafer Thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <div className="cart-item-name">Il Morsetto Romano</div>
                <div className="cart-item-meta">Size 42 EU · Oxblood</div>
              </div>
              <div className="cart-item-price">€ 720</div>
            </div>
          </div>

          <div className="cart-footer">
            <div className="cart-total-row">
              <span className="cart-total-label">Total — 2 Pieces</span>
              <span className="cart-total-amount" id="cartTotal">€ 1,615</span>
            </div>
            <button className="checkout-btn" onClick={() => window.location.href='/checkout'}>Proceed to Checkout</button>
            <p className="cart-note">Complimentary dust bags · Worldwide insured delivery · Certificate of authenticity</p>
          </div>
        </div>
      </div>

      <Script src="/js/data.js" strategy="lazyOnload" />
      <Script src="/js/cart.js" strategy="lazyOnload" />
      <Script src="/js/app.js" strategy="lazyOnload" />
    </>
  );
}
