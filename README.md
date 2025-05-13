# 🛒 Add to Cart Using Modal – React + Tailwind CSS

This project is a beginner-friendly **ReactJS application** that demonstrates how to build an interactive **Add to Cart** system using a **modal** interface.
It fetches real product data from the [Fake Store API](https://fakestoreapi.com/), allows users to add/remove products from a cart, and displays cart items inside a modal.
Create a ReactJS application that fetches product data from the Fake Store API and allows users to add products to the cart through a modal interface.

---

## ✨ Features

- 🔄 Fetches products from Fake Store API
- 📦 Displays product image, title, price, and "Add to Cart" button
- 🛑 Shows alert if item is already added to the cart
- 🛍️ Modal shows all cart items when cart button is clicked
- ❌ Remove items from cart directly in modal
- 🔢 Cart item count shown in Navbar
- 📱 Fully responsive design using Tailwind CSS
- 📤 Well-structured code with props and reusable components

---

## 📸 App Preview

> *(Optional: Add screenshots or a short demo GIF here)*

---

## 🧠 Project Logic & Architecture

### 🔄 Data Flow

- **Products** are fetched from Fake Store API in `App.jsx` and passed to `ProductCard` components.
- **Cart State** is managed in the top-level `App.jsx` file using `useState`.
- Cart data is passed down via **props** to:
  - `Navbar` to show count
  - `CartModal` to list items
- Each product has an "Add to Cart" button. Clicking:
  - Adds to cart if not present
  - Shows `alert()` if already added
- The modal opens when user clicks the cart icon in the Navbar.

### 🧩 Components Used

| Component      | Purpose                                             |
|----------------|-----------------------------------------------------|
| `App.jsx`      | Main state management (products & cart)             |
| `Navbar.jsx`   | Displays cart count & triggers modal open           |
| `ProductCard.jsx` | Displays each product & Add to Cart button     |
| `CartModal.jsx`| Modal showing cart items with remove buttons        |

---

## 📁 Folder Structure

src/
├── components/
│ ├── Navbar.jsx
│ ├── ProductCard.jsx
│ └── CartModal.jsx
├── App.jsx
├── index.css
└── main.jsx


## ⚙️ How to Run This Project

### 1. Clone this repo

```bash
git clone https://github.com/your-username/add-to-cart-app.git
cd add-to-cart-app


###2. Install dependencies
Edit
npm install

###3. Start the local development server
npm run dev


The app will be live at:
👉 http://localhost:5173

🧪 Technologies Used

⚛️ ReactJS – Frontend JavaScript library

💨 Tailwind CSS – Utility-first CSS framework

🔗 Fake Store API – Free dummy API for testing e-commerce apps

🛠️ Vite – Fast build tool and dev server
