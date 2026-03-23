# Sylvara Landing Page

Landing page moderna, accesible y optimizada para Sylvara - Plataforma de Biodiversidad Agroforestal.

## 🌳 Características

- **Framework Moderno**: React 18 + Vite para desarrollo ultrarrápido
- **Estilizado**: Tailwind CSS con sistema de diseño personalizado
- **Routing**: React Router DOM v7 para navegación fluida
- **Accesibilidad**: Cumple con WCAG 2.1 AA
- **Responsive**: Mobile-first, optimizado para todos los dispositivos
- **Performance**: Optimizado para Core Web Vitals
- **SEO**: Meta tags y estructura semántica

## 🚀 Inicio Rápido

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build para Producción

```bash
npm run build
```

### Preview del Build

```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
Sylvara_Landing/
├── .github/
│   └── skills/
│       └── ui-ux-design/    # Skill de diseño UI/UX
├── assets/
│   └── images/              # Imágenes del proyecto
├── src/
│   ├── components/
│   │   └── Navbar.jsx       # Navegación principal
│   ├── pages/
│   │   ├── Home.jsx         # Vista principal
│   │   ├── ModoUso.jsx      # Guía de uso
│   │   ├── Android.jsx      # Descarga Android
│   │   └── IOS.jsx          # Beta iOS/TestFlight
│   ├── App.jsx              # Componente raíz
│   ├── main.jsx             # Punto de entrada
│   └── index.css            # Estilos globales + Tailwind
├── index.html               # HTML principal
├── package.json             # Dependencias
├── tailwind.config.js       # Configuración Tailwind
├── vite.config.js           # Configuración Vite
└── README.md                # Este archivo
```

## 🎨 Sistema de Diseño

### Colores

- **Primary**: `#193829` - Verde bosque profundo
- **Primary Light**: `#2d5540`
- **Primary Dark**: `#0f2319`
- **Background Light**: `#f6f7f7`
- **Background Dark**: `#151d19`

### Tipografía

- **Display**: Space Grotesk (sans-serif)
- **Serif**: Playfair Display (títulos elegantes)

### Espaciado

Sistema basado en 8px: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`

## ♿ Accesibilidad

Este proyecto sigue las mejores prácticas de accesibilidad:

- Navegación completa por teclado
- Atributos ARIA apropiados
- Contraste de color WCAG AA+
- Texto alternativo en imágenes
- Formularios con labels asociados
- Indicadores de foco visibles
- Soporte para lectores de pantalla

## 📱 Vistas

1. **Inicio** (`/`) - Hero, stats, problemas, features, mockups
2. **Modo de Uso** (`/modo-uso`) - Timeline de 6 pasos de implementación
3. **Android** (`/android`) - Descarga de APK y guía de instalación
4. **iOS** (`/ios`) - Solicitud de beta TestFlight

## 🛠️ Tecnologías

- React 18.3
- Vite 6.1
- React Router DOM 7.1
- Tailwind CSS 3.4
- PostCSS + Autoprefixer

## 📄 Licencia

© 2024 Sylvara Plataforma Agroforestal. Todos los derechos reservados.
