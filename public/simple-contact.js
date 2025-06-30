// Simple Contact Form - Funcionamiento inmediato sin configuración
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const btnText = document.getElementById('btn-text');
  const btnLoading = document.getElementById('btn-loading');
  const formMessage = document.getElementById('form-message');
  const messageText = document.getElementById('message-text');

  // Función para mostrar mensajes
  function showMessage(message, isSuccess = true) {
    messageText.textContent = message;
    formMessage.className = `mt-4 p-4 rounded-lg ${isSuccess ? 'success' : 'error'}`;
    formMessage.classList.remove('hidden');
    
    // Auto-ocultar después de 5 segundos
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

  // Validación en tiempo real
  function addRealTimeValidation() {
    const inputs = form.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
      input.addEventListener('blur', () => {
        validateField(input);
      });
      
      input.addEventListener('input', () => {
        // Limpiar errores mientras escribe
        input.style.borderColor = '#374151';
      });
    });
  }

  function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';

    switch (field.type) {
      case 'text':
        if (!value) {
          isValid = false;
          errorMessage = 'Este campo es requerido';
        } else if (value.length < 2) {
          isValid = false;
          errorMessage = 'Debe tener al menos 2 caracteres';
        }
        break;
      
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) {
          isValid = false;
          errorMessage = 'El email es requerido';
        } else if (!emailRegex.test(value)) {
          isValid = false;
          errorMessage = 'Ingresa un email válido';
        }
        break;
      
      default: // textarea
        if (!value) {
          isValid = false;
          errorMessage = 'Este campo es requerido';
        } else if (value.length < 10) {
          isValid = false;
          errorMessage = 'Describe tu proyecto con más detalle (mín. 10 caracteres)';
        }
    }

    // Aplicar estilos de validación
    if (!isValid) {
      field.style.borderColor = '#ef4444';
      showFieldError(field, errorMessage);
    } else {
      field.style.borderColor = '#10b981';
      hideFieldError(field);
    }

    return isValid;
  }

  function showFieldError(field, message) {
    // Remover error anterior si existe
    hideFieldError(field);
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error text-red-400 text-sm mt-1';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
  }

  function hideFieldError(field) {
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
      existingError.remove();
    }
  }

  // Envío del formulario
  async function handleSubmit(formData) {
    const nombre = formData.get('nombre').trim();
    const email = formData.get('email').trim();
    const proyecto = formData.get('proyecto').trim();
    
    // Crear el mailto link
    const subject = `Nuevo proyecto de ${nombre}`;
    const body = `Hola Michele,

Mi nombre es ${nombre} y me gustaría contactarte para un proyecto.

Mis datos de contacto:
📧 Email: ${email}

📋 Descripción del proyecto:
${proyecto}

Quedo atento a tu respuesta.

Saludos,
${nombre}`;

    const mailtoLink = `mailto:michelelanza07@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Intentar abrir el cliente de email
    window.location.href = mailtoLink;
    
    return true;
  }

  // Event listener para el envío del formulario
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    setLoading(true);

    try {
      // Validar todos los campos
      const fields = form.querySelectorAll('input[required], textarea[required]');
      let allValid = true;
      
      fields.forEach(field => {
        if (!validateField(field)) {
          allValid = false;
        }
      });

      if (!allValid) {
        throw new Error('Por favor corrige los errores en el formulario');
      }

      // Simular un pequeño delay para mejor UX
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Enviar el formulario
      await handleSubmit(formData);
      
      showMessage('¡Perfecto! Se abrirá tu cliente de email para enviar el mensaje. Si no se abre automáticamente, puedes escribirme a michelelanza07@gmail.com', true);
      
      // Limpiar formulario después del envío exitoso
      setTimeout(() => {
        form.reset();
        // Limpiar estilos de validación
        fields.forEach(field => {
          field.style.borderColor = '#374151';
          hideFieldError(field);
        });
      }, 2000);

    } catch (error) {
      console.error('Error al enviar mensaje:', error);
      showMessage(error.message || 'Error al procesar el formulario. Por favor intenta de nuevo.', false);
    } finally {
      setLoading(false);
    }
  });

  // Inicializar validación en tiempo real
  addRealTimeValidation();

  // Agregar efecto de focus mejorado
  const inputs = form.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.style.borderColor = '#60a5fa';
      input.style.boxShadow = '0 0 0 3px rgba(96, 165, 250, 0.1)';
    });
    
    input.addEventListener('blur', () => {
      if (input.style.borderColor === 'rgb(96, 165, 250)') {
        input.style.borderColor = '#374151';
      }
      input.style.boxShadow = 'none';
    });
  });

  console.log('📧 Simple contact form ready!');
});
