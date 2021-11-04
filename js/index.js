const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true'
  },

});

$('#accordion').accordion({
  icons: {
    "header": ".question__plus",
    "activeHeader": "ui-icon-minus"
  }
});

$(function () {
  $("#accordion").accordion({
    collapsible: true,
  });

  $('#accordion').accordion({
    active: true,
    collapsible: true,
    heightStyle: 'content',
    header: '> .questions__style > .question__btn'
  });

  $("#accordion").accordion({
    animate: 300
  });

  $(".accordion").accordion({
    heightStyle: "content"
  });

});

document.addEventListener('DOMContentLoaded', function() {

  document.querySelectorAll('.work__step_item-link').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (e) {
      const path = e.currentTarget.dataset.path;

      document.querySelectorAll('.work__step_item-link').forEach(function (btn) {
        btn.classList.remove('work__step_item-active')
      });
      e.currentTarget.classList.add('work__step_item-active');

      document.querySelectorAll('.work_bottom').forEach(function (tabsBtn) {
        tabsBtn.classList.remove('work_bottom--active')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('work_bottom--active');
    });
  });
})