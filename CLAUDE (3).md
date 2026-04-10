# CLAUDE.md — Portfolio Web: Luis Ilarraza
## GitHub Pages | Dual-Face Personal Brand Site

---

## 🎯 OBJETIVO DEL PROYECTO

Construir un sitio web de portfolio profesional deployable en **GitHub Pages** (HTML/CSS/JS vanilla, sin frameworks que requieran build step) para **Luis Ilarraza**, un especialista venezolano en automatización con IA y gestión de proyectos digitales.

El sitio tiene **DOS CARAS / MODOS** que el usuario puede alternar con un toggle/switch visible:

1. **CARA A — "El Project Manager"**: Luis como líder de innovación empresarial, transformación digital y optimización de workflows a escala corporativa.
2. **CARA B — "El Developer"**: Luis como desarrollador de sistemas de automatización, bots multi-agente, plataformas de facturación e inventario.

El toggle entre modos debe ser fluido, animado, y cambiar el contenido principal manteniendo el mismo header/footer.

---

## 🗂️ ESTRUCTURA DE ARCHIVOS

```
/
├── index.html          # Página principal (todo en un archivo o con includes via JS)
├── style.css           # Estilos globales + variables de tema
├── main.js             # Lógica del toggle, animaciones, interacciones
├── assets/
│   ├── foto_luis.jpg   # (placeholder, el usuario reemplazará)
│   └── og-image.jpg    # (placeholder para social sharing)
└── README.md
```

> ⚠️ IMPORTANTE: Todo debe funcionar en GitHub Pages (static hosting). NO usar Node.js, npm, React, ni ningún framework con build step. Solo HTML, CSS y JavaScript vanilla. Las fuentes e íconos pueden venir de CDN (Google Fonts, Font Awesome, etc.).

---

## 🎨 IDENTIDAD VISUAL

**Paleta de colores:**
- Fondo principal: `#0a0e1a` (azul oscuro casi negro)
- Fondo secundario: `#111827`
- Acento primario (PM mode): `#3b82f6` (azul eléctrico)
- Acento secundario (Dev mode): `#10b981` (verde esmeralda)
- Texto principal: `#f1f5f9`
- Texto secundario: `#94a3b8`
- Bordes/cards: `rgba(255,255,255,0.08)`

**El toggle de modo** debe cambiar visualmente el color acento del sitio entero. En modo PM → azul. En modo Dev → verde.

**Tipografía:**
- Títulos: `Inter` o `Space Grotesk` (Google Fonts)
- Código/tech: `JetBrains Mono` o `Fira Code` (solo en sección Dev)
- Cuerpo: `Inter`

**Estética general:** Dark mode profesional, limpio, con sutil uso de glassmorphism en cards. Inspirado en portfolios de tech líderes. NO sobrecargado de animaciones. Elegante y cargable rápido.

---

## 🧩 ESTRUCTURA DE SECCIONES

### HEADER (permanente en ambos modos)
- Logo/nombre: "Luis Ilarraza"
- Toggle de modo: Switch con label "Project Manager ↔ Developer"
  - Visualmente: pill switch con ícono de 📊 (PM) y 💻 (Dev)
- Nav links que cambian según el modo activo
- Botón CTA: "Contáctame" → `mailto:luisalejandroilarraza@gmail.com`

---

### HERO SECTION (cambia según modo)

**Modo PM:**
```
HEADLINE: "Transformo operaciones en ventajas competitivas"
SUBHEADLINE: "Especialista en automatización con IA + Gestión de proyectos digitales
              4+ años liderando proyectos tecnológicos de alto impacto en Venezuela"
BADGES: [Automatización con IA] [Gestión de Proyectos] [Power BI] [SCRUM]
CTA PRIMARIO: "Ver mi experiencia →"
CTA SECUNDARIO: "Descargar CV"
STAT PILLS: "60% mejora en eficiencia operativa" | "5 proyectos enterprise" | "4+ años"
```

