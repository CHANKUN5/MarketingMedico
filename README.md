# 🏥 Marketing Médico - Agencia Digital

<div align="center">

![Marketing Médico](public/logo-header.png)

**Plataforma web profesional para servicios de marketing digital especializado en el sector salud**

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![React Router](https://img.shields.io/badge/React_Router-6.26.2-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)

</div>

---

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Tecnologías](#-tecnologías)
- [Características](#-características)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Scripts Disponibles](#-scripts-disponibles)
- [Arquitectura](#-arquitectura)
- [Componentes Principales](#-componentes-principales)
- [Rutas](#-rutas)
- [Diseño y Estilos](#-diseño-y-estilos)
- [Contribución](#-contribución)

---

## 🎯 Descripción

**Marketing Médico** es una agencia digital especializada en fortalecer la presencia digital de profesionales y clínicas del sector salud. Esta plataforma web moderna ofrece información sobre servicios de marketing digital, desarrollo web, análisis de datos y consultoría estratégica.

### Objetivos del Proyecto

- ✅ Presentar servicios de marketing digital especializados
- ✅ Facilitar el contacto con potenciales clientes
- ✅ Mostrar testimonios y casos de éxito
- ✅ Ofrecer oportunidades de prácticas profesionales
- ✅ Proporcionar una experiencia de usuario excepcional

---

## 🛠 Tecnologías

### Frontend Core

| Tecnología                                                                                                | Versión | Propósito                |
| --------------------------------------------------------------------------------------------------------- | ------- | ------------------------ |
| ![React](https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=white)                | 18.3.1  | Librería principal UI    |
| ![Vite](https://img.shields.io/badge/-Vite-646CFF?style=flat&logo=vite&logoColor=white)                   | 5.4.2   | Build tool y dev server  |
| ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | ES6+    | Lenguaje de programación |

### UI y Estilos

| Tecnología                                                                                                         | Versión | Propósito              |
| ------------------------------------------------------------------------------------------------------------------ | ------- | ---------------------- |
| ![Bootstrap](https://img.shields.io/badge/-Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white)             | 5.3.3   | Framework CSS          |
| ![React Bootstrap](https://img.shields.io/badge/-React_Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white) | 2.10.4  | Componentes React      |
| ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3&logoColor=white)                            | -       | Estilos personalizados |

### Navegación y Carruseles

| Tecnología                                                                                                      | Versión | Propósito             |
| --------------------------------------------------------------------------------------------------------------- | ------- | --------------------- |
| ![React Router](https://img.shields.io/badge/-React_Router-CA4245?style=flat&logo=react-router&logoColor=white) | 6.26.2  | Enrutamiento SPA      |
| ![Slick Carousel](https://img.shields.io/badge/-Slick_Carousel-000000?style=flat)                               | 1.8.1   | Carruseles responsive |

### Iconos y Assets

| Tecnología                                                              | Versión | Propósito  |
| ----------------------------------------------------------------------- | ------- | ---------- |
| ![Lucide React](https://img.shields.io/badge/-Lucide-F56565?style=flat) | 0.446.0 | Iconos SVG |

---

## ✨ Características

### 🎨 Diseño y UX

- ✅ **Diseño Responsive**: Adaptado para desktop, tablet y móvil
- ✅ **Animaciones Suaves**: Transiciones y efectos hover
- ✅ **Tipografía Profesional**: Sistema de fuentes Satoshi, Inter y Roboto
- ✅ **Paleta de Colores Consistente**: Azul primario (#0640FF)
- ✅ **Imágenes Optimizadas**: Carga rápida y calidad visual

### 🚀 Funcionalidades

- ✅ **Hero Slider Automático**: Carrusel de imágenes en homepage
- ✅ **Carrusel de Servicios**: Navegación automática de servicios
- ✅ **Formularios de Contacto**: Validación completa de campos
- ✅ **Páginas de Servicios**: 7 servicios detallados
- ✅ **Sistema de Testimonios**: Reseñas de clientes
- ✅ **Portal de Vacantes**: Aplicación a prácticas profesionales
- ✅ **Navegación Intuitiva**: Menú responsive con dropdown

### 📱 Optimización Móvil

- ✅ **Menú Hamburguesa**: Navegación lateral en móvil
- ✅ **Carruseles Adaptados**: 1.3 cards visibles en móvil
- ✅ **Touch Gestures**: Soporte para gestos táctiles
- ✅ **Imágenes Responsive**: Ajuste automático de tamaños

---

## 📁 Estructura del Proyecto

```
marketing-medico/
├── public/                          # Assets estáticos
│   ├── logo-header.png             # Logo principal
│   ├── logo-footer.png             # Logo footer
│   ├── 1.jpg - 7.jpg               # Imágenes de servicios
│   ├── agendar.jpeg                # Imagen hero
│   ├── cita.webp                   # Imagen formularios
│   ├── reseña 1.png, reseña 2.png  # Imágenes testimonios
│   └── testimonio1-4.png           # Fotos practicantes
│
├── src/
│   ├── components/                  # Componentes reutilizables
│   │   ├── layout/                 # Componentes de layout
│   │   │   ├── Header.jsx          # Navegación principal
│   │   │   ├── Footer.jsx          # Pie de página
│   │   │   └── Layout.jsx          # Layout wrapper
│   │   │
│   │   └── ui/                     # Componentes UI
│   │       ├── HeroSlider.jsx      # Slider homepage
│   │       ├── ServicesCarousel.jsx # Carrusel servicios
│   │       ├── ContactForm.jsx     # Formulario contacto
│   │       ├── ApplicationForm.jsx # Formulario vacantes
│   │       └── ServiceCard.jsx     # Card de servicio
│   │
│   ├── pages/                       # Páginas de la aplicación
│   │   ├── Home/                   # Página principal
│   │   │   └── Home.jsx
│   │   │
│   │   ├── Nosotros/               # Sobre nosotros
│   │   │   └── Nosotros.jsx
│   │   │
│   │   ├── Testimonios/            # Testimonios
│   │   │   └── Testimonios.jsx
│   │   │
│   │   ├── TrabajaConNosotros/     # Portal vacantes
│   │   │   └── TrabajaConNosotros.jsx
│   │   │
│   │   ├── Vacantes/               # Páginas de vacantes
│   │   │   ├── DisenoGrafico.jsx
│   │   │   └── DesarrolloSoftware.jsx
│   │   │
│   │   └── servicios/              # Páginas de servicios
│   │       ├── EstrategiasMarketing.jsx
│   │       ├── GestionCRMERP.jsx
│   │       ├── AutomatizacionMarketing.jsx
│   │       ├── DesarrolloWeb.jsx
│   │       ├── AnalisisDatos.jsx
│   │       ├── Consultoria.jsx
│   │       └── MarketingContenidos.jsx
│   │
│   ├── data/                        # Datos estáticos
│   │   ├── services.js             # Información servicios
│   │   ├── socialLinks.js          # Enlaces redes sociales
│   │   └── vacancies.js            # Datos vacantes
│   │
│   ├── routes/                      # Configuración rutas
│   │   └── AppRouter.jsx           # Router principal
│   │
│   ├── styles/                      # Estilos globales
│   │   ├── custom.css              # Estilos personalizados
│   │   └── index.css               # Estilos base
│   │
│   ├── App.jsx                      # Componente raíz
│   ├── main.jsx                     # Punto de entrada
│   └── ScrollToTop.jsx             # Utilidad scroll
│
├── index.html                       # HTML principal
├── package.json                     # Dependencias
├── vite.config.js                  # Configuración Vite
└── README.md                        # Documentación
```

---

## 🚀 Instalación

### Prerrequisitos

- Node.js >= 16.0.0
- npm >= 8.0.0 o yarn >= 1.22.0

### Pasos de Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/marketing-medico.git

# 2. Navegar al directorio
cd marketing-medico

# 3. Instalar dependencias
npm install
# o
yarn install

# 4. Iniciar servidor de desarrollo
npm run dev
# o
yarn dev

# 5. Abrir en navegador
# http://localhost:5173
```

---

## 📜 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Construye para producción
npm run preview      # Preview de build de producción

# Linting
npm run lint         # Ejecuta ESLint
```

---

## 🏗 Arquitectura

### Diagrama de Arquitectura

```
┌─────────────────────────────────────────────────────────┐
│                     NAVEGADOR                            │
│                                                          │
│  ┌────────────────────────────────────────────────┐    │
│  │              React Application                  │    │
│  │                                                 │    │
│  │  ┌──────────────────────────────────────────┐ │    │
│  │  │         React Router (SPA)               │ │    │
│  │  │                                          │ │    │
│  │  │  ┌────────────┐  ┌──────────────────┐  │ │    │
│  │  │  │   Layout   │  │   ScrollToTop    │  │ │    │
│  │  │  │            │  │                  │  │ │    │
│  │  │  │  ┌──────┐  │  └──────────────────┘  │ │    │
│  │  │  │  │Header│  │                         │ │    │
│  │  │  │  └──────┘  │                         │ │    │
│  │  │  │            │                         │ │    │
│  │  │  │  ┌──────┐  │  ┌──────────────────┐  │ │    │
│  │  │  │  │Pages │──┼──│  Home            │  │ │    │
│  │  │  │  │      │  │  │  Nosotros        │  │ │    │
│  │  │  │  │      │  │  │  Testimonios     │  │ │    │
│  │  │  │  │      │  │  │  Servicios (7)   │  │ │    │
│  │  │  │  │      │  │  │  Vacantes (2)    │  │ │    │
│  │  │  │  └──────┘  │  └──────────────────┘  │ │    │
│  │  │  │            │                         │ │    │
│  │  │  │  ┌──────┐  │                         │ │    │
│  │  │  │  │Footer│  │                         │ │    │
│  │  │  │  └──────┘  │                         │ │    │
│  │  │  └────────────┘                         │ │    │
│  │  └──────────────────────────────────────────┘ │    │
│  │                                                 │    │
│  │  ┌──────────────────────────────────────────┐ │    │
│  │  │         UI Components                     │ │    │
│  │  │  - HeroSlider                            │ │    │
│  │  │  - ServicesCarousel                      │ │    │
│  │  │  - ContactForm                           │ │    │
│  │  │  - ApplicationForm                       │ │    │
│  │  └──────────────────────────────────────────┘ │    │
│  │                                                 │    │
│  │  ┌──────────────────────────────────────────┐ │    │
│  │  │         Data Layer                        │ │    │
│  │  │  - services.js                           │ │    │
│  │  │  - socialLinks.js                        │ │    │
│  │  │  - vacancies.js                          │ │    │
│  │  └──────────────────────────────────────────┘ │    │
│  └────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────┘
```

### Flujo de Datos

```
Usuario → Navegador → React Router → Layout → Página → Componentes UI → Data
                                        ↓
                                     Header
                                     Footer
```

---

## 🧩 Componentes Principales

### Layout Components

#### Header.jsx

```javascript
// Navegación principal con menú responsive
- Logo
- Links de navegación (Nosotros, Testimonios, Servicios)
- Dropdown de servicios
- Menú móvil lateral
```

#### Footer.jsx

```javascript
// Pie de página con información y enlaces
- Logo y copyright
- Enlaces a secciones
- Redes sociales (Facebook, Instagram)
- Columnas: Nosotros, Reseña, Trabaja con nosotros, Servicios
```

### UI Components

#### HeroSlider.jsx

```javascript
// Carrusel automático de imágenes hero
- 3 slides con imágenes
- Transición automática cada 5 segundos
- Overlay azul con opacidad
- Responsive
```

#### ServicesCarousel.jsx

```javascript
// Carrusel de servicios con navegación automática
- Desktop: 4 cards visibles
- Tablet: 2-3 cards visibles
- Móvil: 1.3 cards visibles (muestra parte del siguiente)
- Autoplay cada 3 segundos
- Cards con altura fija (400px)
```

#### ContactForm.jsx

```javascript
// Formulario de contacto con validación
- Campos: Nombre, Celular, Correo, Mensaje
- Validación en tiempo real
- Modal de éxito al enviar
- Responsive
```

#### ApplicationForm.jsx

```javascript
// Formulario para aplicar a vacantes
- Campos: Nombres, Celular, Correo institucional, Carrera técnica
- Upload de CV
- Validación completa
- Modal de confirmación
```

---

## 🛣 Rutas

### Mapa de Rutas

```
/                                    → Home
/nosotros                           → Nosotros
/testimonios                        → Testimonios
/trabaja-con-nosotros              → Portal de Vacantes

/vacantes/diseno-grafico           → Vacante Diseño Gráfico
/vacantes/desarrollo-software      → Vacante Desarrollo Software

/servicios/estrategias-marketing   → Estrategias Marketing Digital
/servicios/gestion-crm-erp         → Gestión CRM y ERP
/servicios/automatizacion-marketing → Automatización Marketing
/servicios/desarrollo-web          → Desarrollo Web
/servicios/analisis-datos          → Análisis de Datos
/servicios/consultoria             → Consultoría y Estrategia
/servicios/marketing-contenidos    → Marketing de Contenidos
```

### Estructura de Rutas

```javascript
<BrowserRouter>
  <ScrollToTop />
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="nosotros" element={<Nosotros />} />
      <Route path="testimonios" element={<Testimonios />} />
      <Route path="trabaja-con-nosotros" element={<TrabajaConNosotros />} />
      <Route path="vacantes/diseno-grafico" element={<DisenoGrafico />} />
      <Route
        path="vacantes/desarrollo-software"
        element={<DesarrolloSoftware />}
      />
      <Route path="servicios/*" element={<ServiciosPages />} />
    </Route>
  </Routes>
</BrowserRouter>
```

---

## 🎨 Diseño y Estilos

### Sistema de Colores

```css
/* Colores Primarios */
--primary-blue: #0640ff;
--primary-dark: #0540dd;

/* Colores Secundarios */
--purple-light: #e8d4ff;
--purple: #7c3aed;
--green-light: #c4f4e0;
--green: #10b981;
--red-light: #ffd4d4;
--red: #ef4444;

/* Colores Neutros */
--white: #ffffff;
--gray-light: #f8f9fa;
--gray: #6c757d;
--dark: #212529;
```

### Tipografía

```css
/* Headings */
font-family: "Satoshi", sans-serif;
font-weight: 700-900;

/* Subtitles */
font-family: "Inter", sans-serif;
font-weight: 500-600;

/* Body Text */
font-family: "Roboto", sans-serif;
font-weight: 400-600;
```

### Espaciado

```css
/* Secciones */
padding-top: 80px;
padding-bottom: 30px;

/* Entre elementos */
margin-bottom: 40px;

/* Cards */
padding: 40px;
border-radius: 12-20px;
```

### Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 768px) /* Tablet */ @media (max-width: 992px) /* Desktop */ @media (max-width: 1200px);
```

---

## 📊 Diagrama de Flujo de Usuario

```
                    ┌─────────────┐
                    │   INICIO    │
                    │   (Home)    │
                    └──────┬──────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
   ┌────▼────┐       ┌────▼────┐       ┌────▼────┐
   │Nosotros │       │Servicios│       │Trabaja  │
   └────┬────┘       └────┬────┘       │con      │
        │                 │             │Nosotros │
        │            ┌────▼────┐       └────┬────┘
        │            │Servicio │            │
        │            │Detalle  │       ┌────▼────┐
        │            └────┬────┘       │Vacante  │
        │                 │            │Detalle  │
        │            ┌────▼────┐       └────┬────┘
        │            │Contacto │            │
        │            │Form     │       ┌────▼────┐
        │            └─────────┘       │Aplicar  │
        │                              │Form     │
   ┌────▼────┐                        └─────────┘
   │Reseñas  │
   └─────────┘
```

---

## 🤝 Contribución

### Guía de Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Estándares de Código

- Usar componentes funcionales con Hooks
- Seguir convenciones de nombres de React
- Comentar código complejo
- Mantener componentes pequeños y reutilizables
- Usar PropTypes o TypeScript para validación

---

## 📝 Licencia

© 2021 Marketing Médico. Todos los derechos reservados.

---

## 👥 Equipo

**Marketing Médico** - Agencia de Marketing Digital

- 🌐 Website: [marketingmedico.com](https://marketingmedico.com)
- 📧 Email: contacto@marketingmedico.com
- 📱 Facebook: [Marketing Médico](https://facebook.com/marketingmedico)
- 📷 Instagram: [@marketingmedico](https://instagram.com/marketingmedico)

---

<div align="center">

**Hecho con ❤️ por el equipo de Marketing Médico**

⭐ Si te gusta este proyecto, dale una estrella en GitHub

</div>
