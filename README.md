# 📰 News & Payout Dashboard

A modern, offline-first, responsive dashboard built with **Next.js** that displays live news articles and includes a powerful **admin panel** for calculating article payouts, filtering data, visualizing trends, and exporting reports.

---

## ✨ Key Features

### 🔐 Authentication
- Role-based mock login (Admin/User).
- Secure and responsive login UI.

### 🗞️ Dynamic News Feed
- Fetches live articles using a third-party News API.
- Displays news cards with image, author, date, and category.

### 📊 Admin Dashboard
- **Payout Calculator**: Admins set a per-article rate to calculate author earnings.
- **Charts**: Visual analytics of article distribution (Bar & Pie using Recharts).
- **Data Export**: Export payout data as **PDF** or **CSV** files.
- **Inline Editing** for payout rates.

### 🔍 Search & Filter
- Global keyword search.
- Filter articles by:
  - Author
  - Date range
  - Type (News/Blog)

### 📶 Offline-First Strategy
- Caches news data in **IndexedDB**.
- Fully usable offline — fallback to the most recently fetched articles.

### 🌗 Light/Dark Mode
- Toggle between light and dark themes seamlessly.

### 💻 Modern UI/UX
- Built with **Tailwind CSS** for a clean, responsive layout.
- Optimized for mobile and desktop screens.
- Uses Next.js `<Image />` for high-performance image rendering.

---

## 🚀 Live Preview

> **Note:** Due to **NewsAPI restrictions**, live API works only on `localhost`. The Vercel-deployed version may show an API error after initial load, but the app gracefully falls back to cached articles stored in IndexedDB.

---

## 🖼 Screenshots

### 📍 Dashboard View
![Dashboard Screenshot](https://your-image-link-here.png)

### 📍 Admin Payout Table
![Payout Table](https://your-image-link-here.png)

*(Replace the above links with actual uploaded image links or GitHub image paths)*

---

## 🛠️ Tech Stack

| Feature              | Tool/Library        |
|----------------------|---------------------|
| Framework            | Next.js (App Router) |
| Styling              | Tailwind CSS         |
| Charts               | Recharts             |
| State Management     | React Context API    |
| Offline Storage      | IndexedDB            |
| Export               | jsPDF, SheetJS       |
| Hosting              | Vercel               |

---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/news-dashboard.git
cd news-dashboard
