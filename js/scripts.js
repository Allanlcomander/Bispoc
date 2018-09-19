// to hide and show content in the more community section wen you click on the prefered continent.
$(document).ready(function () {
  $("#africaclick").click(function() {
  $("#afric").show();
  $("#africahide").toggle();
});
$("#americlick").click(function() {
$("#americ").show();
$("#amerihide").toggle();
});
$("#euroclick").click(function() {
$("#euric").show();
$("#eurohide").toggle();
});
$("#asiaclick").click(function() {
$("#asaic").show();
$("#asiahide").toggle();
});
})
