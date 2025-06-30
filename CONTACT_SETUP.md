# Formulario de Contacto - Configuración

## Estado actual: ✅ Funcionando con mailto

El formulario está configurado para funcionar inmediatamente usando `mailto:`, que abre el cliente de email del usuario con el mensaje pre-formateado.

## Opciones de mejora

### 1. EmailJS (Gratis, recomendado)

**Ventajas:**
- Envío directo sin abrir cliente de email
- Fácil configuración
- Plan gratuito: 200 emails/mes

**Configuración:**
1. Ve a [EmailJS](https://www.emailjs.com/)
2. Crea una cuenta gratuita
3. Configura un servicio de email (Gmail, Outlook, etc.)
4. Crea un template con estas variables:
   ```
   {{from_name}} - Nombre del usuario
   {{from_email}} - Email del usuario  
   {{message}} - Mensaje del proyecto
   {{reply_to}} - Email para responder
   ```
5. En `contact-form.js`, reemplaza:
   ```javascript
   const EMAILJS_CONFIG = {
     serviceId: 'TU_SERVICE_ID',
     templateId: 'TU_TEMPLATE_ID', 
     publicKey: 'TU_PUBLIC_KEY'
   };
   ```
6. Cambia el script en `index.astro`:
   ```html
   <script type="module" src="/contact-form.js"></script>
   ```

### 2. Formspree (Gratis)

**Ventajas:**
- Sin configuración de servidor
- Plan gratuito: 50 submissions/mes

**Configuración:**
1. Ve a [Formspree](https://formspree.io/)
2. Crea una cuenta y un formulario
3. En `contact-form.js`, reemplaza:
   ```javascript
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/TU_FORM_ID';
   ```

### 3. Netlify Forms (Si usas Netlify)

**Configuración:**
1. Agrega `netlify` al atributo del form:
   ```html
   <form netlify name="contact" id="contact-form">
   ```
2. Netlify manejará automáticamente el envío

### 4. Backend personalizado

Si tienes tu propio servidor, puedes crear un endpoint `/api/contact` que maneje el envío de emails.

## Archivos del proyecto

- `simple-contact.js` - Versión actual (mailto)
- `contact-form.js` - Versión completa con múltiples opciones
- Ambos incluyen validación en tiempo real y UX mejorada

## Funcionalidades incluidas

✅ Validación en tiempo real
✅ Estados de carga
✅ Mensajes de éxito/error
✅ Formulario responsive
✅ Efectos visuales mejorados
✅ Limpieza automática del formulario
✅ Manejo de errores

## Testing

Para probar el formulario:
1. Completa todos los campos
2. Haz clic en "Enviar Mensaje"
3. Se abrirá tu cliente de email con el mensaje formateado
4. Envía desde tu cliente de email normal

## Personalización

Puedes modificar el template del email en `simple-contact.js` en la función `handleSubmit()` cambiando la variable `body`.
