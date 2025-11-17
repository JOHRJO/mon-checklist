// Exemple : sauvegarder progression
document.querySelector("#step1").addEventListener("click", () => {
  localStorage.setItem("step1", "done");
  alert("Étape 1 terminée !");
});

document.querySelector("#step2").addEventListener("click", () => {
  localStorage.setItem("step2", "done");
  alert("Étape 2 terminée !");
});

// Charger progression au démarrage
window.addEventListener("load", () => {
  if(localStorage.getItem("step1") === "done"){
    document.querySelector("#step1").innerText = "Déjà terminé ✅";
  }
  if(localStorage.getItem("step2") === "done"){
    document.querySelector("#step2").innerText = "Déjà terminé ✅";
  }
});