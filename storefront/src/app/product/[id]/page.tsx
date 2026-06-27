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
        <Link href="/" className="nav-logo">Maison <span>Ismahal</span></Link>
        <ul className="nav-links">
          <li><Link href="/#collections">Collections</Link></li>
          <li><Link href="/#craft">Atelier</Link></li>
          <li><Link href="/#editorial">Boutique</Link></li>
        </ul>
        <div className="nav-actions">
          <button className="cart-btn" id="openCartBtn">
            Atelier Cart
            <span className="cart-count" id="cartCount">2</span>
          </button>
        </div>
      </nav>

      <section style={{ padding: '80px 5vw', maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
        <div style={{ position: 'relative', background: 'var(--espresso)', borderRadius: '4px', overflow: 'hidden', height: '600px' }}>
          <img src={product.thumbnail} alt={product.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p className="section-eyebrow" style={{ marginBottom: '12px' }}>{product.subtitle}</p>
          <h1 className="hero-title" style={{ fontSize: '48px', lineHeight: 1.1, marginBottom: '24px' }}>{product.title}</h1>
          <div style={{ fontSize: '28px', fontFamily: 'Cormorant Garamond', color: 'var(--gold)', marginBottom: '32px' }}>{product.price}</div>

          <p style={{ color: 'var(--cream)', fontSize: '16px', lineHeight: 1.7, marginBottom: '40px' }}>
            {product.description || "Each piece emerges from our Neapolitan atelier, hand-crafted using traditional vegetable-tanned calfskin and 240 Goodyear welt stitches."}
          </p>

          <div style={{ display: 'flex', gap: '16px' }}>
            <button className="btn-primary cart-add" data-id={product.id} style={{ padding: '18px 40px', flex: 1 }}>
              Add to Atelier Cart — {product.price}
            </button>
          </div>

          {product.marketingDescription && (
            <div style={{ marginTop: '40px', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ fontFamily: 'Cormorant Garamond', fontSize: '22px', marginBottom: '16px' }}>Editorial Notes</h3>
              <div style={{ color: 'var(--tan)', fontSize: '15px', lineHeight: 1.6 }}>
                {JSON.stringify(product.marketingDescription)}
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
