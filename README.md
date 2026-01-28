# YZ90 Florist

A modern, responsive online flower board (papan bunga) catalog and ordering platform built with React, Vite, and TanStack Router.

## 🚀 Features

- Product catalog with advanced filtering (category, price, size, city, sort, search)
- Product detail pages with order customization
- WhatsApp order integration
- Responsive, mobile-first UI
- Modern component library (Radix UI, Tailwind CSS)
- Type-safe forms and validation (Zod)
- SEO-friendly routing (TanStack Router)
- Clean, maintainable codebase

## 🛠️ Tech Stack

- **Frontend:** React, TypeScript, Vite
- **Routing:** TanStack Router
- **Styling:** Tailwind CSS, Radix UI
- **State Management:** React hooks
- **Validation:** Zod
- **Icons:** Lucide

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Bun](https://bun.sh/) (for fast install & dev)

### Installation

```bash
bun install
```

### Development

```bash
bun run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

### Build for Production

```bash
bun run build
```

### Preview Production Build

```bash
bun run preview
```

## 📁 Project Structure

```
├── public/                # Static assets
├── src/
│   ├── components/        # UI and feature components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Data, constants, and utilities
│   ├── routes/            # App routes (TanStack Router)
│   ├── schemas/           # Zod schemas for validation
│   └── styles/            # Global and component styles
├── index.html             # App entry point
├── package.json           # Project metadata and scripts
├── vite.config.ts         # Vite configuration
└── README.md              # Project documentation
```

## 📝 Contributing

1. Fork this repo
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Create a new Pull Request

## 📄 License

This project is licensed under the MIT License.

---

> Made with ❤️ by YZ90 Florist

    },

},
])

````

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
````
