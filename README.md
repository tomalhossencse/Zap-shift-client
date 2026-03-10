# 📦 ZapShift | Parcel Management System

[![Live Site](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://zapshift-app.netlify.app)
[![Tech Stack](https://img.shields.io/badge/Stack-MERN-blue?style=for-the-badge)](https://mongodb.com)

**ZapShift** is a modern, full-stack logistics platform designed to streamline delivery operations between customers, riders, and administrators. From real-time tracking to automated rider assignments, ZapShift ensures a transparent and efficient parcel delivery lifecycle.

---

## 🌟 Project Overview

The platform provides a centralized hub for managing the entire logistics chain. By utilizing a **three-role management system**, it caters specifically to:
* **Users:** Seamlessly book parcels and track delivery progress.
* **Riders:** Efficiently manage assigned deliveries and update statuses on the go.
* **Admins:** Oversee the entire ecosystem, manage users/riders, and analyze delivery data.

---

## 🔑 Access & Deployment

| Field             | Value                                      |
| ----------------- | ------------------------------------------ |
| **Website Name** | ZapShift Parcel Management System          |
| **Live Site URL** | [https://zap-shift-app.netlify.app/]         |

---

## ✨ Core Features

1.  **Parcel Booking:** Input sender/receiver details, weight, and destination.
2.  **Real-Time Tracking:** Visual updates on the parcel’s journey.
3.  **Role-Based Dashboards:** Custom UI and permissions for Users, Riders, and Admins.
4.  **Rider Assignment:** Administrative tools to assign pending parcels to available riders.
5.  **Status Lifecycle:** Automated flow from *Pending → Assigned → Picked Up → In Transit → Delivered*.
6.  **Parcel History:** Comprehensive logs of all previous orders for users.
7.  **Secure Auth:** Powered by **Firebase** for robust login and role verification.
8.  **Advanced Filtering:** Search and filter parcels by status, date, or location.
9.  **Responsive Design:** Optimized for mobile, tablet, and desktop using Tailwind CSS.
10. **Interactive UI:** Smooth transitions and alerts via Framer Motion and SweetAlert.

---

## 💻 Technical Stack



### Frontend
* **Framework:** React.js
* **Styling:** Tailwind CSS, DaisyUI
* **State Management:** TanStack Query (React Query)
* **Animations:** Framer Motion
* **Auth:** Firebase Authentication

### Backend
* **Environment:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB
* **Security:** JSON Web Tokens (JWT)

---

## 🛠️ Local Setup Guide

### 1. Clone the Repositories
```bash
# Clone Client
git clone [https://github.com/tomalhossencse/zapshift-client](https://github.com/tomalhossencse/zapshift-client)
cd zapshift-client
npm install

# Clone Server (in a separate terminal)
git clone [https://github.com/tomalhossencse/zapshift-server](https://github.com/tomalhossencse/zapshift-server)
cd zapshift-server
npm install
