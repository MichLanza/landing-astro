# 🚀 Guía de Despliegue - Landing Page MLDev

## Preparación antes del despliegue

### 1. Verificar que todo funciona localmente
```bash
npm run build
npm run preview
```

### 2. Subir a GitHub (requerido para la mayoría de opciones)
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

---

## 🌟 Opción 1: Netlify (RECOMENDADO)

### ¿Por qué Netlify?
- ✅ **Gratis** para proyectos personales
- ✅ **Deploy automático** desde GitHub
- ✅ **HTTPS automático**
- ✅ **Dominio personalizado** gratis
- ✅ **Formularios nativos** (bonus para tu contact form)
- ✅ **CDN global**

### Pasos:
1. **Sube tu proyecto a GitHub** (si no lo has hecho)
2. Ve a [netlify.com](https://netlify.com) y regístrate
3. Clic en **"Add new site"** → **"Import from Git"**
4. **Conecta GitHub** y selecciona tu repositorio
5. **Configuración de build:**
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Clic en **"Deploy"**
7. ¡Tu sitio estará en línea en minutos!

### URL resultado:
`https://tu-sitio-random.netlify.app`

### Dominio personalizado (opcional):
- Compra un dominio en cualquier registrar
- En Netlify: Site Settings → Domain management → Add custom domain

---

## ⚡ Opción 2: Vercel

### ¿Por qué Vercel?
- ✅ **Muy rápido** para frameworks modernos
- ✅ **Analytics incluido**
- ✅ **Deploy automático**
- ✅ **Excelente rendimiento**

### Pasos:
1. Ve a [vercel.com](https://vercel.com)
2. **"New Project"** → **"Import Git Repository"**
3. Conecta GitHub y selecciona tu repo
4. Vercel **detecta Astro automáticamente**
5. Clic en **"Deploy"**

### URL resultado:
`https://tu-repo.vercel.app`

---

## 🆓 Opción 3: GitHub Pages (100% Gratis)

### Configuración automática:
El archivo `.github/workflows/deploy.yml` ya está incluido.

### Pasos:
1. **Edita `astro.config.mjs`** y descomenta estas líneas:
   ```javascript
   site: 'https://tu-usuario.github.io',
   base: '/nombre-de-tu-repo',
   ```
   Reemplaza con tus datos reales.

2. **Sube cambios a GitHub:**
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages"
   git push origin main
   ```

3. **Habilita GitHub Pages:**
   - Ve a tu repo en GitHub
   - Settings → Pages
   - Source: **"GitHub Actions"**

4. **Espera el deploy** (2-3 minutos)

### URL resultado:
`https://tu-usuario.github.io/nombre-repo`

---

## 🌐 Opción 4: Cloudflare Pages

### Ventajas:
- ✅ **CDN súper rápido**
- ✅ **Gratis** con límites generosos
- ✅ **Analytics incluido**

### Pasos:
1. Ve a [pages.cloudflare.com](https://pages.cloudflare.com)
2. **"Create a project"** → **"Connect to Git"**
3. Selecciona tu repo de GitHub
4. **Build settings:**
   - Build command: `npm run build`
   - Build output directory: `dist`
5. **"Save and Deploy"**

---

## 📱 Optimizaciones post-despliegue

### 1. **SEO y Meta Tags**
Ya incluidos en tu `Layout.astro`:
- Title optimizado
- Meta description
- Open Graph tags

### 2. **Performance**
Tu sitio ya está optimizado:
- ✅ Imágenes optimizadas
- ✅ CSS minificado
- ✅ JavaScript lazy-loaded
- ✅ Tailwind purged

### 3. **Analytics (opcional)**
Agregar Google Analytics o Plausible:
```html
<!-- En Layout.astro, antes de </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

---

## 🎯 Recomendación final

**Para empezar rápido: Netlify**
- Más fácil de configurar
- Mejor para formularios
- Dominio personalizado simple

**Para máximo rendimiento: Vercel**
- Deploy súper rápido
- Optimizado para frameworks modernos

**Para presupuesto cero: GitHub Pages**
- 100% gratis
- Perfecto para portfolios

---

## 🔧 Troubleshooting

### Problema: "Command not found"
**Solución:** Verifica que `package.json` tenga:
```json
{
  "scripts": {
    "build": "astro build",
    "preview": "astro preview"
  }
}
```

### Problema: Rutas no funcionan
**Solución:** Para GitHub Pages, asegúrate de configurar correctamente `base` en `astro.config.mjs`.

### Problema: CSS/JS no carga
**Solución:** Verifica que los archivos estén en `/public/` y las rutas sean correctas.

---

## 📞 Tu sitio estará disponible en:

Una vez desplegado, tu landing page profesional estará disponible 24/7 con:
- ✅ **HTTPS automático**
- ✅ **Carga súper rápida**
- ✅ **Responsive en todos los dispositivos**
- ✅ **Formulario de contacto funcional**
- ✅ **Animaciones GSAP fluidas**
- ✅ **SEO optimizado**

¡Tu presencia profesional online lista para atraer clientes! 🎉
