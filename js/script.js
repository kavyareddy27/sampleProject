function openPage(event, performAction){
    var i, tabcontent, tablinks;
    tabcontent = $(".tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = $(".tablinks");
    for (i = 0; i < tabcontent.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    $("#"+performAction).style.display = "block";
    evt.currentTarget.className += " active";
}
$( document ).ready(function() {
  // Handler for .ready() called.
  $("#pd").onclick(function(event){openPage(event,"Personal Details")});
});