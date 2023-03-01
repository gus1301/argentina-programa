function showHideInformation(id) {
  const CONTACTO = {
    phone: "+54 11-32533820",
    email: "geral@gmail.com",
    address: "Villa Crespo, CABA, Juan Ramírez de Velasco 360",
  };

  const elemento = document.getElementById(id);

  elemento.style.display === "none" || elemento.style.display === ""
    ? (elemento.style.display = "block")
    : (elemento.style.display = "none");

  elemento.innerHTML = CONTACTO[id];
}