**Modo Developer:**
```
HEADLINE: "Construyo sistemas que trabajan mientras duermes"
SUBHEADLINE: "Multi-agent AI systems • Bots conversacionales • Plataformas de automatización
              Desde Venezuela para el mundo"
BADGES: [Python] [VBA + IA] [Multi-Agent] [APIs] [HTML/CSS/JS]
CTA PRIMARIO: "Ver mis proyectos →"
CTA SECUNDARIO: "GitHub"
STAT PILLS: "7 agentes IA en producción" | "87% reducción de tiempo" | "3 sistemas enterprise"
```

En ambos modos: foto profesional de Luis a la derecha (usar placeholder si no hay imagen).

---

### SECCIÓN "SOBRE MÍ" (cambia según modo)

**Modo PM:**
Narrativa: Luis como líder que toma sistemas caóticos y los convierte en máquinas eficientes. Énfasis en resultados de negocio, no en tecnología. Mencionar: Soluciones Laser C.A., liderazgo de equipo de 5 personas, implementación de KPIs con Power BI, metodología SCRUM (certificado por Sybven, 36h), gestión documental digital, eventos corporativos 100+ asistentes, reducción de errores, mejora de eficiencia 60%.

**Modo Developer:**
Narrativa: Luis como constructor de sistemas de automatización complejos. Alguien que va desde el diseño de flujos conversacionales hasta sistemas multi-agente en producción. Mencionar: Stack técnico, proyectos con IA generativa (Claude/ChatGPT), VBA automatizado, bots con base de datos en tiempo real, plataformas web fullstack desplegadas en producción.

---

### SECCIÓN "EXPERIENCIA / PROYECTOS" (completamente diferente por modo)

---

#### MODO PM — Timeline de Experiencia

Formato: **Timeline vertical** con cards expandibles.

**Entrada 1: Líder de Innovación 360°**
- Empresa: Soluciones Laser C.A. | Nov 2021 – Ene 2026 | Sucre, Venezuela
- Empresa líder en facturación digital (Providencias 121 y 000102)
- Logros clave (con íconos):
  - 🚀 Prototipo de sistema de facturación con VBA + IA → redujo trabajo de 1 mes a 72 horas
  - 🤖 Flujos conversacionales inteligentes con integración DB en tiempo real
  - 📊 Sistema de KPIs con Power BI para monitoreo de operaciones digitales
  - 🌐 Plataformas web HTML/GitHub con Google Sheets API
  - 🧠 Prompt engineering para automatización de procesos tributarios
  - 👥 Liderazgo de plataforma de Gestión Documental Digital (equipo de 5 personas)
  - 📅 Coordinación de eventos corporativos 100+ asistentes, gestión end-to-end

**Entrada 2: Presidente & Fundador**
- Organización: Asociación Civil Juventud Internacional de Desarrollo | Nov 2020 – Nov 2021
- Logros:
  - 🏛️ Fundación y operación estratégica de la organización
  - ⚡ 60% mejora en eficiencia operativa mediante gestión digital
  - 🤝 Alianzas estratégicas con organizaciones clave
  - 🎤 Representación ante stakeholders gubernamentales y privados

**Subsección "Stack de Herramientas PM":**
Grid de íconos: Power BI | Excel Avanzado | ClickUp | Microsoft 365 | Google Analytics | Adobe Suite | GitHub | WordPress | SCRUM/Agile

---

#### MODO DEVELOPER — Grid de Proyectos

Formato: **Grid de project cards** con tags de tecnología, descripción técnica y métricas.

**Proyecto 1: SantoniBot — Sistema Multi-Agente ERP**
```
STATUS: 🟢 En Producción
CLIENTE: Alimentos Santoni, C.A.
DESCRIPCIÓN: Sistema de consulta ERP multi-agente con 7 departamentos especializados
             (Ventas, Finanzas, Contabilidad, RRHH, Producción, Compras). Orquestador
             central que enruta consultas en lenguaje natural a los agentes correctos.
             Integración con iDempiere y dual PostgreSQL databases.
STACK: Python • Multi-Agent Architecture • PostgreSQL • Docker • Ubuntu Server • Claude API
MÉTRICAS: 7 agentes especializados | Dual DB | Docker deployment
HIGHLIGHT: "De Excel a consultas en lenguaje natural en tiempo real"
```

