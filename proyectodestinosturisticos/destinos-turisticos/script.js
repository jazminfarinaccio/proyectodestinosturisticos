document.addEventListener("DOMContentLoaded", () => {

  fetch("header.html")
    .then(response => {
      if (!response.ok) {
        throw new Error("No se pudo cargar el encabezado.");
      }
      return response.text();
    })
    .then(html => {
      document.getElementById("header").innerHTML = html;
    })
    .catch(error => console.error(error));

  fetch("footer.html")
    .then(response => {
      if (!response.ok) {
        throw new Error("No se pudo cargar el pie de página.");
      }
      return response.text();
    })
    .then(html => {
      document.getElementById("footer").innerHTML = html;
    })
    .catch(error => console.error(error));

});