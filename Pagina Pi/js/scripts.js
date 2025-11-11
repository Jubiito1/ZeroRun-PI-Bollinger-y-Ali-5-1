// scripts.js
// Maneja navegación móvil y validación del formulario (cliente).
document.addEventListener('DOMContentLoaded', function () {
  // Toggle menú móvil
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
    });
  }

  // Formulario: validación y "envío simulado"
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const mailtoBtn = document.getElementById('mailtoBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      formStatus.textContent = '';

      // Reglas básicas
      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const subject = contactForm.subject.value.trim();
      const message = contactForm.message.value.trim();

      if (!name || !email || !subject || !message) {
        formStatus.textContent = 'Por favor completá todos los campos antes de enviar.';
        return;
      }

      // Validación simple del email
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRe.test(email)) {
        formStatus.textContent = 'Ingresá un correo válido.';
        return;
      }

      // Simular envío: mostrar mensaje de éxito (sin backend)
      formStatus.textContent = 'Enviando...';
      // Simulamos latencia de red con setTimeout (solo para UX)
      setTimeout(() => {
        formStatus.textContent = `Gracias ${name}. Tu mensaje fue recibido. Nos contactaremos pronto por ${email}.`;
        contactForm.reset();
      }, 900);
    });
  }

  // Botón para abrir cliente de correo con datos del formulario (mailto)
  if (mailtoBtn) {
    mailtoBtn.addEventListener('click', () => {
      const contactForm = document.getElementById('contactForm');
      if (!contactForm) return;
      const name = encodeURIComponent(contactForm.name.value || 'Contacto');
      const email = encodeURIComponent(contactForm.email.value || '');
      const subject = encodeURIComponent(contactForm.subject.value || 'Consulta Cryonix PRO');
      const message = encodeURIComponent(contactForm.message.value || '');

      // Abrir mailto (cliente local) con un cuerpo prellenado
      const to = 'info@zerorun.example';
      const body = `Nombre: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    });
  }
});
