# Marketing Médico - Sitio Web

Sitio web oficial de Marketing Médico, agencia de marketing digital especializada en el sector salud.

## 🚀 Tecnologías

- React 18
- Vite
- React Router DOM
- Bootstrap 5
- React Bootstrap
- Lucide React (iconos)
- React Slick (sliders)

## 📦 Instalación
```bash
npm install
```

## 🔧 Desarrollo
```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

## 🏗️ Build
```bash
npm run build
```

## 📁 Estructura del Proyecto
```
src/
├── components/
│   ├── layout/      # Header, Footer, Layout
│   └── ui/          # Componentes reutilizables
├── data/            # Datos mock
├── pages/           # Páginas del sitio
├── routes/          # Configuración de rutas
└── styles/          # Estilos globales
```

## 🌐 Deployment

Este proyecto está configurado para desplegarse en Vercel.

1. Conecta tu repositorio con Vercel
2. El archivo `vercel.json` está configurado para SPA routing
3. Deploy automático en cada push a main

## 📝 Variables de Entorno

Crea un archivo `.env` basado en `.env.example`:
```
VITE_FACEBOOK_URL=https://facebook.com/tu-pagina
VITE_INSTAGRAM_URL=https://instagram.com/tu-cuenta
VITE_TIKTOK_URL=https://tiktok.com/@tu-usuario
```

## 📄 Licencia

© 2021 Marketing Médico. Todos los derechos reservados.