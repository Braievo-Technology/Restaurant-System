# 🍽️ Restaurant System Web V1

A full-featured restaurant web system built with **Next.js**, **Prisma**, and **SQL**. This application allows users to browse restaurants and menus, make reservations and online orders, and scan QR codes for table-side ordering. Admins can manage content, orders, and feedback via a secure dashboard.

---

## 📌 Features

### 👥 Customer-Facing Features
- Browse restaurants and real-time menus
- Make online orders with live availability
- Reserve tables (free or paid based on minimum order)
- Track orders (Accepted → Preparing → Ready → Delivered)
- Scan QR code for contactless table ordering
- View promotions, loyalty programs, and use gift cards
- Multi-currency payments: LKR, USD, GBP, EUR, AUD
- Payment support: Card, Bank (HelaPay, LankaPay), Mobile wallets (Frimi, iPay, Genie)

### 🛠️ Admin Panel Features
- Manage homepage content, menus, and media
- Approve/reject pre-orders and reservations
- Track and update order statuses
- View and moderate feedback
- Assign waiters based on table zones and load

---

## ⚙️ Tech Stack

| Layer             | Tech                             |
|------------------|----------------------------------|
| Frontend         | Next.js, Tailwind CSS            |
| Backend          | Next.js API Routes / Express     |
| ORM / DB         | Prisma, PostgreSQL or MySQL      |
| Auth             | NextAuth or JWT                  |
| Realtime         | WebSockets / Socket.IO (for KDS) |
| QR Integration   | Dynamic QR Codes via Routing     |
| Payment Gateway  | Stripe / Custom Gateway API      |

---

## 🧩 Modules Overview

### QR Code Table Ordering
- Each table has a QR: `/qr?table=01`
- Scanning opens today’s live menu
- Customer places order → sent to kitchen
- Waiter is auto-assigned
- Order status updates in real time

### Pre-Reservation Workflow
- Customer checks availability by date/time
- Free reservation if minimum order is met
- Paid reservation otherwise
- Multi-stage reminders (1 day, 2 hrs, 30 mins)

### Order Now Flow
- Select date/time, restaurant, and dishes
- Choose dine-in/collect/delivery
- Preview bill and pay
- Realtime kitchen + admin notification

---

## 🔒 Security Features
- Encrypted QR codes with signed table IDs
- Admin login protection with rate limits
- SQL Injection and XSS prevention via Prisma
- GPS boundary (optional) for QR order validation

---



## 🌿 Branch Naming Convention

To maintain a clean and organized git history, all branches should follow the naming convention below:


### 🔧 Allowed Types
- `feature` – New features or functionality
- `bugfix` – Fixing a bug or issue
- `hotfix` – Urgent fixes that go directly to production
- `chore` – Routine tasks (e.g., updating dependencies)
- `refactor` – Code improvements without changing functionality
- `test` – Adding or improving tests
- `doc` – Documentation updates
- `task` – Generic task that doesn't fit other categories (e.g., research, setup, planning)








### 1. Clone the Repository

```bash
git clone https://github.com/your-org/restaurant-system-web.git
cd restaurant-system-web
