$(document).ready(function(){
  $("#form1").submit(function(event) {
    const person1Input = $("input#person1").val();
  
  $(".person1").text(person1Input);

  $("#letter").show();

  event.preventDefault();
  });
});