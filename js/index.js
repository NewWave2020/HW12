const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: 'false'
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  $(function () {
    $("#accordion").accordion({
      collapsible: true,
    });
    $('.accordion').accordion({
      active: true,
      collapsible: true,
      heightStyle: 'content',
      header: '> .questions__style > .question__btn'
    });

    // var icons = {
    //   header: "ui-icon-circle-arrow-e",
    //   activeHeader: "ui-icon-circle-arrow-s"
    // };
    // $("#accordion").accordion({
    //   icons: icons
    // });
    
    $("#accordion").accordion({
      animate: 300
    });
    
    // $( "#accordion" ).accordion( "option", "icons", null );
  });