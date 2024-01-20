(() => {
  document.addEventListener('DOMContentLoaded', () => {

    (function () {
      var filterBtn = document.querySelectorAll('.filter__btn'),
        active = document.getElementsByClassName('active');

      Array.from(filterBtn).forEach(function (item, i, filterBtn) {
        item.addEventListener('click', function (e) {
          if (active.length > 0 && active[0] !== this)
            active[0].classList.remove('active');

          this.classList.toggle('active');
        });
      });
    })();

    (function () {
      var pagBtn = document.querySelectorAll('.pagination__link'),
        pagActive = document.getElementsByClassName('pagination__active');

      Array.from(pagBtn).forEach(function (item, i, pagBtn) {
        item.addEventListener('click', function (e) {
          if (pagActive.length > 0 && pagActive[0] !== this)
            pagActive[0].classList.remove('pagination__active');

          this.classList.toggle('pagination__active');
        });
      });
    })();

    document.getElementById("geoBtn").addEventListener("click", function () {
      document.getElementById("geoBtn").classList.toggle("show")
      document.querySelector(".header__geo-list").classList.toggle("show")
    })

  });
})();