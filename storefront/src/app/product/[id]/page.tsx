import { getUnifiedProducts } from '@/lib/products';
import Script from 'next/script';
import Link from 'next/link';

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const products = await getUnifiedProducts();
  const product = products.find(p => p.handle === id || p.id === id) || products[0];

  return (
    <>
      <div className="cursor" id="cursor"></div>
      <div className="cursor-ring" id="cursorRing"></div>

      <nav id="mainNav" style={{ position: 'relative', background: 'var(--espresso)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <Link href="/" className="nav-logo" style={{ color: 'var(--alabaster)' }}>Maison <span style={{ color: 'var(--tan)' }}>Ismahal</span></Link>
        <ul className="nav-links">
          <li><Link href="/#collections" style={{ color: 'var(--alabaster)' }}>Collections</Link></li>
          <li><Link href="/#craft" style={{ color: 'var(--alabaster)' }}>Atelier</Link></li>
          <li><Link href="/#editorial" style={{ color: 'var(--alabaster)' }}>Boutique</Link></li>
        </ul>
        <div className="nav-actions">
          <button className="cart-btn" id="openCartBtn" style={{ color: 'var(--alabaster)', borderColor: 'var(--alabaster)' }}>
            Atelier Cart
            <span className="cart-count" id="cartCount">2</span>
          </button>
        </div>
      </nav>

      <section style={{ padding: '100px 5vw', maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
        <div style={{ position: 'relative', background: 'var(--espresso)', borderRadius: '4px', overflow: 'hidden', height: '640px', boxShadow: '0 30px 60px rgba(26,16,8,0.15)' }}>
          <img src={product.thumbnail} alt={product.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div className="img-overlay-gradient"></div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p className="section-eyebrow" style={{ marginBottom: '16px', color: 'var(--saddle)', letterSpacing: '0.4em' }}>{product.subtitle}</p>
          <h1 className="hero-title" style={{ fontSize: '56px', lineHeight: 1.05, marginBottom: '24px', color: 'var(--espresso)', opacity: 1, animation: 'none' }}>{product.title}</h1>
          <div style={{ fontSize: '32px', fontFamily: 'var(--serif)', color: 'var(--saddle)', marginBottom: '32px', fontWeight: 500 }}>{product.price}</div>

          <p style={{ color: 'var(--charcoal)', fontSize: '15px', lineHeight: 1.9, marginBottom: '40px', fontWeight: 300, letterSpacing: '0.02em' }}>
            {product.description || "Each piece emerges from our Neapolitan atelier, hand-crafted using traditional vegetable-tanned calfskin and 240 Goodyear welt stitches."}
          </p>

          <div style={{ display: 'flex', gap: '16px' }}>
            <button className="btn-primary cart-add" data-id={product.id} style={{ padding: '20px 40px', flex: 1, fontSize: '10px', letterSpacing: '0.3em' }}>
              Add to Atelier Cart — {product.price}
            </button>
          </div>

          {product.marketingDescription && (
            <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid rgba(139,92,42,0.15)' }}>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: '24px', marginBottom: '16px', color: 'var(--espresso)', fontStyle: 'italic' }}>Editorial Notes</h3>
              <div style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 1.7 }}>
                {typeof product.marketingDescription === 'string' ? product.marketingDescription : 'Hand-crafted in limited quantities.'}
              </div>
            </div>
          )}
        </div>
      </section>

      <Script src="/js/data.js" strategy="lazyOnload" />
      <Script src="/js/cart.js" strategy="lazyOnload" />
      <Script src="/js/app.js" strategy="lazyOnload" />
    </>
  );
}
