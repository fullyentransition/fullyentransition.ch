(() => {
  // <stdin>
  document.addEventListener("DOMContentLoaded", () => {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  });
  document.getElementById("submitBtn").addEventListener("click", function() {
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var mailtoLink = "mailto:contact@association.org?subject=Message depuis le site&body=Email: " + encodeURIComponent(email) + "%0D%0A%0D%0A" + encodeURIComponent(message);
    this.href = mailtoLink;
  });
})();
