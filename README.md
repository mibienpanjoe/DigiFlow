# DigiFlow 🚀

A modern, high-performance landing page for DigiFlow - a premier digital agency based in Burkina Faso, specializing in digital marketing, web development, and creative content services.

## ✨ Features

- **Mobile-First Design**: Optimized for mobile with 95%+ traffic support
- **Premium Animations**: Smooth scroll-triggered animations using Framer Motion
- **Interactive Components**: Accordion FAQs, horizontal carousels, and engaging UI elements
- **Performance Optimized**: Lazy loading, optimized images, and efficient rendering
- **Responsive Layout**: Seamless experience across all devices
- **Dark Mode**: Modern dark theme with vibrant orange accents

## 🛠️ Tech Stack

- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS v4** - Utility-first styling with v4 features
- **Framer Motion** - Advanced animations and transitions
- **Lucide React** - Beautiful, consistent icon set
- **Sharp** - High-performance image optimization

## 📁 Project Structure

```
DigiFlow/
├── public/              # Static assets (logo, images)
│   ├── logo.svg
│   └── team/           # Team member photos
├── src/
│   ├── components/
│   │   ├── cards/      # Reusable card components
│   │   ├── form/       # Form input components
│   │   ├── navigation/ # Header, Footer, Mobile Menu
│   │   ├── sections/   # Page sections (Hero, About, Services, etc.)
│   │   └── ui/         # UI primitives (Button, Badge, etc.)
│   ├── constants/      # Theme colors, contact info
│   ├── data/           # Static data (services, FAQs, team, etc.)
│   ├── App.tsx         # Main application component
│   ├── index.css       # Global styles and Tailwind config
│   └── main.tsx        # Application entry point
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/DigiFlow.git
   cd DigiFlow
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📱 Mobile Optimization

This project is heavily optimized for mobile devices:
- Horizontal scrolling carousels for Team and Testimonials
- Compact FAQ cards
- Touch-friendly navigation
- Optimized images (WebP format, <20KB per team photo)
- Reduced section spacing for better mobile flow

## 🎨 Customization

### Colors

Edit `src/constants/theme.ts` to customize the color palette:
```typescript
export const colors = {
  primary: '#FF6F00',    // Orange accent
  navy: '#001529',       // Dark blue background
  // ... more colors
}
```

### Content

- **Services**: Edit `src/data/services.ts`
- **Team**: Edit `src/data/team.ts`
- **FAQs**: Edit `src/data/faqs.ts`
- **Testimonials**: Edit `src/data/testimonials.ts`

### Contact Information

Update contact details in `src/constants/theme.ts`:
```typescript
export const contact = {
  whatsapp: '+226 66220025',
  email: 'contact@digiflow.bf',
  // ...
}
```

## 📄 License

This project is proprietary and confidential.

## 🤝 Contributing

This is a private project. For inquiries, contact [contact@digiflow.bf](mailto:contact@digiflow.bf).

---

**Built by Mj** | Burkina Faso 🇧🇫
