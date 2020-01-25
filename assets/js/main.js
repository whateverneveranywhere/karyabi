// In your Javascript (external .js resource or <script> tag)
$(document).ready(function() {
    $('.js-example-basic-single').select2();
});

$(document).ready(function() {
    $('.js-example-basic-multiple').select2({
        maximumSelectionLength: 2

    });

});

$('.js-data-example-ajax').select2({
    ajax: {
      url: 'https://api.github.com/search/repositories',
      dataType: 'json'
      // Additional AJAX parameters go here; see the end of this chapter for the full code of this example
    }
  });

  
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })