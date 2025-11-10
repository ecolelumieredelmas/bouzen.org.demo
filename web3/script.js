document.addEventListener('DOMContentLoaded', function() {
  const header = document.getElementById('header');
  const menuToggle = document.getElementById('menu-toggle');
  const navMobile = document.getElementById('nav-mobile');
  const menuClose = document.getElementById('menu-close');
  const menuIcon = menuToggle.querySelector('i');

  function openMenu() {
    navMobile.classList.remove('translate-x-full');
    menuIcon.classList.replace('fa-bars','fa-xmark');
  }

  function closeMenu() {
    navMobile.classList.add('translate-x-full');
    menuIcon.classList.replace('fa-xmark','fa-bars');
  }

  // Abrir/cerrar menú con hamburguesa
  menuToggle.addEventListener('click', ()=>navMobile.classList.contains('translate-x-full') ? openMenu() : closeMenu());

  // Cerrar menú con X
  menuClose.addEventListener('click', closeMenu);

  // Cerrar menú al hacer click en un link
  navMobile.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

  // Click fuera del menú cierra
  document.addEventListener('click', e => {
    if (!e.target.closest('#nav-mobile') && !e.target.closest('#menu-toggle') && !navMobile.classList.contains('translate-x-full')) {
      closeMenu();
    }
  });

  // Header transparente -> semi-transparente al scroll
  window.addEventListener('scroll', ()=>{
    if(window.scrollY>50){
      header.classList.add('bg-[rgba(17,17,17,0.85)]','backdrop-blur-md');
      header.classList.remove('bg-transparent');
    } else {
      header.classList.add('bg-transparent');
      header.classList.remove('bg-[rgba(17,17,17,0.85)]','backdrop-blur-md');
    }
  });
});
