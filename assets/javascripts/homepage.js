$(document).ready(function() {
  $(".list-item").click(function() {
    $(this).parent().find(".js-info-click").toggle(1000);
  });
});