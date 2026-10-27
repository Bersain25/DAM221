// Seleccionamos el elemento del DOM
const banner = document.getElementById('hero-banner');

// Cambiamos dinámicamente la imagen de fondo mediante JS
function cambiarFondoClima(clima) {
  if (clima === 'lluvia') {
    banner.style.backgroundImage = "url('https://images.unsplash.com/photo-1515694346937-94d85e41e6f0')";
  } else {
    banner.style.backgroundImage = "url('https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd')";
  }
  banner.style.backgroundSize = 'cover';
  banner.style.backgroundPosition = 'center';
}

// Ejemplo de uso
cambiarFondoClima('lluvia');

<div id="hero-banner" class="banner">
  <h1>Bienvenido a la App</h1>
</div>