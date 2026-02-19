document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

        });
    });

});

// Récupérer les valeurs des champs Email et Message
const submitBtn = document.getElementById('submitBtn');
if (submitBtn) {
    submitBtn.addEventListener('click', function () {
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        // Créer l'URL mailto avec l'email et le message
        var mailtoLink = "mailto:contact@association.org?subject=Message depuis le site&body=Email: " + encodeURIComponent(email) + "%0D%0A%0D%0A" + encodeURIComponent(message);

        // Appliquer le lien mailto à l'élément
        this.href = mailtoLink;
    });
}

