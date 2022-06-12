// Make Driver Seats Slider works when click on nav-tabs
$('#driver-seat .nav-tabs .nav-link').each(function() {
  $(this).on('click', function() {
    if($(this).attr('data-toggle') == 'Go to slide 1') {
      $('.swiper-pagination-bullet[aria-label="Go to slide 1"]').click()
    } else if($(this).attr('data-toggle') == 'Go to slide 2') {
      $('.swiper-pagination-bullet[aria-label="Go to slide 2"]').click()
    } else {
      $('.swiper-pagination-bullet[aria-label="Go to slide 3"]').click()
    }

    $(this).addClass('active').parent().siblings().find('.nav-link').removeClass('active')
  })
})
$('.swiper-pagination .swiper-pagination-bullet').each(function() {
  $(this).on('click', function() {
    if($(this).attr('aria-label') == 'Go to slide 1') {
      $('#driver-seat .nav-tabs .nav-link').removeClass('active')
      $('.nav-link[data-toggle="Go to slide 1"]').addClass('active')
    } else if($(this).attr('aria-label') == 'Go to slide 2') {
      $('#driver-seat .nav-tabs .nav-link').removeClass('active')
      $('.nav-link[data-toggle="Go to slide 2"]').addClass('active')
    } else if($(this).attr('aria-label') == 'Go to slide 3') {
      $('#driver-seat .nav-tabs .nav-link').removeClass('active')
      $('.nav-link[data-toggle="Go to slide 3"]').addClass('active')
    }

    // $(this).addClass('active').parent().siblings().find('.nav-link').removeClass('active')
  })
})

//Set initial Values to Monthly Payment & Cash-down based on the range value
// let monthlyInitVal = $('.estimate input[data-type=monthly-payment]').val();
// let cashInitVal    = $('.estimate input[data-type=cash-down]').val();
// $('.estimate #monthly-payment').val(monthlyInitVal);
// $('.estimate #cash-down').val(cashInitVal);

// // /Chanage Monthly Payment & Cash-down when user change range type and visa versa
// $('.estimate input[type=range]').on('input', function() {
//   let target = `#${$(this).attr('data-type')}`;
//   $(target).val($(this).val())
// });
// $('.estimate input[type=number]').on('input', function() {
//   let target = `${$(this).attr('id')}`;
//   $(`[data-type=${target}]`).val($(this).val())
// })

// SET INITAIL VALUES FOR INPUT BASED ON INPUT RANGE VALUE
$('input[type=number]').each(function() {
  let intialVal = $(this).parent().siblings('input[type=range]').val();
  $(this).attr('value', intialVal)
})
$('.range-val').each(function() {
  let intialVal = $(this).parent().siblings('input[type=range]').val();
  $(this).text(intialVal);
})


// Change input number when changing range value
$('input[type=number]').parents().siblings('input[type=range]').each(function() {
  $(this).on('input', function() {
    $(this).siblings().find('input[type=number]').val($(this).val())
  })
})
$('.range-val').parents().siblings('input[type=range]').each(function() {
  $(this).on('input', function() {
    $(this).siblings().find('.range-val').text($(this).val())
  })
})

//change range input when hardcode input value
$('input[type=number]').each(function() {
  $(this).on('input', function() {
    $(this).parents().siblings('input[type=range]').val($(this).val())
  })
}) 

// Add Class Active to to checkbox container 
$('aside .form-check').on('click', function(e) {
  if($(this).find('input').attr('checked')) {
    $(this).find('input').removeAttr('checked');
    $(this).removeClass('active')
  } else {
    $(this).find('input').attr('checked', 'checked');
    $(this).addClass('active')
  }
})

// Show & hide adjust terms box
$('#results .card .adjust-terms').on('click', function(e) {
  e.preventDefault()
  $(this).parents('.card-body').find('.terms-box').addClass('show')
})
$('#results .card .terms-box .arrow-down').on('click', function(e) {
  e.preventDefault()
  $(this).parents('.terms-box').removeClass('show')
});

// Show mobile filter when clicking on "filter button"
$('.mobile-filter #filter').on('click', function() {
  $('aside.filter').addClass('show');
  $('html, body').css('overflow', 'hidden')
})
// Hide mobile filter when clicking on "X" icon
$('aside.filter .filter-head .icon').on('click', function() {
  $('aside.filter').removeClass('show');
  $('html, body').css('overflow-y', 'scroll')
})

