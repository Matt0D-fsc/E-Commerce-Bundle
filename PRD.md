# Product Requirements Document (PRD): Maison Headless Storefront

## 1. Executive Summary
Maison is an artisanal, luxury Italian leather footwear and accessories brand. This project transforms the static, client-side storefront mockup of Maison into a high-performance, fully production-ready headless e-commerce architecture. 

By utilizing **Next.js**, **Payload CMS v3**, and **MedusaJS v2** backed by a cloud-managed **Supabase PostgreSQL database**, the solution provides high-speed page delivery, flexible marketing controls, and a fully functional commerce engine while keeping local infrastructure simple and lightweight.

---

## 2. Current vs. Target State

### Current State
*   **Frontend**: Static HTML pages (`index.html`, `product.html`, `checkout.html`) with styled-CSS and vanilla Javascript.
*   **Product Data**: Static array in [data.js](file:///c:/Users/Antar/Downloads/Maison/js/data.js).
*   **Shopping Cart**: Stored locally in `localStorage` via [cart.js](file:///c:/Users/Antar/Downloads/Maison/js/cart.js).
*   **Checkout**: Static inputs without server validation, payment processing, or order recording.

### Target Headless Architecture
*   **Storefront & CMS (Unified Next.js Server)**:
    *   Next.js 15 App Router handles server-side rendering (SSR), search engine optimization (SEO), dynamic routing, and high-fidelity custom animations.
    *   Payload CMS v3 is embedded inside Next.js at `/admin`, allowing editors to build rich merchandising landing pages.
*   **E-Commerce Core (MedusaJS v2 Backend)**:
    *   A Node-based commerce engine managing products, variations, tax rates, shipping profiles, custom discounts, and the checkout state machine.
    *   Admin dashboard for operations, order processing, and customer support.
*   **Database (Supabase Cloud PostgreSQL)**:
    *   A single Supabase project serving both applications.
    *   **Public Schema (`public`)**: MedusaJS tables (customers, orders, inventory, transactions).
    *   **Payload Schema (`payload`)**: CMS content tables (editorial pages, layout blocks, media).

---

## 3. Work Completed to Date

1.  **Git Configuration & Sync**:
    *   Initialized Git in the root project directory.
    *   Created default branch `main`.
    *   Pushed initial static files to the GitHub repository: `https://github.com/Matt0D-fsc/E-Commerce-Bundle.git`.
2.  **Supabase Database Provisioning**:
    *   Created a new Supabase project named **`Maison`** (ref: `ufkvpxxxvkzmqijbckrg`) in the Singapore (`ap-southeast-1`) region under the `NB-Mathin` organization.
    *   Created a secure custom database role `maison_admin` (`MaisonSecureDB2026!`) with `CREATEDB` and schema modification privileges.
    *   Created the custom `payload` PostgreSQL schema to isolate CMS tables from the public Medusa tables.
3.  **MedusaJS Scaffolding (In Progress)**:
    *   Started the backend scaffolding under `backend/` using `create-medusa-app`.

---

## 4. Architectural Integration & Sync Flows

### Product Catalog Sync (Medusa-First)
```mermaid
sequenceDiagram
    actor Admin as Store Administrator
    participant Medusa as MedusaJS v2 (backend/)
    participant SyncSub as Product Sync Subscriber
    participant Payload as Payload CMS (storefront/)

    Admin->>Medusa: Create / Update Product
    Medusa->>SyncSub: Emit product.created / product.updated
    SyncSub->>Payload: Call Local / REST API to Upsert Product Doc
    Note over Payload: Product is indexed in CMS for Merchandising
```

### Page Assembly (Next.js Dynamic Fetching)
*   **Home/Campaign Pages**: Next.js fetches layout structures from Payload (Hero banners, editorial copy, product grids).
*   **Product Detail Pages**: Next.js loads the visual assets and copywriting from Payload CMS, and queries MedusaJS in real-time to fetch active pricing, color/size dropdowns, and stock availability.
*   **Cart & Checkout**: Handled purely via the client-side Medusa JS SDK, communicating with the `/store` routes on the Medusa server.

---

## 5. Technical Requirements & Setup Guide

### Environment Settings

#### Medusa Backend (`backend/.env`)
```env
PORT=9000
DATABASE_URL=postgresql://maison_admin:MaisonSecureDB2026!@db.ufkvpxxxvkzmqijbckrg.supabase.co:5432/postgres?sslmode=require
REDIS_URL=redis://localhost:6379 # Optional for cache/queue, default is memory
STORE_CORS=http://localhost:3000
ADMIN_CORS=http://localhost:7001,http://localhost:9000
JWT_SECRET=maison_jwt_secret_token
COOKIE_SECRET=maison_cookie_secret_token
```

#### Next.js Storefront & CMS (`storefront/.env.local`)
```env
PORT=3000
DATABASE_URI=postgresql://maison_admin:MaisonSecureDB2026!@db.ufkvpxxxvkzmqijbckrg.supabase.co:5432/postgres?sslmode=require&currentSchema=payload
PAYLOAD_SECRET=maison_payload_secret_key
NEXT_PUBLIC_MEDUSA_URL=http://localhost:9000
```

### Running Locally
*   **Backend Server**: Run `npm run dev` in `backend/` (running on port 9000).
*   **Storefront & Admin**: Run `npm run dev` in `storefront/` (running on port 3000). Storefront is served at `http://localhost:3000`, CMS editor is served at `http://localhost:3000/admin`.
