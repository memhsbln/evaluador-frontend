# Análisis de Vistas Existentes - Evaluador Docente

Este documento detalla el análisis de los componentes (vistas) actualmente implementados en el proyecto Angular.

## 1. Resumen General
El proyecto cuenta con una estructura modular organizada en `src/components`. Se han identificado componentes principales para la landing page (`home`), autenticación (`login`, `register`) y componentes compartidos (`shared`).

## 2. Detalle por Componente

### 🏠 Home (`src/components/home`)
**Propósito:** Página de aterrizaje (Landing Page) principal de la aplicación.
- **Estructura HTML:**
  - **Hero Section:** Título, subtítulo y botón de llamada a la acción (CTA) hacia el Login.
  - **Features Section:** Grilla de tarjetas estáticas que describen las funcionalidades (Evaluación, Estadísticas, Asistencias, etc.).
  - **Footer:** Incluido directamente en el template (ver *Observaciones*).
- **Lógica (TS):** Componente básico sin lógica compleja.

### 🔐 Autenticación (`src/components/login`)

#### Login
**Propósito:** Formulario de inicio de sesión.
- **Formulario:** `ReactiveForm` con campos `username` y `password`.
- **Validaciones:** Campos requeridos.
- **Funcionalidad:** Muestra en consola los valores del formulario al enviar. Enlace a registro.

#### Register
**Propósito:** Formulario de creación de cuenta.
- **Formulario:** `ReactiveForm` con `name`, `username`, `email`, `password`, `confirmPassword`.
- **Validaciones:** Requerido, formato email, longitud mínima de contraseña.
- **Funcionalidad:** Muestra en consola los valores. Pendiente integración con servicio de registro.

### 🧩 Shared (`src/components/shared`)

#### Header & Footer
**Estado:** Esqueletos básicos (Placeholders).
- Actualmente solo muestran "header works!" y "footer works!".
- **Nota:** El `HomeComponent` tiene su propio footer hardcodeado, lo cual es una duplicidad.

#### Chatbot
**Propósito:** Asistente virtual flotante con integración IA.
- **UI:** Botón flotante que despliega una ventana de chat estilo "widget".
- **Lógica:**
  - Mantiene historial de mensajes (`user` y `bot`).
  - Integra `ChatService` para comunicación con backend/API.
  - Autoscroll al recibir mensajes.
  - Manejo de estado de carga (`isLoading`).

## 3. Observaciones y Recomendaciones
1.  **Header y Footer:** Se recomienda implementar el diseño final en los componentes `HeaderComponent` y `FooterComponent` y utilizarlos en el `app.component.html` (o layout principal) en lugar de hardcodearlos en cada vista (como el footer en Home).
2.  **Servicios:** Los formularios de Login y Registro solo hacen `console.log`. Se requiere conectar con `AuthService` (si existe) para la autenticación real.
3.  **Estilos:** Verificar si los estilos son globales o encapsulados. El diseño del Home parece completo en CSS.

---
*Generado automáticamente por Antigravity*