**Proyecto 2: Sistema Axones — Automatización de Producción**
```
STATUS: 🟡 En Desarrollo
CLIENTE: Inversiones Axones 2008, C.A. (fabricante de materiales de empaque)
DESCRIPCIÓN: Sistema de automatización de producción industrial. Procesamiento de
             datasets Excel masivos, digitalización de formularios físicos, módulo
             de compras integrado, gestión de inventario y producción. Integración
             con Jira para gestión de tareas y seguimiento.
STACK: Python • Excel/VBA • Jira API • Google Sheets • Automatización de procesos
MÉTRICAS: 88 tareas gestionadas en Jira | Dataset industrial procesado
HIGHLIGHT: "Digitalizando la industria venezolana de manufactura"
```

**Proyecto 3: Bot Conversacional Inteligente**
```
STATUS: 🟢 Deployado
AÑO: 2024
DESCRIPCIÓN: Sistema de atención automatizada con integración de base de datos en
             tiempo real. Flujos conversacionales diseñados con IA para respuestas
             contextuales y personalizadas. Reemplazó atención manual reduciendo
             tiempos de respuesta drásticamente.
STACK: ChatGPT API • Google Sheets • Diseño de flujos NLP • JavaScript
MÉTRICAS: Respuesta 24/7 | Integración DB en tiempo real
```

**Proyecto 4: Sistema de Facturación Automatizada**
```
STATUS: 🟢 En Producción
AÑO: 2023–2024
DESCRIPCIÓN: Macros VBA generadas con IA para procesamiento masivo de facturas
             según normativas venezolanas (Providencias 121 y 000102 del SENIAT).
             Automatización completa del ciclo de facturación fiscal.
STACK: Excel VBA • ChatGPT/Claude (code generation) • SENIAT normativas
MÉTRICAS: ⏱️ 87% reducción de tiempo | ✅ 95% menos errores humanos
HIGHLIGHT: "1 mes de trabajo → 72 horas"
```

**Proyecto 5: Plataformas Web Dinámicas / Dashboards**
```
STATUS: 🟢 Múltiples en Producción
AÑO: 2023–2024
DESCRIPCIÓN: Dashboards en tiempo real conectando GitHub Pages con Google Sheets API
             para visualización de KPIs empresariales. Múltiples proyectos deployados
             para clientes en producción.
STACK: HTML • CSS • JavaScript • Google Sheets API • GitHub Pages
MÉTRICAS: Múltiples clientes | Real-time data sync
```

**Proyecto 6: Panadería Rústicos — Sistema Integrado**
```
STATUS: ✅ Completado
DESCRIPCIÓN: Sistema de gestión para panadería artesanal. Módulo de inventario,
             control de producción y plataforma de pedidos. Solución fullstack
             adaptada a las necesidades operativas del negocio.
STACK: HTML/CSS/JS • Google Sheets API • Automatización de procesos
```

**Subsección "Stack Técnico":**
Nube de tecnologías organizada por categorías:
- **IA & LLMs**: Claude API, ChatGPT API, Prompt Engineering, Claude Code
- **Automatización**: Python, VBA, n8n (conceptual), Multi-Agent
- **Data**: PostgreSQL, Google Sheets, Power BI, Excel Avanzado
- **Web**: HTML, CSS, JavaScript, GitHub Pages, Google Sheets API
- **DevOps/Tools**: Docker, Ubuntu Server, Git, Jira API, ClickUp

---

### SECCIÓN "EDUCACIÓN & CERTIFICACIONES" (igual en ambos modos, styling diferente)

Cards con:
1. **Técnico Superior en Publicidad y Mercadeo** — ISUM (Instituto Universitario de Mercadotecnia) | 2025 | Especialización en Estrategias Digitales, Investigación de Mercados, Innovación y Tecnología
2. **IA Generativa Corporativa** — Intenzia | Curso intensivo 4H | 2025
3. **Marketing con IA** — ISUM | Curso intensivo 8H | 2024
4. **Metodología SCRUM** — Sybven | Taller completo 36H | 2023

---

