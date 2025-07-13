# 🪑 Furniture Rent App

A modern, lightning-fast furniture rental platform built with React.js and Vite. Browse, filter, and rent furniture items with an intuitive user interface and seamless user experience.
## ⬅️ Back Button Preview

![Prev](assets/prev.png)

## 🚀 Features

### Core Functionality
- **Browse Furniture Catalog** - Explore a wide range of furniture items with detailed descriptions and images
- **Advanced Search & Filtering** - Filter by category, price range, availability, and furniture type
- **Item Details** - View comprehensive information including dimensions, materials, and rental terms
- **Shopping Cart** - Add/remove items with quantity management and real-time price calculation
- **Rental Calculator** - Calculate total costs based on rental duration and selected items
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices

### User Experience
- **Interactive UI** - Smooth animations and transitions using modern CSS
- **Real-time Updates** - Dynamic price calculations and availability status
- **Local Storage** - Persistent cart and user preferences across sessions
- **Image Gallery** - Multiple product images with zoom functionality
- **Loading States** - Elegant loading animations and skeleton screens
- **Hot Module Replacement** - Instant updates during development thanks to Vite

## 🛠️ Tech Stack

- **Frontend Framework:** React.js 18+ (Functional Components + Hooks)
- **Build Tool:** Vite (Lightning-fast development and build)
- **Styling:** CSS3 / Styled Components / CSS Modules
- **State Management:** React Context API + useReducer
- **Routing:** React Router DOM
- **Data Storage:** Local Storage (client-side only)
- **Package Manager:** npm / yarn / pnpm
- **Development:** Vite Dev Server with HMR

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/zayd100/xac.git
   cd furniture-rent-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
xac/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   │   ├── bed.png
│   │   ├── chair.png
│   │   ├── home.png
│   │   ├── lamp.png
│   │   ├── react.svg
│   │   ├── rt.png
│   │   └── sofa.png
│   │
│   ├── components/
│   │   ├── card.jsx
│   │   ├── footer.jsx
│   │   └── navbar.jsx
│   │
│   ├── pages/
│   │   ├── about.jsx
│   │   ├── home.jsx
│   │   └── rent.jsx
│   │
│   ├── styles/
│   │   ├── card.css
│   │   ├── footer.css
│   │   ├── home.css
│   │   ├── navbar.css
│   │   └── App.css
│   │
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js

```

## 🎯 Key Components

### FurnitureContext
Manages global state for furniture items, search filters, and availability.

### CartContext
Handles cart operations, rental calculations, and checkout process.

### FurnitureCard
Reusable component displaying furniture items with image, price, and quick actions.

### FurnitureFilter
Advanced filtering system with category, price range, and availability filters.

### RentalCalculator
Calculates total rental costs based on duration and selected items.

## 📱 Responsive Design

The app is fully responsive and optimized for:
- **Desktop** (1024px and above)
- **Tablet** (768px - 1023px)
- **Mobile** (320px - 767px)

## 🔧 Available Scripts

- `npm run dev` - Starts the Vite development server with HMR
- `npm run build` - Builds the app for production using Vite
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks
- `npm run lint:fix` - Auto-fix ESLint issues

## ⚡ Vite Configuration

The project uses Vite for optimal development experience:

```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
```

## 🌟 Features in Detail

### Furniture Catalog
- Grid and list view options
- Sort by price, popularity, or newest
- Category-based navigation
- Search functionality with auto-suggestions

### Rental System
- Flexible rental periods (daily, weekly, monthly)
- Damage protection options
- Delivery scheduling
- Rental history tracking

### Shopping Cart
- Persistent cart across sessions
- Quantity adjustments
- Remove items functionality
- Real-time price updates

## ⚡ Why Vite?

- **Lightning Fast HMR** - Instant updates during development
- **Optimized Build** - Rollup-based production builds
- **ES Modules** - Native ES module support
- **TypeScript Ready** - Built-in TypeScript support
- **Plugin Ecosystem** - Rich plugin ecosystem
- **Zero Config** - Works out of the box

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Vercel** - `vercel --prod`
- **Netlify** - Deploy `dist` folder
- **GitHub Pages** - Use `gh-pages` package
- **Firebase Hosting** - `firebase deploy`

## 💡 Future Enhancements

- [ ] User authentication system
- [ ] Payment integration
- [ ] Real-time inventory management
- [ ] Customer reviews and ratings
- [ ] Wishlist functionality
- [ ] Advanced search with AI recommendations
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] Progressive Web App (PWA) features
- [ ] TypeScript migration

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License

**Built with ❤️ using React.js + Vite**