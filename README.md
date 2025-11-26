# Landing Page - Validación Negocio IA

Landing page para validación de negocio de capacitación en IA para profesionales administrativos en México.

## Stack Técnico

- **React 18** con Vite
- **Tailwind CSS** para estilos
- **Calendly** para agendamiento de llamadas
- **Vercel** para deployment

## Características

- Diseño mobile-first y completamente responsive
- Integración con Calendly mediante popup widget
- Botón CTA sticky en móvil que aparece al hacer scroll
- Animaciones sutiles y profesionales
- Paleta de colores optimizada para conversión
- SEO básico configurado

## Instalación Local

### Requisitos Previos

- Node.js 16+ instalado
- npm o yarn

### Pasos de Instalación

1. Instalar dependencias:

```bash
npm install
```

2. Iniciar servidor de desarrollo:

```bash
npm run dev
```

3. Abrir en el navegador: `http://localhost:5173`

## Build para Producción

Generar build optimizado:

```bash
npm run build
```

Preview del build:

```bash
npm run preview
```

## Deploy en Vercel

### Opción 1: Deploy desde CLI

1. Instalar Vercel CLI (si no lo tienes):

```bash
npm install -g vercel
```

2. Login en Vercel:

```bash
vercel login
```

3. Deploy a producción:

```bash
vercel --prod
```

### Opción 2: Deploy desde GitHub

1. Push tu código a un repositorio de GitHub

2. Ve a [vercel.com](https://vercel.com) y haz login

3. Click en "Add New Project"

4. Importa tu repositorio de GitHub

5. Vercel detectará automáticamente que es un proyecto Vite

6. Click en "Deploy"

### Opción 3: Deploy Manual

1. Genera el build:

```bash
npm run build
```

2. Ve a [vercel.com](https://vercel.com) y arrastra la carpeta `dist` a Vercel

## Configuración de Calendly

La integración con Calendly ya está configurada con la URL:
`https://calendly.com/eriar1235/validacion-ia`

Si necesitas cambiar la URL de Calendly:

1. Abre `src/App.jsx`
2. Busca la función `openCalendly`
3. Cambia la URL en el objeto de configuración

## Estructura del Proyecto

```
Landing-Page/
├── public/              # Archivos estáticos
├── src/
│   ├── App.jsx         # Componente principal con todas las secciones
│   ├── main.jsx        # Punto de entrada
│   └── index.css       # Estilos globales y Tailwind
├── index.html          # HTML base con scripts de Calendly
├── package.json        # Dependencias del proyecto
├── tailwind.config.js  # Configuración de Tailwind
├── vite.config.js      # Configuración de Vite
├── vercel.json         # Configuración de Vercel
└── README.md           # Este archivo
```

## Paleta de Colores

- **Primario**: `#2563eb` (azul profesional)
- **Acento**: `#f97316` (naranja urgencia)
- **Gris Oscuro**: `#1f2937` (texto principal)
- **Gris Medio**: `#6b7280` (texto secundario)
- **Gris Claro**: `#f3f4f6` (fondos alternados)

## Secciones de la Landing

1. **Hero** - Con gradiente azul y CTA principal
2. **Identificación del Problema** - Lista de pain points
3. **Para Quién Es** - Perfil del cliente ideal
4. **Propuesta de Valor** - Qué obtendrán en 15 minutos
5. **Urgencia** - Escasez y llamado a la acción
6. **CTA Final** - Segundo punto de conversión
7. **Footer/Credibilidad** - Cierre y PS

## Optimizaciones Implementadas

- Lazy loading de scripts de Calendly
- Build optimizado con Vite
- CSS purgado automáticamente por Tailwind
- Animaciones con CSS puro (sin librerías adicionales)
- Mobile-first responsive design
- Botón sticky solo en mobile para mejor UX

## Soporte de Navegadores

- Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### El popup de Calendly no se abre

Verifica que los scripts de Calendly estén cargados. Abre la consola del navegador y verifica que `window.Calendly` esté definido.

### Estilos de Tailwind no se aplican

Ejecuta:

```bash
npm install
npm run dev
```

### Error al hacer build

Limpia la carpeta `node_modules` y reinstala:

```bash
rm -rf node_modules
npm install
npm run build
```

## Licencia

Proyecto privado para validación de negocio.

---

**¿Necesitas ayuda?** Abre un issue o contacta al desarrollador.
