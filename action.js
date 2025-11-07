// Pequeñas interacciones: menú móvil, validación y toast
document.addEventListener('DOMContentLoaded', function(){
  // Año en el footer
  const year = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = year;

  // Toggle nav
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');
  if(navToggle && siteNav){
    navToggle.addEventListener('click', function(){
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      siteNav.classList.toggle('open');
    });
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      const targetId = this.getAttribute('href').slice(1);
      if(!targetId) return;
      const target = document.getElementById(targetId);
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // Reserva: validación ligera y feedback
  const form = document.getElementById('reservationForm');
  const toast = document.getElementById('toast');
  function showToast(msg){
    if(!toast) return;
    toast.textContent = msg;
    toast.hidden = false;
    toast.style.opacity = '1';
    setTimeout(()=>{ toast.style.opacity = '0'; setTimeout(()=> toast.hidden = true,300); }, 3000);
  }

  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const data = new FormData(form);
      const name = (data.get('name')||'').toString().trim();
      const people = Number(data.get('people')) || 0;
      const date = data.get('date');
      const time = data.get('time');

      if(!name){ showToast('Por favor indica tu nombre.'); return; }
      if(people < 1){ showToast('Indica al menos 1 persona.'); return; }
      if(!date || !time){ showToast('Selecciona fecha y hora.'); return; }

      // Simulación de envío
      showToast('Reserva enviada. ¡Nos vemos pronto!');
      form.reset();
    });
  }
});
