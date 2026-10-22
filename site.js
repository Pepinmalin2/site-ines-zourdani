/* Menu mobile : replié derrière un bouton, déployé au clic.
   Sans JavaScript, le menu reste entièrement visible — rien n'est perdu. */
(function () {
  var bouton = document.querySelector('.burger');
  var menu = document.getElementById('menu-principal');
  if (!bouton || !menu) return;

  function replier(ouvrir) {
    menu.classList.toggle('ouvert', ouvrir);
    bouton.setAttribute('aria-expanded', String(ouvrir));
    bouton.textContent = ouvrir ? 'Fermer' : 'Menu';
  }

  bouton.addEventListener('click', function () {
    replier(bouton.getAttribute('aria-expanded') !== 'true');
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && bouton.getAttribute('aria-expanded') === 'true') {
      replier(false);
      bouton.focus();
    }
  });

  // le menu se referme si l'on repasse en affichage large
  var large = window.matchMedia('(min-width: 721px)');
  (large.addEventListener ? large.addEventListener.bind(large, 'change') : large.addListener.bind(large))(function (e) {
    if (e.matches) replier(false);
  });
})();
