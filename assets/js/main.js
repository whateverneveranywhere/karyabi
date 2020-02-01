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

  
function doit() {

  html2canvas($('#capture')[0], {
    scale:1
  }).then(function(canvas) {
    /*
    var a = document.createElement('a');
    a.href = canvas.toDataURL("image/png");
    a.download = 'myfile.png';
    a.click();
*/

var img = document.createElement('img');
 img.src = canvas.toDataURL("image/png");

document.getElementById("capture").appendChild(img);   
var doc = new jsPDF();
var imgData = img;
doc.addImage(canvas.toDataURL("image/jpeg"), 'PNG', 0, 40, 0, 200);
document.getElementById("atest").href=doc.output('datauristring');                
                document.getElementById("atest").click();
                

  });

}





/*








*/ 