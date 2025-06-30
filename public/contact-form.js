// Contact Form Handler
// Opciones de implementación: EmailJS, Formspree, o endpoint personalizado

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const btnText = document.getElementById('btn-text');
  const btnLoading = document.getElementById('btn-loading');
  const formMessage = document.getElementById('form-message');
  const messageText = document.getElementById('message-text');

  // Configuración para EmailJS (opción más fácil)
  const EMAILJS_CONFIG = {
    serviceId: 'YOUR_SERVICE_ID', // Reemplazar con tu Service ID de EmailJS
    templateId: 'YOUR_TEMPLATE_ID', // Reemplazar con tu Template ID de EmailJS
    publicKey: 'YOUR_PUBLIC_KEY' // Reemplazar con tu Public Key de EmailJS
  };

  // Función para mostrar mensajes
  function showMessage(message, isSuccess = true) {
    messageText.textContent = message;
    formMessage.className = `mt-4 p-4 rounded-lg ${isSuccess ? 'success' : 'error'}`;
    formMessage.classList.remove('hidden');
    
    // Ocultar mensaje después de 5 segundos
    setTimeout(() => {
      formMessage.classList.add('hidden');
    }, 5000);
  }

  // Función para mostrar estado de carga
  function setLoading(loading) {
    if (loading) {
      btnText.classList.add('hidden');
      btnLoading.classList.remove('hidden');
      submitBtn.classList.add('loading');
      submitBtn.disabled = true;
    } else {
      btnText.classList.remove('hidden');
      btnLoading.classList.add('hidden');
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;
    }
  }

  // Opción 1: Envío con EmailJS
  async function sendWithEmailJS(formData) {
    try {
      // Cargar EmailJS si no está disponible
      if (typeof emailjs === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
        document.head.appendChild(script);
        
        return new Promise((resolve) => {
          script.onload = () => {
            emailjs.init(EMAILJS_CONFIG.publicKey);
            resolve(sendEmailJSMessage(formData));
          };
        });
      } else {
        return sendEmailJSMessage(formData);
      }
    } catch (error) {
      throw new Error('Error al cargar EmailJS: ' + error.message);
    }
  }

  function sendEmailJSMessage(formData) {
    const templateParams = {
      from_name: formData.get('nombre'),
      from_email: formData.get('email'),
      message: formData.get('proyecto'),
      to_name: 'Michele', // Tu nombre
      reply_to: formData.get('email')
    };

    return emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams
    );
  }

  // Opción 2: Envío con Formspree (alternativa gratuita)
  async function sendWithFormspree(formData) {
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'; // Reemplazar con tu endpoint de Formspree
    
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Error en el envío del formulario');
    }

    return response.json();
  }

  // Opción 3: Envío directo por email (usando mailto)
  function sendWithMailto(formData) {
    const nombre = formData.get('nombre');
    const email = formData.get('email');
    const proyecto = formData.get('proyecto');
    
    const subject = `Nuevo proyecto de ${nombre}`;
    const body = `Nombre: ${nombre}%0D%0AEmail: ${email}%0D%0A%0D%0AProyecto:%0D%0A${proyecto}`;
    
    window.open(`mailto:michelelanza07@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`);
    return Promise.resolve();
  }

  // Opción 4: Envío con endpoint personalizado (si tienes backend)
  async function sendWithCustomEndpoint(formData) {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      throw new Error('Error en el servidor');
    }

    return response.json();
  }

  // Manejador principal del formulario
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    setLoading(true);

    try {
      // Validación básica
      const nombre = formData.get('nombre').trim();
      const email = formData.get('email').trim();
      const proyecto = formData.get('proyecto').trim();

      if (!nombre || !email || !proyecto) {
        throw new Error('Por favor completa todos los campos');
      }

      // Validar email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new Error('Por favor ingresa un email válido');
      }

      // Intentar envío con diferentes métodos
      // Puedes cambiar el orden según tu preferencia
      
      try {
        // Método 1: EmailJS (requiere configuración)
        if (EMAILJS_CONFIG.serviceId !== 'YOUR_SERVICE_ID') {
          await sendWithEmailJS(formData);
          showMessage('¡Mensaje enviado exitosamente! Te contactaré pronto.', true);
        } else {
          throw new Error('EmailJS no configurado');
        }
      } catch (emailjsError) {
        console.log('EmailJS falló, intentando Formspree...');
        
        try {
          // Método 2: Formspree (requiere registro gratuito)
          await sendWithFormspree(formData);
          showMessage('¡Mensaje enviado exitosamente! Te contactaré pronto.', true);
        } catch (formspreeError) {
          console.log('Formspree falló, usando mailto...');
          
          // Método 3: Mailto (siempre funciona)
          await sendWithMailto(formData);
          showMessage('Se abrirá tu cliente de email para enviar el mensaje.', true);
        }
      }

      // Limpiar formulario después del envío exitoso
      form.reset();

    } catch (error) {
      console.error('Error al enviar mensaje:', error);
      showMessage(error.message || 'Error al enviar el mensaje. Por favor intenta de nuevo.', false);
    } finally {
      setLoading(false);
    }
  });

  console.log('📧 Contact form handler loaded!');
});

// Instrucciones para configurar EmailJS:
/*
1. Ve a https://www.emailjs.com/
2. Crea una cuenta gratuita
3. Crea un servicio de email (Gmail, Outlook, etc.)
4. Crea un template de email
5. Reemplaza YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, y YOUR_PUBLIC_KEY con tus valores reales
6. El template debe incluir estas variables: {{from_name}}, {{from_email}}, {{message}}, {{reply_to}}
*/

// Instrucciones para configurar Formspree:
/*
1. Ve a https://formspree.io/
2. Crea una cuenta gratuita
3. Crea un nuevo formulario
4. Reemplaza YOUR_FORM_ID con tu ID real de Formspree
*/