### SECCIÓN "INTERESES / FILOSOFÍA" (pequeña, elegante)

**Modo PM:**
Cita inspiradora sobre liderazgo + IA. Algo como:
> "La tecnología no reemplaza al líder — lo amplifica. Mi trabajo es asegurarme de que cada proceso corra al 100% para que mi equipo pueda enfocarse en lo que realmente importa."

Íconos de intereses: IA & Automatización | Nuevas Tecnologías | Innovación | Gamification

**Modo Developer:**
Cita de Jensen Huang adaptada al contexto de Luis:
> "Jensen Huang dijo que si tu ingeniero de $500K no gasta $250K en tokens, algo está mal. Estoy en eso."

Contexto: Mencionar que Luis usa Claude intensivamente (múltiples sesiones diarias) como herramienta central de trabajo.

---

### FOOTER / CONTACTO (igual en ambos modos)

- Nombre + título según modo activo
- Email: luisalejandroilarraza@gmail.com
- Teléfono: 04124898292
- LinkedIn (link placeholder)
- GitHub (link placeholder)
- Instagram (link placeholder)
- Ubicación: Venezuela 🇻🇪
- Copyright 2026

---

## ⚡ INTERACCIONES Y ANIMACIONES

1. **Toggle de modo**: Transición suave (300ms) de todos los contenidos. El color acento del sitio cambia (azul ↔ verde) via CSS variables.
2. **Cards de proyectos**: Hover con elevación sutil y border glow en el color del modo activo.
3. **Timeline (modo PM)**: Las entradas aparecen con fade-in al hacer scroll (Intersection Observer API).
4. **Stats/números**: Contador animado al entrar en viewport.
5. **Tech stack**: Tags con hover colorido.
6. **Scroll suave** entre secciones.

NO usar librerías de animación externas. Solo CSS transitions + JS vanilla.

---

## 📱 RESPONSIVE

- Mobile first.
- Breakpoints: 768px (tablet), 1024px (desktop).
- El toggle en mobile debe ser prominente (parte del hero, no solo en el nav).
- Las grids de proyectos colapsan a 1 columna en mobile.
- El timeline en mobile se simplifica.

---

## 🔧 INSTRUCCIONES TÉCNICAS PARA CLAUDE CODE

1. **Empieza** creando `index.html` con toda la estructura HTML semántica y el contenido de AMBOS modos (oculto/visible via clases JS).
2. **Luego** crea `style.css` con CSS variables para el tema dual.
3. **Luego** crea `main.js` con la lógica del toggle y animaciones.
4. **El toggle** debe guardar la preferencia en `localStorage` para que el usuario vuelva al mismo modo.
5. **Todos los textos** deben estar en **español**.
6. **El CV PDF** descargable debe apuntar a `assets/CV_Luis_Ilarraza.pdf` (placeholder, el usuario lo colocará).
7. Generar un `README.md` con instrucciones de cómo hacer deploy en GitHub Pages.
8. **NO hardcodear** colores fuera de las CSS variables — todo el cambio de tema debe operar desde las variables del `:root`.
9. Testear mentalmente que el HTML sea válido y que los scripts no bloqueen el render.

---

## 📋 DATOS DE CONTACTO

- **Nombre completo:** Luis Alejandro Ilarraza
- **Email:** luisalejandroilarraza@gmail.com
- **Teléfono:** 04124898292
- **Ubicación:** El Paraíso, Caracas, Venezuela
- **Idiomas:** Español (nativo), Inglés (intermedio)

---

## ✅ CHECKLIST DE ENTREGA

- [ ] `index.html` — estructura completa con ambos modos
- [ ] `style.css` — tema dual, responsive, glassmorphism
- [ ] `main.js` — toggle funcional, animaciones, localStorage
- [ ] `README.md` — instrucciones de deploy en GitHub Pages
- [ ] Funciona abriendo `index.html` directo en el browser (sin servidor)
- [ ] Funciona en mobile (320px min-width)
- [ ] El toggle cambia TODO el contenido y el color acento del sitio
- [ ] Links de email y teléfono son funcionales (`mailto:` y `tel:`)
