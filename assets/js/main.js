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
    scale:3
  }).then(function(canvas) {
    /*
    var a = document.createElement('a');
    a.href = canvas.toDataURL("image/png");
    a.download = 'myfile.png';
    a.click();
*/


var imgData = canvas.toDataURL('image/jpg');
var imgWidth = 210; 
var pageHeight = 295;  
var imgHeight = canvas.height * imgWidth / canvas.width;
var heightLeft = imgHeight;
var doc = new jsPDF('p', 'mm','a4', true);
var position = 19; // give some top padding to first page

doc.addImage(imgData, 'JPG', 0, position, imgWidth, imgHeight,'','FAST');
heightLeft -= pageHeight;

while (heightLeft >= 0) {
  position += heightLeft - imgHeight; // top padding for other pages
  doc.addPage();
  doc.addImage(imgData, 'JPG', 0, position, imgWidth, imgHeight,'','FAST');
  heightLeft -= pageHeight;
}
doc.save( 'رزومه-دانشگاه-تهران.pdf');
  });

}





/*








*/ 