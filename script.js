document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       1️⃣ Confirmation Soumission
    ========================== */

    const form = document.getElementById("formSoumission");
    const message = document.getElementById("messageConfirmation");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            message.innerText = "✅ Votre travail pratique a été soumis avec succès !";
            message.style.display = "block";

            form.reset();
        });
    }


    /* =========================
       2️⃣ Remplissage automatique email
    ========================== */

    const selectTP = document.querySelector("select[name='tp']");
    const emailInput = document.querySelector("input[name='email_enseignant']");

    const emails = {
        TP1: "hilairesitele@gmail.com",
        TP2: "philemonkutumbakana@gmail.com",
        TP3: "augustinwiliwoi@gmail.com",
        TP4: "dieumercikambale@gmail.com",
        TP5: "berthewassi@gmail.com"
    };

    if (selectTP && emailInput) {
        selectTP.addEventListener("change", function () {
            const selected = this.value;
            emailInput.value = emails[selected] || "";
        });
    }


    /* =========================
       3️⃣ Simulation changement statut
    ========================== */

    const boutonsSoumettre = document.querySelectorAll(".btn");

    boutonsSoumettre.forEach(function(btn) {
        btn.addEventListener("click", function() {
            console.log("Action déclenchée !");
        });
    });

});