$(document).ready(function () {
$(".page_content--children-card #children-card").slider({
  range: "min",
  step: 1,
  min: 1000,
  max: 5000,
  value: 1000,
  slide: function (event, ui) {
      $("#children-card_text").val(ui.value.toLocaleString('ru-RU'));
  }
});
});