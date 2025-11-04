// script.js

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Empêche l'envoi du formulaire

  let nom = document.getElementById("nom").value.trim();
  let email = document.getElementById("email").value.trim();
  let motDePasse = document.getElementById("motdepasse").value.trim();

  if (nom === "" || email === "" || motDePasse === "") {
    alert("Veuillez remplir tous les champs !");
  } else {
    alert("Inscription réussie !");
    this.reset(); // Réinitialiser le formulaire
  }
});