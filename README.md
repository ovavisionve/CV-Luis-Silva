# Portfolio — Luis Ilarraza

Sitio web de portfolio profesional con dos modos: **Project Manager** y **Developer**.

## Estructura

```
/
├── index.html          # Página principal con ambos modos
├── style.css           # Estilos globales + tema dual (PM azul / Dev verde)
├── main.js             # Toggle, animaciones, localStorage
├── assets/
│   ├── foto_luis.jpg   # Foto profesional (reemplazar placeholder)
│   ├── og-image.jpg    # Imagen para social sharing
│   └── CV_Luis_Ilarraza.pdf  # CV descargable
└── README.md
```

## Deploy en GitHub Pages

1. Ve a **Settings** > **Pages** en tu repositorio de GitHub.
2. En **Source**, selecciona la rama `main` y carpeta `/ (root)`.
3. Haz click en **Save**.
4. En unos minutos tu sitio estará disponible en `https://tu-usuario.github.io/tu-repo/`.

## Personalización

- **Foto**: reemplaza `assets/foto_luis.jpg` con tu foto profesional.
- **CV PDF**: coloca tu CV en `assets/CV_Luis_Ilarraza.pdf`.
- **Links de redes sociales**: edita los `href="#"` en el footer de `index.html` con tus URLs reales de LinkedIn, GitHub e Instagram.
- **OG Image**: reemplaza `assets/og-image.jpg` para la imagen de preview en redes sociales.

## Tecnologías

- HTML5, CSS3, JavaScript vanilla
- Google Fonts (Inter, Space Grotesk, JetBrains Mono)
- Font Awesome 6 (CDN)
- Sin frameworks, sin build step — abre `index.html` directo en el browser
